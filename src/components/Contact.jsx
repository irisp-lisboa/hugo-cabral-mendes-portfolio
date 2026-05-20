import React from 'react';
import { contactData } from '../content';

export default function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      {/* Header */}
      <div className="mb-12 border-b border-stone-200 pb-6">
        <h2 className="text-4xl md:text-5xl font-extralight uppercase tracking-[0.05em]">Contact</h2>
      </div>

      {/* Image at top — same width as form below */}
      <div className="overflow-hidden bg-stone-200 mb-10">
        <img
          src={contactData.contactImage}
          alt="Hugo Cabral Mendes"
          className="w-full h-[45vh] object-cover"
        />
      </div>

      {/* Form */}
      <form
        action={`https://formsubmit.co/${contactData.email}`}
        method="POST"
        className="space-y-5"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />

        {/* Name — First + Last side by side */}
        <div>
          <p className="text-[8px] uppercase tracking-[0.25em] text-stone-500 font-light mb-2">Name</p>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[8px] uppercase tracking-[0.2em] text-stone-400 font-light mb-1">First Name</label>
              <input
                type="text"
                name="first_name"
                className="w-full border border-stone-200 bg-stone-50/60 outline-none text-sm font-light text-stone-900 px-3 py-3 focus:border-stone-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-[8px] uppercase tracking-[0.2em] text-stone-400 font-light mb-1">Last Name</label>
              <input
                type="text"
                name="last_name"
                className="w-full border border-stone-200 bg-stone-50/60 outline-none text-sm font-light text-stone-900 px-3 py-3 focus:border-stone-400 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-[8px] uppercase tracking-[0.25em] text-stone-400 font-light mb-1">
            Email <span className="text-stone-300 normal-case tracking-normal text-[8px]">(required)</span>
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-stone-200 bg-stone-50/60 outline-none text-sm font-light text-stone-900 px-3 py-3 focus:border-stone-400 transition-colors"
          />
        </div>

        {/* Newsletter checkbox */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="newsletter"
            id="newsletter"
            className="w-4 h-4 border border-stone-300 accent-stone-900 cursor-pointer"
          />
          <label htmlFor="newsletter" className="text-[9px] uppercase tracking-[0.2em] text-stone-400 font-light cursor-pointer select-none">
            Sign up for news and updates
          </label>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-[8px] uppercase tracking-[0.25em] text-stone-400 font-light mb-1">
            Subject <span className="text-stone-300 normal-case tracking-normal text-[8px]">(required)</span>
          </label>
          <input
            type="text"
            name="subject"
            required
            className="w-full border border-stone-200 bg-stone-50/60 outline-none text-sm font-light text-stone-900 px-3 py-3 focus:border-stone-400 transition-colors"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-[8px] uppercase tracking-[0.25em] text-stone-400 font-light mb-1">
            Message <span className="text-stone-300 normal-case tracking-normal text-[8px]">(required)</span>
          </label>
          <textarea
            name="message"
            rows="7"
            required
            className="w-full border border-stone-200 bg-stone-50/60 outline-none text-sm font-light text-stone-900 px-3 py-3 focus:border-stone-400 transition-colors resize-none"
          />
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="border border-stone-900 bg-[#f5f2ee] px-10 py-3 text-[9px] uppercase tracking-[0.3em] font-light text-stone-900 hover:bg-stone-900 hover:text-[#f5f2ee] transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Bottom info — centered like KAIHO */}
      <div className="mt-24 text-center space-y-1.5 text-stone-400 font-light">
        <p className="text-sm">Hugo Cabral Mendes</p>
        <p className="text-sm">Lisbon, Portugal</p>
        <a
          href={`mailto:${contactData.email}`}
          className="block text-sm hover:text-stone-900 transition-colors"
        >
          {contactData.email}
        </a>
      </div>

    </section>
  );
}
