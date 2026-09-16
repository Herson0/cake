import React from 'react';
import { Sparkles, Cake, ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react';
import { FRANCHISE_PILLARS } from '../data/content';

export default function WhyVelouraSection({ onNavigateWhyVeloura, onEnquire }) {
  const getIcon = (name) => {
    switch (name) {
      case 'Sparkles':
        return Sparkles;
      case 'Cake':
        return Cake;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'TrendingUp':
        return TrendingUp;
      default:
        return Sparkles;
    }
  };

  return (
    <section className="py-20 bg-[#FFF8EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD66B]/30 text-xs font-bold text-[#3A2118]">
            <Sparkles className="w-3.5 h-3.5 text-[#B83262]" />
            <span>The Veloura Advantage</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#3A2118] tracking-tight">
            More Than a Cake Shop. <br />
            <span className="text-[#B83262]">A Brand You Can Build With.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#3A2118]/75 leading-relaxed">
            We combine high-recall celebration branding with structured operational systems designed to enable passionate entrepreneurs to build thriving local businesses.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FRANCHISE_PILLARS.map((pillar, idx) => {
            const IconComponent = getIcon(pillar.icon);
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-[#FFB07C]/30 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF5E6] border border-[#FFB07C]/30 flex items-center justify-center text-[#B83262] group-hover:bg-[#B83262] group-hover:text-white transition-all duration-300 shadow-sm">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#B83262] block">
                      {pillar.subtitle}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#3A2118] group-hover:text-[#B83262] transition-colors">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#3A2118]/75 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-[#FFF8EE] flex items-center justify-between text-xs font-bold text-[#B83262]">
                  <span>Pillar 0{idx + 1}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onNavigateWhyVeloura}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-[#3A2118] bg-white border border-[#FFB07C] hover:bg-[#B83262] hover:text-white hover:border-[#B83262] transition-all shadow-sm"
          >
            <span>Explore Complete Franchise Value Proposition</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
