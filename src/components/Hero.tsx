"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Official CATALYST '26 registration URL on Unstop (update when portal goes live)
const UNSTOP_REGISTRATION_URL = "#register";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isLive, setIsLive] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Official Event Start: October 9, 2026 at 09:00:00 AM IST
    const targetDate = new Date("2026-10-09T09:00:00+05:30").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
        setIsLive(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsLive(true);
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center pt-32 sm:pt-36 md:pt-44 pb-20 md:pb-28 overflow-hidden border-b border-border-subtle/60">
      {/* Blueprint Grid Lines & Overlay */}
      <div className="absolute inset-0 bg-blueprint-dot opacity-40 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 z-0 pointer-events-none" />

      {/* Structural blueprint frame annotations - understated and non-intrusive */}
      <div className="absolute top-24 left-6 right-6 bottom-8 border border-brand-blue/5 rounded-lg pointer-events-none z-0 hidden lg:block">
        <div className="absolute -top-2.5 left-6 bg-paper px-2 font-mono text-[9px] text-zinc-400/80 tracking-wider">
          SYS.SPEC // CATALYST_26
        </div>
        <div className="absolute -bottom-2.5 right-6 bg-paper px-2 font-mono text-[9px] text-zinc-400/80 tracking-wider">
          CMRIT.HYD // 17.4399° N, 78.4983° E
        </div>
        <div className="absolute top-1/3 -left-3 -rotate-90 bg-paper px-2 font-mono text-[9px] text-zinc-400/80 origin-center tracking-widest">
          24H_HACK
        </div>
        <div className="absolute top-2/3 -right-5 rotate-90 bg-paper px-2 font-mono text-[9px] text-zinc-400/80 origin-center tracking-widest">
          OCT_2026
        </div>
      </div>

      <div className="max-w-5xl mx-auto w-full px-6 md:px-12 relative z-10">
        <motion.div
          className="flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 1. Event Brand Label */}
          <motion.div variants={itemVariants} className="mb-5 md:mb-7">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              <span className="font-mono text-xs md:text-sm font-semibold text-brand-blue tracking-[0.24em] uppercase">
                CATALYST '26
              </span>
            </div>
          </motion.div>

          {/* 2. Main Headline (Visual Focal Point) */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[96px] xl:text-[104px] tracking-[-0.035em] text-foreground leading-[0.9] uppercase mb-7 md:mb-9"
          >
            <span className="block">WHERE IDEAS</span>
            <span className="block text-foreground">MEET ACTION.</span>
          </motion.h1>

          {/* 3. Supporting Description */}
          <motion.p
            variants={itemVariants}
            className="text-zinc-600 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed font-sans mb-10 md:mb-14"
          >
            A national 24-hour hackathon by DSS where builders turn real-world
            problems into working solutions.
          </motion.p>

          {/* 4. Primary and Secondary Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto mb-14 md:mb-18"
          >
            <a
              id="register"
              href={UNSTOP_REGISTRATION_URL}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-white bg-brand-blue rounded-xl shadow-sm hover:bg-brand-blue-hover transition-all duration-200 active:scale-[0.99] group/btn"
            >
              <span>Register Now</span>
              <span className="inline-block transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                ↗
              </span>
            </a>

            <a
              href="mailto:cmritdatasciencesociety@gmail.com?subject=Sponsorship%20Inquiry%20%E2%80%94%20Catalyst%20'26"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs sm:text-sm font-mono font-medium uppercase tracking-wider text-zinc-700 hover:text-brand-blue border border-zinc-200/90 bg-white rounded-xl hover:border-brand-blue/30 transition-all shadow-xs group/btn"
            >
              <span>Become a Sponsor</span>
              <span className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1">
                →
              </span>
            </a>
          </motion.div>

          {/* 5. Event Metadata & Registration Deadline */}
          <motion.div
            variants={itemVariants}
            className="w-full pt-10 border-t border-border-subtle/80 mb-10"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-x-3.5 sm:gap-x-4 gap-y-2 text-xs sm:text-[13px] font-mono tracking-wider uppercase">
                <span className="font-bold text-zinc-900">09–10 OCTOBER 2026</span>
                <span className="text-zinc-300 font-light select-none">/</span>
                <span className="font-medium text-zinc-600">24 HOURS</span>
                <span className="text-zinc-300 font-light select-none">/</span>
                <span className="font-medium text-zinc-600">CMRIT, HYDERABAD</span>
              </div>

              <div className="inline-flex items-center gap-2 text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400/80" />
                <span>REGISTRATIONS CLOSE · OCT 04</span>
              </div>
            </div>
          </motion.div>

          {/* 6. Restrained Engineering Countdown */}
          <motion.div
            variants={itemVariants}
            className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-border-subtle/50"
          >
            <div className="flex items-center gap-2">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isLive ? "bg-emerald-600 animate-pulse" : "bg-brand-blue"
                }`}
              />
              <span className="font-mono text-[10.5px] font-semibold tracking-[0.2em] text-zinc-500 uppercase">
                {isLive ? "HACKATHON LIVE" : "COUNTDOWN TO EVENT"}
              </span>
            </div>

            {isMounted ? (
              <div className="flex items-baseline gap-6 sm:gap-8">
                <div className="flex flex-col items-start min-w-[44px]">
                  <span className="font-mono text-xl sm:text-2xl font-bold text-zinc-800 tracking-tight leading-none">
                    {String(timeLeft.days).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 mt-1">
                    DAYS
                  </span>
                </div>

                <div className="flex flex-col items-start min-w-[44px]">
                  <span className="font-mono text-xl sm:text-2xl font-bold text-zinc-800 tracking-tight leading-none">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 mt-1">
                    HOURS
                  </span>
                </div>

                <div className="flex flex-col items-start min-w-[44px]">
                  <span className="font-mono text-xl sm:text-2xl font-bold text-zinc-800 tracking-tight leading-none">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 mt-1">
                    MIN
                  </span>
                </div>

                <div className="flex flex-col items-start min-w-[44px]">
                  <span className="font-mono text-xl sm:text-2xl font-bold text-brand-blue tracking-tight leading-none">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-brand-blue/70 mt-1">
                    SEC
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex items-baseline gap-6 sm:gap-8 opacity-40">
                {["DAYS", "HOURS", "MIN", "SEC"].map((unit) => (
                  <div key={unit} className="flex flex-col items-start min-w-[44px]">
                    <span className="font-mono text-xl sm:text-2xl font-bold text-zinc-800 tracking-tight leading-none">
                      00
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 mt-1">
                      {unit}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


