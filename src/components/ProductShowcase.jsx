import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../data/content';
import { Sparkles, Eye, ArrowRight, Heart, X, Tag } from 'lucide-react';

export default function ProductShowcase({ onExploreMenu }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  const categories = [
    'All',
    'Signature Cakes',
    'Birthday Cakes',
    'Wedding Cakes',
    'Desserts',
    'Celebration Specials',
    'Beverage / Café Pairings'
  ];

  const filteredProducts =
    selectedCategory === 'All'
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-[#FFF5E6] to-[#FFF8EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B83262]/10 border border-[#B83262]/20 text-xs font-bold text-[#B83262]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consumer Brand Strength</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#3A2118]">
            Crafted for Celebrations & Customer Loyalty
          </h2>

          <p className="text-sm text-[#3A2118]/75 leading-relaxed">
            Our product menu is engineered for high repeatable consumer demand, combining timeless signature cakes with artisanal cafe pairings.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
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

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#FFB07C]/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Frame */}
                <div className="relative h-48 overflow-hidden bg-[#FFF8EE]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#3A2118]/80 backdrop-blur-sm text-[#FFD66B] px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                    {product.tag}
                  </div>

                  <button
                    onClick={() => setActiveModalProduct(product)}
                    className="absolute bottom-3 right-3 bg-white/90 hover:bg-white p-2 rounded-full shadow-md text-[#3A2118] hover:text-[#B83262] transition-colors"
                    title="Quick preview"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B83262]">
                    {product.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#3A2118] group-hover:text-[#B83262] transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#3A2118]/70 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 pt-0 border-t border-transparent flex items-center justify-between text-xs">
                <span className="text-[11px] font-medium text-[#3A2118]/60 italic">
                  {product.flavor}
                </span>
                <button
                  onClick={() => setActiveModalProduct(product)}
                  className="text-xs font-bold text-[#B83262] hover:underline flex items-center gap-1"
                >
                  <span>Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onExploreMenu}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold text-white bg-[#3A2118] hover:bg-[#B83262] shadow-md hover:shadow-lg transition-all"
          >
            <span>Explore Complete Menu & Product Strategy</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Detail Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-[#FFF8EE] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#FFB07C]/40 text-[#3A2118] relative">
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[#3A2118] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-56 overflow-hidden">
              <img
                src={activeModalProduct.image}
                alt={activeModalProduct.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-0.5 rounded-full bg-[#B83262] text-white text-[10px] font-bold">
                  {activeModalProduct.tag}
                </span>
                <span className="text-xs font-bold text-[#B83262]">
                  {activeModalProduct.category}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold">
                {activeModalProduct.name}
              </h3>

              <p className="text-xs text-[#3A2118]/80 leading-relaxed">
                {activeModalProduct.description}
              </p>

              <div className="bg-white p-3.5 rounded-xl border border-[#FFB07C]/30 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="font-bold text-[#3A2118]/60">Flavor Profile:</span>
                  <span className="font-bold text-[#3A2118]">{activeModalProduct.flavor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-[#3A2118]/60">Ideal Occasions:</span>
                  <span className="font-bold text-[#B83262]">{activeModalProduct.suitableFor}</span>
                </div>
              </div>

              <p className="text-[11px] text-[#3A2118]/60 italic text-center pt-2">
                Note: Product catalog items demonstrate consumer menu depth. Online retail order processing is handled locally by regional franchise units.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
