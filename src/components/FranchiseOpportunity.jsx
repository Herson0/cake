import React from 'react';
import { FRANCHISE_OPPORTUNITY_CARDS } from '../data/content';
import { Award, CheckCircle2, Store, GraduationCap, Megaphone, Settings, ArrowRight, Sparkles } from 'lucide-react';

export default function FranchiseOpportunity({ onUnderstandModel, onEnquire }) {
  const getCardIcon = (iconName) => {
    switch (iconName) {
      case 'Award': return Award;
      case 'CheckCircle2': return CheckCircle2;
      case 'Store': return Store;
      case 'GraduationCap': return GraduationCap;
      case 'Megaphone': return Megaphone;
      case 'Settings': return Settings;
      default: return Sparkles;
    }
  };

  const processFlow = [
    { step: 'IDEA', title: 'Opportunity Discovery', desc: 'Identify target city & review market viability.' },
    { step: 'SETUP', title: 'Store Site & Training', desc: 'Custom interior fit-out & 360° staff onboarding.' },
    { step: 'LAUNCH', title: 'Grand Opening', desc: 'Hyper-local marketing launch & initial sales push.' },
    { step: 'GROW', title: 'Scale & Support', desc: 'Ongoing operational audits & seasonal menu updates.' }
  ];

  return (
    <section className="py-20 bg-[#3A2118] text-white relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B83262]/20 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B83262]/30 border border-[#B83262]/50 text-xs font-bold text-[#FFD66B]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Franchise Expansion Framework</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Your City Could Be Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB07C] via-[#FFD66B] to-[#FFB07C]">
              Next Celebration.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#FFF8EE]/80 leading-relaxed">
            Partner with Veloura Cakes to establish a high-recall celebration destination backed by standardized kitchen systems and comprehensive franchisee enablement.
          </p>
        </div>

        {/* 6 Support Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {FRANCHISE_OPPORTUNITY_CARDS.map((card, idx) => {
            const IconComponent = getCardIcon(card.icon);
            return (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 hover:bg-white/10 hover:border-[#FFB07C]/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#B83262] to-[#FFB07C] flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[#FFB07C] transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs text-[#FFF8EE]/70 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visual Process Flow: IDEA -> SETUP -> LAUNCH -> GROW */}
        <div className="bg-[#24140E] rounded-3xl p-8 border border-[#FFB07C]/20 space-y-6">
          <div className="text-center space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#FFD66B]">
              Franchise Enablement Lifecycle
            </span>
            <h3 className="font-serif text-xl font-bold text-white">
              The Path From Idea to Thriving Unit
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {processFlow.map((flow, i) => (
              <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/10 relative text-center group hover:border-[#B83262]">
                <div className="w-8 h-8 rounded-full bg-[#B83262] text-white text-xs font-extrabold flex items-center justify-center mx-auto mb-2 shadow-md">
                  0{i + 1}
                </div>
                <span className="text-xs font-extrabold text-[#FFD66B] block tracking-wider uppercase">
                  {flow.step}
                </span>
                <h4 className="font-serif text-sm font-bold text-white mt-1">
                  {flow.title}
                </h4>
                <p className="text-[11px] text-[#FFF8EE]/70 mt-1 leading-snug">
                  {flow.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 text-center">
            <button
              onClick={onUnderstandModel}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#B83262] to-[#D94B7B] shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <span>Understand the Franchise Model</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
