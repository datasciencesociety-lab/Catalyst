"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Lock,
  Award,
  Users,
  Briefcase,
  Package,
  Terminal,
  Sparkles,
} from "lucide-react";

/**
 * Prize Pool Configuration
 * 
 * Set `status` to "revealed" to display the official confirmed prize pool amount.
 * When set to "unlocking-soon", the masked placeholder with anticipation styling is displayed.
 */
interface PrizePoolConfig {
  status: "unlocking-soon" | "revealed";
  value?: string;
  maskedDisplay: string;
  headline: string;
  statusLabel: string;
  supportingText: string;
  specCode: string;
}

const prizePoolConfig: PrizePoolConfig = {
  status: "unlocking-soon", // Change to "revealed" when official prize pool is confirmed
  value: "₹ 1,50,000+",
  maskedDisplay: "████████████",
  headline: "PRIZE POOL",
  statusLabel: "UNLOCKING SOON",
  supportingText:
    "The Catalyst '26 reward pool is taking shape. More to be revealed soon.",
  specCode: "SPEC // REW-POOL-2026",
};

// 6 Core Catalyst Benefits (as specified in official brief)
const rewardBenefits = [
  {
    number: "01",
    title: "CERTIFICATES",
    description: "Recognition for your participation and contribution.",
    tag: "VERIFIED CREDENTIAL",
    icon: Award,
  },
  {
    number: "02",
    title: "MENTORSHIP",
    description:
      "Guidance from experienced builders throughout the hackathon.",
    tag: "TECHNICAL ADVISORY",
    icon: Users,
  },
  {
    number: "03",
    title: "INTERNSHIP OPPORTUNITIES",
    description:
      "Potential opportunities through the Catalyst ecosystem and partners.",
    tag: "ECOSYSTEM PIPELINE",
    icon: Briefcase,
  },
  {
    number: "04",
    title: "SWAGS & GOODIES",
    description: "Special Catalyst experiences and merchandise.",
    tag: "COMMUNITY MERCH",
    icon: Package,
  },
  {
    number: "05",
    title: "CLOUD / DEVELOPER CREDITS",
    description: "Resources to help you build and experiment.",
    tag: "DEVELOPER RESOURCING",
    icon: Terminal,
  },
  {
    number: "06",
    title: "SPECIAL SURPRISES",
    description: "Some things are better revealed later.",
    tag: "EVENT REVELATION",
    icon: Sparkles,
  },
];

export default function Rewards() {
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
      id="rewards"
      className="py-28 md:py-36 lg:py-40 relative overflow-hidden bg-paper border-b border-border-subtle/60"
    >
      {/* Blueprint Grid & Dot Overlays */}
      <div className="absolute inset-0 bg-blueprint-dot opacity-40 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-5 md:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
            <span className="font-mono text-xs md:text-sm font-semibold text-brand-blue tracking-[0.22em] uppercase">
              REWARDS
            </span>
          </div>

          <h2 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-[-0.035em] text-foreground leading-[0.92] uppercase mb-6 sm:mb-8">
            THE BUILD COMES WITH REWARDS.
          </h2>

          <p className="text-zinc-600 text-base sm:text-lg md:text-xl leading-relaxed font-sans max-w-2xl">
            Recognition, opportunities and surprises for the people who build.
          </p>
        </div>

        {/* Prize Pool Centerpiece — Architectural Vault Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl mx-auto mb-20 md:mb-24 rounded-2xl md:rounded-3xl border border-zinc-200/90 bg-white/90 shadow-[0_4px_24px_rgba(0,0,0,0.02)] backdrop-blur-sm overflow-hidden group transition-all duration-500 hover:border-brand-blue/30 hover:shadow-[0_16px_40px_rgba(10,68,164,0.06)]"
        >
          {/* Subtle Blueprint Fine Grid inside Vault */}
          <div className="absolute inset-0 bg-blueprint-grid-fine opacity-25 pointer-events-none" />

          {/* Precision Blueprint Corner Markers */}
          <span className="absolute top-2.5 left-3 font-mono text-[10px] text-zinc-300 select-none">
            +
          </span>
          <span className="absolute top-2.5 right-3 font-mono text-[10px] text-zinc-300 select-none">
            +
          </span>
          <span className="absolute bottom-2.5 left-3 font-mono text-[10px] text-zinc-300 select-none">
            +
          </span>
          <span className="absolute bottom-2.5 right-3 font-mono text-[10px] text-zinc-300 select-none">
            +
          </span>

          {/* Top Telemetry / Security Bar */}
          <div className="border-b border-zinc-100/90 px-5 sm:px-8 py-3 flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-zinc-400 tracking-wider">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/80 animate-pulse" />
              <span>[ VAULT_SYS // ENCRYPTED_SPEC ]</span>
            </div>
            <div className="hidden sm:block text-zinc-400">
              [ CATALYST &apos;26 // HYDERABAD ]
            </div>
            <div className="text-zinc-500 font-medium">
              [ ACCESS // RESTRICTED ]
            </div>
          </div>

          {/* Vault Core Content Area */}
          <div className="p-8 sm:p-12 md:p-16 text-center relative z-10 flex flex-col items-center">
            {/* Center Lock Frame */}
            <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-paper border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:text-brand-blue group-hover:border-brand-blue/30 transition-all duration-300 mb-6 shadow-sm">
              <Lock className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
            </div>

            {/* PRIZE POOL Label */}
            <div className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500 mb-2 sm:mb-3">
              {prizePoolConfig.headline}
            </div>

            {/* Main Value / Masked Glyph Display */}
            <div className="relative my-3 sm:my-5 flex items-center justify-center max-w-full overflow-hidden">
              {prizePoolConfig.status === "unlocking-soon" ? (
                <span
                  className="inline-block relative select-none font-mono text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.14em] sm:tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r from-zinc-300 via-zinc-400 to-zinc-300"
                  style={{
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "shimmer 3.5s infinite linear",
                  }}
                  aria-label="Prize pool amount masked, unlocking soon"
                >
                  {prizePoolConfig.maskedDisplay}
                </span>
              ) : (
                <span className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-brand-blue">
                  {prizePoolConfig.value}
                </span>
              )}
            </div>

            {/* UNLOCKING SOON Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-200/90 bg-paper/90 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-zinc-700 shadow-sm mt-3 sm:mt-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-50" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" />
              </span>
              <span>{prizePoolConfig.statusLabel}</span>
            </div>

            {/* Supporting Explanation */}
            <p className="text-zinc-600 text-sm sm:text-base font-sans mt-5 max-w-md mx-auto leading-relaxed">
              {prizePoolConfig.supportingText}
            </p>
          </div>

          {/* Bottom Verification Footer Bar */}
          <div className="border-t border-zinc-100/90 px-5 sm:px-8 py-3 flex items-center justify-between font-mono text-[10px] text-zinc-400 tracking-wider bg-zinc-50/40">
            <div>ALLOCATION: 24H_NATIONAL_HACKATHON</div>
            <div className="hidden sm:block">{prizePoolConfig.specCode}</div>
            <div className="text-brand-blue font-medium">STAGE: COMMITTED</div>
          </div>
        </motion.div>

        {/* 6 Benefits in an Editorial Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {rewardBenefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.number}
                variants={itemVariants}
                className="relative bg-white/90 border border-border-subtle rounded-2xl p-7 md:p-8 flex flex-col justify-between group transition-all duration-300 hover:border-brand-blue/30 hover:shadow-[0_12px_30px_rgba(10,68,164,0.05)] hover:-translate-y-1"
              >
                {/* Top Row: Number & Icon Frame */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-semibold text-zinc-400 group-hover:text-brand-blue transition-colors tracking-widest">
                      {benefit.number}
                    </span>
                    <div className="w-9 h-9 rounded-lg border border-zinc-100 bg-paper flex items-center justify-center text-zinc-400 group-hover:text-brand-blue group-hover:border-brand-blue/20 transition-all duration-300">
                      <Icon className="w-4 h-4 stroke-[1.75]" />
                    </div>
                  </div>

                  {/* Benefit Title */}
                  <h3 className="font-display font-semibold text-lg md:text-xl text-zinc-900 tracking-tight mb-2.5 group-hover:text-brand-blue transition-colors">
                    {benefit.title}
                  </h3>

                  {/* Supporting Copy */}
                  <p className="text-zinc-600 font-sans text-sm md:text-[14.5px] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Bottom Metadata Annotation */}
                <div className="mt-8 pt-3.5 border-t border-zinc-100 flex items-center justify-between font-mono text-[10px] text-zinc-400 tracking-wider uppercase">
                  <span>{benefit.tag}</span>
                  <span className="inline-flex items-center gap-1.5 text-zinc-500 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/70" />
                    CONFIRMED
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

