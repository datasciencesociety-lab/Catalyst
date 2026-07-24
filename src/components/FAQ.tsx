"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who is eligible to participate?",
    answer: "Undergraduate and postgraduate students enrolled in any recognized institution in India are eligible. We look for cross-disciplinary teams containing developers, designers, product strategists, and researchers.",
  },
  {
    question: "What is the team size limit?",
    answer: "Teams must consist of 2 to 4 members. You can submit your application as a team or individually. Shortlisted individual applicants will have access to a team formation portal prior to the hack.",
  },
  {
    question: "Is there a registration fee?",
    answer: "Yes, there will be a registration fee for shortlisted teams. The exact fee details and payment instructions will be announced soon.",
  },
  {
    question: "Is the hackathon online or in-person?",
    answer: "Catalyst '26 is a fully physical, in-person event held at the DSS Tech Hub. This is designed to maximize physical networking, face-to-face mentorship with engineering experts, and live presentations.",
  },
  {
    question: "How does the shortlisting process work?",
    answer: "Applications are vetted based on technical depth, past GitHub repositories, design portfolios, and team synergy. Selected teams will receive official invitations within three days of application review.",
  },
  {
    question: "Who owns the intellectual property of the projects?",
    answer: "All projects, repositories, and product mockups built during the 24 hours belong entirely to the creators. We highly encourage open-sourcing projects under MIT or Apache licenses.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 relative overflow-hidden bg-white border-b border-border-subtle/50">
      <div className="absolute inset-0 bg-blueprint-dot opacity-40 z-0 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="font-mono text-xs font-semibold text-brand-blue uppercase tracking-widest mb-3">
            07 // FAQ & COMPLIANCE
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-zinc-900 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-[2px] bg-brand-blue mt-6 mx-auto" />
        </div>

        {/* Accordions */}
        <div className="flex flex-col border-t border-zinc-150">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="border-b border-zinc-150 py-5 transition-colors duration-200"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between text-left focus:outline-none py-2 group"
                >
                  <span className="font-display font-semibold text-sm md:text-base text-zinc-800 group-hover:text-brand-blue transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="text-zinc-400 group-hover:text-brand-blue transition-colors"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 }
                      }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2 pb-4 text-xs md:text-sm text-zinc-500 font-sans leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
