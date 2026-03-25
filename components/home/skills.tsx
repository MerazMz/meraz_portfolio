import { MENULINKS, SKILLS } from "../../constants";
import Image from "next/image";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const categoryMeta: Record<string, { label: string; dot: string; description: string }> = {
  FRONTEND: {
    label: "Frontend",
    dot: "#a78bfa",  // purple
    description: "Building interfaces users love to interact with.",
  },
  BACKEND: {
    label: "Backend",
    dot: "#34d399",  // green
    description: "Scalable APIs and server-side logic that just works.",
  },
  "DEVOPS & TOOLS": {
    label: "DevOps & Tools",
    dot: "#60a5fa",  // blue
    description: "Shipping reliably with containers, Git, and CI/CD.",
  },
};

const SkillsSection = () => {
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);
  const [willChange, setwillChange] = useState(false);

  const initRevealAnimation = (
    targetSection: MutableRefObject<HTMLDivElement>
  ): ScrollTrigger => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );
    return ScrollTrigger.create({
      trigger: targetSection.current.querySelector(".skills-wrapper"),
      start: "100px bottom",
      end: `center center`,
      animation: revealTl,
      scrub: 0,
      onToggle: (self) => setwillChange(self.isActive),
    });
  };

  useEffect(() => {
    const revealAnimationRef = initRevealAnimation(targetSection);
    return revealAnimationRef.kill;
  }, [targetSection]);

  const renderSkillCard = (categoryKey: string, skills: string[]): React.ReactNode => {
    const meta = categoryMeta[categoryKey];
    return (
      <div
        key={categoryKey}
        className="seq flex-1 min-w-[240px] flex flex-col gap-5 rounded-3xl p-6"
        style={{
          background: "#171717",
          border: "1px solid #2a2a2a",
          transition: "border-color 300ms ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "#676767";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "#2a2a2a";
        }}
      >
        {/* Card header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: meta.dot }}
            />
            <span className="text-[14px] tracking-widest font-outfit text-[#676767] uppercase">
              {meta.label}
            </span>
          </div>
          <p className="text-[12px] font-outfit text-[#555] leading-relaxed">
            {meta.description}
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#2a2a2a]" />

        {/* Skill icons grid */}
        <div className={`grid grid-cols-4 gap-4 ${willChange ? "will-change-opacity" : ""}`}>
          {skills.map((skill) => (
            <div
              key={skill}
              title={skill}
              className="flex flex-col items-center gap-1.5 group cursor-default"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid #2a2a2a",
                  transition: "border-color 250ms ease, background 250ms ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#555";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#2a2a2a";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                }}
              >
                <Image
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={24}
                  height={24}
                  objectFit="contain"
                  unoptimized
                />
              </div>
              <span className="text-[8px] font-outfit text-gray-400 tracking-wide uppercase group-hover:text-[#aaa] transition-colors duration-200 text-center leading-tight">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="relative">
      <div
        className="w-full relative select-none mb-24 section-container py-12 flex flex-col justify-center"
        id={MENULINKS[2].ref}
        ref={targetSection}
      >
        <div className="flex flex-col skills-wrapper">

          {/* Section title */}
          <div className="flex flex-col mb-12">
            <p className="section-title-sm seq font-outfit">SKILLS</p>
            <h1 className="section-heading seq mt-2 font-outfit">My Skills</h1>
            <h2 className="text-2xl md:max-w-2xl w-full seq mt-2 font-outfit">
              Technologies I work with to build{" "}
              <span className="font-nyght italic text-[#676767]">end-to-end products.</span>
            </h2>
          </div>

          {/* Skill cards */}
          <div className="flex flex-wrap gap-4">
            {renderSkillCard("FRONTEND", SKILLS.frontend)}
            {renderSkillCard("BACKEND", SKILLS.backend)}
            {renderSkillCard("DEVOPS & TOOLS", SKILLS.devops)}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
