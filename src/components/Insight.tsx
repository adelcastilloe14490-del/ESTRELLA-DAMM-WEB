import React, { useState } from "react";
import { Sparkles, Calendar, Smartphone, HeartHandshake } from "lucide-react";

export default function Insight() {
  const [hoveredTension, setHoveredTension] = useState<string | null>(null);

  const tensions = [
    {
      id: "planning",
      icon: <Calendar className="w-5 h-5 text-brand-gold animate-pulse" />,
      title: "Planning vs. Spontaneity",
      subtitle: "The Leisure Paradox",
      description: "Modern tourists feel pressure to make summers productive and over-planned. Estrella Damm breaks this with spontaneous adventure.",
    },
    {
      id: "digital",
      icon: <Smartphone className="w-5 h-5 text-brand-gold animate-pulse" />,
      title: "Digital validation vs. Organic Flow",
      subtitle: "Screen interruptions",
      description: "The obsessive urge to 'post' experiences halts genuine presence. Happiness shouldn't need a Wi-Fi signal or filter.",
    },
    {
      id: "fomo",
      icon: <HeartHandshake className="w-5 h-5 text-brand-gold animate-pulse" />,
      title: "FOMO vs. JOMO",
      subtitle: "Joy of Missing Out",
      description: "The tension of trying to attend every trendy festival versus the physical/mental relief of a never-ending 'sobremesa' talk.",
    },
  ];

  return (
    <section
      id="insight"
      className="relative bg-brand-navy py-12 sm:py-24 px-4 sm:px-8 border-b border-brand-cream/10"
    >
      {/* Background ambient spotlight circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-terracotta/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Main 60/40 Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (60% equivalent) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="text-brand-gold text-[10px] sm:text-xs font-sans font-bold tracking-[0.25em] uppercase">
                THE INSIGHT
              </span>
              <div className="h-[1px] w-12 bg-brand-gold/40" />
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[64px] text-white leading-[1.1] tracking-tight">
              The <span className="text-brand-gold italic">Unwritten</span> Summer
            </h2>

            <div className="flex flex-col gap-4 text-white/70 font-sans text-sm sm:text-base leading-relaxed font-light mt-2">
              <p>
                You don't need a perfect itinerary. You don't need every hour filled.
                The Mediterranean isn't just a physical coordinates layout — it's a premium state of mind,
                accessible the absolute moment you stop planning and start living.
              </p>
              <p>
                The best memories of our lives were never written in ink beforehand. They simply happened
                when we forgot to check the clock, set aside the social validation templates, and let the hours flow.
                That’s the core emotional truth Estrella Damm is built on.
              </p>
            </div>

            {/* Pull Quote Block */}
            <blockquote className="border-l-4 border-brand-gold pl-5 py-2.5 my-4 bg-white/[0.02] rounded-r-lg">
              <p className="font-serif italic text-white/90 text-base sm:text-lg leading-relaxed">
                "The modern consumer feels a constant pressure to make summer productive, perfect, and shareable — Estrella Damm is the permission to let go."
              </p>
            </blockquote>
          </div>

          {/* Right Column (40% equivalent) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative group overflow-hidden rounded-2xl border border-brand-cream/15 p-1 bg-brand-cream/5 shadow-2xl transition-all duration-500 hover:border-brand-gold/30 hover:scale-[1.01]">
              
              {/* Card visual: Warm Mediterranean cinematic photo simulation/badge */}
              <div 
                className="w-full aspect-[4/5] rounded-xl flex flex-col justify-between p-6 sm:p-8 relative overflow-hidden"
                style={{
                  background: "linear-gradient(200deg, #8B3A2A 0%, #D4962A 100%)",
                }}
              >
                {/* Visual grid backing effect */}
                <div className="absolute inset-0 bg-radial-[circle_at_30%_30%,_transparent_50%,_rgba(0,0,0,0.4)_100%] pointer-events-none" />
                <div className="absolute inset-0 bg-white/[0.01]" />

                {/* Top header of card */}
                <div className="flex justify-between items-center relative z-10 text-white/90">
                  <span className="font-mono text-[9px] tracking-widest uppercase bg-black/20 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    35MM FILM EST. 1876
                  </span>
                  <Sparkles className="w-4 h-4 text-brand-cream animate-spin-slow" />
                </div>

                {/* Large Center Estrella Damm SVG Star Logo inside card */}
                <div className="my-auto flex flex-col items-center justify-center relative z-10 text-center gap-4">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
                    <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)]">
                      <polygon
                        points="60,10 74,45 110,45 81,67 92,102 60,82 28,102 39,67 10,45 46,45"
                        fill="#D4962A"
                        className="transition-transform duration-700 group-hover:rotate-12 origin-center"
                      />
                    </svg>
                  </div>
                  
                  {/* Badge Text */}
                  <div className="mt-1">
                    <h4 className="font-serif italic text-white text-2xl tracking-normal">
                      The Unwritten Summer
                    </h4>
                    <p className="text-white/80 font-mono text-[9px] tracking-[0.2em] uppercase mt-1">
                      ESTRELLA DAMM
                    </p>
                  </div>
                </div>

                {/* Bottom descriptor */}
                <div className="flex justify-between items-end relative z-10 pt-4 border-t border-white/25">
                  <span className="text-white/80 font-sans font-medium text-[10px] uppercase tracking-wider">
                    Mediterranean Escape
                  </span>
                  <span className="text-brand-cream font-serif italic text-xs">
                    "Let it Flow"
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Academic Backdrop: Step 2 Core Tensions */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-brand-cream/10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-brand-gold text-[10px] font-sans font-bold tracking-[0.2em] uppercase">
              ACADEMIC FOUNDATION
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white mt-1">
              Step 2 — Deep Cultural Tensions
            </h3>
            <p className="text-white/60 font-sans text-xs sm:text-sm mt-2 max-w-lg mx-auto">
              Our AI analysis helped stress-test and select three conflicts driving modern consumer anxiety, which Estrella Damm resolves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {tensions.map((t) => {
              const isSelected = hoveredTension === t.id;
              return (
                <div
                  key={t.id}
                  onMouseEnter={() => setHoveredTension(t.id)}
                  onMouseLeave={() => setHoveredTension(null)}
                  className={`bg-brand-cream/5 border p-6 rounded-xl transition-all duration-300 relative overflow-hidden ${
                    isSelected 
                      ? "border-brand-gold/50 shadow-[0_10px_30px_rgba(212,150,42,0.1)] -translate-y-1" 
                      : "border-brand-cream/10"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-brand-navy border border-brand-cream/10 rounded-lg">
                      {t.icon}
                    </div>
                    <span className="text-brand-gold font-sans text-[10px] font-bold tracking-widest uppercase">
                      {t.subtitle}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg text-white font-medium mb-2">
                    {t.title}
                  </h4>
                  
                  <p className="text-white/60 font-sans text-xs sm:text-sm leading-relaxed">
                    {t.description}
                  </p>

                  <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-brand-gold/5 rounded-full blur-xl pointer-events-none" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
