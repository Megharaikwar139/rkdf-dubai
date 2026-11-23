import React, { useState } from 'react';
import { campusEvents, CampusEvent } from '../content/events';
import { Calendar, Clock, MapPin, CheckCircle2 } from 'lucide-react';

export const EventsPage: React.FC = () => {
  const [rsvpList, setRsvpList] = useState<string[]>([]);

  const toggleRsvp = (id: string) => {
    if (rsvpList.includes(id)) {
      setRsvpList(rsvpList.filter((e) => e !== id));
    } else {
      setRsvpList([...rsvpList, id]);
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto space-y-16">
      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-terracotta block mb-2">
          Campus Calendar & Public Programming
        </span>
        <h1 className="type-h1 text-ink mb-4">Events & Open Days</h1>
        <p className="type-body">
          Join upcoming on-campus open days in Academic City or connect with admissions directors and faculty chairs via online webinars.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {campusEvents.map((ev: CampusEvent) => {
          const isRegistered = rsvpList.includes(ev.id);
          return (
            <div
              key={ev.id}
              className="bg-cloud rounded-card p-8 border border-black/5 shadow-sm flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-pill bg-sand text-ink">
                    {ev.type}
                  </span>
                  <span className="text-xs font-semibold text-terracotta tabular-nums">
                    {ev.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-ink mb-2">{ev.title}</h3>
                <p className="text-xs text-ink-55 leading-relaxed mb-6">{ev.description}</p>
                <div className="space-y-2 text-xs text-ink-55 border-t border-black/5 pt-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-ink-55" />
                    <span>{ev.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-ink-55" />
                    <span>{ev.location}</span>
                  </div>
                </div>
              </div>

              <div>
                {isRegistered ? (
                  <div className="w-full py-3 rounded-pill bg-mint text-emerald-900 font-semibold text-xs flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> RSVP Confirmed! Ticket Sent
                  </div>
                ) : (
                  <button
                    onClick={() => toggleRsvp(ev.id)}
                    className="w-full py-3 rounded-pill bg-terracotta text-white font-semibold text-xs hover:brightness-105 transition-all shadow-sm"
                  >
                    Reserve Complimentary Pass
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
