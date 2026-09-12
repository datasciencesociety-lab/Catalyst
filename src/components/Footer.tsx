"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

// Official Registration & Contact Links
const UNSTOP_URL = "#register";
const SPONSOR_EMAIL =
  "mailto:cmritdatasciencesociety@gmail.com?subject=Sponsorship%20Inquiry%20%E2%80%94%20Catalyst%20'26";
const GENERAL_EMAIL = "mailto:cmritdatasciencesociety@gmail.com";

// Social Icons (SVG)
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// 8 Core Navigation Items
const mainNavLinks = [
  { name: "About", href: "#about" },
  { name: "Why Participate", href: "#why-participate" },
  { name: "Tracks", href: "#tracks" },
  { name: "Timeline", href: "#timeline" },
  { name: "Rewards", href: "#rewards" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "FAQ", href: "#faq" },
  { name: "Team", href: "#team" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-paper border-t border-border-subtle/80 pt-20 md:pt-28 pb-12">
      {/* Blueprint Grid & Dot Overlays */}
      <div className="absolute inset-0 bg-blueprint-dot opacity-35 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-blueprint-grid opacity-15 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* 1. Top Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="pb-16 md:pb-24 border-b border-border-subtle/80"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
            <span className="font-mono text-xs font-semibold text-brand-blue tracking-[0.22em] uppercase">
              CLOSING REMARKS
            </span>
          </div>

          <h2 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[84px] tracking-[-0.035em] text-foreground leading-[0.92] uppercase mb-5">
            SEE YOU AT CATALYST.
          </h2>

          <p className="font-mono text-xs sm:text-sm md:text-base font-semibold text-zinc-500 tracking-wider uppercase mb-8 sm:mb-10">
            09–10 OCTOBER 2026 · 24 HOURS · CMRIT, HYDERABAD
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={UNSTOP_URL}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-white bg-brand-blue rounded-xl hover:bg-brand-blue-hover transition-all shadow-sm hover:shadow-[0_6px_20px_rgba(10,68,164,0.2)] group/btn whitespace-nowrap"
            >
              <span>Register on Unstop</span>
              <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={SPONSOR_EMAIL}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-mono font-medium uppercase tracking-wider text-zinc-700 hover:text-brand-blue border border-zinc-200/90 bg-white rounded-xl hover:border-brand-blue/30 transition-all shadow-xs group/btn whitespace-nowrap"
            >
              <span>Become a Sponsor</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover/btn:text-brand-blue group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* 2. Main Navigation & Identity Grid */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 border-b border-border-subtle/80">
          {/* DSS Identity */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4 group">
              <div className="w-8 h-8 flex items-center justify-center border border-brand-blue/30 rounded-md bg-white shadow-xs">
                <span className="font-display font-bold text-brand-blue text-sm">
                  C
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base tracking-tight text-foreground">
                  CATALYST{" "}
                  <span className="text-brand-blue font-light">&apos;26</span>
                </span>
                <span className="text-[9px] font-mono tracking-widest text-zinc-400 -mt-0.5 uppercase">
                  BY DSS
                </span>
              </div>
            </div>

            <div className="font-mono text-xs font-semibold text-zinc-800 tracking-wider uppercase mb-2">
              DATA SCIENCE SOCIETY
            </div>

            <p className="text-zinc-500 text-xs sm:text-sm font-sans leading-relaxed max-w-sm mb-6">
              Organized by the Data Science Society (DSS) at CMR Institute of
              Technology, Hyderabad. Empowering emerging builders through
              real-world engineering challenges.
            </p>

            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md border border-zinc-200 bg-white font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>DSS CMRIT CHAPTER // 2026</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4">
            <div className="font-mono text-[11px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">
              CATALYST &apos;26
            </div>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {mainNavLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-[13px] text-zinc-600 hover:text-brand-blue transition-colors font-sans"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Compliance */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <div className="font-mono text-[11px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">
                CONNECT
              </div>
              <ul className="flex flex-col gap-2.5 mb-6">
                <li>
                  <a
                    href={GENERAL_EMAIL}
                    className="inline-flex items-center gap-2 text-xs sm:text-[13px] text-zinc-600 hover:text-brand-blue transition-colors font-sans"
                  >
                    <Mail className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Email DSS</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-xs sm:text-[13px] text-zinc-600 hover:text-brand-blue transition-colors font-sans"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-zinc-400" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-xs sm:text-[13px] text-zinc-600 hover:text-brand-blue transition-colors font-sans"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-xs sm:text-[13px] text-zinc-600 hover:text-brand-blue transition-colors font-sans"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
                    <span>GitHub</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-zinc-150">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[10px] text-zinc-400 uppercase">
                <a href="#" className="hover:text-brand-blue transition-colors">
                  Privacy
                </a>
                <span>·</span>
                <a href="#" className="hover:text-brand-blue transition-colors">
                  Terms
                </a>
                <span>·</span>
                <a href="#" className="hover:text-brand-blue transition-colors">
                  Code of Conduct
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Large Typographic Visual Signature */}
        <div className="relative py-12 md:py-16 text-center select-none overflow-hidden my-4 sm:my-6">
          <div className="absolute inset-0 bg-blueprint-grid-fine opacity-15 pointer-events-none" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[144px] tracking-[-0.04em] text-zinc-200/80 leading-none uppercase"
          >
            CATALYST{" "}
            <span className="text-brand-blue/20 font-light">&apos;26</span>
          </motion.div>
        </div>

        {/* 4. Bottom Legal Bar */}
        <div className="pt-8 border-t border-border-subtle/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <span className="text-[11px] font-mono text-zinc-400 tracking-wider">
            © 2026 Data Science Society · CATALYST &apos;26
          </span>
          <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-2 justify-center">
            <span>CMRIT // HYDERABAD, INDIA</span>
            <span className="text-zinc-300">·</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

