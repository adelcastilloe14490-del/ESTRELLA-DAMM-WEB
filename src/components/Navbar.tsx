import React, { useState, useEffect } from "react";
import { Menu, X, Play, Award } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "THE INSIGHT", href: "#insight", id: "insight" },
    { label: "KEY VISUALS", href: "#visuals", id: "visuals" },
    { label: "THE HERO FILM", href: "#film", id: "film" },
    { label: "CONCEPT & SLOGAN", href: "#concept", id: "concept" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-4 sm:px-8 py-3 sm:py-4 ${
        scrolled 
          ? "bg-brand-navy/95 backdrop-blur-md shadow-lg border-b border-brand-cream/10" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Side: Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group" onClick={(e) => handleLinkClick(e, "#hero")}>
          {/* Logo SVG: red circle (#CC3300) with yellow star (#D4962A) */}
          <div className="relative w-10 h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="48" fill="#CC3300" />
              <polygon
                points="50,15 62,40 89,40 67,56 75,82 50,65 25,82 33,56 11,40 38,40"
                fill="#D4962A"
              />
            </svg>
          </div>
          
          <div className="flex flex-col select-none">
            <span className="text-white font-sans font-bold text-sm tracking-widest leading-none">
              ESTRELLA DAMM
            </span>
            <span className="text-brand-gold font-sans font-medium text-[9px] tracking-[0.22em] mt-1 leading-none uppercase">
              MEDITERRÁNEAMENTE
            </span>
          </div>
        </a>

        {/* Center: Main Desktop Anchors */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative py-2 text-xs font-sans font-medium tracking-widest text-white/80 hover:text-white transition-colors duration-300"
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Side: pill shaped Watch Call To Action */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://drive.google.com/file/d/1rIcsbK3E_CdDqFMu5KYgjhDlWrB2cCRR/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-brand-gold hover:bg-brand-terracotta text-brand-navy hover:text-white font-sans font-semibold text-xs py-2 px-5 rounded-full shadow-md transition-all duration-300 hover:scale-105 uppercase tracking-wider"
          >
            <Play className="w-3 h-3 fill-current" />
            Watch the Film
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="https://drive.google.com/file/d/1rIcsbK3E_CdDqFMu5KYgjhDlWrB2cCRR/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden flex items-center justify-center w-8 h-8 rounded-full bg-brand-gold text-brand-navy hover:bg-brand-terracotta hover:text-white transition-all"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 text-white hover:text-brand-gold transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-brand-navy/98 backdrop-blur-lg border-b border-brand-cream/10 px-6 py-8 flex flex-col gap-6 animate-fade-in shadow-2xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-sans font-semibold tracking-widest py-2 border-b border-brand-cream/5 flex items-center justify-between ${
                    isActive ? "text-brand-gold" : "text-white/80"
                  }`}
                >
                  {link.label}
                  {isActive && <div className="w-2 h-2 rounded-full bg-brand-gold" />}
                </a>
              );
            })}
          </div>

          <a
            href="https://drive.google.com/file/d/1rIcsbK3E_CdDqFMu5KYgjhDlWrB2cCRR/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-terracotta text-brand-navy hover:text-white text-center font-sans font-bold text-xs py-3 rounded-full uppercase tracking-wider transition-all duration-300"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            Watch the Film
          </a>
        </div>
      )}
    </nav>
  );
}
