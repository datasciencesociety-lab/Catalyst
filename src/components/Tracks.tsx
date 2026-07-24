"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Brain, HeartPulse, GraduationCap, Globe, LineChart, Cpu, ArrowUpRight } from "lucide-react";

const tracks = [
  {
    id: "01",
    title: "Artificial Intelligence",
    icon: Brain,
    description: "Develop generative AI workflows, agentic systems, custom deep learning architectures, semantic search pipelines, or computer vision engines.",
    blueprint: (
      <svg className="w-full h-full opacity-10 group-hover:opacity-20 transition-opacity duration-300" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="30" stroke="#0A44A4" strokeWidth="0.5" strokeDasharray="2 2" />
        <rect x="35" y="35" width="30" height="30" stroke="#0A44A4" strokeWidth="0.5" />
        <line x1="15" y1="50" x2="85" y2="50" stroke="#0A44A4" strokeWidth="0.5" />
        <line x1="50" y1="15" x2="50" y2="85" stroke="#0A44A4" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="4" fill="#0A44A4" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Healthcare Tech",
    icon: HeartPulse,
    description: "Solve clinical bottlenecks. Build diagnostic pipelines, predictive health modeling, medical image classifiers, or assistive accessibility tools.",
    blueprint: (
      <svg className="w-full h-full opacity-10 group-hover:opacity-20 transition-opacity duration-300" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="25" stroke="#0A44A4" strokeWidth="0.5" />
        <path d="M 35,50 L 45,50 L 48,35 L 52,65 L 55,50 L 65,50" stroke="#0A44A4" strokeWidth="0.75" />
        <line x1="50" y1="10" x2="50" y2="90" stroke="#0A44A4" strokeWidth="0.25" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Education & Learning",
    icon: GraduationCap,
    description: "Architect educational systems: build adaptive learning agents, interactive syllabus generators, and tools to democratize complex concepts.",
    blueprint: (
      <svg className="w-full h-full opacity-10 group-hover:opacity-20 transition-opacity duration-300" viewBox="0 0 100 100" fill="none">
        <polygon points="50,25 80,40 50,55 20,40" stroke="#0A44A4" strokeWidth="0.5" />
        <path d="M 30,47 L 30,65 Q 50,75 70,65 L 70,47" stroke="#0A44A4" strokeWidth="0.5" fill="none" />
        <line x1="50" y1="55" x2="50" y2="85" stroke="#0A44A4" strokeWidth="0.5" strokeDasharray="1 1" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Data Science & Finance",
    icon: LineChart,
    description: "Derive key insights: implement predictive modeling, spatial mapping, anomaly detection systems, or decentralized financial models.",
    blueprint: (
      <svg className="w-full h-full opacity-10 group-hover:opacity-20 transition-opacity duration-300" viewBox="0 0 100 100" fill="none">
        <rect x="20" y="20" width="60" height="60" stroke="#0A44A4" strokeWidth="0.5" strokeDasharray="2 2" />
        <path d="M 25,70 L 40,55 L 55,60 L 75,35" stroke="#0A44A4" strokeWidth="1" fill="none" />
        <circle cx="25" cy="70" r="3" fill="#0A44A4" />
        <circle cx="40" cy="55" r="3" fill="#0A44A4" />
        <circle cx="55" cy="60" r="3" fill="#0A44A4" />
        <circle cx="75" cy="35" r="3" fill="#0A44A4" />
      </svg>
    ),
  },
  {
    id: "05",
    title: "Open Innovation",
    icon: Globe,
    description: "Design without boundaries. Build any software solution, developer utility, or hardware integration addressing clear engineering challenges.",
    blueprint: (
      <svg className="w-full h-full opacity-10 group-hover:opacity-20 transition-opacity duration-300" viewBox="0 0 100 100" fill="none">
        <rect x="25" y="25" width="50" height="50" rx="25" stroke="#0A44A4" strokeWidth="0.5" />
        <line x1="25" y1="25" x2="75" y2="75" stroke="#0A44A4" strokeWidth="0.5" />
        <line x1="75" y1="25" x2="25" y2="75" stroke="#0A44A4" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="8" fill="white" stroke="#0A44A4" strokeWidth="0.5" />
      </svg>
    ),
  },
];

export default function Tracks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="tracks" className="py-24 md:py-32 relative overflow-hidden bg-white border-b border-border-subtle/50">
      <div className="absolute inset-0 bg-blueprint-dot opacity-40 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 max-w-3xl">
          <div className="font-mono text-xs font-semibold text-brand-blue uppercase tracking-widest mb-3">
            03 // THEMATIC TRACKS
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-zinc-900 tracking-tight leading-tight">
            Targeted domains designed for real-world application.
          </h2>
          <div className="w-16 h-[2px] bg-brand-blue mt-6" />
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, idx) => {
            const Icon = track.icon;
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={track.id}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative h-72 bg-white border border-border-subtle rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_rgba(10,68,164,0.04)] hover:border-brand-blue/30 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
              >
                {/* Blueprint Graphic Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 pointer-events-none">
                  {track.blueprint}
                </div>

                {/* Top header details */}
                <div className="flex justify-between items-start z-10">
                  <span className="font-mono text-xs text-zinc-400 font-semibold">
                    [{track.id} // TRK]
                  </span>
                  <div className="p-2 border border-zinc-100 group-hover:border-brand-blue/15 rounded-lg bg-zinc-50 group-hover:bg-brand-blue/[0.02] text-zinc-400 group-hover:text-brand-blue transition-colors duration-300">
                    <Icon size={18} />
                  </div>
                </div>

                {/* Animated content */}
                <div className="z-10 mt-auto">
                  <motion.div
                    animate={{ y: isHovered ? -12 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  >
                    <h3 className="font-display font-bold text-xl text-zinc-800 tracking-tight mb-2 group-hover:text-brand-blue transition-colors">
                      {track.title}
                    </h3>
                  </motion.div>

                  {/* Description reveals on hover */}
                  <div className="h-0 group-hover:h-20 opacity-0 group-hover:opacity-100 transition-all duration-350 ease-out overflow-hidden">
                    <p className="text-zinc-500 text-xs md:text-sm leading-relaxed font-sans">
                      {track.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-50 text-[10px] font-mono text-zinc-400">
                    <span>ACCESSIBILITY: OPEN</span>
                    <span className="flex items-center gap-0.5 group-hover:text-brand-blue transition-colors">
                      DEMO_PACK <ArrowUpRight size={10} />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
