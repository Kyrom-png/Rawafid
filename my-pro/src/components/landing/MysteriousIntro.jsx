import React from "react";

const lines = [
  { text: "قصة…", delay: "0s", size: "clamp(2rem, 6vw, 4.5rem)" },
  { text: "لم تُروَ بعد", delay: "0.2s", size: "clamp(1.8rem, 5vw, 3.8rem)" },
  { text: "مشهد سيغيّر كل شيء", delay: "0.4s", size: "clamp(1.3rem, 3.8vw, 2.8rem)" },
  { text: "استعدوا", delay: "0.6s", size: "clamp(2.5rem, 7vw, 5.5rem)" },
];

export default function MysteriousIntro() {
  return (
    <section
      className="cinematic-section relative"
      style={{
        minHeight: "100vh",
        zIndex: 2,
        background:
          "radial-gradient(ellipse at 50% 100%, rgba(15,10,2,1) 0%, #000 60%)",
      }}
    >
      {/* Smoke from bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(20,14,3,0.7) 0%, transparent 100%)",
        }}
      />

      {/* Side glows */}
      <div
        className="absolute inset-y-0 right-0 w-1/3 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at right, rgba(120,80,10,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Decorative vertical line */}
      <div
        className="absolute right-1/2 top-0 bottom-0 w-px pointer-events-none opacity-20"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(200,160,40,0.6) 30%, rgba(200,160,40,0.6) 70%, transparent)",
        }}
      />

      <div className="relative z-10 text-center px-6 py-24 max-w-4xl mx-auto">
        {/* Top ornament */}
        <div className="reveal-hidden mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="cinematic-divider flex-1" />
            <span className="arabic-ornament text-lg">❖</span>
            <div className="cinematic-divider flex-1" />
          </div>
          <p
            className="text-yellow-600/50 text-xs tracking-widest uppercase"
            style={{ fontFamily: "'Tajawal', sans-serif", letterSpacing: "0.4em" }}
          >
            الفصل الأول
          </p>
        </div>

        {/* Lines */}
        <div className="flex flex-col items-center gap-10">
          {lines.map((line, i) => (
            <div
              key={i}
              className="reveal-hidden"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {i === 3 ? (
                // Last line - special dramatic styling
                <p
                  className="shimmer-gold"
                  style={{
                    fontFamily: "'Amiri', serif",
                    fontSize: line.size,
                    fontWeight: 700,
                    lineHeight: 1.2,
                    letterSpacing: "0.08em",
                  }}
                >
                  {line.text}
                </p>
              ) : (
                <p
                  className="text-white/70"
                  style={{
                    fontFamily: i === 0 ? "'Amiri', serif" : "'Tajawal', sans-serif",
                    fontSize: line.size,
                    fontWeight: i === 0 ? 700 : 300,
                    lineHeight: 1.3,
                    letterSpacing: i === 2 ? "0.15em" : "0.05em",
                    textShadow: "0 0 30px rgba(255,255,255,0.1)",
                  }}
                >
                  {line.text}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom ornament */}
        <div className="reveal-hidden reveal-delay-5 mt-20">
          <div className="flex items-center justify-center gap-4">
            <div className="cinematic-divider flex-1" />
            <span className="arabic-ornament text-lg">❖</span>
            <div className="cinematic-divider flex-1" />
          </div>
        </div>
      </div>
    </section>
  );
}