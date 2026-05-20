import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Insight from "./components/Insight";
import Visuals from "./components/Visuals";
import HeroFilm from "./components/HeroFilm";
import ConceptSlogan from "./components/ConceptSlogan";
import AcademicCompanion from "./components/AcademicCompanion";
import DigitalCTA from "./components/DigitalCTA";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  // Track scroll position to update navbar active state highlight
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset to trigger before hitting the header

      const sections = [
        { id: "hero", element: document.getElementById("hero") },
        { id: "insight", element: document.getElementById("insight") },
        { id: "visuals", element: document.getElementById("visuals") },
        { id: "film", element: document.getElementById("film") },
        { id: "concept", element: document.getElementById("concept") },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const top = section.element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial call to set state
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-brand-navy text-white min-h-screen relative flex flex-col justify-between selection:bg-brand-gold selection:text-brand-navy">
      {/* 1. Header Navigation elements */}
      <Navbar activeSection={activeSection} />

      {/* 2. Main content blocks */}
      <main className="w-full relative">
        {/* Section 0: Hero gets simple mount animations inside, no scroll observer needed for first fold */}
        <Hero />

        {/* Section 1: The Insight */}
        <ScrollReveal>
          <Insight />
        </ScrollReveal>

        {/* Section 2: Key Visuals */}
        <ScrollReveal>
          <Visuals />
        </ScrollReveal>

        {/* Section 3: The Hero Film & Story beats */}
        <ScrollReveal>
          <HeroFilm />
        </ScrollReveal>

        {/* Section 4: Concept & Slogan Tagline */}
        <ScrollReveal>
          <ConceptSlogan />
        </ScrollReveal>

        {/* Section 4.5: Academic Behind-the-Scenes deck */}
        <ScrollReveal>
          <AcademicCompanion />
        </ScrollReveal>

        {/* Section 5: Digital Presentation CTA */}
        <ScrollReveal>
          <DigitalCTA />
        </ScrollReveal>
      </main>

      {/* 3. Global Footer */}
      <Footer />
    </div>
  );
}
