"use client";

import { useEffect, useState } from "react";

export default function PageLoadAnimation() {
  const [phase, setPhase] = useState<"falling" | "landing" | "done">("falling");

  useEffect(() => {
    // Add class to body so Hero dot can react via CSS
    document.body.classList.add("dot-intro-falling");

    // Dot lands after 1800ms → trigger squash + color flip
    const landTimer = setTimeout(() => {
      document.body.classList.remove("dot-intro-falling");
      document.body.classList.add("dot-intro-landing");
      setPhase("landing");
    }, 1800);

    const doneTimer = setTimeout(() => {
      document.body.classList.remove("dot-intro-landing");
      setPhase("done");
    }, 2800);

    return () => {
      clearTimeout(landTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`page-load-overlay${phase === "landing" ? " landing" : ""}`}
      style={{
        position: "fixed",
        inset: 0,
        background: "#1e3a8a",
        zIndex: 9998,
        pointerEvents: "none",
      }}
    />
  );
}
