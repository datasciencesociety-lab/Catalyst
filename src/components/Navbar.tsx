"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

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

  // Monitor scroll for elevation transition and active section indicator
  useEffect(() => {
    const handleScroll = () => {
      // Elevation transition
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check if user is near bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection("team");
        return;
      }

      // Active section calculation with top offset
      const scrollPosition = window.scrollY + 140;
      let current = "";

      for (const link of navLinks) {
        const id = link.href.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to dismiss mobile navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Smooth scroll handler with offset for fixed header
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const navOffset = 64;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F7F7F4]/90 backdrop-blur-md border-b border-border-subtle py-2.5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]"
            : "bg-transparent py-4 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Brand Lockup */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 group shrink-0"
            aria-label="CATALYST '26 by DSS"
          >
            <div className="w-[30px] h-[30px] flex items-center justify-center border border-brand-blue/25 rounded-md bg-white shadow-[0_1px_2px_rgba(10,68,164,0.06)] group-hover:border-brand-blue/50 group-hover:bg-brand-blue/[0.04] transition-all duration-200">
              <span className="font-display font-bold text-brand-blue text-xs tracking-tight">
                C
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-[14.5px] tracking-tight text-foreground leading-none">
                CATALYST <span className="text-brand-blue font-light">'26</span>
              </span>
              <span className="text-[9px] font-mono font-medium tracking-[0.2em] text-zinc-400 group-hover:text-brand-blue transition-colors mt-0.5 leading-none">
                BY DSS
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-[11.5px] xl:text-xs font-mono tracking-tight whitespace-nowrap transition-colors duration-200 relative py-1 ${
                    isActive
                      ? "font-semibold text-zinc-900"
                      : "font-medium text-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-brand-blue"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA Hierarchy */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
            <a
              href="mailto:cmritdatasciencesociety@gmail.com?subject=Sponsorship%20Inquiry%20%E2%80%94%20Catalyst%20'26"
              className="text-[11.5px] xl:text-xs font-mono font-medium text-zinc-600 hover:text-brand-blue px-2 py-1.5 transition-colors whitespace-nowrap"
            >
              Become a Sponsor
            </a>
            <a
              href="#register"
              onClick={(e) => scrollToSection(e, "#register")}
              className="group relative inline-flex items-center gap-1.5 px-3.5 py-1.5 xl:px-4 xl:py-2 text-[11.5px] xl:text-xs font-mono font-semibold uppercase tracking-wider text-white bg-brand-blue rounded-xl transition-all duration-200 hover:bg-brand-blue-hover shadow-[0_1px_2px_rgba(10,68,164,0.15)] hover:shadow-[0_2px_8px_rgba(10,68,164,0.2)] active:scale-[0.98] whitespace-nowrap"
            >
              <span>Register Now</span>
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle [MENU] / [CLOSE] */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden px-2.5 py-1 font-mono text-[11px] font-medium tracking-wider text-zinc-700 hover:text-brand-blue border border-border-subtle rounded bg-white/70 hover:bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all flex items-center gap-1 focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span className="text-zinc-400">[</span>
            <span className="text-zinc-800 font-semibold">
              {mobileMenuOpen ? "CLOSE" : "MENU"}
            </span>
            <span className="text-zinc-400">]</span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 z-40 lg:hidden pt-20 pb-8 px-6 bg-[#F7F7F4]/98 backdrop-blur-xl flex flex-col justify-between border-b border-border-subtle overflow-y-auto"
          >
            {/* Vertically Spaced Uppercase Navigation Items */}
            <nav className="flex flex-col space-y-1 pt-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`font-display font-semibold text-lg tracking-tight flex items-center justify-between py-3 border-b border-border-subtle/50 transition-colors ${
                      isActive ? "text-brand-blue" : "text-zinc-800 hover:text-brand-blue"
                    }`}
                  >
                    <span>{link.name.toUpperCase()}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Mobile CTAs */}
            <div className="flex flex-col gap-3.5 mt-8 pt-6 border-t border-border-subtle">
              <a
                href="mailto:cmritdatasciencesociety@gmail.com"
                onClick={() => setMobileMenuOpen(false)}
                className="group inline-flex items-center justify-between text-xs font-mono font-medium text-zinc-600 hover:text-brand-blue py-2 transition-colors"
              >
                <span>BECOME A SPONSOR</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#register"
                onClick={(e) => scrollToSection(e, "#register")}
                className="group flex items-center justify-center gap-1.5 w-full py-3.5 px-4 text-xs font-mono font-medium text-white bg-brand-blue rounded-md hover:bg-brand-blue-hover shadow-sm transition-all duration-200 active:scale-[0.99]"
              >
                <span>REGISTER NOW</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

