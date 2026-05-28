import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#card", label: "Virtual Card" },
  { href: "#crypto", label: "Crypto" },
  { href: "#global", label: "Global" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2.5" : "py-4"
      )}
    >
      <div className="container-x">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-500 sm:px-5",
            scrolled
              ? "border-white/10 bg-[#0A0B1E]/70 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]"
              : "border-transparent bg-transparent"
          )}
        >
          <a href="#top" className="group flex items-center gap-2.5">
            <span
              className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl ring-1 ring-white/10 transition-shadow duration-300 group-hover:ring-border-glow"
              style={{
                boxShadow:
                  "0 0 24px rgba(124,58,237,0.35), inset 0 0 0 1px rgba(255,255,255,0.04)",
              }}
              aria-hidden
            >
              <img
                src="/logo.png"
                alt=""
                className="h-full w-full object-cover"
                draggable={false}
              />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              DrBills <span className="text-text-soft">Exchange</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative rounded-full px-3.5 py-2 text-sm text-white/75 transition-colors hover:text-white"
                >
                  <span className="relative z-10">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#cta"
              className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/85 transition hover:border-white/30 hover:bg-white/[0.08]"
            >
              Sign In
            </a>
            <a href="#cta" className="btn-primary py-2.5 text-sm">
              Get Started
            </a>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white md:hidden"
          >
            <Menu size={20} />
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <div
              className="absolute inset-0 bg-bg/90 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-4 mt-4 rounded-3xl border border-white/10 bg-[#0A0B1E]/90 p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-lg font-semibold">
                  Menu
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]"
                >
                  <X size={18} />
                </button>
              </div>
              <ul className="space-y-1">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      onClick={() => setOpen(false)}
                      href={l.href}
                      className="block rounded-xl px-4 py-3 text-base text-white/85 hover:bg-white/[0.05]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid gap-3">
                <a
                  onClick={() => setOpen(false)}
                  href="#cta"
                  className="btn-ghost w-full justify-center"
                >
                  Sign In
                </a>
                <a
                  onClick={() => setOpen(false)}
                  href="#cta"
                  className="btn-primary w-full justify-center"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
