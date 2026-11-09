import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SignatureSection } from './components/SignatureSection';
import { MenuSection } from './components/MenuSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsSection } from './components/ReviewsSection';
import { GallerySection } from './components/GallerySection';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { OrderDrawer } from './components/OrderDrawer';
import { TableReservationModal } from './components/TableReservationModal';
import { MenuItem, RESTAURANT_INFO } from './data/restaurantData';
import { ShoppingBag, Phone, MessageSquare, Check, Calendar } from 'lucide-react';

export default function App() {
  const [orderItems, setOrderItems] = useState<Record<string, number>>({});
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 2800);
  };

  const handleAddItem = (item: MenuItem) => {
    setOrderItems((prev) => {
      const currentQty = prev[item.id] || 0;
      return { ...prev, [item.id]: currentQty + 1 };
    });
    showToast(`Added ${item.name} to order bag`);
  };

  const handleRemoveItem = (item: MenuItem) => {
    setOrderItems((prev) => {
      const currentQty = prev[item.id] || 0;
      if (currentQty <= 1) {
        const next = { ...prev };
        delete next[item.id];
        return next;
      }
      return { ...prev, [item.id]: currentQty - 1 };
    });
  };

  const handleClearOrder = () => {
    setOrderItems({});
    showToast('Cleared order bag');
  };

  const totalOrderCount = Object.values(orderItems).reduce((sum, qty) => sum + qty, 0);

  const handleSelectCategoryFromAnywhere = (catId: string) => {
    setSelectedCategory(catId);
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#110B08] text-[#FAF6F0] selection:bg-[#E06D3B] selection:text-white">
      {/* Top Navbar */}
      <Navbar
        orderCount={totalOrderCount}
        onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
        onOpenReservationModal={() => setIsReservationModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
          onOpenReservationModal={() => setIsReservationModalOpen(true)}
        />

        {/* About Section */}
        <About />

        {/* Signature Cravings Showcase */}
        <SignatureSection
          onSelectCategory={handleSelectCategoryFromAnywhere}
          onAddItem={handleAddItem}
        />

        {/* Digital Interactive Menu */}
        <MenuSection
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          orderItems={orderItems}
          onAddItem={handleAddItem}
          onRemoveItem={handleRemoveItem}
        />

        {/* Why Choose Twins Cafe */}
        <WhyChooseUs />

        {/* Customer Reviews & Google Rating */}
        <ReviewsSection />

        {/* Photo Gallery with Lightbox */}
        <GallerySection />

        {/* Location, Contact & Interactive Map */}
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={handleSelectCategoryFromAnywhere}
        onOpenReservationModal={() => setIsReservationModalOpen(true)}
      />

      {/* Interactive Order Bag Drawer */}
      <OrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        orderItems={orderItems}
        onAddItem={handleAddItem}
        onRemoveItem={handleRemoveItem}
        onClearOrder={handleClearOrder}
      />

      {/* Table Reservation Booking Modal */}
      <TableReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 sm:bottom-6 right-4 z-50 flex items-center gap-2 px-4 py-2.5 bg-[#1F140F] text-[#FAF6F0] border border-orange-500/30 rounded-xl shadow-2xl shadow-black/80 text-xs font-semibold animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="w-5 h-5 rounded-full bg-[#E06D3B] text-white flex items-center justify-center shrink-0">
            <Check className="w-3 h-3" />
          </div>
          <span>{toastMessage}</span>
          <button
            onClick={() => setIsOrderDrawerOpen(true)}
            className="ml-2 text-[#E06D3B] underline font-bold"
          >
            View Bag
          </button>
        </div>
      )}

      {/* Mobile Sticky Quick Action Bar (Under 15% mobile viewport cap) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#160E0A]/95 backdrop-blur-md border-t border-white/10 p-2.5 px-4 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${RESTAURANT_INFO.rawPhone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-bold text-[#FAF6F0] bg-white/5 rounded-lg border border-white/10"
        >
          <Phone className="w-3.5 h-3.5 text-[#E06D3B]" />
          <span>Call</span>
        </a>

        <a
          href={`https://wa.me/${RESTAURANT_INFO.rawPhone}?text=${encodeURIComponent('Hello Twins Cafe & Restaurant! I would like to make an enquiry.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-bold text-white bg-emerald-600 rounded-lg"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => setIsOrderDrawerOpen(true)}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-bold text-white bg-[#E06D3B] rounded-lg shadow-md relative"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Bag</span>
          {totalOrderCount > 0 && (
            <span className="w-4 h-4 rounded-full bg-white text-[#110B08] text-[10px] font-black flex items-center justify-center">
              {totalOrderCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
