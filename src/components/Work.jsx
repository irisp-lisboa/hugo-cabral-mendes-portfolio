import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../content';

const coverImage = p => p.images.find(src => !/\.(mp4|webm|mov)$/i.test(src)) ?? '';
const coverPos   = p => ({ top: 'object-top', center: 'object-center', bottom: 'object-bottom' }[p.coverPosition] ?? 'object-center');

export default function Work() {
  const [activeTab, setActiveTab] = useState('choreo');
  const displayed = portfolioData.filter(p => p.type === activeTab);
  const [featured, ...rest] = displayed;

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      {/* Header + tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-stone-200 pb-6">
        <h2 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.05em]">Work</h2>
        <div className="flex">
          {['choreo', 'dancer'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-[9px] uppercase tracking-[0.25em] font-light border transition-all ${
                activeTab === tab
                  ? 'bg-stone-900 text-[#f5f2ee] border-stone-900'
                  : 'bg-transparent text-stone-400 border-stone-200 hover:text-stone-900 hover:border-stone-400'
              }`}
            >
              {tab === 'dancer' ? 'Performer' : 'Choreographer'}
            </button>
          ))}
        </div>
      </div>

      {displayed.length === 0 ? (
        <p className="text-stone-400 font-light text-sm">No work to show yet.</p>
      ) : (
        <div className="space-y-3">

          {/* Featured project — large, full width */}
          {featured && (
            <Link
              to={`/work/${featured.id}`}
              className="group relative block overflow-hidden bg-stone-200"
            >
              <img
                src={coverImage(featured)}
                alt={featured.title}
                loading="lazy"
                className={`w-full h-[60vh] object-cover ${coverPos(featured)} transition-transform duration-700 ease-out group-hover:scale-[1.02]`}
              />
              <div className="absolute inset-0 bg-stone-900/35 group-hover:bg-stone-900/50 transition-colors duration-500 flex flex-col items-center justify-center text-center px-8">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/60 font-light mb-4">
                  {featured.category || (featured.type === 'dancer' ? 'Performance' : 'Choreography')}{featured.year ? ` · ${featured.year}` : ''}
                </p>
                <h2 className="text-4xl md:text-6xl font-extralight text-white tracking-tight">
                  {featured.title}
                </h2>
              </div>
            </Link>
          )}

          {/* Remaining projects — 3-column grid */}
          {rest.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {rest.map(project => (
                <Link
                  key={project.id}
                  to={`/work/${project.id}`}
                  className="group relative block overflow-hidden bg-stone-200"
                >
                  <img
                    src={coverImage(project)}
                    alt={project.title}
                    loading="lazy"
                  className={`w-full aspect-[3/4] object-cover ${coverPos(project)} transition-transform duration-700 ease-out group-hover:scale-[1.02]`}
                  />
                  <div className="absolute inset-0 bg-stone-900/30 group-hover:bg-stone-900/50 transition-colors duration-500 flex flex-col items-center justify-center text-center px-6">
                    <p className="text-[8px] uppercase tracking-[0.25em] text-white/60 font-light mb-3">
                      {project.category || (project.type === 'dancer' ? 'Performance' : 'Choreography')}{project.year ? ` · ${project.year}` : ''}
                    </p>
                    <h3 className="text-xl md:text-2xl font-extralight text-white tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          )}

        </div>
      )}
    </section>
  );
}
