import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedPartners from "./components/TrustedPartners";
import Features from "./components/Features";
import VirtualCard from "./components/VirtualCard";
import CryptoSection from "./components/CryptoSection";
import GlobalPayments from "./components/GlobalPayments";
import GiftCardSection from "./components/GiftCardSection";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import About from "./components/About";
import FAQ from "./components/FAQ";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";
import GlowBackground from "./components/GlowBackground";
import MouseGlow from "./components/MouseGlow";
import SmoothScroll from "./components/SmoothScroll";

export default function App() {
  return (
    <>
      <SmoothScroll />
      <GlowBackground />
      <MouseGlow />

      <Navbar />

      <main className="relative">
        <Hero />
        <TrustedPartners />
        <Features />
        <VirtualCard />
        <CryptoSection />
        <GlobalPayments />
        <GiftCardSection />
        <HowItWorks />
        <Benefits />
        <About />
        <FAQ />
        <CTABanner />
      </main>

      <Footer />
    </>
  );
}
