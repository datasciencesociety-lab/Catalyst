"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Compass, Network, Briefcase, Presentation, Award } from "lucide-react";

const cards = [
  {
    id: "01",
    title: "Build Innovative Solutions",
    description: "Tackle challenging real-world problems and engineer production-grade applications using modern AI, machine learning, and full-stack tech.",
    icon: Code2,
  },
  {
    id: "02",
    title: "Learn From Experts",
    description: "Receive live mentoring, design critique, and code reviews from industry-leading engineers, researchers, and product designers.",
    icon: Compass,
  },
  {
    id: "03",
    title: "High-Caliber Networking",
    description: "Connect with a national pool of exceptional developers, founders, and designers. Build friendships and teams that outlast the event.",
    icon: Network,
  },
  {
    id: "04",
    title: "Internship Opportunities",
    description: "Submit your work directly to recruiting sponsors and stand a chance to interview for exclusive developer, analyst, and design roles.",
    icon: Briefcase,
  },
  {
    id: "05",
    title: "Industry Exposure",
    description: "Pitch your ideas and demos to venture capitalists, tech executives, and academic researchers evaluating engineering viability.",
    icon: Presentation,
  },
  {
    id: "06",
    title: "Exciting Rewards",
    description: "Gain access to premium software subscriptions, cloud hosting credits, design licenses, exclusive swags, and a major prize pool.",
    icon: Award,
  },
];

export default function WhyParticipate() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    },
  };

  return (
    <section id="why-participate" className="py-24 md:py-32 relative overflow-hidden bg-base-bg border-b border-border-subtle/50">
      <div className="absolute inset-0 bg-blueprint-dot opacity-40 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 max-w-3xl">
          <div className="font-mono text-xs font-semibold text-brand-blue uppercase tracking-widest mb-3">
            02 // WHY PARTICIPATE
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-zinc-900 tracking-tight leading-tight">
            An incubator for talent, engineering, and product launch.
          </h2>
          <div className="w-16 h-[2px] bg-brand-blue mt-6" />
        </div>

        {/* Card Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                className="group relative bg-white border border-border-subtle rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:shadow-[0_12px_30px_rgba(10,68,164,0.04)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              >
                {/* Blue border glide animation */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-zinc-100 group-hover:bg-brand-blue transition-colors duration-300" />
                <div className="absolute top-0 left-0 w-0 h-[3px] bg-brand-blue group-hover:w-full transition-all duration-500 ease-out" />
                
                {/* Content */}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-xs text-zinc-400 font-semibold">
                      [{card.id} // PROP]
                    </span>
                    <div className="text-zinc-400 group-hover:text-brand-blue transition-colors duration-300 p-2 border border-zinc-100 group-hover:border-brand-blue/15 rounded-lg bg-zinc-50 group-hover:bg-brand-blue/[0.02]">
                      <Icon size={18} />
                    </div>
                  </div>
                  
                  <h3 className="font-display font-semibold text-lg text-zinc-800 mb-3 group-hover:text-brand-blue transition-colors">
                    {card.title}
                  </h3>
                  
                  <p className="text-zinc-500 text-xs md:text-sm leading-relaxed font-sans">
                    {card.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-50 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>STATUS: READY</span>
                  <span className="opacity-0 group-hover:opacity-100 text-brand-blue transition-opacity duration-300">
                    LEARN_MORE &rarr;
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
