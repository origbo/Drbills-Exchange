import { motion } from "framer-motion";
import { Bitcoin, Coins, Wallet, Zap, ShieldCheck } from "lucide-react";
import { SiEthereum, SiTether, SiBnbchain, SiSolana } from "react-icons/si";
import Reveal from "./Reveal";

const COINS = [
  { Icon: Bitcoin, label: "BTC", price: "$68,420", change: "+2.4%", color: "#F7931A" },
  { Icon: SiEthereum, label: "ETH", price: "$3,512", change: "+1.7%", color: "#627EEA" },
  { Icon: SiTether, label: "USDT", price: "$1.00", change: "+0.01%", color: "#26A17B" },
  { Icon: SiBnbchain, label: "BNB", price: "$612", change: "+0.9%", color: "#F0B90B" },
  { Icon: SiSolana, label: "SOL", price: "$182", change: "+4.2%", color: "#9945FF" },
];

export default function CryptoSection() {
  return (
    <section id="crypto" className="relative py-28 sm:py-36">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left side: chart */}
          <Reveal>
            <ChartCard />
          </Reveal>

          {/* Right side: copy */}
          <Reveal delay={0.1}>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan/80">
              Crypto Exchange
            </p>
            <h2 className="section-title">
              Convert <span className="text-gradient">Crypto To Naira</span> In Minutes.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#94A3B8]">
              Trade BTC, ETH, USDT and more at real-time market rates. Funds settle
              directly to your bank. No waiting, no friction.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { icon: Zap, label: "Instant withdrawals" },
                { icon: Coins, label: "Real-time rates" },
                { icon: ShieldCheck, label: "Secure wallet" },
                { icon: Wallet, label: "Low transparent fees" },
              ].map((f) => (
                <li
                  key={f.label}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur"
                >
                  <span
                    className="inline-flex h-9 w-9 items-center justify-center rounded-xl"
                    style={{
                      background:
                        "linear-gradient(135deg,#7C3AED,#2563EB,#06B6D4)",
                      boxShadow:
                        "0 0 18px rgba(6,182,212,0.45), inset 0 1px 0 rgba(255,255,255,0.25)",
                    }}
                  >
                    <f.icon size={16} className="text-white" />
                  </span>
                  <span className="text-sm text-white/85">{f.label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-3">
              <a href="#cta" className="btn-primary">Start Trading</a>
              <a href="#how" className="btn-ghost">See How It Works</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ChartCard() {
  return (
    <div className="relative">
      {/* glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[36px] opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(124,58,237,0.45), transparent 70%)",
        }}
      />
      <div className="glass-strong holographic-border relative overflow-hidden rounded-3xl p-5 sm:p-7">
        {/* faint trading grid */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{
                background:
                  "linear-gradient(135deg, #F7931A 0%, #FFC56F 100%)",
                boxShadow: "0 0 24px rgba(247,147,26,0.4)",
              }}
            >
              <Bitcoin size={20} className="text-black/85" />
            </div>
            <div>
              <div className="text-xs text-white/55">BTC / NGN</div>
              <div className="font-numbers text-2xl font-semibold tracking-tight">
                ₦ 108,420,000
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
              +2.43%
            </div>
            <div className="mt-1 text-[11px] text-white/45">24h change</div>
          </div>
        </div>

        {/* Candlestick chart */}
        <div className="relative mt-5 h-48 sm:h-60">
          <CandlestickChart />
        </div>

        {/* Coin row */}
        <div className="mt-5 grid grid-cols-5 gap-2">
          {COINS.map((c) => (
            <div
              key={c.label}
              className="flex flex-col items-center gap-1 rounded-xl border border-white/8 bg-white/[0.03] p-2 text-center"
            >
              <c.Icon
                size={22}
                style={{
                  color: c.color,
                  filter: `drop-shadow(0 0 10px ${c.color}55)`,
                }}
              />
              <div className="font-display text-[11px] font-semibold">{c.label}</div>
              <div className="font-numbers text-[10px] text-white/55">
                {c.price}
              </div>
              <div className="text-[10px] text-emerald-300/90">{c.change}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CandlestickChart() {
  const bars = Array.from({ length: 22 }).map((_, i) => {
    const up = (i * 73 + 13) % 100 > 38;
    const wickTop = 6 + ((i * 19) % 18);
    const bodyH = 14 + ((i * 31) % 32);
    const wickBot = 6 + ((i * 13) % 14);
    return { up, wickTop, bodyH, wickBot };
  });

  return (
    <div className="relative h-full">
      {/* line overlay */}
      <svg
        viewBox="0 0 220 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="lg" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="lg-area" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0 70 L20 60 L40 65 L60 50 L80 55 L100 40 L120 48 L140 30 L160 38 L180 22 L200 28 L220 14"
          fill="none"
          stroke="url(#lg)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />
        <motion.path
          d="M0 70 L20 60 L40 65 L60 50 L80 55 L100 40 L120 48 L140 30 L160 38 L180 22 L200 28 L220 14 L220 100 L0 100 Z"
          fill="url(#lg-area)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.4 }}
        />
      </svg>

      {/* candles */}
      <div className="absolute inset-0 flex items-end gap-1.5 px-1">
        {bars.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.4 + i * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-1 flex-col items-center justify-end origin-bottom"
          >
            <div
              className="w-px"
              style={{
                height: `${b.wickTop}px`,
                background: b.up ? "#34d399aa" : "#fb7185aa",
              }}
            />
            <div
              className="w-2 rounded-[2px]"
              style={{
                height: `${b.bodyH}px`,
                background: b.up
                  ? "linear-gradient(180deg, #34d399, #059669)"
                  : "linear-gradient(180deg, #fb7185, #be123c)",
                boxShadow: b.up
                  ? "0 0 10px rgba(52,211,153,0.4)"
                  : "0 0 10px rgba(251,113,133,0.4)",
              }}
            />
            <div
              className="w-px"
              style={{
                height: `${b.wickBot}px`,
                background: b.up ? "#34d399aa" : "#fb7185aa",
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* moving price dot */}
      <motion.div
        aria-hidden
        className="absolute -translate-y-1/2"
        style={{ right: 0, top: "14%" }}
        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <span className="block h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
      </motion.div>
    </div>
  );
}
