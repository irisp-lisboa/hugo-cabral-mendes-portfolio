import React from 'react'
import { aboutData } from '../content';

export default function About() {
  return (
    <section className="container py-20">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        
        {/* LEFT: Portrait Image */}
        <div className="md:col-span-5 md:sticky md:top-24">
          <div className="aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm">
            <img 
              src={aboutData.portrait} 
              alt={`${aboutData.name} Portrait`} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <p className="mt-4 text-[10px] uppercase tracking-widest text-gray-400">
            Portrait by {aboutData.photographer}
          </p>
        </div>

        {/* RIGHT: Content */}
        <div className="md:col-span-7 space-y-16">
          
          {/* Bio / Statement */}
          <header className="space-y-6">
            <h2 className="text-4xl font-extralight uppercase tracking-[0.2em]">About</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed font-light">
              {aboutData.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </header>

          {/* Education & Training */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] border-b pb-2">Training</h3>
            <div className="space-y-4">
              {aboutData.education.map((item, i) => (
                <div key={i} className="flex justify-between items-baseline group">
                  <div>
                    <h4 className="font-medium group-hover:italic transition-all">{item.institution}</h4>
                    <p className="text-sm text-gray-500">{item.city} — <span className="italic">{item.training}</span></p>
                  </div>
                  <span className="text-xs font-mono text-gray-400">{item.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Download CV CTA */}
          <div className="pt-8">
            <a 
              href={aboutData.cvLink} 
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-black px-8 py-4 text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all"
            >
              Download Full CV
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}