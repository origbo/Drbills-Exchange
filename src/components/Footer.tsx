import { SiX, SiInstagram, SiYoutube, SiTelegram } from "react-icons/si";
import { Linkedin } from "lucide-react";

const NAV: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Virtual Card", href: "#card" },
      { label: "Crypto", href: "#crypto" },
      { label: "Global", href: "#global" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Blog", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Security", href: "#" },
      { label: "Compliance", href: "#" },
    ],
  },
];

const SOCIALS = [
  { Icon: SiX, label: "X / Twitter" },
  { Icon: SiInstagram, label: "Instagram" },
  { Icon: SiYoutube, label: "YouTube" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: SiTelegram, label: "Telegram" },
];

export default function Footer() {
  return (
    <footer className="relative pt-24">
      {/* subtle grid + blur */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div
          className="absolute -top-32 left-1/2 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(124,58,237,0.4), transparent 70%)",
          }}
        />
      </div>

      <div className="container-x">
        <div className="grid gap-12 border-t border-white/10 pt-16 lg:grid-cols-[1.4fr_2.6fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span
                className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl ring-1 ring-white/10"
                style={{
                  boxShadow: "0 0 24px rgba(124,58,237,0.35)",
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
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#94A3B8]">
              Borderless payments for the digital generation. Bills, crypto,
              virtual USD cards, international payments and gift card
              trading, all in one beautiful app.
            </p>

            <ul className="mt-7 flex flex-wrap gap-2">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href="#"
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/75 transition hover:border-border-glow hover:text-white hover:shadow-neon-soft"
                  >
                    <s.Icon size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {NAV.map((g) => (
              <div key={g.title}>
                <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
                  {g.title}
                </h4>
                <ul className="space-y-2.5">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-white/75 transition-colors hover:text-white"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-white/55 sm:flex-row">
          <p>© {new Date().getFullYear()} DrBills Exchange. All rights reserved.</p>
          <p className="font-numbers tracking-wider">
            Made for the next generation of money.
          </p>
        </div>
      </div>
    </footer>
  );
}
