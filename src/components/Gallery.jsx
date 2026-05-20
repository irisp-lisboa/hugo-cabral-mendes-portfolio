import React, { useState } from 'react';
import { galleryData } from '../content';

const isLocalVideo = src => src && (src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.mov'));

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      {/* Header */}
      <div className="mb-12 border-b border-stone-200 pb-6">
        <h2 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.05em]">Gallery</h2>
      </div>

      {/* Tumblr-style masonry — natural aspect ratios, waterfall columns */}
      <div className="columns-2 md:columns-3 gap-4">
        {galleryData.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelected(item)}
            className="break-inside-avoid mb-4 group relative cursor-pointer overflow-hidden"
          >
            {item.type === 'video' ? (
              <div className="relative">
                {isLocalVideo(item.src) ? (
                  /* Local video — autoplay muted preview in the grid */
                  <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto block"
                  />
                ) : item.thumbnail ? (
                  /* Vimeo / YouTube — show thumbnail with play button */
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-auto block transition-opacity duration-300 group-hover:opacity-85"
                  />
                ) : (
                  <div className="w-full aspect-video bg-stone-200 group-hover:bg-stone-300 transition-colors" />
                )}
                {!isLocalVideo(item.src) && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 fill-stone-900 translate-x-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-auto block transition-opacity duration-300 group-hover:opacity-85"
              />
            )}
          </div>
        ))}
      </div>

      {galleryData.length === 0 && (
        <p className="text-stone-400 font-light text-sm">No images yet.</p>
      )}

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/95 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <button className="absolute top-8 right-8 text-[9px] uppercase tracking-[0.25em] text-white/50 hover:text-white transition-colors font-light">
            Close ✕
          </button>

          <div
            className="max-w-5xl w-full max-h-[88vh] flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            {selected.type === 'video' ? (
              isLocalVideo(selected.src) ? (
                /* Local video file — use native player */
                <video
                  src={selected.src}
                  controls
                  autoPlay
                  className="max-h-[88vh] max-w-full"
                />
              ) : (
                /* Vimeo / YouTube — use iframe */
                <div className="w-full aspect-video">
                  <iframe
                    src={
                      selected.src.includes('vimeo.com')
                        ? selected.src.replace('vimeo.com/', 'player.vimeo.com/video/') + '?autoplay=1'
                        : selected.src.includes('youtube.com/watch')
                        ? selected.src.replace('watch?v=', 'embed/') + '?autoplay=1'
                        : selected.src
                    }
                    className="w-full h-full"
                    allowFullScreen
                    allow="autoplay"
                    title={selected.title}
                  />
                </div>
              )
            ) : (
              <img
                src={selected.src}
                alt={selected.title}
                className="max-h-full max-w-full object-contain"
              />
            )}
          </div>

          {selected.title && (
            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-[0.25em] text-white/40 font-light">
              {selected.title}
            </p>
          )}
        </div>
      )}
    </section>
  );
}
