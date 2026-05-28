import { motion } from "framer-motion";
import { Gift, BadgePercent, Zap } from "lucide-react";
import Reveal from "./Reveal";

const CARDS = [
  {
    name: "iTunes",
    sub: "USA / UK / EU",
    color: "linear-gradient(135deg,#0EA5E9,#7C3AED)",
    rate: "₦1,750 /$",
  },
  {
    name: "Amazon",
    sub: "USA / UK",
    color: "linear-gradient(135deg,#F59E0B,#EF4444)",
    rate: "₦1,540 /$",
  },
  {
    name: "Steam",
    sub: "USA / CA",
    color: "linear-gradient(135deg,#06B6D4,#2563EB)",
    rate: "₦1,620 /$",
  },
  {
    name: "Google Play",
    sub: "USA / UK",
    color: "linear-gradient(135deg,#22C55E,#06B6D4)",
    rate: "₦1,510 /$",
  },
];

export default function GiftCardSection() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan/80">
              Gift Card Trading
            </p>
            <h2 className="section-title">
              Trade Gift Cards At The{" "}
              <span className="text-gradient">Best Rates.</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#94A3B8]">
              Sell iTunes, Amazon, Steam and Google Play cards in seconds.
              We pay you instantly to your bank or wallet.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { icon: Zap, t: "Instant Payout" },
                { icon: BadgePercent, t: "Top Rates" },
                { icon: Gift, t: "100+ Cards" },
              ].map((b) => (
                <li
                  key={b.t}
                  className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3 text-sm backdrop-blur"
                >
                  <b.icon size={16} className="text-cyan" />
                  <span className="text-white/85">{b.t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-3">
              <a href="#cta" className="btn-primary">Trade Now</a>
              <a href="#features" className="btn-ghost">View Rates</a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                {CARDS.map((c, i) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, y: 30, rotate: i % 2 ? 4 : -4 }}
                    whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 2 : -2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.9,
                      delay: i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -6, rotate: 0, scale: 1.03 }}
                    className="relative aspect-[1.586/1] overflow-hidden rounded-2xl p-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]"
                    style={{ backgroundImage: c.color }}
                  >
                    <div className="pointer-events-none absolute -inset-y-8 -left-1/3 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-sweep" />
                    <div className="relative flex h-full flex-col justify-between text-white">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.3em] opacity-80">
                          Gift Card
                        </div>
                        <div className="mt-1 font-display text-2xl font-semibold">
                          {c.name}
                        </div>
                      </div>
                      <div className="flex items-end justify-between">
                        <div className="text-xs opacity-80">{c.sub}</div>
                        <div className="rounded-full bg-black/30 px-2.5 py-1 font-numbers text-[11px] font-semibold backdrop-blur">
                          {c.rate}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
