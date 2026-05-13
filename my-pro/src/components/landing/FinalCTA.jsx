import React, { useState } from "react";

export default function FinalCTA() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
  };

  return (
    <section
      className="cinematic-section relative overflow-hidden"
      style={{
        minHeight: "100vh",
        zIndex: 2,
        background:
          "radial-gradient(ellipse at 50% 60%, rgba(30,20,4,1) 0%, #000 60%)",
      }}
    >
      {/* Big ambient glow behind text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 55%, rgba(180,130,25,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #000, transparent)",
        }}
      />

      {/* Vignette */}
      <div className="vignette" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-12">
        {/* Decorative top */}
        <div className="reveal-hidden flex items-center gap-4 w-full max-w-xs">
          <div className="cinematic-divider flex-1" />
          <span className="arabic-ornament text-sm opacity-50">✦</span>
          <div className="cinematic-divider flex-1" />
        </div>

        {/* Main question */}
        <div className="reveal-hidden reveal-delay-1">
          <h2
            className="shimmer-gold"
            style={{
              fontFamily: "'Amiri', serif",
              fontSize: "clamp(2.8rem, 10vw, 8rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "0.02em",
              filter: "drop-shadow(0 0 60px rgba(200,150,30,0.4))",
            }}
          >
            هل أنتم مستعدون؟
          </h2>
        </div>

        {/* Sub line */}
        <div className="reveal-hidden reveal-delay-2">
          <p
            className="text-white/50 animate-glow-pulse"
            style={{
              fontFamily: "'Tajawal', sans-serif",
              fontSize: "clamp(0.9rem, 2.5vw, 1.3rem)",
              fontWeight: 300,
              letterSpacing: "0.3em",
              lineHeight: 2,
            }}
          >
            النور يأتي… لا يُستأذَن
          </p>
        </div>

        {/* CTA Button */}
        <div className="reveal-hidden reveal-delay-3">
          <button
            onClick={handleClick}
            className="cta-button px-12 py-5 text-base md:text-lg"
            style={{
              fontFamily: "'Tajawal', sans-serif",
              letterSpacing: "0.2em",
              fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
            }}
          >
            {clicked ? (
              <span className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-yellow-500 animate-ping inline-block" />
                جارٍ التحضير…
              </span>
            ) : (
              "ترقبوا العرض"
            )}
          </button>
        </div>

        {/* Final ornament */}
        <div className="reveal-hidden reveal-delay-4 flex flex-col items-center gap-4 mt-8">
          <div className="flex items-center gap-4 w-full max-w-xs">
            <div className="cinematic-divider flex-1" />
            <span className="arabic-ornament text-sm opacity-50">✦</span>
            <div className="cinematic-divider flex-1" />
          </div>

          <p
            className="text-yellow-700/30 text-xs tracking-widest"
            style={{ fontFamily: "'Tajawal', sans-serif", letterSpacing: "0.5em" }}
          >
            روافد — النور
          </p>

          {/* Bottom glow line */}
          <div
            className="w-24 h-px mt-4 animate-glow-pulse"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(200,160,40,0.6), transparent)",
            }}
          />
        </div>
      </div>

      {/* Bottom edge glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none opacity-40"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(200,160,40,0.5), transparent)",
        }}
      />
    </section>
  );
}