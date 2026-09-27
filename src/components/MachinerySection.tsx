"use client";

import React from "react";
import Image from "next/image";
import { 
  Cpu, 
  Zap, 
  Sparkles, 
  CheckCircle, 
  Maximize, 
  ShieldCheck,
  Flame,
  Award
} from "lucide-react";

export default function MachinerySection() {
  const machineryList = [
    {
      title: "Konica 512i Industrial Flex Machine",
      subtitle: "High Speed Wide-Format Outdoor Press",
      specs: [
        "Equipped with Konica 512i industrial print heads",
        "High-frequency firing for ultra-fast throughput without banding",
        "Vivid CMYK solvent inks with 2+ years outdoor UV stability",
        "Capable of producing 1,000+ sq.ft per hour",
      ],
      tag: "Newly Upgraded",
      tagColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    },
    {
      title: "Epson Eco-Solvent Fine-Art Printer",
      subtitle: "Photorealistic Indoor & Signage Specialist",
      specs: [
        "Equipped with micro-piezo Epson PrecisionCore head",
        "True 1440 DPI photographic output with zero graininess",
        "Low-odor, eco-friendly inks ideal for retail & interiors",
        "Substrates: Self-adhesive vinyl, translite, canvas, wallpaper",
      ],
      tag: "Studio Precision",
      tagColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    },
    {
      title: "Konica Minolta Digital Colour Press",
      subtitle: "Commercial Short-Run & Offset Proofing",
      specs: [
        "Advanced digital toner fusion on 80–350 GSM media",
        "Consistent color management with automated registration",
        "Instant proofing & rapid production of flyers, cards, booklets",
        "Double-sided high speed auto-duplexing",
      ],
      tag: "Production Workhorse",
      tagColor: "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/40",
    },
    {
      title: "Xerox DocuColour & Docu250 Line",
      subtitle: "Celebrated High-Gloss Oily Print Quality",
      specs: [
        "The legendary oil-fused glossy finish that made ZG famous",
        "High-density blacks and lustrous vibrant color saturation",
        "High-volume document copying and duplex collation",
        "Heritage workhorse since 2009 & 2013",
      ],
      tag: "Customer Favorite",
      tagColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    },
  ];

  return (
    <section id="machinery" className="py-24 relative overflow-hidden bg-[#07090e]">
      {/* Background accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-cyan-600/10 via-fuchsia-600/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Cutting-Edge Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Powered by World-Class{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
              Printing Technology
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            We continuously reinvest in state-of-the-art machinery and printhead engineering to ensure superior resolution, faster turnaround, and unbeatable durability.
          </p>
        </div>

        {/* Feature Spotlight with Image */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 p-2 bg-[#0a0f1d] shadow-2xl">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/services/konica-flex-printer.jpg"
                  alt="Konica 512i and Epson Eco Solvent Printing Machine at Zero Graphics Mecheda"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-50" />
              </div>

              {/* Inset Label */}
              <div className="absolute bottom-5 inset-x-5 glass p-3.5 rounded-xl border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    Live Production Floor
                  </div>
                  <div className="text-white text-sm font-bold mt-0.5">
                    Konica 512i &amp; Epson PrecisionCore Setup
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Ready for Bulk Runs
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 gap-4">
            {machineryList.map((item, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5 font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.tagColor} shrink-0`}
                  >
                    {item.tag}
                  </span>
                </div>

                <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {item.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
