import React from "react";
import { Star, Eye, ShieldAlert, Sparkles } from "lucide-react";

export default function ConceptSlogan() {
  return (
    <section
      id="concept"
      className="bg-brand-cream text-brand-navy py-16 sm:py-24 px-4 sm:px-8 border-b border-brand-cream/20"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-brand-terracotta text-xs font-sans font-bold tracking-[0.3em] uppercase block mb-1">
            CONCEPT & SLOGAN DEVELOPMENT
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy tracking-tight mt-2">
            Creating an Identity
          </h2>
          <div className="h-[2px] w-16 bg-brand-terracotta mx-auto mt-4" />
        </div>

        {/* Block 1 — The Concept (left-aligned, 60% width equivalent) */}
        <div className="max-w-3xl flex flex-col gap-4">
          <span className="text-brand-terracotta text-xs font-sans font-semibold tracking-widest uppercase">
            01 / THE CORE CONCEPT
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-brand-navy font-bold leading-tight">
            The Unwritten Summer
          </h3>
          <p className="text-brand-navy/85 font-sans text-sm sm:text-base leading-relaxed tracking-wide font-light mt-2">
            Born from a simple truth: empty calendars are the most valuable ones. This concept positions
            Estrella Damm not simply as a beverage product, but as an authentic philosophy — an open invitation
            to stop filling every hour with scheduled metrics, set aside planning pressure, and start living every spontaneous moment.
          </p>
        </div>

        {/* Block 2 — The Slogan (full width, centred, maximum visual impact) */}
        <div className="w-full">
          <div className="text-center mb-4">
            <span className="text-brand-terracotta text-xs font-sans font-semibold tracking-widest uppercase">
              02 / THE CRITICAL TAGLINE
            </span>
          </div>
          
          {/* Terracotta Full-Width Band with mixed responsive display layout */}
          <div className="relative overflow-hidden bg-brand-terracotta text-white rounded-2xl shadow-xl py-10 sm:py-16 px-4 flex flex-col items-center justify-center my-4 group">
            {/* Background vector star elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-12 -translate-y-12 blur-md" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-12 translate-y-12 blur-md" />
            
            <h4 className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[130px] font-bold tracking-tight lowercase leading-none select-none drop-shadow-md text-brand-cream/90 transition-transform duration-700 group-hover:scale-102">
              "Let it flow."
            </h4>
            
            <p className="text-brand-cream text-xs sm:text-sm font-serif italic mt-5 tracking-[0.1em] text-center max-w-md border-t border-white/20 pt-4">
              Short. Powerful. Double meaning.
            </p>
          </div>
        </div>

        {/* Block 3 — Slogan Argumentation (two side-by-side dark cards #0F1F2E) */}
        <div className="flex flex-col gap-6">
          <div className="text-center sm:text-left">
            <span className="text-brand-terracotta text-xs font-sans font-semibold tracking-widest uppercase block mb-1">
              03 / DOUBLE ARGUMENTATION
            </span>
            <h4 className="font-serif text-2xl text-brand-navy font-bold">
              Why the Slogan Works
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
            {/* Card A: The Physical Flow */}
            <div className="bg-brand-navy text-white p-8 rounded-2xl border border-brand-cream/10 shadow-lg relative overflow-hidden group hover:border-brand-gold/40 transition-all duration-300 hover:scale-[1.01]">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/15 flex items-center justify-center border border-brand-gold/30">
                  <Star className="w-6 h-6 text-brand-gold fill-brand-gold/25" />
                </div>
                <div>
                  <span className="text-brand-gold/60 text-[10px] font-mono tracking-widest uppercase">TACTILE EXPERIENCE</span>
                  <h4 className="font-serif text-xl sm:text-2xl text-white font-semibold">The Physical Flow</h4>
                </div>
              </div>

              <p className="text-white/70 font-sans text-xs sm:text-sm leading-relaxed font-light">
                The cold, crisp beer poured into a warm glass. The physical motion of waves breaking along the golden shore.
                The Mediterranean as a living, organic, breathing rhythm. Flow as an environmental and sensory experience.
              </p>
              
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-brand-gold/3 rounded-full blur-2xl group-hover:bg-brand-gold/10 transition-colors duration-500" />
            </div>

            {/* Card B: The Psychological Flow */}
            <div className="bg-brand-navy text-white p-8 rounded-2xl border border-brand-cream/10 shadow-lg relative overflow-hidden group hover:border-brand-gold/40 transition-all duration-300 hover:scale-[1.01]">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/15 flex items-center justify-center border border-brand-gold/30">
                  <Sparkles className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <span className="text-brand-gold/60 text-[10px] font-mono tracking-widest uppercase">MENTAL SYNCHRONY</span>
                  <h4 className="font-serif text-xl sm:text-2xl text-white font-semibold">The Psychological Flow</h4>
                </div>
              </div>

              <p className="text-white/70 font-sans text-xs sm:text-sm leading-relaxed font-light">
                Inspired by Mihaly Csikszentmihalyi's cognitive psychology concept of Flow: a state where we are so completely
                immersed in the present activity, authentic conversations, and friendship that time, worries, and device-validation disappears.
              </p>

              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-brand-gold/3 rounded-full blur-2xl group-hover:bg-brand-gold/10 transition-colors duration-500" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
