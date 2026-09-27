"use client";

import React from "react";
import Image from "next/image";
import { 
  Sparkles, 
  MessageSquare, 
  CheckCircle, 
  Store, 
  PackageCheck, 
  Palette, 
  Flame,
  ArrowRight
} from "lucide-react";

export default function IshaneeBrandShowcase() {
  const envelopeCategories = [
    {
      title: "Wedding & Amantranlipi",
      desc: "Intricate traditional foil embossed motifs, royal magenta, gold, and deep scarlet velvet finishes.",
      tag: "Top Seller",
    },
    {
      title: "Annaprashan & Rice Ceremony",
      desc: "Charming auspicious designs with playful motifs crafted specially for Bengali baby celebrations.",
      tag: "Custom Made",
    },
    {
      title: "Birthday & Milestone Events",
      desc: "Contemporary, vibrant pastel and metallic luxury covers made to match digital invitations.",
      tag: "Modern Styles",
    },
    {
      title: "Wholesale & Bulk Supply",
      desc: "Special discounted master-packs for local printers, invitation card houses, and retail stationers.",
      tag: "Dealer Rates",
    },
  ];

  return (
    <section id="ishanee-brand" className="py-24 relative overflow-hidden bg-[#090d18] border-y border-white/10">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-l from-fuchsia-600/15 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 p-2 bg-gradient-to-b from-amber-500/20 via-white/5 to-transparent shadow-2xl">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/ishanee-envelopes.jpg"
                  alt="Ishanee Brand Colorful Invitation Envelopes by Zero Graphics"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-xl border border-white/20 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-amber-300 text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    Proprietary Brand Innovation
                  </div>
                  <div className="text-white font-extrabold text-sm sm:text-base mt-0.5">
                    Ishanee Brand &bull; Colour Envelopes
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold">
                  Wholesale &amp; Retail
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Product Highlights */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-xs font-semibold text-amber-300 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Invented &amp; Manufactured in Mecheda</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Meet <span className="bg-gradient-to-r from-amber-300 via-pink-400 to-fuchsia-400 bg-clip-text text-transparent">Ishanee Brand</span> Envelopes.
            </h2>

            <p className="mt-4 text-slate-300 text-base leading-relaxed">
              When high-speed digital colour printing transformed invitation cards, traditional white and beige envelopes fell short. In 2013, Zero Graphics invented colorful envelopes specially engineered to match luxury invitations for <strong className="text-white font-medium">Wedding, Annaprashan, Birthday, and Amantranlipi</strong>.
            </p>

            <p className="mt-3 text-slate-300 text-sm leading-relaxed">
              Today, <strong className="text-amber-300 font-semibold">Ishanee Brand</strong> is sold wholesale and retail across Purba Medinipur, Paschim Medinipur, and Howrah directly from our dedicated sales counter at Mecheda.
            </p>

            {/* Grid of 4 Features */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
              {envelopeCategories.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-3.5 border border-white/10 hover:border-amber-500/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-white">{item.title}</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="https://wa.me/917718101450?text=Hello%20Zero%20Graphics!%20I%20am%20interested%20in%20Ishanee%20Brand%20Envelopes%20(Wholesale/Retail)."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-black bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                id="ishanee-whatsapp-inquiry"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Inquire Wholesale &amp; Retail</span>
              </a>

              <a
                href="tel:9932321858"
                className="w-full sm:w-auto px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center justify-center gap-2"
              >
                <Store className="w-4 h-4 text-amber-400" />
                <span>Visit Mecheda Sales Counter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
