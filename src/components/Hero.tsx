"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Set target date: September 25, 2026 at 09:00:00 AM IST
    const targetDate = new Date("2026-09-25T09:00:00+05:30").getTime();

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
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden border-b border-border-subtle/50">
      {/* Blueprint Grid Lines & Overlay */}
      <div className="absolute inset-0 bg-blueprint-dot opacity-60 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 z-0 pointer-events-none" />
      
      {/* Structural blueprint frames */}
      <div className="absolute top-24 left-6 right-6 bottom-8 border border-brand-blue/5 rounded-lg pointer-events-none z-0 hidden md:block">
        {/* Outer frame annotations */}
        <div className="absolute -top-3 left-4 bg-paper px-2 font-mono text-[9px] text-zinc-400">
          SYS.SRC.INIT // CATALYST_26
        </div>
        <div className="absolute -bottom-3 right-4 bg-paper px-2 font-mono text-[9px] text-zinc-400">
          DSS.LAB // 12.9716 N, 77.5946 E
        </div>
        <div className="absolute top-1/3 -left-3 -rotate-90 bg-paper px-2 font-mono text-[9px] text-zinc-400 origin-center">
          DIV_GRID_40x40
        </div>
        <div className="absolute top-2/3 -right-6 rotate-90 bg-paper px-2 font-mono text-[9px] text-zinc-400 origin-center">
          STAGE_BUILD_01
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Main Content Area */}
        <motion.div 
          className="lg:col-span-8 flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tag */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 border border-brand-blue/20 bg-brand-blue/[0.03] rounded-full px-3 py-1 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
            <span className="font-mono text-[10px] font-semibold text-brand-blue tracking-wider uppercase">
              India's Premier Student Hackathon
            </span>
          </motion.div>

          {/* Huge Title */}
          <motion.h1 
            variants={itemVariants}
            className="font-display font-bold text-5xl md:text-8xl tracking-tight text-foreground leading-[0.95]"
          >
            CATALYST <span className="text-brand-blue font-light block md:inline">'26</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div 
            variants={itemVariants}
            className="font-display font-medium text-lg md:text-2xl text-brand-blue mt-4 md:mt-6 tracking-wide"
          >
            Where Ideas Meet Action.
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-zinc-500 text-sm md:text-base max-w-xl mt-6 leading-relaxed font-sans"
          >
            A national 24-hour hackathon bringing together developers, designers, innovators, and builders to solve meaningful real-world problems. Designed for those who code with purpose and build for impact.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 mt-8 w-full sm:w-auto"
          >
            <a
              id="register"
              href="#register"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center px-8 py-3.5 text-xs font-mono font-medium text-white bg-brand-blue rounded-md shadow-sm hover:bg-brand-blue-hover transition-all duration-300 hover:shadow-[0_4px_20px_rgba(10,68,164,0.2)] hover:-translate-y-0.5 active:scale-98"
            >
              Register for Catalyst
            </a>
            <a
              href="#sponsors"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center px-8 py-3.5 text-xs font-mono font-medium text-zinc-700 bg-white border border-zinc-200 rounded-md hover:bg-zinc-50 hover:border-zinc-300 transition-all duration-300 hover:-translate-y-0.5 active:scale-98"
            >
              Become a Sponsor
            </a>
          </motion.div>

          {/* Meta details (Date, Venue, Hours) */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-border-subtle/80 w-full max-w-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-white border border-zinc-150 rounded-lg shadow-sm text-brand-blue">
                <Calendar size={16} />
              </div>
              <div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Date</div>
                <div className="text-xs font-semibold text-zinc-700">September 25–26, 2026</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-white border border-zinc-150 rounded-lg shadow-sm text-brand-blue">
                <MapPin size={16} />
              </div>
              <div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Venue</div>
                <div className="text-xs font-semibold text-zinc-700">DSS Tech Hub, India</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-white border border-zinc-150 rounded-lg shadow-sm text-brand-blue">
                <Clock size={16} />
              </div>
              <div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Duration</div>
                <div className="text-xs font-semibold text-zinc-700">24 Hours Live Hack</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Live Countdown Timer Area */}
        <motion.div 
          className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          <div className="w-full max-w-sm bg-white border border-border-subtle rounded-xl p-6 shadow-[0_12px_40px_rgba(0,0,0,0.03)] relative overflow-hidden group">
            {/* Fine grid details inside the countdown card */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-blueprint-grid-fine opacity-20 border-l border-b border-brand-blue/5 rounded-bl-xl pointer-events-none" />
            
            <div className="flex justify-between items-center mb-6">
              <span className="font-mono text-[10px] font-semibold text-brand-blue tracking-wider uppercase">
                Time to Catalyst '26
              </span>
              <span className="font-mono text-[9px] text-zinc-400">
                [ LIVE_COUNT ]
              </span>
            </div>

            {/* Countdown grid */}
            {isMounted ? (
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-zinc-50 border border-zinc-100 rounded-lg p-3 relative">
                  <div className="font-display font-semibold text-2xl md:text-3xl text-zinc-800">
                    {String(timeLeft.days).padStart(2, "0")}
                  </div>
                  <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider mt-1">Days</div>
                </div>
                <div className="bg-zinc-50 border border-zinc-100 rounded-lg p-3 relative">
                  <div className="font-display font-semibold text-2xl md:text-3xl text-zinc-800">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </div>
                  <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider mt-1">Hrs</div>
                </div>
                <div className="bg-zinc-50 border border-zinc-100 rounded-lg p-3 relative">
                  <div className="font-display font-semibold text-2xl md:text-3xl text-zinc-800">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </div>
                  <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider mt-1">Mins</div>
                </div>
                <div className="bg-zinc-50 border border-zinc-100 rounded-lg p-3 relative">
                  <div className="font-display font-semibold text-2xl md:text-3xl text-brand-blue">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </div>
                  <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider mt-1">Secs</div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-2 text-center opacity-50">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-zinc-50 border border-zinc-100 rounded-lg p-3">
                    <div className="font-display font-semibold text-2xl text-zinc-800">00</div>
                    <div className="text-[9px] font-mono text-zinc-400 uppercase mt-1">...</div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs">
              <span className="text-zinc-500 font-sans">Applications close soon.</span>
              <a href="#register" className="font-mono text-brand-blue hover:text-brand-blue-hover font-semibold inline-flex items-center gap-1 group/link">
                Apply now
                <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
