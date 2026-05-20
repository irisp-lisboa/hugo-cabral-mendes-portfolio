import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioData } from '../content';

export default function WorkDetail() {
  const { id } = useParams();
  const project = portfolioData.find(p => p.id === id);

  if (!project) {
    return (
      <section className="max-w-7xl mx-auto px-8 py-20 text-center">
        <p className="text-stone-400 font-light mb-6">Project not found.</p>
        <Link
          to="/work"
          className="text-[9px] uppercase tracking-[0.25em] font-light border-b border-stone-900 pb-1 hover:opacity-50 transition-opacity"
        >
          ← Back to Work
        </Link>
      </section>
    );
  }

  const videos = project.images.filter(src => /\.(mp4|webm|mov)$/i.test(src));
  const photos = project.images.filter(src => !/\.(mp4|webm|mov)$/i.test(src));

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      {/* Back */}
      <Link
        to="/work"
        className="inline-block mb-14 text-[9px] uppercase tracking-[0.25em] font-light text-stone-400 hover:text-stone-900 transition-colors"
      >
        ← Work
      </Link>

      {/* Title */}
      <div className="mb-10">
        <p className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-light mb-3">
          {project.category || project.type}{project.year ? ` · ${project.year}` : ''}
        </p>
        <h1 className="text-3xl md:text-5xl font-extralight uppercase tracking-[0.05em] leading-tight text-stone-900">
          {project.title}
        </h1>
        {project.premiere && (
          <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-stone-400 font-light">
            {project.premiere}
          </p>
        )}
      </div>

      {/* Videos */}
      {videos.length > 0 && (
        <div className="space-y-3 mb-16">
          {videos.map((src, i) => (
            <video
              key={i}
              src={src}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-auto"
            />
          ))}
          {project.videos && project.videos.map((url, i) => (
            <div key={`ext-${i}`} className="aspect-video bg-stone-100">
              <iframe
                src={
                  url.includes('vimeo.com')
                    ? url.replace('vimeo.com/', 'player.vimeo.com/video/')
                    : url.replace('watch?v=', 'embed/')
                }
                className="w-full h-full"
                allowFullScreen
                title={project.title}
              />
            </div>
          ))}
        </div>
      )}

      {/* Synopsis + Citation */}
      <div className="max-w-5xl mx-auto mb-16 space-y-8 text-center">
        {project.synopsis && (
          <p className="text-xl md:text-2xl font-extralight leading-relaxed text-stone-700 italic">
            {project.synopsis}
          </p>
        )}

        {project.citation && (
          <blockquote className="space-y-3">
            <p className="text-base font-extralight leading-relaxed text-stone-600 italic">
              "{project.citation.text}"
            </p>
            <footer className="text-[9px] uppercase tracking-[0.25em] text-stone-400 font-light">
              — {project.citation.author}
            </footer>
          </blockquote>
        )}

        {project.description && project.description.length > 0 && (
          <div className="space-y-5 pt-4 border-t border-stone-200">
            {project.description.map((para, i) => (
              <p key={i} className="text-base text-stone-600 font-light leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Ficha Técnica */}
      <div className="border-t border-stone-200 pt-12 mb-16 max-w-5xl mx-auto grid md:grid-cols-3 gap-16">

        {/* Dates */}
        <div className="space-y-8">
          {project.upcomingDates && project.upcomingDates.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-light">Upcoming</h4>
              {project.upcomingDates.map((d, i) => (
                <div key={i} className="flex justify-between items-baseline text-sm font-light">
                  <span className="text-stone-900">{d.date}</span>
                  <span className="text-stone-400 text-right ml-4">{d.venue}, {d.city}</span>
                </div>
              ))}
            </div>
          )}
          {project.previousDates && project.previousDates.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-light">Previously</h4>
              {project.previousDates.map((d, i) => (
                <div key={i} className="flex justify-between items-baseline text-sm font-light">
                  <span className="text-stone-500">{d.date}</span>
                  <span className="text-stone-400 text-right ml-4">{d.venue}, {d.city}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Credits */}
        {project.credits && project.credits.length > 0 && (
          <div className="md:col-span-2">
            <h4 className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-light mb-4">Credits</h4>
            <div className="columns-1 md:columns-2 gap-x-10 space-y-2">
              {project.credits.map(({ role, name }, i) =>
                name ? (
                  <div key={i} className="flex gap-4 text-[11px] font-light break-inside-avoid">
                    <span className="text-stone-400 uppercase tracking-wide min-w-[160px] shrink-0">{role}</span>
                    <span className="text-stone-700">{name}</span>
                  </div>
                ) : null
              )}
            </div>
          </div>
        )}

      </div>

      {/* Reviews */}
      {project.reviews && project.reviews.length > 0 && (
        <div className="border-t border-stone-200 pt-12 mb-16 max-w-5xl mx-auto space-y-6 text-center">
          <h4 className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-light">Press</h4>
          {project.reviews.map((r, i) => (
            <div key={i}>
              <p className="text-sm italic text-stone-600 font-light leading-relaxed">"{r.text}"</p>
              <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-stone-400">
                {r.author && `— ${r.author}`}
                {r.author && r.publication && ', '}
                {r.publication && <span className="italic normal-case tracking-normal">{r.publication}</span>}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Image matrix */}
      {photos.length > 0 && (
        <div className="border-t border-stone-200 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {photos.map((src, i) => {
              const credit = project.photographers?.[src];
              return (
                <div key={i} className={`relative overflow-hidden${credit ? ' group' : ''}`}>
                  <img
                    src={src}
                    alt={`${project.title} ${i + 1}`}
                    loading="lazy"
                    className="w-full aspect-square object-cover"
                  />
                  {credit && (
                    <div className="absolute bottom-0 left-0 right-0 px-2 py-1.5 bg-stone-900/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-[8px] uppercase tracking-[0.2em] text-white/80 font-light">
                        © {credit}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

    </section>
  );
}
