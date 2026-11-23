import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { useI18n } from '../../context/I18nContext';

export const Home8CtaShapeFuture: React.FC = () => {
  const { locale } = useI18n();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <section className="py-20 bg-canvas">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="relative rounded-[32px] overflow-hidden bg-[#890C25] text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
          {/* Subtle Right Background Image from Home 8 */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none hidden md:block">
            <img
              src="/assets/home8/rectangle-9313-68a1780b910c7.webp"
              alt="Campus Architecture Background"
              className="w-full h-full object-cover object-left"
            />
          </div>

          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-apricot block">
              Admission Intake January 2027
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15]">
              {locale === 'ar'
                ? 'اصنع مستقبلك مع جامعة RKDF دبي'
                : 'Shape your future with RKDF University Dubai'}
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
              Join a dynamic academic community in Dubai International Academic City. Early-bird applicants receive automatic merit scholarship evaluation up to 40% of annual tuition.
            </p>

            {subscribed ? (
              <div className="bg-white/20 backdrop-blur-md px-6 py-4 rounded-pill text-xs font-semibold flex items-center gap-2 max-w-md">
                <Check className="w-5 h-5 text-apricot shrink-0" />
                <span>Thank you! We've sent the 2027 Admissions Guide to your email.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-lg">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for prospectus & fees..."
                  className="flex-1 px-5 py-4 rounded-pill bg-white text-ink text-xs outline-none focus:ring-2 focus:ring-apricot shadow-inner"
                />
                <button
                  type="submit"
                  className="px-8 py-4 rounded-pill bg-ink text-white font-semibold text-xs hover:bg-black transition-colors whitespace-nowrap shadow-md flex items-center justify-center gap-1.5"
                >
                  <span>Get Prospectus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
