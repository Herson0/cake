import React from 'react';
import FranchiseOpportunity from '../components/FranchiseOpportunity';
import FranchiseJourneyTimeline from '../components/FranchiseJourneyTimeline';
import FranchiseQuiz from '../components/FranchiseQuiz';
import FranchiseAccordion from '../components/FranchiseAccordion';
import LocationExplorer from '../components/LocationExplorer';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function FranchisePage({ setActivePage, setPreselectedCity }) {
  const whatHappensNext = [
    { num: '01', title: 'Submit Enquiry', desc: 'Complete the multi-section online application with your target city and profile.' },
    { num: '02', title: 'Initial Conversation', desc: 'An introductory video conference call to discuss goals and concept alignment.' },
    { num: '03', title: 'Opportunity Discussion', desc: 'In-depth review of store format options, catchment mapping, and operational playbooks.' },
    { num: '04', title: 'Evaluation & Site Review', desc: 'Collaborative analysis of location demographics and civil readiness.' },
    { num: '05', title: 'Next Steps & Agreement', desc: 'Finalizing territory onboarding, store fit-out planning, and staff academy onboarding.' }
  ];

  return (
    <div className="py-12 bg-[#FFF8EE] space-y-16">
      {/* Page Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#3A2118] via-[#24140E] to-[#3A2118] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B83262]/30 border border-[#B83262]/50 text-xs font-bold text-[#FFD66B]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Franchise Opportunity Overview</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-extrabold tracking-tight">
            Build More Than a Store. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB07C] via-[#FFD66B] to-[#FFB07C]">
              Build a Local Legacy.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#FFF8EE]/85 max-w-2xl leading-relaxed">
            Discover how Veloura Cakes combines modern celebration branding with turn-key store systems to help passionate entrepreneurs build thriving neighborhood destinations.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setActivePage('apply')}
              className="px-8 py-3.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#B83262] to-[#D94B7B] shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <span>Apply for Franchise Opportunity</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Opportunity Component */}
      <FranchiseOpportunity
        onUnderstandModel={() => {
          const el = document.getElementById('what-happens-next');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onEnquire={() => setActivePage('apply')}
      />

      {/* Journey Timeline */}
      <FranchiseJourneyTimeline
        onStartEnquiry={() => setActivePage('apply')}
      />

      {/* What Happens Next Process Visual */}
      <div id="what-happens-next" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#FFB07C]/40 shadow-xl space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B83262]">
              Transparent Evaluation Process
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#3A2118]">
              What Happens Next After You Submit an Enquiry?
            </h2>
            <p className="text-xs text-[#3A2118]/70 max-w-md mx-auto">
              We follow a structured 5-stage evaluation process to ensure mutual alignment before taking any next steps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {whatHappensNext.map((step, i) => (
              <div key={i} className="bg-[#FFF8EE] p-4 rounded-2xl border border-[#FFB07C]/30 space-y-2 relative">
                <span className="text-xs font-extrabold text-[#B83262] block">
                  Step {step.num}
                </span>
                <h3 className="font-serif text-sm font-bold text-[#3A2118]">
                  {step.title}
                </h3>
                <p className="text-[11px] text-[#3A2118]/75 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={() => setActivePage('apply')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold text-white bg-[#B83262] hover:bg-[#9E2450] shadow-md transition-all"
            >
              <span>Begin Step 01: Submit Franchise Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Franchise Quiz */}
      <FranchiseQuiz
        onCompleteQuiz={() => setActivePage('apply')}
      />

      {/* Locations Explorer */}
      <LocationExplorer
        onDiscussLocation={(cityName) => {
          if (setPreselectedCity) setPreselectedCity(cityName);
          setActivePage('apply');
        }}
      />

      {/* Accordion FAQ */}
      <FranchiseAccordion />
    </div>
  );
}
