import React from 'react';
import { CheckCircle2, Sparkles, XCircle } from 'lucide-react';

export default function DifferentiationSection() {
  const differentiators = [
    {
      feature: 'Brand Positioning',
      traditional: 'Generic commodity cake counter',
      veloura: 'Celebration-led, emotional brand story'
    },
    {
      feature: 'Store Architecture',
      traditional: 'Utilitarian glass display layout',
      veloura: 'Warm pastel boutique experience with theatrical counter'
    },
    {
      feature: 'Partner Support',
      traditional: 'Ad-hoc recipe guidelines',
      veloura: 'Structured 360° training & continuous operational audits'
    },
    {
      feature: 'Product Strategy',
      traditional: 'Static daily menu options',
      veloura: 'Seasonal festivity specials & artisanal cafe pairings'
    },
    {
      feature: 'Customer Journey',
      traditional: 'Offline cash-and-carry only',
      veloura: 'Digital-first pre-ordering, loyalty & local outreach'
    },
    {
      feature: 'Community Connection',
      traditional: 'Transactional store visits',
      veloura: 'Neighborhood celebration partner for local milestones'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#FFF5E6] to-[#FFF8EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B83262]/10 text-xs font-bold text-[#B83262]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Strategic Differentiation</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#3A2118]">
            What Makes Veloura Different?
          </h2>

          <p className="text-sm text-[#3A2118]/75 leading-relaxed">
            We bridge the gap between traditional bakery counters and modern lifestyle retail by putting celebration culture and partner enablement at the center.
          </p>
        </div>

        {/* Comparison Matrix */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden border border-[#FFB07C]/40 shadow-xl">
          <div className="grid grid-cols-12 bg-[#3A2118] text-white p-4 sm:p-5 text-xs sm:text-sm font-bold border-b border-[#FFB07C]/30">
            <div className="col-span-4 sm:col-span-4">Strategic Pillar</div>
            <div className="col-span-4 sm:col-span-4 text-white/70">Traditional Standalone Counter</div>
            <div className="col-span-4 sm:col-span-4 text-[#FFD66B] flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-[#B83262]" />
              <span>Veloura Cakes Model</span>
            </div>
          </div>

          <div className="divide-y divide-[#FFB07C]/20 text-xs">
            {differentiators.map((diff, i) => (
              <div
                key={i}
                className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-[#FFF8EE] transition-colors"
              >
                <div className="col-span-4 font-bold text-[#3A2118]">
                  {diff.feature}
                </div>

                <div className="col-span-4 text-[#3A2118]/60 flex items-start gap-1.5 pr-2">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{diff.traditional}</span>
                </div>

                <div className="col-span-4 text-[#3A2118] font-semibold flex items-start gap-1.5 bg-[#B83262]/5 p-2 rounded-xl border border-[#B83262]/20">
                  <CheckCircle2 className="w-4 h-4 text-[#B83262] shrink-0 mt-0.5" />
                  <span>{diff.veloura}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
