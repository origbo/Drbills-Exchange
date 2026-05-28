import {
  SiBitcoin,
  SiEthereum,
  SiTether,
  SiBinance,
  SiVisa,
  SiMastercard,
  SiGoogleplay,
} from "react-icons/si";

const LOGOS = [
  { Icon: SiBitcoin, label: "Bitcoin" },
  { Icon: SiEthereum, label: "Ethereum" },
  { Icon: SiTether, label: "USDT" },
  { Icon: SiBinance, label: "Binance" },
  { Icon: SiVisa, label: "Visa" },
  { Icon: SiMastercard, label: "Mastercard" },
  { Icon: SiGoogleplay, label: "Google Play" },
];

export default function TrustedPartners() {
  const items = [...LOGOS, ...LOGOS];
  return (
    <section
      aria-label="Trusted partners"
      className="relative mt-20 sm:mt-28"
    >
      <div className="container-x">
        <p className="mb-7 text-center text-xs uppercase tracking-[0.25em] text-white/45">
          Trusted by the world's most ambitious networks
        </p>
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)",
        }}
      >
        <div className="flex w-max animate-ticker gap-12 pr-12 sm:gap-16">
          {items.map(({ Icon, label }, i) => (
            <div
              key={`${label}-${i}`}
              className="group flex shrink-0 items-center gap-3 text-white/40 transition-colors duration-300 hover:text-white"
              title={label}
            >
              <Icon
                size={36}
                className="drop-shadow-[0_0_18px_rgba(124,58,237,0.0)] transition-all duration-300 group-hover:drop-shadow-[0_0_18px_rgba(124,58,237,0.65)]"
              />
              <span className="font-display text-base font-medium tracking-wide opacity-70 group-hover:opacity-100">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
