// import React, { useState } from 'react'
// const IMAGES = ['/hero.jpg','/hero.jpg','/hero.jpg','/hero.jpg']
// export default function Gallery(){
// const [open,setOpen] = useState(false)
// const [index,setIndex] = useState(0)
// return (
// <section className="py-16">
// <div className="container">
// <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
// <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// {IMAGES.map((src,i)=><button key={i} onClick={()=>{setIndex(i);setOpen(true)}}><img src={src} alt={`gallery-${i}`} className="object-cover w-full h-48 rounded"/></button>)}
// </div>
// {open && <div className="modal-backdrop" onClick={()=>setOpen(false)}><div className="modal-content" onClick={e=>e.stopPropagation()}><img src={IMAGES[index]} alt="enlarged" className="w-full h-auto rounded"/><div className="mt-4 flex justify-end"><button onClick={()=>setOpen(false)} className="px-4 py-2 border rounded">Close</button></div></div></div>}
// </div>
// </section>
// )
// }

import React, { useState } from 'react';

export default function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Define your media. Videos first, then Images.
  const mediaItems = [
    { id: 1, type: 'video', src: '/video1.mp4', thumbnail: '/thumb1.jpg', title: 'Performance Clip' },
    { id: 2, type: 'video', src: '/video2.mp4', thumbnail: '/thumb2.jpg', title: 'Workshop Reel' },
    { id: 3, type: 'image', src: '/hero.jpg', title: 'Portrait 1' },
    { id: 4, type: 'image', src: '/action-1.jpg', title: 'Stage Shot' },
    { id: 5, type: 'image', src: '/img-2.jpg', title: 'Rehearsal' },
    { id: 6, type: 'image', src: '/img-3.jpg', title: 'Studio Session' },
  ];

  return (
    <section className="container py-20">
      <h2 className="text-4xl font-extralight uppercase tracking-widest mb-16">Gallery</h2>

      {/* MASONRY GRID: columns-1 for mobile, columns-2 for desktop */}
      <div className="columns-1 md:columns-2 gap-8 space-y-8">
        {mediaItems.map((item) => (
          <div 
            key={item.id} 
            className="break-inside-avoid cursor-pointer group relative"
            onClick={() => setSelectedMedia(item)}
          >
            {item.type === 'video' ? (
              <div className="relative">
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 shadow-lg"
                />
                {/* Play Button Overlay for Videos */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 fill-black translate-x-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 shadow-lg"
              />
            )}
            
            {/* Subtle Title Overlay */}
            <div className="mt-2 text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-40 transition-opacity">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX / MODAL */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={() => setSelectedMedia(null)}
        >
          <button className="absolute top-8 right-8 text-white text-2xl font-light">✕</button>
          
          <div className="max-w-5xl w-full max-h-[80vh] flex items-center justify-center">
            {selectedMedia.type === 'video' ? (
              <video 
                src={selectedMedia.src} 
                controls 
                autoPlay 
                className="max-h-full max-w-full shadow-2xl"
              />
            ) : (
              <img 
                src={selectedMedia.src} 
                className="max-h-full max-w-full object-contain shadow-2xl"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}