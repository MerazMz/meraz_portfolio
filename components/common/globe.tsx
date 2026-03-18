"use client"

import { useEffect, useRef } from "react"
import createGlobe from "cobe"

export default function Globe({ activeLocation }: { activeLocation?: [number, number] | null }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const currentPhi = useRef(0)
  const currentTheta = useRef(0.2)
  const activeLocationRef = useRef<[number, number] | null>(null)

  useEffect(() => {
    activeLocationRef.current = activeLocation || null
  }, [activeLocation])

  useEffect(() => {
    let width = 0

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth
      }
    }

    window.addEventListener("resize", onResize)
    onResize()

    if (!canvasRef.current) return

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: currentPhi.current,
      theta: currentTheta.current,
      dark: 1,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.8,
      baseColor: [1, 1, 1],
      markerColor: [1, 0.4, 0],
      glowColor: [0.2, 0.2, 0.2],
      markers: [
        { location: [28.6139, 77.2090], size: 0.06, color: [0, 1, 0] }, // India (green)
        { location: [40.7128, -74.0060], size: 0.06, color: [1, 0, 0] }, // USA (red)
        { location: [25.2048, 55.2708], size: 0.06, color: [1, 0.5, 0] }, // UAE (orange)
        { location: [51.5074, -0.1278], size: 0.06, color: [0, 0.5, 1] }, // UK (blue)
      ],
      onRender: (state: any) => {
        let targetPhi = currentPhi.current;
        let targetTheta = 0.2; // default theta

        if (activeLocationRef.current) {
          const [lat, lng] = activeLocationRef.current;
          // Offset phi so the location is centered
          targetPhi = Math.PI - ((lng * Math.PI) / 180 - Math.PI / 2);
          targetTheta = (lat * Math.PI) / 180;
        }

        // Smooth rotation interpolation
        currentPhi.current += (targetPhi - currentPhi.current) * 0.05;
        currentTheta.current += (targetTheta - currentTheta.current) * 0.05;

        state.phi = currentPhi.current;
        state.theta = currentTheta.current;
        state.width = width * 2
        state.height = width * 2
      },
    })

    canvasRef.current.style.opacity = "1"

    return () => {
      globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <div className="w-full max-w-[500px] aspect-square mx-auto">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-0 transition-opacity duration-1000 rounded-full"
      />
    </div>
  )
}