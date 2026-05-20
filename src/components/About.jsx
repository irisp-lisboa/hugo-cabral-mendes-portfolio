import React from 'react';
import { aboutData, contactData } from '../content';

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      {/* Page title */}
      <h2 className="text-[9px] uppercase tracking-[0.35em] text-stone-400 font-light mb-16 border-b border-stone-200 pb-4">
        About
      </h2>

      <div className="grid md:grid-cols-12 gap-16 items-start">

        {/* LEFT: Bio text — takes up most of the space like KAIHO */}
        <div className="md:col-span-7 space-y-8">
          <h1 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.05em] leading-tight text-stone-900">
            {aboutData.name}
          </h1>

          {/* Bio paragraphs */}
          <div className="space-y-5 text-base md:text-lg text-stone-600 leading-relaxed font-light">
            {aboutData.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Training section */}
          {/* {aboutData.education && aboutData.education.length > 0 && (
            <div className="pt-8 space-y-5 border-t border-stone-200">
              <h3 className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-light">Training</h3>
              <div className="space-y-4">
                {aboutData.education.map((item, i) => (
                  <div key={i} className="flex justify-between items-baseline">
                    <div>
                      <span className="text-base font-light text-stone-900">{item.institution}</span>
                      <span className="text-stone-400 font-light"> — </span>
                      <span className="text-base font-light italic text-stone-500">{item.training}</span>
                    </div>
                    <span className="text-[9px] font-light text-stone-400 tracking-wide ml-4 shrink-0">{item.year}</span>
                  </div>
                ))}
              </div>
            </div>
          )} */}

          {/* CV Download */}
          {/* <div className="pt-4">
            <a
              href={aboutData.cvLink}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-[9px] uppercase tracking-[0.25em] font-light border-b border-stone-900 pb-1 hover:opacity-40 transition-opacity"
            >
              Download CV
            </a>
          </div> */}

          {/* Social links — like KAIHO puts them at the bottom of the bio */}
          {/* <div className="pt-8 border-t border-stone-200 flex flex-wrap gap-6">
            {contactData.instagram && (
              <a href={contactData.instagram} target="_blank" rel="noreferrer"
                className="text-[9px] uppercase tracking-[0.25em] text-stone-400 hover:text-stone-900 transition-colors font-light">
                Instagram
              </a>
            )}
            {contactData.youtube && (
              <a href={contactData.youtube} target="_blank" rel="noreferrer"
                className="text-[9px] uppercase tracking-[0.25em] text-stone-400 hover:text-stone-900 transition-colors font-light">
                YouTube
              </a>
            )}
            {contactData.vimeo && (
              <a href={contactData.vimeo} target="_blank" rel="noreferrer"
                className="text-[9px] uppercase tracking-[0.25em] text-stone-400 hover:text-stone-900 transition-colors font-light">
                Vimeo
              </a>
            )}
          </div>*/}
        </div> 

        {/* RIGHT: Portrait — sticky as you scroll */}
        <div className="md:col-span-5 md:sticky md:top-24">
          <div className="overflow-hidden bg-stone-100">
            <img
              src={aboutData.portrait}
              alt={aboutData.name}
              loading="lazy"
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          {aboutData.photographer && (
            <p className="mt-3 text-[8px] uppercase tracking-widest text-stone-300 font-light">
              Photo by {aboutData.photographer}
            </p>
          )}
        </div>

      </div>
    </section>
  );
}
