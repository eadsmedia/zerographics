"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { servicesList } from "@/data/services";
import { 
  Printer, 
  MessageSquare, 
  Check, 
  Sparkles, 
  ArrowRight, 
  Search,
  Cpu
} from "lucide-react";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredServices = servicesList.filter((service) => {
    const matchesCategory =
      selectedCategory === "all" || service.category === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.equipment.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-3">
              <Printer className="w-3.5 h-3.5" />
              <span>Commercial &amp; Retail Printing Catalogue</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Our 12 Core Printing Disciplines
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Equipped with high-speed Konica 512i flex, Epson 1440 DPI eco-solvent, Xerox DocuColor oily gloss, and our proprietary Ishanee Brand envelopes. Explore full technical specifications, substrates, and instant WhatsApp ordering below.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-6 border-t border-slate-100">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: "all", label: "All 12 Services" },
                { id: "large-format", label: "Large Format & Signage" },
                { id: "digital-offset", label: "Digital & Offset Press" },
                { id: "specialty", label: "Specialty, Ishanee & Photo" },
                { id: "finishing", label: "Finishing & Binding" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                    selectedCategory === cat.id
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search services or machinery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section with Photos */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((service) => {
            const waMessage = encodeURIComponent(
              `Hello Zero Graphics! I am inquiring about "${service.name}". Please share pricing and execution time.`
            );

            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between scroll-mt-28 group"
              >
                <div>
                  {/* Service Photo Banner */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full shadow-sm ${
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

                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[11px] font-semibold text-slate-700 shadow-sm border border-slate-200 flex items-center gap-1.5">
                      <Cpu className="w-3 h-3 text-blue-600" />
                      <span>{service.equipment}</span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    {/* Category Label */}
                    <div className="text-xs font-semibold text-slate-400 mb-1">
                      {service.categoryLabel}
                    </div>

                    {/* Service Title */}
                    <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </h2>

                    {/* Detailed Description */}
                    <p className="mt-2.5 text-slate-600 text-sm leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Specifications Box */}
                    <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2 text-xs">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                          <span className="font-bold text-slate-700 block">Substrates / Media:</span>
                          <span className="text-slate-600">{service.specifications.material}</span>
                        </div>
                        <div>
                          <span className="font-bold text-slate-700 block">Dimensions / Sizes:</span>
                          <span className="text-slate-600">{service.specifications.sizes}</span>
                        </div>
                        <div>
                          <span className="font-bold text-slate-700 block">Turnaround Time:</span>
                          <span className="text-slate-600">{service.specifications.turnaround}</span>
                        </div>
                        <div>
                          <span className="font-bold text-slate-700 block">Finishing Options:</span>
                          <span className="text-slate-600">{service.specifications.finishing}</span>
                        </div>
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="mt-4 space-y-1.5">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="p-6 sm:p-8 pt-0 flex flex-wrap items-center gap-3">
                  <a
                    href={`https://wa.me/917718101450?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>Order on WhatsApp</span>
                  </a>


                  {service.id === "envelope-print" && (
                    <Link
                      href="/ishanee-envelopes"
                      className="py-2.5 px-3 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold transition-colors flex items-center gap-1"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                      <span>Ishanee Gallery</span>
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <Printer className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No matching services found</h3>
            <p className="text-xs text-slate-500 mt-1">
              Try adjusting your search terms or view all 12 services above.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            Need a Custom Size or Large Commercial Print Contract?
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Speak directly with our technical production team or visit our Mecheda Thermal More workshop for on-the-spot media inspection and proofing.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:9932321858"
              className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs"
            >
              Call Hotline: 9932321858
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs"
            >
              View Branch Locations &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
