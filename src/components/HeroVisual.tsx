import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Bitcoin,
  Globe2,
  TrendingUp,
  Wallet,
} from "lucide-react";

/**
 * Hero floating fintech ecosystem.
 * Uses CSS + framer-motion for a smooth, cinematic, parallax visual.
 */
export default function HeroVisual() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 16 });
  const sy = useSpring(my, { stiffness: 60, damping: 16 });

  const px = useTransform(sx, [-1, 1], [-20, 20]);
  const py = useTransform(sy, [-1, 1], [-16, 16]);
  const px2 = useTransform(sx, [-1, 1], [12, -12]);
  const py2 = useTransform(sy, [-1, 1], [10, -10]);
  const pxs = useTransform(sx, [-1, 1], [-8, 8]);
  const pys = useTransform(sy, [-1, 1], [-6, 6]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      mx.set(x * 2 - 1);
      my.set(y * 2 - 1);
    };
    const onLeave = () => {
      mx.set(0);
      my.set(0);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [mx, my]);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-square w-full max-w-[640px] [perspective:1400px]"
    >
      {/* Orbital rings */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        aria-hidden
      >
        <div className="absolute inset-[8%] rounded-full border border-white/10" />
        <div className="absolute inset-[18%] rounded-full border border-white/[0.07]" />
        <div className="absolute inset-[28%] rounded-full border border-white/[0.05]" />
      </motion.div>

      {/* Center holographic glow */}
      <div className="absolute inset-[22%] rounded-full bg-brand-gradient opacity-30 blur-3xl" />
      <div className="absolute inset-[32%] rounded-full bg-brand-gradient opacity-50 blur-2xl animate-pulse-glow" />

      {/* Central holographic dashboard card */}
      <motion.div
        style={{ x: px, y: py }}
        className="absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d]"
      >
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="glass-strong holographic-border relative overflow-hidden rounded-3xl p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
          style={{ transform: "rotate3d(0.4,1,0,8deg)" }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              <span className="text-xs text-white/70">Live Balance</span>
            </div>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] text-white/60">
              USD
            </span>
          </div>
          <div className="mt-3 font-numbers text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold tracking-tight">
            $ 24,815<span className="text-white/40">.42</span>
          </div>
          <div className="mt-1 flex items-center gap-1.5 text-xs text-emerald-300/90">
            <TrendingUp size={12} /> +18.4%{" "}
            <span className="text-white/40">vs last month</span>
          </div>

          {/* Bars chart */}
          <div className="mt-4 flex h-20 items-end gap-1.5">
            {[40, 55, 30, 70, 50, 80, 60, 90, 65, 75, 55, 95].map((h, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5 + i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="origin-bottom flex-1 rounded-[3px]"
                style={{
                  height: `${h}%`,
                  background:
                    "linear-gradient(180deg, rgba(124,58,237,0.95), rgba(37,99,235,0.65))",
                  boxShadow: "0 0 12px rgba(124,58,237,0.45)",
                }}
              />
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            {[
              { icon: Wallet, label: "Send" },
              { icon: ArrowUpRight, label: "Top Up" },
            ].map((b) => (
              <div
                key={b.label}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] py-2 text-xs text-white/85"
              >
                <b.icon size={13} /> {b.label}
              </div>
            ))}
          </div>

          {/* sheen */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute -inset-y-10 -left-1/3 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-sweep" />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Virtual USD Card (top-right) */}
      <motion.div
        style={{ x: px2, y: py2 }}
        className="absolute -right-2 top-4 w-[58%] sm:w-[52%] [transform-style:preserve-3d]"
      >
        <motion.div
          initial={{ opacity: 0, x: 40, rotate: -8 }}
          animate={{ opacity: 1, x: 0, rotate: -10 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="animate-float-slow"
        >
          <MiniVirtualCard />
        </motion.div>
      </motion.div>

      {/* Crypto coin bubble (bottom-left) */}
      <motion.div
        style={{ x: pxs, y: pys }}
        className="absolute -left-2 bottom-10 w-[36%] sm:w-[30%]"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="glass holographic-border relative flex items-center gap-3 rounded-2xl p-3 animate-float"
        >
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl"
            style={{
              background:
                "linear-gradient(135deg, #F7931A 0%, #FFC56F 100%)",
              boxShadow: "0 0 24px rgba(247,147,26,0.45)",
            }}
          >
            <Bitcoin size={20} className="text-black/80" />
          </div>
          <div className="leading-tight">
            <div className="text-[11px] text-white/60">Bitcoin</div>
            <div className="font-numbers text-sm font-semibold">$68,420</div>
            <div className="text-[10px] text-emerald-300/90">+2.34%</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Global node (right-bottom) */}
      <motion.div
        style={{ x: pxs, y: pys }}
        className="absolute -right-1 bottom-6 w-[40%] sm:w-[34%]"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="glass holographic-border relative flex items-center gap-3 rounded-2xl p-3 animate-float-slow"
        >
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl"
            style={{
              background: "linear-gradient(135deg, #06B6D4 0%, #2563EB 100%)",
              boxShadow: "0 0 24px rgba(6,182,212,0.45)",
            }}
          >
            <Globe2 size={20} className="text-white" />
          </div>
          <div className="leading-tight">
            <div className="text-[11px] text-white/60">Sent to USA</div>
            <div className="font-numbers text-sm font-semibold">$1,200.00</div>
            <div className="text-[10px] text-cyan/90">Settled in 8s</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating tiny particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white"
            style={{
              left: `${(i * 53) % 95 + 2}%`,
              top: `${(i * 37) % 92 + 3}%`,
              boxShadow: "0 0 10px rgba(255,255,255,0.7)",
              opacity: 0.65,
            }}
            animate={{ y: [0, -10, 0], opacity: [0.35, 0.9, 0.35] }}
            transition={{
              duration: 4 + (i % 5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function MiniVirtualCard() {
  return (
    <div
      className="relative aspect-[1.586/1] w-full overflow-hidden rounded-2xl p-4"
      style={{
        background:
          "linear-gradient(135deg, #0B0F2A 0%, #111228 40%, #1A1240 100%)",
        boxShadow:
          "0 30px 80px -10px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.1)",
      }}
    >
      {/* holographic overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(124,58,237,0.35) 0%, transparent 35%, rgba(6,182,212,0.25) 80%)",
        }}
      />
      <div className="pointer-events-none absolute -inset-y-6 -left-1/3 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-sweep" />
      <div className="relative flex h-full flex-col justify-between text-white">
        <div className="flex items-center justify-between">
          <span className="font-display text-[11px] font-semibold tracking-wider uppercase">
            DrBills • USD
          </span>
          <span
            className="h-5 w-7 rounded-sm"
            style={{
              background:
                "linear-gradient(135deg, #FFCC33 0%, #B89224 50%, #FFD86B 100%)",
              boxShadow: "inset 0 0 6px rgba(0,0,0,0.4)",
            }}
            aria-hidden
          />
        </div>
        <div className="font-numbers text-[13px] tracking-[0.18em] text-white/85">
          •••• •••• •••• 4218
        </div>
        <div className="flex items-end justify-between">
          <div className="font-display text-[10px] uppercase text-white/65">
            Dr. Aiden Smith
          </div>
          <div className="flex items-center gap-1">
            <span className="block h-4 w-4 rounded-full bg-[#EB001B] opacity-90" />
            <span className="block -ml-2 h-4 w-4 rounded-full bg-[#F79E1B] opacity-90" />
          </div>
        </div>
      </div>
    </div>
  );
}
