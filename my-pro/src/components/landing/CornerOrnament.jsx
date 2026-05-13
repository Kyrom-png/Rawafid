import React from "react";

const positions = {
  tl: { top: "1.5rem", right: "1.5rem", transform: "none" },
  tr: { top: "1.5rem", left: "1.5rem", transform: "scaleX(-1)" },
  bl: { bottom: "1.5rem", right: "1.5rem", transform: "scaleY(-1)" },
  br: { bottom: "1.5rem", left: "1.5rem", transform: "scale(-1,-1)" },
};

export default function CornerOrnament({ position = "tl" }) {
  const style = positions[position] || positions.tl;

  return (
    <div
      className="absolute pointer-events-none opacity-50"
      style={{ width: 50, height: 50, ...style }}
    >
      <svg viewBox="0 0 60 60" fill="none" width="100%" height="100%">
        <path d="M60 0 L0 0 L0 60" stroke="#c9a84c" strokeWidth="1" fill="none" />
        <path d="M45 0 L0 0 L0 45" stroke="#c9a84c" strokeWidth="0.5" opacity="0.5" fill="none" />
        <circle cx="3" cy="3" r="2" fill="#c9a84c" opacity="0.8" />
      </svg>
    </div>
  );
}