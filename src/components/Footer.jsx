import React from 'react';
import { Cake, Heart, ShieldAlert, ArrowUpRight, Sparkles } from 'lucide-react';


export default function Footer({ setActivePage, openPMModal }) {
  const handleLinkClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#3A2118] text-[#FFF8EE] pt-16 pb-12 border-t-4 border-[#B83262]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#B83262] flex items-center justify-center text-white">
                <Cake className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                VELOURA CAKES
              </span>
            </div>
            <p className="text-sm text-[#FFF8EE]/70 max-w-sm leading-relaxed">
              A modern celebration-focused cake brand designed to help entrepreneurs build recognizable local businesses supported by a robust franchise system.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B83262]/20 border border-[#B83262]/40 text-xs text-[#FFB07C]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Celebration-Led Retail Concept</span>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-4 border-b border-[#FFF8EE]/10 pb-2">
              Explore Brand
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FFF8EE]/80">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-[#FFB07C] transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-[#FFB07C] transition-colors">
                  Our Story & Values
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('products')} className="hover:text-[#FFB07C] transition-colors">
                  Product Showcase
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('why-veloura')} className="hover:text-[#FFB07C] transition-colors">
                  Why Veloura Model
                </button>
              </li>
            </ul>
          </div>

          {/* Franchise Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-4 border-b border-[#FFF8EE]/10 pb-2">
              Franchise
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FFF8EE]/80">
              <li>
                <button onClick={() => handleLinkClick('franchise')} className="hover:text-[#FFB07C] transition-colors">
                  Franchise Opportunity
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('success-stories')} className="hover:text-[#FFB07C] transition-colors">
                  Success Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('locations')} className="hover:text-[#FFB07C] transition-colors">
                  Target Location Markets
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('apply')} className="hover:text-[#FFB07C] font-semibold text-[#FFB07C] transition-colors">
                  Submit Enquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Support & PM Case Study */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-4 border-b border-[#FFF8EE]/10 pb-2">
              Support & Info
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FFF8EE]/80">
              <li>
                <button onClick={() => handleLinkClick('faq')} className="hover:text-[#FFB07C] transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={openPMModal} className="text-[#FFD66B] font-semibold hover:underline flex items-center gap-1">
                  <span>Product Management Thinking</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
              <li className="pt-2 text-[11px] text-[#FFF8EE]/60">
                Contact: enquiries@velouracakes-concept.demo
              </li>
            </ul>
          </div>
        </div>

        {/* Assignment Disclaimer Box */}
        <div className="bg-[#24140E] rounded-2xl p-4 sm:p-5 border border-[#FFB07C]/20 text-xs text-[#FFF8EE]/75 space-y-2 mb-8">
          <div className="flex items-center gap-2 text-[#FFD66B] font-semibold">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span>Product Management Assignment Disclaimer</span>
          </div>
          <p>
            <strong>Veloura Cakes</strong> is a fictional concept website created exclusively for a Product Management case study.
            All franchise details, operational metrics, city opportunity analyses, customer testimonials, and market stories presented on this site are illustrative and intended solely for design and strategy demonstration purposes.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#FFF8EE]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FFF8EE]/50 gap-4">
          <p>© 2026 Veloura Cakes — Concept website created for a Product Management assignment.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#B83262] fill-current" />
            <span>for Product & Design Excellence</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
