import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { MagneticButton } from '../components/common/MagneticButton';

export const ContactPage: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: 'General Enquiry', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email) {
      setSent(true);
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto space-y-16">
      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-terracotta block mb-2">
          Connect With Our Team
        </span>
        <h1 className="type-h1 text-ink mb-4">Contact RKDF University Dubai</h1>
        <p className="type-body">
          We welcome prospective students, families, corporate placement partners, and visiting scholars to connect with our campus team in Academic City.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Cards (Col 5) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-cloud p-6 rounded-card border border-black/5 shadow-sm space-y-3">
            <div className="p-3 rounded-full bg-sand w-fit">
              <MapPin className="w-5 h-5 text-terracotta" />
            </div>
            <h3 className="text-base font-semibold text-ink">Campus Location</h3>
            <p className="text-xs text-ink-55 leading-relaxed">
              Block 11, Dubai International Academic City, Al Ruwayyah 2, Dubai, UAE.<br />
              PO Box 345219
            </p>
          </div>

          <div className="bg-cloud p-6 rounded-card border border-black/5 shadow-sm space-y-3">
            <div className="p-3 rounded-full bg-sand w-fit">
              <Phone className="w-5 h-5 text-terracotta" />
            </div>
            <h3 className="text-base font-semibold text-ink">Direct Telephone & WhatsApp</h3>
            <p className="text-xs text-ink-55 leading-relaxed">
              Admissions Board: +971 4 428 6100<br />
              Direct WhatsApp: +971 50 418 7722
            </p>
          </div>

          <div className="bg-cloud p-6 rounded-card border border-black/5 shadow-sm space-y-3">
            <div className="p-3 rounded-full bg-sand w-fit">
              <Mail className="w-5 h-5 text-terracotta" />
            </div>
            <h3 className="text-base font-semibold text-ink">Email Inquiries</h3>
            <p className="text-xs text-ink-55 leading-relaxed">
              Admissions: admissions@rkdfdubai.ac.ae<br />
              Corporate Partnerships: placements@rkdfdubai.ac.ae
            </p>
          </div>

          <div className="bg-cloud p-6 rounded-card border border-black/5 shadow-sm space-y-3">
            <div className="p-3 rounded-full bg-sand w-fit">
              <Clock className="w-5 h-5 text-terracotta" />
            </div>
            <h3 className="text-base font-semibold text-ink">Official Hours</h3>
            <p className="text-xs text-ink-55 leading-relaxed">
              Sunday – Thursday: 08:00 – 17:00 GST<br />
              Admissions Desks Open until 18:00
            </p>
          </div>
        </div>

        {/* Message Form (Col 7) */}
        <div className="lg:col-span-7 bg-cloud p-8 md:p-12 rounded-card border border-black/5 shadow-sm">
          <h2 className="text-2xl font-semibold text-ink mb-2">Send an Official Message</h2>
          <p className="text-xs text-ink-55 mb-6">
            Our admissions counselors and registry officers reply to all prospective student inquiries within 24 hours.
          </p>

          {sent ? (
            <div className="bg-mint/60 border border-mint p-8 rounded-card text-center space-y-3 text-emerald-900">
              <CheckCircle2 className="w-12 h-12 mx-auto" />
              <h3 className="text-xl font-semibold">Message Dispatched Successfully</h3>
              <p className="text-xs text-ink-55 max-w-sm mx-auto">
                Thank you, {form.name}. We have routed your enquiry to our admissions desk and will reply via email and WhatsApp.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-ink mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Zainab Al-Mutawa"
                    className="w-full px-4 py-3 rounded-pill bg-sand/30 border border-black/10 text-xs text-ink outline-none focus:border-focus"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-3 rounded-pill bg-sand/30 border border-black/10 text-xs text-ink outline-none focus:border-focus"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink mb-1">Enquiry Department</label>
                <select
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-pill bg-sand/30 border border-black/10 text-xs text-ink outline-none"
                >
                  <option>Admissions & Enrolment</option>
                  <option>Scholarships & Tuition Fees</option>
                  <option>UAE Student Visa Sponsorship</option>
                  <option>Corporate Placement & Industry Pacts</option>
                  <option>Bhopal Dual-Campus Transfer</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink mb-1">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="How can our admissions and academic team support your journey?"
                  className="w-full p-4 rounded-tile bg-sand/30 border border-black/10 text-xs text-ink outline-none focus:border-focus resize-none"
                />
              </div>

              <div className="pt-2">
                <MagneticButton variant="terracotta" size="lg" type="submit" className="w-full justify-center">
                  Submit Official Message →
                </MagneticButton>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
