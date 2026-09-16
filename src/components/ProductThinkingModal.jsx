import React from 'react';
import { X, Target, Users, Lightbulb, CheckCircle, HelpCircle, Layers, ArrowRight } from 'lucide-react';
import { PRODUCT_MANAGEMENT_STRATEGY } from '../data/content';

export default function ProductThinkingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#FFF8EE] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#FFB07C]/40 text-[#3A2118]">
        {/* Header */}
        <div className="sticky top-0 bg-[#3A2118] text-white p-6 sm:p-8 rounded-t-3xl flex items-center justify-between z-10 border-b border-[#B83262]/30">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B83262] text-xs font-bold text-white mb-2">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Product Management Case Study Documentation</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">
              Product Strategy & Features Prioritization
            </h2>
            <p className="text-xs text-[#FFF8EE]/70 mt-1">
              Veloura Cakes — Franchise Brand & Lead Generation Platform
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Strategy Summary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-[#FFB07C]/30 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-[#B83262] font-bold text-sm">
                <Target className="w-4 h-4" />
                <span>Primary Business Goal</span>
              </div>
              <p className="text-xs text-[#3A2118]/80 leading-relaxed font-medium">
                {PRODUCT_MANAGEMENT_STRATEGY.businessGoal}
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#FFB07C]/30 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-[#B83262] font-bold text-sm">
                <Users className="w-4 h-4" />
                <span>Primary Target Persona</span>
              </div>
              <p className="text-xs text-[#3A2118]/80 leading-relaxed font-medium">
                {PRODUCT_MANAGEMENT_STRATEGY.primaryUser}
              </p>
            </div>
          </div>

          {/* User Journey Funnel */}
          <div className="bg-white p-6 rounded-2xl border border-[#FFB07C]/30 shadow-sm space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#3A2118] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#B83262]" />
              <span>User Experience & Conversion Funnel Strategy</span>
            </h3>
            <p className="text-xs text-[#3A2118]/80">
              The primary conversion is <strong>not online cake purchasing</strong>. It is converting qualified visitors into franchise enquiries via a high-trust narrative:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2">
              {PRODUCT_MANAGEMENT_STRATEGY.conversionFunnel.map((item, idx) => (
                <div key={idx} className="bg-[#FFF8EE] p-3.5 rounded-xl border border-[#FFB07C]/30 relative text-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B83262] block">
                    Phase 0{idx + 1}
                  </span>
                  <span className="font-bold text-xs text-[#3A2118] block mt-1">
                    {item.step}
                  </span>
                  <span className="text-[11px] text-[#3A2118]/70 block mt-1">
                    {item.goal}
                  </span>
                  <div className="mt-2 text-[10px] font-semibold text-[#B83262] bg-[#B83262]/10 py-1 px-2 rounded-full">
                    {item.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Prioritization Matrix */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#3A2118]">
              Product Features Prioritization Matrix
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Must Have */}
              <div className="bg-[#B83262]/5 border-2 border-[#B83262] rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-[#B83262]/20 pb-2">
                  <span className="font-bold text-sm text-[#B83262] uppercase tracking-wider">
                    MUST HAVE
                  </span>
                  <span className="text-[10px] bg-[#B83262] text-white px-2 py-0.5 rounded-full font-bold">
                    P0 Core
                  </span>
                </div>
                <ul className="space-y-2.5 text-xs text-[#3A2118]/85">
                  {PRODUCT_MANAGEMENT_STRATEGY.featurePrioritization.mustHave.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#B83262] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Should Have */}
              <div className="bg-[#FFB07C]/10 border-2 border-[#FFB07C] rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-[#FFB07C]/30 pb-2">
                  <span className="font-bold text-sm text-[#3A2118] uppercase tracking-wider">
                    SHOULD HAVE
                  </span>
                  <span className="text-[10px] bg-[#FFB07C] text-[#3A2118] px-2 py-0.5 rounded-full font-bold">
                    P1 Important
                  </span>
                </div>
                <ul className="space-y-2.5 text-xs text-[#3A2118]/85">
                  {PRODUCT_MANAGEMENT_STRATEGY.featurePrioritization.shouldHave.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#FFB07C] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nice to Have */}
              <div className="bg-[#FFD66B]/15 border-2 border-[#FFD66B] rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-[#FFD66B]/40 pb-2">
                  <span className="font-bold text-sm text-[#3A2118] uppercase tracking-wider">
                    NICE TO HAVE
                  </span>
                  <span className="text-[10px] bg-[#FFD66B] text-[#3A2118] px-2 py-0.5 rounded-full font-bold">
                    P2 Future
                  </span>
                </div>
                <ul className="space-y-2.5 text-xs text-[#3A2118]/85">
                  {PRODUCT_MANAGEMENT_STRATEGY.featurePrioritization.niceToHave.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <HelpCircle className="w-3.5 h-3.5 text-[#3A2118]/60 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-[#FFB07C]/30 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#3A2118] hover:bg-[#B83262] transition-colors"
            >
              Close Framework View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
