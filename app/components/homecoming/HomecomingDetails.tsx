"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HomecomingDetails() {
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
    <section className="relative min-h-screen overflow-hidden bg-[#f5f1e8] px-6 py-24 text-[#3F0306] md:px-12">
      <motion.div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a96e]/10 ${
          isMobile ? "h-64 w-64 blur-[70px]" : "h-96 w-96 blur-3xl"
        }`}
        animate={{
          scale: isMobile ? [1, 1.08, 1] : [1, 1.15, 1],
          opacity: isMobile ? [0.2, 0.35, 0.2] : [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: isMobile ? 14 : 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute -right-24 top-20 rounded-full border border-[#c9a96e]/20 ${
          isMobile ? "h-56 w-56" : "h-80 w-80"
        }`}
        animate={{ rotate: 360 }}
        transition={{
          duration: isMobile ? 90 : 50,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className={`absolute -left-28 bottom-20 rounded-full border border-[#c9a96e]/15 ${
          isMobile ? "h-52 w-52" : "h-72 w-72"
        }`}
        animate={{ rotate: -360 }}
        transition={{
          duration: isMobile ? 95 : 55,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 15 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.8 : 1,
          }}
          className="text-center"
        >
          <h2 className="mt-6 text-3xl font-light leading-relaxed text-[#3F0306] md:text-5xl">
            අපේ විශේෂ දවස
          </h2>
          <div className="mx-auto mt-7 h-px w-16 bg-[#c9a96e]" />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: isMobile ? 20 : 30,
            scale: isMobile ? 0.98 : 0.96,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.9 : 1.1,
            delay: 0.25,
          }}
          className="relative mt-12 w-full max-w-md border border-[#c9a96e]/40 bg-white/20 px-8 py-10 text-center backdrop-blur-sm md:px-12"
        >
          <div className="absolute left-2 top-2 h-5 w-5 border-l border-t border-[#c9a96e]" />
          <div className="absolute right-2 top-2 h-5 w-5 border-r border-t border-[#c9a96e]" />
          <div className="absolute bottom-2 left-2 h-5 w-5 border-b border-l border-[#c9a96e]" />
          <div className="absolute bottom-2 right-2 h-5 w-5 border-b border-r border-[#c9a96e]" />
          <p className="text-[10px] tracking-[0.45em] text-[#3F0306]">ජනවාරි</p>
          <p className="mt-3 text-7xl font-light leading-none text-[#3F0306] md:text-8xl">
            17
          </p>
          <div className="mx-auto my-5 h-px w-12 bg-[#c9a96e]" />
          <p className="text-sm tracking-[0.35em] text-[#3F0306]">2027</p>
          <p className="mt-5 text-sm text-[#74665f]">ඉරිදා</p>
        </motion.div>
        <div className="mt-12 grid w-full max-w-3xl gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 18 : 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: isMobile ? 0.8 : 1,
              delay: 0.45,
            }}
            className="border border-[#c9a96e]/30 bg-white/20 px-6 py-8 text-center"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#c9a96e]/50">
              <span className="text-lg text-[#3F0306]">◷</span>
            </div>
            <p className="mt-5 text-[9px] tracking-[0.4em] text-[#3F0306]">
              වේලාව
            </p>
            <p className="mt-3 text-lg font-light text-[#3F0306] md:text-xl">
              සවස 7.00 - රාත්‍රී 11.00
            </p>
            <p className="mt-2 text-xs text-[#74665f]">7.00 PM - 11.00 PM</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 18 : 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: isMobile ? 0.8 : 1,
              delay: isMobile ? 0.55 : 0.6,
            }}
            className="border border-[#c9a96e]/30 bg-white/20 px-6 py-8 text-center"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#c9a96e]/50">
              <span className="text-lg text-[#3F0306]">♢</span>
            </div>
            <p className="mt-5 text-[9px] tracking-[0.4em] text-[#3F0306]">
              ස්ථානය
            </p>
            <p className="mt-3 text-lg font-light text-[#3F0306] md:text-xl">
              Grand Royal
            </p>
            <p className="mt-2 text-sm text-[#74665f]">Kalutara</p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 15 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.8 : 1,
            delay: 0.75,
          }}
          className="mt-10 flex flex-col items-center text-center"
        >
          <p className="text-sm font-light leading-relaxed text-[#3F0306] md:text-base">
            අපේ සතුටු මොහොතට ඔබටත් පහසුවෙන් ළඟා වීමට,
          </p>

          <p className="mt-2 text-xs tracking-wide text-[#3F0306] md:text-sm">
            උත්සව ස්ථානයේ මඟ සොයාගැනීමට පහත බොත්තම ඔබන්න
          </p>

          <motion.a
            href="https://maps.app.goo.gl/LfFbENp7C5VauR9A7"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group mt-6 inline-flex items-center gap-3 rounded-full border border-[#c9a96e] bg-[#3F0306] px-7 py-4 text-[#f5f1e8] shadow-lg shadow-[#3F0306]/15 transition-colors duration-300 hover:bg-[#3F0306] md:px-9"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c9a96e]/15 text-[#e2c58e]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </span>

            <span className="flex flex-col items-start">
              <span className="text-[11px] font-medium tracking-[0.2em] md:text-xs">
                OPEN GOOGLE MAPS
              </span>
              <span className="mt-1 text-[10px] text-[#d9c6a0]">
                Grand Royal · Kalutara
              </span>
            </span>

            <span className="ml-1 text-lg text-[#c9a96e] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </motion.a>

          <p className="mt-4 text-[10px] tracking-wide text-[#74665f]">
            📍 ඔබගේ ගමන් මඟ පහසුවෙන් සැලසුම් කරගන්න
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 1.2,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.span
          animate={{
            y: isMobile ? [0, 5, 0] : [0, 7, 0],
            opacity: [0.3, 0.9, 0.3],
          }}
          transition={{
            duration: isMobile ? 2.5 : 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-[#3F0306]"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
