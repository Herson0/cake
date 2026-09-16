import React from 'react';
import FAQSection from '../components/FAQSection';
import { Sparkles, HelpCircle } from 'lucide-react';

export default function FAQPage({ setActivePage }) {
  return (
    <div className="py-12 bg-[#FFF8EE] space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <FAQSection />

        <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#FFF5E6] to-[#FFE0C8] p-8 rounded-3xl border border-[#FFB07C]/40 text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-[#3A2118]">
            Have a specific question not covered here?
          </h3>
          <p className="text-xs text-[#3A2118]/80 leading-relaxed">
            Submit an enquiry form and our franchise evaluation team will reach out with detailed guidance tailored to your city context.
          </p>
          <button
            onClick={() => setActivePage('apply')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold text-white bg-[#B83262] hover:bg-[#9E2450] shadow-md transition-all"
          >
            <span>Submit Franchise Enquiry</span>
          </button>
        </div>
      </div>
    </div>
  );
}
