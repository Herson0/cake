import React, { useState } from 'react';
import { SUCCESS_STORIES } from '../data/content';
import { Sparkles, Quote, MapPin, Building, ShieldAlert, ArrowRight, X } from 'lucide-react';

export default function SuccessStoriesPage({ setActivePage }) {
  const [selectedStory, setSelectedStory] = useState(null);

  // Expanded set of 4 illustrative stories
  const allStories = [
    ...SUCCESS_STORIES,
    {
      id: 'story-4',
      name: 'Rohan & Neha Mehta',
      city: 'Bengaluru (Koramangala)',
      format: 'Boutique Café & Dessert Lounge',
      journey: 'Tech background professionals looking to create a premium neighborhood dessert destination.',
      challenge: 'Balancing aesthetic ambiance with efficient kitchen assembly times during peak evening hours.',
      solution: 'Implemented Veloura’s standardized kitchen flow and automated ordering counter system.',
      outcome: 'Established a benchmark café hub for weekend family gatherings and evening celebrations.',
      quote: 'The design language and brand aesthetic created immediate footfall interest from day one of opening.',
      isIllustrative: true
    }
  ];

  return (
    <div className="py-12 bg-[#FFF8EE] space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B83262]/10 text-xs font-bold text-[#B83262]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Illustrative Franchise Stories</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#3A2118]">
            Partner Journeys & Experience Profiles
          </h1>

          <p className="text-sm text-[#3A2118]/75 leading-relaxed">
            Review sample franchise case studies demonstrating how entrepreneurs across different Indian cities approach celebration retail.
          </p>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FFD66B]/30 text-[11px] font-semibold text-[#3A2118] border border-[#FFD66B]/60">
            <ShieldAlert className="w-3.5 h-3.5 text-[#B83262]" />
            <span>All stories and metrics on this page are sample case studies created for this assignment.</span>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#FFB07C]/40 shadow-sm hover:shadow-xl transition-all duration-300 space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#FFB07C]/20 pb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#B83262]/10 text-[#B83262]">
                    Illustrative Case Study
                  </span>
                  <Quote className="w-6 h-6 text-[#FFB07C]/40" />
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#3A2118]">
                    {story.name}
                  </h3>
                  <div className="flex items-center gap-4 text-xs font-semibold text-[#3A2118]/60 mt-1">
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

                <div className="bg-[#FFF8EE] p-4 rounded-2xl border border-[#FFB07C]/30 space-y-2 text-xs">
                  <div>
                    <strong className="text-[#3A2118] block font-bold">Starting Point:</strong>
                    <p className="text-[#3A2118]/80 leading-relaxed">{story.journey}</p>
                  </div>
                  <div>
                    <strong className="text-[#B83262] block font-bold">Veloura Fit & Support:</strong>
                    <p className="text-[#3A2118]/80 leading-relaxed">{story.solution}</p>
                  </div>
                  <div>
                    <strong className="text-[#3A2118] block font-bold">Qualitative Outcome:</strong>
                    <p className="text-[#3A2118]/80 leading-relaxed">{story.outcome}</p>
                  </div>
                </div>

                <p className="text-xs text-[#3A2118]/80 italic border-l-2 border-[#B83262] pl-3 py-1">
                  "{story.quote}"
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setSelectedStory(story)}
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-[#B83262] bg-[#B83262]/10 hover:bg-[#B83262] hover:text-white transition-all flex items-center justify-center gap-1"
                >
                  <span>Read Detailed Case Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#3A2118] text-white p-8 rounded-3xl text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold">Ready to write your city story with Veloura?</h3>
          <p className="text-xs text-[#FFF8EE]/80 max-w-md mx-auto">
            Submit your profile to begin the initial discovery phase for your target market.
          </p>
          <button
            onClick={() => setActivePage('apply')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold text-white bg-[#B83262] hover:bg-[#9E2450] transition-all shadow-md"
          >
            <span>Start Your Franchise Journey</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Story Modal */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-[#FFF8EE] rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#FFB07C]/40 text-[#3A2118] relative space-y-4">
            <button
              onClick={() => setSelectedStory(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white text-[#3A2118] hover:bg-[#FFB07C]/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] font-bold uppercase tracking-wider text-[#B83262]">
              Illustrative Case Study Breakdown
            </span>
            <h3 className="font-serif text-2xl font-bold">{selectedStory.name}</h3>
            <p className="text-xs font-bold text-[#3A2118]/70">{selectedStory.city} — {selectedStory.format}</p>

            <div className="space-y-3 text-xs bg-white p-4 rounded-2xl border border-[#FFB07C]/30">
              <div>
                <strong className="text-[#3A2118]">Business Objective:</strong>
                <p className="text-[#3A2118]/80">{selectedStory.challenge}</p>
              </div>
              <div>
                <strong className="text-[#B83262]">Implementation Solution:</strong>
                <p className="text-[#3A2118]/80">{selectedStory.solution}</p>
              </div>
              <div>
                <strong className="text-[#3A2118]">Key Qualitative Learning:</strong>
                <p className="text-[#3A2118]/80">{selectedStory.outcome}</p>
              </div>
            </div>

            <p className="text-[11px] text-[#3A2118]/70 italic bg-[#FFD66B]/20 p-3 rounded-xl border border-[#FFD66B]/50">
              "{selectedStory.quote}"
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
