import React, { useState } from 'react';
import { CITIES_OPPORTUNITY } from '../data/content';
import { MapPin, Sparkles, Building2, Users, ArrowRight, ShieldAlert } from 'lucide-react';

export default function LocationExplorer({ onDiscussLocation }) {
  const [selectedCityId, setSelectedCityId] = useState('chennai');

  const activeCity =
    CITIES_OPPORTUNITY.find((c) => c.id === selectedCityId) || CITIES_OPPORTUNITY[0];

  return (
    <section className="py-20 bg-gradient-to-b from-[#FFF5E6] to-[#FFF8EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B83262]/10 border border-[#B83262]/20 text-xs font-bold text-[#B83262]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Target Concept Markets</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#3A2118]">
            Explore Your City Opportunity
          </h2>

          <p className="text-sm text-[#3A2118]/75 leading-relaxed">
            Select a target city below to view sample market catchment demographics and recommended store formats.
          </p>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FFD66B]/30 text-[11px] font-semibold text-[#3A2118] border border-[#FFD66B]/60">
            <ShieldAlert className="w-3.5 h-3.5 text-[#B83262]" />
            <span>Illustrative concept market explorer — no active store claims made.</span>
          </div>
        </div>

        {/* City Chips selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CITIES_OPPORTUNITY.map((city) => {
            const isSelected = city.id === selectedCityId;
            return (
              <button
                key={city.id}
                onClick={() => setSelectedCityId(city.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 shadow-sm ${
                  isSelected
                    ? 'bg-[#B83262] text-white shadow-md scale-105'
                    : 'bg-white text-[#3A2118] border border-[#FFB07C]/40 hover:bg-[#FFB07C]/20'
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-[#B83262]'}`} />
                <span>{city.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active City Detail Panel */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-[#FFB07C]/40 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Column Details */}
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD66B]/30 text-xs font-bold text-[#3A2118]">
                <Sparkles className="w-3.5 h-3.5 text-[#B83262]" />
                <span>Exploring opportunity in {activeCity.name}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3A2118]">
                {activeCity.name} <span className="text-xs text-[#3A2118]/60 font-sans font-semibold">({activeCity.region})</span>
              </h3>

              <p className="text-xs sm:text-sm text-[#3A2118]/80 leading-relaxed">
                {activeCity.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-[#FFF8EE] p-3.5 rounded-xl border border-[#FFB07C]/30 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#B83262] flex items-center gap-1">
                    <Building2 className="w-3 h-3" />
                    Recommended Store Format
                  </span>
                  <span className="text-xs font-bold text-[#3A2118] block">
                    {activeCity.recommendedFormat}
                  </span>
                </div>

                <div className="bg-[#FFF8EE] p-3.5 rounded-xl border border-[#FFB07C]/30 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#B83262] flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    Target Catchment Profile
                  </span>
                  <span className="text-xs font-bold text-[#3A2118] block">
                    {activeCity.targetDemographic}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column Action Callout */}
            <div className="md:col-span-4 bg-gradient-to-br from-[#3A2118] to-[#24140E] text-white p-6 rounded-2xl border border-[#FFB07C]/30 text-center space-y-4 shadow-md">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFD66B] block">
                Target Market Action
              </span>

              <h4 className="font-serif text-lg font-bold">
                Interested in bringing Veloura Cakes to {activeCity.name}?
              </h4>

              <p className="text-[11px] text-[#FFF8EE]/70">
                Submit an enquiry to explore site availability and catchment feasibility for this city.
              </p>

              <button
                onClick={() => onDiscussLocation(activeCity.name)}
                className="w-full py-3 rounded-full text-xs font-bold text-white bg-[#B83262] hover:bg-[#9E2450] shadow-md transition-all flex items-center justify-center gap-1.5"
              >
                <span>Discuss {activeCity.name} Location</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
