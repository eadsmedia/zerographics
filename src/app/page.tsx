import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomeServicesPreview from "@/components/HomeServicesPreview";
import HomeIshaneeSpotlight from "@/components/HomeIshaneeSpotlight";
import HomeTechSpotlight from "@/components/HomeTechSpotlight";
import HomeBranchesSpotlight from "@/components/HomeBranchesSpotlight";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col antialiased">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* 12 Core Services Overview */}
      <HomeServicesPreview />

      {/* Ishanee Brand Envelopes Highlight */}
      <HomeIshaneeSpotlight />

      {/* Technology & Machinery Fleet */}
      <HomeTechSpotlight />

      {/* 2 Mecheda Branch Units */}
      <HomeBranchesSpotlight />

      {/* Footer */}
      <Footer />

      {/* Multi-Department Floating WhatsApp Assistant */}
      <FloatingWhatsApp />
    </main>
  );
}
