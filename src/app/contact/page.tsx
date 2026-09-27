"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2,
  Palette,
  Printer
} from "lucide-react";

export default function ContactPage() {
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

    const waText = encodeURIComponent(
      `Hello Zero Graphics!\n*Website Inquiry*\n\n*Name:* ${formState.name}\n*Phone:* ${formState.phone}\n*Service:* ${formState.service}\n*Branch:* ${formState.branch}\n*Details:* ${formState.message || "Please call back"}`
    );

    window.open(`https://wa.me/917718101450?text=${waText}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-32 pb-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>Gateway of Purba Medinipur &bull; Mecheda</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Our Branches &amp; Contact Details
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Visit our two physical locations in Mecheda or connect instantly with our dedicated Design &amp; Print WhatsApp desks for fast order turnaround.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 2 Branches & Contacts */}
          <div className="lg:col-span-7 space-y-6">
            {/* Customer Care Callout */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold shadow-md shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block">
                    Dedicated Customer Care
                  </span>
                  <a href="tel:7363073330" className="text-2xl font-black text-slate-900 hover:text-amber-700">
                    73630 73330
                  </a>
                  <p className="text-xs text-slate-600 mt-0.5">Quick order status, quotations &amp; support</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://www.instagram.com/zerographics_mecheda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-pink-200 text-pink-700 hover:bg-pink-50 transition-colors text-xs font-bold shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Insta: zerographics_mecheda</span>
                </a>
              </div>
            </div>

            {/* Branch 1: Head Office & Main Workshop */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-blue-300 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                    Unit 1 &bull; Head Office &amp; Printing Workshop
                  </span>
                  <h2 className="text-xl font-bold text-slate-900 mt-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
                    Mecheda Thermal More
                  </h2>
                </div>
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Mecheda Thermal More (1st Floor), Shantipur, Mecheda, Purba Medinipur, West Bengal &ndash; 721137
              </p>

              <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Direct Telephone:</span>
                  <a href="tel:9932321858" className="text-slate-900 font-bold hover:text-blue-600">
                    +91 99323 21858
                  </a>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Head Office Email:</span>
                  <a href="mailto:zerographicsmca@gmail.com" className="text-blue-600 font-semibold hover:underline">
                    zerographicsmca@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Branch 2: Branch Office & Sales Counter */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-rose-300 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
                    Unit 2 &bull; Branch Office &amp; Sales Counter
                  </span>
                  <h2 className="text-xl font-bold text-slate-900 mt-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-rose-600 shrink-0" />
                    Mecheda Bus Stand Market
                  </h2>
                </div>
                <div className="p-2.5 rounded-xl bg-rose-50 text-rose-600">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Mecheda Bus Stand (Santipur New Market, 1st Floor), Shantipur, Mecheda, Purba Medinipur, West Bengal &ndash; 721137
              </p>

              <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Branch Landline:</span>
                  <a href="tel:03228457504" className="text-slate-900 font-bold hover:text-rose-600">
                    03228-457504
                  </a>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Ishanee Envelope Counter:</span>
                  <span className="text-rose-700 font-bold">Wholesale &amp; Retail Ready Stock</span>
                </div>
              </div>
            </div>

            {/* Direct Department WhatsApp Desks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://wa.me/917478949343?text=Hello%20Zero%20Graphics!%20Design%20inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 shadow-sm transition-all flex items-center gap-3.5 group"
              >
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600">
                    Design Desk WhatsApp
                  </div>
                  <div className="text-xs text-slate-500 font-medium">+91 74789 49343</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Artworks &amp; Bengali fonts</div>
                </div>
              </a>

              <a
                href="https://wa.me/917718101450?text=Hello%20Zero%20Graphics!%20Print%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 shadow-sm transition-all flex items-center gap-3.5 group"
              >
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Printer className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-600">
                    Print Desk WhatsApp
                  </div>
                  <div className="text-xs text-slate-500 font-medium">+91 77181 01450</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Flex, Eco-solvent, Digital press</div>
                </div>
              </a>
            </div>

            {/* Email Directory */}
            <div className="p-5 rounded-2xl bg-slate-100 border border-slate-200/80 text-xs space-y-2">
              <span className="font-bold text-slate-800 block">Departmental Email Directory:</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div>
                  <span className="text-slate-500 block">General Office:</span>
                  <a href="mailto:zerographicsmca@gmail.com" className="text-blue-600 font-medium hover:underline">
                    zerographicsmca@gmail.com
                  </a>
                </div>
                <div>
                  <span className="text-slate-500 block">Digital Printing:</span>
                  <a href="mailto:digitalzerographics@gmail.com" className="text-blue-600 font-medium hover:underline">
                    digitalzerographics@gmail.com
                  </a>
                </div>
                <div>
                  <span className="text-slate-500 block">Flex Printing:</span>
                  <a href="mailto:flexzerographics@gmail.com" className="text-blue-600 font-medium hover:underline">
                    flexzerographics@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Callback & Booking Form */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Direct Job &amp; Callback Form
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Submit your specs and we will forward them to the production desk.
              </p>

              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Forwarding to WhatsApp!</h4>
                  <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                    Your details have been pre-filled into our production chat for instant confirmation.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-5 text-xs text-blue-600 font-bold hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Name / Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Rahul Bhowmik"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="e.g. 9832XXXXXX"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Service
                      </label>
                      <select
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-blue-500"
                      >
                        <option value="Flex print">Flex Print (Konica 512i)</option>
                        <option value="Eco solvent print">Eco Solvent Print</option>
                        <option value="Digital print">Digital Print</option>
                        <option value="Photo print">Photo Print (Oily DocuColor)</option>
                        <option value="Pvc card print">PVC ID Card Print</option>
                        <option value="Envelope print">Ishanee Envelopes</option>
                        <option value="Digital offset print">Digital Offset</option>
                        <option value="Pre ink stamp">Pre-Ink Stamp</option>
                        <option value="Jumbo xerox">Jumbo Xerox / CAD</option>
                        <option value="Lamination & Spiral">Lamination &amp; Spiral</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Pickup Location
                      </label>
                      <select
                        value={formState.branch}
                        onChange={(e) => setFormState({ ...formState, branch: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-blue-500"
                      >
                        <option value="Thermal More Workshop">Thermal More (Head)</option>
                        <option value="Bus Stand Market Counter">Bus Stand Market</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Job Details / Dimensions / Quantity
                    </label>
                    <textarea
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="e.g. 10x4 ft Star Flex banner with eyelets for store inaugurations..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send to WhatsApp Print Queue</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Facebook Live Feed & Community Section */}
      <section className="py-14 bg-slate-100/70 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:max-w-xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Live Facebook Feed</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Connect With Zero Graphics on Facebook
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Check out our live printing videos, customer spotlight reviews, recent wedding envelope collections, and high-speed Konica 512i banner runs.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.facebook.com/864053123707055?ref=embed_page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Open Facebook Page</span>
                </a>

                <a
                  href="https://www.instagram.com/zerographics_mecheda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-pink-50 border border-pink-200 hover:bg-pink-100 text-pink-700 font-bold text-xs transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram @zerographics_mecheda</span>
                </a>
              </div>
            </div>

            {/* Embedded Facebook Page Iframe */}
            <div className="w-full sm:w-[360px] md:w-[380px] flex justify-center bg-slate-50 p-2 sm:p-3 rounded-2xl border border-slate-200 shadow-inner overflow-hidden">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F864053123707055&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="340"
                height="500"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="rounded-xl shadow-md w-full max-w-[340px] bg-white"
                title="Zero Graphics Official Facebook Page"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
