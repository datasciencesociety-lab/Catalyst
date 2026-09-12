"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const principles = [
    {
      number: "01 — EXPLORE",
      title: "EXPLORE",
      description:
        "Understand real problems and discover opportunities worth solving.",
    },
    {
      number: "02 — BUILD",
      title: "BUILD",
      description:
        "Turn ideas into prototypes, products and working solutions within 24 hours.",
    },
    {
      number: "03 — COLLABORATE",
      title: "COLLABORATE",
      description:
        "Learn from mentors, teammates and fellow builders while creating something together.",
    },
  ];

  return (
    <section
      id="about"
      className="py-28 md:py-36 lg:py-40 relative overflow-hidden bg-paper border-b border-border-subtle/60"
    >
      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 bg-blueprint-dot opacity-40 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Upper Composition: Editorial Story + Typographic Specification Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Section Label, Headline, Intro, Description */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
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
                  ABOUT CATALYST
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              variants={itemVariants}
              className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-[-0.035em] text-foreground leading-[0.95] uppercase mb-6 sm:mb-8"
            >
              BUILD WHAT MATTERS.
            </motion.h2>

            {/* Intro Statement */}
            <motion.p
              variants={itemVariants}
              className="font-display font-medium text-xl sm:text-2xl md:text-3xl text-zinc-800 leading-snug tracking-tight mb-6 sm:mb-8 max-w-2xl"
            >
              CATALYST '26 is where ideas move beyond discussion and become working
              solutions.
            </motion.p>

            {/* Description Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-zinc-600 text-base sm:text-lg leading-relaxed font-sans max-w-2xl"
            >
              A national 24-hour hackathon by Data Science Society, bringing
              students, developers, designers and innovators together to tackle
              real-world problems across Education, Open Innovation, FinTech, AI
              and Healthcare.
            </motion.p>
          </motion.div>

          {/* Right Column: Architectural Typographic Specification Block */}
          <motion.div
            className="lg:col-span-5 w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.65,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
          >
            <div className="relative border border-border-subtle bg-white/70 backdrop-blur-sm rounded-lg p-6 sm:p-8 md:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.02)] overflow-hidden">
              {/* Internal fine grid detail */}
              <div className="absolute inset-0 bg-blueprint-grid-fine opacity-20 pointer-events-none" />

              <div className="relative z-10">
                {/* Header Spec Annotation */}
                <div className="flex items-center justify-between pb-5 border-b border-border-subtle mb-6 sm:mb-8">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    <span className="font-mono text-[10px] font-semibold text-brand-blue tracking-[0.2em] uppercase">
                      CATALYST '26 SPEC
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest">
                    SYS.METRICS
                  </span>
                </div>

                {/* Parameters Stack */}
                <div className="space-y-6 sm:space-y-7">
                  {/* Parameter 1: Duration & Dates */}
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-1">
                      EVENT TIMEFRAME
                    </span>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-display font-bold text-2xl sm:text-3xl text-zinc-900 tracking-tight">
                        24 HOURS
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-semibold text-brand-blue uppercase tracking-wider">
                        09–10 OCT
                      </span>
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-border-subtle/80" />

                  {/* Parameter 2: Team Size */}
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-1">
                      PARTICIPATION FORMAT
                    </span>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-display font-bold text-2xl sm:text-3xl text-zinc-900 tracking-tight">
                        TEAM SIZE
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-semibold text-zinc-800 uppercase tracking-wider">
                        1–4 MEMBERS
                      </span>
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-border-subtle/80" />

                  {/* Parameter 3: Venue */}
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-1">
                      HOST INSTITUTION
                    </span>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                      <span className="font-display font-bold text-xl sm:text-2xl text-zinc-900 tracking-tight">
                        CMRIT, HYDERABAD
                      </span>
                      <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                        VENUE
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Lockup */}
                <div className="mt-8 pt-5 border-t border-border-subtle flex items-center justify-between text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                  <span>DATA SCIENCE SOCIETY</span>
                  <span className="text-brand-blue font-semibold">HYDERABAD // IN</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Lower Composition: Philosophy Statement & 3 Minimal Principle Blocks */}
        <div className="mt-24 md:mt-36 pt-16 md:pt-20 border-t border-border-subtle/80">
          {/* Philosophy Statement */}
          <motion.div
            className="max-w-3xl mb-14 md:mb-20"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
          >
            <div className="font-mono text-[10.5px] font-semibold text-brand-blue tracking-[0.2em] uppercase mb-3">
              FOUNDATIONAL BELIEF
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight text-foreground uppercase leading-tight mb-4">
              IDEAS ARE ONLY THE BEGINNING.
            </h3>
            <p className="text-zinc-600 text-base sm:text-lg md:text-xl leading-relaxed font-sans">
              Catalyst is built around one simple belief — innovation becomes
              meaningful when you build, test, collaborate and ship.
            </p>
          </motion.div>

          {/* Three Minimal Principle Blocks (Structured Manifesto Roadmap) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                }}
                className="group flex flex-col pt-6 border-t border-border-subtle hover:border-brand-blue/50 transition-colors duration-250"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold text-brand-blue tracking-widest">
                    {principle.number}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-border-subtle group-hover:bg-brand-blue transition-colors duration-250" />
                </div>
                <h4 className="font-display font-bold text-xl sm:text-2xl text-zinc-900 tracking-tight mb-3">
                  {principle.title}
                </h4>
                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-sans">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

