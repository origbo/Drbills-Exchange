import { Download, UserPlus, Wallet, Rocket } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  {
    icon: Download,
    title: "Download The App",
    desc: "Get DrBills Exchange on iOS, Android or the web. No setup needed.",
  },
  {
    icon: UserPlus,
    title: "Create Your Account",
    desc: "Sign up in under 60 seconds with biometric security from day one.",
  },
  {
    icon: Wallet,
    title: "Fund Your Wallet",
    desc: "Top up via bank transfer, card or crypto. Multi-currency from the start.",
  },
  {
    icon: Rocket,
    title: "Move At Light Speed",
    desc: "Send, swap, pay and spend anywhere. Instantly and intelligently.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-28 sm:py-36">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan/80">
            How It Works
          </p>
          <h2 className="section-title mx-auto max-w-3xl">
            Get Started In <span className="text-gradient">Four Steps.</span>
          </h2>
          <p className="section-sub mt-5">
            From signup to your first transfer in under two minutes.
          </p>
        </Reveal>

        <div className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* connector line */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px lg:block"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(6,182,212,0.5), transparent)",
            }}
          />
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <div className="glass holographic-border relative h-full rounded-3xl p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(135deg,#7C3AED,#2563EB,#06B6D4)",
                      boxShadow:
                        "0 0 24px rgba(124,58,237,0.5), inset 0 1px 0 rgba(255,255,255,0.25)",
                    }}
                  >
                    <s.icon size={20} className="text-white" />
                  </div>
                  <div className="font-numbers text-3xl font-semibold text-white/15">
                    0{i + 1}
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
