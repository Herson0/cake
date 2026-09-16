import React from 'react';
import ProductThinkingModal from '../components/ProductThinkingModal';

export default function PMThinkingPage({ setActivePage }) {
  return (
    <div className="py-8">
      <ProductThinkingModal isOpen={true} onClose={() => setActivePage('home')} />
    </div>
  );
}
