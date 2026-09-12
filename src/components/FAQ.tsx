"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";

/**
 * Reusable FAQ Data Structure
 *
 * Update or append items here to reflect current event guidelines.
 */
export interface FAQItem {
  number: string;
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    number: "01",
    question: "Who can participate?",
    answer:
      "Students and emerging builders interested in solving real-world problems can participate.",
  },
  {
    number: "02",
    question: "Can I participate individually?",
    answer:
      "Yes. CATALYST '26 allows both individual participation and teams.",
  },
  {
    number: "03",
    question: "What is the team size?",
    answer: "Teams can have 1–4 members.",
  },
  {
    number: "04",
    question: "What are the hackathon tracks?",
    answer: "Education, Open Innovation, FinTech, AI and Healthcare.",
  },
  {
    number: "05",
    question: "Where will CATALYST '26 take place?",
    answer: "CMR Institute of Technology (CMRIT), Hyderabad.",
  },
  {
    number: "06",
    question: "When is the hackathon?",
    answer: "October 9–10, 2026. CATALYST '26 is a 24-hour hackathon.",
  },
  {
    number: "07",
    question: "How do I register?",
    answer: (
      <span>
        Registration will be conducted through{" "}
        <a
          href="#register"
          className="text-brand-blue font-medium underline underline-offset-4 hover:text-brand-blue-hover transition-colors"
        >
          Unstop
        </a>
        .
      </span>
    ),
  },
  {
    number: "08",
    question: "What is the registration fee?",
    answer: "Announcing Soon.",
  },
  {
    number: "09",
    question: "Will there be shortlisting?",
    answer:
      "Shortlisting may take place if registrations are high. It is not necessarily required for every registration.",
  },
  {
    number: "10",
    question: "What will participants receive?",
    answer:
      "Participants can expect mentorship, networking, learning opportunities, certificates, team-building experiences and additional surprises or partner benefits as announced.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="py-28 md:py-36 lg:py-40 relative overflow-hidden bg-paper border-b border-border-subtle/60"
    >
      {/* Blueprint Grid & Dot Overlays */}
      <div className="absolute inset-0 bg-blueprint-dot opacity-40 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Editorial Heading & Support CTA */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 mb-5 md:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              <span className="font-mono text-xs md:text-sm font-semibold text-brand-blue tracking-[0.22em] uppercase">
                FAQ
              </span>
            </div>

            <h2 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-[-0.035em] text-foreground leading-[0.92] uppercase mb-6 sm:mb-8">
              QUESTIONS,
              <br />
              ANSWERED.
            </h2>

            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed font-sans max-w-md mb-10">
              Everything you need to know before you build.
            </p>

            {/* Desktop Left Closing CTA */}
            <div className="hidden lg:block pt-8 border-t border-border-subtle/80">
              <div className="font-mono text-[11px] font-semibold tracking-[0.2em] text-zinc-400 uppercase mb-2">
                STILL HAVE QUESTIONS?
              </div>
              <p className="text-zinc-500 text-xs sm:text-sm font-sans mb-4 leading-relaxed">
                Can&apos;t find what you&apos;re looking for? Reach out directly to
                our organizing team.
              </p>
              <a
                href="mailto:cmritdatasciencesociety@gmail.com?subject=Catalyst%20'26%20FAQ%20Inquiry"
                className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-brand-blue hover:text-brand-blue-hover transition-colors group/cta"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Hairline Divided Accordion List */}
          <div className="lg:col-span-7">
            <div className="border-t border-zinc-200/80">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <div
                    key={faq.number}
                    className="border-b border-zinc-200/80 transition-colors"
                  >
                    <button
                      type="button"
                      id={`faq-question-${faq.number}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.number}`}
                      onClick={() => toggleAccordion(idx)}
                      className="w-full py-5 sm:py-6 flex items-start justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 rounded-sm group transition-all cursor-pointer select-none"
                    >
                      <div className="flex items-start gap-3 sm:gap-4 pr-3">
                        <span className="font-mono text-xs sm:text-sm font-semibold text-zinc-400 group-hover:text-brand-blue transition-colors pt-0.5 w-7 sm:w-8 shrink-0">
                          {faq.number}
                        </span>
                        <span className="font-display font-semibold text-base sm:text-lg md:text-[18px] text-zinc-900 group-hover:text-brand-blue transition-colors leading-snug">
                          {faq.question}
                        </span>
                      </div>

                      <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-400 group-hover:text-brand-blue group-hover:border-brand-blue/30 transition-all shrink-0 mt-0.5">
                        {isOpen ? (
                          <Minus className="w-3.5 h-3.5 stroke-[2]" />
                        ) : (
                          <Plus className="w-3.5 h-3.5 stroke-[2]" />
                        )}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${faq.number}`}
                          role="region"
                          aria-labelledby={`faq-question-${faq.number}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                            transition: {
                              height: {
                                duration: 0.3,
                                ease: [0.16, 1, 0.3, 1] as [
                                  number,
                                  number,
                                  number,
                                  number
                                ],
                              },
                              opacity: { duration: 0.2, delay: 0.05 },
                            },
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                              height: {
                                duration: 0.25,
                                ease: [0.16, 1, 0.3, 1] as [
                                  number,
                                  number,
                                  number,
                                  number
                                ],
                              },
                              opacity: { duration: 0.15 },
                            },
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pl-10 sm:pl-12 pb-6 pr-4 sm:pr-8 text-sm sm:text-[15px] text-zinc-600 font-sans leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Mobile Bottom Closing CTA */}
            <div className="lg:hidden mt-12 pt-8 border-t border-border-subtle/80">
              <div className="font-mono text-[11px] font-semibold tracking-[0.2em] text-zinc-400 uppercase mb-2">
                STILL HAVE QUESTIONS?
              </div>
              <p className="text-zinc-500 text-xs sm:text-sm font-sans mb-4 leading-relaxed">
                Can&apos;t find what you&apos;re looking for? Reach out directly to
                our organizing team.
              </p>
              <a
                href="mailto:cmritdatasciencesociety@gmail.com?subject=Catalyst%20'26%20FAQ%20Inquiry"
                className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-brand-blue hover:text-brand-blue-hover transition-colors group/cta"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

