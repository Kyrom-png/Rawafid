import React, { useEffect, useState } from "react";

export default function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const steps = [
      { target: 30, delay: 200 },
      { target: 60, delay: 600 },
      { target: 85, delay: 1000 },
      { target: 100, delay: 1500 },
    ];

    const timers = steps.map(({ target, delay }) =>
      setTimeout(() => setProgress(target), delay)
    );

    const doneTimer = setTimeout(() => {
      setHiding(true);
      setTimeout(onDone, 900);
    }, 2600);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(doneTimer);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{
        background: "#000",
        transition: "opacity 0.9s ease, transform 0.9s ease",
        opacity: hiding ? 0 : 1,
        transform: hiding ? "scale(1.05)" : "scale(1)",
        pointerEvents: hiding ? "none" : "all",
      }}
    >
      {/* Logo */}
      <div
        className="mb-8"
        style={{
          fontFamily: "'Amiri', serif",
          fontSize: "clamp(4rem, 12vw, 7rem)",
          fontWeight: 700,
          background: "linear-gradient(90deg, #c9a84c, #f0d080, #c9a84c)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(0 0 30px rgba(200,160,40,0.5))",
          letterSpacing: "0.04em",
        }}
      >
        النور
      </div>

      {/* Progress bar */}
      <div
        className="w-48 h-px mb-4 overflow-hidden"
        style={{ background: "rgba(200,160,40,0.15)" }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: "linear-gradient(to right, #c9a84c, #f0d080)",
            transition: "width 0.5s ease",
            boxShadow: "0 0 8px rgba(200,160,40,0.8)",
          }}
        />
      </div>

      {/* Sub label */}
      <p
        style={{
          fontFamily: "'Cairo', sans-serif",
          fontSize: "0.75rem",
          color: "rgba(200,160,40,0.5)",
          letterSpacing: "0.5em",
          textTransform: "uppercase",
        }}
      >
        روافد
      </p>
    </div>
  );
}