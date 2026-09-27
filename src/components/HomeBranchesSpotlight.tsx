"use client";

import React from "react";
import Link from "next/link";
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  ArrowRight
} from "lucide-react";

export default function HomeBranchesSpotlight() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>2 Strategic Locations in Mecheda</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Visit Our Workshops &amp; Sales Counters
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Conveniently located at Mecheda Thermal More and Mecheda Bus Stand Market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Unit 1 */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-blue-300 transition-all">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
              Unit 1 &bull; Head Office &amp; Workshop
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
              Mecheda Thermal More
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Mecheda Thermal More (1st Floor), Shantipur, Mecheda, Purba Medinipur, West Bengal &ndash; 721137
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Phone: <strong className="text-slate-900">9932321858</strong></span>
              <a href="tel:9932321858" className="text-blue-600 font-bold hover:underline">
                Call Direct
              </a>
            </div>
          </div>

          {/* Unit 2 */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-rose-300 transition-all">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
              Unit 2 &bull; Branch &amp; Sales Counter
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-rose-600 shrink-0" />
              Mecheda Bus Stand Market
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Mecheda Bus Stand (Santipur New Market, 1st Floor), Shantipur, Mecheda, Purba Medinipur, West Bengal &ndash; 721137
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Phone: <strong className="text-slate-900">03228-457504</strong></span>
              <Link href="/contact" className="text-rose-600 font-bold hover:underline">
                View Details &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Customer Care Callout Banner */}
        <div className="mt-8 max-w-5xl mx-auto bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-sm shadow-sm shrink-0">
              CC
            </span>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block">
                Zero Graphics Customer Care
              </span>
              <a href="tel:7363073330" className="text-xl sm:text-2xl font-black text-slate-900 hover:text-amber-700">
                73630 73330
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/zerographics_mecheda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-pink-200 text-pink-700 hover:bg-pink-50 text-xs font-bold shadow-sm transition-colors"
            >
              <span>Insta: @zerographics_mecheda</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors shadow-sm"
            >
              <span>Contact Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
