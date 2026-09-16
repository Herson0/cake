import React, { useState } from 'react';
import { SUCCESS_STORIES } from '../data/content';
import { Sparkles, Quote, MapPin, Building, ArrowRight, ShieldAlert, X } from 'lucide-react';

export default function SuccessStoriesSection({ onViewAllStories }) {
  const [activeStoryModal, setActiveStoryModal] = useState(null);

  return (
    <section className="py-20 bg-[#FFF8EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B83262]/10 text-xs font-bold text-[#B83262]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Illustrative Case Studies</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#3A2118]">
            Partner Journeys & Store Concepts
          </h2>

          <p className="text-sm text-[#3A2118]/75 leading-relaxed">
            Discover sample franchise case studies illustrating how different partner profiles approach local celebration retail with Veloura.
          </p>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FFD66B]/30 text-[11px] font-semibold text-[#3A2118] border border-[#FFD66B]/60 mt-1">
            <ShieldAlert className="w-3.5 h-3.5 text-[#B83262]" />
            <span>All stories below are sample case studies created for this assignment.</span>
          </div>
        </div>

        {/* 3 Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SUCCESS_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl p-6 border border-[#FFB07C]/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#B83262]/10 text-[#B83262]">
                    Illustrative Case Study
                  </span>
                  <Quote className="w-6 h-6 text-[#FFB07C]/40 group-hover:text-[#B83262] transition-colors" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-bold text-[#3A2118] group-hover:text-[#B83262] transition-colors">
                    {story.name}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-[#3A2118]/60">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#B83262]" />
                      {story.city}
                    </span>
                    <span className="flex items-center gap-1">
                      <Building className="w-3.5 h-3.5 text-[#B83262]" />
                      {story.format}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#3A2118]/80 leading-relaxed italic border-l-2 border-[#B83262] pl-3 py-1">
                  "{story.quote}"
                </p>

                <div className="space-y-2 text-xs pt-2">
                  <div>
                    <span className="font-bold text-[#3A2118]">Starting Background:</span>
                    <p className="text-[#3A2118]/70 text-[11px] leading-snug">{story.journey}</p>
                  </div>
                  <div>
                    <span className="font-bold text-[#B83262]">Qualitative Outcome:</span>
                    <p className="text-[#3A2118]/70 text-[11px] leading-snug">{story.outcome}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-[#FFF8EE] flex items-center justify-between">
                <button
                  onClick={() => setActiveStoryModal(story)}
                  className="text-xs font-bold text-[#B83262] hover:underline flex items-center gap-1"
                >
                  <span>Read Full Journey Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onViewAllStories}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-[#3A2118] bg-white border border-[#FFB07C] hover:bg-[#B83262] hover:text-white transition-all shadow-sm"
          >
            <span>Explore All Illustrative Franchise Stories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Story Detail Modal */}
      {activeStoryModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-[#FFF8EE] rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#FFB07C]/40 text-[#3A2118] relative space-y-5">
            <button
              onClick={() => setActiveStoryModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white text-[#3A2118] hover:bg-[#FFB07C]/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#B83262]">
                Illustrative Franchise Partner Case Study
              </span>
              <h3 className="font-serif text-2xl font-bold">{activeStoryModal.name}</h3>
              <p className="text-xs font-semibold text-[#3A2118]/70">
                {activeStoryModal.city} — {activeStoryModal.format}
              </p>
            </div>

            <div className="space-y-3 text-xs bg-white p-4 rounded-2xl border border-[#FFB07C]/30">
              <div>
                <strong className="text-[#3A2118] block font-bold">The Challenge:</strong>
                <p className="text-[#3A2118]/80 leading-relaxed mt-0.5">{activeStoryModal.challenge}</p>
              </div>
              <div>
                <strong className="text-[#B83262] block font-bold">Veloura Solution:</strong>
                <p className="text-[#3A2118]/80 leading-relaxed mt-0.5">{activeStoryModal.solution}</p>
              </div>
              <div>
                <strong className="text-[#3A2118] block font-bold">Qualitative Business Learning:</strong>
                <p className="text-[#3A2118]/80 leading-relaxed mt-0.5">{activeStoryModal.outcome}</p>
              </div>
            </div>

            <p className="text-[11px] text-[#3A2118]/60 italic bg-[#FFD66B]/20 p-3 rounded-xl border border-[#FFD66B]/50">
              "{activeStoryModal.quote}"
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
