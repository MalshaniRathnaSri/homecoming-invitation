"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ParentsSection() {
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
          opacity: isMobile ? [0.2, 0.35, 0.2] : [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: isMobile ? 14 : 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute -left-24 top-24 rounded-full border border-[#c9a96e]/15 ${
          isMobile ? "h-52 w-52" : "h-80 w-80"
        }`}
        animate={{ rotate: -360 }}
        transition={{
          duration: isMobile ? 95 : 55,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className={`absolute -right-28 bottom-20 rounded-full border border-[#c9a96e]/10 ${
          isMobile ? "h-56 w-56" : "h-96 w-96"
        }`}
        animate={{ rotate: 360 }}
        transition={{
          duration: isMobile ? 105 : 60,
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
            දෙමාපිය ආශිර්වාදය
          </p>
          <h2 className="mt-6 text-3xl font-light leading-relaxed md:text-5xl">
            ආදරයෙන්...
            <br />
            ආශිර්වාදයෙන්...
          </h2>
          <div className="mx-auto mt-7 h-px w-16 bg-[#c9a96e]" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: isMobile ? 12 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.8 : 1,
            delay: 0.25,
          }}
          className="mt-10 max-w-2xl text-center text-sm leading-loose text-[#d0c2bb] md:text-base"
        >
          අපේ ජීවිතයේ මේ සොඳුරු ගමනට
          <br />
          ශක්තියක් වූ අපේ ආදරණීය දෙමාපියන්ගේ
          <br />
          ආදරය හා ආශිර්වාදය සමඟින්...
        </motion.p>
        <div className="mt-14 grid w-full max-w-3xl gap-8 md:grid-cols-2">
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
              duration: isMobile ? 0.8 : 1,
              delay: 0.4,
            }}
            className="relative border border-[#c9a96e]/25 bg-[#100b0c]/30 px-7 py-9 text-center backdrop-blur-sm md:px-10"
          >
            <div className="absolute left-2 top-2 h-5 w-5 border-l border-t border-[#c9a96e]/60" />
            <div className="absolute right-2 top-2 h-5 w-5 border-r border-t border-[#c9a96e]/60" />
            <div className="absolute bottom-2 left-2 h-5 w-5 border-b border-l border-[#c9a96e]/60" />
            <div className="absolute bottom-2 right-2 h-5 w-5 border-b border-r border-[#c9a96e]/60" />
            <p className="text-[9px] tracking-[0.4em] text-[#c9a96e] md:text-[10px]">
              මනාලියගේ දෙමාපියන්
            </p>
            <div className="mx-auto my-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#c9a96e]/40">
              <span className="text-lg text-[#c9a96e]">♥</span>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-light text-[#f5f1e8] md:text-xl">
                රත්නපාල ප්‍රනාන්දු
              </p>
              <p className="text-lg font-light text-[#f5f1e8] md:text-xl">
                ශ්‍රියානි මුණසිංහ
              </p>
            </div>
            <p className="mt-5 text-xs leading-relaxed text-[#bfaeb0]">
              ආදරය හා ආශිර්වාදය
              <br />
              සමඟින්
            </p>
          </motion.div>
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
              duration: isMobile ? 0.8 : 1,
              delay: isMobile ? 0.55 : 0.6,
            }}
            className="relative border border-[#c9a96e]/25 bg-[#100b0c]/30 px-7 py-9 text-center backdrop-blur-sm md:px-10"
          >
            <div className="absolute left-2 top-2 h-5 w-5 border-l border-t border-[#c9a96e]/60" />
            <div className="absolute right-2 top-2 h-5 w-5 border-r border-t border-[#c9a96e]/60" />
            <div className="absolute bottom-2 left-2 h-5 w-5 border-b border-l border-[#c9a96e]/60" />
            <div className="absolute bottom-2 right-2 h-5 w-5 border-b border-r border-[#c9a96e]/60" />
            <p className="text-[9px] tracking-[0.4em] text-[#c9a96e] md:text-[10px]">
              මනාලයාගේ දෙමාපියන්
            </p>
            <div className="mx-auto my-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#c9a96e]/40">
              <span className="text-lg text-[#c9a96e]">♥</span>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-light text-[#f5f1e8] md:text-xl">
                ගම්මනගේ සුනිල්
              </p>
              <p className="text-lg font-light text-[#f5f1e8] md:text-xl">
                අලවත්තගේ රූපිකා
              </p>
            </div>
            <p className="mt-5 text-xs leading-relaxed text-[#bfaeb0]">
              ආදරය හා ආශිර්වාදය
              <br />
              සමඟින්
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.8 : 1,
            delay: 0.8,
          }}
          className="mt-12 text-center"
        >
          <p className="text-sm leading-loose text-[#d0c2bb] md:text-base">
            ඔවුන්ගේ ආදරය හා ආශිර්වාදය
            <br />
            අපේ ගමනට සදා ආලෝකයක් වේවා...
          </p>
          <div className="mt-6 text-xl text-[#c9a96e]">✦</div>
        </motion.div>
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
