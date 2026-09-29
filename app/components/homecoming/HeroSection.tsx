"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#3B1118] px-6 text-[#f5f1e8]">
      <motion.div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a96e]/10 ${
          isMobile ? "h-64 w-64 blur-[70px]" : "h-96 w-96 blur-3xl"
        }`}
        animate={{
          scale: isMobile ? [1, 1.08, 1] : [1, 1.18, 1],
          opacity: isMobile ? [0.25, 0.4, 0.25] : [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: isMobile ? 14 : 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c9a96e]/15 ${
          isMobile ? "h-[300px] w-[300px]" : "h-[560px] w-[560px]"
        }`}
        animate={{ rotate: 360 }}
        transition={{
          duration: isMobile ? 90 : 55,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c9a96e]/10 ${
          isMobile ? "h-[220px] w-[220px]" : "h-[400px] w-[400px]"
        }`}
        animate={{ rotate: -360 }}
        transition={{
          duration: isMobile ? 75 : 40,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="absolute left-8 top-10 h-1 w-1 rounded-full bg-[#c9a96e]" />
      <div className="absolute right-10 top-24 h-1 w-1 rounded-full bg-[#c9a96e]/70" />
      <div className="absolute bottom-28 left-12 h-1 w-1 rounded-full bg-[#c9a96e]/60" />
      <div className="absolute bottom-16 right-8 h-1 w-1 rounded-full bg-[#c9a96e]" />
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: isMobile ? 0.8 : 1,
            delay: 0.2,
          }}
          className="mb-8 text-[10px] tracking-[0.5em] text-[#c9a96e] md:text-xs"
        >
          අපේ සතුට
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
            y: isMobile ? 20 : 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: isMobile ? 0.9 : 1.2,
            delay: 0.4,
          }}
        >
          <p className="text-xl font-light tracking-wide text-[#e0d8cd] md:text-3xl">
            ආදරයෙන් පිරුණු
          </p>

          <h1 className="mt-4 text-5xl font-light leading-tight text-[#f5f1e8] md:text-7xl">
            අපේ
            <br />
            ගෙදර එන දවස
          </h1>
        </motion.div>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 70, opacity: 1 }}
          transition={{
            duration: isMobile ? 0.8 : 1,
            delay: 0.9,
          }}
          className="my-10 h-px bg-[#c9a96e]"
        />
        <motion.div
          initial={{
            opacity: 0,
            scale: isMobile ? 0.97 : 0.95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: isMobile ? 0.9 : 1.1,
            delay: 1,
          }}
        >
          <p className="text-3xl font-light md:text-5xl">
            නිපුනි
            <span className="mx-4 text-[#c9a96e]">&</span>
            නිපුන
          </p>
          <p className="mt-5 text-xs tracking-[0.4em] text-[#c9a96e]">
            17 · 01 · 2027
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: isMobile ? 1 : 1.2,
            delay: 1.3,
          }}
          className="mt-12 max-w-md text-sm leading-loose text-[#d0c2bb] md:text-base"
        >
          අපේ ආදරයේ සතුට
          <br />
          ඔබත් සමඟ බෙදාගන්නට
          <br />
          ආදරයෙන් ආරාධනා කරමු.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.8,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: isMobile ? [0, 6, 0] : [0, 8, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: isMobile ? 2.5 : 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[9px] tracking-[0.4em] text-[#c9a96e]/70">
            SCROLL
          </span>
          <span className="text-[#c9a96e]">↓</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
