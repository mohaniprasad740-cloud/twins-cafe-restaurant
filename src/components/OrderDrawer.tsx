import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, Send, Phone, MessageSquare, AlertCircle } from 'lucide-react';
import { MenuItem, MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  orderItems: Record<string, number>;
  onAddItem: (item: MenuItem) => void;
  onRemoveItem: (item: MenuItem) => void;
  onClearOrder: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  orderItems,
  onAddItem,
  onRemoveItem,
  onClearOrder,
}) => {
  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway' | 'delivery'>('takeaway');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [tableOrAddress, setTableOrAddress] = useState('');
  const [instructions, setInstructions] = useState('');
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  // Compute items list
  const selectedList = Object.entries(orderItems)
    .map(([id, qty]) => {
      const item = MENU_ITEMS.find((m) => m.id === id);
      return item ? { ...item, quantity: qty } : null;
    })
    .filter(Boolean) as (MenuItem & { quantity: number })[];

  const subtotal = selectedList.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  const handleWhatsAppOrder = () => {
    if (selectedList.length === 0) return;

    let text = `*NEW ORDER - TWINS CAFE & RESTAURANT*\n`;
    text += `*Service:* ${orderType.toUpperCase()}\n`;
    if (customerName) text += `*Customer:* ${customerName}\n`;
    if (customerPhone) text += `*Phone:* ${customerPhone}\n`;
    if (tableOrAddress) {
      text += orderType === 'dine-in' ? `*Table/Seating:* ${tableOrAddress}\n` : `*Address / Pickup Note:* ${tableOrAddress}\n`;
    }
    text += `\n*Order Items:*\n`;
    selectedList.forEach((item, idx) => {
      text += `${idx + 1}. ${item.name} (${item.isVeg ? 'Veg' : 'Non-Veg'}) x ${item.quantity} = ₹${item.price * item.quantity}\n`;
    });
    text += `\n*Estimated Total:* ₹${subtotal}\n`;
    if (instructions) {
      text += `*Notes:* ${instructions}\n`;
    }
    text += `\nPlease confirm preparation time and order acceptance! Thank you.`;

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.rawPhone}?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setOrderSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#160E0A] text-[#FAF6F0] h-full flex flex-col justify-between shadow-2xl border-l border-white/10 z-10 overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#1D120E]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#E06D3B]/20 text-[#E06D3B]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-['Outfit'] text-lg font-bold text-[#FAF6F0]">Your Order Bag</h2>
              <p className="text-xs text-[#EFE6DD]/60">
                {selectedList.length} item{selectedList.length === 1 ? '' : 's'} selected
              </p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 text-white/60 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close Order Bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
          {selectedList.length === 0 ? (
            <div className="text-center py-12 px-4 space-y-3">
              <div className="w-14 h-14 mx-auto rounded-full bg-white/5 flex items-center justify-center text-white/40">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <p className="font-bold text-base text-[#FAF6F0]">Your bag is empty</p>
              <p className="text-xs text-[#EFE6DD]/60 max-w-xs mx-auto">
                Explore our menu and click "Add to Order" on your favourite pizzas, momos, or burgers!
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-4 py-2 text-xs font-semibold text-white bg-[#E06D3B] rounded-lg"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              {/* Order Service Selector */}
              <div>
                <label className="block text-xs font-semibold text-[#EFE6DD]/80 mb-1.5">
                  Service Type:
                </label>
                <div className="grid grid-cols-3 gap-2 p-1 bg-[#120B08] rounded-xl border border-white/10">
                  <button
                    type="button"
                    onClick={() => setOrderType('takeaway')}
                    className={`py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      orderType === 'takeaway'
                        ? 'bg-[#E06D3B] text-white shadow'
                        : 'text-[#EFE6DD]/70 hover:text-white'
                    }`}
                  >
                    Takeaway
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('dine-in')}
                    className={`py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      orderType === 'dine-in'
                        ? 'bg-[#E06D3B] text-white shadow'
                        : 'text-[#EFE6DD]/70 hover:text-white'
                    }`}
                  >
                    Dine-in
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('delivery')}
                    className={`py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      orderType === 'delivery'
                        ? 'bg-[#E06D3B] text-white shadow'
                        : 'text-[#EFE6DD]/70 hover:text-white'
                    }`}
                  >
                    Delivery
                  </button>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#EFE6DD]/60 pb-1 border-b border-white/5">
                  <span>Selected Dishes</span>
                  <button
                    onClick={onClearOrder}
                    className="text-[#E06D3B] hover:underline flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" />
                    Clear All
                  </button>
                </div>

                {selectedList.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-xl bg-[#1D120E] border border-white/10 flex items-center justify-between gap-3"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`w-2 h-2 rounded-full shrink-0 ${
                            item.isVeg ? 'bg-emerald-400' : 'bg-red-500'
                          }`}
                        />
                        <h4 className="text-xs sm:text-sm font-bold text-[#FAF6F0] truncate">
                          {item.name}
                        </h4>
                      </div>
                      <p className="text-xs text-[#EFE6DD]/60 mt-0.5 tabular-nums">
                        ₹{item.price} each · Total: <span className="text-[#FAF6F0] font-semibold">₹{item.price * item.quantity}</span>
                      </p>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-1.5 bg-[#140D0A] p-1 rounded-lg border border-white/10 shrink-0">
                      <button
                        onClick={() => onRemoveItem(item)}
                        className="w-6 h-6 flex items-center justify-center text-white/80 hover:text-white bg-white/5 rounded text-xs"
                        aria-label="Decrease"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold px-1 tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onAddItem(item)}
                        className="w-6 h-6 flex items-center justify-center text-white bg-[#E06D3B] hover:bg-[#C85726] rounded text-xs"
                        aria-label="Increase"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Customer Info Form */}
              <div className="space-y-2.5 pt-2 border-t border-white/10">
                <p className="text-xs font-semibold text-[#EFE6DD]/80">Contact Details (for order slip):</p>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-3 py-2 text-xs bg-[#120B08] text-[#FAF6F0] placeholder:text-white/40 border border-white/10 rounded-lg focus:outline-none focus:border-[#E06D3B]"
                  />
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Mobile Number"
                    className="w-full px-3 py-2 text-xs bg-[#120B08] text-[#FAF6F0] placeholder:text-white/40 border border-white/10 rounded-lg focus:outline-none focus:border-[#E06D3B]"
                  />
                </div>

                <input
                  type="text"
                  value={tableOrAddress}
                  onChange={(e) => setTableOrAddress(e.target.value)}
                  placeholder={
                    orderType === 'dine-in'
                      ? 'Table Number (if seated in cafe)'
                      : orderType === 'delivery'
                      ? 'Delivery Address in Durgapur'
                      : 'Pickup Time / Vehicle Note'
                  }
                  className="w-full px-3 py-2 text-xs bg-[#120B08] text-[#FAF6F0] placeholder:text-white/40 border border-white/10 rounded-lg focus:outline-none focus:border-[#E06D3B]"
                />

                <input
                  type="text"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  placeholder="Special instructions (e.g. extra spicy, less ice)..."
                  className="w-full px-3 py-2 text-xs bg-[#120B08] text-[#FAF6F0] placeholder:text-white/40 border border-white/10 rounded-lg focus:outline-none focus:border-[#E06D3B]"
                />
              </div>

              {/* Pricing Notice */}
              <div className="p-2.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-[11px] text-[#FAF6F0] flex items-start gap-2">
                <AlertCircle className="w-3.5 h-3.5 text-[#E06D3B] shrink-0 mt-0.5" />
                <span>
                  Placing an order sends your selected items directly to Twins Cafe WhatsApp for instant kitchen confirmation and preparation!
                </span>
              </div>
            </>
          )}
        </div>

        {/* Footer Actions */}
        {selectedList.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-white/10 bg-[#1D120E] space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#EFE6DD]/70 font-medium">Estimated Bill Total</span>
              <span className="text-xl font-extrabold text-[#FAF6F0] font-['Outfit'] tabular-nums">
                ₹{subtotal}
              </span>
            </div>

            <button
              onClick={handleWhatsAppOrder}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-lg shadow-emerald-950/40 cursor-pointer active:scale-[0.99]"
            >
              <Send className="w-4 h-4" />
              <span>Send Order via WhatsApp</span>
            </button>

            <a
              href={`tel:${RESTAURANT_INFO.rawPhone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-[#FAF6F0] bg-white/5 hover:bg-white/10 rounded-xl transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E06D3B]" />
              <span>Or Call {RESTAURANT_INFO.phone} to Order</span>
            </a>
          </div>
        )}

      </div>
    </div>
  );
};
