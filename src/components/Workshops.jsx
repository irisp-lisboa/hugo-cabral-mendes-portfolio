import React from 'react';
import { Link } from 'react-router-dom';
import { workshopData } from '../content';

export default function Workshops() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      {/* Header */}
      <div className="mb-12 border-b border-stone-200 pb-6">
        <h2 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.05em]">Workshops</h2>
      </div>

      {workshopData.length === 0 ? (
        <p className="text-stone-400 font-light text-sm">No workshops scheduled yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-10">
          {workshopData.map(ws => (
            <div key={ws.id}>
              <Link
                to={`/workshops/${ws.id}`}
                className="group relative block overflow-hidden bg-stone-200"
              >
                <img
                  src={ws.images[0]}
                  alt={ws.title}
                  loading="lazy"
                  className="w-full aspect-square object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-stone-900/35 group-hover:bg-stone-900/50 transition-colors duration-500 flex flex-col items-center justify-center text-center px-8">
                  {ws.tagline && (
                    <p className="text-[9px] uppercase tracking-[0.3em] text-white/60 font-light mb-4">
                      {ws.tagline}
                    </p>
                  )}
                  <h2 className="text-2xl md:text-3xl font-extralight text-white tracking-tight">
                    {ws.title}
                  </h2>
                </div>
              </Link>
              {ws.synopsis && (
                <p className="mt-5 text-sm text-stone-500 font-light leading-relaxed">
                  {ws.synopsis}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
