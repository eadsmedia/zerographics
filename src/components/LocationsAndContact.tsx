"use client";

import React, { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Building2, 
  ExternalLink 
} from "lucide-react";

export default function LocationsAndContact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    service: "Flex print",
    branch: "Thermal More",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) return;

    // Send formatted message via WhatsApp
    const waText = encodeURIComponent(
      `Hello Zero Graphics!\n*Website Inquiry*\n\n*Name:* ${formState.name}\n*Phone:* ${formState.phone}\n*Service:* ${formState.service}\n*Preferred Location:* ${formState.branch}\n*Message:* ${formState.message || "Please call back with quote"}`
    );

    window.open(`https://wa.me/917718101450?text=${waText}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#090d18] border-t border-white/10">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[500px] bg-fuchsia-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-fuchsia-400 mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>2 Strategic Locations in Mecheda</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Visit Our Offices &amp;{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
              Printing Workshop
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Conveniently situated at the gateway of Purba Medinipur, catering to clients from Purba Medinipur, Paschim Medinipur, and Howrah.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: 2 Locations & Contact Details */}
          <div className="lg:col-span-7 space-y-6">
            {/* Location 1: Head Office & Workshop */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-cyan-500/30 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    Head Office &amp; Main Workshop
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1.5 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                    Mecheda Thermal More
                  </h3>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 text-cyan-400">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Mecheda Thermal More (1st Floor), Shantipur, Mecheda, Purba Medinipur, West Bengal &ndash; 721137
              </p>

              <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px]">Primary Workshop Phone</span>
                  <a href="tel:9932321858" className="text-white font-bold hover:text-cyan-400 transition-colors">
                    +91 99323 21858
                  </a>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Main Operations Email</span>
                  <a href="mailto:zerographicsmca@gmail.com" className="text-cyan-300 font-medium hover:underline">
                    zerographicsmca@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Location 2: Branch Office & Sales Counter */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-fuchsia-500/30 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30">
                    Branch Office &amp; Sales Counter
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1.5 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-fuchsia-400 shrink-0" />
                    Mecheda Bus Stand Counter
                  </h3>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 text-fuchsia-400">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Mecheda Bus Stand (Santipur New Market, 1st Floor), Shantipur, Mecheda, Purba Medinipur, West Bengal &ndash; 721137
              </p>

              <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px]">Branch Landline</span>
                  <a href="tel:03228457504" className="text-white font-bold hover:text-fuchsia-400 transition-colors">
                    03228-457504
                  </a>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Ishanee Envelopes Desk</span>
                  <span className="text-amber-300 font-medium">Wholesale &amp; Retail Counter</span>
                </div>
              </div>
            </div>

            {/* Department Direct Contacts Bar */}
            <div className="glass-card rounded-2xl p-5 border border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://wa.me/917478949343?text=Hi%20Zero%20Graphics!%20Design%20Inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-fuchsia-500/10 border border-white/10 hover:border-fuchsia-500/30 transition-all flex items-center gap-3 group"
              >
                <div className="p-2 rounded-lg bg-fuchsia-500/20 text-fuchsia-400">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-fuchsia-300">
                    Design Desk WhatsApp
                  </div>
                  <div className="text-[11px] text-slate-400">+91 74789 49343</div>
                </div>
              </a>

              <a
                href="https://wa.me/917718101450?text=Hi%20Zero%20Graphics!%20Print%20Order"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 transition-all flex items-center gap-3 group"
              >
                <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-cyan-300">
                    Print Desk WhatsApp
                  </div>
                  <div className="text-[11px] text-slate-400">+91 77181 01450</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Booking / Inquiry Form */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-7 sm:p-8 border border-white/15 shadow-2xl relative">
              <h3 className="text-xl font-bold text-white mb-1">
                Quick Job / Quote Request
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Send your print requirements directly to our production queue.
              </p>

              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Opening WhatsApp!</h4>
                  <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                    Your inquiry details have been forwarded to our WhatsApp production desk for instant review.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs text-cyan-400 hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Your Name / Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Suman Sen / Art Studio"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-fuchsia-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="e.g. 98XXXXXXXX"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-fuchsia-400"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Service
                      </label>
                      <select
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#0a0f1d] border border-white/10 text-white text-xs focus:outline-none focus:border-fuchsia-400"
                      >
                        <option value="Flex print">Flex Print (Konica 512i)</option>
                        <option value="Eco solvent print">Eco Solvent Print</option>
                        <option value="Digital print">Digital Print</option>
                        <option value="Photo print">Photo Print</option>
                        <option value="Pvc card print">PVC Card Print</option>
                        <option value="Envelope print">Envelope (Ishanee)</option>
                        <option value="Digital offset print">Digital Offset</option>
                        <option value="Pre ink stamp">Pre-Ink Stamp</option>
                        <option value="Jumbo xerox">Jumbo Xerox / CAD</option>
                        <option value="Lamination & Spiral">Lamination &amp; Spiral</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Pickup Branch
                      </label>
                      <select
                        value={formState.branch}
                        onChange={(e) => setFormState({ ...formState, branch: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#0a0f1d] border border-white/10 text-white text-xs focus:outline-none focus:border-fuchsia-400"
                      >
                        <option value="Thermal More Workshop">Thermal More (Head)</option>
                        <option value="Bus Stand Market Counter">Bus Stand Market</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Specifications / Quantity / Size
                    </label>
                    <textarea
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="e.g. 10x4 ft Star flex banner needed for store opening..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-fuchsia-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 hover:from-fuchsia-500 hover:to-indigo-500 shadow-xl shadow-fuchsia-600/25 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to Production Desk</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
