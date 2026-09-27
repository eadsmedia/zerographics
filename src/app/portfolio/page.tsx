"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  Printer, 
  Tag, 
  Eye, 
  CheckCircle2,
  Layers,
  Award
} from "lucide-react";

interface PortfolioItem {
  id: string;
  title: string;
  category: "envelopes" | "signage" | "commercial" | "studio";
  categoryLabel: string;
  image: string;
  clientType: string;
  description: string;
  specs: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "ishanee-wedding",
    title: "Ishanee Brand Wedding & Amantranlipi Envelopes",
    category: "envelopes",
    categoryLabel: "Ishanee Envelopes",
    image: "/images/ishanee-envelopes.jpg",
    clientType: "Wedding & Festive Celebrations",
    description: "Royal magenta, emerald green, and turmeric gold envelopes with traditional Bengali calligraphy motifs, hot gold foil stamping, and tassel embellishments.",
    specs: "Proprietary Ishanee Craft &bull; Wholesale &amp; Retail batches",
  },
  {
    id: "outdoor-flex-banner",
    title: "Wide-Format Commercial Flex Hoarding",
    category: "signage",
    categoryLabel: "Large Format Signage",
    image: "/images/services/konica-flex-printer.jpg",
    clientType: "Commercial Retailer & Highway Display",
    description: "High-speed outdoor Star Flex hoarding printed on our Konica 512i industrial machine. High UV resistance, rich contrast, and reinforced eyelet seams.",
    specs: "Konica 512i Print Head &bull; Heavy-duty Star Flex",
  },
  {
    id: "eco-solvent-standee",
    title: "Epson 1440 DPI Eco-Solvent Exhibition Standee",
    category: "signage",
    categoryLabel: "Large Format Signage",
    image: "/images/flex-eco.jpg",
    clientType: "Corporate Conference & Hospital Lobby",
    description: "Ultra-high resolution, odorless indoor pull-up display on tear-resistant matte vinyl with an aluminium base mechanism.",
    specs: "Epson PrecisionCore &bull; True 1440 DPI &bull; Odorless",
  },
  {
    id: "digital-press-commercial",
    title: "High-Speed Digital Press & Short-Run Commercial Print",
    category: "commercial",
    categoryLabel: "Digital & Offset Press",
    image: "/images/services/digital-printer.jpg",
    clientType: "Commercial Agencies & Corporate Publishing",
    description: "High-capacity digital press printing for flyers, booklets, catalogs, and certificates on 80 to 350 GSM premium art boards.",
    specs: "Digital Press &bull; 13x19 Super A3 &bull; Express 1-Hour Proofing",
  },
  {
    id: "smart-pvc-id",
    title: "CR80 Institutional PVC Smart ID Cards",
    category: "commercial",
    categoryLabel: "Commercial & Cards",
    image: "/images/services/pvc-card-printer.jpg",
    clientType: "Schools, Colleges & Healthcare Staff",
    description: "Edge-to-edge dual-sided color fusion printing on rigid 30 mil PVC, paired with customized satin lanyards and clear protective pouches.",
    specs: "Waterproof CR80 &bull; Thermal Sublimation &bull; QR/Barcode",
  },
  {
    id: "pre-ink-doctor-stamps",
    title: "High Precision Pre-Ink Flash Rubber Stamps",
    category: "commercial",
    categoryLabel: "Commercial & Cards",
    image: "/images/services/pre-ink-flash-stamp.jpg",
    clientType: "Doctors, Law Firms & Corporate Authorities",
    description: "Flash sealed self-inking stamps delivering 10,000+ crisp, smudge-free impressions in signature blue and red ink without messy separate pads.",
    specs: "Laser Flash Seal &bull; Built-in Ink Reservoir &bull; 10,000+ Prints",
  },
  {
    id: "ishanee-annaprashan",
    title: "Ishanee Brand Rice Ceremony (Mukhe Bhaat) Covers",
    category: "envelopes",
    categoryLabel: "Ishanee Envelopes",
    image: "/images/ishanee-envelopes.jpg",
    clientType: "Traditional Bengali Family Ceremonies",
    description: "Playful, auspicious motifs in turmeric yellow, vermillion, and pastels crafted to fit modern digital Annaprashan invitation cards.",
    specs: "Ishanee Brand Specialty &bull; Die-cut Custom Sizing",
  },
  {
    id: "commercial-digital-brochures",
    title: "300 GSM Heavy Art Card Commercial Brochures",
    category: "commercial",
    categoryLabel: "Commercial & Cards",
    image: "/images/hero.jpg",
    clientType: "Real Estate Developers & Retail Catalogs",
    description: "Short-run multi-page brochures printed on the Konica Minolta production press with velvet matte lamination and precision scoring.",
    specs: "Konica Minolta Press &bull; 300 GSM Coated Art Card &bull; Matte",
  },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredItems = portfolioItems.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-32 pb-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Craftsmanship &amp; Print Showcase</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Our Print &amp; Design Portfolio
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore recent works across outdoor flex signboards, eco-solvent interior graphics, our signature Ishanee Brand invitation envelopes, smart PVC ID cards, and studio photo framing.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center gap-2 pt-6 border-t border-slate-100">
            {[
              { id: "all", label: "All Works" },
              { id: "envelopes", label: "Ishanee Brand Envelopes" },
              { id: "signage", label: "Flex & Eco-Solvent Signage" },
              { id: "commercial", label: "Commercial Print & PVC Cards" },
              { id: "studio", label: "Photo Prints & Framing" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                  activeFilter === f.id
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const waMsg = encodeURIComponent(
              `Hello Zero Graphics! I saw your portfolio project "${item.title}" and would like to order something similar.`
            );

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/95 text-slate-800 shadow-sm border border-slate-200">
                        {item.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="text-[11px] font-semibold text-blue-600 mb-1">
                      {item.clientType}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                      <span dangerouslySetInnerHTML={{ __html: item.specs }} />
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="p-6 pt-0">
                  <a
                    href={`https://wa.me/917718101450?text=${waMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire for Similar Job</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Callout */}
      <section className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            Have a Specific Artwork or Printing Job in Mind?
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Share your artwork files or discuss your design requirements directly with our design and prepress desk on WhatsApp.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/917478949343?text=Hello%20Zero%20Graphics!%20I%20have%20an%20artwork%20file%20to%20review."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Connect with Design Desk</span>
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs"
            >
              Visit Mecheda Workshop
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
