import React from 'react';
import { ArrowRight, Star, Clock, MapPin, IndianRupee, Utensils, Calendar, Sparkles, Flame } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOpenOrderDrawer: () => void;
  onOpenReservationModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenOrderDrawer,
  onOpenReservationModal,
}) => {
  return (
    <section id="home" className="relative min-h-[92vh] pt-24 pb-8 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#110B08] via-[#170E0A] to-[#120D0A]">
      {/* Subtle warm glow background ambient lights */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-[#E06D3B]/12 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[300px] bg-[#D4AF37]/8 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 my-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Proposition and Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Top Announcement Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#E06D3B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E06D3B]" />
              <span>City Centre, Durgapur</span>
              <span aria-hidden="true" className="text-white/20">/</span>
              <span>Cafe & Restaurant</span>
              <span aria-hidden="true" className="text-white/20">/</span>
              <span>Dine-In & Takeaway</span>
            </div>

            {/* Main Headline with High Contrast Typography */}
            <h1 className="font-['Outfit'] text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#FAF6F0] leading-[1.08] text-balance">
              GOOD FOOD. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E06D3B] via-[#E88255] to-[#D4AF37]">
                GREAT MOOD.
              </span> <br className="hidden sm:inline" />
              UNFORGETTABLE MOMENTS.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#EFE6DD]/85 max-w-xl font-normal leading-relaxed text-balance">
              {RESTAURANT_INFO.heroSubtext}
            </p>

            {/* Quick Menu Jump Badges (clean unboxed links) */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-[#EFE6DD]/70 font-medium">
              <span className="text-[#D4AF37] font-semibold">Favorites:</span>
              <a href="#menu" className="hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-md border border-white/5">
                🍕 Pahari Pizza
              </a>
              <a href="#menu" className="hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-md border border-white/5">
                🥟 Malai Momos
              </a>
              <a href="#menu" className="hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-md border border-white/5">
                🍔 TCR Jumbo Burger
              </a>
              <a href="#menu" className="hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-md border border-white/5">
                ☕ Cold Coffee
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#E06D3B] to-[#CD5824] hover:from-[#CD5824] hover:to-[#B44B1D] rounded-xl shadow-lg shadow-[#E06D3B]/25 transition-all hover:translate-y-[-1px] active:translate-y-[0px] whitespace-nowrap cursor-pointer"
              >
                <span>Explore Full Menu</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenOrderDrawer}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-bold text-[#FAF6F0] bg-[#221611] hover:bg-[#2C1C16] border border-orange-500/25 rounded-xl transition-all hover:border-orange-500/50 shadow-md whitespace-nowrap cursor-pointer"
              >
                <Utensils className="w-4 h-4 text-[#E06D3B]" />
                <span>Order Online</span>
              </button>

              <button
                onClick={onOpenReservationModal}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#FAF6F0]/90 hover:text-white bg-transparent hover:bg-white/5 border border-white/10 rounded-xl transition-all whitespace-nowrap cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                <span>Book Table</span>
              </button>
            </div>

            {/* Unboxed Trust Signals */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#EFE6DD]/75">
              <div className="flex items-center gap-1.5 font-medium text-[#FAF6F0]">
                <div className="flex text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                  ))}
                </div>
                <span className="font-bold text-sm text-[#FAF6F0] tabular-nums">4.5</span>
                <span>/ 5.0</span>
                <span className="text-[#EFE6DD]/50">({RESTAURANT_INFO.googleReviewCount} Google reviews)</span>
              </div>
              <span aria-hidden="true" className="hidden sm:inline text-white/20">·</span>
              <div className="flex items-center gap-1">
                <span className="text-[#E06D3B] font-semibold">Average:</span>
                <span>{RESTAURANT_INFO.avgPrice}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase with Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 group">
              <img
                src="/src/assets/images/hero_twins_cafe_feast_1794219376731.jpg"
                alt="Twins Cafe & Restaurant Signature Feast with Pizzas, Burgers, Momos and Beverages"
                className="w-full h-[380px] sm:h-[440px] lg:h-[490px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#110B08]/90 via-[#110B08]/20 to-transparent pointer-events-none" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 p-2.5 px-3.5 bg-[#140D0A]/90 backdrop-blur-md rounded-xl border border-orange-500/30 text-xs shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-white">Dine-in, Takeaway & Delivery</span>
              </div>

              {/* Floating Chef Recommendation */}
              <div className="absolute bottom-16 right-4 p-3 bg-[#170E0A]/95 backdrop-blur-md rounded-xl border border-white/10 text-xs shadow-2xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-orange-500/40">
                  <img
                    src="/src/assets/images/signature_fusion_pizza_1794219377519.jpg"
                    alt="Pahari Kabab Pizza"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[10px] text-[#D4AF37] font-bold uppercase">
                    <Flame className="w-3 h-3 text-[#E06D3B]" />
                    <span>Crowd Favorite</span>
                  </div>
                  <p className="font-bold text-white text-xs">Pahari Kabab Pizza</p>
                  <p className="text-[#FAF6F0]/70 text-[11px] tabular-nums">₹280 · Freshly Baked</p>
                </div>
              </div>

              {/* Minimalist Bottom Bar */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-[#140D0A]/90 backdrop-blur-md rounded-xl border border-white/10 text-xs">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-[#FAF6F0] text-sm">Twins Cafe Signature Table</p>
                    <p className="text-[#EFE6DD]/70 text-[11px] mt-0.5">Fusion Pizzas · Steaming Momos · Double Burgers · Cold Coffee</p>
                  </div>
                  <span className="text-[#E06D3B] font-bold whitespace-nowrap pl-2">City Centre</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Full-width 4-metric strip below hero split */}
      <div className="w-full border-t border-b border-white/10 bg-[#160E0A]/95 relative z-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="flex items-center gap-3 pt-2 md:pt-0">
              <div className="p-2 rounded-lg bg-[#251812] text-[#E06D3B] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-[#FAF6F0]">City Centre, Durgapur</p>
                <p className="text-[#EFE6DD]/60 text-[11px]">B 18, Non-Company Housing</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2 md:pt-0 md:pl-4">
              <div className="p-2 rounded-lg bg-[#251812] text-[#E06D3B] shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-[#FAF6F0]">10:00 AM – 10:30 PM</p>
                <p className="text-[#EFE6DD]/60 text-[11px]">Open All 7 Days a Week</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2 md:pt-0 md:pl-4">
              <div className="p-2 rounded-lg bg-[#251812] text-[#D4AF37] shrink-0">
                <Star className="w-4 h-4 fill-[#D4AF37]" />
              </div>
              <div>
                <p className="font-bold text-[#FAF6F0]">4.5 Google Rating</p>
                <p className="text-[#EFE6DD]/60 text-[11px]">553 Real Verified Reviews</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2 md:pt-0 md:pl-4">
              <div className="p-2 rounded-lg bg-[#251812] text-[#E06D3B] shrink-0">
                <IndianRupee className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-[#FAF6F0]">₹200 – ₹400 / Person</p>
                <p className="text-[#EFE6DD]/60 text-[11px]">Value-for-Money Dining</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
