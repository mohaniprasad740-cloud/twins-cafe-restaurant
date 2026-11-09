import React from 'react';
import { MapPin, Phone, Clock, Instagram, Heart, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO, MENU_CATEGORIES } from '../data/restaurantData';

interface FooterProps {
  onSelectCategory: (categoryId: string) => void;
  onOpenReservationModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenReservationModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F0907] text-[#FAF6F0] pt-16 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Intro */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#E06D3B] text-white flex items-center justify-center font-black text-sm">
                TC
              </div>
              <span className="font-['Outfit'] text-xl font-bold uppercase tracking-wide text-[#FAF6F0]">
                Twins <span className="text-[#E06D3B]">Cafe & Restaurant</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#EFE6DD]/70 leading-relaxed max-w-sm">
              Your destination in City Centre, Durgapur for Indian fusion pizzas, juicy burgers, authentic steaming momos, and cozy café vibes.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#E06D3B] hover:text-white text-[#FAF6F0]/80 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`tel:${RESTAURANT_INFO.rawPhone}`}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#E06D3B] hover:text-white text-[#FAF6F0]/80 transition-all"
                aria-label="Phone Call"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#E06D3B] hover:text-white text-[#FAF6F0]/80 transition-all"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FAF6F0]/80">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#EFE6DD]/70">
              <li>
                <a href="#home" className="hover:text-[#E06D3B] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#E06D3B] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#E06D3B] transition-colors">Digital Menu</a>
              </li>
              <li>
                <a href="#cravings" className="hover:text-[#E06D3B] transition-colors">Signature Cravings</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#E06D3B] transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#E06D3B] transition-colors">Google Reviews</a>
              </li>
              <li>
                <button
                  onClick={onOpenReservationModal}
                  className="hover:text-[#E06D3B] transition-colors text-left"
                >
                  Book Table
                </button>
              </li>
            </ul>
          </div>

          {/* Menu Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FAF6F0]/80">
              Menu Specialties
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-[#EFE6DD]/70">
              {MENU_CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                <a
                  key={cat.id}
                  href="#menu"
                  onClick={() => onSelectCategory(cat.id)}
                  className="hover:text-[#E06D3B] transition-colors truncate"
                >
                  {cat.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3 space-y-3 text-xs text-[#EFE6DD]/75">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FAF6F0]/80">
              Visit & Contact
            </h4>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#E06D3B] shrink-0 mt-0.5" />
              <span>{RESTAURANT_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#E06D3B] shrink-0" />
              <a href={`tel:${RESTAURANT_INFO.rawPhone}`} className="hover:text-white tabular-nums">
                {RESTAURANT_INFO.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>{RESTAURANT_INFO.openingHours}</span>
            </div>
            <p className="text-[11px] text-[#EFE6DD]/50 pt-1">
              Website: <a href="https://twinscafeandrestaurant.com" className="hover:underline">{RESTAURANT_INFO.website}</a>
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EFE6DD]/60">
          <p>
            © {new Date().getFullYear()} TWINS CAFE & RESTAURANT. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-[#EFE6DD]/70 hover:text-[#E06D3B] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
