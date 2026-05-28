import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

/**
 * Fades + lifts content up when it enters the viewport.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  once = true,
}: Props) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      custom={delay}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
