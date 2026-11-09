"use client";

import type { ReactNode } from "react";

interface AppleStageProps {
  children: ReactNode;
  tone?: "light" | "noir";
  glow?: boolean;
  aspect?: "video" | "wide" | "tall" | "square" | "auto";
  maxWidth?: number;
}

const aspectClass = {
  video: "aspect-[16/9]",
  wide: "aspect-[21/9]",
  tall: "aspect-[4/5]",
  square: "aspect-square",
  auto: "",
};

export function AppleStage({
  children,
  tone = "light",
  glow = false,
  aspect = "video",
  maxWidth = 980,
}: AppleStageProps) {
  const bg =
    tone === "noir"
      ? "bg-gradient-to-b from-[#1b1b1f] to-[#0b0b0f]"
      : "bg-gradient-to-b from-[#f5f5f7] to-[#eaeaef]";

  return (
    <div
      className="relative w-full flex justify-center"
      style={{ maxWidth: `${maxWidth}px`, marginInline: "auto" }}
    >
      {glow && (
        <div
          aria-hidden="true"
          className="absolute inset-x-8 top-10 bottom-0 rounded-[inherit] blur-3xl opacity-60 pointer-events-none"
          style={{
            background:
              tone === "noir"
                ? "radial-gradient(60% 60% at 50% 50%, rgba(0,113,227,0.25), transparent 70%)"
                : "radial-gradient(60% 60% at 50% 50%, rgba(0,113,227,0.14), transparent 70%)",
          }}
        />
      )}
      <div
        className={`relative w-full overflow-hidden rounded-[28px] ${aspectClass[aspect]} ${bg} ring-1 ring-black/5`}
      >
        {children}
      </div>
    </div>
  );
}
