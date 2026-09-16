import React from 'react';
import LocationExplorer from '../components/LocationExplorer';
import { Sparkles, ShieldAlert } from 'lucide-react';

export default function LocationsPage({ setActivePage, setPreselectedCity }) {
  return (
    <div className="py-12 bg-[#FFF8EE] space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B83262]/10 text-xs font-bold text-[#B83262]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Territory Opportunity Mapping</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#3A2118]">
            Target Concept Markets & Cities
          </h1>

          <p className="text-sm text-[#3A2118]/75 leading-relaxed">
            Discover potential franchisee expansion territories across key Indian urban hubs and regional catchment markets.
          </p>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFD66B]/30 text-xs font-semibold text-[#3A2118] border border-[#FFD66B]/60">
            <ShieldAlert className="w-4 h-4 text-[#B83262]" />
            <span>Illustrative market concept explorer — no live store location claims made.</span>
          </div>
        </div>

        {/* Location Explorer Component */}
        <LocationExplorer
          onDiscussLocation={(cityName) => {
            if (setPreselectedCity) setPreselectedCity(cityName);
            setActivePage('apply');
          }}
        />
      </div>
    </div>
  );
}
