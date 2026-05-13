import React, { useEffect, useRef, useState } from "react";

export default function AnonSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [numStep, setNumStep] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setVisible(true);
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    // Count up number animation: ١ ٢ ٣ ... ؟
    const arabicNums = ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "١٠", "؟"];
    let i = 0;
    const interval = setInterval(() => {
      setNumStep(i);
      i++;
      if (i >= arabicNums.length) clearInterval(interval);
    }, 130);
    return () => clearInterval(interval);
  }, [visible]);

  const arabicNums = ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "١٠", "؟"];
  const currentNum = arabicNums[Math.min(numStep, arabicNums.length - 1)];

  return (
    <section
      id="anon"
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "#000",
      }}
    >
      {/* Center glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(20,14,2,0.9) 0%, #000 70%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.95) 100%)" }} />

      <div
        className="relative z-10 flex flex-col items-center gap-8 px-6"
        style={{ textAlign: "center" }}
      >
        {/* من نحن؟ */}
        <p
          style={{
            fontFamily: "'Amiri', serif",
            fontSize: "clamp(2rem, 7vw, 5rem)",
            fontWeight: 700,
            color: "rgba(248,244,236,0.85)",
            letterSpacing: "0.08em",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 1.2s ease 0.2s, transform 1.2s ease 0.2s",
          }}
        >
          من نحن؟
        </p>

        {/* Animated line */}
        <div style={{
          width: visible ? 200 : 0,
          height: 1,
          background: "linear-gradient(to right, transparent, #c9a84c, transparent)",
          transition: "width 1.2s ease 0.6s",
          boxShadow: "0 0 8px rgba(200,160,40,0.5)",
        }} />

        {/* Animated number */}
        <p
          style={{
            fontFamily: "'Amiri', serif",
            fontSize: "clamp(5rem, 18vw, 12rem)",
            fontWeight: 700,
            background: "linear-gradient(180deg, #f0d080, #c9a84c)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 40px rgba(200,160,40,0.5))",
            lineHeight: 1,
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s ease 0.8s",
            minWidth: "2ch",
          }}
        >
          {currentNum}
        </p>

        {/* Animated line 2 */}
        <div style={{
          width: visible ? 200 : 0,
          height: 1,
          background: "linear-gradient(to right, transparent, #c9a84c, transparent)",
          transition: "width 1.2s ease 1s",
          boxShadow: "0 0 8px rgba(200,160,40,0.5)",
        }} />

        {/* قريبًا ستعرف */}
        <p
          style={{
            fontFamily: "'Cairo', sans-serif",
            fontSize: "clamp(1rem, 3.5vw, 2rem)",
            fontWeight: 300,
            color: "rgba(200,160,40,0.6)",
            letterSpacing: "0.3em",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1.2s ease 1.5s, transform 1.2s ease 1.5s",
          }}
        >
          قريبًا ستعرف
        </p>
      </div>
    </section>
  );
}