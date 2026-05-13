import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    // Only on non-touch
    if ("ontouchstart" in window) return;

    const dot = dotRef.current;
    const ringEl = ringRef.current;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dot) {
        dot.style.left = e.clientX + "px";
        dot.style.top = e.clientY + "px";
      }
    };

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringEl) {
        ringEl.style.left = ring.current.x + "px";
        ringEl.style.top = ring.current.y + "px";
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[999]"
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#c9a84c",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 8px rgba(200,160,40,0.9)",
          transition: "transform 0.1s",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[998]"
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1px solid rgba(200,160,40,0.45)",
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s, height 0.2s, border-color 0.2s",
        }}
      />
    </>
  );
}