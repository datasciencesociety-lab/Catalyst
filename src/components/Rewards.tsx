"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lock, Shirt, Cloud, Milestone, Award } from "lucide-react";

export default function Rewards() {
  // Set 'hideit' to true to lock the prize pool under the glass cover.
  // Change to false manually to decrypt/reveal it.
  const hideit = true;

  const rewardCards = [
    {
      id: "01",
      title: "Exclusive Swags",
      description: "Premium custom hoodies, technical tees, mechanical keyboard accessories, and curated designer sticker packs for all participants.",
      icon: Shirt,
    },
    {
      id: "02",
      title: "Cloud Credits",
      description: "Access to substantial hosting, API credits, and database capacity from leading cloud providers to build and run your prototypes.",
      icon: Cloud,
    },
    {
      id: "03",
      title: "Internship Access",
      description: "Pre-placement interview slots, mentoring, and software engineer career fast-tracking with our tech sponsors.",
      icon: Milestone,
    },
    {
      id: "04",
      title: "Sponsor Bounties",
      description: "Specialized challenges and track-specific bounties awarded by partnering teams for integrating their protocols and APIs.",
      icon: Award,
    },
  ];

  return (
    <section id="rewards" className="py-24 md:py-32 relative overflow-hidden bg-white border-b border-border-subtle/50">
      <div className="absolute inset-0 bg-blueprint-dot opacity-40 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 max-w-3xl">
          <div className="font-mono text-xs font-semibold text-brand-blue uppercase tracking-widest mb-3">
            05 // EVENT REWARDS
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-zinc-900 tracking-tight leading-tight">
            Distinction, recognition, and resources.
          </h2>
          <div className="w-16 h-[2px] bg-brand-blue mt-6" />
        </div>

        {/* Premium Reward Vault */}
        <div className="flex flex-col items-center justify-center mb-16">
          <motion.div
            className="w-full max-w-2xl bg-zinc-50/70 border border-zinc-200/80 rounded-2xl p-10 md:p-14 text-center shadow-[0_6px_24px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_45px_rgba(10,68,164,0.06)] hover:border-brand-blue/30 transition-all duration-500 relative overflow-hidden group cursor-pointer"
            whileHover={{ y: -4 }}
          >
            {/* Blueprint guidelines inside vault */}
            <div className="absolute inset-0 bg-blueprint-grid-fine opacity-20 pointer-events-none" />
            <div className="absolute top-3 left-4 font-mono text-[8px] text-zinc-400">[VAULT_RECORD // STAGE_LOCK]</div>
            <div className="absolute top-3 right-4 font-mono text-[8px] text-zinc-400">[ENCRYPTED // SOLID]</div>
            
            {/* Center Lock Icon */}
            <div className="w-14 h-14 bg-white border border-zinc-200 group-hover:border-brand-blue/30 rounded-full flex items-center justify-center mb-6 mx-auto shadow-sm transition-colors text-zinc-400 group-hover:text-brand-blue duration-300">
              <Lock size={20} className="group-hover:scale-105 transition-transform" />
            </div>

            {/* Shimmering Blocks/Prize */}
            <div className="font-display font-bold text-4xl md:text-6xl tracking-widest text-zinc-800 my-4 flex items-center justify-center select-none">
              {hideit ? (
                <span 
                  className="inline-block relative overflow-hidden bg-clip-text text-transparent bg-gradient-to-r from-zinc-300 via-zinc-400 to-zinc-300 select-none shimmer-animation"
                  style={{
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  ██████████
                </span>
              ) : (
                <span className="text-brand-blue animate-fade-in font-semibold tracking-normal">
                  ₹ 1,50,000+
                </span>
              )}
            </div>

            {/* Unlocking status */}
            <div className="mt-4 font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400 group-hover:text-brand-blue transition-colors duration-300">
              {hideit ? "Unlocking Soon" : "Prize Pool Revealed"}
            </div>
          </motion.div>
        </div>

        {/* Four Elegant Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rewardCards.map((reward) => {
            const Icon = reward.icon;
            return (
              <div
                key={reward.id}
                className="bg-white border border-border-subtle rounded-xl p-6 hover:shadow-[0_8px_24px_rgba(10,68,164,0.03)] hover:border-brand-blue/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 flex items-center justify-center border border-zinc-100 rounded-lg bg-zinc-50 text-brand-blue mb-4">
                    <Icon size={16} />
                  </div>
                  <h3 className="font-display font-semibold text-sm text-zinc-800 mb-2">
                    {reward.title}
                  </h3>
                  <p className="text-zinc-500 text-xs leading-relaxed font-sans">
                    {reward.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-50 font-mono text-[9px] text-zinc-400">
                  STATUS: SECURED
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
