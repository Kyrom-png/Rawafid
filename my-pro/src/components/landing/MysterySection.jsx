import React from "react";

export default function MysterySection() {
  return (
    <section
      id="mystery"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "radial-gradient(ellipse at 50% 100%, #0d0900 0%, #000 60%)",
      }}
    >
      {/* Smoke */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.88) 100%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 20% 80%, rgba(25,16,3,0.35) 0%, transparent 55%)" }} />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-8 py-24 flex flex-col gap-10">

        {/* Line 1 — right aligned */}
        <div className="reveal-on-scroll" style={{ textAlign: "right" }}>
          <p style={{
            fontFamily: "'Amiri', serif",
            fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
            fontWeight: 700,
            color: "rgba(248,244,236,0.9)",
            lineHeight: 1.2,
            textShadow: "0 0 40px rgba(255,255,255,0.08)",
          }}>
            قصة…
          </p>
        </div>

        {/* Gold line divider */}
        <div className="reveal-on-scroll" style={{ transitionDelay: "0.1s" }}>
          <div style={{ height: 1, background: "linear-gradient(to left, #c9a84c 0%, rgba(200,160,40,0.2) 100%)", boxShadow: "0 0 8px rgba(200,160,40,0.4)" }} />
        </div>

        {/* Line 2 — left aligned, gold */}
        <div className="reveal-on-scroll" style={{ textAlign: "left", transitionDelay: "0.15s" }}>
          <p style={{
            fontFamily: "'Amiri', serif",
            fontSize: "clamp(1.8rem, 6vw, 4rem)",
            fontWeight: 700,
            background: "linear-gradient(90deg, #f0d080, #c9a84c)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: 1.3,
          }}>
            لم تُروَ بعد
          </p>
        </div>

        <div style={{ height: "1rem" }} />

        {/* Line 3 — center */}
        <div className="reveal-on-scroll" style={{ textAlign: "center", transitionDelay: "0.2s" }}>
          <p style={{
            fontFamily: "'Cairo', sans-serif",
            fontSize: "clamp(1.1rem, 3.5vw, 2.2rem)",
            fontWeight: 300,
            color: "rgba(212,201,176,0.8)",
            letterSpacing: "0.15em",
            lineHeight: 1.6,
          }}>
            مشهد سيغيّر كل شيء
          </p>
        </div>

        <div style={{ height: "2rem" }} />

        {/* Line 4 — HUGE center dramatic */}
        <div className="reveal-on-scroll" style={{ textAlign: "center", transitionDelay: "0.3s" }}>
          <p style={{
            fontFamily: "'Amiri', serif",
            fontSize: "clamp(3.5rem, 12vw, 8rem)",
            fontWeight: 700,
            background: "linear-gradient(90deg, #c9a84c, #f0d080, #c9a84c, #f0d080, #c9a84c)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer 4s linear infinite",
            lineHeight: 1.1,
            filter: "drop-shadow(0 0 40px rgba(200,160,40,0.3))",
          }}>
            استعدوا
          </p>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          from { background-position: -200% center; }
          to { background-position: 200% center; }
        }
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(40px);
          filter: blur(5px);
          transition: opacity 1.1s ease, transform 1.1s ease, filter 1.1s ease;
        }
        .reveal-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }
      `}</style>
    </section>
  );
}