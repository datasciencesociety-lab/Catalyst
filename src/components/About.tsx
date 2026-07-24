"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Users, GraduationCap } from "lucide-react";

export default function About() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-white border-b border-border-subtle/50">
      <div className="absolute inset-0 bg-blueprint-dot opacity-40 z-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 max-w-3xl">
          <div className="font-mono text-xs font-semibold text-brand-blue uppercase tracking-widest mb-3">
            01 // ABOUT THE EVENT
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-zinc-900 tracking-tight leading-tight">
            Catalyzing the next generation of builders and problem solvers.
          </h2>
          <div className="w-16 h-[2px] bg-brand-blue mt-6" />
        </div>

        {/* Section 1: Explain Catalyst & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <motion.div 
            className="lg:col-span-6 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 border border-brand-blue/10 bg-brand-blue/[0.02] rounded-md text-brand-blue">
                <Lightbulb size={18} />
              </div>
              <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-wider">
                Our Mission
              </span>
            </div>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-zinc-800 tracking-tight mb-4">
              Bridge the Gap Between Idea & Action
            </h3>
            <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-6 font-sans">
              CATALYST '26 isn't just about writing code for 24 hours. It's a research-driven, engineering-focused arena where complex challenges meet structured, elegant solutions. Organized by the Data Science Society (DSS), the hackathon represents the intersection of analytical thinking and creative development.
            </p>
            <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-sans">
              Our core mission is to empower students to build functional prototypes that address real-world bottlenecks in fields like Artificial Intelligence, Healthcare, and Education. We emphasize clean code, premium product design, and rigorous validation.
            </p>
          </motion.div>

          {/* Blueprint SVG Diagram 1 */}
          <motion.div 
            className="lg:col-span-6 flex justify-center items-center relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <div className="w-full max-w-lg aspect-video bg-zinc-50 border border-border-subtle rounded-xl p-6 shadow-sm relative overflow-hidden flex items-center justify-center">
              {/* Internal lines and grid annotation */}
              <div className="absolute inset-0 bg-blueprint-grid-fine opacity-25 pointer-events-none" />
              <div className="absolute top-2 left-2 font-mono text-[8px] text-zinc-400">[FIG_01: CATALYTIC_NETWORK]</div>
              <div className="absolute bottom-2 right-2 font-mono text-[8px] text-zinc-400">SCALE: 1:1.2</div>
              
              {/* High-fidelity SVG Blueprint of Nodes/Signals */}
              <svg width="85%" height="80%" viewBox="0 0 400 200" fill="none" className="z-10">
                {/* Grid circles */}
                <circle cx="200" cy="100" r="80" stroke="rgba(10, 68, 164, 0.05)" strokeDasharray="4 4" />
                <circle cx="200" cy="100" r="50" stroke="rgba(10, 68, 164, 0.08)" />
                <circle cx="200" cy="100" r="20" stroke="rgba(10, 68, 164, 0.15)" />
                
                {/* Blueprint connection lines */}
                <line x1="50" y1="100" x2="350" y2="100" stroke="rgba(10, 68, 164, 0.08)" />
                <line x1="200" y1="20" x2="200" y2="180" stroke="rgba(10, 68, 164, 0.08)" />
                <line x1="94" y1="47" x2="306" y2="153" stroke="rgba(10, 68, 164, 0.05)" />
                <line x1="94" y1="153" x2="306" y2="47" stroke="rgba(10, 68, 164, 0.05)" />
                
                {/* Node Points */}
                <circle cx="94" cy="47" r="4" fill="#0A44A4" />
                <circle cx="306" cy="153" r="4" fill="#0A44A4" />
                <circle cx="200" cy="100" r="6" fill="#0A44A4" className="animate-pulse" />
                <circle cx="120" cy="100" r="3" fill="#AFAFA8" />
                <circle cx="280" cy="100" r="3" fill="#AFAFA8" />
                <circle cx="200" cy="50" r="3.5" fill="#0A44A4" />
                <circle cx="200" cy="150" r="3.5" fill="#0A44A4" />
                
                {/* Flow lines and arrows */}
                <path d="M 94,47 Q 150,80 200,100" stroke="#0A44A4" strokeWidth="1.5" strokeDasharray="5 3" />
                <path d="M 200,100 Q 250,120 306,153" stroke="#0A44A4" strokeWidth="1.5" />
                
                {/* Annotations */}
                <text x="70" y="35" fill="#1A1A1A" fontSize="8" fontFamily="monospace" fontWeight="bold">INPUT_IDEA</text>
                <text x="312" y="165" fill="#1A1A1A" fontSize="8" fontFamily="monospace" fontWeight="bold">SOLUTION_GEN</text>
                <text x="210" y="96" fill="#0A44A4" fontSize="8" fontFamily="monospace" fontWeight="bold">CATALYST</text>
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Section 2: Community & Learning */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Blueprint SVG Diagram 2 */}
          <motion.div 
            className="lg:col-span-6 order-2 lg:order-1 flex justify-center items-center relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <div className="w-full max-w-lg aspect-video bg-zinc-50 border border-border-subtle rounded-xl p-6 shadow-sm relative overflow-hidden flex items-center justify-center">
              {/* Internal lines and grid annotation */}
              <div className="absolute inset-0 bg-blueprint-grid-fine opacity-25 pointer-events-none" />
              <div className="absolute top-2 left-2 font-mono text-[8px] text-zinc-400">[FIG_02: COMM_SYNC]</div>
              <div className="absolute bottom-2 right-2 font-mono text-[8px] text-zinc-400">ENGINE: SOLID_STATE</div>
              
              {/* High-fidelity SVG Blueprint of Nodes/Signals */}
              <svg width="85%" height="80%" viewBox="0 0 400 200" fill="none" className="z-10">
                {/* Background grid box */}
                <rect x="50" y="30" width="300" height="140" stroke="rgba(10, 68, 164, 0.08)" />
                <line x1="50" y1="70" x2="350" y2="70" stroke="rgba(10, 68, 164, 0.05)" />
                <line x1="50" y1="130" x2="350" y2="130" stroke="rgba(10, 68, 164, 0.05)" />
                <line x1="150" y1="30" x2="150" y2="170" stroke="rgba(10, 68, 164, 0.05)" />
                <line x1="250" y1="30" x2="250" y2="170" stroke="rgba(10, 68, 164, 0.05)" />

                {/* Overlap squares */}
                <rect x="80" y="50" width="100" height="70" rx="4" fill="white" stroke="#E5E5E0" strokeWidth="1" />
                <rect x="220" y="80" width="100" height="70" rx="4" fill="white" stroke="#E5E5E0" strokeWidth="1" />
                
                {/* Active overlapping window */}
                <rect x="150" y="65" width="100" height="70" rx="6" fill="rgba(10, 68, 164, 0.02)" stroke="#0A44A4" strokeWidth="1.5" />
                
                {/* Details within overlapping shapes */}
                <circle cx="100" cy="70" r="10" fill="rgba(10, 68, 164, 0.05)" />
                <rect x="90" y="90" width="50" height="4" rx="2" fill="#E5E5E0" />
                <rect x="90" y="100" width="35" height="4" rx="2" fill="#E5E5E0" />
                
                <circle cx="300" cy="130" r="10" fill="rgba(10, 68, 164, 0.05)" />
                <rect x="240" y="100" width="50" height="4" rx="2" fill="#E5E5E0" />
                <rect x="240" y="110" width="35" height="4" rx="2" fill="#E5E5E0" />
                
                {/* Sync indicator */}
                <circle cx="200" cy="100" r="18" fill="white" stroke="#0A44A4" strokeWidth="1" />
                <path d="M 195,97 L 205,100 L 195,103 Z" fill="#0A44A4" />
                <path d="M 205,100 L 195,97" stroke="#0A44A4" strokeWidth="1" />
                
                {/* Label text */}
                <text x="85" y="44" fill="#AFAFA8" fontSize="7" fontFamily="monospace">MODULE_A // DEV</text>
                <text x="225" y="162" fill="#AFAFA8" fontSize="7" fontFamily="monospace">MODULE_B // DESIGN</text>
                <text x="155" y="60" fill="#0A44A4" fontSize="7" fontFamily="monospace" fontWeight="bold">SYNC_PORT // DSS</text>
              </svg>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 border border-brand-blue/10 bg-brand-blue/[0.02] rounded-md text-brand-blue">
                <Users size={18} />
              </div>
              <span className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-wider">
                Community & Collaboration
              </span>
            </div>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-zinc-800 tracking-tight mb-4">
              A Hub for Cross-Disciplinary Innovation
            </h3>
            <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-6 font-sans">
              Great ideas emerge when diverse perspectives collaborate. Catalyst '26 gathers top engineering minds, visual designers, data scientists, and strategists. By aligning different fields of study, teams learn to communicate value, optimize algorithms, and construct beautiful, user-centric interfaces.
            </p>
            <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-sans">
              Whether you are an AI researcher looking to deploy a machine learning model, a designer seeking to build seamless client interfaces, or a fullstack engineer orchestrating the backend, you will find a collaborative space to manifest your vision.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
