import React, { useEffect, useRef, useState } from "react";
import Preloader from "../components/landing/Preloader";
import ParticleCanvas from "../components/landing/ParticleCanvas";
import CinematicBackground from "../components/landing/CinematicBackground";
import CustomCursor from "../components/landing/CustomCursor";
import AudioButton from "../components/landing/AudioButton";
import HeroSection from "../components/landing/HeroSection";
import MysterySection from "../components/landing/MysterySection";
import AnonSection from "../components/landing/AnonSection";
import RevealSection from "../components/landing/RevealSection";
import EventSection from "../components/landing/EventSection";
import FinaleSection from "../components/landing/FinaleSection";

const SOUNDS = {
  ambient: "https://media.base44.com/files/public/6a04bd3fb60b4b5c837d1fc3/4258f56a1_ambient.mp3",
  boom: "https://media.base44.com/files/public/6a04bd3fb60b4b5c837d1fc3/c3e6b1179_boom.mp3",
  hit: "https://media.base44.com/files/public/6a04bd3fb60b4b5c837d1fc3/af141f248_hit.mp3",
  rise: "https://media.base44.com/files/public/6a04bd3fb60b4b5c837d1fc3/ce1905447_rise.mp3",
};

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [showTap, setShowTap] = useState(false);
  const audioRefs = useRef({});

  // Build audio refs
  useEffect(() => {
    Object.entries(SOUNDS).forEach(([key, src]) => {
      const audio = new Audio(src);
      audio.preload = "auto";
      if (key === "ambient") audio.loop = true;
      audioRefs.current[key] = audio;
    });
    return () => {
      Object.values(audioRefs.current).forEach((a) => {
        a.pause();
        a.src = "";
      });
    };
  }, []);

  const playSound = (key) => {
    if (!audioEnabled) return;
    const a = audioRefs.current[key];
    if (!a) return;
    a.currentTime = 0;
    a.play().catch(() => {});
  };

  const toggleAudio = () => {
    const ambient = audioRefs.current["ambient"];
    if (!ambient) return;
    if (audioEnabled) {
      ambient.pause();
      setAudioEnabled(false);
    } else {
      ambient.play().then(() => setAudioEnabled(true)).catch(() => {});
    }
  };

  const handlePreloaderDone = () => {
    setLoaded(true);
    setShowTap(true);
  };

  const handleTapStart = () => {
    setShowTap(false);
    const ambient = audioRefs.current["ambient"];
    if (ambient) {
      ambient.play().then(() => setAudioEnabled(true)).catch(() => {});
    }
  };

  // Scroll-based section sound triggers
  useEffect(() => {
    if (!loaded) return;
    const sections = [
      { id: "mystery", sound: "hit" },
      { id: "anon", sound: "rise" },
      { id: "reveal", sound: "boom" },
      { id: "finale", sound: "hit" },
    ];
    const observers = sections.map(({ id, sound }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) playSound(sound); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, [loaded, audioEnabled]);

  // Reveal observer
  useEffect(() => {
    if (!loaded) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal-on-scroll").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [loaded]);

  return (
    <div className="relative overflow-x-hidden" style={{ background: "#000", minHeight: "100vh" }} dir="rtl">
      {!loaded && <Preloader onDone={handlePreloaderDone} />}

      {showTap && (
        <div
          onClick={handleTapStart}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center cursor-pointer"
          style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(6px)" }}
        >
          <div
            className="w-24 h-24 rounded-full border border-yellow-600/50 flex items-center justify-center mb-6 animate-ping-slow"
            style={{ boxShadow: "0 0 30px rgba(200,160,40,0.3)" }}
          >
            <div className="w-16 h-16 rounded-full border border-yellow-500/70 flex items-center justify-center">
              <span className="text-yellow-500 text-2xl">◎</span>
            </div>
          </div>
          <p
            className="text-yellow-100/80 text-lg tracking-widest"
            style={{ fontFamily: "'Cairo', sans-serif", letterSpacing: "0.3em" }}
          >
            اضغط لتفعيل الصوت
          </p>
        </div>
      )}

      <CinematicBackground />
      <ParticleCanvas />
      <CustomCursor />
      <AudioButton enabled={audioEnabled} onToggle={toggleAudio} />

      <HeroSection loaded={loaded} playSound={playSound} />
      <MysterySection />
      <AnonSection />
      <RevealSection />
      <EventSection />
      <FinaleSection />

      {/* Footer bar */}
      <div
        className="fixed bottom-0 left-0 right-0 h-px pointer-events-none z-50"
        style={{ background: "linear-gradient(to right, transparent, rgba(200,160,40,0.4), transparent)" }}
      />
    </div>
  );
}