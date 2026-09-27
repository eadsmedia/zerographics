"use client";

import React, { useState } from "react";
import { MessageSquare, X, Palette, Printer, Phone, ChevronRight } from "lucide-react";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Modal */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl p-4 border border-slate-200 shadow-floating animate-fade-up">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 fill-current" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Chat with Zero Graphics</h4>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-600 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                  Online &bull; Mecheda Workshop
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              aria-label="Close chat menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Department options */}
          <div className="mt-3 space-y-2">
            {/* Design Desk */}
            <a
              href="https://wa.me/917478949343?text=Hello%20Zero%20Graphics!%20I%20have%20a%20design%20/%20artwork%20requirement."
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200/80 hover:border-blue-200 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-blue-100 text-blue-700 group-hover:scale-105 transition-transform">
                  <Palette className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 group-hover:text-blue-700">
                    Design Department
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Artworks, Bengali fonts, logos
                  </div>
                </div>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Print Desk */}
            <a
              href="https://wa.me/917718101450?text=Hello%20Zero%20Graphics!%20I%20would%20like%20to%20order%20printing%20(Flex%20/%20Eco-Solvent%20/%20Digital%20/%20Envelopes)."
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200/80 hover:border-emerald-200 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 group-hover:scale-105 transition-transform">
                  <Printer className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700">
                    Print Department
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Flex, Eco-solvent, Xerox, Ishanee
                  </div>
                </div>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Direct Calling */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:7363073330"
                className="p-2 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200/80 flex items-center justify-center gap-1.5 text-xs font-bold text-slate-800 transition-colors"
                title="Customer Care"
              >
                <Phone className="w-3 h-3 text-amber-600" />
                <span>Care 7363073330</span>
              </a>
              <a
                href="tel:9932321858"
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-700 transition-colors"
                title="Direct Office Hotline"
              >
                <Phone className="w-3 h-3 text-blue-600" />
                <span>9932321858</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/30 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 group relative"
        aria-label="Open WhatsApp live order desk"
        id="floating-whatsapp-btn"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-6 h-6 fill-current" />
        )}
      </button>
    </div>
  );
}
