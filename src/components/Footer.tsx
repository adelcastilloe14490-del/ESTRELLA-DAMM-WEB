import React from "react";

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const targetElement = document.querySelector(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-brand-dark text-white/50 pt-16 pb-8 px-4 sm:px-8 border-t border-brand-cream/5 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Three Column Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          
          {/* Column 1: Brand Info (6 Cols of width) */}
          <div className="md:col-span-6 flex flex-col gap-4">
            
            {/* Small Estrella Damm SVG Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex-shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="48" fill="#CC3300" />
                  <polygon
                    points="50,15 62,40 89,40 67,56 75,82 50,65 25,82 33,56 11,40 38,40"
                    fill="#D4962A"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xs tracking-widest leading-none">
                  ESTRELLA DAMM
                </span>
                <span className="text-brand-gold italic text-[11px] mt-0.5 leading-none">
                  Mediterráneamente — Summer 2026
                </span>
              </div>
            </div>

            {/* Descriptor text */}
            <p className="text-xs text-white/40 leading-relaxed max-w-sm mt-2">
              Brewed in Barcelona since 1876. Academic campaign concept developed for the university class "AI for Project Management".
            </p>
          </div>

          {/* Column 2: Campaign Anchors (3 Cols of width) */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="text-brand-gold text-[10px] font-bold tracking-[0.25em] uppercase">
              CAMPAIGN
            </span>
            <div className="flex flex-col gap-2.5 text-xs text-white/70">
              <button 
                onClick={() => handleScrollTo("#insight")} 
                className="text-left hover:text-brand-gold transition-colors duration-200 cursor-pointer"
              >
                The Insight
              </button>
              <button 
                onClick={() => handleScrollTo("#visuals")} 
                className="text-left hover:text-brand-gold transition-colors duration-200 cursor-pointer"
              >
                Key Visuals
              </button>
              <button 
                onClick={() => handleScrollTo("#film")} 
                className="text-left hover:text-brand-gold transition-colors duration-200 cursor-pointer"
              >
                Hero Film
              </button>
              <button 
                onClick={() => handleScrollTo("#concept")} 
                className="text-left hover:text-brand-gold transition-colors duration-200 cursor-pointer"
              >
                Concept & Slogan
              </button>
            </div>
          </div>

          {/* Column 3: The Student Team (3 Cols of width) */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="text-brand-gold text-[10px] font-bold tracking-[0.25em] uppercase">
              TEAM MEMBERS
            </span>
            <div className="flex flex-col gap-2.5 text-xs text-brand-cream/90 font-medium">
              <span>Carla Tomás</span>
              <span>Mònica Ventura</span>
              <span>Mariona Molera</span>
              <span>Álvaro del Castillo</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 border-t border-brand-cream/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/30 gap-4">
          <p className="text-center sm:text-left">
            Estrella Damm: Let it flow. — University Project 2026
          </p>
          <p className="font-mono text-[9px] uppercase tracking-wider">
            MEDITERRÁNEAMENTE ★ AI PRESENTATION
          </p>
        </div>

      </div>
    </footer>
  );
}
