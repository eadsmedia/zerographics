"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  MessageSquare, 
  Store, 
  CheckCircle, 
  ArrowRight,
  Package
} from "lucide-react";

export default function HomeIshaneeSpotlight() {
  return (
    <section className="py-20 bg-rose-50/50 border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-rose-200 bg-white p-2.5 shadow-xl">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/ishanee-envelopes.jpg"
                  alt="Ishanee Brand Colorful Invitation Envelopes"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-3 bg-rose-50/80 rounded-xl mt-2 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 font-bold text-rose-700">
                  <Sparkles className="w-4 h-4" />
                  <span>Ishanee Brand &bull; Proprietary Craft</span>
                </div>
                <span className="text-slate-600 font-semibold">Wholesale &amp; Retail</span>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold border border-rose-200">
              <Sparkles className="w-3.5 h-3.5 text-rose-600" />
              <span>Invented in Mecheda &bull; Since 2013</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Meet <span className="text-rose-600">Ishanee Brand</span> Invitation Envelopes.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              When modern digital printing transformed invitation cards, traditional white and manila envelopes felt outdated. In 2013, Zero Graphics invented vibrant, colorful envelopes specially created for <strong className="text-slate-900">Weddings, Annaprashan, Birthdays, and Amantranlipi</strong>.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-700 py-2">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Wedding &amp; Amantranlipi</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Annaprashan Special</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Birthday Celebrations</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Wholesale &amp; Retail Counter</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/ishanee-envelopes"
                className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-bold shadow-sm transition-all flex items-center gap-2"
              >
                <span>Explore Ishanee Brand</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/917718101450?text=Hello%20Zero%20Graphics!%20I%20am%20interested%20in%20Ishanee%20Brand%20Envelopes%20(Wholesale/Retail)."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-xs sm:text-sm font-bold shadow-sm transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-rose-600" />
                <span>Wholesale Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
