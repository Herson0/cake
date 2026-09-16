import React from 'react';
import { Heart, Users, MapPin, Sparkles } from 'lucide-react';

export default function BrandSnapshot() {
  const highlights = [
    {
      icon: Heart,
      title: 'Made for Celebrations',
      desc: 'Crafted to turn everyday milestones into joyful memories.',
      metric: 'Illustrative Concept',
      label: 'Celebration-first Positioning'
    },
    {
      icon: Users,
      title: 'Designed for Entrepreneurs',
      desc: 'Structured store playbooks and operational training frameworks.',
      metric: 'Turn-key Model',
      label: 'Franchise Partner Enablement'
    },
    {
      icon: MapPin,
      title: 'Built for Local Communities',
      desc: 'Tailored format footprints for neighborhood catchments & malls.',
      metric: 'Flexible Formats',
      label: 'Express to Flagship'
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-r from-[#3A2118] via-[#2C1810] to-[#3A2118] text-white shadow-inner relative overflow-hidden">
      {/* Background Subtle Sparkle Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFB07C_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex-1 w-full flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#B83262] to-[#FFB07C] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#FFB07C] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#FFF8EE]/70 leading-normal">
                    {item.desc}
                  </p>
                  <div className="pt-1 flex items-center gap-1 text-[10px] font-semibold text-[#FFD66B]">
                    <Sparkles className="w-3 h-3 text-[#B83262]" />
                    <span>{item.label}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
