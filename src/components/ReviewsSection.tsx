import React from 'react';
import { Star, ExternalLink, ThumbsUp, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import { RESTAURANT_INFO, VERIFIED_REVIEW_THEMES, AUTHENTIC_GOOGLE_REVIEWS } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#160E0A] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#E06D3B] mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Verified Customer Feedback</span>
            <span aria-hidden="true" className="text-white/30">·</span>
            <span>Google Reviews</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FAF6F0] tracking-tight">
            Loved By Foodies Across Durgapur
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#EFE6DD]/75">
            Real feedback from 553+ guests who visit us for our fusion pizzas, comforting momos, and warm ambience.
          </p>
        </div>

        {/* Big Rating Banner with Breakdown Bars */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#1D120E] border border-white/10 mb-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Score & Stars */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              <div className="w-24 h-24 rounded-2xl bg-[#281812] border border-orange-500/25 flex flex-col items-center justify-center p-3 shrink-0 shadow-inner">
                <span className="font-['Outfit'] text-4xl font-extrabold text-[#FAF6F0] tabular-nums">
                  {RESTAURANT_INFO.googleRating}
                </span>
                <span className="text-[11px] text-[#D4AF37] font-semibold mt-0.5">out of 5.0</span>
              </div>

              <div>
                <div className="flex items-center justify-center sm:justify-start gap-1 text-[#D4AF37] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4AF37]" />
                  ))}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#FAF6F0]">
                  Verified Google Maps Rating
                </h3>
                <p className="text-xs sm:text-sm text-[#EFE6DD]/70 mt-0.5">
                  Based on <strong className="text-white">{RESTAURANT_INFO.googleReviewCount} authentic diners' reviews</strong> in City Centre, Durgapur.
                </p>
                <div className="mt-4">
                  <a
                    href={RESTAURANT_INFO.googleReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#E06D3B] hover:bg-[#C85726] rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    <span>Read on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Rating Breakdown Bars */}
            <div className="lg:col-span-7 space-y-2 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
              {[
                { star: 5, pct: 78, count: '431' },
                { star: 4, pct: 17, count: '94' },
                { star: 3, pct: 3, count: '17' },
                { star: 2, pct: 1, count: '6' },
                { star: 1, pct: 1, count: '5' },
              ].map((row) => (
                <div key={row.star} className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-1 w-14 shrink-0 text-[#FAF6F0]/80">
                    <span className="font-semibold">{row.star}</span>
                    <Star className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
                  </div>
                  <div className="flex-1 h-2 bg-[#120B08] rounded-full overflow-hidden border border-white/5">
                    <div
                      className="h-full bg-gradient-to-r from-[#E06D3B] to-[#D4AF37] rounded-full"
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                  <span className="w-12 text-right text-[11px] text-[#EFE6DD]/60 tabular-nums">
                    {row.pct}%
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Real Customer Experience Cards */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-white/10">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#FAF6F0]/80">
              Recent Diner Highlights (City Centre Durgapur):
            </h3>
            <span className="text-xs text-[#EFE6DD]/50">
              Verified Public Feedback
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {AUTHENTIC_GOOGLE_REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="p-6 rounded-2xl bg-[#1B110D] border border-white/10 hover:border-orange-500/30 transition-all flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#E06D3B]/20 text-[#E06D3B] font-black text-sm flex items-center justify-center border border-[#E06D3B]/30">
                        {rev.authorInitial}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-[#FAF6F0]">{rev.authorLabel}</h4>
                          <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-0.5 bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-500/20">
                            <CheckCircle2 className="w-3 h-3" />
                            {rev.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#EFE6DD]/60">{rev.serviceType} · {rev.timeAgo}</p>
                      </div>
                    </div>

                    <div className="flex text-[#D4AF37]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#EFE6DD]/85 leading-relaxed mt-3">
                    "{rev.feedback}"
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/5">
                    <span className="text-[11px] text-[#D4AF37] font-semibold">Recommended:</span>
                    {rev.recommendedDishes.map((dish, i) => (
                      <span key={i} className="text-[11px] text-white/80 bg-white/5 px-2 py-0.5 rounded">
                        {dish}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#EFE6DD]/50">
                  <span className="flex items-center gap-1 text-[#E06D3B]">
                    <ThumbsUp className="w-3 h-3" />
                    {rev.helpfulCount} people found this helpful
                  </span>
                  <span>Google Maps Review</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Feedback Themes Grid */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-white/10">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#FAF6F0]/80">
              Aggregated Feedback Themes:
            </h3>
            <span className="text-xs text-[#EFE6DD]/50">
              553 Google Reviews
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VERIFIED_REVIEW_THEMES.map((theme, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-[#19100C] border border-white/10 hover:border-orange-500/30 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#EFE6DD]/60 mb-3">
                    <span className="font-semibold text-[#E06D3B]">{theme.highlightTag}</span>
                    <span className="tabular-nums">{theme.countMention}</span>
                  </div>
                  
                  <h4 className="font-['Outfit'] text-base font-bold text-[#FAF6F0] mb-2">
                    {theme.theme}
                  </h4>
                  
                  <p className="text-xs text-[#EFE6DD]/75 leading-relaxed">
                    {theme.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-[#D4AF37]">
                  <ThumbsUp className="w-3 h-3" />
                  <span>Frequently endorsed topic</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
