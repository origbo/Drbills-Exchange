import { ArrowRight, Apple, Sparkles } from "lucide-react";
import { SiGoogleplay } from "react-icons/si";
import Reveal from "./Reveal";
import AppMockup from "./AppMockup";

export default function CTABanner() {
  return (
    <section id="cta" className="relative py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[32px] border border-white/10 p-8 sm:p-14"
            style={{
              background:
                "linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(37,99,235,0.18) 50%, rgba(6,182,212,0.18) 100%), rgba(255,255,255,0.03)",
              boxShadow:
                "0 50px 120px -30px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
          >
            {/* Glow blob */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full opacity-50 blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(124,58,237,0.6), transparent 70%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-32 -left-10 h-[26rem] w-[26rem] rounded-full opacity-50 blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(6,182,212,0.5), transparent 70%)",
              }}
            />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <span className="chip mb-5">
                  <Sparkles size={13} className="text-cyan" />
                  The Future of Digital Payments
                </span>
                <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-semibold leading-[1.02] tracking-tight">
                  The future of digital payments{" "}
                  <span className="text-gradient">starts here.</span>
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#94A3B8]">
                  Join 1.2M+ users sending, spending and growing money on the
                  most beautiful fintech platform ever built.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a href="#" className="btn-primary group">
                    Download App
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                  <a
                    href="#"
                    className="btn-ghost"
                    aria-label="Download on App Store"
                  >
                    <Apple size={18} /> App Store
                  </a>
                  <a
                    href="#"
                    className="btn-ghost"
                    aria-label="Get it on Google Play"
                  >
                    <SiGoogleplay size={16} /> Google Play
                  </a>
                </div>
              </div>

              {/* iPhone mockup with live DrBills UI */}
              <AppMockup />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
