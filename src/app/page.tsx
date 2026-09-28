import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import ProjectHighlights from "@/components/ProjectHighlights";
import BangladeshMarket from "@/components/BangladeshMarket";
import Brands from "@/components/Brands";
import HomeContactForm from "@/components/HomeContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative">
      <Navbar />
      <Hero />
      <LogoTicker />
      <ProjectHighlights />
      <BangladeshMarket />
      <Brands />
      <HomeContactForm />
      <Footer />
    </main>
  );
}
