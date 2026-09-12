"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Users,
  Target,
  TrendingUp,
  Building2,
  FileText,
} from "lucide-react";

/**
 * Sponsor Data Structure
 *
 * Designed for immediate reuse once partner agreements are executed.
 * Populate this array with confirmed sponsors to automatically render
 * the monochrome editorial logo grid.
 */
export interface Sponsor {
  id: string;
  name: string;
  tier: "title" | "track" | "ecosystem" | "community";
  logoUrl?: string;
  websiteUrl?: string;
}

const sponsors: Sponsor[] = [
  // To showcase confirmed partners, add them here:
  // {
  //   id: "01",
  //   name: "Example Partner",
  //   tier: "title",
  //   logoUrl: "/sponsors/example.svg",
  //   websiteUrl: "https://example.com",
  // },
];

// 4 Core Value Pillars for Sponsor Acquisition
const sponsorValuePoints = [
  {
    number: "01",
    title: "REACH BUILDERS",
    description:
      "Engage with students and emerging talent actively building with technology.",
    tag: "STUDENT TALENT",
    icon: Users,
  },
  {
    number: "02",
    title: "DISCOVER TALENT",
    description:
      "Meet developers, designers and problem-solvers in an environment where their skills are visible.",
    tag: "SKILL EVALUATION",
    icon: Target,
  },
  {
    number: "03",
    title: "CREATE IMPACT",
    description:
      "Support hands-on innovation around meaningful real-world problems.",
    tag: "PURPOSE-DRIVEN",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "BUILD YOUR PRESENCE",
    description:
      "Position your organization alongside a growing student innovation ecosystem.",
    tag: "BRAND ALIGNMENT",
    icon: TrendingUp,
  },
];

export default function Sponsors() {
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
      id="sponsors"
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
              PARTNERS & SPONSORS
            </span>
          </div>

          <h2 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-[-0.035em] text-foreground leading-[0.92] uppercase mb-6 sm:mb-8">
            BUILD WITH US.
          </h2>

          <p className="text-zinc-600 text-base sm:text-lg md:text-xl leading-relaxed font-sans max-w-2xl">
            Partner with CATALYST &apos;26 and connect with the next generation
            of builders, problem-solvers and innovators.
          </p>
        </div>

        {/* Sponsor Showcase: Data-driven grid or Intentional Blueprint Placeholder */}
        {sponsors.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 md:mb-28">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.id}
                href={sponsor.websiteUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 border border-border-subtle rounded-xl p-8 flex items-center justify-center grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:border-brand-blue/30 hover:shadow-sm"
              >
                {sponsor.logoUrl ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={sponsor.logoUrl}
                    alt={sponsor.name}
                    className="max-h-12 w-auto object-contain"
                  />
                ) : (
                  <span className="font-display font-bold text-lg text-zinc-800">
                    {sponsor.name}
                  </span>
                )}
              </a>
            ))}
          </div>
        ) : (
          /* Intentional Blueprint Placeholder (Strictly no fake logos) */
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full rounded-2xl md:rounded-3xl border border-dashed border-zinc-300/90 bg-white/80 p-8 sm:p-12 md:p-16 text-center backdrop-blur-sm overflow-hidden group transition-all duration-500 hover:border-brand-blue/50 hover:shadow-[0_12px_36px_rgba(10,68,164,0.04)] mb-20 md:mb-28"
          >
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

            {/* Top Telemetry */}
            <div className="border-b border-zinc-100 px-4 sm:px-6 py-2.5 -mt-4 sm:-mt-8 -mx-8 sm:-mx-12 md:-mx-16 mb-8 flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-zinc-400 tracking-wider">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                <span>[ SPONSOR_REGISTRY // 2026_COHORT ]</span>
              </div>
              <div className="hidden sm:block text-zinc-400">
                [ NATIONAL_STUDENT_HACKATHON ]
              </div>
              <div className="text-brand-blue font-medium">
                [ TIERS // OPEN_FOR_PARTNERSHIP ]
              </div>
            </div>

            {/* Placeholder Content Area */}
            <div className="max-w-2xl mx-auto py-4 relative z-10 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-paper/80 font-mono text-[10px] sm:text-xs font-medium uppercase tracking-widest text-zinc-600 mb-6">
                <Building2 className="w-3.5 h-3.5 text-brand-blue" />
                <span>OFFICIAL PARTNERSHIP INVITATION</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl text-zinc-900 tracking-tight mb-4 uppercase">
                YOUR BRAND COULD BE HERE.
              </h3>

              <p className="text-zinc-600 text-sm sm:text-base font-sans max-w-lg leading-relaxed mb-8">
                We are actively onboarding forward-thinking technology companies,
                development platforms, and research ecosystems to partner with the
                Catalyst &apos;26 builder cohort.
              </p>

              <a
                href="mailto:cmritdatasciencesociety@gmail.com?subject=Sponsorship%20Inquiry%20%E2%80%94%20Catalyst%20'26"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-200 bg-white font-mono text-xs font-semibold uppercase tracking-wider text-brand-blue hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all shadow-xs group/link"
              >
                <span>Inquire About Partnership Tiers</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Bottom Telemetry */}
            <div className="border-t border-zinc-100 px-4 sm:px-6 py-2.5 -mb-4 sm:-mb-8 -mx-8 sm:-mx-12 md:-mx-16 mt-8 flex items-center justify-between font-mono text-[10px] text-zinc-400 tracking-wider bg-zinc-50/40">
              <div>COMMUNITY // CMRIT DATA SCIENCE SOCIETY</div>
              <div className="hidden sm:block">VENUE // HYDERABAD, INDIA</div>
              <div className="text-zinc-500">STATUS // ACCEPTING PARTNERS</div>
            </div>
          </motion.div>
        )}

        {/* Sponsor Value Proposition Section */}
        <div className="mb-20 md:mb-28">
          <div className="max-w-2xl mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/80" />
              <span className="font-mono text-xs font-semibold text-brand-blue tracking-[0.2em] uppercase">
                VALUE PROPOSITION
              </span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-foreground tracking-tight uppercase">
              WHY PARTNER WITH CATALYST?
            </h3>
            <p className="text-zinc-600 text-sm sm:text-base font-sans mt-3">
              Direct alignment with focused builders, practical engineering, and emerging technical talent.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {sponsorValuePoints.map((point) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.number}
                  variants={itemVariants}
                  className="relative bg-white/90 border border-border-subtle rounded-2xl p-7 md:p-8 flex flex-col justify-between group transition-all duration-300 hover:border-brand-blue/30 hover:shadow-[0_10px_28px_rgba(10,68,164,0.04)] hover:-translate-y-0.5"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-xs font-semibold text-zinc-400 group-hover:text-brand-blue transition-colors tracking-widest">
                        {point.number}
                      </span>
                      <div className="w-9 h-9 rounded-lg border border-zinc-100 bg-paper flex items-center justify-center text-zinc-400 group-hover:text-brand-blue group-hover:border-brand-blue/20 transition-all duration-300">
                        <Icon className="w-4 h-4 stroke-[1.75]" />
                      </div>
                    </div>

                    <h4 className="font-display font-semibold text-lg md:text-xl text-zinc-900 tracking-tight mb-2.5 group-hover:text-brand-blue transition-colors">
                      {point.title}
                    </h4>

                    <p className="text-zinc-600 font-sans text-sm md:text-[14.5px] leading-relaxed">
                      {point.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-3.5 border-t border-zinc-100 flex items-center justify-between font-mono text-[10px] text-zinc-400 tracking-wider uppercase">
                    <span>{point.tag}</span>
                    <span className="inline-flex items-center gap-1 text-zinc-400 group-hover:text-brand-blue group-hover:translate-x-1 transition-all">
                      <span>IMPACT</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Sponsor CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl md:rounded-3xl border border-zinc-200/90 bg-white/95 p-8 sm:p-12 md:p-14 shadow-sm overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 group"
        >
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-blueprint-grid-fine opacity-20 pointer-events-none" />

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

          <div className="max-w-xl relative z-10">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md border border-zinc-200 bg-paper/80 font-mono text-[10px] font-semibold uppercase tracking-wider text-brand-blue mb-3">
              [ SPONSOR_ENGAGEMENT // 2026 ]
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-zinc-900 tracking-tight mb-3">
              READY TO BUILD THE FUTURE WITH US?
            </h3>
            <p className="text-zinc-600 text-sm sm:text-base font-sans leading-relaxed">
              Connect directly with the Catalyst organizing committee. We offer
              tailored sponsorship packages, branded track challenges, keynote
              opportunities, and talent pipelines.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 relative z-10 w-full lg:w-auto">
            <a
              href="mailto:cmritdatasciencesociety@gmail.com?subject=Sponsorship%20Inquiry%20%E2%80%94%20Catalyst%20'26"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-mono font-semibold text-white bg-brand-blue rounded-xl hover:bg-brand-blue-hover transition-all shadow-sm hover:shadow-[0_8px_20px_rgba(10,68,164,0.2)] group/btn whitespace-nowrap"
            >
              <span>Become a Sponsor</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>

            <a
              href="mailto:cmritdatasciencesociety@gmail.com?subject=Catalyst%20'26%20Partnership%20Deck%20Request"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-mono font-medium text-zinc-700 hover:text-brand-blue border border-zinc-200/90 bg-paper/80 rounded-xl hover:border-brand-blue/30 transition-all shadow-xs whitespace-nowrap"
            >
              <FileText className="w-4 h-4 text-zinc-500" />
              <span>Request Deck</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

