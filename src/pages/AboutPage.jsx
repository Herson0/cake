import React from 'react';
import { Sparkles, Heart, Award, ShieldCheck, Users, ArrowRight } from 'lucide-react';

export default function AboutPage({ setActivePage }) {
  const values = [
    {
      title: 'Celebration',
      desc: 'We believe life is defined by moments of joy, big and small, that deserve to be shared over exceptional cake.',
      color: 'border-[#B83262] bg-[#B83262]/5'
    },
    {
      title: 'Craft',
      desc: 'Obsessive attention to recipe balance, natural ingredients, and artistic visual presentation in every bake.',
      color: 'border-[#FFB07C] bg-[#FFB07C]/10'
    },
    {
      title: 'Consistency',
      desc: 'Standardized central systems ensuring that every Veloura outlet delivers identical taste, texture, and elegance.',
      color: 'border-[#FFD66B] bg-[#FFD66B]/20'
    },
    {
      title: 'Community',
      desc: 'Creating warm, welcoming neighborhood spaces that serve as trusted gathering destinations for families and friends.',
      color: 'border-[#B9E4C9] bg-[#B9E4C9]/20'
    },
    {
      title: 'Entrepreneurship',
      desc: 'Empowering local store partners with comprehensive training, transparent tools, and continuous operational backing.',
      color: 'border-[#3A2118] bg-[#3A2118]/5'
    }
  ];

  return (
    <div className="py-12 space-y-16 bg-[#FFF8EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B83262]/10 border border-[#B83262]/20 text-xs font-bold text-[#B83262]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Brand Story & Philosophy</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#3A2118]">
            The Idea Behind <span className="text-[#B83262]">Veloura</span>
          </h1>

          <p className="text-base text-[#3A2118]/80 leading-relaxed font-normal">
            A modern cake concept built to bridge artisanal celebration baking with structured, scalable retail entrepreneurship.
          </p>
        </div>

        {/* Narrative Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3A2118]">
              Rethinking the Local Celebration Destination
            </h2>

            <p className="text-xs sm:text-sm text-[#3A2118]/80 leading-relaxed">
              Veloura Cakes was conceived with a simple observation: while celebrations happen every day—from birthdays and promotions to weekend family tea times—local cake buyers often had to choose between traditional commodity bakeries or expensive boutique custom studios.
            </p>

            <p className="text-xs sm:text-sm text-[#3A2118]/80 leading-relaxed">
              We created Veloura to offer a vibrant third space: an approachable, aesthetically stunning cake store brand with signature flavor profiles, standardized operational simplicity, and memorable customer packaging.
            </p>

            <div className="p-4 rounded-2xl bg-[#FFF5E6] border border-[#FFB07C]/40 space-y-2">
              <span className="text-xs font-bold text-[#B83262] uppercase tracking-wider block">
                Entrepreneurial Vision
              </span>
              <p className="text-xs text-[#3A2118]/85 font-medium leading-relaxed">
                By packaging our celebration recipes with complete operational support, we enable local entrepreneurs to open recognizable, high-appeal cake hubs without needing decades of master bakery experience.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1000"
                alt="Veloura Bakery Interior Concept"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-[#FFB07C]/40 shadow-sm space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B83262]">
              Our Mission
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#3A2118]">
              Spread Joy Through Every Slice
            </h3>
            <p className="text-xs sm:text-sm text-[#3A2118]/80 leading-relaxed">
              To deliver delightful, high-quality celebration cakes and café experiences while giving our franchise partners the tools, training, and operational backing to succeed.
            </p>
          </div>

          <div className="bg-[#3A2118] text-white p-8 rounded-3xl border border-[#FFB07C]/30 shadow-sm space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFD66B]">
              Our Vision
            </span>
            <h3 className="font-serif text-2xl font-bold text-white">
              India's Preferred Local Celebration Brand
            </h3>
            <p className="text-xs sm:text-sm text-[#FFF8EE]/80 leading-relaxed">
              To build an interconnected network of passionate local franchise partners who make Veloura the first choice for family and corporate celebrations across every neighborhood.
            </p>
          </div>
        </div>

        {/* Brand Values */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-serif text-3xl font-bold text-[#3A2118]">
              Our Core Brand Values
            </h2>
            <p className="text-xs text-[#3A2118]/70">
              The foundational principles guiding our product development and franchisee relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((v, i) => (
              <div
                key={i}
                className={`p-5 rounded-2xl border-2 ${v.color} shadow-sm space-y-2 hover:scale-105 transition-transform`}
              >
                <span className="text-xs font-bold text-[#B83262] block">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#3A2118]">
                  {v.title}
                </h3>
                <p className="text-[11px] text-[#3A2118]/75 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Callout */}
        <div className="bg-gradient-to-r from-[#FFF5E6] via-white to-[#FFF5E6] p-8 rounded-3xl border border-[#FFB07C]/40 text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-[#3A2118]">
            Want to bring Veloura to your city?
          </h3>
          <p className="text-xs text-[#3A2118]/75 max-w-md mx-auto">
            Explore our franchise enablement model and start a conversation with our expansion team.
          </p>
          <button
            onClick={() => setActivePage('apply')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold text-white bg-[#B83262] hover:bg-[#9E2450] shadow-md transition-all"
          >
            <span>Submit Franchise Enquiry</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
