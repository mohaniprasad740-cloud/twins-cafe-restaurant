import React, { useState } from 'react';
import { Camera, X, Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'pizza' | 'burgers' | 'momos' | 'starters' | 'biryani' | 'beverages' | 'desserts' | 'ambience'>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredGallery = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="gallery" className="py-20 bg-[#120D0A] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#E06D3B] mb-2">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Tour</span>
            <span aria-hidden="true" className="text-white/30">·</span>
            <span>Food & Ambience</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FAF6F0] tracking-tight">
            Photo Gallery
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#EFE6DD]/75">
            Glimpse into our appetizing kitchen creations, cozy tables, and vibrant cafe vibes.
          </p>

          <p className="text-[11px] text-[#EFE6DD]/50 mt-2">
            *Authentic high-fidelity culinary representations of Twins Cafe & Restaurant menu highlights and cafe interior.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10">
          {[
            { id: 'all', label: 'All Photos (8)' },
            { id: 'pizza', label: 'Pizzas' },
            { id: 'burgers', label: 'Burgers' },
            { id: 'momos', label: 'Momos' },
            { id: 'starters', label: 'Starters' },
            { id: 'biryani', label: 'Biryani' },
            { id: 'beverages', label: 'Coffee & Drinks' },
            { id: 'desserts', label: 'Desserts' },
            { id: 'ambience', label: 'Ambience' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === tab.id
                  ? 'bg-[#E06D3B] text-white shadow-md font-bold'
                  : 'bg-[#1C120D] text-[#EFE6DD]/70 hover:text-white border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredGallery.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(idx)}
              className="group relative rounded-2xl overflow-hidden bg-[#1D120E] border border-white/10 hover:border-orange-500/50 cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-60 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Hover / Permanent Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#110B08] via-[#110B08]/40 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#E06D3B]">
                      {item.category}
                    </span>
                    <h3 className="text-sm font-bold text-[#FAF6F0] mt-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#EFE6DD]/75 mt-0.5 line-clamp-1">
                      {item.caption}
                    </p>
                  </div>
                  <div className="p-2 rounded-lg bg-white/10 text-white shrink-0 ml-2">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && filteredGallery[activeLightboxIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <button
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full bg-[#160E0A] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src={filteredGallery[activeLightboxIndex].image}
              alt={filteredGallery[activeLightboxIndex].title}
              className="w-full max-h-[70vh] object-contain bg-black"
              referrerPolicy="no-referrer"
            />
            <div className="p-4 sm:p-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-[#E06D3B] uppercase tracking-wider">
                  {filteredGallery[activeLightboxIndex].category}
                </span>
                <h3 className="font-['Outfit'] text-lg font-bold text-[#FAF6F0]">
                  {filteredGallery[activeLightboxIndex].title}
                </h3>
                <p className="text-xs text-[#EFE6DD]/70 mt-0.5">
                  {filteredGallery[activeLightboxIndex].caption}
                </p>
              </div>
              <button
                onClick={() => setActiveLightboxIndex(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#E06D3B] rounded-lg cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
