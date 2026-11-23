import React, { useState } from 'react';
import { useI18n } from '../../context/I18nContext';
import { MagneticButton } from '../common/MagneticButton';
import { programmes } from '../../content/programmes';
import { MapPin, Phone, Mail, Clock, Play, X, CheckCircle2 } from 'lucide-react';

export const SectionVisit: React.FC = () => {
  const { t, locale } = useI18n();
  const [tourBooked, setTourBooked] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const [tourForm, setTourForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '2026-12-15',
    time: '11:00 AM',
    programme: programmes[0].name,
  });

  const handleTourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tourForm.name && tourForm.email) {
      setTourBooked(true);
    }
  };

  return (
    <section className="py-24 md:py-32 bg-canvas">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-55 block mb-2">
              Section 13 · Experience the Space
            </span>
            <h2 className="type-h2 text-ink">
              {t.sections.visitTitle}
            </h2>
            <p className="type-body mt-2">
              {t.sections.visitSub}
            </p>
          </div>
          {/* Drone Video Lightbox Launcher */}
          <button
            onClick={() => setVideoModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-pill bg-sand text-ink hover:bg-apricot/40 font-semibold text-xs shadow-sm transition-colors self-start"
          >
            <Play className="w-4 h-4 fill-ink" />
            <span>Take the 6-Minute Drone Tour</span>
          </button>
        </div>

        {/* 2 Tiles: Tour-booking form + Interactive Map Tile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Tile 1: Tour-Booking Form (Col 6) */}
          <div className="lg:col-span-6 bg-cloud rounded-[28px] p-8 md:p-10 shadow-sm border border-black/5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-terracotta block mb-1">
                Guided Academic Walkthrough
              </span>
              <h3 className="text-2xl font-semibold text-ink mb-2">
                Book an In-Person Campus Tour
              </h3>
              <p className="text-xs text-ink-55 leading-relaxed mb-6">
                Tour the Block 11 research laboratories, meet faculty deans, and receive a preliminary transcript credit review.
              </p>

              {tourBooked ? (
                <div className="bg-mint/60 border border-mint text-emerald-900 p-6 rounded-card text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-800" />
                  <h4 className="text-base font-semibold">Your Campus Tour is Confirmed!</h4>
                  <p className="text-xs text-ink-55 max-w-xs mx-auto">
                    We have dispatched your visitor pass and visitor parking instructions to {tourForm.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleTourSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-ink mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={tourForm.name}
                      onChange={(e) => setTourForm({ ...tourForm, name: e.target.value })}
                      placeholder="e.g. Maya Al-Kindi"
                      className="w-full px-4 py-3 rounded-pill bg-sand/30 border border-black/10 text-xs text-ink outline-none focus:border-focus"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-ink mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={tourForm.email}
                        onChange={(e) => setTourForm({ ...tourForm, email: e.target.value })}
                        placeholder="name@domain.com"
                        className="w-full px-4 py-3 rounded-pill bg-sand/30 border border-black/10 text-xs text-ink outline-none focus:border-focus"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-ink mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={tourForm.phone}
                        onChange={(e) => setTourForm({ ...tourForm, phone: e.target.value })}
                        placeholder="+971 50 123 4567"
                        className="w-full px-4 py-3 rounded-pill bg-sand/30 border border-black/10 text-xs text-ink outline-none focus:border-focus"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-ink mb-1">
                        Preferred Tour Date
                      </label>
                      <input
                        type="date"
                        value={tourForm.date}
                        onChange={(e) => setTourForm({ ...tourForm, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-pill bg-sand/30 border border-black/10 text-xs text-ink outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-ink mb-1">
                        Preferred Slot
                      </label>
                      <select
                        value={tourForm.time}
                        onChange={(e) => setTourForm({ ...tourForm, time: e.target.value })}
                        className="w-full px-4 py-3 rounded-pill bg-sand/30 border border-black/10 text-xs text-ink outline-none"
                      >
                        <option>10:00 AM Morning Tour</option>
                        <option>11:00 AM Lab Walkthrough</option>
                        <option>02:00 PM Afternoon Tour</option>
                        <option>04:00 PM Twilight Tour</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ink mb-1">
                      Programme of Primary Interest
                    </label>
                    <select
                      value={tourForm.programme}
                      onChange={(e) => setTourForm({ ...tourForm, programme: e.target.value })}
                      className="w-full px-4 py-3 rounded-pill bg-sand/30 border border-black/10 text-xs text-ink outline-none"
                    >
                      {programmes.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="pt-2">
                    <MagneticButton
                      type="submit"
                      variant="terracotta"
                      size="md"
                      className="w-full justify-center shadow-sm"
                    >
                      Confirm Scheduled Campus Tour
                    </MagneticButton>
                  </div>
                </form>
              )}
            </div>

            <div className="pt-6 border-t border-black/5 mt-6 text-xs text-ink-55">
              Tours operate Sunday to Thursday between 09:00 and 16:30 GST.
            </div>
          </div>

          {/* Tile 2: Interactive Map & Detailed Location Block (Col 6) */}
          <div className="lg:col-span-6 bg-cloud rounded-[28px] overflow-hidden shadow-sm border border-black/5 flex flex-col justify-between">
            {/* Interactive Embedded Google Map of DIAC */}
            <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-sand/40">
              <iframe
                title="RKDF University Dubai Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14448.423984183815!2d55.40578635!3d25.120531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6460f4eb88e7%3A0xe543fa00fef04ba6!2sDubai%20International%20Academic%20City%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Contact Details List */}
            <div className="p-8 space-y-4">
              <div>
                <h4 className="text-base font-semibold text-ink mb-1">
                  Campus Address & Operating Hours
                </h4>
                <p className="text-xs text-ink-55">
                  Centrally located in Dubai International Academic City with dedicated visitor parking.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-ink-55 pt-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-ink block">Physical Location:</span>
                    Block 11, Dubai International Academic City, Al Ruwayyah 2, Dubai, UAE
                    <span className="block text-ink/70">PO Box 345219</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-ink block">Opening Hours:</span>
                    Sunday – Thursday: 08:00 – 17:00 GST
                    <span className="block text-ink/70">Admissions desks open till 18:00</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-ink block">Direct Lines:</span>
                    Admissions: +971 4 428 6100
                    <span className="block text-ink/70">WhatsApp: +971 50 418 7722</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-ink block">Email Correspondence:</span>
                    admissions@rkdfdubai.ac.ae
                    <span className="block text-ink/70">registry@rkdfdubai.ac.ae</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Drone Video Modal Lightbox */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => setVideoModalOpen(false)}
          />
          <div className="relative w-full max-w-4xl bg-black rounded-[28px] overflow-hidden shadow-2xl z-10">
            <div className="flex items-center justify-between p-4 bg-ink text-white">
              <span className="text-xs font-semibold uppercase tracking-wider">
                RKDF University Dubai — 6-Minute Aerial Tour
              </span>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 text-white"
                aria-label="Close Video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <video
                src="/assets/rkdf-drone.mp4"
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
