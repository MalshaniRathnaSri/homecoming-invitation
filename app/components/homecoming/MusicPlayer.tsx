"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.95;
    audio.loop = true;
    const handlePlay = () => {
      setIsPlaying(true);
    };
    const handlePause = () => {
      setIsPlaying(false);
    };
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    const tryAutoplay = async () => {
      try {
        await audio.play();
      } catch {}
    };
    tryAutoplay();
    const startOnInteraction = async () => {
      try {
        await audio.play();
      } catch {}
      removeInteractionListeners();
    };
    const removeInteractionListeners = () => {
      document.removeEventListener("click", startOnInteraction);
      document.removeEventListener("touchstart", startOnInteraction);
      document.removeEventListener("keydown", startOnInteraction);
    };
    document.addEventListener("click", startOnInteraction, {
      once: true,
    });
    document.addEventListener("touchstart", startOnInteraction, {
      once: true,
    });
    document.addEventListener("keydown", startOnInteraction, {
      once: true,
    });
    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      removeInteractionListeners();
    };
  }, []);
  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      try {
        await audio.play();
      } catch {}
    } else {
      audio.pause();
    }
  };
  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/homecoming.mp3"
        autoPlay
        loop
        preload="auto"
      />
      <motion.button
        type="button"
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        whileTap={{ scale: 0.9 }}
        className={`fixed z-50 flex items-center justify-center rounded-full border border-[#c9a96e]/60 bg-[#100b0c]/90 text-[#c9a96e] shadow-lg backdrop-blur-md ${
          isMobile ? "bottom-5 right-5 h-12 w-12" : "bottom-7 right-7 h-14 w-14"
        }`}
      >
        {isPlaying ? (
          <div className="flex items-end gap-[3px]">
            <motion.span
              animate={{ height: [5, 13, 7, 11, 5] }}
              transition={{
                duration: 0.9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-[2px] bg-[#c9a96e]"
            />
            <motion.span
              animate={{ height: [11, 6, 14, 8, 11] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-[2px] bg-[#c9a96e]"
            />
            <motion.span
              animate={{ height: [7, 14, 6, 12, 7] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-[2px] bg-[#c9a96e]"
            />
          </div>
        ) : (
          <span className="text-lg">♪</span>
        )}
      </motion.button>
    </>
  );
}
