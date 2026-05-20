import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { workshopData } from '../content';

export default function WorkshopDetail() {
  const { id } = useParams();
  const ws = workshopData.find(w => w.id === id);

  if (!ws) {
    return (
      <section className="max-w-7xl mx-auto px-8 py-20 text-center">
        <p className="text-stone-400 font-light mb-6">Workshop not found.</p>
        <Link
          to="/workshops"
          className="text-[9px] uppercase tracking-[0.25em] font-light border-b border-stone-900 pb-1 hover:opacity-50 transition-opacity"
        >
          ← Back to Workshops
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      {/* Back */}
      <Link
        to="/workshops"
        className="inline-block mb-14 text-[9px] uppercase tracking-[0.25em] font-light text-stone-400 hover:text-stone-900 transition-colors"
      >
        ← Workshops
      </Link>

      <div className="grid md:grid-cols-12 gap-16">

        {/* LEFT: images stacked */}
        <div className="md:col-span-7 space-y-3">
          {ws.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${ws.title} ${i + 1}`}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          ))}

          {ws.videos && ws.videos.length > 0 && ws.videos.map((url, i) => (
            <div key={i} className="aspect-video bg-stone-100">
              <iframe
                src={
                  url.includes('vimeo.com')
                    ? url.replace('vimeo.com/', 'player.vimeo.com/video/')
                    : url.includes('youtube.com/watch')
                    ? url.replace('watch?v=', 'embed/')
                    : url
                }
                className="w-full h-full"
                allowFullScreen
                title={`${ws.title} ${i + 1}`}
              />
            </div>
          ))}
        </div>

        {/* RIGHT: info — sticky */}
        <div className="md:col-span-5 md:sticky md:top-20 h-fit space-y-8">

          <div>
            {ws.tagline && (
              <p className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-light mb-3">
                {ws.tagline}
              </p>
            )}
            <h1 className="text-3xl md:text-4xl font-extralight uppercase tracking-[0.05em] leading-tight text-stone-900">
              {ws.title}
            </h1>
          </div>

          {ws.details && (
            <div className="border-t border-stone-200 pt-6">
              <p className="text-base text-stone-600 font-light leading-relaxed italic">
                {ws.details}
              </p>
            </div>
          )}

          {ws.upcoming && ws.upcoming.length > 0 && (
            <div className="border-t border-stone-200 pt-6 space-y-4">
              <h4 className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-light">Upcoming</h4>
              {ws.upcoming.map((date, j) => (
                <div key={j} className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-light text-stone-900">{date.date}</span>
                    <span className="text-sm font-light text-stone-400"> — {date.venue}{date.city ? `, ${date.city}` : ''}{date.location ? date.location : ''}</span>
                  </div>
                  {date.link && date.link !== '#' && (
                    <a
                      href={date.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[8px] uppercase tracking-[0.2em] font-light border border-stone-900 px-4 py-2 hover:bg-stone-900 hover:text-[#f5f2ee] transition-all"
                    >
                      Book
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}

          {ws.previous && ws.previous.length > 0 && (
            <div className="border-t border-stone-200 pt-6 space-y-2">
              <h4 className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-light">Previously</h4>
              {ws.previous.map((prev, j) => (
                <p key={j} className="text-sm font-light text-stone-400">
                  {typeof prev === 'string' ? prev : `${prev.date} — ${prev.location}`}
                </p>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* Key Takeaways */}
      {ws.takeaways && ws.takeaways.length > 0 && (
        <div className="mt-20 pt-12 border-t border-stone-200 max-w-5xl mx-auto">
          <h3 className="text-[9px] uppercase tracking-[0.35em] text-stone-400 font-light mb-8">Key Takeaways</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {ws.takeaways.map((item, i) => (
              <div key={i} className="flex gap-5">
                <span className="text-[9px] uppercase tracking-[0.2em] text-stone-300 font-light pt-1 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="text-sm font-light text-stone-900 mb-1">{item.title}</p>
                  <p className="text-sm font-light text-stone-500 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Description paragraphs — centered */}
      {ws.description && ws.description.length > 0 && (
        <div className="mt-16 pt-12 border-t border-stone-200 flex flex-col items-center text-center">
          <h3 className="text-[9px] uppercase tracking-[0.35em] text-stone-400 font-light mb-10">How to Live in Falling?</h3>
          <div className="max-w-5xl mx-auto space-y-5">
            {ws.description.map((para, i) => (
              <p key={i} className="text-base text-stone-600 font-light leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Citation — centered */}
      {ws.citation && (
        <div className="mt-20 pt-12 border-t border-stone-200 flex flex-col items-center text-center">
          <blockquote className="max-w-5xl mx-auto space-y-4">
            <p className="text-lg md:text-xl font-extralight leading-relaxed text-stone-700 italic">
              "{ws.citation.text}"
            </p>
            <footer className="text-[9px] uppercase tracking-[0.25em] text-stone-400 font-light">
              — {ws.citation.author}
            </footer>
          </blockquote>
        </div>
      )}

      {/* Image grid */}
      {ws.images && ws.images.length > 1 && (
        <div className="mt-20 pt-12 border-t border-stone-200">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
            {ws.images.slice(1).map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${ws.title} ${i + 1}`}
                loading="lazy"
                className="w-full aspect-square object-cover"
              />
            ))}
          </div>
        </div>
      )}

    </section>
  );
}
