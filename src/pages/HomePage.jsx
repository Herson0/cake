import React from 'react';
import HeroSection from '../components/HeroSection';
import BrandSnapshot from '../components/BrandSnapshot';
import WhyVelouraSection from '../components/WhyVelouraSection';
import ProductShowcase from '../components/ProductShowcase';
import FranchiseOpportunity from '../components/FranchiseOpportunity';
import FranchiseJourneyTimeline from '../components/FranchiseJourneyTimeline';
import FranchiseQuiz from '../components/FranchiseQuiz';
import SuccessStoriesSection from '../components/SuccessStoriesSection';
import DifferentiationSection from '../components/DifferentiationSection';
import FranchiseAccordion from '../components/FranchiseAccordion';
import LocationExplorer from '../components/LocationExplorer';
import FAQSection from '../components/FAQSection';
import FinalCTASection from '../components/FinalCTASection';

export default function HomePage({ setActivePage, setPreselectedCity }) {
  return (
    <div className="space-y-0">
      <HeroSection
        onExploreFranchise={() => setActivePage('franchise')}
        onDiscoverBrand={() => setActivePage('about')}
      />

      <BrandSnapshot />

      <WhyVelouraSection
        onNavigateWhyVeloura={() => setActivePage('why-veloura')}
        onEnquire={() => setActivePage('apply')}
      />

      <ProductShowcase
        onExploreMenu={() => setActivePage('products')}
      />

      <FranchiseOpportunity
        onUnderstandModel={() => setActivePage('franchise')}
        onEnquire={() => setActivePage('apply')}
      />

      <FranchiseJourneyTimeline
        onStartEnquiry={() => setActivePage('apply')}
      />

      <FranchiseQuiz
        onCompleteQuiz={() => setActivePage('apply')}
      />

      <SuccessStoriesSection
        onViewAllStories={() => setActivePage('success-stories')}
      />

      <DifferentiationSection />

      <FranchiseAccordion />

      <LocationExplorer
        onDiscussLocation={(cityName) => {
          if (setPreselectedCity) setPreselectedCity(cityName);
          setActivePage('apply');
        }}
      />

      <FAQSection />

      <FinalCTASection
        onEnquireNow={() => setActivePage('apply')}
      />
    </div>
  );
}
