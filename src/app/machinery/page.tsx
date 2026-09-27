"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { 
  Cpu, 
  Zap, 
  Check, 
  MessageSquare, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Maximize2,
  Clock,
  Printer
} from "lucide-react";

export default function MachineryPage() {
  const machines = [
    {
      name: "Konica 512i High-Speed Industrial Flex Press",
      badge: "Flagship Outdoor Workhorse",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      headType: "Konica Minolta 512i Independent Print Head",
      specs: [
        "Ultra-high firing frequency for massive square-footage per hour",
        "Vivid CMYK solvent inks with 2+ years UV and weather resistance",
        "Seamless banner widths up to 10 feet with zero visual banding",
        "Heavy-duty tension feed for stable feeding of Star Flex & Blackout media",
      ],
      description:
        "Our newly upgraded wide-format industrial flex machine handles high-volume political campaigns, retail hoardings, and event signage without sacrificing color saturation or edge sharpness.",
    },
    {
      name: "Epson Precision Eco-Solvent Machine",
      badge: "Photorealistic Indoor Specialist",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      headType: "Epson PrecisionCore Micro-Piezo Head",
      specs: [
        "True 1440+ DPI photographic resolution for fine art and signage",
        "Odor-free, green-certified inks safe for hospitals, clinics, and schools",
        "Flawless results on self-adhesive vinyl, translite film, and artist canvas",
        "Zero droplet splatter and smooth color gradient transitions",
      ],
      description:
        "Engineered for high-end interior graphics, roll-up exhibition standees, illuminated translite glowsigns, and custom vinyl wall wraps with crisp photographic depth.",
    },
    {
      name: "Konica Minolta Production Digital Colour Press",
      badge: "Commercial Short-Run & Offset Proofing",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      headType: "Digital Dry Toner Laser Fusion",
      specs: [
        "Heavy paper support from 80 GSM bond to 350 GSM luxury board",
        "Automated digital front-to-back duplex alignment",
        "Accurate micro-text rendering and precise PANTONE-matching accuracy",
        "Instant proofing and on-demand booklet and catalog output",
      ],
      description:
        "Installed in 2018 to elevate our digital print capabilities to commercial offset standards. Ideal for visiting cards, restaurant menus, certificates, and multi-fold flyers.",
    },
    {
      name: "Xerox DocuColour 12 & Docu250 Fleet",
      badge: "The Signature Oily Gloss Heritage",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
      headType: "Legendary Xerox Oil-Fused Color Technology",
      specs: [
        "Celebrated oily gloss sheen that established Zero Graphics' fame in 2009",
        "Rich deep blacks and lustrous high-contrast photo highlights",
        "High-volume document duplication and automatic multipage sorting",
        "Unbeatable longevity and moisture resistance on photographic stock",
      ],
      description:
        "The machines that made Zero Graphics famous across Purba Medinipur, Paschim Medinipur, and Howrah. Cherished by portrait photographers and studio artists for exceptional oil-gloss finish.",
    },
    {
      name: "Wide Engineering CAD Scanner & Plotter",
      badge: "Jumbo Blueprint Duplication",
      badgeColor: "bg-slate-100 text-slate-700 border-slate-300",
      headType: "Wide Format Optical Line Sensor",
      specs: [
        "Up to 36-inch wide engineering drawing scan & print",
        "High-contrast black lines with zero distortion on fine CAD schematics",
        "Direct printing from PDF, DWG, and hardcopy blue prints",
        "Architectural A0, A1, and A2 map reproductions",
      ],
      description:
        "Designed to serve building contractors, civil engineers, architects, and land surveyors requiring exact scale fidelity.",
    },
    {
      name: "Digital Pre-Ink Flash Seal & Stamp Machine",
      badge: "Flash Laser Seal Technology",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      headType: "Micro-Porous Flash Tube Technology",
      specs: [
        "10,000+ sharp impressions before needing ink replenishment",
        "Ready in 15 to 30 minutes while you wait",
        "Crisp reproduction of intricate signatures, bilingual Bengali text & logos",
        "No separate ink pad required &mdash; leakproof and self-contained",
      ],
      description:
        "Precision stamps for doctors, chartered accountants, advocates, institutional heads, and commercial firms.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-32 pb-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>State-of-the-Art Printing Infrastructure</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Machinery &amp; Technology Fleet
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              We continually upgrade our production infrastructure with the print industry&apos;s latest high-speed print heads, precision optical scanners, and automated finishing equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Workshop Showcase with Real Photo */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/services/konica-flex-printer.jpg"
                    alt="Konica 512i and Epson Eco Solvent Printing Machine at Zero Graphics Mecheda"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                Mecheda Thermal More Workshop
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Continuous Technical Investment Year After Year
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                From starting in 2000 with a single desktop computer and monochrome printer, to installing landmark machines like the Xerox DocuColour 12 in 2009, Docu250 in 2013, Konica 512 in 2015, and Konica Minolta press in 2018 &mdash; we have continually reinvested in cutting-edge print technologies.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our latest upgrades include high-speed <strong className="text-slate-900">Konica 512i printhead technology</strong> for rapid outdoor banner execution and an <strong className="text-slate-900">Epson eco-solvent printer</strong> for odorless, 1440 DPI interior artwork.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Genuine OEM Inks</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span>Color-Calibrated RIP Software</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-rose-600" />
                  <span>Experienced Machine Operators</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Machinery Cards Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Our Production Equipment Profiles
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Learn what makes our output crisper, more color-accurate, and longer-lasting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {machines.map((m, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${m.badgeColor}`}>
                    {m.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900">{m.name}</h3>
                <div className="text-xs font-semibold text-blue-600 mt-1 flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5 text-blue-500" />
                  <span>{m.headType}</span>
                </div>

                <p className="mt-3 text-xs text-slate-600 leading-relaxed">{m.description}</p>

                <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                  {m.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-1.5 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/917718101450?text=Hello%20Zero%20Graphics!%20I%20have%20a%20print%20order%20for%20the%20${encodeURIComponent(
                    m.name
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Inquire with Print Team</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
