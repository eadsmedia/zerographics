"use client";

import React, { useState } from "react";
import { 
  Printer, 
  Sparkles, 
  Image as ImageIcon, 
  CreditCard, 
  Mail, 
  Layers, 
  Stamp, 
  Copy, 
  Maximize2, 
  Shield, 
  BookOpen, 
  SunMedium, 
  MessageSquare, 
  ArrowRight,
  Check,
  Cpu
} from "lucide-react";

interface ServiceItem {
  id: string;
  name: string;
  category: "large-format" | "digital-offset" | "specialty" | "finishing";
  badge: string;
  badgeColor: string;
  icon: React.ElementType;
  description: string;
  highlights: string[];
  specs: string;
  popular?: boolean;
}

const servicesData: ServiceItem[] = [
  {
    id: "flex-print",
    name: "Flex Print",
    category: "large-format",
    badge: "Konica 512i High Speed",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    icon: Printer,
    popular: true,
    description:
      "Heavy-duty outdoor flex printing powered by our newly installed high-speed Konica 512i printhead technology. Ideal for hoardings, signboards, event banners, and road displays.",
    highlights: [
      "Konica 512i high-speed industrial print head",
      "Weather-resistant, sun-proof vibrant outdoor inks",
      "Star Flex, Normal Flex, Backlit & Blackout media",
      "Custom eyeletting and border seaming included",
    ],
    specs: "Sizes up to 10ft seamless width | Express same-day turnaround",
  },
  {
    id: "eco-solvent-print",
    name: "Eco Solvent Print",
    category: "large-format",
    badge: "Epson Precision Print Head",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    icon: SunMedium,
    popular: true,
    description:
      "Ultra-fine photorealistic eco-friendly printing with our Epson printhead. Odor-free, museum-grade sharpness for indoor branding, roll-up standees, customized wallpapers, and vinyl stickers.",
    highlights: [
      "Razor-sharp 1440+ DPI photorealistic output",
      "Odorless & eco-safe for indoor commercial interiors",
      "Glossy/Matte vinyl, translite film & canvas media",
      "Scratch-resistant inks with long UV life",
    ],
    specs: "High DPI resolution | Roll-up standees, backlit glowsigns & vinyl",
  },
  {
    id: "digital-print",
    name: "Digital Print",
    category: "digital-offset",
    badge: "Konica Minolta Production Press",
    badgeColor: "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30",
    icon: Layers,
    popular: true,
    description:
      "Commercial short-run & on-demand digital colour printing with Konica Minolta digital colour press. Flawless gradient reproduction, rich deep tones, and instant proofing.",
    highlights: [
      "Stunning color fidelity from CMYK laser press",
      "Sheets from 80 GSM up to 350 GSM premium art board",
      "Flyers, brochures, certificates, menus & posters",
      "Zero plate setup cost & instant execution",
    ],
    specs: "Paper options: 130–350 GSM Art paper, Matt paper, Metallic sheets",
  },
  {
    id: "photo-print",
    name: "Photo Print",
    category: "specialty",
    badge: "DocuColour Oily Gloss",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    icon: ImageIcon,
    description:
      "Heritage high-gloss oily print quality that made Zero Graphics famous throughout Purba & Paschim Medinipur. True photographic color depth, framing, and studio portrait reproductions.",
    highlights: [
      "Famous Xerox DocuColor oily deep gloss finish",
      "True-to-life skin tones & photographic calibration",
      "Studio grade photo paper & metallic pearl stock",
      "Custom wall framing, mounting & gift framing available",
    ],
    specs: "4x6 inch to 12x36 inch studio photo sizes | Framing services",
  },
  {
    id: "pvc-card-print",
    name: "PVC Card Print",
    category: "specialty",
    badge: "Instant Thermal Fusion",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    icon: CreditCard,
    description:
      "Durable, water-resistant CR80 PVC identity cards for schools, colleges, security staff, hospital employees, club memberships, and conference visitor badges.",
    highlights: [
      "Standard credit card size (CR80) & thickness",
      "Dual-sided edge-to-edge full colour printing",
      "QR Code, Barcode, & Photo ID personalization",
      "Lanyard cords, yoyo clips & card holders available",
    ],
    specs: "Sublimation & thermal fused | Waterproof, non-tearable PVC",
  },
  {
    id: "envelope-print",
    name: "Envelope Print (Ishanee Brand)",
    category: "specialty",
    badge: "Proprietary Ishanee Brand",
    badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    icon: Mail,
    popular: true,
    description:
      "Our proprietary 'Ishanee Brand' designer envelopes crafted specifically for wedding cards, Annaprashan, birthdays, and Amantranlipi, alongside corporate commercial envelopes.",
    highlights: [
      "Specialty festive & wedding colorful envelopes",
      "Wholesale & retail supply direct from our sales counter",
      "Custom gold foil stamping, motif printing & monogramming",
      "Window and non-window business mailers",
    ],
    specs: "Wholesale packages available | Exclusive Ishanee Brand collection",
  },
  {
    id: "digital-offset-print",
    name: "Digital Offset Print",
    category: "digital-offset",
    badge: "Cost-Effective Bulk Runs",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    icon: Printer,
    description:
      "The perfect fusion of digital speed with offset economy. High-volume business visiting cards, invitation card inserts, product pamphlets, catalogs, and commercial stationery.",
    highlights: [
      "Economical pricing for medium to large volume runs",
      "Visiting cards (single & dual side, velvet matte, UV)",
      "Multi-page catalogs, product booklets & handouts",
      "Prepress color accuracy calibration",
    ],
    specs: "Bulk run economics | Premium coated and uncoated paper stocks",
  },
  {
    id: "pre-ink-stamp",
    name: "Pre Ink Stamp",
    category: "specialty",
    badge: "Flash Ready / Self-Inking",
    badgeColor: "bg-red-500/20 text-red-300 border-red-500/30",
    icon: Stamp,
    description:
      "High-precision laser pre-ink flash rubber stamps with built-in ink reservoir. Delivers 10,000+ crisp, smudge-free impressions without needing a messy separate ink pad.",
    highlights: [
      "No separate stamp pad needed (self-inking)",
      "Sharp reproduction of intricate signatures, logos & seals",
      "Available in Blue, Red, Violet, and Black ink colors",
      "Round, oval, rectangular, and pocket sizes ready in minutes",
    ],
    specs: "Over 10,000 impressions | Doctor, Lawyer, Company & Authority seals",
  },
  {
    id: "bw-colour-xerox",
    name: "B & W, Colour Xerox",
    category: "digital-offset",
    badge: "Docu250 Speed Xerox",
    badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    icon: Copy,
    description:
      "Ultra-fast heavy duty photocopying for bulk legal briefs, study materials, tender documentations, and full-color multi-page presentations with crisp black and vibrant color reproduction.",
    highlights: [
      "High speed production Xerox machines",
      "Heavy duty duplex (both sides) scanning & photocopying",
      "Clean background suppression with zero toner blotching",
      "A4, Legal, A3 sizes on premium 75–100 GSM paper",
    ],
    specs: "High volume per minute | Automatic document feeding & collating",
  },
  {
    id: "jumbo-xerox",
    name: "Jumbo Xerox",
    category: "large-format",
    badge: "Wide Engineering CAD",
    badgeColor: "bg-teal-500/20 text-teal-300 border-teal-500/30",
    icon: Maximize2,
    description:
      "Wide-format blueprint and CAD drawing reproduction for architects, civil engineers, building contractors, municipal planning maps, and large project schematics.",
    highlights: [
      "A0, A1, and A2 oversized architectural plan copies",
      "Razor precision line clarity for CAD drawings & schematics",
      "Direct printing from PDF, DWG, and hardcopy blue prints",
      "Option for durable lamination to survive construction sites",
    ],
    specs: "Up to 36-inch wide engineering drawing scan & print",
  },
  {
    id: "lamination",
    name: "Lamination Services",
    category: "finishing",
    badge: "Thermal & Cold Roll",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    icon: Shield,
    description:
      "Heavy protective coatings to safeguard precious certificates, posters, menu cards, identity cards, and architectural drawings against moisture, stains, fading, and tearing.",
    highlights: [
      "Glossy, Velvet Matte, and Soft-touch lamination",
      "Thermal hot pouch lamination for ID cards & degrees",
      "Continuous wide-roll lamination for banners & maps",
      "100% bubble-free smooth professional finish",
    ],
    specs: "Pouch lamination (ID/A4/A3) & Wide-format roll lamination",
  },
  {
    id: "spiral-binding",
    name: "Spiral Binding",
    category: "finishing",
    badge: "Wire-O & Plastic Coil",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    icon: BookOpen,
    description:
      "Clean and sturdy document finishing with twin-loop wire-o and heavy-duty plastic spiral coil binding, completed with transparent PVC protection sheets and heavy back cover.",
    highlights: [
      "Twin loop Wire-O & flexible plastic coil options",
      "Heavy clear acetate front cover + leatherette back card",
      "Ideal for project reports, tenders, accounts books & manuals",
      "360-degree flat lay opening for convenient reading & writing",
    ],
    specs: "Binding capacity from 10 pages up to 450+ pages",
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredServices = servicesData.filter((service) => {
    if (activeTab === "all") return true;
    return service.category === activeTab;
  });

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#07090e]">
      {/* Decorative background light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 blur-[130px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-fuchsia-600/10 blur-[130px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-fuchsia-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Industrial Printing Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Our 12+ Core Printing &amp;{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
              Creative Services
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Equipped with Konica 512i high-speed flex, Epson eco-solvent, Xerox DocuColor oily prints, and our proprietary Ishanee Brand envelopes.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {[
            { id: "all", label: "All 12 Services" },
            { id: "large-format", label: "Signage & Large Format" },
            { id: "digital-offset", label: "Digital & Offset Press" },
            { id: "specialty", label: "Specialty, Ishanee & Photo" },
            { id: "finishing", label: "Finishing & Binding" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white shadow-lg shadow-fuchsia-600/25 border border-fuchsia-500/50"
                  : "bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            const waMessage = encodeURIComponent(
              `Hello Zero Graphics! I would like to inquire about your "${service.name}" service. Please provide details and pricing.`
            );

            return (
              <div
                key={service.id}
                className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-white/10 group relative overflow-hidden"
              >
                {/* Popular highlight gradient top edge */}
                {service.popular && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400" />
                )}

                <div>
                  {/* Top row: Icon and Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${service.badgeColor}`}
                    >
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-fuchsia-400 transition-colors">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                    {service.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Section */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="text-[11px] text-slate-400 mb-3 italic">
                    {service.specs}
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`https://wa.me/917718101450?text=${waMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-emerald-600/90 hover:bg-emerald-500 border border-emerald-500/40 shadow-sm shadow-emerald-500/20 transition-all flex items-center justify-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-current" />
                      <span>Order on WhatsApp</span>
                    </a>

                    <a
                      href="#calculator"
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-cyan-400 transition-colors"
                      title="Calculate Price"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
