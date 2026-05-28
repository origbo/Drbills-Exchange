import {
  Zap,
  ShieldCheck,
  CreditCard,
  Coins,
  Globe2,
  Gift,
  Smartphone,
  LineChart,
} from "lucide-react";
import AnimatedCard from "./AnimatedCard";
import Reveal from "./Reveal";

const FEATURES = [
  {
    icon: Zap,
    title: "Instant Bills",
    desc: "Pay electricity, data, airtime, cable TV and more in seconds. Always on, always fast.",
    color: "from-[#7C3AED] to-[#2563EB]",
  },
  {
    icon: Coins,
    title: "Crypto Exchange",
    desc: "Convert BTC, ETH and USDT to Naira at real-time market rates with zero stress.",
    color: "from-[#2563EB] to-[#06B6D4]",
  },
  {
    icon: CreditCard,
    title: "Virtual USD Card",
    desc: "Spend globally with a sleek dollar card built for the modern internet.",
    color: "from-[#06B6D4] to-[#7C3AED]",
  },
  {
    icon: Globe2,
    title: "Global Transfers",
    desc: "Borderless payments to 180+ countries, settled in minutes, not days.",
    color: "from-[#7C3AED] to-[#06B6D4]",
  },
  {
    icon: Gift,
    title: "Gift Card Trading",
    desc: "Sell iTunes, Amazon, Steam & Google Play cards at the best rates in Africa.",
    color: "from-[#2563EB] to-[#7C3AED]",
  },
  {
    icon: ShieldCheck,
    title: "Bank-Grade Security",
    desc: "Biometric auth, hardware-key encryption and 24/7 fraud monitoring.",
    color: "from-[#06B6D4] to-[#2563EB]",
  },
  {
    icon: Smartphone,
    title: "One Beautiful App",
    desc: "iOS, Android and Web. Fluid, minimal, designed by people who care.",
    color: "from-[#7C3AED] to-[#2563EB]",
  },
  {
    icon: LineChart,
    title: "Smart Analytics",
    desc: "Real-time insights on every transaction. Know your money like never before.",
    color: "from-[#2563EB] to-[#06B6D4]",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-28 sm:py-36">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan/80">
            Features
          </p>
          <h2 className="section-title mx-auto max-w-3xl">
            One App. <span className="text-gradient">Endless</span> Financial
            Possibilities.
          </h2>
          <p className="section-sub mt-5">
            Everything you need to send, spend, save and grow money in the new
            digital economy.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <AnimatedCard className="h-full">
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${f.color} shadow-[0_0_30px_rgba(124,58,237,0.45)] transition-transform duration-500 group-hover:rotate-6`}
                >
                  <f.icon size={22} className="text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">
                  {f.desc}
                </p>
              </AnimatedCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
