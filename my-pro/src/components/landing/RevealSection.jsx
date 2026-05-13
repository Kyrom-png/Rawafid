import React from "react";

const lines = [
  "في روافد...",
  "حين تجتمع الأصوات",
  "وتبدأ الحكاية",
  "يولد النور",
];

export default function RevealSection() {
  return (
    <section
      id="reveal"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#000",
      }}
    >
      {/* Subtle bg texture */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 50% 50%, rgba(12,8,1,0.8) 0%, #000 70%)",
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.9) 100%)",
      }} />

      <div className="relative z-10">
        {/* Top separator */}
        <div style={{ padding: "0 2rem" }}>
          <Separator />
        </div>

        {/* Lines — each full screen */}
        {lines.map((line, i) => (
          <div
            key={i}
            style={{
              minHeight: "70vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              padding: "4rem 2rem",
            }}
          >
            {/* Scene number */}
            <div style={{
              position: "absolute",
              top: "2rem",
              right: "2rem",
              fontFamily: "'Cairo', sans-serif",
              fontSize: "0.65rem",
              color: "rgba(200,160,40,0.2)",
              letterSpacing: "0.5em",
            }}>
              {String(i + 1).padStart(2, "0")}
            </div>

            {/* Side accent */}
            <div style={{
              position: "absolute",
              [i % 2 === 0 ? "right" : "left"]: "5%",
              top: 0,
              bottom: 0,
              width: 1,
              background: "linear-gradient(to bottom, transparent, rgba(200,160,40,0.2), transparent)",
            }} />

            <p
              className="reveal-on-scroll"
              style={{
                fontFamily: i === 0 || i === 3 ? "'Amiri', serif" : "'Cairo', sans-serif",
                fontSize: i === 0
                  ? "clamp(2.5rem, 9vw, 6.5rem)"
                  : i === 3
                  ? "clamp(3.5rem, 12vw, 8rem)"
                  : "clamp(1.6rem, 5vw, 3.5rem)",
                fontWeight: i === 0 || i === 3 ? 700 : 300,
                textAlign: "center",
                lineHeight: 1.3,
                letterSpacing: i === 1 || i === 2 ? "0.15em" : "0.04em",
                ...(i === 0 || i === 3
                  ? {
                      background: "linear-gradient(90deg, #c9a84c, #f0d080, #c9a84c, #f0d080, #c9a84c)",
                      backgroundSize: "200% auto",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      animation: "shimmerGold 4s linear infinite",
                      filter: "drop-shadow(0 0 30px rgba(200,160,40,0.35))",
                    }
                  : {
                      color: "rgba(248,244,236,0.7)",
                      textShadow: "0 0 30px rgba(255,255,255,0.06)",
                    }),
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              {line}
            </p>

            {/* Gold underline on shimmer lines */}
            {(i === 0 || i === 3) && (
              <div style={{
                position: "absolute",
                bottom: "2.5rem",
                left: "25%",
                right: "25%",
                height: 1,
                background: "linear-gradient(to right, transparent, rgba(200,160,40,0.5), transparent)",
              }} />
            )}
          </div>
        ))}

        {/* Bottom separator */}
        <div style={{ padding: "0 2rem" }}>
          <Separator />
        </div>
      </div>

      <style>{`
        @keyframes shimmerGold {
          from { background-position: -200% center; }
          to { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
}

function Separator() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "2rem 0" }}>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, rgba(200,160,40,0.5), transparent)" }} />
      <div style={{
        width: 8,
        height: 8,
        background: "#c9a84c",
        transform: "rotate(45deg)",
        boxShadow: "0 0 10px rgba(200,160,40,0.8), 0 0 20px rgba(200,160,40,0.4)",
      }} />
      <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, rgba(200,160,40,0.5), transparent)" }} />
    </div>
  );
}