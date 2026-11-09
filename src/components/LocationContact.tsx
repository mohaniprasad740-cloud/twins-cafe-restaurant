import React, { useState, useEffect } from 'react';
import { MapPin, Phone, MessageSquare, Clock, Navigation, Instagram, ExternalLink, Mail, CheckCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationContact: React.FC = () => {
  const [isOpenNow, setIsOpenNow] = useState(true);

  // Check if current time is within 10:00 AM - 10:30 PM IST
  useEffect(() => {
    try {
      const now = new Date();
      // IST is UTC+5:30
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istTime = new Date(utc + (3600000 * 5.5));
      const hours = istTime.getHours();
      const minutes = istTime.getMinutes();
      const currentMinuteOfDay = hours * 60 + minutes;

      const openMinute = 10 * 60; // 10:00 AM = 600
      const closeMinute = 22 * 60 + 30; // 10:30 PM = 1350

      setIsOpenNow(currentMinuteOfDay >= openMinute && currentMinuteOfDay <= closeMinute);
    } catch (e) {
      setIsOpenNow(true);
    }
  }, []);

  return (
    <section id="contact" className="py-20 bg-[#160E0A] relative border-b border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#E06D3B] mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Us In Person</span>
            <span aria-hidden="true" className="text-white/30">·</span>
            <span>City Centre, Durgapur</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FAF6F0] tracking-tight">
            Location & Contact
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#EFE6DD]/75">
            Conveniently situated in the bustling City Centre hub of Durgapur. Drop by for a meal or reach out to us directly.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Status Header Card */}
            <div className="p-6 rounded-2xl bg-[#1D120E] border border-white/10 shadow-xl space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FAF6F0]/60">
                  Current Status
                </span>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
                    }`}
                  />
                  <span className={isOpenNow ? 'text-emerald-400' : 'text-amber-400'}>
                    {isOpenNow ? 'Open Now (10am–10:30pm)' : 'Closed Now (Opens at 10am)'}
                  </span>
                </div>
              </div>

              {/* Address Block */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-white/10">
                <div className="p-2.5 rounded-xl bg-[#281812] text-[#E06D3B] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#FAF6F0]/60">
                    Restaurant Address
                  </h4>
                  <p className="text-sm font-semibold text-[#FAF6F0] mt-1 leading-snug">
                    {RESTAURANT_INFO.address}
                  </p>
                  <p className="text-xs text-[#EFE6DD]/60 mt-1">
                    Near Non-Company Housing Estate, City Centre Durgapur.
                  </p>
                </div>
              </div>

              {/* Phone Block */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-white/10">
                <div className="p-2.5 rounded-xl bg-[#281812] text-[#E06D3B] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#FAF6F0]/60">
                    Phone & WhatsApp
                  </h4>
                  <a
                    href={`tel:${RESTAURANT_INFO.rawPhone}`}
                    className="text-base font-bold text-[#FAF6F0] hover:text-[#E06D3B] transition-colors mt-1 block tabular-nums"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                  <p className="text-xs text-[#EFE6DD]/60 mt-0.5">
                    Direct call or WhatsApp order enquiries welcome.
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-white/10">
                <div className="p-2.5 rounded-xl bg-[#281812] text-[#D4AF37] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#FAF6F0]/60">
                    Opening Hours
                  </h4>
                  <p className="text-sm font-bold text-[#FAF6F0] mt-1">
                    {RESTAURANT_INFO.openingHours}
                  </p>
                  <p className="text-xs text-[#EFE6DD]/60 mt-0.5">
                    {RESTAURANT_INFO.openingHoursDetail.days}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${RESTAURANT_INFO.rawPhone}`}
                  className="flex items-center justify-center gap-2 py-3 px-3 text-xs font-bold text-white bg-[#E06D3B] hover:bg-[#C85726] rounded-xl transition-all shadow-md shadow-[#E06D3B]/20 text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Click to Call</span>
                </a>

                <a
                  href={`https://wa.me/${RESTAURANT_INFO.rawPhone}?text=${encodeURIComponent('Hello Twins Cafe & Restaurant! I would like to inquire about dine-in/ordering.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-md shadow-emerald-950/40 text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Social Link */}
              <div className="flex items-center justify-between pt-2 text-xs text-[#EFE6DD]/70">
                <span>Follow on Instagram:</span>
                <a
                  href={RESTAURANT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#E06D3B] hover:underline font-semibold"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>@twinscafeandrestaurant</span>
                </a>
              </div>

            </div>

          </div>

          {/* Interactive Map & Directions */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#1D120E] h-[380px] sm:h-[420px] relative">
              {/* Google Maps Embed for City Centre Durgapur */}
              <iframe
                title="Twins Cafe & Restaurant Location in City Centre Durgapur"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14631.796792348574!2d87.2917!3d23.5350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f771fe3079b471%3A0xc07c95a2850e0417!2sCity%20Centre%2C%20Durgapur%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating Overlay Card on Map */}
              <div className="absolute top-4 left-4 p-3 bg-[#120B08]/90 backdrop-blur-md rounded-xl border border-white/10 max-w-xs shadow-lg">
                <p className="text-xs font-bold text-[#FAF6F0]">TWINS CAFE & RESTAURANT</p>
                <p className="text-[11px] text-[#EFE6DD]/70 mt-0.5">B 18, City Centre, Durgapur, WB</p>
              </div>

              {/* Get Directions Floating Button */}
              <div className="absolute bottom-4 right-4">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-[#110B08] bg-[#FAF6F0] hover:bg-white rounded-xl shadow-xl transition-all"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#E06D3B]" />
                  <span>Get Directions in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#1D120E] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#EFE6DD]/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Easily accessible with convenient parking in City Centre Estate.</span>
              </div>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E06D3B] hover:underline font-semibold whitespace-nowrap"
              >
                Open Full Map
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
