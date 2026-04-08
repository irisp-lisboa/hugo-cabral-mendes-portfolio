// 
import React from 'react';
import { contactData } from '../content';

export default function Contact() {
  return (
    <section className="container py-20 min-h-[80vh] flex flex-col justify-center">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        
        {/* LEFT SIDE: Visual & Info */}
        <div className="space-y-8">
          <div className="aspect-[4/5] overflow-hidden bg-gray-100 rounded-sm">
            <img 
              src="/hero.jpg" 
              alt="Hugo portrait" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.3em] text-gray-400 font-bold">Direct Contact</h3>
            <div className="space-y-2 text-lg">
              <a href={`mailto:${contactData.email}`} className="block hover:italic transition-all underline decoration-gray-200 underline-offset-4">
                {contactData.email}
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Form */}
        <div className="flex flex-col gap-8">
          <header>
            <h2 className="text-4xl font-extralight uppercase tracking-[0.2em] mb-4">Contact</h2>
            <p className="text-gray-500 leading-relaxed">
              Available for international bookings, choreography commissions, and movement direction. 
              Please use the form below for inquiries.
            </p>
          </header>
          
          <form 
            className="flex flex-col gap-6"
            action={`https://formsubmit.co/${contactData.email}`}
            method="POST"
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value={window.location.href} />

            <div className="group border-b border-gray-200 focus-within:border-black transition-colors">
              <label className="text-[10px] uppercase tracking-widest text-gray-400">Full Name</label>
              <input
                type="text"
                name="name"
                className="w-full py-2 bg-transparent outline-none text-lg placeholder:text-gray-200"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="group border-b border-gray-200 focus-within:border-black transition-colors">
              <label className="text-[10px] uppercase tracking-widest text-gray-400">Email Address</label>
              <input
                type="email"
                name="email"
                className="w-full py-2 bg-transparent outline-none text-lg placeholder:text-gray-200"
                placeholder="email@example.com"
                required
              />
            </div>

            <div className="group border-b border-gray-200 focus-within:border-black transition-colors">
              <label className="text-[10px] uppercase tracking-widest text-gray-400">Message</label>
              <textarea
                name="message"
                rows="4"
                className="w-full py-2 bg-transparent outline-none text-lg placeholder:text-gray-200 resize-none"
                placeholder="Describe your project or inquiry..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 bg-black text-white px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-gray-800 transition-all self-start"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}