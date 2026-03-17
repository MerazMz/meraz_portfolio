import { EMAIL, SOCIAL_LINKS } from "../../constants";
import React from "react";

const Footer = () => {
  const { ref: footerRef } = { ref: "contact" };

  const socialLabels: Record<string, string> = {
    github: "GitHub",
    linkedin: "LinkedIn",
    instagram: "Instagram",
    leetcode: "LeetCode",
  };

  return (
    <footer
      id={footerRef}
      className="w-full relative select-none"
      style={{ background: "#131313a2" }}
    >
      {/* Top border line */}
      <div className="w-full h-px bg-[#676767] opacity-40" />

      <div className="max-w-7xl mx-auto px-5 py-10 sm:px-8 sm:py-16 flex flex-col items-center gap-8 sm:gap-12">

        <div className="text-center">
          <p className="text-[11px] tracking-widest font-outfit text-[#676767] mb-3">
            AVAILABLE FOR WORK
          </p>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-outfit text-white leading-tight">
            Got a project in mind?
          </h1>
          <p className="text-2xl sm:text-4xl md:text-5xl font-nyght italic text-[#676767] leading-tight">
            Let&apos;s make it happen.
          </p>
        </div>

        {/* Email CTA */}
        <a
          href={`mailto:${EMAIL}`}
          className="group relative overflow-hidden flex items-center gap-3 px-8 py-3 rounded-full font-outfit text-sm tracking-widest font-semibold text-black bg-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-[1px]"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            {/* {EMAIL} */}
            Let's Talk
          </span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
          {/* Shine sweep */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        </a>

        {/* Divider */}
        <div className="w-full h-px bg-[#676767] opacity-20" />

        {/* Bottom row */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-6">

          {/* Left: name + credit */}
          <div className="text-center sm:text-left">
            <p className="font-bold font-outfit text-white text-lg leading-tight">
              Meraj <span className="font-nyght italic text-[#676767]">Haque</span>
            </p>
            <p className="text-[10px] font-outfit text-[#676767] mt-1 tracking-wide">
              Designed &amp; developed with ❤️
            </p>
          </div>

          {/* Center: social links */}
          <div className="flex items-center gap-3">
            {Object.keys(SOCIAL_LINKS).map((el) => (
              <a
                key={el}
                href={SOCIAL_LINKS[el as keyof typeof SOCIAL_LINKS]}
                target="_blank"
                rel="noreferrer"
                title={socialLabels[el] ?? el}
                className="flex items-center justify-center rounded-full font-outfit text-[9px] tracking-widest uppercase"
                style={{
                  width: 36,
                  height: 36,
                  border: "1px solid #333",
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
                {/* Social icon via public svg */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/social/${el}.svg`}
                  alt={el}
                  width={16}
                  height={16}
                  style={{ filter: "invert(0.5) brightness(1)", opacity: 0.7 }}
                />
              </a>
            ))}
          </div>

          {/* Right: resume */}
          <a
            href="/Meraj_Haque.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full font-outfit text-[10px] tracking-widest uppercase"
            style={{
              border: "1px solid #333",
              color: "#aaa",
              transition: "border-color 250ms ease, color 250ms ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#aaa";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#333";
              (e.currentTarget as HTMLElement).style.color = "#aaa";
            }}
          >
            Resume ↗
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
