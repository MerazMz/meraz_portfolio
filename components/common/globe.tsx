"use client"

import { useEffect, useRef } from "react"
import createGlobe from "cobe"

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let phi = 0
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
      phi: 0,
      theta: 0.2,
      dark: 1,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.8,
      baseColor: [1, 1, 1],
      markerColor: [1, 0.4, 0],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.05 }, // San Francisco
        { location: [40.7128, -74.006], size: 0.05 }, // New York
        { location: [35.6895, 139.6917], size: 0.05 }, // Tokyo
        { location: [48.8566, 2.3522], size: 0.05 }, // Paris
      ],
      onRender: (state: any) => {
        state.phi = phi
        phi += 0.005
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