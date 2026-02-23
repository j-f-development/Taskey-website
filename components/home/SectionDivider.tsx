"use client";

interface SectionDividerProps {
  from?: string;
  to?: string;
  variant?: "wave" | "curve" | "slant" | "dot-fade";
  flip?: boolean;
  className?: string;
}

export default function SectionDivider({
  from = "white",
  to = "#f9fafb",
  variant = "wave",
  flip = false,
  className = "",
}: SectionDividerProps) {
  const transform = flip ? "scaleY(-1)" : undefined;

  if (variant === "wave") {
    return (
      <div className={`relative w-full overflow-hidden leading-[0] ${className}`} style={{ transform }}>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[60px] sm:h-[80px] md:h-[100px] block"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`wave-grad-${from}-${to}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={from} />
              <stop offset="100%" stopColor={to} />
            </linearGradient>
          </defs>
          <path
            d="M0,0 L0,60 Q360,120 720,60 Q1080,0 1440,60 L1440,0 Z"
            fill={from}
          />
          <path
            d="M0,60 Q360,120 720,60 Q1080,0 1440,60 L1440,120 L0,120 Z"
            fill={to}
          />
        </svg>
      </div>
    );
  }

  if (variant === "curve") {
    return (
      <div className={`relative w-full overflow-hidden leading-[0] ${className}`} style={{ transform }}>
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="w-full h-[50px] sm:h-[70px] md:h-[90px] block"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 L0,40 Q720,100 1440,40 L1440,0 Z"
            fill={from}
          />
          <path
            d="M0,40 Q720,100 1440,40 L1440,100 L0,100 Z"
            fill={to}
          />
        </svg>
      </div>
    );
  }

  if (variant === "slant") {
    return (
      <div className={`relative w-full overflow-hidden leading-[0] ${className}`} style={{ transform }}>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-[40px] sm:h-[60px] md:h-[70px] block"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="0,0 1440,0 1440,30 0,80" fill={from} />
          <polygon points="0,80 1440,30 1440,80" fill={to} />
        </svg>
      </div>
    );
  }

  if (variant === "dot-fade") {
    return (
      <div className={`relative w-full h-16 sm:h-20 md:h-24 overflow-hidden ${className}`} style={{ background: `linear-gradient(to bottom, ${from}, ${to})`, transform }}>
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dot-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1.5" fill="#2563eb" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dot-pattern)" />
          </svg>
        </div>
      </div>
    );
  }

  return null;
}
