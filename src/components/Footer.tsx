"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Sparkles, 
  Printer, 
  ArrowUp, 
  MessageSquare,
  Building2,
  Clock,
  ShieldCheck
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-20 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Zero Graphics Official Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                ZERO GRAPHICS
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Mecheda&apos;s pioneer digital printing press and creative design house since 2000. Equipped with high-speed Konica 512i Flex, Epson Eco-Solvent, Xerox DocuColor oily prints, and our proprietary Ishanee Brand envelopes.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-rose-300 font-semibold bg-rose-950/40 p-2.5 rounded-xl border border-rose-800/40">
              <Sparkles className="w-4 h-4 text-rose-400 shrink-0" />
              <span>Exclusive Makers of Ishanee Brand Colorful Envelopes</span>
            </div>
          </div>

          {/* Quick Links matching the menu (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Our Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* 12 Services Snapshot (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
              <Printer className="w-3.5 h-3.5 text-blue-400" />
              Core Capabilities
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <Link href="/services#flex-print" className="hover:text-white">
                  Flex Print (Konica 512i Head)
                </Link>
              </li>
              <li>
                <Link href="/services#eco-solvent-print" className="hover:text-white">
                  Eco Solvent Print (Epson 1440 DPI)
                </Link>
              </li>
              <li>
                <Link href="/services#digital-print" className="hover:text-white">
                  Digital Print (Konica Minolta Press)
                </Link>
              </li>
              <li>
                <Link href="/services#photo-print" className="hover:text-white">
                  Photo Print (Xerox DocuColor Oily)
                </Link>
              </li>
              <li>
                <Link href="/services#pvc-card-print" className="hover:text-white">
                  PVC Card Print (CR80 Smart IDs)
                </Link>
              </li>
              <li>
                <Link href="/ishanee-envelopes" className="text-rose-400 hover:underline font-semibold">
                  Envelope Print (Ishanee Brand)
                </Link>
              </li>
              <li>
                <Link href="/services#digital-offset-print" className="hover:text-white">
                  Digital Offset &amp; Leaflets
                </Link>
              </li>
              <li>
                <Link href="/services#pre-ink-stamp" className="hover:text-white">
                  Pre-Ink Flash Rubber Stamps
                </Link>
              </li>
              <li>
                <Link href="/services#bw-colour-xerox" className="hover:text-white">
                  B &amp; W, Colour Xerox
                </Link>
              </li>
              <li>
                <Link href="/services#jumbo-xerox" className="hover:text-white">
                  Jumbo Xerox (CAD Blueprints)
                </Link>
              </li>
              <li>
                <Link href="/services#lamination" className="hover:text-white">
                  Thermal &amp; Roll Lamination
                </Link>
              </li>
              <li>
                <Link href="/services#spiral-binding" className="hover:text-white">
                  Twin-Loop Spiral Binding
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations & Support (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Mecheda Locations
            </h4>

            <div className="text-xs text-slate-400 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-200">Head Office:</strong> Mecheda Thermal More (1st Floor), Shantipur &ndash; 721137
              </div>
            </div>

            <div className="text-xs text-slate-400 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-200">Branch Office:</strong> Mecheda Bus Stand (Santipur New Market, 1st Floor)
              </div>
            </div>

            <div className="pt-2 text-xs space-y-2 border-t border-slate-800">
              <div className="text-slate-400">
                Customer Care:{" "}
                <a href="tel:7363073330" className="text-amber-400 font-bold hover:underline">
                  73630 73330
                </a>
              </div>
              <div className="text-slate-400">
                Hotline:{" "}
                <a href="tel:9932321858" className="text-white font-bold hover:text-blue-400">
                  9932321858
                </a>{" "}
                / 03228-457504
              </div>
              <div className="text-slate-400">
                Design WhatsApp:{" "}
                <a href="https://wa.me/917478949343" className="text-blue-400 hover:underline">
                  7478949343
                </a>
              </div>
              <div className="text-slate-400">
                Print WhatsApp:{" "}
                <a href="https://wa.me/917718101450" className="text-emerald-400 hover:underline">
                  7718101450
                </a>
              </div>
              <div className="text-slate-400">
                Email:{" "}
                <a href="mailto:zerographicsmca@gmail.com" className="text-slate-300 hover:underline">
                  zerographicsmca@gmail.com
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://www.instagram.com/zerographics_mecheda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-950/60 border border-pink-700/50 text-pink-300 hover:bg-pink-900/60 transition-colors text-xs font-semibold"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>@zerographics_mecheda</span>
                </a>

                <a
                  href="https://www.facebook.com/864053123707055?ref=embed_page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-950/60 border border-blue-700/50 text-blue-300 hover:bg-blue-900/60 transition-colors text-xs font-semibold"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Zero Graphics. All rights reserved. Ishanee Brand is a registered brand of Zero Graphics.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
