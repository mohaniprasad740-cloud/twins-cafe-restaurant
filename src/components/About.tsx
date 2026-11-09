import React from 'react';
import { Coffee, Heart, Sparkles, Users, Award, ShieldCheck, Flame, Wifi } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#160F0C] relative overflow-hidden border-b border-white/5">
      {/* Subtle ambient blur */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#E06D3B]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#E06D3B] mb-2">
            <span>Our Story</span>
            <span aria-hidden="true" className="text-white/30">·</span>
            <span>City Centre, Durgapur</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FAF6F0] tracking-tight text-balance">
            {RESTAURANT_INFO.aboutHeading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#EFE6DD]/80 leading-relaxed font-normal">
            {RESTAURANT_INFO.aboutDescription}
          </p>
        </div>

        {/* Story Grid with Ambience Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Ambience Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src="/src/assets/images/twins_cafe_ambience_1794219379931.jpg"
                alt="Twins Cafe & Restaurant Warm and Cozy Interior Ambience"
                className="w-full h-[400px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#110B08]/90 via-[#110B08]/20 to-transparent pointer-events-none" />

              {/* Floating badges on image */}
              <div className="absolute top-4 left-4 p-2.5 px-3.5 bg-[#140D0A]/90 backdrop-blur-md rounded-xl border border-white/10 text-xs text-[#FAF6F0] flex items-center gap-2 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-semibold">Warm Ambience & Relaxed Seating</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#140D0A]/90 backdrop-blur-md rounded-2xl border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-[#FAF6F0]">The Cozy Corner in City Centre</p>
                    <p className="text-xs text-[#EFE6DD]/70 mt-0.5">
                      Warm wooden tables, ambient Edison glows & relaxing conversations.
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#E06D3B] uppercase tracking-wider pl-2">Est. Durgapur</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values & Atmosphere Details */}
          <div className="lg:col-span-6 space-y-5">
            <div className="p-5 rounded-2xl bg-[#1E140F] border border-white/10 hover:border-orange-500/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#E06D3B]/10 text-[#E06D3B] shrink-0 mt-0.5">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#FAF6F0]">Crafted with Freshness & Passion</h3>
                  <p className="text-xs sm:text-sm text-[#EFE6DD]/75 mt-1 leading-relaxed">
                    From our hand-stretched fusion Pahari Kabab pizzas to freshly folded Darjeeling momos and rich, comforting cold coffee, we treat each dish as an experience to be savoured.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#1E140F] border border-white/10 hover:border-orange-500/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#E06D3B]/10 text-[#E06D3B] shrink-0 mt-0.5">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#FAF6F0]">Youthful & Instagram-Worthy</h3>
                  <p className="text-xs sm:text-sm text-[#EFE6DD]/75 mt-1 leading-relaxed">
                    Designed as a vibrant social hub where friends laugh over TCR jumbo burgers, couples unwind with shakes, and colleagues catch up over quick, flavourful meals.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#1E140F] border border-white/10 hover:border-orange-500/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#E06D3B]/10 text-[#E06D3B] shrink-0 mt-0.5">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#FAF6F0]">Genuine Durgapur Hospitality</h3>
                  <p className="text-xs sm:text-sm text-[#EFE6DD]/75 mt-1 leading-relaxed">
                    Serving Durgapur with genuine smiles and prompt care. We pride ourselves on creating a comfortable, welcoming second home for every food lover.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Amenities strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs">
              <div className="p-2.5 rounded-xl bg-[#140D0A] border border-white/5 text-center">
                <p className="text-[#D4AF37] font-bold">100% Fresh</p>
                <p className="text-[#EFE6DD]/60 text-[10px] mt-0.5">Dough Made Daily</p>
              </div>
              <div className="p-2.5 rounded-xl bg-[#140D0A] border border-white/5 text-center">
                <p className="text-[#E06D3B] font-bold">AC Dining</p>
                <p className="text-[#EFE6DD]/60 text-[10px] mt-0.5">Comfortable Seating</p>
              </div>
              <div className="p-2.5 rounded-xl bg-[#140D0A] border border-white/5 text-center">
                <p className="text-[#FAF6F0] font-bold">Fast Service</p>
                <p className="text-[#EFE6DD]/60 text-[10px] mt-0.5">Dine-in & Parcel</p>
              </div>
              <div className="p-2.5 rounded-xl bg-[#140D0A] border border-white/5 text-center">
                <p className="text-emerald-400 font-bold">Easy Parking</p>
                <p className="text-[#EFE6DD]/60 text-[10px] mt-0.5">City Centre Hub</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
