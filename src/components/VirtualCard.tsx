import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Cpu, Lock, Wifi, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

/**
 * Centerpiece: 3D rotating premium black metal USD card.
 */
export default function VirtualCard() {
  return (
    <section id="card" className="relative py-28 sm:py-36">
      {/* ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-1/2 h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(124,58,237,0.35), transparent 70%)",
          }}
        />
      </div>

      <div className="container-x">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan/80">
              The Virtual USD Card
            </p>
            <h2 className="section-title">
              A <span className="text-gradient">Premium</span> Card,
              <br />
              Built for the Internet.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#94A3B8]">
              Spend in dollars, anywhere in the world. Subscribe to apps,
              shop globally, pay for ads. Instantly, securely, beautifully.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { icon: Lock, label: "Tokenized & encrypted" },
                { icon: Cpu, label: "Smart spending limits" },
                { icon: Wifi, label: "Instant freeze & unfreeze" },
                { icon: Sparkles, label: "Premium rewards" },
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
                        "0 0 20px rgba(124,58,237,0.45), inset 0 1px 0 rgba(255,255,255,0.25)",
                    }}
                  >
                    <f.icon size={16} className="text-white" />
                  </span>
                  <span className="text-sm text-white/85">{f.label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-3">
              <a href="#cta" className="btn-primary">
                Create My Card
              </a>
              <a href="#features" className="btn-ghost">
                Learn More
              </a>
            </div>
          </Reveal>

          <div className="relative [perspective:1400px]">
            <CardScene />
          </div>
        </div>
      </div>
    </section>
  );
}

function CardScene() {
  const ref = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 14 });
  const sy = useSpring(my, { stiffness: 80, damping: 14 });
  const rotY = useTransform(sx, [-1, 1], [-18, 18]);
  const rotX = useTransform(sy, [-1, 1], [14, -14]);

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
        my.set(((e.clientY - r.top) / r.height) * 2 - 1);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative mx-auto aspect-[1.586/1] w-full max-w-[560px]"
    >
      {/* drop shadow */}
      <div
        className="absolute inset-x-8 bottom-[-22%] h-1/2 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(124,58,237,0.6), transparent 70%)",
        }}
        aria-hidden
      />

      <motion.div
        style={{
          rotateX: rotX,
          rotateY: rotY,
          transformStyle: "preserve-3d",
        }}
        animate={{ rotate: [0, 0.6, -0.6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-full w-full rounded-[28px]"
      >
        <PremiumCard />
      </motion.div>
    </div>
  );
}

function PremiumCard() {
  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-[28px] p-7"
      style={{
        background:
          "linear-gradient(135deg, #08091A 0%, #0B0B22 35%, #14102E 70%, #0C1130 100%)",
        boxShadow:
          "0 50px 120px -30px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 0 0 1px rgba(124,58,237,0.18)",
      }}
    >
      {/* holographic refraction */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "conic-gradient(from 200deg at 70% 30%, rgba(124,58,237,0.35), rgba(37,99,235,0.0) 35%, rgba(6,182,212,0.3) 60%, rgba(124,58,237,0.0) 90%)",
          mixBlendMode: "screen",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 60% at 10% 110%, rgba(6,182,212,0.18), transparent 60%)",
        }}
      />

      {/* light sweep */}
      <div className="pointer-events-none absolute -inset-y-12 -left-1/3 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-sweep" />

      <div className="relative flex h-full flex-col justify-between text-white">
        {/* Top row */}
        <div className="flex items-start justify-between">
          <div>
            <div
              className="inline-flex h-7 w-7 items-center justify-center rounded-lg"
              style={{
                background:
                  "linear-gradient(135deg,#7C3AED,#2563EB,#06B6D4)",
                boxShadow:
                  "0 0 24px rgba(124,58,237,0.55), inset 0 1px 0 rgba(255,255,255,0.35)",
              }}
              aria-hidden
            >
              <Sparkles size={14} />
            </div>
            <div className="mt-3 font-display text-[13px] font-semibold tracking-[0.16em] uppercase">
              DrBills • USD
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/55">
              Platinum
            </div>
            <div className="mt-1 font-numbers text-[11px] text-white/65">
              Virtual
            </div>
          </div>
        </div>

        {/* Middle: chip + nfc */}
        <div className="flex items-center gap-4">
          <div
            className="relative h-11 w-14 overflow-hidden rounded-[10px]"
            style={{
              background:
                "linear-gradient(135deg, #FFD86B 0%, #B89224 45%, #FFCC33 100%)",
              boxShadow:
                "inset 0 0 8px rgba(0,0,0,0.55), 0 0 18px rgba(255,200,60,0.25)",
            }}
            aria-hidden
          >
            <div className="absolute inset-1 grid grid-cols-3 gap-[2px] opacity-70">
              {Array.from({ length: 9 }).map((_, i) => (
                <span
                  key={i}
                  className="rounded-[2px] bg-black/35"
                />
              ))}
            </div>
          </div>
          <Wifi
            size={22}
            className="rotate-90 text-white/70"
            aria-hidden
          />
        </div>

        {/* Number */}
        <div className="font-numbers text-[clamp(1.05rem,2.2vw,1.4rem)] tracking-[0.3em] text-white/90">
          •••• &nbsp;•••• &nbsp;•••• &nbsp;<span className="text-white">4218</span>
        </div>

        {/* Bottom row */}
        <div className="flex items-end justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/55">
              Cardholder
            </div>
            <div className="mt-1 font-display text-[13px] font-medium tracking-wider">
              DR. AIDEN SMITH
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="block h-7 w-7 rounded-full bg-[#EB001B] opacity-95" />
            <span className="-ml-3 block h-7 w-7 rounded-full bg-[#F79E1B] opacity-95" />
          </div>
        </div>
      </div>
    </div>
  );
}
