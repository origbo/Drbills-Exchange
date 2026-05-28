import { motion } from "framer-motion";

/**
 * Global background: animated mesh gradient blobs + subtle grid.
 * Lives behind all content (z-index 0 in the page).
 */
export default function GlowBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* subtle grid */}
      <div className="absolute inset-0 grid-overlay opacity-[0.45]" />

      {/* big slow-moving blobs */}
      <motion.div
        className="absolute -top-40 -left-40 h-[44rem] w-[44rem] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(124,58,237,0.45), transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ x: [0, 80, -40, 0], y: [0, 50, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-32 h-[40rem] w-[40rem] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(37,99,235,0.4), transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ x: [0, -70, 30, 0], y: [0, -40, 60, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-12rem] left-1/4 h-[36rem] w-[36rem] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(6,182,212,0.35), transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ x: [0, 60, -50, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(5,8,22,0.65) 90%)",
        }}
      />
    </div>
  );
}
