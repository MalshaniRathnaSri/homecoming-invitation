"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
const initialTime: TimeLeft = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

export default function CountdownSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(initialTime);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const targetDate = new Date("2027-01-17T19:00:00+05:30").getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft(initialTime);
        setIsFinished(true);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    {
      value: timeLeft.days,
      label: "දින",
    },
    {
      value: timeLeft.hours,
      label: "පැය",
    },
    {
      value: timeLeft.minutes,
      label: "මිනිත්තු",
    },
    {
      value: timeLeft.seconds,
      label: "තත්පර",
    },
  ];

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
        className={`absolute -left-24 top-20 rounded-full border border-[#c9a96e]/15 ${
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
      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-5xl flex-col items-center justify-center text-center">
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
          }}
        >
          <p className="text-[10px] tracking-[0.5em] text-[#c9a96e] md:text-xs">
            අපේ විශේෂ දවසට
          </p>
          <h2 className="mt-6 text-3xl font-light leading-relaxed md:text-5xl">
            තවත් කොපමණ
            <br />
            කාලයක්ද?
          </h2>
          <div className="mx-auto mt-7 h-px w-16 bg-[#c9a96e]" />
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
            delay: 0.2,
          }}
          className="mt-10"
        >
          <p className="text-sm tracking-[0.25em] text-[#d0c2bb]">
            17 · 01 · 2027
          </p>

          <p className="mt-3 text-xs tracking-[0.35em] text-[#c9a96e]">
            සවස 7.00
          </p>
        </motion.div>
        {!isFinished ? (
          <div className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {timeBlocks.map((block, index) => (
              <motion.div
                key={block.label}
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
                  duration: isMobile ? 0.7 : 0.9,
                  delay: 0.35 + index * 0.1,
                }}
                className="relative border border-[#c9a96e]/30 bg-[#100b0c]/30 px-4 py-7 backdrop-blur-sm md:px-6 md:py-9"
              >
                <div className="absolute left-1 top-1 h-3 w-3 border-l border-t border-[#c9a96e]/60" />
                <div className="absolute right-1 top-1 h-3 w-3 border-r border-t border-[#c9a96e]/60" />
                <div className="absolute bottom-1 left-1 h-3 w-3 border-b border-l border-[#c9a96e]/60" />
                <div className="absolute bottom-1 right-1 h-3 w-3 border-b border-r border-[#c9a96e]/60" />
                <motion.p
                  key={block.value}
                  initial={{ opacity: 0.5, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-4xl font-light text-[#f5f1e8] md:text-5xl"
                >
                  {String(block.value).padStart(2, "0")}
                </motion.p>
                <p className="mt-3 text-[10px] tracking-[0.25em] text-[#c9a96e] md:text-xs">
                  {block.label}
                </p>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="mt-14 border border-[#c9a96e]/40 px-10 py-8"
          >
            <p className="text-xl font-light text-[#f5f1e8] md:text-2xl">
              අදයි අපේ සොඳුරු දවස! ♥
            </p>
            <p className="mt-3 text-sm text-[#d0c2bb]">
              ඔබව ආදරයෙන් බලා සිටිමු.
            </p>
          </motion.div>
        )}
        <motion.div
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
            delay: 0.8,
          }}
          className="mt-12 max-w-xl text-center"
        >
          <p className="text-base font-light leading-loose text-[#e0d8cd] md:text-lg">
            අපේ සතුටේ මේ සොඳුරු හමුවීම
            <br />
            වෙනුවෙන් අපි බලා සිටිමු...
          </p>
          <div className="mt-7 text-xl text-[#c9a96e]">✦</div>
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
