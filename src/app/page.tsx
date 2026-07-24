import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyParticipate from "@/components/WhyParticipate";
import Tracks from "@/components/Tracks";
import Timeline from "@/components/Timeline";
import Rewards from "@/components/Rewards";
import Sponsors from "@/components/Sponsors";
import FAQ from "@/components/FAQ";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky navigation bar */}
      <Navbar />

      <main className="flex-1">
        {/* Minimal Hero Section with Live Countdown */}
        <Hero />

        {/* About Section explaining mission & values */}
        <About />

        {/* Why Participate premium grid */}
        <WhyParticipate />

        {/* Thematic Tracks with interactive reveal-on-hover cards */}
        <Tracks />

        {/* Responsive horizontal/vertical Timeline roadmap */}
        <Timeline />

        {/* Premium Reward Vault & side credits */}
        <Rewards />

        {/* Partners & Sponsors Monochrome grid */}
        <Sponsors />

        {/* Accordion FAQ section */}
        <FAQ />

        {/* Team profile cards */}
        <Team />
      </main>

      {/* Modern, minimal Footer */}
      <Footer />
    </>
  );
}
