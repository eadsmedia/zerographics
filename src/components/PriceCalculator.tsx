"use client";

import React, { useState } from "react";
import { 
  Calculator, 
  MessageSquare, 
  Sparkles, 
  Check, 
  HelpCircle, 
  ChevronRight,
  Printer,
  RotateCcw
} from "lucide-react";
import confetti from "canvas-confetti";

export default function PriceCalculator() {
  const [selectedService, setSelectedService] = useState<string>("flex");
  
  // Flex State
  const [flexWidth, setFlexWidth] = useState<number>(6);
  const [flexHeight, setFlexHeight] = useState<number>(3);
  const [flexQty, setFlexQty] = useState<number>(1);
  const [flexType, setFlexType] = useState<string>("normal"); // normal, star, blackout, backlit
  
  // Eco Solvent State
  const [ecoWidth, setEcoWidth] = useState<number>(4);
  const [ecoHeight, setEcoHeight] = useState<number>(2);
  const [ecoQty, setEcoQty] = useState<number>(1);
  const [ecoType, setEcoType] = useState<string>("vinyl"); // vinyl, translite, standee
  
  // Digital Print State
  const [digitalQty, setDigitalQty] = useState<number>(50);
  const [digitalPaper, setDigitalPaper] = useState<string>("170gsm");
  const [digitalSides, setDigitalSides] = useState<string>("single");

  // PVC Card State
  const [pvcQty, setPvcQty] = useState<number>(20);
  const [includeLanyard, setIncludeLanyard] = useState<boolean>(true);

  // Ishanee Envelopes
  const [envelopeType, setEnvelopeType] = useState<string>("wedding");
  const [envelopeQty, setEnvelopeQty] = useState<number>(100);

  // Calculation Logic
  const calculateTotal = () => {
    let price = 0;
    let details = "";

    if (selectedService === "flex") {
      const sqft = flexWidth * flexHeight;
      let rate = 12; // Normal flex per sqft
      if (flexType === "star") rate = 18;
      if (flexType === "blackout") rate = 22;
      if (flexType === "backlit") rate = 35;
      
      const singlePrice = Math.max(sqft * rate, 50);
      price = singlePrice * flexQty;
      details = `Flex (${flexType.toUpperCase()}) ${flexWidth}ft x ${flexHeight}ft (${sqft} sq.ft) x ${flexQty} pcs`;
    } else if (selectedService === "eco") {
      if (ecoType === "standee") {
        price = 850 * ecoQty; // Standee with stand complete set
        details = `Eco-Solvent Roll-up Standee 6x2.5ft (with Aluminium Stand) x ${ecoQty} pcs`;
      } else {
        const sqft = ecoWidth * ecoHeight;
        const rate = ecoType === "translite" ? 65 : 35;
        const singlePrice = Math.max(sqft * rate, 80);
        price = singlePrice * ecoQty;
        details = `Eco-Solvent (${ecoType === "translite" ? "Translite Glowsign" : "HD Vinyl"}) ${ecoWidth}ft x ${ecoHeight}ft (${sqft} sq.ft) x ${ecoQty} pcs`;
      }
    } else if (selectedService === "digital") {
      let unitRate = 8; // standard A4 sheet single side
      if (digitalPaper === "300gsm") unitRate = 14;
      if (digitalPaper === "170gsm") unitRate = 10;
      if (digitalSides === "double") unitRate *= 1.7;

      // Volume discount
      if (digitalQty >= 100) unitRate *= 0.85;
      if (digitalQty >= 500) unitRate *= 0.75;

      price = Math.round(unitRate * digitalQty);
      details = `Digital Print A4 (${digitalPaper}, ${digitalSides} side) x ${digitalQty} sheets`;
    } else if (selectedService === "pvc") {
      let unitRate = 40;
      if (includeLanyard) unitRate += 25; // Lanyard & case
      if (pvcQty >= 50) unitRate -= 5;
      if (pvcQty >= 100) unitRate -= 8;

      price = unitRate * pvcQty;
      details = `PVC ID Cards (${includeLanyard ? "With Lanyard & Holder" : "Card Only"}) x ${pvcQty} cards`;
    } else if (selectedService === "envelope") {
      let unitRate = 4.5;
      if (envelopeType === "wedding") unitRate = 6.5;
      if (envelopeType === "annaprashan") unitRate = 5.5;
      if (envelopeType === "luxury") unitRate = 9.0;

      // Wholesale bulk
      if (envelopeQty >= 500) unitRate *= 0.8;

      price = Math.round(unitRate * envelopeQty);
      details = `Ishanee Brand Designer Envelopes (${envelopeType.toUpperCase()}) x ${envelopeQty} pcs`;
    }

    return { total: Math.round(price), details };
  };

  const { total, details } = calculateTotal();

  const handleWhatsAppQuote = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
      });
    } catch (e) {
      // ignore
    }

    const message = encodeURIComponent(
      `Hello Zero Graphics! I used your online Price Estimator:\n\n*Estimated Service:* ${details}\n*Approximate Quote:* ₹${total.toLocaleString(
        "en-IN"
      )}\n\nPlease confirm the order details and turnaround time.`
    );
    window.open(`https://wa.me/917718101450?text=${message}`, "_blank");
  };

  return (
    <section id="calculator" className="py-24 relative overflow-hidden bg-[#07090e]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-cyan-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Quotation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Instant Print{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
              Price Estimator
            </span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Select your service, choose dimensions or quantities, and get an estimated rate instantly. Directly send it to our WhatsApp desk for fast turnaround.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="mt-12 glass-card rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl">
          {/* Service Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pb-6 border-b border-white/10">
            {[
              { id: "flex", label: "Flex Banner" },
              { id: "eco", label: "Eco-Solvent" },
              { id: "digital", label: "Digital Sheets" },
              { id: "pvc", label: "PVC Cards" },
              { id: "envelope", label: "Ishanee Envelopes" },
            ].map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedService(s.id)}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center ${
                  selectedService === s.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 border border-cyan-400/40"
                    : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Inputs Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* FLEX INPUTS */}
              {selectedService === "flex" && (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Width (Feet)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="100"
                        value={flexWidth}
                        onChange={(e) => setFlexWidth(Number(e.target.value) || 1)}
                        className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Height (Feet)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={flexHeight}
                        onChange={(e) => setFlexHeight(Number(e.target.value) || 1)}
                        className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Quantity
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="500"
                        value={flexQty}
                        onChange={(e) => setFlexQty(Number(e.target.value) || 1)}
                        className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-2">
                      Media Grade
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: "normal", name: "Normal Flex", note: "Standard Event" },
                        { id: "star", name: "Star Flex", note: "Glossy Heavy" },
                        { id: "blackout", name: "Blackout Flex", note: "Zero Show-Through" },
                        { id: "backlit", name: "Backlit Board", note: "Glowsign Box" },
                      ].map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setFlexType(t.id)}
                          className={`p-2.5 rounded-xl text-left border text-xs transition-all ${
                            flexType === t.id
                              ? "bg-cyan-500/20 border-cyan-400 text-white"
                              : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                          }`}
                        >
                          <div className="font-bold">{t.name}</div>
                          <div className="text-[10px] text-slate-400">{t.note}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* ECO SOLVENT INPUTS */}
              {selectedService === "eco" && (
                <>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-2">
                      Application Type
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: "vinyl", label: "HD Vinyl Sticker", sub: "Gloss / Matte" },
                        { id: "translite", label: "Translite Film", sub: "Backlit LED" },
                        { id: "standee", label: "Roll-up Standee", sub: "With Stand Set" },
                      ].map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setEcoType(t.id)}
                          className={`p-2.5 rounded-xl text-left border text-xs transition-all ${
                            ecoType === t.id
                              ? "bg-emerald-500/20 border-emerald-400 text-white"
                              : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                          }`}
                        >
                          <div className="font-bold">{t.label}</div>
                          <div className="text-[10px] text-slate-400">{t.sub}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {ecoType !== "standee" ? (
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          Width (Feet)
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="50"
                          value={ecoWidth}
                          onChange={(e) => setEcoWidth(Number(e.target.value) || 1)}
                          className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          Height (Feet)
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="10"
                          value={ecoHeight}
                          onChange={(e) => setEcoHeight(Number(e.target.value) || 1)}
                          className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          Quantity
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="100"
                          value={ecoQty}
                          onChange={(e) => setEcoQty(Number(e.target.value) || 1)}
                          className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Number of Complete Standee Units
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="50"
                        value={ecoQty}
                        onChange={(e) => setEcoQty(Number(e.target.value) || 1)}
                        className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  )}
                </>
              )}

              {/* DIGITAL PRINT INPUTS */}
              {selectedService === "digital" && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Print Quantity (Sheets)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="5000"
                        value={digitalQty}
                        onChange={(e) => setDigitalQty(Number(e.target.value) || 1)}
                        className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Print Sides
                      </label>
                      <select
                        value={digitalSides}
                        onChange={(e) => setDigitalSides(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-[#0e1628] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                      >
                        <option value="single">Single Sided Print</option>
                        <option value="double">Double Sided (Duplex)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-2">
                      Paper Weight / GSM
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: "130gsm", label: "130 GSM Art Paper", sub: "Standard Leaflet" },
                        { id: "170gsm", label: "170 GSM Premium", sub: "Brochures / Menus" },
                        { id: "300gsm", label: "300 GSM Heavy Board", sub: "Visiting / Certificates" },
                      ].map((p) => (
                        <button
                          key={p.id}
                          onClick={() => setDigitalPaper(p.id)}
                          className={`p-2.5 rounded-xl text-left border text-xs transition-all ${
                            digitalPaper === p.id
                              ? "bg-fuchsia-500/20 border-fuchsia-400 text-white"
                              : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                          }`}
                        >
                          <div className="font-bold">{p.label}</div>
                          <div className="text-[10px] text-slate-400">{p.sub}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* PVC CARDS INPUTS */}
              {selectedService === "pvc" && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Card Quantity
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="5000"
                        value={pvcQty}
                        onChange={(e) => setPvcQty(Number(e.target.value) || 1)}
                        className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Accessories Included
                      </label>
                      <button
                        onClick={() => setIncludeLanyard(!includeLanyard)}
                        className={`w-full py-2.5 px-3 rounded-xl border text-xs font-semibold flex items-center justify-between transition-colors ${
                          includeLanyard
                            ? "bg-blue-500/20 border-blue-400 text-blue-200"
                            : "bg-white/5 border-white/10 text-slate-400"
                        }`}
                      >
                        <span>Printed Lanyard + Transparent Case</span>
                        <span className="font-bold">{includeLanyard ? "YES (+₹25)" : "NO"}</span>
                      </button>
                    </div>
                  </div>
                </>
              )}

              {/* ISHANEE ENVELOPES INPUTS */}
              {selectedService === "envelope" && (
                <>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-2">
                      Ishanee Brand Category
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: "wedding", label: "Wedding / Amantranlipi", sub: "Royal Foil Motifs" },
                        { id: "annaprashan", label: "Annaprashan Special", sub: "Auspicious Rice Ceremony" },
                        { id: "luxury", label: "Luxury Velvet Series", sub: "Metallic / Gold Seal" },
                      ].map((e) => (
                        <button
                          key={e.id}
                          onClick={() => setEnvelopeType(e.id)}
                          className={`p-2.5 rounded-xl text-left border text-xs transition-all ${
                            envelopeType === e.id
                              ? "bg-amber-500/20 border-amber-400 text-white"
                              : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                          }`}
                        >
                          <div className="font-bold">{e.label}</div>
                          <div className="text-[10px] text-slate-400">{e.sub}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Quantity (Pieces)
                    </label>
                    <input
                      type="number"
                      min="50"
                      step="50"
                      value={envelopeQty}
                      onChange={(e) => setEnvelopeQty(Number(e.target.value) || 50)}
                      className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                    />
                    <div className="text-[11px] text-slate-400 mt-1">
                      Wholesale discounts automatically applied for 500+ pieces.
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl p-6 border border-white/15 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Estimated Summary
                </div>
                <div className="text-sm font-semibold text-white leading-snug">
                  {details}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="text-xs text-slate-400">Estimated Total Rate</div>
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300 mt-1">
                    ₹{total.toLocaleString("en-IN")}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    *Approximate quote. Exact price may vary with complex design setups or urgent delivery.
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-2.5">
                <button
                  onClick={handleWhatsAppQuote}
                  className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
                  id="calc-send-whatsapp"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Send Quote to WhatsApp Desk</span>
                </button>

                <div className="text-center text-[10px] text-slate-400">
                  Instant confirmation &bull; File upload guidance on WhatsApp
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
