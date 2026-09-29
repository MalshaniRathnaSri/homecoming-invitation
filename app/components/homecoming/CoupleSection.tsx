"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CoupleSection() {
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
    <section className="relative min-h-screen overflow-hidden bg-[#3b1118] px-6 py-24 text-[#f5f1e8] md:px-12">
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
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c9a96e]/15 ${
          isMobile ? "h-[320px] w-[320px]" : "h-[540px] w-[540px]"
        }`}
        animate={{ rotate: 360 }}
        transition={{
          duration: isMobile ? 90 : 50,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-5xl flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 15 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.8 : 1,
          }}
          className="text-center"
        >
          <p className="text-[10px] tracking-[0.5em] text-[#c9a96e] md:text-xs">
            නිපුන & නිපුනි
          </p>

          <h2 className="mt-5 text-3xl font-light md:text-5xl">
            අපේ සොඳුරු මතකයක්
          </h2>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: isMobile ? 20 : 35,
            scale: isMobile ? 0.98 : 0.96,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.9 : 1.2,
            delay: isMobile ? 0.2 : 0.3,
          }}
          className="relative mt-12 w-full max-w-md"
        >
          <div className="absolute -inset-3 rounded-sm border border-[#c9a96e]/30" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#5a222a]">
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
              <div className="mb-5 text-3xl text-[#c9a96e]/70">♥</div>
              <p className="text-sm tracking-wide text-[#e0d8cd]/80">
                අපේ මතකයක්
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[#c9a96e]/70">
                ඔබේ සුන්දර ඡායාරූපය
                <br />
                මෙහි එක් කරන්න
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#3b1118]/40 via-transparent to-[#c9a96e]/5" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 12 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.8 : 1,
            delay: isMobile ? 0.5 : 0.7,
          }}
          className="mt-10 text-center"
        >
          <p className="text-lg font-light leading-relaxed text-[#e0d8cd] md:text-2xl">
            එකට සිනාසුණු...
            <br />
            එකට මතක එකතු කළ...
          </p>

          <p className="mt-5 text-sm leading-loose text-[#bfaeb0] md:text-base">
            අපේ ජීවිතයේ සුන්දරම මොහොතන්
            <br />
            ඔබ සමඟ බෙදාගන්නට...
          </p>
        </motion.div>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 50, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.7 : 0.9,
            delay: isMobile ? 0.7 : 0.9,
          }}
          className="mt-10 h-px bg-[#c9a96e]/70"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 1.1,
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
          className="text-[#c9a96e]"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
