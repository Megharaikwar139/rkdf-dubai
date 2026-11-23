import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const StandardNewsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <section className="bg-[#9B3218] text-white py-12 px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs uppercase tracking-wider text-apricot block mb-1">
            Stay Connected
          </span>
          <h3 className="text-xl sm:text-2xl font-semibold">
            Don't Miss Important Academic Updates From Our Campus
          </h3>
        </div>

        {subscribed ? (
          <div className="bg-white/20 px-6 py-3 rounded-pill text-xs font-semibold flex items-center gap-2">
            <Check className="w-4 h-4 text-apricot" />
            <span>Thank you! You are subscribed to RKDF Dubai updates.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex w-full md:w-auto max-w-md gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="flex-1 px-5 py-3 rounded-pill bg-white text-ink text-xs outline-none focus:ring-2 focus:ring-apricot"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-pill bg-ink text-white font-semibold text-xs hover:bg-black transition-colors whitespace-nowrap"
            >
              Subscribe →
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
