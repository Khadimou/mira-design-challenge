import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowToParticipate from "@/components/HowToParticipate";
import Prizes from "@/components/Prizes";
import DesignGallery from "@/components/DesignGallery";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HowToParticipate />
      <Prizes />
      <DesignGallery />
      <FAQ />
      <Footer />
    </main>
  );
}
