import React from "react";

const text = "View Project View Project".split("");

const ViewProject: React.FC = () => {
  return (
    <button
      className="group relative w-[100px] h-[100px] rounded-full overflow-hidden 
      bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888]
      grid place-content-center font-semibold text-white 
      transition-transform duration-200 hover:scale-105 active:scale-95"
    >
      {/* Rotating text */}
      <p className="absolute inset-0 animate-[spin_8s_linear_infinite]">
        {text.map((char, i) => (
          <span
            key={i}
            style={{ transform: `rotate(${18 * i}deg)` }}
            className="absolute inset-[7px]"
          >
            {char}
          </span>
        ))}
      </p>

      {/* Inner circle */}
      <div
        className="relative w-[40px] h-[40px] rounded-full bg-[#212121]
        flex items-center justify-center overflow-hidden text-[#dc2743]
        group-hover:text-white"
      >
        {/* Main icon */}
        <svg
          viewBox="0 0 16 16"
          width="22"
          className="transition-transform duration-300 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"
        >
          <path
            fill="currentColor"
            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42..."
          />
        </svg>

        {/* Hover icon */}
        <svg
          viewBox="0 0 16 16"
          width="22"
          className="absolute translate-x-[-150%] translate-y-[150%]
          transition-transform duration-300 delay-100
          group-hover:translate-x-0 group-hover:translate-y-0"
        >
          <path
            fill="currentColor"
            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42..."
          />
        </svg>
      </div>
    </button>
  );
};

export default ViewProject;