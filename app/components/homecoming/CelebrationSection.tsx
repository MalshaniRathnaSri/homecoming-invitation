"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CelebrationSection() {
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
    <section className="relative min-h-screen overflow-hidden bg-[#f5f1e8] px-6 py-24 text-[#3b1118] md:px-12">
      <motion.div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8e4a55]/10 ${
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
          isMobile ? "h-52 w-52" : "h-80 w-80"
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
          isMobile ? "h-56 w-56" : "h-96 w-96"
        }`}
        animate={{ rotate: -360 }}
        transition={{
          duration: isMobile ? 100 : 55,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center text-center">
        <motion.p
          initial={{ opacity: 0, y: isMobile ? 12 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.7 : 0.9,
          }}
          className="text-[10px] tracking-[0.5em] text-[#8e4a55] md:text-xs"
        >
          සැමරුම
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
            y: isMobile ? 18 : 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.8 : 1,
            delay: 0.15,
          }}
        >
          <h2 className="mt-6 text-3xl font-light leading-relaxed text-[#3b1118] md:text-5xl">
            අපේ නව ගමනේ
            <br />
            සොඳුරු සැමරුම
          </h2>
          <div className="mx-auto mt-7 h-px w-16 bg-[#c9a96e]" />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scale: isMobile ? 0.9 : 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.8 : 1,
            delay: 0.4,
          }}
          className="mt-12 flex items-center gap-5"
        >
          <span className="h-px w-12 bg-[#c9a96e]/60 md:w-20" />
          <span className="text-2xl text-[#8e4a55]">♥</span>
          <span className="h-px w-12 bg-[#c9a96e]/60 md:w-20" />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: isMobile ? 15 : 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.8 : 1,
            delay: 0.55,
          }}
          className="mt-10 max-w-2xl"
        >
          <p className="text-xl font-light leading-loose text-[#5a222a] md:text-3xl">
            අපේ ආදරයේ
            <br />
            සතුටත් සෙනෙහසත්
            <br />
            ඔබත් සමඟ බෙදාගන්නට...
          </p>
          <p className="mt-7 text-sm leading-loose text-[#74665f] md:text-base">
            අපේ ජීවිතයේ නව පරිච්ඡේදයක්
            <br />
            ආදරයෙන් හා සතුටින් සමරන
            <br />
            මේ සොඳුරු අවස්ථාව
            <br />
            ඔබගේ පැමිණීමෙන් තවත් අර්ථවත් වේ.
          </p>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: isMobile ? 15 : 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.8 : 1,
            delay: 0.8,
          }}
          className="relative mt-12 flex h-24 w-48 items-center justify-center border border-[#c9a96e]/40 md:h-28 md:w-64"
        >
          <div className="absolute -left-1 -top-1 h-3 w-3 border-l border-t border-[#c9a96e]" />
          <div className="absolute -right-1 -top-1 h-3 w-3 border-r border-t border-[#c9a96e]" />
          <div className="absolute -bottom-1 -left-1 h-3 w-3 border-b border-l border-[#c9a96e]" />
          <div className="absolute -bottom-1 -right-1 h-3 w-3 border-b border-r border-[#c9a96e]" />
          <p className="text-sm tracking-[0.25em] text-[#8e4a55] md:text-base">
            17 · 01 · 2027
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.8 : 1,
            delay: 1,
          }}
          className="mt-10 text-xs tracking-[0.25em] text-[#8e4a55] md:text-sm"
        >
          ඔබගේ ආදරය අපට සතුටකි
        </motion.p>
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
          className="text-[#8e4a55]"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
