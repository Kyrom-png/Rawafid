import React, { useEffect, useState } from "react";
import CornerOrnament from "./CornerOrnament";

export default function HeroSection({ loaded, playSound }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!loaded) return;
    const t1 = setTimeout(() => { setPhase(1); playSound?.("boom"); }, 300);
    const t2 = setTimeout(() => setPhase(2), 1400);
    const t3 = setTimeout(() => setPhase(3), 2600);
    const t4 = setTimeout(() => setPhase(4), 3600);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [loaded]);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "radial-gradient(ellipse at center, #120d02 0%, #050305 50%, #000 100%)",
      }}
    >
      {/* Rays */}
      <HeroRays />

      {/* Lens flares */}
      <div className="absolute pointer-events-none" style={{ width: 200, height: 200, top: "30%", right: "20%", background: "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)", borderRadius: "50%", animation: "flarePulse 4s ease-in-out infinite" }} />
      <div className="absolute pointer-events-none" style={{ width: 80, height: 80, top: "25%", left: "30%", background: "radial-gradient(circle, rgba(255,240,180,0.2) 0%, transparent 70%)", borderRadius: "50%", animation: "flarePulse 4s ease-in-out infinite", animationDelay: "3s" }} />
      <div className="absolute pointer-events-none" style={{ width: 40, height: 40, top: "40%", right: "35%", background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)", borderRadius: "50%", animation: "flarePulse 4s ease-in-out infinite", animationDelay: "6s" }} />

      {/* Vignette + smoke */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.9) 100%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 20% 80%, rgba(30,20,5,0.35) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(20,14,3,0.35) 0%, transparent 60%)" }} />

      {/* Corners */}
      <CornerOrnament position="tl" />
      <CornerOrnament position="tr" />
      <CornerOrnament position="bl" />
      <CornerOrnament position="br" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center gap-6">
        <h1
          style={{
            fontFamily: "'Amiri', serif",
            fontSize: "clamp(6rem, 20vw, 14rem)",
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "0.03em",
            background: "linear-gradient(180deg, #f0d080 0%, #c9a84c 50%, #a07830 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 60px rgba(200,160,40,0.5))",
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
            transition: "opacity 1.8s cubic-bezier(0.16,1,0.3,1), transform 1.8s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          النور
        </h1>

        {/* Divider */}
        <div style={{
          width: 180,
          height: 1,
          background: "linear-gradient(to right, transparent, rgba(200,160,40,0.7), transparent)",
          opacity: phase >= 2 ? 1 : 0,
          transition: "opacity 1s ease 0.2s",
          position: "relative",
        }}>
          <div style={{ position: "absolute", left: "50%", top: -3, transform: "translateX(-50%)", width: 6, height: 6, borderRadius: "50%", background: "#c9a84c", boxShadow: "0 0 10px #c9a84c, 0 0 20px rgba(200,160,40,0.5)" }} />
        </div>

        <p
          style={{
            fontFamily: "'Cairo', sans-serif",
            fontSize: "clamp(1rem, 3.2vw, 1.7rem)",
            fontWeight: 300,
            color: "rgba(240,208,128,0.75)",
            letterSpacing: "0.25em",
            lineHeight: 2,
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1.2s ease 0.4s, transform 1.2s ease 0.4s",
            textShadow: "0 0 30px rgba(200,160,40,0.3)",
          }}
        >
          حين يشتد الظلام… يظهر النور
        </p>

        {/* Event tag */}
        <div style={{
          marginTop: "1rem",
          padding: "0.4rem 1.5rem",
          border: "1px solid rgba(200,160,40,0.25)",
          color: "rgba(200,160,40,0.5)",
          fontFamily: "'Cairo', sans-serif",
          fontSize: "0.7rem",
          letterSpacing: "0.5em",
          opacity: phase >= 3 ? 1 : 0,
          transition: "opacity 1s ease 0.3s",
        }}>
          فرقة النور — روافد
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 flex flex-col items-center gap-2"
        style={{
          transform: "translateX(-50%)",
          opacity: phase >= 4 ? 1 : 0,
          transition: "opacity 1s ease",
        }}
      >
        <div style={{ width: 1, height: 50, background: "linear-gradient(to bottom, rgba(200,160,40,0.6), transparent)", animation: "scrollLinePulse 2s ease-in-out infinite" }} />
        <span style={{ fontFamily: "'Cairo', sans-serif", fontSize: "0.7rem", color: "rgba(200,160,40,0.4)", letterSpacing: "0.4em" }}>اكتشف</span>
      </div>

      <style>{`
        @keyframes flarePulse {
          0%,100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.15); }
        }
        @keyframes scrollLinePulse {
          0%,100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.1); }
        }
      `}</style>
    </section>
  );
}

function HeroRays() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[15, 35, 50, 65, 82].map((pct, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${pct}%`,
            top: 0,
            bottom: 0,
            width: "1px",
            background: `linear-gradient(to bottom, rgba(200,160,40,${0.1 + i * 0.02}) 0%, transparent 60%)`,
            animation: `rayPulse ${3 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.7}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes rayPulse {
          0%,100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}