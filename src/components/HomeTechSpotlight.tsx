"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Cpu, 
  Zap, 
  Check, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export default function HomeTechSpotlight() {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technology &amp; Production Fleet</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Equipped with <span className="text-blue-600">Konica 512i</span> &amp; Epson Eco-Solvent.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We continuously upgrade our machinery with latest industrial printheads and digital presses to guarantee maximum color depth, zero banding, and rapid turnaround.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold text-slate-900 flex items-center justify-between">
                  <span>Konica 512i Industrial Flex Press</span>
                  <span className="text-[10px] text-blue-700 bg-blue-100 px-2 py-0.5 rounded font-semibold">High Speed</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">High-frequency firing for ultra-fast, weather-proof outdoor hoardings.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold text-slate-900 flex items-center justify-between">
                  <span>Epson Eco-Solvent 1440 DPI Machine</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-semibold">Photorealistic</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">Odorless indoor vinyl, roll-up standees, and backlight translite prints.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold text-slate-900 flex items-center justify-between">
                  <span>Xerox DocuColour &amp; Docu250 Line</span>
                  <span className="text-[10px] text-amber-800 bg-amber-100 px-2 py-0.5 rounded font-semibold">Oily Gloss Finish</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">Iconic oily gloss prints that made Zero Graphics famous across Bengal since 2009.</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/machinery"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold transition-colors"
              >
                <span>View Full Equipment Profiles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Machine image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white p-2.5 shadow-xl">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/services/konica-flex-printer.jpg"
                  alt="Konica 512i and Epson Eco Solvent Printing Machine at Zero Graphics Mecheda"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-3 bg-slate-50 rounded-xl mt-2 flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800">Mecheda Thermal More Workshop Line</span>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                  Active Production
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
