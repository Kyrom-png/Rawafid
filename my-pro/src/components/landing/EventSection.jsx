import React from "react";
import CornerOrnament from "./CornerOrnament";

function CinematicDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", width: "100%", maxWidth: 400, margin: "0 auto" }}>
      <div style={{ flex: 2, height: 1, background: "linear-gradient(to left, rgba(200,160,40,0.6), transparent)" }} />
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#c9a84c", boxShadow: "0 0 8px rgba(200,160,40,0.8)" }} />
      <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, rgba(200,160,40,0.4), transparent)", maxWidth: 40 }} />
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(200,160,40,0.5)", boxShadow: "0 0 6px rgba(200,160,40,0.5)" }} />
      <div style={{ flex: 2, height: 1, background: "linear-gradient(to right, rgba(200,160,40,0.6), transparent)" }} />
    </div>
  );
}

export default function EventSection() {
  return (
    <section
      id="event"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "radial-gradient(ellipse at 50% 40%, #130e01 0%, #000 65%)",
      }}
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(150,110,20,0.1) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.9) 100%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 20% 80%, rgba(25,16,3,0.3) 0%, transparent 50%)" }} />

      {/* Horizontal accent lines */}
      <div className="absolute pointer-events-none opacity-20" style={{ top: "22%", left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, rgba(200,160,40,0.5), transparent)" }} />
      <div className="absolute pointer-events-none opacity-20" style={{ bottom: "22%", left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, rgba(200,160,40,0.5), transparent)" }} />

      <CornerOrnament position="tl" />
      <CornerOrnament position="br" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto flex flex-col items-center gap-8">

        {/* Label */}
        <p
          className="reveal-on-scroll"
          style={{
            fontFamily: "'Cairo', sans-serif",
            fontSize: "clamp(0.8rem, 2vw, 1rem)",
            fontWeight: 300,
            color: "rgba(200,160,40,0.45)",
            letterSpacing: "0.5em",
            textTransform: "uppercase",
          }}
        >
          حيث يلتقي الشباب على المسرح
        </p>

        {/* Cinematic divider top */}
        <div className="reveal-on-scroll w-full" style={{ transitionDelay: "0.1s" }}>
          <CinematicDivider />
        </div>

        {/* روافد — main title */}
        <h2
          className="reveal-on-scroll"
          style={{
            fontFamily: "'Amiri', serif",
            fontSize: "clamp(5rem, 16vw, 11rem)",
            fontWeight: 700,
            lineHeight: 1,
            background: "linear-gradient(180deg, #f0d080 0%, #c9a84c 50%, #a07830 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 60px rgba(200,155,30,0.4))",
            transitionDelay: "0.15s",
          }}
        >
          روافد
        </h2>

        {/* Cinematic divider bottom */}
        <div className="reveal-on-scroll w-full" style={{ transitionDelay: "0.2s" }}>
          <CinematicDivider />
        </div>

        {/* Sub text */}
        <p
          className="reveal-on-scroll"
          style={{
            fontFamily: "'Cairo', sans-serif",
            fontSize: "clamp(1rem, 3vw, 1.6rem)",
            fontWeight: 300,
            color: "rgba(248,244,236,0.5)",
            letterSpacing: "0.35em",
            transitionDelay: "0.25s",
          }}
        >
          قريبًا على المسرح
        </p>

        {/* Presented by box */}
        <div
          className="reveal-on-scroll"
          style={{
            marginTop: "1.5rem",
            padding: "1.5rem 3rem",
            border: "1px solid rgba(200,160,40,0.18)",
            background: "rgba(15,10,2,0.5)",
            backdropFilter: "blur(4px)",
            transitionDelay: "0.3s",
          }}
        >
          <p style={{
            fontFamily: "'Cairo', sans-serif",
            fontSize: "0.7rem",
            color: "rgba(200,160,40,0.4)",
            letterSpacing: "0.5em",
            marginBottom: "0.5rem",
          }}>
            تقديم فرقة
          </p>
          <p style={{
            fontFamily: "'Amiri', serif",
            fontSize: "clamp(2.2rem, 6vw, 3.5rem)",
            fontWeight: 700,
            background: "linear-gradient(90deg, #c9a84c, #f0d080, #c9a84c)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmerGold 4s linear infinite",
            lineHeight: 1,
          }}>
            النور
          </p>
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