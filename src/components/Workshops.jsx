import React, { useState } from 'react';
import { workshopData } from '../content';

// Sub-component for the Card to manage its own Carousel state
const WorkshopCard = ({ ws, onOpen }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const nextImg = (e) => {
    e.stopPropagation(); // Stops the modal from opening when clicking arrows
    setImgIndex((prev) => (prev + 1) % ws.images.length);
  };

  const prevImg = (e) => {
    e.stopPropagation();
    setImgIndex((prev) => (prev - 1 + ws.images.length) % ws.images.length);
  };

  return (
    <div 
      onClick={() => onOpen(ws)}
      className="group cursor-pointer border border-gray-100 p-4 hover:border-black transition-all flex flex-col h-full"
    >
      <div className="aspect-square relative overflow-hidden bg-gray-100 mb-4">
        {/* Carousel Arrows */}
        {ws.images.length > 1 && (
          <>
            <button onClick={prevImg} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black hover:text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={nextImg} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black hover:text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </>
        )}
        
        <img 
          src={ws.images[imgIndex]} 
          alt={ws.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      
      <h3 className="text-xl font-medium uppercase tracking-tight">{ws.title}</h3>
      <p className="text-gray-500 text-sm mt-2 line-clamp-2">{ws.tagline}</p>
      <div className="mt-auto pt-4">
        <span className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1">Explore Workshop</span>
      </div>
    </div>
  );
};

export default function Workshops() {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  return (
    <section className="container py-16">
      <h2 className="text-4xl font-extralight uppercase tracking-widest mb-12">Workshops</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {workshopData.map((ws) => (
          <WorkshopCard key={ws.id} ws={ws} onOpen={setSelectedWorkshop} />
        ))}
      </div>

      {/* Modal - Remains the same as previous logic */}
      {selectedWorkshop && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto relative p-8 md:p-12 animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedWorkshop(null)}
              className="absolute top-6 right-6 text-2xl font-light hover:rotate-90 transition-transform"
            >✕</button>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                {/* Modal can show a vertical stack or its own carousel of the images */}
                {selectedWorkshop.images.map((img, i) => (
                  <img key={i} src={img} alt="" className="w-full object-cover" />
                ))}
              </div>

              <div>
                <h2 className="text-3xl font-medium mb-4">{selectedWorkshop.title}</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">{selectedWorkshop.details}</p>

                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4 border-b pb-2">Upcoming</h4>
                  {selectedWorkshop.upcoming.length > 0 ? (
                    selectedWorkshop.upcoming.map((date, i) => (
                      <div key={i} className="flex justify-between items-center mb-3">
                        <span className="text-sm">{date.date} — {date.location}</span>
                        <a href={date.link} className="bg-black text-white px-4 py-2 text-[10px] uppercase tracking-widest">Book</a>
                      </div>
                    ))
                  ) : <p className="text-sm text-gray-400 italic">No dates scheduled.</p>}
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4 border-b pb-2">History</h4>
                  <ul className="text-sm text-gray-500 space-y-1">
                    {selectedWorkshop.previous.map((prev, i) => <li key={i}>• {prev}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}