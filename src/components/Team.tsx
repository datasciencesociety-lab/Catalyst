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
    <section id="team" className="py-24 md:py-32 relative overflow-hidden bg-base-bg border-b border-border-subtle/50">
      <div className="absolute inset-0 bg-blueprint-dot opacity-40 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 max-w-3xl">
          <div className="font-mono text-xs font-semibold text-brand-blue uppercase tracking-widest mb-3">
            08 // ORGANIZING TEAM
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-zinc-900 tracking-tight leading-tight">
            Data Science Society Leads
          </h2>
          <p className="text-zinc-500 text-sm mt-4 font-sans max-w-xl">
            The group of developers, researchers, and designers staging Catalyst '26.
          </p>
          <div className="w-16 h-[2px] bg-brand-blue mt-6" />
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
