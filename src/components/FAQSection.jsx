import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/content';
import { HelpCircle, Search, ChevronDown, Sparkles } from 'lucide-react';

export default function FAQSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(0);

  const categories = ['All', 'Franchise', 'Business', 'Location', 'Support', 'Application'];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-[#FFF8EE] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B83262]/10 text-xs font-bold text-[#B83262]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Questions & Answers</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#3A2118]">
            Frequently Asked Questions
          </h2>

          <p className="text-sm text-[#3A2118]/75 leading-relaxed">
            Have questions about the Veloura Cakes franchise opportunity? Explore our key FAQs below.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="w-5 h-5 text-[#3A2118]/40 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g., support, location, experience)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-[#FFB07C]/40 text-xs text-[#3A2118] placeholder-[#3A2118]/40 focus:outline-none focus:ring-2 focus:ring-[#B83262] shadow-sm"
          />
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#B83262] text-white shadow-md'
                  : 'bg-white text-[#3A2118] border border-[#FFB07C]/30 hover:bg-[#FFB07C]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQs List */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-3">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#FFB07C]/30 shadow-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-base font-bold text-[#3A2118] hover:text-[#B83262] transition-colors focus:outline-none"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-bold text-[#B83262] bg-[#B83262]/10 px-2 py-0.5 rounded-full shrink-0">
                        {faq.category}
                      </span>
                      <span>{faq.question}</span>
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'bg-[#B83262] text-white rotate-180' : 'bg-[#FFF5E6] text-[#3A2118]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-[#3A2118]/80 leading-relaxed border-t border-[#FFB07C]/15 animate-in fade-in">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-3xl border border-[#FFB07C]/30 space-y-2">
            <HelpCircle className="w-8 h-8 text-[#B83262] mx-auto opacity-50" />
            <p className="text-xs text-[#3A2118]/70">No matching questions found for "{searchQuery}".</p>
          </div>
        )}
      </div>
    </section>
  );
}
