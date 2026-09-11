"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Why Participate", href: "#why-participate" },
    { name: "Tracks", href: "#tracks" },
    { name: "Timeline", href: "#timeline" },
    { name: "Rewards", href: "#rewards" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "FAQ", href: "#faq" },
    { name: "Team", href: "#team" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-border-subtle/50 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.02)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 flex items-center justify-center border border-brand-blue/30 rounded-md bg-white shadow-sm overflow-hidden">
              <span className="font-display font-bold text-brand-blue text-sm relative z-10">C</span>
              <div className="absolute inset-0 bg-brand-blue/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight text-foreground">
                CATALYST <span className="text-brand-blue font-light">'26</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-zinc-400 -mt-1 group-hover:text-brand-blue transition-colors">
                BY DSS
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono font-medium text-zinc-500 hover:text-brand-blue transition-colors duration-250 relative group"
              >
                {link.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[1.5px] bg-brand-blue transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="mailto:cmritdatasciencesociety@gmail.com"
              className="text-xs font-mono font-medium text-zinc-600 hover:text-brand-blue px-4 py-2 transition-colors"
            >
              Become Sponsor
            </a>
            <a
              href="#register"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-mono font-medium text-white bg-brand-blue rounded-md overflow-hidden transition-all duration-300 hover:bg-brand-blue-hover shadow-sm hover:shadow-[0_4px_12px_rgba(10,68,164,0.15)] group active:scale-98"
            >
              <span className="relative z-10">Register Now</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-zinc-600 hover:text-brand-blue focus:outline-none p-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden pt-24 pb-8 px-6 bg-white/95 backdrop-blur-lg flex flex-col justify-between border-b border-border-subtle"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-display font-medium text-zinc-700 hover:text-brand-blue transition-colors border-b border-zinc-100 pb-2"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4 mt-8"
            >
              <a
                href="#register"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 text-center text-sm font-mono font-medium text-white bg-brand-blue rounded-md hover:bg-brand-blue-hover shadow-sm"
              >
                Register Now
              </a>
              <a
                href="mailto:cmritdatasciencesociety@gmail.com"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 text-center text-sm font-mono font-medium text-zinc-600 border border-zinc-200 rounded-md hover:bg-zinc-50"
              >
                Become Sponsor
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
