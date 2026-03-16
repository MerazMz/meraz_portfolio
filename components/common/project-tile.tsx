import Image from "next/image";
import React, { useState } from "react";
import { IProject } from "../../constants";

const ProjectTile = ({
  project,
  animationEnabled,
}: {
  project: IProject;
  animationEnabled: boolean;
}) => {
  const { name, tech, image, blurImage, description, url, githubUrl, gradient: [stop1, stop2] } = project;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => window.open(url, "_blank")}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden rounded-3xl cursor-pointer snap-start flex-shrink-0"
      style={{
        width: animationEnabled ? "calc(100vw - 2rem)" : "calc(100vw - 4rem)",
        maxWidth: "38rem",
        height: "22rem",
        border: `1px solid ${hovered ? "rgba(200,200,200,0.5)" : "#676767"}`,
        transition: "border-color 350ms ease",
        background: "#171717",
      }}
    >


      {/* Background gradient from project colors — subtle */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${stop1}18 0%, transparent 60%)`,
        }}
      />

      {/* Project screenshot — rotated like original, right side */}
      <div
        className="absolute z-10 pointer-events-none"
        style={{
          right: "1.5rem",
          top: 0,
          bottom: 0,
          width: "17rem",
          transform: "rotate(-22.5deg)",
          transformOrigin: "top right",
          opacity: hovered ? 0.9 : 0.75,
          transition: "opacity 400ms ease, transform 400ms cubic-bezier(0.22, 1, 0.36, 1)",
          ...(hovered ? { transform: "rotate(-22.5deg) scale(1.04)" } : {}),
        }}
      >
        <Image
          placeholder="blur"
          blurDataURL={blurImage}
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          objectPosition="top left"
          className="rounded-xl shadow-2xl"
        />
      </div>

      {/* Right-side fade so image blends into card */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, #171717 38%, rgba(23,23,23,0) 65%, #171717 100%)",
        }}
      />

      {/* Content — left side */}
      <div className="relative z-20 flex flex-col justify-between h-full p-6 w-[48%]">

        {/* Top label */}
        <div className="flex items-center gap-2 text-[9px] tracking-widest font-outfit text-[#676767]">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: stop2 }}
          />
          PROJECT
        </div>

        {/* Name + description */}
        <div>
          <h1
            className="text-2xl font-bold font-outfit leading-tight mb-2"
            style={{ color: "#f5f5f5" }}
          >
            {name}
          </h1>

          <p
            className="text-[15px] font-outfit leading-relaxed break-words overflow-hidden"
            style={{
              color: "#888",
              opacity: hovered ? 1 : 0.75,
              transition: "opacity 300ms ease",
              maxWidth: "100%",
              wordBreak: "break-word",
            }}
          >
            {description}
          </p>
        </div>

        {/* Bottom: tech icon row + view action */}
        <div className="flex flex-col gap-3">

          {/* Tech icons — small row, always visible */}
          <div className="flex items-center gap-2">
            {tech.slice(0, 5).map((t) => (
              <div
                key={t}
                title={t}
                style={{
                  opacity: hovered ? 1 : 0.6,
                  transform: hovered ? "translateY(0)" : "translateY(2px)",
                  transition: "opacity 300ms ease, transform 300ms ease",
                }}
              >
                <Image
                  src={`/projects/tech/${t}.svg`}
                  alt={t}
                  width={20}
                  height={20}
                  objectFit="contain"
                />
              </div>
            ))}
          </div>

          {/* Action row */}
          <div className="flex items-center gap-3">
            <div
              className="flex items-center gap-1.5 font-outfit text-[10px] tracking-widest"
              style={{
                color: hovered ? "#fff" : "#676767",
                transition: "color 300ms ease",
              }}
            >
              <span>VIEW PROJECT</span>
              <span
                style={{
                  transform: hovered ? "translate(3px, -3px)" : "translate(0,0)",
                  transition: "transform 300ms cubic-bezier(0.22, 1, 0.36, 1)",
                  display: "inline-block",
                }}
              >
                ↗
              </span>
            </div>

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-center rounded-full"
                style={{
                  width: 24,
                  height: 24,
                  border: "1px solid #333",
                  background: "rgba(255,255,255,0.04)",
                  color: "#676767",
                  transition: "border-color 250ms ease, color 250ms ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#aaa";
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#333";
                  (e.currentTarget as HTMLElement).style.color = "#676767";
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
