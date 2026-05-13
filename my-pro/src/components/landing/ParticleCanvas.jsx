import React, { useEffect, useRef } from "react";

// Lightweight top-layer embers only — CinematicBackground handles smoke/rays
export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const embers = Array.from({ length: 55 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 1.4 + 0.2,
      speedY: -(Math.random() * 0.35 + 0.06),
      speedX: (Math.random() - 0.5) * 0.13,
      opacity: Math.random() * 0.45 + 0.08,
      gold: Math.random() > 0.38,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.007 + Math.random() * 0.014,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      embers.forEach((em) => {
        em.y += em.speedY;
        em.x += em.speedX;
        em.pulse += em.pulseSpeed;
        if (em.y < -4) { em.y = canvas.height + 4; em.x = Math.random() * canvas.width; }
        const op = em.opacity * (0.65 + Math.sin(em.pulse) * 0.35);
        ctx.beginPath();
        ctx.arc(em.x, em.y, em.size, 0, Math.PI * 2);
        if (em.gold) {
          ctx.fillStyle = `rgba(220,170,50,${op})`;
          ctx.shadowColor = "rgba(220,165,45,0.8)";
          ctx.shadowBlur = em.size * 5;
        } else {
          ctx.fillStyle = `rgba(255,245,220,${op * 0.4})`;
          ctx.shadowColor = "rgba(255,240,200,0.3)";
          ctx.shadowBlur = em.size * 3;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", zIndex: 2, pointerEvents: "none" }}
    />
  );
}