"use client";

import React from "react";
import { motion } from "framer-motion";

const timelineSteps = [
  {
    id: "01",
    phase: "Registration Starts",
    date: "Aug 1, 2026",
    status: "Active",
    description: "National registration portal opens. Teams register and begin drafting submissions.",
  },
  {
    id: "02",
    phase: "Submission Deadline",
    date: "Aug 31, 2026",
    status: "Upcoming",
    description: "Final deadline for registration and team project idea submission.",
  },
  {
    id: "03",
    phase: "Cohorts Announced",
    date: "Sep 5, 2026",
    status: "Upcoming",
    description: "Vetting completed. Shortlisted teams receive official physical invitations.",
  },
  {
    id: "04",
    phase: "Hackathon Starts",
    date: "Sep 25, 09:00 AM",
    status: "Upcoming",
    description: "Offline event starts at DSS Tech Hub. 24-hour hack countdown begins.",
  },
  {
    id: "05",
    phase: "Project Lock",
    date: "Sep 26, 09:00 AM",
    status: "Upcoming",
    description: "Repository lock. Codebases frozen, final product details submitted.",
  },
  {
    id: "06",
    phase: "Live Demos",
    date: "Sep 26, 11:00 AM",
    status: "Upcoming",
    description: "Live prototype demonstration and presentations before technical judges.",
  },
  {
    id: "07",
    phase: "Closing & Awards",
    date: "Sep 26, 03:00 PM",
    status: "Upcoming",
    description: "Closing ceremony. Awards distributed and team achievements celebrated.",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 md:py-32 relative overflow-hidden bg-base-bg border-b border-border-subtle/50">
      <div className="absolute inset-0 bg-blueprint-dot opacity-40 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 max-w-3xl">
          <div className="font-mono text-xs font-semibold text-brand-blue uppercase tracking-widest mb-3">
            04 // EVENT ROADMAP
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-zinc-900 tracking-tight leading-tight">
            A structured timeline engineered for action.
          </h2>
          <div className="w-16 h-[2px] bg-brand-blue mt-6" />
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative mt-24 pb-12">
          {/* Main Horizontal Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-zinc-200 -translate-y-1/2 z-0" />
          <motion.div 
            className="absolute top-1/2 left-0 h-[2px] bg-brand-blue -translate-y-1/2 z-0"
            initial={{ width: "0%" }}
            whileInView={{ width: "15%" }} // Active up to registration phase
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Timeline Nodes Grid */}
          <div className="grid grid-cols-7 gap-4 relative z-10">
            {timelineSteps.map((step, idx) => {
              const isActive = step.status === "Active";
              return (
                <div key={step.id} className="flex flex-col items-center text-center">
                  
                  {/* Phase ID & Name (Top) */}
                  <div className="h-20 flex flex-col justify-end pb-4">
                    <span className="font-mono text-[9px] text-zinc-400 font-semibold mb-1">
                      [{step.id} // PHASE]
                    </span>
                    <span className={`font-display font-bold text-sm leading-tight ${isActive ? "text-brand-blue" : "text-zinc-700"}`}>
                      {step.phase}
                    </span>
                  </div>

                  {/* Connecting Node */}
                  <div className="relative my-4 flex items-center justify-center">
                    <motion.div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center bg-white z-10 ${
                        isActive 
                          ? "border-brand-blue shadow-[0_0_12px_rgba(10,68,164,0.3)]" 
                          : "border-zinc-300"
                      }`}
                      whileHover={{ scale: 1.15 }}
                    >
                      <div className={`w-2.5 h-2.5 rounded-full ${isActive ? "bg-brand-blue animate-pulse" : "bg-zinc-200"}`} />
                    </motion.div>
                  </div>

                  {/* Details (Bottom) */}
                  <div className="pt-4 px-2">
                    <span className={`font-mono text-[10px] font-bold block mb-2 ${isActive ? "text-brand-blue" : "text-zinc-500"}`}>
                      {step.date}
                    </span>
                    <p className="text-zinc-400 text-[11px] leading-relaxed font-sans max-w-[150px] mx-auto">
                      {step.description}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="block lg:hidden relative mt-12 pl-6">
          {/* Vertical progress line */}
          <div className="absolute top-2 bottom-2 left-[11px] w-[2px] bg-zinc-200 z-0" />
          <div className="absolute top-2 left-[11px] w-[2px] h-[15%] bg-brand-blue z-0" />

          <div className="flex flex-col gap-10">
            {timelineSteps.map((step) => {
              const isActive = step.status === "Active";
              return (
                <div key={step.id} className="relative flex items-start gap-4">
                  {/* Indicator Dot */}
                  <div className="absolute left-[-21px] top-1.5 w-6 h-6 rounded-full border-2 border-zinc-300 flex items-center justify-center bg-white z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-250" />
                  </div>
                  {isActive && (
                    <div className="absolute left-[-21px] top-1.5 w-6 h-6 rounded-full border-2 border-brand-blue flex items-center justify-center bg-white z-10 shadow-[0_0_10px_rgba(10,68,164,0.2)]">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-blue animate-pulse" />
                    </div>
                  )}

                  {/* Content card */}
                  <div className="flex-1 bg-white border border-border-subtle rounded-lg p-5 shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-[9px] text-zinc-400 font-semibold">
                        [{step.id} // PHASE]
                      </span>
                      <span className={`font-mono text-[9px] font-bold px-2 py-0.5 rounded ${
                        isActive ? "bg-brand-blue-light text-brand-blue" : "bg-zinc-50 text-zinc-500"
                      }`}>
                        {step.date}
                      </span>
                    </div>
                    <h3 className={`font-display font-semibold text-sm ${isActive ? "text-brand-blue" : "text-zinc-800"}`}>
                      {step.phase}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-relaxed font-sans mt-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
