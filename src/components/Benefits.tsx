import { Sparkles, ShieldCheck, Gauge, Headphones } from "lucide-react";
import Reveal from "./Reveal";

const BENEFITS = [
  {
    icon: Gauge,
    title: "Built for Speed",
    desc: "Engineered for sub-second response on every action.",
    metric: "0.4s",
    metricLabel: "Avg. confirm time",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Design",
    desc: "End-to-end encryption + biometric authentication.",
    metric: "256-bit",
    metricLabel: "Encryption",
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    desc: "A polished UI inspired by world-class fintech apps.",
    metric: "5.0",
    metricLabel: "User rating",
  },
  {
    icon: Headphones,
    title: "Human Support 24/7",
    desc: "Real people. Real answers. Whenever you need them.",
    metric: "<2 min",
    metricLabel: "Response time",
  },
];

export default function Benefits() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan/80">
            Why DrBills
          </p>
          <h2 className="section-title mx-auto max-w-3xl">
            Designed for the way you{" "}
            <span className="text-gradient">live, work and grow.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.05}>
              <div className="glass holographic-border h-full rounded-3xl p-6">
                <div className="flex items-start justify-between">
                  <div
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(135deg,#7C3AED,#2563EB,#06B6D4)",
                      boxShadow:
                        "0 0 22px rgba(124,58,237,0.45), inset 0 1px 0 rgba(255,255,255,0.25)",
                    }}
                  >
                    <b.icon size={20} className="text-white" />
                  </div>
                  <div className="text-right">
                    <div className="font-numbers text-2xl font-semibold text-gradient">
                      {b.metric}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-white/45">
                      {b.metricLabel}
                    </div>
                  </div>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">
                  {b.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#94A3B8]">
                  {b.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
