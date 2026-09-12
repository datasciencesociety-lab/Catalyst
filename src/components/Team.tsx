"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const teamMembers = [
  {
    name: "P V Yashwanth",
    role: "President, DSS",
    initials: "PY",
    color: "from-blue-500/10 to-cyan-500/10",
    textColor: "text-blue-700",
    linkedin: "#",
    email: "cmritdatasciencesociety@gmail.com",
  },
  {
    name: "U Sanjay",
    role: "Technical Lead",
    initials: "US",
    color: "from-indigo-500/10 to-purple-500/10",
    textColor: "text-indigo-700",
    linkedin: "#",
    email: "cmritdatasciencesociety@gmail.com",
  },
  {
    name: "Varshitha Chavali",
    role: "Design Lead",
    initials: "VC",
    color: "from-cyan-500/10 to-emerald-500/10",
    textColor: "text-cyan-700",
    linkedin: "#",
    email: "cmritdatasciencesociety@gmail.com",
  },
  {
    name: "S Jahnavi",
    role: "Operations Lead",
    initials: "SJ",
    color: "from-pink-500/10 to-rose-500/10",
    textColor: "text-pink-700",
    linkedin: "#",
    email: "cmritdatasciencesociety@gmail.com",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="py-28 md:py-36 lg:py-40 relative overflow-hidden bg-paper border-b border-border-subtle/60"
    >
      {/* Blueprint Grid & Dot Overlays */}
      <div className="absolute inset-0 bg-blueprint-dot opacity-40 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-5 md:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
            <span className="font-mono text-xs md:text-sm font-semibold text-brand-blue tracking-[0.22em] uppercase">
              ORGANIZING TEAM
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-[-0.035em] text-foreground leading-[0.92] uppercase mb-6 sm:mb-8">
            DATA SCIENCE SOCIETY LEADS
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg md:text-xl leading-relaxed font-sans max-w-2xl">
            The group of developers, researchers, and designers staging Catalyst &apos;26.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col items-center text-center"
            >
              {/* Circular profile avatar */}
              <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full mb-5 flex items-center justify-center bg-gradient-to-tr border border-zinc-200 shadow-inner overflow-hidden cursor-pointer transition-all duration-300 group-hover:border-brand-blue/40 group-hover:shadow-md select-none">
                {/* Background color based on initials */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${member.color}`} />
                
                {/* Initials */}
                <span className={`font-display font-bold text-2xl md:text-3xl relative z-10 ${member.textColor} tracking-tight group-hover:opacity-0 transition-opacity duration-300`}>
                  {member.initials}
                </span>

                {/* Technical blueprint overlay */}
                <div className="absolute inset-0 bg-blueprint-grid-fine opacity-20 pointer-events-none" />

                {/* Hover overlay with social icon */}
                <div className="absolute inset-0 bg-brand-blue/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-20">
                  <a
                    href={member.linkedin}
                    className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                    aria-label={`${member.name} Email`}
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>

              {/* Identity details */}
              <h3 className="font-display font-semibold text-sm md:text-base text-zinc-800 group-hover:text-brand-blue transition-colors duration-250">
                {member.name}
              </h3>
              <p className="text-zinc-400 text-[10px] md:text-xs font-mono uppercase tracking-wider mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
