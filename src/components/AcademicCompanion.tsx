import React, { useState } from "react";
import { Award, Code2, CheckCircle2, RefreshCw, Cpu, HelpCircle, ArrowRight } from "lucide-react";
import { AIWorkNode } from "../types";

export default function AcademicCompanion() {
  const [activeTab, setActiveTab] = useState<"brief" | "ai" | "success">("brief");

  const aiWorkflow: AIWorkNode[] = [
    {
      tool: "ChatGPT-4",
      purpose: "Concept Refinement",
      details: "Used to stress-test cultural tension scenarios and generate humanizing conversational copy structures.",
    },
    {
      tool: "Gemini",
      purpose: "Art Direction & Key Visuals",
      details: "50+ prompt iterations refining the visual campaign output. Moving from sterile commercial designs toward imperfect 35mm raw film realism.",
    },
    {
      tool: "Runway Gen-2",
      purpose: "Video Motion Assets",
      details: "Animated fluid 'sea & sunset' visual concepts to test active sensory tempo and draft transitions for the TV spot.",
    },
  ];

  return (
    <section 
      id="academic" 
      className="bg-[#0A1622] text-white py-16 sm:py-24 px-4 sm:px-8 border-b border-brand-cream/10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-brand-gold text-xs font-sans font-bold tracking-[0.3em] uppercase block mb-1">
            PROJECT MANAGEMENT & STRATEGY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
            Academic Research Deck
          </h2>
          <p className="text-white/60 font-sans text-xs sm:text-sm mt-3">
            An overview of the strategic methodology and AI tools utilized for this campaign.
          </p>
          <div className="h-[2px] w-16 bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Outer Tab Container */}
        <div className="border border-brand-cream/10 bg-brand-navy rounded-2xl overflow-hidden shadow-2xl">
          
          {/* Tabs Nav */}
          <div className="grid grid-cols-3 bg-brand-dark border-b border-brand-cream/10 text-center text-xs sm:text-sm">
            <button
              onClick={() => setActiveTab("brief")}
              className={`py-4 sm:py-5 font-sans uppercase font-bold tracking-wider transition-all duration-300 border-b-2 flex flex-col sm:flex-row items-center justify-center gap-2 cursor-pointer ${
                activeTab === "brief"
                  ? "border-brand-gold text-brand-gold bg-brand-navy/60"
                  : "border-transparent text-white/50 hover:text-white"
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span className="text-[10px] sm:text-xs">1. The Brief & tension</span>
            </button>

            <button
              onClick={() => setActiveTab("ai")}
              className={`py-4 sm:py-5 font-sans uppercase font-bold tracking-wider transition-all duration-300 border-b-2 flex flex-col sm:flex-row items-center justify-center gap-2 cursor-pointer ${
                activeTab === "ai"
                  ? "border-brand-gold text-brand-gold bg-brand-navy/60"
                  : "border-transparent text-white/50 hover:text-white"
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span className="text-[10px] sm:text-xs">2. AI Co-creation</span>
            </button>

            <button
              onClick={() => setActiveTab("success")}
              className={`py-4 sm:py-5 font-sans uppercase font-bold tracking-wider transition-all duration-300 border-b-2 flex flex-col sm:flex-row items-center justify-center gap-2 cursor-pointer ${
                activeTab === "success"
                  ? "border-brand-gold text-brand-gold bg-brand-navy/60"
                  : "border-transparent text-white/50 hover:text-white"
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-[10px] sm:text-xs">3. Campaign Success</span>
            </button>
          </div>

          {/* Tab Content Panels */}
          <div className="p-6 sm:p-10 min-h-[300px] flex flex-col justify-between">
            
            {/* TAB 1: BRIEF */}
            {activeTab === "brief" && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex flex-col gap-2">
                  <span className="text-brand-gold font-mono text-xs uppercase tracking-widest">STEP 1: From Visibility to Relevance</span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-brand-cream">The Leisure Paradox</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <div className="space-y-4">
                    <h4 className="font-serif text-lg text-brand-gold font-bold">The Problem</h4>
                    <p className="text-white/70 font-sans text-xs sm:text-sm leading-relaxed font-light">
                      The modern consumer lives in an exhausting 'leisure paradox'. They feel constant pressure for summer
                      to be highly productive, visually perfect, hyper-active and immediately shareable on social networks. 
                      Consequently, summer is over-scheduled, losing its restorative soul and becoming another work checklist.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-serif text-lg text-brand-gold font-bold">The Opportunity</h4>
                    <p className="text-white/70 font-sans text-xs sm:text-sm leading-relaxed font-light">
                      Estrella Damm possesses the heritage and cultural authority to act as a genuine 'facilitator of disconnection'.
                      We defined that the campaign’s success will not come from simply showcasing the Mediterranean as a travel destination,
                      but as a state of mind representing absolute freedom, where time is no longer a measure of productiveness or validated KPIs.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: AI CO-CREATION */}
            {activeTab === "ai" && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex flex-col gap-2">
                  <span className="text-brand-gold font-mono text-xs uppercase tracking-widest">STEP 6 & 8: Production Methodology</span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-brand-cream">AI as a Creative Partner</h3>
                </div>

                <p className="text-white/75 font-sans text-xs sm:text-sm leading-relaxed font-light max-w-4xl">
                  AI was not merely used to generate final outputs; it served as an active co-creative sparring partner for ideation,
                  tension-testing, copywriting, and sensory styling.
                </p>

                {/* AI Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  {aiWorkflow.map((node, idx) => (
                    <div key={idx} className="border border-brand-cream/10 bg-brand-dark/45 p-5 rounded-xl flex flex-col gap-3 relative overflow-hidden group hover:border-brand-gold/20 transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-brand-gold tracking-widest uppercase">
                          {node.tool}
                        </span>
                        <span className="text-white/20 text-[10px] font-bold">
                          0{idx + 1}
                        </span>
                      </div>
                      
                      <h4 className="font-serif text-base text-white font-semibold">
                        {node.purpose}
                      </h4>

                      <p className="text-white/60 font-sans text-xs sm:text-sm leading-relaxed">
                        {node.details}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Human Learnings Accordion/Box */}
                <div className="border border-brand-gold/25 bg-brand-gold/5 p-4 sm:p-5 rounded-xl mt-6">
                  <h4 className="font-serif text-brand-gold font-bold text-sm sm:text-base flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 animate-spin-slow" />
                    Human Iteration & Strategic Control
                  </h4>
                  <p className="text-white/80 font-sans text-xs sm:text-sm leading-relaxed font-light mt-1.5">
                    "Initially, direct AI raw results outputs felt too generic and overly clean. We analyzed that to capture true Mediterranean culture, 
                    we had to inject specific guidance regarding color temperatures (warm ambers), 35mm photography imperfections, and prioritize emotion and unposed interactions over direct product visibility."
                  </p>
                </div>
              </div>
            )}

            {/* TAB 3: CAMPAIGN SUCCESS */}
            {activeTab === "success" && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex flex-col gap-2">
                  <span className="text-brand-gold font-mono text-xs uppercase tracking-widest">STEP 9: The Strategic Pitch</span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-brand-cream">Why 'The Unwritten Summer' Works</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <div className="space-y-4">
                    <h4 className="font-serif text-lg text-brand-gold font-bold">1. Solves a Real Cultural Strain</h4>
                    <p className="text-white/70 font-sans text-xs sm:text-sm leading-relaxed font-light">
                      It targets an active tension in young consumers' lives: the exhaustion of the Instagrammable agenda. 
                      Estrella Damm stands as an authentic beacon of liberation, giving customers permission to live unscripted.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-serif text-lg text-brand-gold font-bold">2. Brand Coherence with Modern Appeal</h4>
                    <p className="text-white/70 font-sans text-xs sm:text-sm leading-relaxed font-light">
                      The campaign respects Estrella Damm's iconic Mediterranean status while upgrading their appeal for a new, 
                      hyper-connected generation by adding a raw layer of imperfect realism, spontaneous truth, and psychological depth.
                    </p>
                  </div>
                </div>

                {/* Touchpoints list row */}
                <div className="border-t border-brand-cream/10 pt-6 mt-6">
                  <span className="text-xs font-mono tracking-wider text-brand-gold/60 uppercase block mb-3">CONSISTENT TOUCHPOINTS:</span>
                  <div className="flex flex-wrap gap-2.5 sm:gap-4 text-xs font-sans">
                    <span className="bg-[#1A2F42] border border-white/5 py-1 px-3 rounded-full text-white/85">
                      <b>Hero film</b> → Spontaneous storytelling
                    </span>
                    <span className="bg-[#1A2F42] border border-white/5 py-1 px-3 rounded-full text-white/85">
                      <b>Social media</b> → Raw imperfected moments
                    </span>
                    <span className="bg-[#1A2F42] border border-white/5 py-1 px-3 rounded-full text-white/85">
                      <b>Out-Of-Home (OOH)</b> → Simple emotional visual copy
                    </span>
                    <span className="bg-[#1A2F42] border border-white/5 py-1 px-3 rounded-full text-white/85">
                      <b>Live activation</b> → "No Plan Beach Day"
                    </span>
                  </div>
                </div>

              </div>
            )}

            {/* Bottom Panel footer showing project metadata */}
            <div className="mt-8 pt-6 border-t border-brand-cream/10 flex flex-col sm:flex-row items-center justify-between text-white/40 text-xs gap-4">
              <span className="font-sans">
                Presented by: Carla, Mònica, Mariona & Álvaro
              </span>
              <span className="font-mono text-brand-gold/60">
                ★ Estrella Damm Summer Proposal — AI for Project Management
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
