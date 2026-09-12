"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Official 7 stages of CATALYST '26 (easily updatable as dates evolve)
const timelineStages = [
  {
    number: "01",
    title: "REGISTRATION",
    date: "Opening Date · Announcing Soon",
    description:
      "National portal opens on Unstop. Team registration and ideation begin.",
    isPrimary: false,
  },
  {
    number: "02",
    title: "REGISTRATION CLOSES",
    date: "October 04, 2026",
    description: "Final deadline to complete team registration on Unstop.",
    isPrimary: false,
  },
  {
    number: "03",
    title: "SHORTLISTING",
    date: "Provisional Review",
    description:
      "Teams may be shortlisted if registrations exceed available capacity.",
    isPrimary: false,
  },
  {
    number: "04",
    title: "CATALYST '26",
    date: "October 09–10, 2026",
    description: "24 Hours · CMRIT, Hyderabad",
    isPrimary: true,
  },
  {
    number: "05",
    title: "PROJECT SUBMISSION",
    date: "Hour 24 · Hack Freeze",
    description: "Build → Test → Submit",
    isPrimary: false,
  },
  {
    number: "06",
    title: "JUDGING",
    date: "Evaluation Round",
    description: "Project evaluation and presentations.",
    isPrimary: false,
  },
  {
    number: "07",
    title: "AWARDS",
    date: "Closing Ceremony",
    description: "Winners announced.",
    isPrimary: false,
  },
];

export default function Timeline() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      id="timeline"
      className="py-28 md:py-36 lg:py-40 relative overflow-hidden bg-paper border-b border-border-subtle/60"
    >
      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 bg-blueprint-dot opacity-40 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 mb-5 md:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
            <span className="font-mono text-xs md:text-sm font-semibold text-brand-blue tracking-[0.22em] uppercase">
              TIMELINE
            </span>
          </div>

          <h2 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-[-0.035em] text-foreground leading-[0.92] uppercase mb-6 sm:mb-8">
            THE ROAD TO CATALYST
          </h2>

          <p className="text-zinc-600 text-base sm:text-lg md:text-xl leading-relaxed font-sans max-w-2xl">
            From registration to the final build — every stage moves you closer
            to turning an idea into something real.
          </p>
        </div>

        {/* Desktop Horizontal Blueprint Timeline */}
        <div className="hidden lg:block relative mt-16 pb-8">
          {/* Background Blueprint Connecting Guide Line */}
          <div className="absolute top-[126px] left-10 right-10 h-[1.5px] bg-border-subtle z-0" />
          <motion.div
            className="absolute top-[126px] left-10 h-[1.5px] bg-brand-blue z-0"
            initial={{ width: "0%" }}
            whileInView={{ width: "calc(100% - 80px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          />

          {/* 7 Horizontal Stations */}
          <div className="grid grid-cols-7 gap-3 relative z-10">
            {timelineStages.map((stage, idx) => {
              const isHovered = hoveredIndex === idx;

              return (
                <div
                  key={stage.number}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group flex flex-col items-center text-center cursor-default"
                >
                  {/* Top: Stage Tag & Name */}
                  <div className="h-24 flex flex-col justify-end pb-3 px-1">
                    <span className="font-mono text-[9px] font-semibold text-zinc-400 uppercase tracking-widest mb-1 group-hover:text-brand-blue transition-colors">
                      [ {stage.number} // STAGE ]
                    </span>
                    <span
                      className={`font-display font-bold text-xs xl:text-[13px] leading-tight transition-colors ${
                        stage.isPrimary
                          ? "text-brand-blue"
                          : isHovered
                          ? "text-foreground"
                          : "text-zinc-800"
                      }`}
                    >
                      {stage.title}
                    </span>
                  </div>

                  {/* Center Node on Connecting Line */}
                  <div className="h-10 flex items-center justify-center relative my-1">
                    <motion.div
                      animate={{
                        scale: isHovered ? 1.15 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                      className={`rounded-full flex items-center justify-center z-10 transition-all ${
                        stage.isPrimary
                          ? "w-9 h-9 border-2 border-brand-blue bg-white shadow-[0_0_0_4px_rgba(10,68,164,0.1)]"
                          : "w-7 h-7 border border-border-subtle bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] group-hover:border-brand-blue/60"
                      }`}
                    >
                      <span
                        className={`font-mono text-[10.5px] font-bold ${
                          stage.isPrimary
                            ? "text-brand-blue"
                            : "text-zinc-500 group-hover:text-brand-blue"
                        }`}
                      >
                        {stage.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* Bottom: Date & Short Description */}
                  <div className="pt-3 px-1 flex flex-col items-center">
                    <span
                      className={`font-mono text-[10.5px] uppercase tracking-wider block mb-1.5 ${
                        stage.isPrimary
                          ? "font-bold text-brand-blue"
                          : "font-semibold text-zinc-800"
                      }`}
                    >
                      {stage.date}
                    </span>
                    <p className="text-zinc-500 text-[11px] leading-relaxed font-sans max-w-[155px]">
                      {stage.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Recomposition */}
        <div className="block lg:hidden relative mt-12 pl-8">
          {/* Continuous Vertical Blue Guide Line */}
          <div className="absolute top-4 bottom-4 left-[14px] w-[1.5px] bg-brand-blue/30 z-0" />

          <motion.div
            className="flex flex-col gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            {timelineStages.map((stage) => (
              <motion.div
                key={stage.number}
                variants={itemVariants}
                className="relative flex items-start"
              >
                {/* Node on Vertical Line */}
                <div
                  className={`absolute -left-[27px] top-0.5 rounded-full flex items-center justify-center bg-white z-10 ${
                    stage.isPrimary
                      ? "w-8 h-8 border-2 border-brand-blue shadow-[0_0_0_3px_rgba(10,68,164,0.12)]"
                      : "w-6 h-6 border border-border-subtle shadow-sm"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] font-bold ${
                      stage.isPrimary ? "text-brand-blue" : "text-zinc-500"
                    }`}
                  >
                    {stage.number}
                  </span>
                </div>

                {/* Content Details */}
                <div
                  className={`flex-1 pl-4 pt-0.5 ${
                    stage.isPrimary
                      ? "p-4 rounded-md border border-brand-blue/30 bg-brand-blue/[0.02]"
                      : ""
                  }`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <span className="font-mono text-[9.5px] font-semibold text-zinc-400 uppercase tracking-widest">
                      STAGE_{stage.number}
                    </span>
                    <span
                      className={`font-mono text-[10px] uppercase tracking-wider ${
                        stage.isPrimary
                          ? "font-bold text-brand-blue"
                          : "font-semibold text-zinc-700"
                      }`}
                    >
                      {stage.date}
                    </span>
                  </div>

                  <h3
                    className={`font-display font-bold text-base sm:text-lg tracking-tight mb-1.5 ${
                      stage.isPrimary ? "text-brand-blue" : "text-zinc-900"
                    }`}
                  >
                    {stage.title}
                  </h3>

                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-sans">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

