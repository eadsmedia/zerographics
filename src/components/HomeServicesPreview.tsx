"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { servicesList } from "@/data/services";
import { 
  Printer, 
  ArrowRight, 
  MessageSquare, 
  Check
} from "lucide-react";

export default function HomeServicesPreview() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filtered = servicesList.filter((s) => {
    if (activeTab === "all") return true;
    return s.category === activeTab;
  });

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-3">
              <Printer className="w-3.5 h-3.5" />
              <span>Full Print Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our 12 Core Printing Disciplines
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl">
              From wide-format outdoor flex and fine-art eco-solvent to Xerox DocuColor oily prints and Ishanee Brand envelopes.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors self-start md:self-auto"
          >
            <span>Explore All Specifications</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-slate-100 mb-8">
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
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 12 Services Grid with Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((service) => {
            const waMessage = encodeURIComponent(
              `Hello Zero Graphics! I want to order "${service.name}". Please provide details.`
            );

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Service Photo with Badge */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm ${
                          service.badgeType === "blue"
                            ? "bg-blue-600 text-white"
                            : service.badgeType === "emerald"
                            ? "bg-emerald-600 text-white"
                            : service.badgeType === "rose"
                            ? "bg-rose-600 text-white"
                            : "bg-amber-600 text-white"
                        }`}
                      >
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="text-[11px] font-semibold text-slate-400 mb-1">
                      {service.categoryLabel}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {service.shortDesc}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-1">
                      {service.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-500">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between gap-2">
                  <a
                    href={`https://wa.me/917718101450?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Order</span>
                  </a>

                  <Link
                    href={`/services#${service.id}`}
                    className="py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1 transition-colors"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
