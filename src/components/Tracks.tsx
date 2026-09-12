"use client";

import React from "react";
import { motion } from "framer-motion";

const tracks = [
  {
    number: "01",
    slug: "ai",
    title: "AI",
    description:
      "Intelligence, automation and the technologies shaping what comes next.",
    path: "/problems/ai",
  },
  {
    number: "02",
    slug: "healthcare",
    title: "HEALTHCARE",
    description:
      "Technology and innovation for better health, accessibility and care.",
    path: "/problems/healthcare",
  },
  {
    number: "03",
    slug: "fintech",
    title: "FINTECH",
    description:
      "Reimagining how people interact with money, financial services and opportunity.",
    path: "/problems/fintech",
  },
  {
    number: "04",
    slug: "education",
    title: "EDUCATION",
    description:
      "Building more accessible, engaging and effective ways to learn.",
    path: "/problems/education",
  },
  {
    number: "05",
    slug: "open-innovation",
    title: "OPEN INNOVATION",
    description:
      "No boundaries. Solve a meaningful problem with an idea of your own.",
    path: "/problems/open-innovation",
  },
];

export default function Tracks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
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
    <section
      id="tracks"
      className="py-28 md:py-36 lg:py-40 relative overflow-hidden bg-paper border-b border-border-subtle/60"
    >
      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 bg-blueprint-dot opacity-40 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Main Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Section Label, Dominant Headline, Supporting Narrative */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Section Label */}
            <motion.div variants={itemVariants} className="mb-5 md:mb-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                <span className="font-mono text-xs md:text-sm font-semibold text-brand-blue tracking-[0.22em] uppercase">
                  TRACKS
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              variants={itemVariants}
              className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-[-0.035em] text-foreground leading-[0.92] uppercase mb-6 sm:mb-8"
            >
              <span className="block">FIVE DOMAINS.</span>
              <span className="block text-foreground">ENDLESS POSSIBILITIES.</span>
            </motion.h2>

            {/* Supporting Copy */}
            <motion.p
              variants={itemVariants}
              className="font-display font-medium text-lg sm:text-xl text-zinc-800 tracking-tight leading-snug max-w-md mb-8"
            >
              Choose a domain. Find a problem worth solving. Build something that matters.
            </motion.p>

            {/* Technical metadata footnote */}
            <motion.div
              variants={itemVariants}
              className="hidden lg:flex items-center gap-2 text-[10.5px] font-mono text-zinc-400 uppercase tracking-wider pt-6 border-t border-border-subtle/80 w-full max-w-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
              <span>SPEC: 5_DOMAINS // NATIONAL_SCOPE</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Vertically Stacked Track Index */}
          <div className="lg:col-span-7 flex flex-col border-t border-border-subtle">
            {tracks.map((track, index) => (
              <motion.div
                key={track.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                }}
                className="group relative border-b border-border-subtle py-8 sm:py-10 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-lg transition-colors duration-250 hover:bg-white/70"
              >
                {/* Header: Track Number, Name, Abstract Geometric Tag */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 sm:gap-6 mb-3">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm sm:text-base font-semibold text-zinc-400 group-hover:text-brand-blue tracking-wider transition-colors duration-200">
                      {track.number}
                    </span>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-zinc-900 tracking-tight transition-colors duration-200 group-hover:text-foreground">
                      {track.title}
                    </h3>
                  </div>

                  <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    [ DOMAIN_{track.number} // ACTIVE ]
                  </span>
                </div>

                {/* Description */}
                <p className="text-zinc-600 group-hover:text-zinc-800 text-sm sm:text-base leading-relaxed font-sans max-w-xl mb-5 pl-0 sm:pl-9 transition-colors duration-200">
                  {track.description}
                </p>

                {/* Problem Statement Architecture Link */}
                <div className="pl-0 sm:pl-9 flex items-center">
                  <a
                    href={track.path}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-brand-blue hover:text-brand-blue-hover transition-colors focus:outline-none focus:ring-1 focus:ring-brand-blue rounded py-1"
                    aria-label={`Explore problem statements for ${track.title}`}
                  >
                    <span>Explore Problems</span>
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">
                      →
                    </span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

