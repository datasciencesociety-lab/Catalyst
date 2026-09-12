"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    number: "01",
    title: "MENTORSHIP",
    description:
      "Get guidance from experienced builders and mentors throughout the hackathon.",
  },
  {
    number: "02",
    title: "BUILD & LEARN",
    description:
      "Learn by solving real problems and turning ideas into working solutions.",
  },
  {
    number: "03",
    title: "NETWORK",
    description:
      "Meet fellow builders, mentors and innovators from across the community.",
  },
  {
    number: "04",
    title: "COLLABORATE",
    description:
      "Work in teams, exchange ideas and experience what it takes to build together.",
  },
  {
    number: "05",
    title: "THE EXPERIENCE",
    description:
      "From icebreakers and networking to surprises along the way — make the 24 hours count.",
  },
];

const highlights = [
  "CERTIFICATES",
  "MENTORSHIP",
  "NETWORKING",
  "TEAMWORK",
  "LEARNING",
  "SURPRISES",
];

export default function WhyParticipate() {
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
      id="why-participate"
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
                  WHY PARTICIPATE
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              variants={itemVariants}
              className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-[-0.035em] text-foreground leading-[0.92] uppercase mb-6 sm:mb-8"
            >
              <span className="block">MORE THAN A</span>
              <span className="block text-foreground">HACKATHON.</span>
            </motion.h2>

            {/* Supporting Copy - Kicker */}
            <motion.p
              variants={itemVariants}
              className="font-display font-medium text-xl sm:text-2xl text-zinc-800 tracking-tight leading-snug mb-4 sm:mb-6"
            >
              Build. Learn. Connect. Experience.
            </motion.p>

            {/* Supporting Copy - Narrative */}
            <motion.p
              variants={itemVariants}
              className="text-zinc-600 text-base sm:text-lg leading-relaxed font-sans max-w-xl"
            >
              CATALYST '26 is designed to take you from an idea to something real —
              with the people, guidance and environment to make it happen.
            </motion.p>
          </motion.div>

          {/* Right Column: Numbered Experience List */}
          <div className="lg:col-span-7 flex flex-col">
            {experiences.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                }}
                className="group relative pt-6 sm:pt-8 pb-7 sm:pb-9 border-t border-border-subtle hover:border-brand-blue/40 transition-colors duration-300"
              >
                {/* Subtle expanding accent line on hover */}
                <div className="absolute top-0 left-0 w-0 h-[1.5px] bg-brand-blue transition-all duration-300 ease-out group-hover:w-16" />

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6 mb-3">
                  <div className="flex items-baseline gap-3.5 sm:gap-4">
                    <span className="font-mono text-sm sm:text-base font-semibold text-brand-blue tracking-wider transition-transform duration-200 group-hover:translate-x-1">
                      {item.number}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-zinc-900 tracking-tight transition-colors duration-200 group-hover:text-foreground">
                      {item.title}
                    </h3>
                  </div>

                  <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest hidden sm:inline group-hover:text-brand-blue transition-colors">
                    [ PHASE_{item.number} ]
                  </span>
                </div>

                <p className="text-zinc-600 group-hover:text-zinc-800 text-sm sm:text-base leading-relaxed font-sans pl-0 sm:pl-9 transition-colors duration-200 max-w-xl">
                  {item.description}
                </p>
              </motion.div>
            ))}
            <div className="w-full h-[1px] bg-border-subtle" />
          </div>
        </div>

        {/* Bottom Strip: 24-HOUR EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
          className="mt-20 md:mt-28 pt-8 border-t border-border-subtle/80 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6"
        >
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
            <span className="font-mono text-[10.5px] font-semibold text-brand-blue tracking-[0.2em] uppercase">
              24-HOUR EXPERIENCE
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-2 text-xs sm:text-[13px] font-mono tracking-wider uppercase text-zinc-600">
            {highlights.map((highlight, index) => (
              <React.Fragment key={highlight}>
                <span className="hover:text-zinc-900 transition-colors">
                  {highlight}
                </span>
                {index < highlights.length - 1 && (
                  <span className="text-zinc-300 select-none">/</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

