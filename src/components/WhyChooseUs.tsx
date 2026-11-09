import React from 'react';
import { UtensilsCrossed, Armchair, Wallet, Smile, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/restaurantData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <UtensilsCrossed className="w-5 h-5 text-[#E06D3B]" />;
      case 1: return <Armchair className="w-5 h-5 text-[#E06D3B]" />;
      case 2: return <Wallet className="w-5 h-5 text-[#D4AF37]" />;
      case 3: return <Smile className="w-5 h-5 text-[#E06D3B]" />;
      default: return <Sparkles className="w-5 h-5 text-[#E06D3B]" />;
    }
  };

  return (
    <section className="py-20 bg-[#140D0A] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#E06D3B] mb-2">
            <span>The TCR Experience</span>
            <span aria-hidden="true" className="text-white/30">·</span>
            <span>Why Guests Love Us</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FAF6F0] tracking-tight">
            Why Choose Twins Cafe?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#EFE6DD]/75">
            More than just delicious bites — we're dedicated to creating genuine moments of joy and hospitality in City Centre Durgapur.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((feature, idx) => (
            <div
              key={feature.number}
              className="p-6 sm:p-7 rounded-2xl bg-[#1B110D] border border-white/10 hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-[#251812] border border-white/5 group-hover:bg-[#E06D3B]/10 transition-colors">
                    {getIcon(idx)}
                  </div>
                  <span className="font-['Outfit'] text-xs font-bold text-[#E06D3B]/70 tracking-widest">
                    {feature.number}
                  </span>
                </div>

                <h3 className="font-['Outfit'] text-xl font-bold text-[#FAF6F0] group-hover:text-[#E06D3B] transition-colors leading-snug">
                  {feature.title}
                </h3>
                <p className="text-xs font-semibold text-[#D4AF37] mt-1">
                  {feature.subtitle}
                </p>
                <p className="text-xs text-[#EFE6DD]/70 mt-3 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-[11px] text-[#EFE6DD]/50">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E06D3B]" />
                <span>Verified by 550+ visitors</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
