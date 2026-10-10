"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function RSVPSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f5f1e8] px-6 py-24 text-[#3F0306] md:px-12">
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
      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-3xl flex-col items-center justify-center">
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
          className="text-center"
        >
          <p className="text-[10px] tracking-[0.5em] text-[#3F0306] md:text-xs">
            ඔබගේ පැමිණීම
          </p>
          <h2 className="mt-6 text-3xl font-light leading-relaxed text-[#3F0306] md:text-5xl">
            අපට දන්වන්න
          </h2>
          <div className="mx-auto mt-7 h-px w-16 bg-[#c9a96e]" />
        </motion.div>
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
            delay: 0.2,
          }}
          className="mt-9 text-center"
        >
          <p className="text-base leading-loose text-[#3F0306] md:text-lg">
            මේ සොඳුරු සන්ධ්‍යාව
            <br />
            ඔබ සමඟින් සමරන්නට අපි බලාපොරොත්තු වෙමු.
          </p>
          <p className="mt-4 text-sm leading-loose text-[#74665f]">
            කරුණාකර ඔබගේ පැමිණීම
            <br />
            පහතින් තහවුරු කරන්න.
          </p>
        </motion.div>
        {!submitted ? (
          <motion.form
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
              duration: isMobile ? 0.9 : 1,
              delay: 0.4,
            }}
            onSubmit={handleSubmit}
            className="relative mt-12 w-full max-w-xl border border-[#c9a96e]/40 bg-white/30 px-6 py-8 backdrop-blur-sm md:px-10 md:py-10"
          >
            <div className="absolute left-2 top-2 h-5 w-5 border-l border-t border-[#c9a96e]" />
            <div className="absolute right-2 top-2 h-5 w-5 border-r border-t border-[#c9a96e]" />
            <div className="absolute bottom-2 left-2 h-5 w-5 border-b border-l border-[#c9a96e]" />
            <div className="absolute bottom-2 right-2 h-5 w-5 border-b border-r border-[#c9a96e]" />
            <div>
              <label
                htmlFor="guest-name"
                className="text-[10px] tracking-[0.3em] text-[#3F0306]"
              >
                ඔබගේ නම
              </label>
              <input
                id="guest-name"
                name="name"
                type="text"
                required
                placeholder="නම ඇතුළත් කරන්න"
                className="mt-3 w-full border-b border-[#c9a96e]/50 bg-transparent px-1 py-3 text-sm text-[#3F0306] outline-none placeholder:text-[#74665f]/60 focus:border-[#3F0306]"
              />
            </div>
            <div className="mt-8">
              <p className="text-[10px] tracking-[0.3em] text-[#3F0306]">
                පැමිණීම
              </p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <label className="flex cursor-pointer items-center gap-3 border border-[#c9a96e]/30 px-4 py-4 transition hover:border-[#c9a96e]">
                  <input
                    type="radio"
                    name="attendance"
                    value="attending"
                    required
                    className="accent-[#3F0306]"
                  />
                  <span className="text-sm text-[#3F0306]">පැමිණෙමි ♥</span>
                </label>
                <label className="flex cursor-pointer items-center gap-3 border border-[#c9a96e]/30 px-4 py-4 transition hover:border-[#c9a96e]">
                  <input
                    type="radio"
                    name="attendance"
                    value="not-attending"
                    required
                    className="accent-[#3F0306]"
                  />
                  <span className="text-sm text-[#3F0306]">පැමිණීමට නොහැක</span>
                </label>
              </div>
            </div>
            <div className="mt-8">
              <label
                htmlFor="guest-count"
                className="text-[10px] tracking-[0.3em] text-[#3F0306]"
              >
                පැමිණෙන පිරිස
              </label>
              <select
                id="guest-count"
                name="guestCount"
                defaultValue="1"
                className="mt-3 w-full border-b border-[#c9a96e]/50 bg-transparent px-1 py-3 text-sm text-[#3F0306] outline-none focus:border-[#3F0306]"
              >
                <option value="1">1 දෙනෙක්</option>
                <option value="2">2 දෙනෙක්</option>
                <option value="3">3 දෙනෙක්</option>
                <option value="4">4 දෙනෙක්</option>
                <option value="5">5 දෙනෙක්</option>
                <option value="6">6 දෙනෙක්</option>
              </select>
            </div>
            <div className="mt-8">
              <label
                htmlFor="message"
                className="text-[10px] tracking-[0.3em] text-[#3F0306]"
              >
                පණිවිඩයක්
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="ඔබට අප වෙත කියන්නට ඇති දෙයක්..."
                className="mt-3 w-full resize-none border-b border-[#c9a96e]/50 bg-transparent px-1 py-3 text-sm text-[#3F0306] outline-none placeholder:text-[#74665f]/60 focus:border-[#3F0306]"
              />
            </div>
            <div className="mt-10 text-center">
              <button
                type="submit"
                className="border border-[#3F0306] bg-[#3F0306] px-10 py-3 text-[10px] tracking-[0.3em] text-[#f5f1e8] transition hover:bg-[#3F0306]"
              >
                RSVP තහවුරු කරන්න
              </button>
            </div>
          </motion.form>
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
            transition={{
              duration: isMobile ? 0.7 : 0.9,
            }}
            className="relative mt-12 w-full max-w-xl border border-[#c9a96e]/40 bg-white/30 px-8 py-12 text-center backdrop-blur-sm md:px-12"
          >
            <div className="absolute left-2 top-2 h-5 w-5 border-l border-t border-[#c9a96e]" />
            <div className="absolute right-2 top-2 h-5 w-5 border-r border-t border-[#c9a96e]" />
            <div className="absolute bottom-2 left-2 h-5 w-5 border-b border-l border-[#c9a96e]" />
            <div className="absolute bottom-2 right-2 h-5 w-5 border-b border-r border-[#c9a96e]" />
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#c9a96e]">
              <span className="text-xl text-[#3F0306]">♥</span>
            </div>
            <p className="mt-7 text-xl font-light text-[#3F0306] md:text-2xl">
              ස්තූතියි!
            </p>
            <p className="mt-4 text-sm leading-loose text-[#74665f]">
              ඔබගේ ප්‍රතිචාරය අපට ලැබුණි.
              <br />
              ඔබව අපේ සොඳුරු දවසේදී
              <br />
              හමුවීමට බලාපොරොත්තු වෙමු.
            </p>
            <p className="mt-7 text-xs tracking-[0.25em] text-[#3F0306]">
                නිපුන & නිපුනි
            </p>
          </motion.div>
        )}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.8 : 1,
            delay: 0.9,
          }}
          className="mt-10 text-center text-xs leading-relaxed text-[#3F0306]"
        >
          ඔබගේ පැමිණීම අපේ සතුට තවත් වැඩි කරයි.
        </motion.p>
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
          className="text-[#3F0306]"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
