"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { 
  Calculator, 
  MessageSquare, 
  Check, 
  HelpCircle, 
  Printer, 
  Sparkles,
  Info,
  Clock,
  RotateCcw
} from "lucide-react";
import confetti from "canvas-confetti";

export default function PricingPage() {
  const [selectedService, setSelectedService] = useState<string>("flex");
  
  // Flex State
  const [flexWidth, setFlexWidth] = useState<number>(6);
  const [flexHeight, setFlexHeight] = useState<number>(3);
  const [flexQty, setFlexQty] = useState<number>(1);
  const [flexType, setFlexType] = useState<string>("normal");
  
  // Eco Solvent State
  const [ecoWidth, setEcoWidth] = useState<number>(4);
  const [ecoHeight, setEcoHeight] = useState<number>(2);
  const [ecoQty, setEcoQty] = useState<number>(1);
  const [ecoType, setEcoType] = useState<string>("vinyl");
  
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

  // Pre-Ink Stamp State
  const [stampSize, setStampSize] = useState<string>("round30");
  const [stampQty, setStampQty] = useState<number>(1);

  // Calculation Logic
  const calculateTotal = () => {
    let price = 0;
    let details = "";

    if (selectedService === "flex") {
      const sqft = flexWidth * flexHeight;
      let rate = 12;
      if (flexType === "star") rate = 18;
      if (flexType === "blackout") rate = 22;
      if (flexType === "backlit") rate = 35;
      
      const singlePrice = Math.max(sqft * rate, 50);
      price = singlePrice * flexQty;
      details = `Flex Banner (${flexType.toUpperCase()}) ${flexWidth}ft x ${flexHeight}ft (${sqft} sq.ft) x ${flexQty} pcs`;
    } else if (selectedService === "eco") {
      if (ecoType === "standee") {
        price = 850 * ecoQty;
        details = `Eco-Solvent Roll-up Standee 6x2.5ft (with Aluminium Stand) x ${ecoQty} pcs`;
      } else {
        const sqft = ecoWidth * ecoHeight;
        const rate = ecoType === "translite" ? 65 : 35;
        const singlePrice = Math.max(sqft * rate, 80);
        price = singlePrice * ecoQty;
        details = `Eco-Solvent (${ecoType === "translite" ? "Translite Glowsign" : "HD Vinyl"}) ${ecoWidth}ft x ${ecoHeight}ft (${sqft} sq.ft) x ${ecoQty} pcs`;
      }
    } else if (selectedService === "digital") {
      let unitRate = 8;
      if (digitalPaper === "300gsm") unitRate = 14;
      if (digitalPaper === "170gsm") unitRate = 10;
      if (digitalSides === "double") unitRate *= 1.7;

      if (digitalQty >= 100) unitRate *= 0.85;
      if (digitalQty >= 500) unitRate *= 0.75;

      price = Math.round(unitRate * digitalQty);
      details = `Digital Print A4 (${digitalPaper}, ${digitalSides} side) x ${digitalQty} sheets`;
    } else if (selectedService === "pvc") {
      let unitRate = 40;
      if (includeLanyard) unitRate += 25;
      if (pvcQty >= 50) unitRate -= 5;
      if (pvcQty >= 100) unitRate -= 8;

      price = unitRate * pvcQty;
      details = `PVC ID Cards (${includeLanyard ? "With Lanyard & Holder" : "Card Only"}) x ${pvcQty} cards`;
    } else if (selectedService === "envelope") {
      let unitRate = 4.5;
      if (envelopeType === "wedding") unitRate = 6.5;
      if (envelopeType === "annaprashan") unitRate = 5.5;
      if (envelopeType === "luxury") unitRate = 9.0;

      if (envelopeQty >= 500) unitRate *= 0.8;

      price = Math.round(unitRate * envelopeQty);
      details = `Ishanee Brand Designer Envelopes (${envelopeType.toUpperCase()}) x ${envelopeQty} pcs`;
    } else if (selectedService === "stamp") {
      let unitRate = 220;
      if (stampSize === "round40") unitRate = 320;
      if (stampSize === "rect") unitRate = 280;
      if (stampSize === "pocket") unitRate = 350;

      price = unitRate * stampQty;
      details = `Pre-Ink Flash Rubber Stamp (${stampSize}) x ${stampQty} pcs`;
    }

    return { total: Math.round(price), details };
  };

  const { total, details } = calculateTotal();

  const handleWhatsAppQuote = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch (e) {
      // ignore
    }

    const message = encodeURIComponent(
      `Hello Zero Graphics! I used your online Price Estimator:\n\n*Service:* ${details}\n*Estimated Quote:* ₹${total.toLocaleString(
        "en-IN"
      )}\n\nPlease confirm availability and delivery timeframe.`
    );
    window.open(`https://wa.me/917718101450?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-32 pb-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-3">
              <Calculator className="w-3.5 h-3.5" />
              <span>Transparent &amp; Competitive Printing Estimates</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Instant Price Estimator
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Select your service, input dimensions or quantities, and generate an immediate cost estimate. Easily forward your configuration directly to our WhatsApp print desk for confirmation.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Body */}
      <section className="py-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10">
          {/* Service Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 pb-6 border-b border-slate-100">
            {[
              { id: "flex", label: "Flex Banner" },
              { id: "eco", label: "Eco-Solvent" },
              { id: "digital", label: "Digital Print" },
              { id: "pvc", label: "PVC Cards" },
              { id: "envelope", label: "Ishanee Envelopes" },
              { id: "stamp", label: "Pre-Ink Stamp" },
            ].map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedService(s.id)}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center ${
                  selectedService === s.id
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Inputs Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* FLEX INPUTS */}
              {selectedService === "flex" && (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Width (Feet)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="100"
                        value={flexWidth}
                        onChange={(e) => setFlexWidth(Number(e.target.value) || 1)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Height (Feet)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={flexHeight}
                        onChange={(e) => setFlexHeight(Number(e.target.value) || 1)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Quantity (Banners)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="500"
                        value={flexQty}
                        onChange={(e) => setFlexQty(Number(e.target.value) || 1)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      Media Grade
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: "normal", name: "Normal Flex", note: "Standard Event" },
                        { id: "star", name: "Star Flex", note: "Heavy Gloss" },
                        { id: "blackout", name: "Blackout Flex", note: "Zero Show-Through" },
                        { id: "backlit", name: "Backlit Board", note: "Glowsign Box" },
                      ].map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setFlexType(t.id)}
                          className={`p-3 rounded-xl text-left border text-xs transition-all ${
                            flexType === t.id
                              ? "bg-blue-50 border-blue-500 text-blue-900 font-bold"
                              : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                          }`}
                        >
                          <div className="font-bold">{t.name}</div>
                          <div className="text-[10px] text-slate-500">{t.note}</div>
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
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      Application Format
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: "vinyl", label: "HD Vinyl Sticker", sub: "Gloss / Matte" },
                        { id: "translite", label: "Translite Film", sub: "Backlit LED" },
                        { id: "standee", label: "Roll-up Standee", sub: "Complete with Stand" },
                      ].map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setEcoType(t.id)}
                          className={`p-3 rounded-xl text-left border text-xs transition-all ${
                            ecoType === t.id
                              ? "bg-emerald-50 border-emerald-500 text-emerald-900 font-bold"
                              : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                          }`}
                        >
                          <div className="font-bold">{t.label}</div>
                          <div className="text-[10px] text-slate-500">{t.sub}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {ecoType !== "standee" ? (
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Width (Feet)
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="50"
                          value={ecoWidth}
                          onChange={(e) => setEcoWidth(Number(e.target.value) || 1)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Height (Feet)
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="10"
                          value={ecoHeight}
                          onChange={(e) => setEcoHeight(Number(e.target.value) || 1)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Quantity
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="100"
                          value={ecoQty}
                          onChange={(e) => setEcoQty(Number(e.target.value) || 1)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Number of Complete Standee Units (with Aluminium Base)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="50"
                        value={ecoQty}
                        onChange={(e) => setEcoQty(Number(e.target.value) || 1)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
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
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Quantity (Sheets)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="5000"
                        value={digitalQty}
                        onChange={(e) => setDigitalQty(Number(e.target.value) || 1)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Print Sides
                      </label>
                      <select
                        value={digitalSides}
                        onChange={(e) => setDigitalSides(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-500"
                      >
                        <option value="single">Single Sided Print</option>
                        <option value="double">Double Sided (Duplex)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
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
                          className={`p-3 rounded-xl text-left border text-xs transition-all ${
                            digitalPaper === p.id
                              ? "bg-blue-50 border-blue-500 text-blue-900 font-bold"
                              : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                          }`}
                        >
                          <div className="font-bold">{p.label}</div>
                          <div className="text-[10px] text-slate-500">{p.sub}</div>
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
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Number of Cards
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="5000"
                        value={pvcQty}
                        onChange={(e) => setPvcQty(Number(e.target.value) || 1)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Lanyard &amp; Holder
                      </label>
                      <button
                        onClick={() => setIncludeLanyard(!includeLanyard)}
                        className={`w-full py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-between transition-colors ${
                          includeLanyard
                            ? "bg-blue-50 border-blue-500 text-blue-900"
                            : "bg-slate-50 border-slate-200 text-slate-600"
                        }`}
                      >
                        <span>Satin Lanyard + Clear Case</span>
                        <span>{includeLanyard ? "YES (+₹25)" : "NO"}</span>
                      </button>
                    </div>
                  </div>
                </>
              )}

              {/* ISHANEE ENVELOPES INPUTS */}
              {selectedService === "envelope" && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      Ishanee Brand Category
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: "wedding", label: "Wedding / Amantranlipi", sub: "Foil Motifs" },
                        { id: "annaprashan", label: "Annaprashan Special", sub: "Rice Ceremony" },
                        { id: "luxury", label: "Luxury Velvet Series", sub: "Gold Seal Accents" },
                      ].map((e) => (
                        <button
                          key={e.id}
                          onClick={() => setEnvelopeType(e.id)}
                          className={`p-3 rounded-xl text-left border text-xs transition-all ${
                            envelopeType === e.id
                              ? "bg-rose-50 border-rose-500 text-rose-900 font-bold"
                              : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                          }`}
                        >
                          <div className="font-bold">{e.label}</div>
                          <div className="text-[10px] text-slate-500">{e.sub}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Quantity (Pieces)
                    </label>
                    <input
                      type="number"
                      min="50"
                      step="50"
                      value={envelopeQty}
                      onChange={(e) => setEnvelopeQty(Number(e.target.value) || 50)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                    />
                    <div className="text-[11px] text-slate-500 mt-1">
                      Wholesale discounts automatically applied for 500+ pieces.
                    </div>
                  </div>
                </>
              )}

              {/* STAMPS INPUTS */}
              {selectedService === "stamp" && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      Stamp Size &amp; Style
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: "round30", label: "Round 30mm", sub: "Official Seal" },
                        { id: "round40", label: "Round 40mm", sub: "Large Authority Seal" },
                        { id: "rect", label: "Rectangular 3-Line", sub: "Doctor / Firm Name" },
                        { id: "pocket", label: "Pocket Folding Stamp", sub: "Mobile Professional" },
                      ].map((s) => (
                        <button
                          key={s.id}
                          onClick={() => setStampSize(s.id)}
                          className={`p-3 rounded-xl text-left border text-xs transition-all ${
                            stampSize === s.id
                              ? "bg-purple-50 border-purple-500 text-purple-900 font-bold"
                              : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                          }`}
                        >
                          <div className="font-bold">{s.label}</div>
                          <div className="text-[10px] text-slate-500">{s.sub}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Number of Stamp Units
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={stampQty}
                      onChange={(e) => setStampQty(Number(e.target.value) || 1)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                    />
                  </div>
                </>
              )}
            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">
                  Quotation Breakdown
                </div>
                <div className="text-sm font-bold text-slate-800 leading-snug">
                  {details}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200">
                  <div className="text-xs text-slate-500 font-semibold">Estimated Total</div>
                  <div className="text-4xl font-black text-blue-600 mt-1">
                    ₹{total.toLocaleString("en-IN")}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    *Taxes extra if applicable. Turnaround timeline confirmed upon receiving artwork files.
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col gap-3">
                <button
                  onClick={handleWhatsAppQuote}
                  className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-all flex items-center justify-center gap-2"
                  id="calc-page-whatsapp"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Send Quote to WhatsApp Desk</span>
                </button>

                <div className="text-center text-[11px] text-slate-500 font-medium">
                  Direct connection with print operators for instant approval
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
