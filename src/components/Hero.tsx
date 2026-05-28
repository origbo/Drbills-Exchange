import { motion } from "framer-motion";
import { ArrowRight, Download, Zap, Shield, Globe } from "lucide-react";
import HeroVisual from "./HeroVisual";
import FloatingParticles from "./FloatingParticles";

const badges = [
  { icon: Zap, label: "Instant Transactions" },
  { icon: Shield, label: "Trusted Platform" },
  { icon: Globe, label: "Global Payments" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      <FloatingParticles density={70} />

      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          {/* LEFT */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-1.5 pr-3.5 backdrop-blur"
            >
              <span
                className="rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white"
                style={{
                  background:
                    "linear-gradient(135deg,#7C3AED 0%,#2563EB 60%,#06B6D4 100%)",
                }}
              >
                New
              </span>
              <span className="text-xs text-white/75">
                A financial operating system for the next generation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.6rem,6vw,5.25rem)] font-semibold leading-[0.96] tracking-[-0.03em]"
            >
              <span className="block">Borderless Payments</span>
              <span className="block">For The</span>
              <span className="block text-gradient">Digital Generation.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-[#94A3B8]"
            >
              Bills. Crypto. Virtual USD Cards. International Payments. Gift Card
              Trading. All powered by one intelligent fintech ecosystem.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#cta" className="btn-primary group">
                Get Started
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a href="#cta" className="btn-ghost">
                <Download size={16} /> Download App
              </a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-9 flex flex-wrap gap-2.5"
            >
              {badges.map((b) => (
                <li key={b.label} className="chip">
                  <b.icon size={13} className="text-cyan" />
                  {b.label}
                </li>
              ))}
            </motion.ul>

            {/* Stat strip */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-4 sm:max-w-md"
            >
              {[
                { v: "1.2M+", l: "Users" },
                { v: "$4.8B", l: "Volume" },
                { v: "180+", l: "Countries" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-numbers text-2xl font-semibold tracking-tight sm:text-3xl">
                    {s.v}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-white/55">
                    {s.l}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
