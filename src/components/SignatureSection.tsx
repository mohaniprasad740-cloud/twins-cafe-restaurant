import React, { useState } from 'react';
import { ArrowRight, Flame, Sparkles, Check, Plus, ShoppingBag } from 'lucide-react';
import { SIGNATURE_HIGHLIGHTS, MENU_ITEMS, MenuItem } from '../data/restaurantData';

interface SignatureSectionProps {
  onSelectCategory: (categoryId: string) => void;
  onAddItem: (item: MenuItem) => void;
}

export const SignatureSection: React.FC<SignatureSectionProps> = ({
  onSelectCategory,
  onAddItem,
}) => {
  const [activeHighlightIndex, setActiveHighlightIndex] = useState(0);
  const activeItem = SIGNATURE_HIGHLIGHTS[activeHighlightIndex];

  // Map signature id to menu category id
  const getCategoryId = (sigId: string) => {
    switch (sigId) {
      case 'sig-pizza': return 'pizza';
      case 'sig-burgers': return 'burgers';
      case 'sig-momos': return 'momos';
      case 'sig-starters': return 'starters';
      case 'sig-beverages': return 'beverages';
      default: return 'all';
    }
  };

  // Find a matching menu item to allow direct add
  const matchingMenuItem = MENU_ITEMS.find((m) =>
    activeItem.popularItems.some((pop) => m.name.toLowerCase().includes(pop.toLowerCase()) || pop.toLowerCase().includes(m.name.toLowerCase()))
  ) || MENU_ITEMS[0];

  return (
    <section id="cravings" className="py-20 bg-[#120D0A] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#E06D3B] mb-2">
              <Flame className="w-3.5 h-3.5" />
              <span>Chef's Signature Creations</span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span>Durgapur's Favorites</span>
            </div>
            <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FAF6F0] tracking-tight">
              CRAVINGS? <span className="text-[#E06D3B]">WE'VE GOT YOU.</span>
            </h2>
          </div>
          <p className="text-sm text-[#EFE6DD]/75 max-w-md">
            Dive into our signature culinary craft: from fiery fusion pizzas and molten cheesy burgers to steaming momos and thick cold coffees.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8 border-b border-white/10">
          {SIGNATURE_HIGHLIGHTS.map((item, idx) => {
            const isActive = idx === activeHighlightIndex;
            return (
              <button
                key={item.id}
                onClick={() => setActiveHighlightIndex(idx)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#E06D3B] text-white shadow-lg shadow-[#E06D3B]/25 scale-102 font-bold'
                    : 'bg-[#1C120D] text-[#EFE6DD]/70 hover:text-white hover:bg-[#251812] border border-white/5'
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Feature Spotlight Card */}
        <div className="rounded-3xl bg-[#19100C] border border-white/10 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Visual showcase */}
            <div className="lg:col-span-7 relative h-[340px] sm:h-[420px] lg:h-[480px] overflow-hidden group">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#19100C] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#19100C] pointer-events-none" />
              
              <div className="absolute top-4 left-4 p-2 px-3.5 bg-[#110B08]/85 backdrop-blur-md rounded-xl border border-white/10 text-xs font-semibold text-[#FAF6F0] flex items-center gap-1.5 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Handmade to Order</span>
              </div>
            </div>

            {/* Content & popular items */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-full space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#E06D3B]">
                  Signature Highlight
                </span>
                <h3 className="font-['Outfit'] text-2xl sm:text-3xl font-extrabold text-[#FAF6F0] mt-1 leading-snug">
                  {activeItem.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#D4AF37] mt-1">
                  {activeItem.tagline}
                </p>
                <p className="text-xs sm:text-sm text-[#EFE6DD]/80 mt-3 leading-relaxed">
                  {activeItem.description}
                </p>

                {/* Taste Profile Notes */}
                {activeItem.tasteNotes && (
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {activeItem.tasteNotes.map((note, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-[11px] font-medium bg-[#251812] text-[#FAF6F0]/90 rounded-md border border-white/5"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Known popular dishes in this theme */}
              <div className="pt-4 border-t border-white/10 space-y-2.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#FAF6F0]/60">
                  Popular Dishes In This Category:
                </p>
                <div className="space-y-2">
                  {activeItem.popularItems.map((dish, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between text-xs py-2 px-3.5 rounded-xl bg-[#241712]/70 border border-white/5"
                    >
                      <div className="flex items-center gap-2 text-[#FAF6F0] font-medium">
                        <Check className="w-3.5 h-3.5 text-[#E06D3B]" />
                        <span>{dish}</span>
                      </div>
                      <span className="text-[#D4AF37] font-semibold text-[11px]">TCR Specialty</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={() => onAddItem(matchingMenuItem)}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold text-white bg-[#E06D3B] hover:bg-[#C85726] rounded-xl transition-all shadow-md shadow-[#E06D3B]/20 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add {matchingMenuItem.name}</span>
                </button>

                <a
                  href="#menu"
                  onClick={() => onSelectCategory(getCategoryId(activeItem.id))}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-[#FAF6F0] bg-[#2A1B14] hover:bg-[#38241B] border border-white/10 rounded-xl transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>View All {activeItem.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E06D3B]" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
