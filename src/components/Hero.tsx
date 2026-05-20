import React from "react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const targetElement = document.querySelector(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between items-center px-4 sm:px-6 pt-24 pb-12 overflow-hidden film-grain"
      style={{
        background: "linear-gradient(135deg, #8B3A2A 0%, #D4962A 50%, #C8A97E 100%)",
      }}
    >
      {/* Soft warm radial spotlight overlay to enhance contrast and add cinematic mood */}
      <div 
        className="absolute inset-0 bg-radial-[circle_at_center,_transparent_40%,_rgba(15,31,46,0.5)_100%] pointer-events-none" 
        style={{ mixBlendMode: 'multiply' }}
      />

      {/* Top element to push grid down */}
      <div className="h-4" />

      {/* Main Content Card: Centered & Vertically Stacked */}
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center gap-6 my-auto">
        <span className="text-brand-cream text-xs sm:text-sm font-sans font-bold tracking-[0.3em] uppercase animate-fade-in">
          ★ SUMMER CAMPAIGN 2026 ★
        </span>
        
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[104px] tracking-tight leading-[0.9] text-white">
          <span className="block font-medium drop-shadow-md">The Unwritten</span>
          <span className="block text-brand-cream/95 md:text-brand-gold italic mt-2 drop-shadow-lg">
            Summer.
          </span>
        </h1>

        <p className="text-white/90 font-sans font-light text-base sm:text-xl md:text-2xl tracking-wide max-w-2xl mt-4">
          "Your Mediterranean escape was never on any itinerary."
        </p>

        {/* Academic Presentation Label (Subtle and beautifully styled) */}
        <div className="bg-brand-navy/60 backdrop-blur-sm border border-brand-cream/15 rounded-lg py-2.5 px-5 mt-4 max-w-xl text-center shadow-lg">
          <p className="text-brand-cream/80 text-[10px] sm:text-xs font-sans tracking-wider uppercase font-medium">
            Subject: Artificial Intelligence for Project Management
          </p>
          <p className="text-white/70 text-[10px] sm:text-xs font-sans mt-1">
            Developed by: Carla Tomás · Mònica Ventura · Mariona Molera · Álvaro del Castillo
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button
            onClick={() => handleScrollTo("#insight")}
            className="w-full sm:w-auto bg-brand-navy border border-brand-navy hover:bg-brand-navy/80 text-brand-cream hover:text-white font-sans font-semibold text-xs tracking-widest py-3.5 px-8 rounded-full uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
          >
            Discover the Campaign
          </button>
          <button
            onClick={() => handleScrollTo("#film")}
            className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white/10 text-white font-sans font-semibold text-xs tracking-widest py-3 px-8 rounded-full uppercase transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Watch the Film
          </button>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div 
        onClick={() => handleScrollTo("#insight")}
        className="relative z-10 flex flex-col items-center gap-2 cursor-pointer group text-white/50 hover:text-white transition-colors duration-300"
      >
        <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase">
          SCROLL TO EXPLORE
        </span>
        <div className="w-[1px] h-12 bg-white/30 group-hover:bg-brand-gold relative overflow-hidden transition-colors duration-300">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-gold animate-bounce" />
        </div>
        <ArrowDown className="w-4 h-4 text-brand-cream/60 animate-bounce mt-1" />
      </div>
    </section>
  );
}
