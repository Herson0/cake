import React, { useState, useEffect } from 'react';
import { Menu, X, Cake, Sparkles, ChevronRight, Lightbulb } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, openPMModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Products', id: 'products' },
    { name: 'Why Veloura', id: 'why-veloura' },
    { name: 'Franchise', id: 'franchise' },
    { name: 'Success Stories', id: 'success-stories' },
    { name: 'Locations', id: 'locations' },
    { name: 'FAQ', id: 'faq' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FFF8EE]/95 backdrop-blur-md shadow-md py-3 border-b border-[#FFB07C]/30'
            : 'bg-[#FFF8EE]/80 backdrop-blur-sm py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 text-left group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#B83262] via-[#D94B7B] to-[#FFB07C] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <Cake className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-[#3A2118] block leading-tight group-hover:text-[#B83262] transition-colors">
                  VELOURA
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#B83262] block">
                  Cakes & Celebrations
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1 bg-[#3A2118]/5 p-1 rounded-full border border-[#FFB07C]/20">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    activePage === link.id
                      ? 'bg-[#B83262] text-white shadow-sm'
                      : 'text-[#3A2118] hover:text-[#B83262] hover:bg-white/60'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Actions: PM Thinking & Franchise CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={openPMModal}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#FFD66B]/30 border border-[#FFD66B] text-[#3A2118] hover:bg-[#FFD66B] transition-all"
                title="View Product Management case study framework & priorities"
              >
                <Lightbulb className="w-3.5 h-3.5 text-[#B83262]" />
                <span>Product Thinking</span>
              </button>

              <button
                onClick={() => handleNavClick('apply')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#B83262] to-[#D94B7B] shadow-md hover:shadow-lg hover:from-[#9E2450] hover:to-[#B83262] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Become a Franchise Partner</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex xl:hidden items-center gap-2">
              <button
                onClick={openPMModal}
                className="sm:hidden p-2 rounded-lg bg-[#FFD66B]/40 text-[#3A2118] text-xs font-bold flex items-center gap-1"
              >
                <Lightbulb className="w-4 h-4 text-[#B83262]" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#3A2118] hover:bg-[#FFB07C]/20 transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#FFF8EE] border-b border-[#FFB07C]/30 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-2 gap-1.5 py-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-colors ${
                    activePage === link.id
                      ? 'bg-[#B83262] text-white font-bold'
                      : 'text-[#3A2118] bg-white/70 hover:bg-[#FFB07C]/20'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-[#FFB07C]/20 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  openPMModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-[#FFD66B]/50 text-[#3A2118]"
              >
                <Lightbulb className="w-4 h-4 text-[#B83262]" />
                <span>View Product Management Thinking</span>
              </button>

              <button
                onClick={() => handleNavClick('apply')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#B83262] to-[#D94B7B] shadow-md"
              >
                <span>Become a Franchise Partner</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}
