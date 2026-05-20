import React from "react";
import { Play, Film, Sparkles, Navigation } from "lucide-react";
import { StoryBeat } from "../types";

export default function HeroFilm() {
  const storyBeats: StoryBeat[] = [
    {
      id: "beat-1",
      num: "01",
      title: "The Plan",
      description: "A rigid, calendarfilled itinerary. Every hour mapped out. A pressure-loaded quest for summer excellence.",
    },
    {
      id: "beat-2",
      num: "02",
      title: "The Drift",
      description: "A missed shuttle. An improvised dinner table. A dark detour by the sea. Embracing a plan that goes delightfully offline.",
    },
    {
      id: "beat-3",
      num: "03",
      title: "The Flow",
      description: "Opening a crisp, cold Estrella Damm in great company. The spark that begins a magical night of unexpected moments.",
    },
  ];

  return (
    <section
      id="film"
      className="bg-brand-navy py-16 sm:py-24 px-4 sm:px-8 border-b border-brand-cream/10"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-brand-gold text-xs font-sans font-bold tracking-[0.3em] uppercase block mb-1">
            HERO FILM
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-semibold tracking-tight">
            Watch the Summer Flow
          </h2>
          <p className="text-white/60 font-sans text-sm sm:text-lg mt-3 font-light">
            From spontaneity to the sea. A story that was never scripted.
          </p>
          <div className="h-[2px] w-16 bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Video Player Interactive Simulator Card */}
        <a
          href="https://drive.google.com/file/d/1rIcsbK3E_CdDqFMu5KYgjhDlWrB2cCRR/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block w-full max-w-[900px] aspect-video rounded-2xl border-2 border-brand-gold/60 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)] group transform transition-all duration-500 hover:scale-[1.015] hover:border-brand-gold hover:shadow-[0_25px_60px_rgba(212,150,42,0.2)] mb-12"
        >
          {/* Sunset Gradient Backplane */}
          <div 
            className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105"
            style={{
              background: "linear-gradient(180deg, #1A1211 0%, #8B3A2A 50%, #D4962A 100%)",
            }}
          />

          {/* Styled Sunset elements and sea wave using SVGs inside */}
          <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-end">
            
            {/* Sun Glow */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-gold/40 rounded-full blur-2xl group-hover:bg-brand-gold/50 transition-colors duration-500" />
            
            {/* Sea wave silhouette SVG representing "Mediterráneamente" logo line */}
            <svg viewBox="0 0 1440 320" className="w-full h-1/3 opacity-30 transform translate-y-2 select-none">
              <path
                fill="#0F1F2E"
                fillOpacity="1"
                d="M0,160L80,181.3C160,203,320,245,480,240C640,235,800,181,960,170.7C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>

          {/* Bottle and Star Artwork Silhouette in Center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-2">
            
            {/* Estrella Damm Bottle Silhouette */}
            <div className="h-44 sm:h-56 w-auto relative flex items-center justify-center transition-all duration-500 lg:group-hover:-translate-y-2">
              <svg viewBox="0 0 100 300" className="h-full w-auto filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]">
                {/* Bottle body */}
                <path
                  d="M42,20 L58,20 L58,55 L65,75 L65,110 L78,140 L78,280 L22,280 L22,140 L35,110 L35,75 L42,55 Z"
                  fill="#5A2E17"
                  stroke="#D4962A"
                  strokeWidth="1.5"
                />
                {/* Bottle label representation */}
                <polygon points="26,170 74,170 74,235 26,235" fill="#CC3300" />
                {/* Star on the label */}
                <polygon
                  points="50,185 54,196 66,196 56,203 60,215 50,208 40,215 44,203 34,196 46,196"
                  fill="#D4962A"
                />
                {/* Capsule top cover */}
                <path d="M42,20 L58,20 L58,35 L42,35 Z" fill="#D4962A" />
              </svg>
            </div>
          </div>

          {/* Big Interactive Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-gold/90 text-brand-navy flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover:scale-110 group-hover:bg-brand-gold group-hover:shadow-[0_0_30px_rgba(212,150,42,0.6)]">
              <Play className="w-8 h-8 sm:w-10 sm:h-10 text-brand-navy fill-brand-navy translate-x-0.5" />
            </div>
          </div>

          {/* Top-Right Tag */}
          <div className="absolute top-4 right-4 z-20 bg-black/40 backdrop-blur-sm border border-brand-cream/10 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-white text-[10px] font-mono tracking-wider">
            <Film className="w-3.5 h-3.5 text-brand-gold" />
            ESTRELLA DAMM TVC
          </div>

          {/* Bottom Banner */}
          <div className="absolute bottom-0 left-0 w-full z-20 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end text-center">
            <p className="text-white text-xs sm:text-sm font-sans tracking-wide">
              Estrella Damm 2026: "The Unwritten Summer" Campaign Film (3m 05s)
            </p>
          </div>
        </a>

        {/* Caption below the player */}
        <p className="text-white/60 font-sans text-xs sm:text-sm mb-16 uppercase tracking-widest text-center flex items-center gap-1.5 hover:text-white transition-colors">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand-gold animate-ping" />
          Click to watch the cinematic story — opens in Google Drive
        </p>

        {/* Narrative horizontal story beats */}
        <div className="w-full">
          <div className="text-center max-w-sm mx-auto mb-10">
            <span className="text-brand-gold text-[10px] uppercase font-mono tracking-[0.2em]">
              THE STORY STRUCTURE
            </span>
            <h3 className="font-serif text-2xl text-white mt-1">
              Campaign Script Beats
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {storyBeats.map((beat) => (
              <div
                key={beat.id}
                className="bg-[#1A2F42] hover:bg-[#203950] border border-brand-cream/5 p-6 rounded-xl transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-brand-cream/10 pb-3">
                    <span className="text-brand-gold font-serif text-lg font-bold">
                      {beat.title}
                    </span>
                    <span className="font-sans font-bold text-sm text-brand-gold/40 group-hover:text-brand-gold transition-colors duration-300">
                      Beat {beat.num}
                    </span>
                  </div>
                  <p className="text-white/70 font-sans text-xs sm:text-sm leading-relaxed font-light">
                    {beat.description}
                  </p>
                </div>
                
                {/* Wave decor item */}
                <div className="mt-4 flex justify-end">
                  <span className="text-[10px] font-mono text-brand-gold/30 uppercase tracking-widest">Let it flow</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
