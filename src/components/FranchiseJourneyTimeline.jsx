import React, { useState } from 'react';
import { FRANCHISE_STEPS } from '../data/content';
import { Sparkles, CheckCircle, ChevronRight, Info } from 'lucide-react';

export default function FranchiseJourneyTimeline({ onStartEnquiry }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = FRANCHISE_STEPS[activeStepIndex];

  return (
    <section className="py-20 bg-[#FFF8EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB07C]/20 border border-[#FFB07C]/40 text-xs font-bold text-[#3A2118]">
            <Sparkles className="w-3.5 h-3.5 text-[#B83262]" />
            <span>Interactive Partner Onboarding</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#3A2118]">
            The 5-Step Franchise Journey
          </h2>

          <p className="text-sm text-[#3A2118]/75 leading-relaxed">
            Click or hover over each milestone below to understand how we support you from your initial enquiry to grand store opening.
          </p>
        </div>

        {/* Timeline Bar Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {FRANCHISE_STEPS.map((stepItem, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={stepItem.step}
                onClick={() => setActiveStepIndex(idx)}
                onMouseEnter={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden ${
                  isActive
                    ? 'bg-[#B83262] text-white border-[#B83262] shadow-lg scale-102'
                    : 'bg-white text-[#3A2118] border-[#FFB07C]/30 hover:border-[#B83262]/50 hover:bg-[#FFF5E6]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-serif text-xl font-bold ${
                      isActive ? 'text-[#FFD66B]' : 'text-[#B83262]'
                    }`}
                  >
                    {stepItem.step}
                  </span>
                  {isActive && <CheckCircle className="w-4 h-4 text-white" />}
                </div>

                <h3 className="font-serif text-sm font-bold block truncate">
                  {stepItem.title}
                </h3>
                <span
                  className={`text-[10px] block truncate font-medium mt-0.5 ${
                    isActive ? 'text-white/80' : 'text-[#3A2118]/60'
                  }`}
                >
                  {stepItem.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase Panel */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#FFB07C]/40 shadow-xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B83262]/10 text-xs font-bold text-[#B83262]">
                <Info className="w-3.5 h-3.5" />
                <span>Stage Details — Step {activeStep.step} of 05</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3A2118]">
                {activeStep.title}: <span className="text-[#B83262]">{activeStep.subtitle}</span>
              </h3>

              <p className="text-sm text-[#3A2118]/85 leading-relaxed">
                {activeStep.fullDesc}
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#3A2118]/70">
                <div className="flex items-center gap-1.5 bg-[#FFF8EE] px-3 py-1.5 rounded-lg border border-[#FFB07C]/30">
                  <CheckCircle className="w-3.5 h-3.5 text-[#B83262]" />
                  <span>No upfront financial obligation for Step 01–03</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#FFF8EE] px-3 py-1.5 rounded-lg border border-[#FFB07C]/30">
                  <CheckCircle className="w-3.5 h-3.5 text-[#B83262]" />
                  <span>Collaborative Territory Evaluation</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-gradient-to-br from-[#FFF5E6] to-[#FFE0C8] p-6 rounded-2xl border border-[#FFB07C]/40 text-center space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#B83262] block">
                Next Recommended Step
              </span>
              <p className="text-xs text-[#3A2118] font-medium leading-normal">
                Ready to initiate Stage 01 Discover and evaluate your target city?
              </p>
              <button
                onClick={onStartEnquiry}
                className="w-full py-3 rounded-full text-xs font-bold text-white bg-[#B83262] hover:bg-[#9E2450] shadow-md transition-all flex items-center justify-center gap-1"
              >
                <span>Start Franchise Conversation</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
