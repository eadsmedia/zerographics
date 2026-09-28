"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2,
  Award,
  Zap,
  ShieldCheck,
  Building2,
  Printer
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-200">
      {/* Background Image with Clean Translucent Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.jpg"
          alt="Zero Graphics Printing Workshop Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft Multi-Stop Light Overlay for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/98 via-white/92 to-white/80 backdrop-blur-[3px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/95" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-xs font-bold text-blue-700 mb-6 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 inline-block animate-pulse" />
              <span>Gateway of Purba Medinipur &bull; Mecheda</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 font-semibold">Since 2000</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Professional Digital Printing &amp;{" "}
              <span className="text-blue-600">
                Creative Artworks.
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-5 text-base sm:text-lg text-slate-700 max-w-2xl leading-relaxed">
              Purba Medinipur&apos;s trusted printing hub. Powered by high-speed <strong className="text-slate-900 font-bold">Konica 512i Flex</strong>, <strong className="text-slate-900 font-bold">Epson Eco-Solvent</strong>, celebrated Xerox DocuColor oily prints, and our proprietary <strong className="text-rose-600 font-bold">Ishanee Brand</strong> colorful invitation envelopes.
            </p>

            {/* Key feature pills */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl text-xs font-semibold text-slate-800">
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm py-1.5 px-2.5 rounded-lg border border-slate-200/60 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>DocuColor Oily Gloss</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm py-1.5 px-2.5 rounded-lg border border-slate-200/60 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Konica 512i Flex Head</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm py-1.5 px-2.5 rounded-lg border border-slate-200/60 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Epson Eco-Solvent HD</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm py-1.5 px-2.5 rounded-lg border border-slate-200/60 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Ishanee Envelopes</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm py-1.5 px-2.5 rounded-lg border border-slate-200/60 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Same-Day Turnaround</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm py-1.5 px-2.5 rounded-lg border border-slate-200/60 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>2 Mecheda Branches</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <Link
                href="/services"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2 group"
                id="hero-view-services"
              >
                <span>View All 12 Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>


              <a
                href="https://wa.me/917718101450?text=Hello%20Zero%20Graphics!%20I%20would%20like%20to%20order%20printing."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Order via WhatsApp</span>
              </a>
            </div>

            {/* Regional Trust */}
            <div className="mt-8 flex items-center gap-2 text-xs text-slate-600 font-semibold bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-200/60">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
              <span>
                Serving studios, agencies, print shops &amp; individuals across <strong className="text-slate-900">Purba &amp; Paschim Medinipur, Howrah</strong>.
              </span>
            </div>
          </div>

          {/* Right Column: Live Production Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-300/80 bg-white/95 p-3 shadow-2xl backdrop-blur-md">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-inner">
                <Image
                  src="/images/services/konica-flex-printer.jpg"
                  alt="Konica 512i High Speed Industrial Flex Printer in Mecheda"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Inset Badge */}
              <div className="mt-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold text-blue-600 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping" />
                    Live Printing Operations
                  </div>
                  <div className="text-slate-900 font-bold text-sm mt-0.5">
                    Konica 512i Flex &amp; Epson Eco-Solvent Lines
                  </div>
                </div>
                <Link
                  href="/machinery"
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-sm"
                >
                  Tech Specs &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Clean Metric Cards */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:border-blue-300 transition-colors">
            <div className="text-3xl font-extrabold text-blue-600">2000</div>
            <div className="text-xs font-bold text-slate-900 mt-1">Established in Mecheda</div>
            <div className="text-[11px] text-slate-500 mt-0.5">25+ years of continuous service</div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:border-blue-300 transition-colors">
            <div className="text-3xl font-extrabold text-blue-600">12+</div>
            <div className="text-xs font-bold text-slate-900 mt-1">Specialized Print Services</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Flex, Eco-solvent, Digital, Stamps</div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:border-rose-300 transition-colors">
            <div className="text-3xl font-extrabold text-rose-600">Ishanee</div>
            <div className="text-xs font-bold text-slate-900 mt-1">Brand Envelopes</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Wholesale &amp; Retail sales counter</div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:border-emerald-300 transition-colors">
            <div className="text-3xl font-extrabold text-emerald-600">2 Units</div>
            <div className="text-xs font-bold text-slate-900 mt-1">Strategic Branches</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Thermal More &amp; Bus Stand Market</div>
          </div>
        </div>
      </div>
    </section>
  );
}
