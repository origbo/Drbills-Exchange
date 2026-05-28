import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "../lib/utils";

interface Props {
  className?: string;
  children: ReactNode;
  intensity?: number;
}

/**
 * 3D tilt glassmorphism card.
 * - Slight float on hover
 * - Tilts to cursor
 * - Neon border appears on hover
 */
export default function AnimatedCard({ className, children, intensity = 8 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 160, damping: 18 });
  const sy = useSpring(my, { stiffness: 160, damping: 18 });
  const rotateY = useTransform(sx, [-1, 1], [-intensity, intensity]);
  const rotateX = useTransform(sy, [-1, 1], [intensity, -intensity]);

  return (
    <motion.div
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
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.04)] p-6 backdrop-blur-xl",
        "transition-[border-color,box-shadow] duration-500 hover:border-border-glow hover:shadow-neon-soft",
        className
      )}
    >
      {/* Holographic edge */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 holographic-border" />

      {/* Animated background lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "100% 28px",
          maskImage:
            "linear-gradient(to bottom, transparent, #000 30%, #000 70%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, #000 30%, #000 70%, transparent)",
        }}
      />

      {/* Soft gradient overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(124,58,237,0.18), transparent 40%)",
        }}
      />

      <div className="relative" style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
