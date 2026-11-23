import React from 'react';
import { newsArticles, NewsArticle } from '../content/news';
import { ArchMask } from '../components/common/ArchMask';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

interface NewsPagesProps {
  articleSlug?: string;
}

export const NewsPages: React.FC<NewsPagesProps> = ({ articleSlug }) => {
  const currentArticle = newsArticles.find((n: NewsArticle) => n.slug === articleSlug);

  if (articleSlug && currentArticle) {
    return (
      <div className="pt-32 pb-24 px-6 lg:px-12 max-w-[1000px] mx-auto space-y-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <a href="/news" className="text-xs font-semibold text-terracotta hover:underline">
              ← Back to Campus News
            </a>
            <span className="text-ink-55">/</span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-pill bg-sand text-ink">
              {currentArticle.category}
            </span>
          </div>

          <h1 className="type-h1 text-ink">{currentArticle.title}</h1>

          <div className="flex items-center gap-4 text-xs text-ink-55 pb-4 border-b border-black/5">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> {currentArticle.date}
            </span>
            <span>·</span>
            <span>By University Communications Office</span>
          </div>
        </div>

        {/* Featured Image */}
        {currentArticle.image && (
          <div className="w-full h-80 sm:h-96 rounded-card overflow-hidden shadow-md">
            <img
              src={currentArticle.image}
              alt={currentArticle.title}
              className="w-full h-full object-cover img-warm"
            />
          </div>
        )}

        {/* Body Paragraphs */}
        <div className="prose max-w-none text-ink leading-relaxed space-y-6 text-base">
          {currentArticle.body.map((para: string, idx: number) => (
            <p key={idx} className="type-body text-ink/80 text-lg">
              {para}
            </p>
          ))}
        </div>

        {/* Related Articles */}
        <div className="pt-12 border-t border-black/5 space-y-6">
          <h3 className="text-xl font-semibold text-ink">Recent Campus Bulletins</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {newsArticles.filter((n: NewsArticle) => n.id !== currentArticle.id).slice(0, 2).map((art: NewsArticle) => (
              <a
                key={art.id}
                href={`/news/${art.slug}`}
                className="bg-cloud p-5 rounded-tile border border-black/5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-semibold text-ink-55 block mb-1">
                    {art.date} · {art.category}
                  </span>
                  <h4 className="text-sm font-semibold text-ink line-clamp-2">{art.title}</h4>
                </div>
                <span className="text-xs font-semibold text-terracotta mt-3 block">Read Article →</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // News Index
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto space-y-16">
      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-terracotta block mb-2">
          Campus News & Public Dispatches
        </span>
        <h1 className="type-h1 text-ink mb-4">Official Announcements</h1>
        <p className="type-body">
          Read verified university statements on licensing milestones, faculty chairs, placement agreements, and Academic City facilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsArticles.map((art: NewsArticle) => (
          <a
            key={art.id}
            href={`/news/${art.slug}`}
            className="bg-cloud rounded-card overflow-hidden shadow-sm hover:shadow-md border border-black/5 flex flex-col justify-between transition-all group"
          >
            <div>
              {art.image && (
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover img-warm group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-pill bg-sand text-ink">
                    {art.category}
                  </span>
                  <span className="text-xs text-ink-55">{art.date}</span>
                </div>
                <h3 className="text-base font-semibold text-ink group-hover:text-terracotta transition-colors mb-2">
                  {art.title}
                </h3>
                <p className="text-xs text-ink-55 line-clamp-2 leading-relaxed">
                  {art.summary}
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-2 border-t border-black/5 text-xs font-semibold text-terracotta flex items-center justify-between">
              <span>Read Full Story</span>
              <span>→</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
