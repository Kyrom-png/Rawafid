import React, { useEffect, useRef, useState } from "react";

const trailerLines = [
  {
    text: "في روافد...",
    sub: null,
    size: "clamp(2.5rem, 8vw, 6rem)",
    family: "'Amiri', serif",
    weight: 700,
    color: "shimmer",
  },
  {
    text: "حين تجتمع الأصوات",
    sub: null,
    size: "clamp(1.5rem, 4.5vw, 3.2rem)",
    family: "'Tajawal', sans-serif",
    weight: 300,
    color: "white",
  },
  {
    text: "وتبدأ الحكاية",
    sub: null,
    size: "clamp(1.5rem, 4.5vw, 3.2rem)",
    family: "'Tajawal', sans-serif",
    weight: 300,
    color: "white",
  },
  {
    text: "يولد النور",
    sub: null,
    size: "clamp(3rem, 10vw, 7.5rem)",
    family: "'Amiri', serif",
    weight: 700,
    color: "shimmer",
  },
];

export default function TrailerReveal() {
  return (
    <section
      className="relative"
      style={{
        zIndex: 2,
        background: "#000",
        padding: "0",
      }}
    >
      {/* Top separator */}
      <div className="cinematic-divider w-full opacity-60" />

      {/* Lines — each is a full-height block */}
      <div className="flex flex-col">
        {trailerLines.map((line, i) => (
          <div
            key={i}
            className="cinematic-section relative overflow-hidden"
            style={{
              minHeight: "70vh",
              background:
                i % 2 === 0
                  ? "radial-gradient(ellipse at 60% 50%, rgba(18,12,2,0.9) 0%, #000 70%)"
                  : "radial-gradient(ellipse at 40% 50%, rgba(12,8,1,0.9) 0%, #000 70%)",
            }}
          >
            {/* Side accent line */}
            <div
              className="absolute top-0 bottom-0 pointer-events-none opacity-30"
              style={{
                [i % 2 === 0 ? "right" : "left"]: "8%",
                width: "1px",
                background:
                  "linear-gradient(to bottom, transparent, rgba(200,160,40,0.5), transparent)",
              }}
            />

            {/* Scene number */}
            <div
              className="absolute top-8 left-8 text-yellow-700/30 text-xs tracking-widest"
              style={{ fontFamily: "'Tajawal', sans-serif", letterSpacing: "0.4em" }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>

            <div
              className={`reveal-hidden reveal-delay-${i + 1} relative z-10 text-center px-8 max-w-5xl mx-auto`}
            >
              {line.color === "shimmer" ? (
                <p
                  className="shimmer-gold"
                  style={{
                    fontFamily: line.family,
                    fontSize: line.size,
                    fontWeight: line.weight,
                    lineHeight: 1.2,
                    letterSpacing: "0.04em",
                  }}
                >
                  {line.text}
                </p>
              ) : (
                <p
                  style={{
                    fontFamily: line.family,
                    fontSize: line.size,
                    fontWeight: line.weight,
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: 1.4,
                    letterSpacing: "0.12em",
                    textShadow: "0 0 40px rgba(255,255,255,0.06)",
                  }}
                >
                  {line.text}
                </p>
              )}
            </div>

            {/* Bottom glow for shimmer lines */}
            {line.color === "shimmer" && (
              <div
                className="absolute bottom-0 left-1/4 right-1/4 h-px opacity-40"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(200,160,40,0.8), transparent)",
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Bottom separator */}
      <div className="cinematic-divider w-full opacity-60" />
    </section>
  );
}