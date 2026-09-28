"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Building2, 
  Printer, 
  Layers, 
  Clock, 
  ChevronRight,
  Flame,
  Award
} from "lucide-react";

interface ShowcaseSlide {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  statBadge: string;
  statSub: string;
  colorName: string;
  accentBorder: string;
  pillColor: string;
  link: string;
  linkText: string;
}

const SHOWCASE_SLIDES: ShowcaseSlide[] = [
  {
    id: "konica",
    tag: "High-Speed Industrial Flex",
    title: "Konica 512i High-Speed Flex Monster",
    subtitle: "30-PicoLitre Japanese print-heads delivering heavy-duty hoardings at 1200 sq.ft/hr.",
    image: "/images/services/konica-flex-printer.jpg",
    statBadge: "1200 sq.ft / hr",
    statSub: "Ultra Throughput",
    colorName: "blue",
    accentBorder: "border-blue-500/30",
    pillColor: "bg-blue-600 text-white",
    link: "/machinery",
    linkText: "Konica Specs",
  },
  {
    id: "docucolor",
    tag: "Celebrated Color Quality",
    title: "Xerox DocuColor Oily Gloss Prints",
    subtitle: "Celebrated deep oily sheen on 300 GSM cardstock for luxury wedding albums, cards & posters.",
    image: "/images/services/photo-print.jpg",
    statBadge: "True Oily Gloss",
    statSub: "300 GSM Heavy",
    colorName: "emerald",
    accentBorder: "border-emerald-500/30",
    pillColor: "bg-emerald-600 text-white",
    link: "/services#photo-print",
    linkText: "Photo Print",
  },
  {
    id: "ishanee",
    tag: "Proprietary Brand",
    title: "Ishanee Designer Invitation Envelopes",
    subtitle: "Exquisite celebratory wedding, anniversary & baby-shower covers crafted in Mecheda.",
    image: "/images/services/envelope-print.jpg",
    statBadge: "50+ Designer Styles",
    statSub: "Direct Wholesale",
    colorName: "rose",
    accentBorder: "border-rose-500/30",
    pillColor: "bg-rose-600 text-white",
    link: "/ishanee-envelopes",
    linkText: "Ishanee Catalog",
  },
  {
    id: "ecosolvent",
    tag: "Ultra 1440 DPI Micro-Piezo",
    title: "Epson Eco-Solvent Vinyl & Glow Signs",
    subtitle: "Vibrant indoor/outdoor roll-up standees, translite lightbox films & vinyl wall murals.",
    image: "/images/services/eco-solvent-print.jpg",
    statBadge: "1440 DPI HD",
    statSub: "Weatherproof",
    colorName: "purple",
    accentBorder: "border-purple-500/30",
    pillColor: "bg-purple-600 text-white",
    link: "/services#eco-solvent-print",
    linkText: "Eco-Solvent",
  },
];

const ROTATING_WORDS = [
  { text: "Creative Artworks.", gradient: "from-blue-600 via-indigo-600 to-blue-700" },
  { text: "Konica 512i Flex.", gradient: "from-blue-600 via-cyan-600 to-indigo-600" },
  { text: "DocuColor Oily Gloss.", gradient: "from-emerald-600 via-teal-600 to-cyan-700" },
  { text: "Ishanee Envelopes.", gradient: "from-rose-600 via-pink-600 to-amber-600" },
  { text: "Eco-Solvent 1440 DPI.", gradient: "from-violet-600 via-purple-600 to-indigo-600" },
];

export default function Hero() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isFadingWord, setIsFadingWord] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, isHovered: false });
  const cardRef = useRef<HTMLDivElement>(null);

  // Rotating dynamic headline words
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setIsFadingWord(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setIsFadingWord(false);
      }, 250);
    }, 3200);

    return () => clearInterval(wordInterval);
  }, []);

  // Auto-cycle showcase slides when not hovered
  useEffect(() => {
    if (!isAutoPlaying) return;

    const slideInterval = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % SHOWCASE_SLIDES.length);
    }, 4800);

    return () => clearInterval(slideInterval);
  }, [isAutoPlaying]);

  // Interactive 3D tilt tracking on card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y, isHovered: true });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0, isHovered: false });
    setIsAutoPlaying(true);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const currentSlide = SHOWCASE_SLIDES[activeSlideIndex];
  const currentWord = ROTATING_WORDS[wordIndex];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-200">
      {/* Background Image with Layered Soft Wash */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero.jpg"
          alt="Zero Graphics Printing Workshop Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-85"
        />
        {/* Soft Multi-Stop Light Overlay for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/98 via-white/94 to-white/85 backdrop-blur-[3px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/95" />
      </div>

      {/* CMYK Magical Ambient Glow Orbs */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Cyan Aura (Top Left) */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-cyan-400/20 blur-[100px] animate-pulse-glow" />
        
        {/* Magenta Aura (Top Right) */}
        <div className="absolute top-1/4 right-0 w-[420px] h-[420px] rounded-full bg-rose-400/20 blur-[110px] animate-pulse-glow [animation-delay:2.5s]" />
        
        {/* Yellow Aura (Center/Bottom Left) */}
        <div className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-amber-300/15 blur-[90px] animate-pulse-glow [animation-delay:4s]" />
        
        {/* Key Blue Aura (Behind Showcase Card) */}
        <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-blue-500/15 blur-[100px] animate-pulse-glow [animation-delay:1.2s]" />

        {/* Studio Crop Registration Marks (Aesthetic Graphic Design Precision) */}
        <div className="hidden lg:block absolute top-28 left-8 text-slate-300 font-mono text-xs select-none">
          <span className="opacity-40">+ REG-01 (C,M,Y,K)</span>
        </div>
        <div className="hidden lg:block absolute top-28 right-8 text-slate-300 font-mono text-xs select-none">
          <span className="opacity-40">1440 DPI · HIGH-PRECISION +</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Shimmering Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200/90 text-xs font-bold text-blue-700 mb-6 shadow-sm backdrop-blur-md relative overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="w-2 h-2 rounded-full bg-blue-600 inline-block animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Gateway of Purba Medinipur &bull; Mecheda</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 font-semibold">Since 2000</span>
            </div>

            {/* Main Title with Dynamic Word Rotator */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
              Professional Digital Printing &amp;{" "}
              <span className="block mt-1 sm:mt-2 min-h-[1.25em]">
                <span
                  className={`inline-block transition-all duration-300 transform bg-clip-text text-transparent bg-gradient-to-r ${currentWord.gradient} ${
                    isFadingWord
                      ? "opacity-0 translate-y-2 scale-95"
                      : "opacity-100 translate-y-0 scale-100"
                  }`}
                >
                  {currentWord.text}
                </span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-5 text-base sm:text-lg text-slate-700 max-w-2xl leading-relaxed">
              Purba Medinipur&apos;s trusted printing hub. Powered by high-speed <strong className="text-slate-900 font-bold">Konica 512i Flex</strong>, <strong className="text-slate-900 font-bold">Epson Eco-Solvent</strong>, celebrated Xerox DocuColor oily prints, and our proprietary <strong className="text-rose-600 font-bold">Ishanee Brand</strong> colorful invitation envelopes.
            </p>

            {/* Interactive Feature Pills (Clicking syncs with showcase on the right!) */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full max-w-xl text-xs font-semibold">
              <button
                type="button"
                onClick={() => { setActiveSlideIndex(1); setIsAutoPlaying(false); }}
                className={`flex items-center gap-2 py-2 px-3 rounded-xl border text-left transition-all ${
                  activeSlideIndex === 1
                    ? "bg-emerald-50 border-emerald-300 text-emerald-800 shadow-sm ring-1 ring-emerald-300 scale-[1.02]"
                    : "bg-white/80 hover:bg-white border-slate-200/80 text-slate-800 hover:border-emerald-300 hover:shadow-sm"
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="truncate">DocuColor Oily Gloss</span>
              </button>

              <button
                type="button"
                onClick={() => { setActiveSlideIndex(0); setIsAutoPlaying(false); }}
                className={`flex items-center gap-2 py-2 px-3 rounded-xl border text-left transition-all ${
                  activeSlideIndex === 0
                    ? "bg-blue-50 border-blue-300 text-blue-800 shadow-sm ring-1 ring-blue-300 scale-[1.02]"
                    : "bg-white/80 hover:bg-white border-slate-200/80 text-slate-800 hover:border-blue-300 hover:shadow-sm"
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="truncate">Konica 512i Flex Head</span>
              </button>

              <button
                type="button"
                onClick={() => { setActiveSlideIndex(3); setIsAutoPlaying(false); }}
                className={`flex items-center gap-2 py-2 px-3 rounded-xl border text-left transition-all ${
                  activeSlideIndex === 3
                    ? "bg-purple-50 border-purple-300 text-purple-800 shadow-sm ring-1 ring-purple-300 scale-[1.02]"
                    : "bg-white/80 hover:bg-white border-slate-200/80 text-slate-800 hover:border-purple-300 hover:shadow-sm"
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                <span className="truncate">Epson Eco-Solvent HD</span>
              </button>

              <button
                type="button"
                onClick={() => { setActiveSlideIndex(2); setIsAutoPlaying(false); }}
                className={`flex items-center gap-2 py-2 px-3 rounded-xl border text-left transition-all ${
                  activeSlideIndex === 2
                    ? "bg-rose-50 border-rose-300 text-rose-800 shadow-sm ring-1 ring-rose-300 scale-[1.02]"
                    : "bg-white/80 hover:bg-white border-slate-200/80 text-slate-800 hover:border-rose-300 hover:shadow-sm"
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
                <span className="truncate">Ishanee Envelopes</span>
              </button>

              <div className="flex items-center gap-2 bg-white/70 py-2 px-3 rounded-xl border border-slate-200/80 text-slate-700 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="truncate">Same-Day Turnaround</span>
              </div>

              <div className="flex items-center gap-2 bg-white/70 py-2 px-3 rounded-xl border border-slate-200/80 text-slate-700 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="truncate">2 Mecheda Branches</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <Link
                href="/services"
                className="relative overflow-hidden w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 transition-all flex items-center justify-center gap-2 group"
                id="hero-view-services"
              >
                {/* Light Shimmer Sweep */}
                <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                <span>View All 12 Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="https://wa.me/917718101450?text=Hello%20Zero%20Graphics!%20I%20would%20like%20to%20order%20printing."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all flex items-center justify-center gap-2.5 group"
              >
                <div className="relative">
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
                </div>
                <span>Order via WhatsApp</span>
                <span className="text-[10px] bg-emerald-700/80 px-1.5 py-0.5 rounded text-emerald-100 font-medium">
                  ~5 min
                </span>
              </a>
            </div>

            {/* Regional Trust Bar */}
            <div className="mt-7 flex items-center gap-2.5 text-xs text-slate-600 font-semibold bg-white/70 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
              <span>
                Serving studios, agencies, print shops &amp; individuals across <strong className="text-slate-900">Purba &amp; Paschim Medinipur, Howrah</strong>.
              </span>
            </div>
          </div>

          {/* Right Column: Magical Interactive Showcase Card with 3D Parallax */}
          <div className="lg:col-span-5 relative">
            
            {/* CMYK Interactive Registration Ribbon */}
            <div className="flex items-center justify-between mb-3 px-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                  CMYK Precision Press
                </span>
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-xs" title="Cyan (C)" />
                  <span className="w-2.5 h-2.5 rounded-full bg-pink-500 shadow-xs" title="Magenta (M)" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-xs" title="Yellow (Y)" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-900 shadow-xs" title="Key Black (K)" />
                </div>
              </div>

              {/* Slide Counter / Live Indicator */}
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live Showcase ({activeSlideIndex + 1}/{SHOWCASE_SLIDES.length})</span>
              </div>
            </div>

            {/* 3D Tilt Card Container */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: mousePos.isHovered
                  ? `perspective(1000px) rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg) scale3d(1.015, 1.015, 1.015)`
                  : "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)",
                transition: mousePos.isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
              }}
              className="relative rounded-3xl overflow-hidden border border-slate-300/90 bg-white/95 p-3.5 shadow-2xl backdrop-blur-xl group"
            >
              {/* Specular Glare Reflection on Hover */}
              {mousePos.isHovered && (
                <div
                  className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300 rounded-3xl"
                  style={{
                    background: `radial-gradient(circle 320px at ${(mousePos.x + 0.5) * 100}% ${(mousePos.y + 0.5) * 100}%, rgba(255,255,255,0.45), transparent 70%)`,
                  }}
                />
              )}

              {/* Main Machine/Service Image Viewport */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-inner bg-slate-900">
                <Image
                  key={currentSlide.id}
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />

                {/* Subtle Vignette Gradient for Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />

                {/* Floating Glass Badge: Machine Metric (Top Right) */}
                <div className="absolute top-3.5 right-3.5 z-20 animate-float-slow">
                  <div className="bg-slate-950/80 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-2 text-white">
                    <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <div className="text-left">
                      <div className="text-[11px] font-black leading-none">{currentSlide.statBadge}</div>
                      <div className="text-[9px] text-slate-300 font-medium leading-none mt-0.5">{currentSlide.statSub}</div>
                    </div>
                  </div>
                </div>

                {/* Floating Glass Badge: 25+ Yrs Quality (Bottom Left) */}
                <div className="absolute bottom-3.5 left-3.5 z-20 animate-float-reverse">
                  <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1.5 text-slate-800">
                    <Award className="w-3.5 h-3.5 text-blue-600" />
                    <span className="text-[10px] font-bold">25+ Yrs Mecheda Craft</span>
                  </div>
                </div>

                {/* Slide Title Overlay at Bottom of Image */}
                <div className="absolute bottom-3.5 right-3.5 z-20 text-right">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-sm text-white border border-white/10">
                    {currentSlide.tag}
                  </span>
                </div>
              </div>

              {/* Slide Selector Tabs (4 Mini Tabs) */}
              <div className="grid grid-cols-4 gap-1.5 mt-3 pt-1 border-t border-slate-100">
                {SHOWCASE_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => {
                      setActiveSlideIndex(idx);
                      setIsAutoPlaying(false);
                    }}
                    className={`py-1.5 px-1 rounded-lg text-[11px] font-bold transition-all truncate text-center ${
                      activeSlideIndex === idx
                        ? "bg-slate-900 text-white shadow-sm ring-1 ring-slate-900"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {slide.id === "konica" && "Flex 512i"}
                    {slide.id === "docucolor" && "DocuColor"}
                    {slide.id === "ishanee" && "Ishanee"}
                    {slide.id === "ecosolvent" && "Eco-Solvent"}
                  </button>
                ))}
              </div>

              {/* Inset Information Footer with Tech Link */}
              <div className="mt-3 p-3 bg-slate-50/90 rounded-xl border border-slate-200/90 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping" />
                    <span>Mecheda Industrial Workshop</span>
                  </div>
                  <div className="text-slate-900 font-extrabold text-xs sm:text-sm mt-0.5 truncate">
                    {currentSlide.title}
                  </div>
                </div>

                <Link
                  href={currentSlide.link}
                  className="shrink-0 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-sm flex items-center gap-1"
                >
                  <span>{currentSlide.linkText}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Auto-Play Animated Progress Bar */}
              {isAutoPlaying && (
                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden mt-2.5">
                  <div
                    key={activeSlideIndex}
                    className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-500 transition-all duration-[4800ms] ease-linear w-full"
                    style={{
                      animation: "shimmerSweep 4.8s linear infinite",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 4 Interactive Metric Cards */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Card 1: 2000 Established */}
          <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />
            <div className="flex items-center justify-between">
              <span className="text-3xl sm:text-4xl font-black text-blue-600 tracking-tight">2000</span>
              <div className="p-2 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="text-xs font-bold text-slate-900 mt-2">Established in Mecheda</div>
            <div className="text-[11px] text-slate-500 mt-0.5">25+ years of continuous service</div>
          </div>

          {/* Card 2: 12+ Core Services */}
          <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:border-indigo-400 hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />
            <div className="flex items-center justify-between">
              <span className="text-3xl sm:text-4xl font-black text-indigo-600 tracking-tight">12+</span>
              <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Layers className="w-4 h-4" />
              </div>
            </div>
            <div className="text-xs font-bold text-slate-900 mt-2">Specialized Print Lines</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Flex, Eco-solvent, Digital, Stamps</div>
          </div>

          {/* Card 3: Ishanee Brand Envelopes */}
          <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:border-rose-400 hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />
            <div className="flex items-center justify-between">
              <span className="text-3xl sm:text-4xl font-black text-rose-600 tracking-tight">Ishanee</span>
              <div className="p-2 rounded-xl bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
            <div className="text-xs font-bold text-slate-900 mt-2">Designer Envelopes</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Wholesale &amp; Retail sales counter</div>
          </div>

          {/* Card 4: 2 Mecheda Branch Units */}
          <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:border-emerald-400 hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />
            <div className="flex items-center justify-between">
              <span className="text-3xl sm:text-4xl font-black text-emerald-600 tracking-tight">2 Units</span>
              <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Building2 className="w-4 h-4" />
              </div>
            </div>
            <div className="text-xs font-bold text-slate-900 mt-2">Strategic Branches</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Thermal More &amp; Bus Stand Market</div>
          </div>
        </div>
      </div>
    </section>
  );
}
