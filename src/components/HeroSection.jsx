import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Cake, Award, ChevronDown } from 'lucide-react';

export default function HeroSection({ onExploreFranchise, onDiscoverBrand }) {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24 bg-gradient-to-b from-[#FFF8EE] via-[#FFF5E6] to-[#FFF8EE]">
      {/* Background Decorative Soft Gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#FFB07C]/20 via-[#FFD66B]/20 to-[#B83262]/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Positioning Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B83262]/10 border border-[#B83262]/20 text-xs font-bold text-[#B83262] shadow-sm">
              <Sparkles className="w-4 h-4 text-[#B83262] animate-spin-slow" />
              <span>Modern Celebration Cake Franchise Concept</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#3A2118] tracking-tight leading-[1.15]">
              Build a Business That <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B83262] via-[#D94B7B] to-[#FF9E6D]">
                Celebrates Every Occasion.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#3A2118]/80 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Bring a modern cake experience to your city with a brand built around celebrations, customer love, and scalable entrepreneurial opportunity.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExploreFranchise}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#B83262] via-[#C72C61] to-[#D94B7B] shadow-lg shadow-[#B83262]/25 hover:shadow-xl hover:shadow-[#B83262]/35 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Franchise Opportunity</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onDiscoverBrand}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-bold text-[#3A2118] bg-white border border-[#FFB07C]/50 hover:bg-[#FFB07C]/15 hover:border-[#B83262]/40 shadow-sm transition-all"
              >
                <span>Discover Veloura</span>
              </button>
            </div>

            {/* Trust & Brand Indicators */}
            <div className="pt-6 border-t border-[#FFB07C]/30 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/60 border border-[#FFB07C]/20">
                <Cake className="w-4 h-4 text-[#B83262] shrink-0" />
                <span className="text-[11px] font-semibold text-[#3A2118] leading-tight">
                  Premium Cake Experience
                </span>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/60 border border-[#FFB07C]/20">
                <ShieldCheck className="w-4 h-4 text-[#B83262] shrink-0" />
                <span className="text-[11px] font-semibold text-[#3A2118] leading-tight">
                  360° Franchise Support
                </span>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/60 border border-[#FFB07C]/20">
                <Award className="w-4 h-4 text-[#B83262] shrink-0" />
                <span className="text-[11px] font-semibold text-[#3A2118] leading-tight">
                  Celebration-Led Brand
                </span>
              </div>
            </div>
          </div>

          {/* Right Column Image & Layered Floating Elements */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Main Hero Card Frame */}
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1000"
                  alt="Veloura Signature Celebration Cake"
                  className="w-full h-[400px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A2118]/70 via-transparent to-transparent" />
                
                {/* Overlay Text */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] tracking-widest uppercase font-bold text-[#FFD66B] bg-[#3A2118]/60 px-2.5 py-0.5 rounded-full inline-block backdrop-blur-sm">
                    Signature Artisanal Line
                  </span>
                  <h3 className="font-serif text-2xl font-bold">
                    Velour Berry Truffle
                  </h3>
                  <p className="text-xs text-white/80">
                    Engineered for high customer return & festive celebrations.
                  </p>
                </div>
              </div>

              {/* Floating Card 1: Customer Love */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-[#FFB07C]/30 flex items-center gap-3 animate-bounce-slow">
                <div className="w-10 h-10 rounded-xl bg-[#FFD66B]/50 flex items-center justify-center text-[#3A2118]">
                  <Sparkles className="w-5 h-5 text-[#B83262]" />
                </div>
                <div>
                  <span className="text-[10px] text-[#3A2118]/60 uppercase font-bold block">
                    Brand Promise
                  </span>
                  <span className="text-xs font-bold text-[#3A2118]">
                    Celebration Destination
                  </span>
                </div>
              </div>

              {/* Floating Card 2: Partner Badge */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-[#3A2118] text-white p-3.5 sm:p-4 rounded-2xl shadow-2xl border border-[#FFB07C]/40 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#B83262] flex items-center justify-center text-white">
                  <Cake className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-[#FFB07C] font-semibold block">
                    Partner Opportunity
                  </span>
                  <span className="text-xs font-bold">
                    Turnkey Store Model
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
