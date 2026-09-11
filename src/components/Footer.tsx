"use client";

import React from "react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {
  const socials = [
    { icon: GithubIcon, href: "#", name: "GitHub" },
    { icon: LinkedinIcon, href: "#", name: "LinkedIn" },
    { icon: TwitterIcon, href: "#", name: "Twitter" },
    { icon: InstagramIcon, href: "#", name: "Instagram" },
  ];

  return (
    <footer className="bg-white border-t border-border-subtle py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint-dot opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#" className="flex items-center gap-3 mb-4 group">
              <div className="w-8 h-8 flex items-center justify-center border border-brand-blue/30 rounded-md bg-white shadow-sm">
                <span className="font-display font-bold text-brand-blue text-sm">C</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base tracking-tight text-foreground">
                  CATALYST <span className="text-brand-blue font-light">'26</span>
                </span>
                <span className="text-[9px] font-mono tracking-widest text-zinc-400 -mt-1">
                  BY DSS
                </span>
              </div>
            </a>
            <p className="text-zinc-400 text-xs max-w-sm leading-relaxed font-sans">
              India's most premium student hackathon organized by the Data Science Society (DSS). Engineering real-world solutions through collaboration and technical precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">
                Resources
              </h4>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a href="#about" className="text-xs text-zinc-500 hover:text-brand-blue transition-colors font-sans">About</a>
                </li>
                <li>
                  <a href="#tracks" className="text-xs text-zinc-500 hover:text-brand-blue transition-colors font-sans">Tracks</a>
                </li>
                <li>
                  <a href="#timeline" className="text-xs text-zinc-500 hover:text-brand-blue transition-colors font-sans">Roadmap</a>
                </li>
                <li>
                  <a href="#rewards" className="text-xs text-zinc-500 hover:text-brand-blue transition-colors font-sans">Rewards</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">
                Compliance
              </h4>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a href="#" className="text-xs text-zinc-500 hover:text-brand-blue transition-colors font-sans">Code of Conduct</a>
                </li>
                <li>
                  <a href="#" className="text-xs text-zinc-500 hover:text-brand-blue transition-colors font-sans">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-xs text-zinc-500 hover:text-brand-blue transition-colors font-sans">Terms of Service</a>
                </li>
                <li>
                  <a href="mailto:cmritdatasciencesociety@gmail.com" className="text-xs text-zinc-500 hover:text-brand-blue transition-colors font-sans">Contact DSS</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end">
            <h4 className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">
              Connect With Us
            </h4>
            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-8 h-8 flex items-center justify-center border border-zinc-200 rounded-md bg-white text-zinc-500 hover:text-brand-blue hover:border-brand-blue/30 transition-all shadow-sm"
                    aria-label={`Data Science Society on ${social.name}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="pt-8 border-t border-zinc-150 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <span className="text-[10px] font-mono text-zinc-400">
            © 2026 DATA SCIENCE SOCIETY. ALL RIGHTS RESERVED.
          </span>
          <span className="text-[10px] font-mono text-zinc-400 flex items-center gap-1.5 justify-center">
            <span>ENGINE_STATE: v1.0.4</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>SYSTEMS_OPERATIONAL</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
