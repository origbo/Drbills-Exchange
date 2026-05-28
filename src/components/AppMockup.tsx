import { motion } from "framer-motion";
import {
  Signal,
  Wifi,
  BatteryFull,
  ChevronRight,
  Smartphone,
  Lightbulb,
  Tv,
  Bitcoin,
  CreditCard,
  Gift,
  ArrowLeftRight,
} from "lucide-react";
import { SiTether, SiSolana } from "react-icons/si";

/**
 * Pixel-perfect iPhone 15 Pro mockup with a Dynamic Island,
 * rendering the live DrBills Exchange app UI inside.
 *
 * Everything is rendered in code so it stays crisp at any size and
 * scales beautifully on every device.
 */
export default function AppMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[360px]">
      {/* Halo glow behind */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[115%] w-[125%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(124,58,237,0.45), rgba(6,182,212,0.2) 55%, transparent 75%)",
        }}
      />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <IPhoneFrame>
          <AppScreen />
        </IPhoneFrame>
      </motion.div>
    </div>
  );
}

/** Outer titanium iPhone frame + bezel. */
function IPhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative aspect-[9/19.5] w-full select-none rounded-[52px] p-[5px]"
      style={{
        background:
          "linear-gradient(155deg, #4a4a55 0%, #1e1e26 25%, #0a0a10 50%, #1e1e26 75%, #4a4a55 100%)",
        boxShadow:
          "0 50px 120px -20px rgba(0,0,0,0.75), 0 0 0 0.5px rgba(255,255,255,0.08), inset 0 0 0 0.5px rgba(255,255,255,0.08)",
      }}
    >
      {/* Side buttons */}
      <span
        className="absolute left-[-3px] top-[18%] h-[34px] w-[3px] rounded-l-md"
        style={{ background: "#2a2a32" }}
        aria-hidden
      />
      <span
        className="absolute left-[-3px] top-[28%] h-[58px] w-[3px] rounded-l-md"
        style={{ background: "#2a2a32" }}
        aria-hidden
      />
      <span
        className="absolute left-[-3px] top-[37%] h-[58px] w-[3px] rounded-l-md"
        style={{ background: "#2a2a32" }}
        aria-hidden
      />
      <span
        className="absolute right-[-3px] top-[30%] h-[80px] w-[3px] rounded-r-md"
        style={{ background: "#2a2a32" }}
        aria-hidden
      />

      {/* Inner black bezel */}
      <div
        className="relative h-full w-full overflow-hidden rounded-[48px] p-[3px]"
        style={{ background: "#000" }}
      >
        {/* Screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[44px] bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}

/** The DrBills app screen content. */
function AppScreen() {
  return (
    <div className="relative h-full w-full bg-white text-[#0F172A]">
      {/* Status bar */}
      <div className="flex items-center justify-between px-7 pt-3 text-[12px] font-semibold text-[#0F172A]">
        <span className="font-numbers">4:19</span>
        <div className="flex items-center gap-1.5">
          <Signal size={13} strokeWidth={2.5} />
          <Wifi size={13} strokeWidth={2.5} />
          <BatteryFull size={16} strokeWidth={2.5} />
        </div>
      </div>

      {/* Dynamic Island */}
      <DynamicIsland />

      {/* App content — scrollable area visual */}
      <div className="mt-7 px-4 pb-20">
        {/* KYC Banner */}
        <KycBanner />

        {/* Crypto assets */}
        <SectionHeader title="Crypto assets" action="See all" />
        <div className="mt-3 space-y-2.5">
          <CryptoRow
            name="BTC"
            amount="0.023455 BTC"
            naira="₦700,000"
            iconBg="#F7931A"
            icon={<Bitcoin size={18} className="text-white" />}
          />
          <CryptoRow
            name="TRX"
            amount="0.00 TRX"
            naira="₦0.00"
            iconBg="#FF060A"
            icon={
              <span className="font-display text-[13px] font-bold text-white">
                T
              </span>
            }
          />
          <CryptoRow
            name="SOL"
            amount="0.00 SOL"
            naira="₦0.00"
            iconBg="linear-gradient(135deg,#9945FF 0%,#14F195 100%)"
            icon={<SiSolana size={16} className="text-white" />}
          />
          <CryptoRow
            name="USDT"
            amount="0.00 USDT"
            naira="₦0.00"
            iconBg="#26A17B"
            icon={<SiTether size={18} className="text-white" />}
          />
        </div>

        {/* Bills */}
        <div className="mt-6">
          <SectionHeader title="Bills" />
          <div className="mt-3 grid grid-cols-3 gap-2">
            <BillTile
              label="Airtime or Data"
              tint="#2563EB"
              icon={<Smartphone size={20} className="text-white" />}
            />
            <BillTile
              label="Electricity"
              tint="#EF4444"
              icon={<Lightbulb size={20} className="text-white" />}
            />
            <BillTile
              label="Cable TV"
              tint="#1E40AF"
              icon={<Tv size={20} className="text-white" />}
            />
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <BottomNav />

      {/* Home indicator */}
      <div className="pointer-events-none absolute inset-x-0 bottom-1.5 mx-auto h-[3px] w-[110px] rounded-full bg-[#0F172A]/80" />
    </div>
  );
}

function DynamicIsland() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-2 -translate-x-1/2">
      <div
        className="relative flex h-[26px] w-[100px] items-center justify-center rounded-full"
        style={{
          background: "#000",
          boxShadow: "0 0 0 0.5px rgba(255,255,255,0.06)",
        }}
      >
        {/* Camera */}
        <span
          className="absolute right-3 block h-[7px] w-[7px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #2b3b5a 0%, #0b1024 60%, #000 100%)",
            boxShadow: "inset 0 0 1px rgba(255,255,255,0.12)",
          }}
        />
        <span
          className="absolute right-3 block h-[3px] w-[3px] rounded-full bg-[#3b6cff]/40"
          style={{ filter: "blur(0.3px)" }}
        />
      </div>
    </div>
  );
}

function SectionHeader({
  title,
  action,
}: {
  title: string;
  action?: string;
}) {
  return (
    <div className="mt-1 flex items-center justify-between">
      <h3 className="font-display text-[15px] font-semibold text-[#0F172A]">
        {title}
      </h3>
      {action ? (
        <span className="text-[11px] font-medium text-[#7C3AED]">
          {action}
        </span>
      ) : null}
    </div>
  );
}

function KycBanner() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl px-3.5 py-3"
      style={{
        background:
          "linear-gradient(135deg,#4A6CF7 0%,#6B8FF8 55%,#8C7CF6 100%)",
        boxShadow: "0 10px 25px -10px rgba(74,108,247,0.45)",
      }}
    >
      {/* faint pattern */}
      <div
        aria-hidden
        className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/15"
      />
      <div
        aria-hidden
        className="absolute -bottom-8 right-10 h-16 w-16 rounded-full bg-white/10"
      />
      <div className="relative flex items-center justify-between gap-3">
        <div className="text-white">
          <div className="font-display text-[13px] font-semibold leading-tight">
            Complete your kyc set up
          </div>
          <p className="mt-1 max-w-[170px] text-[10px] leading-snug text-white/85">
            Verify your identity to unlock full access and keep your account
            secure.
          </p>
        </div>
        <button
          type="button"
          className="shrink-0 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-[#0F172A] shadow-sm"
        >
          Get started
        </button>
      </div>
    </div>
  );
}

function CryptoRow({
  name,
  amount,
  naira,
  iconBg,
  icon,
}: {
  name: string;
  amount: string;
  naira: string;
  iconBg: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-[#F4F6FB] px-3 py-2.5">
      <span
        className="flex h-9 w-9 items-center justify-center rounded-full"
        style={{
          background: iconBg.startsWith("linear")
            ? undefined
            : iconBg,
          backgroundImage: iconBg.startsWith("linear") ? iconBg : undefined,
          boxShadow: "0 4px 10px -4px rgba(0,0,0,0.2)",
        }}
        aria-label={name}
      >
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <div className="font-display text-[13px] font-semibold text-[#0F172A]">
          {amount}
        </div>
        <div className="font-numbers text-[10px] text-[#64748B]">{naira}</div>
      </div>
      <ChevronRight size={14} className="text-[#94A3B8]" />
    </div>
  );
}

function BillTile({
  label,
  tint,
  icon,
}: {
  label: string;
  tint: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl bg-[#F4F6FB] px-2 py-3">
      <span
        className="flex h-10 w-10 items-center justify-center rounded-full"
        style={{
          background: tint,
          boxShadow: `0 6px 14px -6px ${tint}80`,
        }}
      >
        {icon}
      </span>
      <span className="text-[10px] font-medium text-[#0F172A]">{label}</span>
    </div>
  );
}

function BottomNav() {
  const items = [
    { label: "Crypto", Icon: Bitcoin, active: true },
    { label: "Virtual card", Icon: CreditCard },
    { label: "Gift cards", Icon: Gift },
    { label: "Transactions", Icon: ArrowLeftRight },
  ];
  return (
    <div className="absolute inset-x-0 bottom-0 border-t border-[#E5E7EB] bg-white pb-4 pt-2">
      <div className="grid grid-cols-4">
        {items.map(({ label, Icon, active }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-0.5 text-[9px] font-medium"
            style={{ color: active ? "#0F172A" : "#94A3B8" }}
          >
            <Icon size={17} strokeWidth={active ? 2.4 : 2} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
