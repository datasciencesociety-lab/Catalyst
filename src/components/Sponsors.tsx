"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 md:py-32 relative overflow-hidden bg-base-bg border-b border-border-subtle/50">
      <div className="absolute inset-0 bg-blueprint-dot opacity-40 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <div className="font-mono text-xs font-semibold text-brand-blue uppercase tracking-widest mb-3">
            06 // COLLABORATORS
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-zinc-900 tracking-tight leading-tight">
            Partners & Sponsors
          </h2>
          <p className="text-zinc-500 text-sm mt-4 font-sans max-w-xl">
            Supported by companies setting standards in development, design, and machine learning infrastructure.
          </p>
          <div className="w-16 h-[2px] bg-brand-blue mt-6" />
        </div>

        {/* Premium Coming Soon Banner */}
        <div className="w-full bg-white border border-border-subtle rounded-xl p-10 md:p-16 text-center shadow-[0_4px_24px_rgba(0,0,0,0.015)] relative overflow-hidden mb-10">
          {/* Blueprint decorations */}
          <div className="absolute inset-0 bg-blueprint-grid-fine opacity-15 pointer-events-none" />
          <div className="absolute top-3 left-4 font-mono text-[8px] text-zinc-450">[SYS.PARTNER_REGISTRY // LOCKED]</div>
          <div className="absolute top-3 right-4 font-mono text-[8px] text-zinc-450">[RELEASE_DATE // AUG_2026]</div>

          {/* Shimmering Display Text */}
          <div className="max-w-xl mx-auto py-8 flex flex-col items-center">
            <div className="w-10 h-10 border border-brand-blue/20 bg-brand-blue/[0.02] rounded-full flex items-center justify-center mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
            </div>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-zinc-800 tracking-tight mb-3">
              Announcing Soon
            </h3>
            <p className="text-zinc-500 text-xs md:text-sm font-sans leading-relaxed">
              We are currently onboarding global technology partners, development platforms, and research labs. The complete lineup of sponsors, API bounties, and mentors will be revealed as we approach the cohort finalization.
            </p>
          </div>
        </div>

        {/* Sponsor Pitch CTA */}
        <div className="bg-white border border-border-subtle rounded-xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Blueprint decorations inside CTA */}
          <div className="absolute right-0 bottom-0 w-36 h-36 bg-blueprint-grid-fine opacity-20 pointer-events-none" />
          
          <div>
            <h3 className="font-display font-bold text-xl md:text-2xl text-zinc-800 mb-2">
              Interested in partnering with Catalyst?
            </h3>
            <p className="text-zinc-500 text-xs md:text-sm font-sans max-w-lg leading-relaxed">
              Empower student engineers and gain access to high-caliber builder networks. Review our sponsorship decks and tier details today.
            </p>
          </div>

          <a
            href="mailto:sponsor@catalysthack.in"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono font-medium text-white bg-brand-blue rounded-md hover:bg-brand-blue-hover transition-all shadow-sm hover:shadow-[0_4px_12px_rgba(10,68,164,0.15)] group whitespace-nowrap"
          >
            Become a Sponsor
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
