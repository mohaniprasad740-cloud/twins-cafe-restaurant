import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle2, Phone, MessageSquare, AlertCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface TableReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TableReservationModal: React.FC<TableReservationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: new Date().toISOString().split('T')[0],
    time: '19:00',
    seatingPreference: 'Cozy Booth Seating',
    occasion: 'Casual Dining',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleWhatsAppConfirmation = () => {
    const text = `*TABLE RESERVATION ENQUIRY - TWINS CAFE & RESTAURANT*\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Guests:* ${formData.guests} people\n` +
      `*Date:* ${formData.date}\n` +
      `*Time:* ${formData.time}\n` +
      `*Seating:* ${formData.seatingPreference}\n` +
      `*Occasion:* ${formData.occasion}\n` +
      (formData.notes ? `*Special Notes:* ${formData.notes}\n` : '') +
      `\nPlease let me know if a table is available for this slot. Thank you!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${RESTAURANT_INFO.rawPhone}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#18100C] text-[#FAF6F0] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#201510]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#E06D3B]/20 text-[#E06D3B]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-['Outfit'] text-lg font-bold text-[#FAF6F0]">Table Reservation</h3>
              <p className="text-xs text-[#EFE6DD]/60">Twins Cafe & Restaurant · City Centre, Durgapur</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/60 hover:text-white rounded-lg hover:bg-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-['Outfit'] text-xl font-bold text-[#FAF6F0]">
                  Reservation Request Received!
                </h4>
                <p className="text-xs sm:text-sm text-[#EFE6DD]/75 mt-1 max-w-sm mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. We have logged your reservation for <strong className="text-[#E06D3B]">{formData.guests} guests</strong> on <strong className="text-white">{formData.date} at {formData.time}</strong>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#221510] border border-white/10 text-left text-xs space-y-1.5 text-[#EFE6DD]/80">
                <p><strong>Location:</strong> B 18, City Centre, Durgapur</p>
                <p><strong>Seating Preference:</strong> {formData.seatingPreference}</p>
                <p><strong>Occasion:</strong> {formData.occasion}</p>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  onClick={handleWhatsAppConfirmation}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-md shadow-emerald-950/50 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Get Instant Confirmation on WhatsApp</span>
                </button>

                <button
                  onClick={handleReset}
                  className="w-full py-2.5 text-xs font-semibold text-[#EFE6DD]/70 hover:text-white"
                >
                  Close & Back to Site
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#EFE6DD]/80 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sen"
                    className="w-full px-3 py-2 text-xs bg-[#120B08] text-[#FAF6F0] placeholder:text-white/40 border border-white/10 rounded-lg focus:outline-none focus:border-[#E06D3B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#EFE6DD]/80 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 text-xs bg-[#120B08] text-[#FAF6F0] placeholder:text-white/40 border border-white/10 rounded-lg focus:outline-none focus:border-[#E06D3B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#EFE6DD]/80 mb-1">
                    No. of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-[#120B08] text-[#FAF6F0] border border-white/10 rounded-lg focus:outline-none focus:border-[#E06D3B]"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3-4">3 – 4 Persons</option>
                    <option value="5-8">5 – 8 Persons</option>
                    <option value="9+">Large Group (9+)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#EFE6DD]/80 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-[#120B08] text-[#FAF6F0] border border-white/10 rounded-lg focus:outline-none focus:border-[#E06D3B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#EFE6DD]/80 mb-1">
                    Time (10am–10pm)
                  </label>
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-[#120B08] text-[#FAF6F0] border border-white/10 rounded-lg focus:outline-none focus:border-[#E06D3B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#EFE6DD]/80 mb-1">
                    Seating Area
                  </label>
                  <select
                    value={formData.seatingPreference}
                    onChange={(e) => setFormData({ ...formData, seatingPreference: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-[#120B08] text-[#FAF6F0] border border-white/10 rounded-lg focus:outline-none focus:border-[#E06D3B]"
                  >
                    <option value="Cozy Booth Seating">Cozy Booth Seating</option>
                    <option value="Standard Table">Standard Dining Table</option>
                    <option value="Couples Corner">Couples Corner</option>
                    <option value="Group Celebration Area">Group Celebration Table</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#EFE6DD]/80 mb-1">
                    Occasion
                  </label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-[#120B08] text-[#FAF6F0] border border-white/10 rounded-lg focus:outline-none focus:border-[#E06D3B]"
                  >
                    <option value="Casual Dining">Casual Dining / Hangout</option>
                    <option value="Birthday Celebration">Birthday Celebration</option>
                    <option value="Anniversary">Anniversary / Date Night</option>
                    <option value="Business / Meeting">Casual Meeting</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#EFE6DD]/80 mb-1">
                  Special Notes / Diet Requests (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Need birthday cake arrangement, quiet table, etc."
                  className="w-full px-3 py-2 text-xs bg-[#120B08] text-[#FAF6F0] placeholder:text-white/40 border border-white/10 rounded-lg focus:outline-none focus:border-[#E06D3B] resize-none"
                />
              </div>

              <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-[11px] text-[#EFE6DD]/60 flex items-center gap-2">
                <AlertCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>Reservations are held for up to 15 minutes past the booking time.</span>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 text-xs sm:text-sm font-bold text-white bg-[#E06D3B] hover:bg-[#C85726] rounded-xl transition-all shadow-md shadow-[#E06D3B]/20 cursor-pointer"
                >
                  Confirm Table Request
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-3 text-xs font-semibold text-[#FAF6F0] bg-white/5 hover:bg-white/10 rounded-xl"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
