import React from 'react';
import { Sparkles, ShieldCheck, Heart, Store, Megaphone, Smartphone, Users, ArrowRight } from 'lucide-react';

export default function WhyVelouraPage({ setActivePage }) {
  const pillars = [
    {
      icon: Sparkles,
      title: '1. Brand Strength',
      desc: 'Distinctive visual identity built around celebration joy, premium pastel aesthetics, and memorable packaging that stands out on social media and high streets.'
    },
    {
      icon: Heart,
      title: '2. Customer Experience',
      desc: 'Warm hospitality protocols, custom celebration message cards, and theatrical counter displays that make every store visit feel special.'
    },
    {
      icon: Store,
      title: '3. Product Portfolio',
      desc: 'Engineering menu balance: high-velocity daily dessert slices paired with high-margin custom celebration gateaux and specialty café beverages.'
    },
    {
      icon: Store,
      title: '4. Store Experience',
      desc: 'Turnkey interior design blueprints optimized for smooth customer flow, rapid order fulfillment, and instagrammable photography corners.'
    },
    {
      icon: ShieldCheck,
      title: '5. Franchise Support',
      desc: 'End-to-end partner enablement: site catchment mapping, pre-launch academy training, equipment vendor partnerships, and continuous quality audits.'
    },
    {
      icon: Smartphone,
      title: '6. Digital Experience',
      desc: 'Digital pre-ordering toolkits, POS integration, localized social media campaign assets, and automated customer loyalty frameworks.'
    },
    {
      icon: Users,
      title: '7. Community Impact',
      desc: 'Deep local market integration through birthday registry programs, corporate milestone catering, and neighborhood celebration partnerships.'
    }
  ];

  return (
    <div className="py-12 bg-[#FFF8EE] space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B83262]/10 text-xs font-bold text-[#B83262]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Complete Value Proposition</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#3A2118]">
            Why Partner With <span className="text-[#B83262]">Veloura Cakes</span>?
          </h1>

          <p className="text-base text-[#3A2118]/80 leading-relaxed font-normal">
            A comprehensive breakdown of our 7 strategic pillars designed to build brand recall, customer loyalty, and franchisee growth.
          </p>
        </div>

        {/* 7 Strategic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 border border-[#FFB07C]/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FFF5E6] border border-[#FFB07C]/30 flex items-center justify-center text-[#B83262]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#3A2118]">
                  {p.title}
                </h3>
                <p className="text-xs text-[#3A2118]/80 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Callout Action */}
        <div className="bg-[#3A2118] text-white p-8 sm:p-10 rounded-3xl border border-[#FFB07C]/30 text-center space-y-5">
          <h2 className="font-serif text-3xl font-bold">
            Ready to evaluate the model for your city?
          </h2>
          <p className="text-xs sm:text-sm text-[#FFF8EE]/80 max-w-xl mx-auto leading-relaxed">
            Our franchise expansion team is available to discuss store layout options, catchment feasibility, and partner onboarding steps.
          </p>
          <button
            onClick={() => setActivePage('apply')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold text-white bg-[#B83262] hover:bg-[#9E2450] shadow-lg transition-all"
          >
            <span>Submit Franchise Enquiry</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
