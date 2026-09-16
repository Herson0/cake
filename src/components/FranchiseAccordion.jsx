import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle, Info } from 'lucide-react';

export default function FranchiseAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const accordionTopics = [
    {
      q: 'What does the Veloura Cakes franchise model involve?',
      a: 'The franchise model involves operating a branded celebration bakery or boutique café using standardized store designs, curated product recipes, and operational playbooks. Franchisees manage local day-to-day store operations while receiving central brand, marketing, and logistics support.'
    },
    {
      q: 'What kind of support is provided to franchise partners?',
      a: 'Support includes 360-degree partner enablement: site selection guidance, store interior design templates, pre-launch staff training at Veloura Academy, POS integration, marketing campaign toolkits, and ongoing operational quality audits.'
    },
    {
      q: 'What are the estimated financial commitments or investment figures?',
      a: 'Specific investment figures, setup costs, and unit economics vary by city, store format, and civil readiness. These details are shared and thoroughly discussed during the formal franchise evaluation process post initial enquiry submission.'
    },
    {
      q: 'What store formats are possible for target locations?',
      a: 'Veloura supports adaptable store formats including Express Takeaway Counters (300–500 sq.ft), Classic Bakery Counters (600–900 sq.ft), and Boutique Cafés & Lounges (1000–1500 sq.ft) depending on catchment density.'
    },
    {
      q: 'What should I consider before applying for a franchise?',
      a: 'Applicants should evaluate their passion for customer celebration experiences, readiness to lead a local retail team, familiarity with their target city catchment, and commitment to maintaining brand quality standards.'
    },
    {
      q: 'How does the enquiry and evaluation process work?',
      a: 'After submitting the online enquiry form, our franchise team reviews your profile within 48 hours. Qualified applicants are invited to an introductory discovery call followed by territory feasibility discussions and detailed evaluation steps.'
    }
  ];

  return (
    <section className="py-20 bg-[#FFF8EE] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B83262]/10 text-xs font-bold text-[#B83262]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Franchise Information</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#3A2118]">
            Key Franchise Evaluation Topics
          </h2>

          <p className="text-sm text-[#3A2118]/75 leading-relaxed">
            Essential information for prospective partners considering bringing Veloura Cakes to their city.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {accordionTopics.map((topic, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#FFB07C]/30 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-base font-bold text-[#3A2118] hover:text-[#B83262] transition-colors focus:outline-none"
                >
                  <span>{topic.q}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#B83262] text-white rotate-180' : 'bg-[#FFF5E6] text-[#3A2118]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-[#3A2118]/80 leading-relaxed border-t border-[#FFB07C]/15 animate-in fade-in duration-200">
                    <p>{topic.a}</p>
                    {topic.q.includes('investment') && (
                      <div className="mt-2.5 inline-flex items-center gap-1.5 p-2 rounded-lg bg-[#FFD66B]/30 text-[11px] font-semibold text-[#3A2118]">
                        <Info className="w-3.5 h-3.5 text-[#B83262]" />
                        <span>Exact financial figures are discussed during the franchise evaluation process.</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
