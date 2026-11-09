import React, { useState, useMemo } from 'react';
import { Search, Plus, Minus, Check, Flame, Clock, Sparkles, AlertCircle, Eye, X, ShoppingBag } from 'lucide-react';
import { MenuItem, MENU_CATEGORIES, MENU_ITEMS } from '../data/restaurantData';

interface MenuSectionProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  orderItems: Record<string, number>;
  onAddItem: (item: MenuItem) => void;
  onRemoveItem: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  orderItems,
  onAddItem,
  onRemoveItem,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [activeModalItem, setActiveModalItem] = useState<MenuItem | null>(null);

  const quickSearchTags = [
    'Pahari Kabab Pizza',
    'Malai Momos',
    'Cold Coffee',
    'Chicken Lollipop',
    'TCR Jumbo Burger',
    'Biryani',
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Diet filter
      if (dietFilter === 'veg' && !item.isVeg) {
        return false;
      }
      if (dietFilter === 'non-veg' && item.isVeg) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesCategory = item.categoryLabel.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCategory) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, dietFilter, searchQuery]);

  return (
    <section id="menu" className="py-20 bg-[#160E0A] relative border-b border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#E06D3B] mb-2">
            <span>Explore Flavours</span>
            <span aria-hidden="true" className="text-white/30">·</span>
            <span>Handcrafted Daily</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FAF6F0] tracking-tight">
            Our Digital Menu
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#EFE6DD]/75">
            Browse our full selection of Indian fusion pizzas, juicy burgers, steaming Darjeeling momos, Chinese stir-fries, and barista drinks.
          </p>

          {/* Pricing transparency note */}
          <div className="inline-flex items-center gap-1.5 mt-3 px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[11px] text-[#EFE6DD]/70">
            <AlertCircle className="w-3.5 h-3.5 text-[#E06D3B] shrink-0" />
            <span>Prices are indicative restaurant menu placeholders. Final billing at café counter.</span>
          </div>
        </div>

        {/* Search, Quick Chips & Diet Toggle Bar */}
        <div className="bg-[#1B110D] p-4 rounded-2xl border border-white/10 shadow-xl space-y-3.5 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Search Box */}
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes (e.g. Pahari Pizza, Momos, Cold Coffee)..."
                className="w-full pl-10 pr-12 py-2.5 text-xs sm:text-sm bg-[#120B08] text-[#FAF6F0] placeholder:text-white/40 border border-white/10 rounded-xl focus:outline-none focus:border-[#E06D3B] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-white/50 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Diet Filter: All / Veg / Non-Veg */}
            <div className="flex items-center gap-1.5 p-1 bg-[#120B08] rounded-xl border border-white/10 shrink-0 self-stretch sm:self-auto justify-center">
              <button
                onClick={() => setDietFilter('all')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  dietFilter === 'all'
                    ? 'bg-[#E06D3B] text-white shadow-sm'
                    : 'text-[#EFE6DD]/70 hover:text-white'
                }`}
              >
                All Dishes
              </button>
              <button
                onClick={() => setDietFilter('veg')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  dietFilter === 'veg'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-[#EFE6DD]/70 hover:text-white'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Pure Veg
              </button>
              <button
                onClick={() => setDietFilter('non-veg')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  dietFilter === 'non-veg'
                    ? 'bg-red-700 text-white shadow-sm'
                    : 'text-[#EFE6DD]/70 hover:text-white'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-400" />
                Non-Veg
              </button>
            </div>
          </div>

          {/* Quick Search Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="text-[#D4AF37] text-[11px] font-semibold whitespace-nowrap">Popular searches:</span>
            {quickSearchTags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setSearchQuery(tag);
                  onSelectCategory('all');
                }}
                className={`px-2.5 py-1 rounded-md text-[11px] whitespace-nowrap border transition-colors cursor-pointer ${
                  searchQuery === tag
                    ? 'bg-[#E06D3B] text-white border-[#E06D3B]'
                    : 'bg-[#251812] text-[#EFE6DD]/70 hover:text-white border-white/5 hover:border-white/15'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Tab Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10 border-b border-white/10">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#FAF6F0] text-[#160E0A] shadow-md shadow-white/10 scale-100 font-bold'
                    : 'bg-[#1C120D] text-[#EFE6DD]/70 hover:text-white hover:bg-[#251812] border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 px-4 bg-[#1B110D] rounded-2xl border border-white/10">
            <p className="text-base font-semibold text-[#FAF6F0]">No dishes matched your filters</p>
            <p className="text-xs text-[#EFE6DD]/60 mt-1">Try resetting the search query or diet filter.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setDietFilter('all');
                onSelectCategory('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-white bg-[#E06D3B] rounded-lg cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const countInOrder = orderItems[item.id] || 0;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl bg-[#1B110D] border border-white/10 hover:border-orange-500/40 overflow-hidden flex flex-col justify-between transition-all duration-300 group shadow-xl hover:-translate-y-1"
                >
                  {/* Top Image Section */}
                  <div
                    onClick={() => setActiveModalItem(item)}
                    className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#241712] cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B110D] via-transparent to-transparent pointer-events-none" />

                    {/* Quick view button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 pointer-events-none">
                      <span className="px-3 py-1.5 bg-[#140D0A]/90 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-white/10">
                        <Eye className="w-3.5 h-3.5" />
                        Quick View
                      </span>
                    </div>

                    {/* Veg / Non-Veg Indicator Symbol */}
                    <div className="absolute top-3 left-3 p-1.5 bg-[#120B08]/90 backdrop-blur-md rounded-md border border-white/10 flex items-center gap-1.5 text-[11px] font-semibold">
                      <div
                        className={`w-3.5 h-3.5 border flex items-center justify-center p-0.5 rounded-[2px] ${
                          item.isVeg ? 'border-emerald-500' : 'border-red-600'
                        }`}
                        title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            item.isVeg ? 'bg-emerald-500' : 'bg-red-600'
                          }`}
                        />
                      </div>
                      <span className={item.isVeg ? 'text-emerald-400' : 'text-red-400'}>
                        {item.isVeg ? 'Veg' : 'Non-Veg'}
                      </span>
                    </div>

                    {/* Popular / Signature Indicator */}
                    {item.isSignature ? (
                      <div className="absolute top-3 right-3 px-2 py-0.5 bg-[#E06D3B] text-white text-[10px] font-bold tracking-wider uppercase rounded shadow-sm">
                        Chef Signature
                      </div>
                    ) : item.isPopular ? (
                      <div className="absolute top-3 right-3 px-2 py-0.5 bg-[#D4AF37] text-[#110B08] text-[10px] font-extrabold tracking-wider uppercase rounded shadow-sm">
                        Popular
                      </div>
                    ) : null}

                    {/* Preparation Time hint */}
                    {item.prepTime && (
                      <div className="absolute bottom-2 right-3 text-[11px] text-[#EFE6DD]/75 flex items-center gap-1 bg-[#120B08]/70 px-2 py-0.5 rounded backdrop-blur-sm">
                        <Clock className="w-3 h-3 text-[#D4AF37]" />
                        <span>{item.prepTime}</span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h3
                          onClick={() => setActiveModalItem(item)}
                          className="font-['Outfit'] text-lg font-bold text-[#FAF6F0] group-hover:text-[#E06D3B] transition-colors leading-snug cursor-pointer"
                        >
                          {item.name}
                        </h3>
                      </div>
                      <p className="text-xs text-[#EFE6DD]/75 mt-1.5 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Price and Add/Counter Controls */}
                    <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[11px] text-[#EFE6DD]/50 block uppercase tracking-wider">Menu Price</span>
                        <span className="text-lg font-extrabold text-[#FAF6F0] font-['Outfit'] tabular-nums">
                          ₹{item.price}
                        </span>
                      </div>

                      {countInOrder === 0 ? (
                        <button
                          onClick={() => onAddItem(item)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#E06D3B] hover:bg-[#C85726] rounded-xl transition-all shadow-md shadow-[#E06D3B]/20 active:scale-95 cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Order</span>
                        </button>
                      ) : (
                        <div className="flex items-center gap-2 bg-[#251812] border border-orange-500/30 rounded-xl p-1">
                          <button
                            onClick={() => onRemoveItem(item)}
                            className="w-7 h-7 flex items-center justify-center text-white/80 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold text-white px-1.5 tabular-nums">
                            {countInOrder}
                          </span>
                          <button
                            onClick={() => onAddItem(item)}
                            className="w-7 h-7 flex items-center justify-center text-white bg-[#E06D3B] hover:bg-[#C85726] rounded-lg text-xs font-bold"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Dish Quick-View Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#18100C] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-64 w-full relative">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18100C] via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 p-1.5 bg-[#120B08]/90 backdrop-blur-md rounded-md border border-white/10 flex items-center gap-1.5 text-xs font-semibold">
                <span className={activeModalItem.isVeg ? 'text-emerald-400' : 'text-red-400'}>
                  {activeModalItem.isVeg ? '● Pure Vegetarian' : '● Non-Vegetarian'}
                </span>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#E06D3B] font-semibold">
                  {activeModalItem.categoryLabel}
                </span>
                <h3 className="font-['Outfit'] text-2xl font-bold text-[#FAF6F0] mt-0.5">
                  {activeModalItem.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#EFE6DD]/80 mt-2 leading-relaxed">
                  {activeModalItem.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 p-3 bg-[#221510] rounded-xl border border-white/5 text-xs">
                <div>
                  <span className="text-[#EFE6DD]/50 block">Spice Intensity</span>
                  <span className="font-bold text-[#D4AF37] capitalize mt-0.5 block">
                    {activeModalItem.spiceLevel || 'Mild'}
                  </span>
                </div>
                <div>
                  <span className="text-[#EFE6DD]/50 block">Prep Time</span>
                  <span className="font-bold text-white mt-0.5 block">
                    {activeModalItem.prepTime || '12-15 mins'}
                  </span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-white/10">
                <div>
                  <span className="text-xs text-[#EFE6DD]/50 block">Price</span>
                  <span className="text-2xl font-extrabold text-[#FAF6F0] font-['Outfit'] tabular-nums">
                    ₹{activeModalItem.price}
                  </span>
                </div>

                <button
                  onClick={() => {
                    onAddItem(activeModalItem);
                    setActiveModalItem(null);
                  }}
                  className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#E06D3B] hover:bg-[#C85726] rounded-xl shadow-lg shadow-[#E06D3B]/25 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add to Order Bag</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
