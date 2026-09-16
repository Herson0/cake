import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductThinkingModal from './components/ProductThinkingModal';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import WhyVelouraPage from './pages/WhyVelouraPage';
import FranchisePage from './pages/FranchisePage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import LocationsPage from './pages/LocationsPage';
import FAQPage from './pages/FAQPage';
import ApplyPage from './pages/ApplyPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isPMModalOpen, setIsPMModalOpen] = useState(false);
  const [preselectedCity, setPreselectedCity] = useState('');

  // Handle hash-based routing fallback for bookmarking/direct links
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash && ['home', 'about', 'products', 'why-veloura', 'franchise', 'success-stories', 'locations', 'faq', 'apply', 'pm-thinking'].includes(hash)) {
        if (hash === 'pm-thinking') {
          setIsPMModalOpen(true);
        } else {
          setActivePage(hash);
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (pageId) => {
    setActivePage(pageId);
    window.location.hash = `#/${pageId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8EE] text-[#3A2118] selection:bg-[#B83262] selection:text-white font-sans antialiased">
      {/* Sticky Header */}
      <Navbar
        activePage={activePage}
        setActivePage={navigateTo}
        openPMModal={() => setIsPMModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <HomePage
            setActivePage={navigateTo}
            setPreselectedCity={setPreselectedCity}
          />
        )}
        {activePage === 'about' && (
          <AboutPage setActivePage={navigateTo} />
        )}
        {activePage === 'products' && (
          <ProductsPage setActivePage={navigateTo} />
        )}
        {activePage === 'why-veloura' && (
          <WhyVelouraPage setActivePage={navigateTo} />
        )}
        {activePage === 'franchise' && (
          <FranchisePage
            setActivePage={navigateTo}
            setPreselectedCity={setPreselectedCity}
          />
        )}
        {activePage === 'success-stories' && (
          <SuccessStoriesPage setActivePage={navigateTo} />
        )}
        {activePage === 'locations' && (
          <LocationsPage
            setActivePage={navigateTo}
            setPreselectedCity={setPreselectedCity}
          />
        )}
        {activePage === 'faq' && (
          <FAQPage setActivePage={navigateTo} />
        )}
        {activePage === 'apply' && (
          <ApplyPage preselectedCity={preselectedCity} />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActivePage={navigateTo}
        openPMModal={() => setIsPMModalOpen(true)}
      />

      {/* Global PM Strategy Modal */}
      <ProductThinkingModal
        isOpen={isPMModalOpen}
        onClose={() => setIsPMModalOpen(false)}
      />
    </div>
  );
}
