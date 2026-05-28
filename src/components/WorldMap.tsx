import { motion } from "framer-motion";
import { useMemo } from "react";

/**
 * Premium bank-advert style world map.
 * Real continent silhouettes filled with a brand dot-pattern,
 * animated transaction arcs and pulsing country pins with labels.
 */

type City = {
  id: string;
  x: number;
  y: number;
  label: string;
  /** label offset from the marker */
  lx?: number;
  ly?: number;
  /** label text-anchor */
  anchor?: "start" | "end" | "middle";
};

const CITIES: City[] = [
  { id: "usa", x: 215, y: 200, label: "USA", lx: -14, ly: -16, anchor: "end" },
  { id: "canada", x: 240, y: 140, label: "Canada", lx: 0, ly: -18, anchor: "middle" },
  { id: "uk", x: 488, y: 152, label: "UK", lx: 0, ly: -18, anchor: "middle" },
  { id: "uae", x: 622, y: 232, label: "UAE", lx: 16, ly: -2, anchor: "start" },
  { id: "china", x: 790, y: 198, label: "China", lx: 16, ly: -2, anchor: "start" },
  { id: "aus", x: 845, y: 405, label: "Australia", lx: 16, ly: 6, anchor: "start" },
  { id: "ng", x: 515, y: 295, label: "Nigeria", lx: 0, ly: 24, anchor: "middle" },
];

const ROUTES: [string, string][] = [
  ["ng", "usa"],
  ["ng", "uk"],
  ["ng", "uae"],
  ["ng", "china"],
  ["ng", "aus"],
  ["ng", "canada"],
];

/** Hand-drawn simplified continent silhouettes for an LED bank-ad look. */
const CONTINENTS = {
  northAmerica:
    "M 122 118 L 138 100 L 158 88 L 185 80 L 215 78 L 250 78 L 285 84 L 312 96 L 332 112 L 345 130 L 352 152 L 348 175 L 336 196 L 320 212 L 302 220 L 286 224 L 274 232 L 268 248 L 256 258 L 240 252 L 226 240 L 216 244 L 200 252 L 184 246 L 168 230 L 156 212 L 146 195 L 138 178 L 130 158 L 124 138 Z",
  centralAmerica:
    "M 256 258 L 268 268 L 280 282 L 285 295 L 278 295 L 268 285 L 260 274 Z",
  greenland:
    "M 360 60 L 392 56 L 410 72 L 408 95 L 388 108 L 365 105 L 352 90 Z",
  southAmerica:
    "M 268 282 L 295 280 L 320 290 L 338 308 L 348 335 L 350 365 L 345 395 L 332 425 L 316 450 L 298 465 L 280 468 L 264 458 L 252 438 L 246 412 L 246 385 L 252 358 L 260 332 L 264 308 Z",
  europe:
    "M 458 108 L 482 96 L 510 92 L 540 96 L 562 108 L 572 126 L 570 148 L 556 166 L 534 178 L 510 184 L 488 184 L 468 178 L 452 168 L 442 152 L 442 132 Z",
  scandinavia:
    "M 512 80 L 540 74 L 556 86 L 552 102 L 532 108 L 518 100 Z",
  africa:
    "M 488 212 L 522 208 L 552 210 L 580 218 L 598 232 L 608 256 L 612 285 L 612 315 L 605 345 L 590 372 L 572 396 L 552 414 L 532 420 L 514 416 L 502 400 L 492 378 L 484 350 L 480 320 L 478 290 L 478 260 L 482 234 Z",
  arabian:
    "M 590 232 L 622 232 L 642 245 L 644 270 L 632 285 L 612 280 L 598 268 L 590 250 Z",
  india:
    "M 678 220 L 702 222 L 720 232 L 728 252 L 724 270 L 712 282 L 698 280 L 686 268 L 680 250 L 678 235 Z",
  asia:
    "M 555 110 L 590 96 L 632 88 L 678 84 L 728 82 L 778 88 L 824 100 L 862 116 L 892 138 L 904 162 L 898 188 L 880 208 L 858 222 L 832 226 L 808 232 L 786 242 L 762 250 L 740 244 L 720 232 L 700 220 L 678 215 L 658 215 L 638 218 L 618 215 L 598 208 L 580 198 L 568 182 L 560 162 L 555 138 Z",
  seasia:
    "M 762 250 L 792 252 L 808 268 L 808 285 L 790 296 L 770 290 L 760 275 L 758 262 Z",
  indonesia1:
    "M 800 296 L 832 296 L 852 308 L 848 322 L 826 326 L 808 318 Z",
  indonesia2:
    "M 855 312 L 880 312 L 894 324 L 884 336 L 862 332 Z",
  philippines:
    "M 832 270 L 845 268 L 852 285 L 842 296 L 834 285 Z",
  japan:
    "M 880 175 L 895 168 L 905 185 L 898 200 L 884 202 Z",
  australia:
    "M 810 388 L 838 380 L 870 380 L 895 390 L 905 408 L 895 428 L 868 438 L 838 440 L 815 432 L 802 416 L 800 400 Z",
  newzealand:
    "M 915 442 L 928 440 L 935 452 L 925 460 L 915 455 Z",
  uk:
    "M 470 130 L 484 124 L 494 134 L 492 148 L 478 156 L 468 150 L 466 140 Z",
  ireland:
    "M 452 140 L 462 138 L 466 148 L 460 156 L 452 152 Z",
  iceland:
    "M 428 90 L 442 86 L 450 96 L 444 105 L 432 104 Z",
  madagascar:
    "M 622 360 L 632 356 L 638 372 L 632 388 L 624 388 L 620 376 Z",
};

const ALL_LAND = Object.values(CONTINENTS).join(" ");

export default function WorldMap() {
  const cityMap = useMemo(
    () => Object.fromEntries(CITIES.map((c) => [c.id, c])),
    []
  );

  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 1000 520"
        preserveAspectRatio="xMidYMid meet"
        className="h-auto w-full"
      >
        <defs>
          {/* Brand gradients */}
          <linearGradient id="land-grad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>

          <radialGradient id="bg-glow" cx="50%" cy="55%" r="55%">
            <stop offset="0%" stopColor="rgba(124,58,237,0.18)" />
            <stop offset="100%" stopColor="rgba(124,58,237,0)" />
          </radialGradient>

          <linearGradient id="beam" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0" />
            <stop offset="50%" stopColor="#06B6D4" stopOpacity="1" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
          </linearGradient>

          {/* Dot pattern for the LED bank-ad look */}
          <pattern
            id="dot-pattern"
            width="11"
            height="11"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.05" fill="url(#land-grad)" opacity="0.85" />
          </pattern>

          {/* Land clip = silhouette of every continent */}
          <clipPath id="land-clip">
            <path d={ALL_LAND} />
          </clipPath>

          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        {/* Ambient background glow */}
        <rect width="1000" height="520" fill="url(#bg-glow)" />

        {/* Faint continent fill */}
        <g opacity="0.18">
          <path d={ALL_LAND} fill="url(#land-grad)" />
        </g>

        {/* Dotted continent fill (LED-style) */}
        <g clipPath="url(#land-clip)">
          <rect width="1000" height="520" fill="url(#dot-pattern)" />
        </g>

        {/* Subtle continent outline */}
        <g
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="0.6"
          strokeLinejoin="round"
        >
          <path d={ALL_LAND} />
        </g>

        {/* Subtle latitude lines */}
        <g
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="0.5"
          strokeDasharray="2 6"
          fill="none"
        >
          <line x1="0" y1="130" x2="1000" y2="130" />
          <line x1="0" y1="260" x2="1000" y2="260" />
          <line x1="0" y1="390" x2="1000" y2="390" />
        </g>

        {/* Animated transaction arcs */}
        {ROUTES.map(([from, to], i) => {
          const a = cityMap[from];
          const b = cityMap[to];
          if (!a || !b) return null;
          const cx = (a.x + b.x) / 2;
          const cy = Math.min(a.y, b.y) - 80 - i * 8;
          const d = `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`;
          const delay = i * 0.55;
          return (
            <g key={`${from}-${to}`}>
              {/* dashed track */}
              <path
                d={d}
                fill="none"
                stroke="rgba(6,182,212,0.35)"
                strokeWidth="1"
                strokeDasharray="2 6"
              />
              {/* glowing beam dot traveling along the path */}
              <motion.circle
                r="3.5"
                fill="#06B6D4"
                filter="url(#glow)"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  delay,
                  ease: "easeInOut",
                  times: [0, 0.1, 0.9, 1],
                }}
              >
                <animateMotion
                  dur={`${3.2 + i * 0.3}s`}
                  repeatCount="indefinite"
                  begin={`${delay}s`}
                  path={d}
                  rotate="auto"
                />
              </motion.circle>
              {/* trailing soft glow */}
              <motion.circle
                r="7"
                fill="#06B6D4"
                opacity="0.25"
                filter="url(#soft-glow)"
              >
                <animateMotion
                  dur={`${3.2 + i * 0.3}s`}
                  repeatCount="indefinite"
                  begin={`${delay}s`}
                  path={d}
                />
              </motion.circle>
            </g>
          );
        })}

        {/* Country pins */}
        {CITIES.map((c) => {
          const lx = c.x + (c.lx ?? 14);
          const ly = c.y + (c.ly ?? -14);
          return (
            <g key={c.id}>
              {/* 3 concentric pulse rings (staggered) */}
              {[0, 0.6, 1.2].map((delay, i) => (
                <motion.circle
                  key={i}
                  cx={c.x}
                  cy={c.y}
                  fill="none"
                  stroke="#06B6D4"
                  strokeWidth="1"
                  initial={{ r: 6, opacity: 0.65 }}
                  animate={{ r: [6, 28], opacity: [0.65, 0] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    delay,
                    ease: "easeOut",
                  }}
                />
              ))}

              {/* solid bright dot */}
              <circle
                cx={c.x}
                cy={c.y}
                r="6"
                fill="#06B6D4"
                filter="url(#glow)"
              />
              <circle cx={c.x} cy={c.y} r="2.5" fill="#ffffff" />

              {/* label backing for legibility */}
              <text
                x={lx}
                y={ly}
                fill="#000"
                fontSize="13"
                fontWeight="700"
                fontFamily="Clash Display, Inter, sans-serif"
                stroke="#000"
                strokeWidth="3"
                strokeLinejoin="round"
                opacity="0.55"
                textAnchor={c.anchor ?? "start"}
                paintOrder="stroke"
              >
                {c.label}
              </text>
              {/* label */}
              <text
                x={lx}
                y={ly}
                fill="#fff"
                fontSize="13"
                fontWeight="700"
                fontFamily="Clash Display, Inter, sans-serif"
                textAnchor={c.anchor ?? "start"}
              >
                {c.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
