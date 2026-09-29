"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WelcomeSection() {
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
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a96e]/10 ${
          isMobile ? "h-56 w-56 blur-[70px]" : "h-80 w-80 blur-3xl"
        }`}
        animate={{
          scale: isMobile ? [1, 1.08, 1] : [1, 1.15, 1],
          opacity: isMobile ? [0.25, 0.38, 0.25] : [0.3, 0.55, 0.3],
        }}
        transition={{
          duration: isMobile ? 14 : 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute -right-24 top-24 rounded-full border border-[#c9a96e]/20 ${
          isMobile ? "h-52 w-52" : "h-72 w-72"
        }`}
        animate={{ rotate: 360 }}
        transition={{
          duration: isMobile ? 85 : 45,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className={`absolute -left-24 bottom-24 rounded-full border border-[#c9a96e]/15 ${
          isMobile ? "h-48 w-48" : "h-64 w-64"
        }`}
        animate={{ rotate: -360 }}
        transition={{
          duration: isMobile ? 75 : 40,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-3xl flex-col items-center justify-center text-center">
        <motion.p
          initial={{ opacity: 0, y: isMobile ? 12 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.7 : 0.9,
          }}
          className="mb-8 text-[10px] tracking-[0.5em] text-[#8e4a55] md:text-xs"
        >
          ආදරයෙන් පිළිගනිමු
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
          }}
        >
          <p className="text-2xl font-light leading-relaxed text-[#5a222a] md:text-4xl">
            අපේ සතුටේ
            <br />
            සුන්දරම දවසක්...
          </p>
          <p className="mt-7 text-base leading-loose text-[#74665f] md:text-lg">
            අපේ ජීවිතයේ
            <br />
            අලුත් පරිච්ඡේදයක් ආරම්භ කරමින්
            <br />
            අපි දෙදෙනාගේ සතුට
            <br />
            ඔබත් සමඟ බෙදාගන්නට
            <br />
            අපි බලාපොරොත්තු වෙමු.
          </p>
        </motion.div>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 70, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.8 : 1,
            delay: isMobile ? 0.3 : 0.4,
          }}
          className="my-12 h-px bg-[#c9a96e]"
        />
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
            delay: isMobile ? 0.45 : 0.55,
          }}
          className="text-2xl text-[#8e4a55]"
        >
          ♥
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 12 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.8 : 1,
            delay: isMobile ? 0.6 : 0.75,
          }}
          className="mt-8"
        >
          <p className="text-lg font-light text-[#5a222a] md:text-2xl">
            මේ සොඳුරු සන්ධ්‍යාව
          </p>
          <p className="mt-3 text-lg font-light text-[#5a222a] md:text-2xl">
            ඔබත් සමඟින් සමරන්නට...
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.8 : 1,
            delay: isMobile ? 0.8 : 1,
          }}
          className="mt-12"
        >
          <p className="text-2xl font-light text-[#3b1118] md:text-4xl">
                නිපුන
            <span className="mx-3 text-[#c9a96e]">&</span>
                නිපුනි
          </p>
          <p className="mt-4 text-[10px] tracking-[0.4em] text-[#8e4a55]">
            17 · 01 · 2027
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
        <motion.div
          animate={{
            y: isMobile ? [0, 6, 0] : [0, 8, 0],
            opacity: [0.35, 1, 0.35],
          }}
          transition={{
            duration: isMobile ? 2.5 : 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-[#8e4a55]"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
