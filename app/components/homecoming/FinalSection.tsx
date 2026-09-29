"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FinalSection() {
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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#3B1118] px-6 py-24 text-[#f5f1e8] md:px-12">
      <motion.div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a96e]/10 ${
          isMobile ? "h-60 w-60 blur-[70px]" : "h-96 w-96 blur-3xl"
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
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c9a96e]/10 ${
          isMobile ? "h-[300px] w-[300px]" : "h-[520px] w-[520px]"
        }`}
        animate={{ rotate: 360 }}
        transition={{
          duration: isMobile ? 100 : 60,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c9a96e]/10 ${
          isMobile ? "h-[220px] w-[220px]" : "h-[380px] w-[380px]"
        }`}
        animate={{ rotate: -360 }}
        transition={{
          duration: isMobile ? 85 : 50,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="absolute left-8 top-16 h-1 w-1 rounded-full bg-[#c9a96e]" />
      <div className="absolute right-10 top-28 h-1 w-1 rounded-full bg-[#c9a96e]/70" />
      <div className="absolute bottom-24 left-12 h-1 w-1 rounded-full bg-[#c9a96e]/60" />
      <div className="absolute bottom-16 right-8 h-1 w-1 rounded-full bg-[#c9a96e]" />
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.p
          initial={{
            opacity: 0,
            y: isMobile ? 12 : 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.8 : 1,
          }}
          className="text-[10px] tracking-[0.5em] text-[#c9a96e] md:text-xs"
        >
          ආදරයෙන් ආරාධනා කරමු
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
            y: isMobile ? 20 : 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.9 : 1.1,
            delay: 0.2,
          }}
        >
          <h2 className="mt-7 text-4xl font-light leading-relaxed md:text-6xl">
            ඔබ එනතුරු
            <br />
            අපි බලා සිටිමු
          </h2>
        </motion.div>
        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          whileInView={{
            width: 70,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.8 : 1,
            delay: 0.5,
          }}
          className="my-10 h-px bg-[#c9a96e]"
        />
        <motion.p
          initial={{
            opacity: 0,
            y: isMobile ? 12 : 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.8 : 1,
            delay: 0.65,
          }}
          className="max-w-xl text-sm leading-loose text-[#d0c2bb] md:text-base"
        >
          අපේ ජීවිතයේ අලුත් පරිච්ඡේදයක්
          <br />
          ආදරයෙන් ආරම්භ කරන මේ සොඳුරු සන්ධ්‍යාවේ
          <br />
          ඔබගේ පැමිණීම අපට මහත් සතුටකි.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
            scale: isMobile ? 0.97 : 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.9 : 1.1,
            delay: 0.9,
          }}
          className="mt-12"
        >
          <p className="text-3xl font-light md:text-5xl">
            නිපුන
            <span className="mx-4 text-[#c9a96e]">&</span>
            නිපුනි 
          </p>
          <p className="mt-5 text-[10px] tracking-[0.4em] text-[#c9a96e]">
            17 · 01 · 2027
          </p>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.8 : 1,
            delay: 1.15,
          }}
          className="mt-10 text-2xl text-[#c9a96e]"
        >
          ♥
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.8 : 1,
            delay: 1.3,
          }}
          className="mt-5 text-xs tracking-[0.25em] text-[#8e4a55]"
        >
          GRAND ROYAL · KALUTARA
        </motion.p>
        <motion.p
          initial={{
            opacity: 0,
            y: isMobile ? 10 : 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.8 : 1,
            delay: 1.5,
          }}
          className="mt-12 text-xs leading-relaxed text-[#74665f]"
        >
          ඔබගේ ආදරය හා සුභ පැතුම්
          <br />
          අපේ නව ගමනට ආශිර්වාදයක් වේවා.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 1.7,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#c9a96e]"
      >
        <span className="text-sm">✦</span>
      </motion.div>
    </section>
  );
}
