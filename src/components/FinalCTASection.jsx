import React from 'react';
import { ArrowRight, Sparkles, Cake, ShieldCheck } from 'lucide-react';

export default function FinalCTASection({ onEnquireNow }) {
  return (
    <section className="py-20 bg-gradient-to-r from-[#B83262] via-[#C72C61] to-[#D94B7B] text-white relative overflow-hidden shadow-2xl">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFD66B]/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-bold text-[#FFD66B]">
          <Cake className="w-4 h-4 text-white" />
          <span>Start Your Franchise Conversation</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          Ready to Explore Your Next Opportunity?
        </h2>

        <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
          Tell us about yourself, your target market, and what you are looking to build. Our franchise expansion team will guide you through every step of the evaluation.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onEnquireNow}
            className="w-full sm:w-auto px-9 py-4 rounded-full text-sm font-extrabold text-[#3A2118] bg-[#FFD66B] hover:bg-white shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5"
          >
            <span>Become a Franchise Partner</span>
            <ArrowRight className="w-4 h-4 text-[#B83262]" />
          </button>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-white/80 font-medium">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#FFD66B]" />
            <span>No Obligation Initial Consultation</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#FFD66B]" />
            <span>Turn-Key Business Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
