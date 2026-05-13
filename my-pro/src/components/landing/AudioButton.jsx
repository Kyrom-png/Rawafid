import React from "react";

export default function AudioButton({ enabled, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="fixed z-50 flex items-center gap-2 px-4 py-2 transition-all duration-300"
      style={{
        top: "1.5rem",
        left: "1.5rem",
        background: "rgba(0,0,0,0.6)",
        border: "1px solid rgba(200,160,40,0.3)",
        backdropFilter: "blur(8px)",
        color: enabled ? "rgba(200,160,40,0.9)" : "rgba(200,160,40,0.45)",
        fontFamily: "'Cairo', sans-serif",
        fontSize: "0.8rem",
        letterSpacing: "0.15em",
        cursor: "pointer",
        borderRadius: "2px",
      }}
    >
      <span
        style={{
          fontSize: "1rem",
          display: "inline-block",
          animation: enabled ? "spin 3s linear infinite" : "none",
        }}
      >
        {enabled ? "◉" : "◎"}
      </span>
      <span>الصوت</span>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </button>
  );
}