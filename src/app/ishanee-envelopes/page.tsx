"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { 
  Sparkles, 
  MessageSquare, 
  Store, 
  Check, 
  Phone, 
  Award, 
  Package, 
  Heart,
  Palette,
  ArrowRight
} from "lucide-react";

export default function IshaneeEnvelopesPage() {
  const categories = [
    {
      name: "Wedding & Amantranlipi",
      bengali: "শুভ বিবাহ ও নিমন্ত্রণলিপি",
      desc: "Lavish royal magenta, scarlet red, emerald green, and imperial gold envelopes. Handcrafted with traditional foil embossing, auspicious motifs, and matching velvet tassels.",
      stock: "Available in wholesale boxes of 100 / 500 pcs",
      badge: "Flagship Choice",
    },
    {
      name: "Annaprashan & Rice Ceremony",
      desc: "Specially designed for Bengali baby rice ceremonies (Mukhe Bhaat). Cheerful vibrant pastel and auspicious turmeric yellows with custom foil borders.",
      stock: "Retail counter packs and bulk printer boxes",
      badge: "Exclusive Design",
    },
    {
      name: "Birthday & Milestone Parties",
      desc: "Modern chic aesthetic covers designed to complement digital photo invitations for 1st birthdays, anniversaries, and grand private parties.",
      stock: "Instant counter availability",
      badge: "Contemporary",
    },
    {
      name: "Corporate & Formal Invitations",
      desc: "Subtle textured linen and metallic pearlescent envelopes crafted for corporate seminars, store inaugurations, and institutional ceremonies.",
      stock: "Custom corporate logo printing",
      badge: "Executive",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-rose-50 via-white to-slate-50 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-xs font-bold text-rose-800 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-rose-600" />
                <span>Proprietary Registered Brand &bull; Est. 2013</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Ishanee Brand{" "}
                <span className="text-rose-600">
                  Colourful Invitation Envelopes
                </span>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                When digital colour printing revolutionized invitation cards, dull white envelopes simply failed to match the excitement of celebration. In 2013, Zero Graphics invented vibrant, richly crafted envelopes specially styled for <strong className="text-slate-900">Weddings, Annaprashan, Birthdays, and Amantranlipi</strong>.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/917718101450?text=Hello%20Zero%20Graphics!%20I%20am%20interested%20in%20Ishanee%20Brand%20Envelopes%20(Wholesale/Retail)."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-rose-600 hover:bg-rose-700 shadow-sm shadow-rose-600/20 transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Wholesale &amp; Retail WhatsApp Inquiry</span>
                </a>

                <Link
                  href="/contact"
                  className="px-5 py-3.5 rounded-xl font-bold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all flex items-center gap-2"
                >
                  <Store className="w-4 h-4 text-rose-600" />
                  <span>Visit Sales Counter</span>
                </Link>
              </div>

              <div className="mt-8 pt-6 border-t border-rose-200/60 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="font-bold text-slate-900 block text-sm">Wholesale Supply</span>
                  <span className="text-slate-600">Supplying printing presses, studios, and card houses across Medinipur &amp; Howrah.</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block text-sm">Direct Retail Counter</span>
                  <span className="text-slate-600">Available off-the-shelf at our Mecheda Bus Stand &amp; Thermal More counters.</span>
                </div>
              </div>
            </div>

            {/* Right Real Showcase Photo */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-rose-200 bg-white p-2.5 shadow-xl">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/ishanee-envelopes.jpg"
                    alt="Ishanee Brand Colorful Invitation Envelopes"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-4 bg-rose-50/50 rounded-xl mt-3 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-rose-700 uppercase tracking-wider block">
                      Authentic Ishanee Brand Craft
                    </span>
                    <span className="text-xs text-slate-600">
                      Handcrafted foil motifs, Bengali typography &amp; royal velvet tones
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-600 text-white">
                    Direct Manufacturer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Crafted for Every Auspicious Bengali Celebration
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Select from our ready collection or order customized foil embossing with your family or event names.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-rose-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                    {cat.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">Ishanee Exclusive</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">{cat.name}</h3>
                {cat.bengali && (
                  <div className="text-xs font-bold text-rose-600 mt-0.5">{cat.bengali}</div>
                )}

                <p className="mt-3 text-slate-600 text-sm leading-relaxed">{cat.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">{cat.stock}</span>
                <a
                  href={`https://wa.me/917718101450?text=Hello%20Zero%20Graphics!%20I%20am%20inquiring%20about%20Ishanee%20Brand%20"${cat.name}"%20envelopes.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1"
                >
                  <span>Order on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Ishanee Brand Section */}
      <section className="py-14 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Why Wedding Studios &amp; Printers Rely on Ishanee Brand
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Designed from practical feedback of hundreds of photographers, invitation houses, and printers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Perfect Dimensions</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Precision die-cut sizes tailored exactly to standard digital invitation inserts, eliminating awkward bulging or folding.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold mb-3">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Rich Colour Retention</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                High-density dyed cardstocks that never bleed color, resisting moisture and handling smudges during festive distributions.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold mb-3">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Direct Wholesale Prices</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Enjoy manufacturer rates without intermediary markup. Special tiered wholesale pricing for orders of 500+ and 1,000+ units.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold mb-3">
                <Store className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Immediate Counter Stock</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Walk into our Mecheda Bus Stand counter and collect dozens of pre-packed color sets instantly for last-minute ceremony emergencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer & Floating WhatsApp */}
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
