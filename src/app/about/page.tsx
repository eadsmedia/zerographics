"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { 
  Clock, 
  MapPin, 
  Award, 
  Sparkles, 
  CheckCircle, 
  Users, 
  Building2, 
  Heart,
  ArrowRight,
  ShieldCheck,
  Printer
} from "lucide-react";

export default function AboutPage() {
  const timelineEvents = [
    {
      year: "2000",
      title: "Humble Beginnings as a D.T.P. Centre",
      desc: "Our journey started in the year 2000, at the gateway of Purba Medinipur District, Mecheda, West Bengal. It was only a D.T.P. Centre equipped with a single computer and a printer. Within a short period, our creative designs attracted local people. We collected a wide range of Bengali fonts and applied those for our creative designs.",
    },
    {
      year: "2005",
      title: "Becoming Mecheda's Creative Prepress Hub",
      desc: "We became famous throughout the Mecheda area and expanded into colour designs, photo editing, photo lamination, and framing. Many painters, local photo studios, and regional print houses became dependent on us for their preprinting jobs and artworks.",
    },
    {
      year: "2009",
      title: "Landmark Xerox Docucolour 12 Installation",
      desc: "We started Digital Colour Printing in 2009 with the Xerox Docucolour 12 Machine. Its distinctive high-gloss oily print impressed our customers. Clients from Purba Medinipur, Paschim Medinipur, and Howrah began traveling to us regularly for high-quality colour prints.",
    },
    {
      year: "2011",
      title: "Flex Printing Division Launched",
      desc: "To meet the burgeoning demand for outdoor signage, political campaigns, and commercial banners, we established our dedicated wide-format Flex Printing division.",
    },
    {
      year: "2013",
      title: "Xerox Docu250 & The Invention of Ishanee Brand",
      desc: "We installed the Xerox Docu250 for higher speed and superior quality, expanding into invitation cards and envelopes for weddings, Annaprashan, birthdays, and celebrations. Feeling the need for colour envelopes for digital printed invitation cards, we invented colourful envelopes specially for Annaprashan, birthday, wedding, and Amantranlipi under our brand 'Ishanee Brand', sold wholesale and retail from our sales counter.",
    },
    {
      year: "2015",
      title: "Konica 512 Industrial Flex Upgrade",
      desc: "We upgraded our flex printing capabilities with the Konica 512 flex machine, achieving enhanced print speeds and weatherproof outdoor resilience.",
    },
    {
      year: "2018",
      title: "Konica Minolta Production Digital Colour Press",
      desc: "Installed the heavy-duty Konica Minolta Digital Colour Press, enabling 350 GSM cardstock duplex printing, leaflets, brochures, visiting cards, and digital offset standards.",
    },
    {
      year: "Present",
      title: "Konica 512i High Speed Flex & Epson Eco-Solvent",
      desc: "We installed our High Speed flex machine equipped with Konica 512i print heads, alongside an Eco-Solvent printer with Epson print heads. In this way, we upgraded ourselves with latest technology and professional staff for quality printing and creative artwork year after year.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-32 pb-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>Celebrating 25+ Years of Print Excellence</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Our Journey &amp; Legacy Since 2000
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              How a single-computer D.T.P. Centre in Mecheda transformed into Purba Medinipur&apos;s most relied-upon digital printing house and the birthplace of Ishanee Brand envelopes.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Rooted in Mecheda, Serving Bengal
            </h2>
            <p>
              Our journey started on the year of 2000, at the gateway of Purba Medinipur District, Mecheda, West Bengal. It was only a D.T.P. Centre equipped with a single computer &amp; a printer. Within a short period our creative designs attracted to the local people. We collected a wide range of Bengali fonts &amp; applied those for our creative designs.
            </p>
            <p>
              In this way we became famous at Mecheda area. Then we started colour designs, photo editing, photo lamination, framing etc. Many painter, studio, print house became dependent on us for their preprinting jobs and artworks.
            </p>
            <p>
              Then we started Digital Colour Printing on 2009 with Xerox Docucolour 12 Machine. Its high gloss oily print impressed our customers. Customers from Purba &amp; Paschim Medinipur, Howrah came to us for high quality colour prints.
            </p>
            <p>
              On 2011 we started Flex Printing. On 2013 we installed Xerox Docu250 for more speed &amp; better quality. Then we expanded our business with Invitation Cards &amp; Envelopes for wedding, Annaprashan, birthday &amp; other programmes.
            </p>
            <p>
              We felt the need of colour envelop for digital printed invitation cards. Then we invented colourful envelops specially for Annaprashan, birthday, wedding, amantranlipi etc. Brand name of our envelop is <strong className="text-rose-600 font-bold">Ishanee Brand</strong>. We sell it at wholesale &amp; retail from our sales counter.
            </p>
            <p>
              On 2015 we upgraded our flex printing with Konica 512 flex machine. Then we installed Digital Colour Press of Konica Minolta on 2018. Recently, we installed our High Speed flex machine equipped with Konica 512i print head and Eco-Solvent printer with Epson print head. In this way we upgraded ourselves with latest technology &amp; professional staff for quality printing &amp; creative artwork year after year.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white p-2.5 shadow-xl">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero.jpg"
                  alt="Zero Graphics Production Workshop"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-3 bg-slate-50 rounded-xl mt-2 flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800">Mecheda Thermal More Workshop</span>
                <span className="text-slate-500">Established 2000</span>
              </div>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-2">
                  <Award className="w-4 h-4" />
                </div>
                <div className="font-bold text-slate-900 text-sm">Design Craft</div>
                <div className="text-xs text-slate-500 mt-1">Rich Bengali font collections &amp; creative artworks.</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold mb-2">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="font-bold text-slate-900 text-sm">Ishanee Innovation</div>
                <div className="text-xs text-slate-500 mt-1">Invented colorful celebration envelopes in 2013.</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-2">
                  <Printer className="w-4 h-4" />
                </div>
                <div className="font-bold text-slate-900 text-sm">Speed &amp; Tech</div>
                <div className="text-xs text-slate-500 mt-1">Konica 512i high-speed flex &amp; Epson eco-solvent.</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center font-bold mb-2">
                  <Building2 className="w-4 h-4" />
                </div>
                <div className="font-bold text-slate-900 text-sm">2 Mecheda Units</div>
                <div className="text-xs text-slate-500 mt-1">Thermal More workshop &amp; Bus Stand sales counter.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step Timeline */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Our Milestones &amp; Technological Evolution
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              A chronological overview of our journey from 2000 to the present day.
            </p>
          </div>

          <div className="relative border-l-2 border-blue-200 pl-6 sm:pl-8 ml-4 sm:ml-8 space-y-10">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className="relative group">
                {/* Year Marker */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-8 h-8 rounded-full bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center shadow-md">
                  {idx + 1}
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:bg-white transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xl font-extrabold text-blue-600">
                      {event.year}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                      Milestone
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
