"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Phone, 
  MessageSquare, 
  Menu, 
  X, 
  ChevronDown, 
  Printer, 
  Palette
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [whatsAppDropdownOpen, setWhatsAppDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // EXACT MENU REQUESTED BY USER:
  // Home, About us, Services, Our Portfolio, Contact us
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Our Portfolio" },
    { href: "/contact", label: "Contact us" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
          : "bg-white border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-11 w-16 sm:w-20 shrink-0 transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Zero Graphics Official Logo"
                fill
                priority
                className="object-contain"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                ZERO GRAPHICS
              </span>
              <span className="text-[11px] font-semibold text-slate-600 tracking-wide uppercase flex items-center gap-1.5 -mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                Mecheda &bull; Since 2000
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors py-1 relative ${
                    active
                      ? "text-blue-600 font-bold"
                      : "hover:text-slate-900"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Customer Care Hotline */}
            <a
              href="tel:7363073330"
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors flex items-center gap-2 shadow-sm"
              title="Zero Graphics Customer Care"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>73630 73330</span>
            </a>

            {/* WhatsApp Dropdown */}
            <div className="relative">
              <button
                onClick={() => setWhatsAppDropdownOpen(!whatsAppDropdownOpen)}
                onBlur={() => setTimeout(() => setWhatsAppDropdownOpen(false), 200)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm shadow-emerald-600/20 transition-all flex items-center gap-2"
                id="whatsapp-header-dropdown"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp Order</span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${
                    whatsAppDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {whatsAppDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl p-2.5 shadow-xl border border-slate-200 z-50 animate-fade-in">
                  <div className="px-3 py-1.5 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Select Department
                  </div>

                  <a
                    href="https://wa.me/917478949343?text=Hello%20Zero%20Graphics!%20I%20have%20an%20artwork%20/%20design%20inquiry."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group mt-1"
                  >
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Palette className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        Design Desk
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold">
                          Artworks
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium">+91 74789 49343</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Bengali fonts, logos, layouts</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/917718101450?text=Hello%20Zero%20Graphics!%20I%20want%20to%20place%20a%20print%20order."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group mt-1"
                  >
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Printer className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        Print Desk
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">
                          High Speed
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium">+91 77181 01450</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Flex, Eco-solvent, Digital, Ishanee</div>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://wa.me/917718101450"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200"
              aria-label="Direct WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200"
              aria-label="Toggle navigation menu"
              id="mobile-nav-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-xl animate-fade-in">
          <nav className="flex flex-col gap-3 text-sm font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-lg transition-colors ${
                  isActive(link.href)
                    ? "bg-blue-50 text-blue-600 font-bold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href="https://wa.me/917478949343?text=Hello%20Zero%20Graphics!%20Design%20inquiry"
                className="w-full py-2.5 px-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold flex items-center justify-center gap-2"
              >
                <Palette className="w-4 h-4" /> WhatsApp Design Desk (+91 74789 49343)
              </a>
              <a
                href="https://wa.me/917718101450?text=Hello%20Zero%20Graphics!%20Print%20order"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm"
              >
                <Printer className="w-4 h-4" /> WhatsApp Print Desk (+91 77181 01450)
              </a>
              <a
                href="tel:9932321858"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-blue-600" /> Call Office: 9932321858
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
