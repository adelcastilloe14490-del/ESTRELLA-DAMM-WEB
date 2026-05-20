import React from "react";
import { ArrowRight, Play, ServerCrash } from "lucide-react";

export default function DigitalCTA() {
  return (
    <section 
      className="bg-brand-navy py-20 sm:py-28 px-4 sm:px-8 border-b border-brand-cream/10 relative overflow-hidden text-center"
    >
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center gap-6">
        
        {/* Uppercase gold label */}
        <span className="text-brand-gold text-xs font-sans font-bold tracking-[0.3em] uppercase block">
          ★ ACADEMIC PROJECT ★
        </span>

        {/* Serif white heading */}
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-semibold tracking-tight">
          The Full Campaign
        </h2>

        {/* Subtitle */}
        <p className="text-white/60 font-sans text-sm sm:text-lg max-w-xl mx-auto leading-relaxed">
          Explore the insight, the visuals, the film and the concept — all born from one simple, unwritten truth.
        </p>

        {/* CTA Amber Pill Button linking directly to Google Drive */}
        <div className="mt-4">
          <a
            href="https://drive.google.com/file/d/1rIcsbK3E_CdDqFMu5KYgjhDlWrB2cCRR/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-brand-gold hover:bg-brand-terracotta text-brand-navy hover:text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-widest py-4 px-8 sm:px-10 rounded-full shadow-[0_15px_35px_rgba(212,150,42,0.35)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Watch the Hero Film
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Project Authors Metadata Tag */}
        <div className="text-white/40 text-[10px] sm:text-xs font-sans mt-4">
          Developed by Carla Tomás, Mònica Ventura, Mariona Molera and Álvaro del Castillo.
        </div>
      </div>
    </section>
  );
}
