import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Phone, UtensilsCrossed, Calendar } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  orderCount: number;
  onOpenOrderDrawer: () => void;
  onOpenReservationModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  orderCount,
  onOpenOrderDrawer,
  onOpenReservationModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Cravings', href: '#cravings' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#120D0A]/95 backdrop-blur-md border-b border-orange-500/15 py-3 shadow-xl shadow-black/40'
            : 'bg-gradient-to-b from-[#110B08]/90 via-[#110B08]/60 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 md:gap-8">
            {/* Zone 1: Single text element Brand Zone */}
            <a
              href="#home"
              className="group flex items-center gap-2.5 text-xl md:text-2xl font-bold tracking-tight text-[#FAF6F0] whitespace-nowrap shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-[#E06D3B] text-white flex items-center justify-center font-black text-sm shadow-md shadow-[#E06D3B]/20">
                TC
              </div>
              <span className="font-['Outfit'] tracking-wide uppercase">
                Twins <span className="text-[#E06D3B]">Cafe</span>
              </span>
            </a>

            {/* Zone 2: Concise single-line text navigation links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#FAF6F0]/80">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#E06D3B] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#E06D3B]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action & Mobile trigger */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenReservationModal}
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#FAF6F0] bg-[#221611] hover:bg-[#2F1F17] border border-orange-500/20 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <Calendar className="w-3.5 h-3.5 text-[#E06D3B]" />
                <span>Book Table</span>
              </button>

              <button
                onClick={onOpenOrderDrawer}
                className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#E06D3B] hover:bg-[#C85726] rounded-lg transition-all shadow-md shadow-[#E06D3B]/25 active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
                aria-label="View Order Bag"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden sm:inline">Order Bag</span>
                {orderCount > 0 && (
                  <span className="inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[11px] font-bold text-[#110B08] bg-[#FAF6F0] rounded-full">
                    {orderCount}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#FAF6F0] hover:text-[#E06D3B] focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#160F0C] border-b border-orange-500/20 px-4 pt-3 pb-6 mt-3 space-y-3 shadow-2xl">
            <div className="grid grid-cols-2 gap-2 pb-2 border-b border-white/10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-[#FAF6F0]/90 hover:text-[#E06D3B] hover:bg-white/5 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservationModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-[#FAF6F0] bg-[#241712] border border-orange-500/30 rounded-lg"
              >
                <Calendar className="w-4 h-4 text-[#E06D3B]" />
                Book Table Reservation
              </button>
              <a
                href={`tel:${RESTAURANT_INFO.rawPhone}`}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium text-[#FAF6F0]/80 hover:text-white"
              >
                <Phone className="w-3.5 h-3.5 text-[#E06D3B]" />
                Call {RESTAURANT_INFO.phone}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
