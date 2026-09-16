import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../data/content';
import { Sparkles, Search, Eye, X, Tag, Info, ArrowRight } from 'lucide-react';

export default function ProductsPage({ setActivePage }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  const categories = [
    'All',
    'Signature Cakes',
    'Classic Cakes',
    'Birthday Cakes',
    'Wedding Cakes',
    'Desserts',
    'Celebration Specials',
    'Beverage / Café Pairings'
  ];

  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.flavor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="py-12 bg-[#FFF8EE] space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B83262]/10 text-xs font-bold text-[#B83262]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Product Portfolio</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#3A2118]">
            Consumer Product Discovery
          </h1>

          <p className="text-sm text-[#3A2118]/75 leading-relaxed">
            Explore our artisanal cake menu, signature gateaux, and café beverage pairings designed for high customer repeat rates.
          </p>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFD66B]/30 text-xs font-semibold text-[#3A2118] border border-[#FFD66B]/60">
            <Info className="w-4 h-4 text-[#B83262]" />
            <span>This catalog demonstrates product range depth. Online orders are processed by local store partners.</span>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4">
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-[#3A2118]/40 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products by name, flavor, or occasion..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border border-[#FFB07C]/40 text-xs text-[#3A2118] placeholder-[#3A2118]/40 focus:outline-none focus:ring-2 focus:ring-[#B83262] shadow-sm"
            />
          </div>

          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#B83262] text-white shadow-md'
                    : 'bg-white text-[#3A2118] border border-[#FFB07C]/30 hover:bg-[#FFB07C]/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#FFB07C]/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 overflow-hidden bg-[#FFF8EE]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#3A2118]/85 text-[#FFD66B] px-2.5 py-0.5 rounded-full text-[10px] font-bold backdrop-blur-sm">
                      {product.tag}
                    </div>

                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="absolute bottom-3 right-3 bg-white/90 p-2 rounded-full shadow-md text-[#3A2118] hover:text-[#B83262] transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

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

                <div className="p-5 pt-0 flex items-center justify-between text-xs border-t border-transparent">
                  <span className="text-[11px] font-medium text-[#3A2118]/60 italic">
                    {product.flavor}
                  </span>
                  <button
                    onClick={() => setActiveModalProduct(product)}
                    className="text-xs font-bold text-[#B83262] hover:underline"
                  >
                    View Specs
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#FFB07C]/30 space-y-2">
            <p className="text-xs text-[#3A2118]/70">No products match your search criteria.</p>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="bg-[#3A2118] text-white p-8 rounded-3xl border border-[#FFB07C]/30 text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold">
            Interested in adding this menu to your city store?
          </h3>
          <p className="text-xs text-[#FFF8EE]/80 max-w-md mx-auto">
            Our Central Supply Model delivers pre-portioned signature ingredients to maintain recipe consistency across all franchise locations.
          </p>
          <button
            onClick={() => setActivePage('apply')}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold text-white bg-[#B83262] hover:bg-[#9E2450] transition-all shadow-md"
          >
            <span>Discuss Store Menu Operations</span>
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
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white text-[#3A2118] transition-colors"
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
                  <span className="font-bold text-[#3A2118]/60">Ideal Occasion:</span>
                  <span className="font-bold text-[#B83262]">{activeModalProduct.suitableFor}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
