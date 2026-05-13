import React, { useEffect, useRef } from "react";

export default function CinematicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // ── Smoke layers ──────────────────────────────────────────
    const smokeLayers = Array.from({ length: 7 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: canvas.height * (0.3 + Math.random() * 0.7),
      radius: 200 + Math.random() * 350,
      speedX: (Math.random() - 0.5) * 0.18,
      speedY: -(Math.random() * 0.08 + 0.02),
      opacity: 0.03 + Math.random() * 0.05,
      phase: Math.random() * Math.PI * 2,
      phaseSpeed: 0.0003 + Math.random() * 0.0003,
      hue: Math.random() > 0.5 ? "30,20,5" : "15,10,2",
    }));

    // ── Light rays ────────────────────────────────────────────
    const rays = Array.from({ length: 6 }, (_, i) => ({
      xPct: 0.1 + i * 0.16,
      width: 30 + Math.random() * 60,
      alpha: 0.06 + Math.random() * 0.06,
      phase: Math.random() * Math.PI * 2,
      speed: 0.0004 + Math.random() * 0.0003,
      heightPct: 0.55 + Math.random() * 0.3,
    }));

    // ── Floating embers ───────────────────────────────────────
    const embers = Array.from({ length: 60 }, () => ({
      x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 800),
      y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 600),
      size: Math.random() * 1.8 + 0.3,
      speedY: -(Math.random() * 0.3 + 0.05),
      speedX: (Math.random() - 0.5) * 0.12,
      opacity: Math.random() * 0.5 + 0.1,
      gold: Math.random() > 0.4,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.008 + Math.random() * 0.015,
    }));

    // ── Horizontal scan line ──────────────────────────────────
    let scanY = canvas.height;
    const scanSpeed = 0.25;

    const draw = () => {
      t += 0.6;
      const w = canvas.width;
      const h = canvas.height;

      // Clear
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, w, h);

      // ── Base gradient: deep dark centre glow ──
      const baseGrad = ctx.createRadialGradient(w * 0.5, h * 0.55, 0, w * 0.5, h * 0.5, w * 0.75);
      baseGrad.addColorStop(0, "rgba(20,13,2,1)");
      baseGrad.addColorStop(0.5, "rgba(8,5,1,1)");
      baseGrad.addColorStop(1, "rgba(0,0,0,1)");
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, w, h);

      // ── Smoke layers ──
      smokeLayers.forEach((s) => {
        s.x += s.speedX;
        s.y += s.speedY;
        s.phase += s.phaseSpeed;
        if (s.y < -s.radius) { s.y = h + s.radius; s.x = Math.random() * w; }
        if (s.x < -s.radius) s.x = w + s.radius;
        if (s.x > w + s.radius) s.x = -s.radius;

        const pulse = 0.7 + Math.sin(s.phase) * 0.3;
        const sg = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.radius * pulse);
        sg.addColorStop(0, `rgba(${s.hue},${s.opacity * pulse})`);
        sg.addColorStop(0.5, `rgba(${s.hue},${s.opacity * 0.4 * pulse})`);
        sg.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = sg;
        ctx.fillRect(0, 0, w, h);
      });

      // ── Vertical light rays from top ──
      rays.forEach((r) => {
        r.phase += r.speed;
        const x = r.xPct * w + Math.sin(r.phase * 0.7) * 30;
        const a = r.alpha * (0.6 + Math.sin(r.phase) * 0.4);
        const rg = ctx.createLinearGradient(x, 0, x, h * r.heightPct);
        rg.addColorStop(0, `rgba(200,155,35,${a * 1.8})`);
        rg.addColorStop(0.3, `rgba(180,140,28,${a})`);
        rg.addColorStop(0.7, `rgba(150,115,20,${a * 0.3})`);
        rg.addColorStop(1, "rgba(0,0,0,0)");
        ctx.save();
        ctx.globalCompositeOperation = "screen";
        ctx.fillStyle = rg;
        // Draw tapered ray
        ctx.beginPath();
        ctx.moveTo(x - r.width * 0.5, 0);
        ctx.lineTo(x + r.width * 0.5, 0);
        ctx.lineTo(x + r.width * 0.12, h * r.heightPct);
        ctx.lineTo(x - r.width * 0.12, h * r.heightPct);
        ctx.closePath();
        ctx.fillStyle = rg;
        ctx.fill();
        ctx.restore();
      });

      // ── Central bloom ──
      const bloomPulse = 0.8 + Math.sin(t * 0.008) * 0.2;
      const bloom = ctx.createRadialGradient(w * 0.5, h * 0.38, 0, w * 0.5, h * 0.38, w * 0.4 * bloomPulse);
      bloom.addColorStop(0, `rgba(180,130,25,${0.07 * bloomPulse})`);
      bloom.addColorStop(0.4, `rgba(120,85,15,${0.04 * bloomPulse})`);
      bloom.addColorStop(1, "rgba(0,0,0,0)");
      ctx.save();
      ctx.globalCompositeOperation = "screen";
      ctx.fillStyle = bloom;
      ctx.fillRect(0, 0, w, h);
      ctx.restore();

      // ── Embers ──
      embers.forEach((em, i) => {
        em.y += em.speedY;
        em.x += em.speedX;
        em.pulse += em.pulseSpeed;
        if (em.y < -5) { em.y = h + 5; em.x = Math.random() * w; }
        const op = em.opacity * (0.6 + Math.sin(em.pulse) * 0.4);
        ctx.beginPath();
        ctx.arc(em.x, em.y, em.size, 0, Math.PI * 2);
        if (em.gold) {
          ctx.fillStyle = `rgba(220,170,50,${op})`;
          ctx.shadowColor = "rgba(220,165,45,0.9)";
          ctx.shadowBlur = em.size * 6;
        } else {
          ctx.fillStyle = `rgba(255,245,220,${op * 0.4})`;
          ctx.shadowColor = "rgba(255,240,200,0.4)";
          ctx.shadowBlur = em.size * 3;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // ── Slow horizontal scan line (cinematic effect) ──
      scanY -= scanSpeed;
      if (scanY < -2) scanY = h + 2;
      const scanGrad = ctx.createLinearGradient(0, scanY - 6, 0, scanY + 6);
      scanGrad.addColorStop(0, "rgba(200,160,40,0)");
      scanGrad.addColorStop(0.5, `rgba(200,160,40,${0.06 + Math.sin(t * 0.02) * 0.02})`);
      scanGrad.addColorStop(1, "rgba(200,160,40,0)");
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanY - 6, w, 12);

      // ── Horizontal widescreen bars (cinematic letterbox) ──
      const barH = h * 0.07;
      const barGrad1 = ctx.createLinearGradient(0, 0, 0, barH);
      barGrad1.addColorStop(0, "rgba(0,0,0,0.95)");
      barGrad1.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = barGrad1;
      ctx.fillRect(0, 0, w, barH);

      const barGrad2 = ctx.createLinearGradient(0, h - barH, 0, h);
      barGrad2.addColorStop(0, "rgba(0,0,0,0)");
      barGrad2.addColorStop(1, "rgba(0,0,0,0.95)");
      ctx.fillStyle = barGrad2;
      ctx.fillRect(0, h - barH, w, barH);

      // ── Vignette ──
      const vig = ctx.createRadialGradient(w * 0.5, h * 0.5, h * 0.1, w * 0.5, h * 0.5, w * 0.8);
      vig.addColorStop(0, "rgba(0,0,0,0)");
      vig.addColorStop(0.6, "rgba(0,0,0,0.15)");
      vig.addColorStop(1, "rgba(0,0,0,0.88)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, w, h);

      // ── Film grain ──
      ctx.save();
      ctx.globalCompositeOperation = "overlay";
      const grainOpacity = 0.018;
      const imageData = ctx.getImageData(0, 0, w, h);
      const data = imageData.data;
      for (let j = 0; j < data.length; j += 4) {
        const grain = (Math.random() - 0.5) * 25;
        data[j] += grain;
        data[j + 1] += grain;
        data[j + 2] += grain;
      }
      ctx.putImageData(imageData, 0, 0);
      ctx.restore();

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
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        display: "block",
      }}
    />
  );
}