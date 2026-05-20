import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../content';

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const isVideo = src => /\.(mp4|webm|mov)$/i.test(src);
  const posClass = pos => ({ top: 'object-top', center: 'object-center', bottom: 'object-bottom' }[pos] ?? 'object-center');
  const mosaicImages = portfolioData.flatMap(p =>
    p.images
      .filter(img => !isVideo(img))
      .map(img => ({ src: img, title: p.title, id: p.id, pos: p.coverPosition }))
  );

  return (
    <div>
      {/* ── HERO: full-bleed video ── */}
      <section className="relative w-full h-[calc(100vh-69px)] overflow-hidden bg-stone-900">
        <video
          ref={videoRef}
          src="/images/hero-video-compressed.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* ── NAME STRIP ── */}
      <section className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-extralight tracking-tight text-stone-900">
              Hugo Cabral Mendes
            </h1>
            <p className="mt-1.5 text-[9px] uppercase tracking-[0.3em] text-stone-400 font-light">
              Dancer · Choreographer · Performer
            </p>
          </div>
          <span className="hidden md:block text-[9px] uppercase tracking-[0.25em] text-stone-400 font-light">
            Lisbon, Portugal
          </span>
        </div>
      </section>

      {/* ── ABOUT TEASER — right under name strip ── */}
      <section className="max-w-7xl mx-auto px-8 pt-6 pb-16 border-b border-stone-200">
        <p className="text-2xl md:text-3xl font-extralight leading-relaxed text-stone-800 max-w-3xl">
          Based in Lisbon, Hugo is a contemporary dancer and choreographer whose work explores the intersection of urban movement and technical precision.
        </p>
        <Link
          to="/about"
          className="mt-8 inline-block text-[9px] uppercase tracking-[0.25em] font-light text-stone-900 border-b border-stone-900 pb-1 hover:opacity-50 transition-opacity"
        >
          Read More
        </Link>
      </section>

      {/* ── MOSAIC: asymmetric KAIHO layout ── */}
      <section className="max-w-7xl mx-auto px-8 py-12 pb-20">
        <div className="flex items-center justify-between mb-6">
          <span className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-light">Work</span>
          <Link
            to="/work"
            className="text-[9px] uppercase tracking-[0.25em] text-stone-400 hover:text-stone-900 transition-colors font-light"
          >
            View All →
          </Link>
        </div>

        <div className="flex gap-3 items-start">
          {/* Left column — tall portrait */}
          <div className="w-[55%] shrink-0">
            {mosaicImages[0] ? (
              <Link to="/work" className="block overflow-hidden group relative bg-stone-100">
                <img
                  src={mosaicImages[0].src}
                  alt={mosaicImages[0].title}
                  loading="lazy"
                  className={`w-full aspect-[3/4] object-cover ${posClass(mosaicImages[0].pos)} transition-transform duration-700 ease-out group-hover:scale-[1.02]`}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-stone-900/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white font-light">{mosaicImages[0].title}</p>
                </div>
              </Link>
            ) : (
              <div className="w-full aspect-[3/4] bg-stone-200" />
            )}
          </div>

          {/* Right column — two landscapes stacked */}
          <div className="flex-1 flex flex-col gap-3">
            {[1, 2].map(idx => (
              mosaicImages[idx] ? (
                <Link key={idx} to="/work" className="block overflow-hidden group relative bg-stone-100">
                  <img
                    src={mosaicImages[idx].src}
                    alt={mosaicImages[idx].title}
                    loading="lazy"
                    className={`w-full aspect-[4/3] object-cover ${posClass(mosaicImages[idx].pos)} transition-transform duration-700 ease-out group-hover:scale-[1.02]`}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-stone-900/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white font-light">{mosaicImages[idx].title}</p>
                  </div>
                </Link>
              ) : (
                <div key={idx} className="w-full aspect-[4/3] bg-stone-200" />
              )
            ))}
          </div>
        </div>

        {/* Extra images (4–6) in 3-col grid below */}
        {mosaicImages.length > 3 && (
          <div className="grid grid-cols-3 gap-3 mt-3">
            {mosaicImages.slice(3, 6).map((item, i) => (
              <Link key={`extra-${i}`} to="/work" className="block overflow-hidden group relative bg-stone-100">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full aspect-square object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
