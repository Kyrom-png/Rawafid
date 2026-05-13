import React, { useState } from "react";
import CornerOrnament from "./CornerOrnament";

export default function FinaleSection() {
  const [clicked, setClicked] = useState(false);
  const [flash, setFlash] = useState(false);

  const handleClick = () => {
    setFlash(true);
    setClicked(true);
    setTimeout(() => setFlash(false), 600);
    setTimeout(() => setClicked(false), 3000);
  };

  return (
    <section
      id="finale"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "radial-gradient(ellipse at 50% 60%, #1a1100 0%, #000 60%)",
      }}
    >
      {/* Flash */}
      {flash && (
        <div
          className="fixed inset-0 z-[200] pointer-events-none"
          style={{
            background: "rgba(240,208,128,0.15)",
            animation: "flashFade 0.6s ease forwards",
          }}
        />
      )}

      {/* Big glow behind text */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 55% at 50% 55%, rgba(180,130,25,0.14) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.92) 100%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 20% 80%, rgba(25,16,3,0.3) 0%, transparent 50%)" }} />

      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-40 pointer-events-none" style={{ background: "linear-gradient(to bottom, #000, transparent)" }} />

      <CornerOrnament position="tl" />
      <CornerOrnament position="tr" />
      <CornerOrnament position="bl" />
      <CornerOrnament position="br" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-10">

        {/* Decorative top */}
        <div className="reveal-on-scroll flex items-center gap-4 w-full max-w-xs">
          <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, transparent, rgba(200,160,40,0.5))" }} />
          <div style={{ width: 6, height: 6, background: "#c9a84c", transform: "rotate(45deg)", boxShadow: "0 0 8px rgba(200,160,40,0.8)" }} />
          <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, transparent, rgba(200,160,40,0.5))" }} />
        </div>

        {/* Main question */}
        <h2
          className="reveal-on-scroll"
          style={{
            fontFamily: "'Amiri', serif",
            fontSize: "clamp(2.8rem, 10vw, 8rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            background: "linear-gradient(90deg, #c9a84c, #f0d080, #e8c96a, #f0d080, #c9a84c)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmerGold 4s linear infinite",
            filter: "drop-shadow(0 0 60px rgba(200,150,30,0.45))",
            transitionDelay: "0.1s",
          }}
        >
          هل أنتم مستعدون؟
        </h2>

        {/* Sub line */}
        <p
          className="reveal-on-scroll"
          style={{
            fontFamily: "'Cairo', sans-serif",
            fontSize: "clamp(0.9rem, 2.5vw, 1.3rem)",
            fontWeight: 300,
            color: "rgba(248,244,236,0.35)",
            letterSpacing: "0.35em",
            lineHeight: 2,
            transitionDelay: "0.18s",
          }}
        >
          النور يأتي… لا يُستأذَن
        </p>

        {/* CTA Button */}
        <button
          onClick={handleClick}
          className="reveal-on-scroll"
          style={{
            position: "relative",
            overflow: "hidden",
            padding: "1.1rem 3.5rem",
            border: "1px solid rgba(200,160,40,0.5)",
            background: "transparent",
            color: clicked ? "rgba(255,255,255,0.9)" : "rgba(240,208,128,0.85)",
            fontFamily: "'Cairo', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
            letterSpacing: "0.25em",
            cursor: "pointer",
            transition: "all 0.4s ease",
            transitionDelay: "0.25s",
            boxShadow: clicked ? "0 0 30px rgba(200,160,40,0.4), 0 0 60px rgba(200,160,40,0.2)" : "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(200,160,40,0.9)";
            e.currentTarget.style.boxShadow = "0 0 20px rgba(200,160,40,0.3), 0 0 40px rgba(200,160,40,0.15)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(200,160,40,0.5)";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          {clicked ? (
            <span style={{ display: "flex", alignItems: "center", gap: "0.75rem", justifyContent: "center" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#c9a84c", display: "inline-block", animation: "pulseDot 0.8s ease-in-out infinite" }} />
              جارٍ التحضير…
            </span>
          ) : (
            "ترقبوا العرض"
          )}
        </button>

        {/* Footer text */}
        <div className="reveal-on-scroll flex flex-col items-center gap-3 mt-4" style={{ transitionDelay: "0.32s" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ width: 60, height: 1, background: "linear-gradient(to right, transparent, rgba(200,160,40,0.35))" }} />
            <div style={{ width: 4, height: 4, background: "rgba(200,160,40,0.4)", transform: "rotate(45deg)" }} />
            <div style={{ width: 60, height: 1, background: "linear-gradient(to left, transparent, rgba(200,160,40,0.35))" }} />
          </div>
          <p style={{
            fontFamily: "'Cairo', sans-serif",
            fontSize: "0.65rem",
            color: "rgba(200,160,40,0.2)",
            letterSpacing: "0.6em",
          }}>
            روافد — النور
          </p>
        </div>
      </div>

      <style>{`
        @keyframes shimmerGold {
          from { background-position: -200% center; }
          to { background-position: 200% center; }
        }
        @keyframes flashFade {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes pulseDot {
          0%,100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.5); opacity: 1; }
        }
      `}</style>
    </section>
  );
}