"use client";

import React, { useState } from "react";
import { 
  Clock, 
  Monitor, 
  Palette, 
  Sparkles, 
  Printer, 
  Mail, 
  Zap, 
  Award, 
  ChevronRight 
} from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  description: string;
  badge: string;
  color: string;
}

const milestones: Milestone[] = [
  {
    year: "2000",
    title: "The Gateway of Purba Medinipur",
    subtitle: "D.T.P. Centre & Bengali Typography Pioneer",
    icon: Monitor,
    badge: "Origin",
    color: "from-blue-500 to-cyan-500",
    description:
      "Our journey began at Mecheda, West Bengal, equipped with just a single computer and printer. By curating a rich library of Bengali fonts and introducing innovative local graphic designs, we immediately captivated the Mecheda community.",
  },
  {
    year: "2005",
    title: "Regional Prepress & Creative Hub",
    subtitle: "Trusted by Studios, Painters & Print Houses",
    icon: Palette,
    badge: "Growth",
    color: "from-cyan-500 to-teal-500",
    description:
      "Expanded into advanced color design, digital photo editing, photo lamination, and framing. Studios, artists, and independent print businesses across the district came to rely on Zero Graphics as their central prepress production partner.",
  },
  {
    year: "2009",
    title: "Digital Colour Era: Xerox DocuColour 12",
    subtitle: "The Signature High-Gloss Oily Prints",
    icon: Sparkles,
    badge: "Breakthrough",
    color: "from-fuchsia-500 to-pink-500",
    description:
      "Installed our revolutionary Xerox Docucolour 12 machine. Its iconic, high-gloss oily print quality created a sensation, bringing regular clients from Purba Medinipur, Paschim Medinipur, and Howrah to our counters.",
  },
  {
    year: "2011",
    title: "Flex Printing Division Inaugurated",
    subtitle: "Wide-Format Signage & Outdoor Advertising",
    icon: Printer,
    badge: "Expansion",
    color: "from-amber-500 to-orange-500",
    description:
      "Launched full-scale Flex Printing to cater to the booming commercial outdoor banner and political hoarding requirements across highway corridors and rural hubs.",
  },
  {
    year: "2013",
    title: "Xerox Docu250 & Birth of Ishanee Brand",
    subtitle: "Invention of Colorful Invitation Envelopes",
    icon: Mail,
    badge: "Innovation",
    color: "from-pink-500 to-rose-500",
    description:
      "Upgraded to the heavy-duty Xerox Docu250 and addressed a key industry void: creating vibrant, colorful envelopes for digital invitation cards (Wedding, Annaprashan, Birthday). Registered our proprietary 'Ishanee Brand' for wholesale and retail.",
  },
  {
    year: "2015",
    title: "Konica 512 Industrial Flex Upgrade",
    subtitle: "Enhanced Outdoor Resolution & Output Speed",
    icon: Zap,
    badge: "Scale",
    color: "from-purple-500 to-indigo-500",
    description:
      "Replaced earlier equipment with the Konica 512 industrial flex printer, boosting speed and allowing large-format signage to withstand severe coastal monsoon weather.",
  },
  {
    year: "2018",
    title: "Konica Minolta Digital Production Press",
    subtitle: "Commercial Grade Short-Run Books & Leaflets",
    icon: Award,
    badge: "Precision",
    color: "from-indigo-500 to-violet-500",
    description:
      "Installed the heavy-duty Konica Minolta Digital Colour Press, enabling 350 GSM board duplex printing, ultra-crisp visiting cards, brochures, and digital offset execution.",
  },
  {
    year: "Present",
    title: "Konica 512i & Epson Eco-Solvent Head Upgrades",
    subtitle: "State-of-the-Art Speed & 1440 DPI Artistry",
    icon: Zap,
    badge: "Latest Tech",
    color: "from-emerald-400 to-cyan-400",
    description:
      "Installed the ultra-fast Konica 512i printhead flex press and Epson eco-solvent machine, paired with an experienced team of creative designers and printing professionals.",
  },
];

export default function TimelineSection() {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(milestones.length - 1);

  return (
    <section id="timeline" className="py-24 relative overflow-hidden bg-[#090d18]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-fuchsia-600/10 blur-[150px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-fuchsia-400 mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>25+ Years of Evolution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            From 1 Computer to{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
              Purba Medinipur&apos;s Print Powerhouse
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Follow our landmark upgrades, technological breakthroughs, and the invention of Ishanee Brand colorful envelopes.
          </p>
        </div>

        {/* Milestone Selector Pills */}
        <div className="mt-12 flex items-center justify-start lg:justify-center gap-2.5 overflow-x-auto pb-4 no-scrollbar">
          {milestones.map((m, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedMilestone(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                selectedMilestone === idx
                  ? "bg-gradient-to-r from-fuchsia-600 to-cyan-600 text-white shadow-lg shadow-fuchsia-600/30 border border-white/30 scale-105"
                  : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              <span>{m.year}</span>
              <span className="text-[10px] opacity-75 font-normal hidden sm:inline">
                ({m.badge})
              </span>
            </button>
          ))}
        </div>

        {/* Active Milestone Card */}
        <div className="mt-8 max-w-4xl mx-auto">
          {(() => {
            const m = milestones[selectedMilestone];
            const Icon = m.icon;
            return (
              <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/15 shadow-2xl relative overflow-hidden animate-fade-in">
                {/* Glow accent corner */}
                <div
                  className={`absolute -top-16 -right-16 w-44 h-44 rounded-full bg-gradient-to-br ${m.color} opacity-25 blur-3xl`}
                />

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${m.color} p-0.5 shadow-lg shadow-fuchsia-500/20`}
                    >
                      <div className="w-full h-full bg-[#0a0f1d] rounded-[14px] flex items-center justify-center text-white">
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl sm:text-3xl font-black text-white">
                          {m.year}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-white/10 text-cyan-300 border border-white/15">
                          {m.badge}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                        {m.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-fuchsia-400 mb-3">
                  {m.subtitle}
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {m.description}
                </p>

                {/* Progress Indicators */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>Milestone {selectedMilestone + 1} of {milestones.length}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        setSelectedMilestone(
                          (prev) => (prev - 1 + milestones.length) % milestones.length
                        )
                      }
                      className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-colors"
                    >
                      &larr; Prev
                    </button>
                    <button
                      onClick={() =>
                        setSelectedMilestone((prev) => (prev + 1) % milestones.length)
                      }
                      className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-colors"
                    >
                      Next &rarr;
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Timeline Grid (Summary of All Milestones) */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedMilestone(idx)}
              className={`p-4 rounded-2xl cursor-pointer transition-all duration-200 border ${
                selectedMilestone === idx
                  ? "bg-white/10 border-fuchsia-500/50 shadow-lg shadow-fuchsia-500/10"
                  : "bg-white/5 border-white/5 hover:bg-white/10"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-base font-extrabold text-white">{m.year}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-slate-300">
                  {m.badge}
                </span>
              </div>
              <div className="text-xs font-bold text-slate-200 truncate">{m.title}</div>
              <div className="text-[11px] text-slate-400 truncate mt-0.5">{m.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
