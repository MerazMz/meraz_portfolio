import React, { useEffect, useRef, useState } from "react";
import clockImage from "../../public/clock.png";

interface AnalogClockProps {
  running?: boolean;
  smooth?: boolean;
}

const AnalogClock: React.FC<AnalogClockProps> = ({
  running = true,
  smooth = false,
}) => {
  const [mounted, setMounted] = useState(false);

  const hourHandRef = useRef<SVGGElement>(null);
  const minHandRef = useRef<SVGGElement>(null);
  const secHandRef = useRef<SVGGElement>(null);

  useEffect(() => {
    setMounted(true);

    if (!running) return;

    let frameId: number;
    let intervalId: NodeJS.Timeout;

    const updateSmooth = () => {
      const time = new Date();

      const h = time.getHours();
      const m = time.getMinutes();
      const s = time.getSeconds();
      const ms = time.getMilliseconds();

      const secAngle = (s + ms / 1000) * 6;
      const minAngle = (m + s / 60 + ms / 60000) * 6;
      const hourAngle = ((h % 12) + m / 60 + s / 3600) * 30;

      secHandRef.current?.setAttribute("transform", `rotate(${secAngle})`);
      minHandRef.current?.setAttribute("transform", `rotate(${minAngle})`);
      hourHandRef.current?.setAttribute("transform", `rotate(${hourAngle})`);

      frameId = requestAnimationFrame(updateSmooth);
    };

    const updateTick = () => {
      const time = new Date();

      const h = time.getHours();
      const m = time.getMinutes();
      const s = time.getSeconds();

      const secAngle = s * 6;
      const minAngle = (m + s / 60) * 6;
      const hourAngle = ((h % 12) + m / 60) * 30;

      secHandRef.current?.setAttribute("transform", `rotate(${secAngle})`);
      minHandRef.current?.setAttribute("transform", `rotate(${minAngle})`);
      hourHandRef.current?.setAttribute("transform", `rotate(${hourAngle})`);
    };

    if (smooth) {
      frameId = requestAnimationFrame(updateSmooth);
    } else {
      updateTick();
      intervalId = setInterval(updateTick, 1000);
    }

    return () => {
      cancelAnimationFrame(frameId);
      clearInterval(intervalId);
    };
  }, [running, smooth]);

  if (!mounted) {
    return <div style={{ width: "100%", maxWidth: "400px", aspectRatio: "1/1" }} />;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "1rem" }}>
      <svg viewBox="-100 -100 200 200" style={{ width: "100%", maxWidth: "400px" }}>
        <defs>
          <filter id="handShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="2" dy="3" stdDeviation="2" floodColor="#000" floodOpacity="0.6" />
          </filter>
        </defs>

        <image href={clockImage.src} x="-100" y="-100" height="200" width="200" />

        <g filter="url(#handShadow)">
          <g ref={hourHandRef}>
            <path d="M -3 0 L -2 -35 L 0 -45 L 2 -35 L 3 0 Z" fill="#999" />
            <path d="M -1.5 0 L -1 -33 L 0 -41 L 1 -33 L 1.5 0 Z" fill="#fff" />
          </g>

          <g ref={minHandRef}>
            <path d="M -2.5 0 L -1.5 -62 L 0 -72 L 1.5 -62 L 2.5 0 Z" fill="#999" />
            <path d="M -1.2 0 L -0.8 -60 L 0 -68 L 0.8 -60 L 1.2 0 Z" fill="#fff" />
          </g>

          <g ref={secHandRef}>
            <line x1="0" y1="18" x2="0" y2="-75" stroke="#ccc" strokeWidth="1" />
            <circle cx="0" cy="12" r="2.5" fill="#ccc" />
          </g>
        </g>

        <circle r="4" fill="#666" filter="url(#handShadow)" />
        <circle r="2.5" fill="#fff" />
        <circle r="1" fill="#222" />
      </svg>
    </div>
  );
};

export default AnalogClock;