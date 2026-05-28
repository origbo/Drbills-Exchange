import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import { cn } from "../lib/utils";

const FAQS = [
  {
    q: "How fast are transactions on DrBills Exchange?",
    a: "Most transactions settle in under 10 seconds. Bills, transfers and crypto swaps are processed in real-time, 24/7.",
  },
  {
    q: "Is my money safe with DrBills?",
    a: "Yes. We use 256-bit encryption, biometric authentication, hardware-key signing and 24/7 fraud monitoring. Your data and funds are protected end-to-end.",
  },
  {
    q: "Can I create a virtual USD card?",
    a: "Absolutely. Create unlimited virtual USD cards in seconds, perfect for online shopping, subscriptions and global payments.",
  },
  {
    q: "Which cryptocurrencies do you support?",
    a: "We support BTC, ETH, USDT, USDC, BNB, SOL and more. Convert any of them to Naira at real-time market rates.",
  },
  {
    q: "Can I send money internationally?",
    a: "Yes. Send and receive money in 180+ countries with multi-currency support including USD, EUR, GBP, AED, CAD and more.",
  },
  {
    q: "How can I contact support?",
    a: "Our human support team is available 24/7 via in-app chat, email and phone. Average response time is under 2 minutes.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 sm:py-36">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan/80">
            FAQ
          </p>
          <h2 className="section-title mx-auto max-w-3xl">
            Everything you need to{" "}
            <span className="text-gradient">know.</span>
          </h2>
          <p className="section-sub mt-5">
            Honest answers about transactions, security and the DrBills
            experience.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div
                  className={cn(
                    "glass holographic-border mb-3 rounded-2xl transition-colors duration-300",
                    isOpen ? "border-border-glow" : ""
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-5 text-left"
                  >
                    <span className="font-display text-base sm:text-lg font-medium text-white">
                      {f.q}
                    </span>
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] transition-all duration-300",
                        isOpen && "border-transparent shadow-neon-soft"
                      )}
                      style={
                        isOpen
                          ? {
                              background:
                                "linear-gradient(135deg,#7C3AED,#2563EB,#06B6D4)",
                            }
                          : undefined
                      }
                    >
                      <Plus
                        size={16}
                        className={cn(
                          "transition-transform duration-300",
                          isOpen ? "rotate-45 text-white" : "text-white/80"
                        )}
                      />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-[15px] leading-relaxed text-[#94A3B8]">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
