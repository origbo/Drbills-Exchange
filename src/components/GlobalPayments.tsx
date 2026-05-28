import { Banknote, Clock3, Globe2, Languages } from "lucide-react";
import WorldMap from "./WorldMap";
import Reveal from "./Reveal";

const COUNTRIES = ["USA", "UK", "Canada", "UAE", "China", "Australia"];

export default function GlobalPayments() {
  return (
    <section id="global" className="relative overflow-hidden py-28 sm:py-36">
      {/* ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-1/2 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(37,99,235,0.4), transparent 70%)",
          }}
        />
      </div>

      <div className="container-x">
        <Reveal className="text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan/80">
            International Payments
          </p>
          <h2 className="section-title mx-auto max-w-4xl">
            Move Money <span className="text-gradient">Without Borders.</span>
          </h2>
          <p className="section-sub mt-5">
            Send and receive payments across 180+ countries. Lightning-fast,
            bank-grade, beautifully simple.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="relative glass-strong holographic-border overflow-hidden rounded-3xl p-3 sm:p-5">
            <WorldMap />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {COUNTRIES.map((c) => (
              <span key={c} className="chip text-sm">
                <Globe2 size={13} className="text-cyan" /> {c}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {[
            { icon: Clock3, t: "Settled in minutes", d: "Global rails, local feel." },
            { icon: Banknote, t: "Multi-currency", d: "USD, EUR, GBP, AED & more." },
            { icon: Languages, t: "Built for everyone", d: "Available in 14 languages." },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 0.05}>
              <div className="glass holographic-border h-full rounded-3xl p-6">
                <div
                  className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg,#06B6D4,#2563EB,#7C3AED)",
                    boxShadow:
                      "0 0 22px rgba(6,182,212,0.4), inset 0 1px 0 rgba(255,255,255,0.25)",
                  }}
                >
                  <b.icon size={20} className="text-white" />
                </div>
                <h3 className="font-display text-lg font-semibold">{b.t}</h3>
                <p className="mt-1 text-sm text-[#94A3B8]">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
