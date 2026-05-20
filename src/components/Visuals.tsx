import React, { useState } from "react";
import { Layers, HelpCircle, Flame } from "lucide-react";
import { KeyVisual } from "../types";

export default function Visuals() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const visuals: KeyVisual[] = [
    {
      id: "visual-1",
      category: "OUT OF HOME",
      title: "Billboard",
      gradient: "linear-gradient(135deg, #8B3A2A 0%, #D4962A 100%)",
      textOverlay: "Escape in 15 Minutes — Estrella Damm. Est. 1876",
    },
    {
      id: "visual-2",
      category: "URBAN PLACEMENT",
      title: "Bus Stop",
      gradient: "linear-gradient(135deg, #C1654A 0%, #E8A94A 100%)",
      textOverlay: "Estrella Damm Mediterráneo — Street Activation",
    },
    {
      id: "visual-3",
      category: "PRINT MEDIA",
      title: "Press",
      gradient: "linear-gradient(135deg, #6B3220 0%, #C8793A 100%)",
      textOverlay: "Mediterranean state of mind — Brewed since 1876",
    },
  ];

  return (
    <section
      id="visuals"
      className="bg-brand-cream text-brand-navy py-16 sm:py-24 px-4 sm:px-8 border-b border-brand-cream/20"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-terracotta text-xs font-sans font-bold tracking-[0.3em] uppercase">
            THE CAMPAIGN
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-navy font-bold tracking-tight mt-2">
            Key Visuals
          </h2>
          <div className="h-[2px] w-16 bg-brand-terracotta mx-auto mt-4" />
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visuals.map((visual) => {
            const isHovered = activeCard === visual.id;
            return (
              <div
                key={visual.id}
                onMouseEnter={() => setActiveCard(visual.id)}
                onMouseLeave={() => setActiveCard(null)}
                className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[3/4] transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_40px_rgba(193,101,74,0.25)] border border-brand-navy/10 flex flex-col justify-between"
                style={{ background: visual.gradient }}
              >
                {/* Vintage overlay glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent z-10" />
                <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_60%,_rgba(0,0,0,0.3)_100%] z-10 pointer-events-none" />

                {/* Card Top: Small Metadata Tag */}
                <div className="p-6 relative z-20 flex justify-between items-center text-white/90">
                  <span className="text-[10px] font-mono tracking-widest uppercase bg-brand-navy/60 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {visual.category}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-white opacity-40 group-hover:opacity-100 group-hover:bg-brand-gold transition-all duration-300" />
                </div>

                {/* Card Center: Visual Statement */}
                <div className="px-8 text-center my-auto relative z-20 flex flex-col items-center gap-4">
                  <span className="text-white/40 text-[9px] font-mono tracking-wider uppercase">
                    PROPOSED PLACEMENT
                  </span>
                  
                  {/* Poster Text Placeholder styled elegantly */}
                  <div className="border border-white/20 px-4 py-8 rounded-lg bg-black/10 backdrop-blur-sm w-full">
                    <p className="font-serif italic text-white text-lg sm:text-xl drop-shadow-md">
                      "{visual.textOverlay}"
                    </p>
                  </div>
                </div>

                {/* Card Bottom: Metadata */}
                <div className="p-6 relative z-20 bg-gradient-to-t from-black/30 to-transparent flex flex-col gap-1 border-t border-white/10">
                  <span className="text-brand-gold font-sans text-[10px] font-bold tracking-widest uppercase">
                    {visual.category}
                  </span>
                  <h3 className="font-serif text-xl text-white font-semibold">
                    {visual.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Caption */}
        <p className="text-center italic font-serif text-brand-terracotta text-sm sm:text-base mt-10 max-w-3xl mx-auto leading-relaxed">
          "All visuals developed through 50+ AI iterations using Gemini — refined toward a <span className="font-medium">35mm film aesthetic</span> with warm Mediterranean light."
        </p>

        {/* Step 4 Context Insert below Cards */}
        <div className="mt-20 p-8 sm:p-10 rounded-2xl bg-brand-navy text-white shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-brand-cream/10 pb-6 mb-6">
            <div>
              <span className="text-brand-gold text-[10px] font-mono tracking-widest uppercase block mb-1">
                STRATEGIC ROADMAP
              </span>
              <h4 className="font-serif text-2xl text-brand-cream font-medium">
                Step 4: Evaluating Strategic Routes
              </h4>
            </div>
            <div className="bg-brand-gold/15 text-brand-gold text-xs font-semibold py-1.5 px-3.5 rounded-full border border-brand-gold/30">
              Selected Route: Route 2 — The Art of Flow
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Route 1 */}
            <div className="border border-brand-cream/10 bg-brand-cream/[0.02] p-5 rounded-xl opacity-60 hover:opacity-100 transition-opacity duration-300">
              <span className="text-white/40 text-xs font-mono">ROUTE 01 (DISCARDED)</span>
              <h5 className="font-serif text-lg text-brand-cream font-medium mt-1 mb-2">
                The Local Guardian
              </h5>
              <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed">
                Focused on local secrets and hidden spots off-the-beaten-track. Deemed too exclusive to connect universally.
              </p>
            </div>

            {/* Route 2 Selected */}
            <div className="border-2 border-brand-gold bg-brand-cream/[0.05] p-5 rounded-xl shadow-[0_10px_25px_rgba(214,150,42,0.1)] relative">
              <div className="absolute top-4 right-4 bg-brand-gold text-brand-navy rounded-full p-1">
                <Flame className="w-3.5 h-3.5" />
              </div>
              <span className="text-brand-gold text-xs font-mono font-bold">ROUTE 02 (SELECTED)</span>
              <h5 className="font-serif text-lg text-brand-gold font-bold mt-1 mb-2">
                The Art of Flow
              </h5>
              <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed">
                Focuses on the "fluidity" of the Mediterranean. An open-faced invitation to let the day decide for you; ensures cinematic visual coherence.
              </p>
            </div>

            {/* Route 3 */}
            <div className="border border-brand-cream/10 bg-brand-cream/[0.02] p-5 rounded-xl opacity-60 hover:opacity-100 transition-opacity duration-300">
              <span className="text-white/40 text-xs font-mono">ROUTE 03 (DISCARDED)</span>
              <h5 className="font-serif text-lg text-brand-cream font-medium mt-1 mb-2">
                Digital Detox
              </h5>
              <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed">
                Aggressively anti-technology. Rejected because it risks alienating younger hyper-connected demographics.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
