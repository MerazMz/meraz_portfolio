import React, { useEffect, useRef, useState } from "react";
import styles from "./ProjectCursor.module.scss";

const LABEL = "VISIT PROJECT • VISIT PROJECT • ";

const ProjectCursor = ({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLElement>;
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const pos = useRef({ x: -200, y: -200 });
  const raf = useRef<number>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);

    container.addEventListener("mousemove", onMove);
    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${pos.current.x}px`;
        cursorRef.current.style.top = `${pos.current.y}px`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    return () => {
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, [containerRef]);

  /* Build the circular SVG text path */
  const r = 46;
  const cx = 55;
  const cy = 55;
  const circumference = 2 * Math.PI * r;

  return (
    <div
      ref={cursorRef}
      className={`${styles.cursor} ${visible ? styles.visible : styles.hidden}`}
    >
      <div className={styles.cursorInner}>
        {/* Rotating text ring */}
        <svg
          className={styles.textRing}
          viewBox="0 0 110 110"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="textCircle"
              d={`M ${cx},${cy} m -${r},0 a ${r},${r} 0 1,1 ${2 * r},0 a ${r},${r} 0 1,1 -${2 * r},0`}
            />
          </defs>
          {/* Dark ring background */}
          <circle
            cx={cx}
            cy={cy}
            r={r + 7}
            fill="rgba(0,0,0,0.82)"
          />
          <circle
            cx={cx}
            cy={cy}
            r={r + 7}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
          <text
            fill="white"
            fontSize="11"
            fontFamily="'Inter', sans-serif"
            fontWeight="600"
            letterSpacing="2.5"
            textLength={circumference}
            lengthAdjust="spacing"
          >
            <textPath href="#textCircle">{LABEL}</textPath>
          </text>
        </svg>

        {/* Centre eye icon */}
        <div className={styles.eyeCircle}>
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="12"
              r="3"
              stroke="white"
              strokeWidth="1.8"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProjectCursor;
