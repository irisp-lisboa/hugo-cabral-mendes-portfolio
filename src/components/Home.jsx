// import React from 'react'
// export default function Home(){
// return (
// <section className="relative">
// <div className="h-[60vh] md:h-[75vh] w-full overflow-hidden flex items-center">
// <img src="/hero.jpg" alt="Hero" className="w-full h-full object-cover object-center brightness-90" />
// <div className="absolute inset-0 flex items-center">
// <div className="container text-white">
//     <div className="max-w-2xl"> 
//         <h1 className="text-4xl md:text-6xl font-light text-black">Hugo Cabral Mendes</h1>
//         <p className="mt-4 text-lg text-black/80">Dancer · Choreographer · Performer</p>
//     </div>
// </div>
// </div>
// </div>
// </section>
// )
// }

import React from 'react'

export default function Home() {
  return (
    <section className="relative">
      {/* Container for the Hero Image */}
      <div className="h-[60vh] md:h-[75vh] w-full overflow-hidden flex items-center">
        <img 
          src="/hero.jpg" 
          alt="Hugo Cabral Mendes" 
          className="w-full h-full object-cover object-center brightness-100" 
        />
        
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-2xl">
              {/* Keeping your Black text but adding slight tracking for elegance */}
              <h1 className="text-5xl md:text-7xl font-light text-black tracking-tight leading-tight">
                Hugo <br /> Cabral Mendes
              </h1>
              
              {/* Refined subtitle with slightly more letter spacing */}
              <p className="mt-6 text-lg md:text-xl text-black/70 uppercase tracking-[0.15em] font-medium">
                Dancer · Choreographer · Performer
              </p>
              
              {/* Optional: Small call to action link like a professional artist site */}
              <div className="mt-10">
                <div className="w-12 h-[1px] bg-black mb-4"></div>
                <span className="text-xs uppercase tracking-widest font-bold">Based in Lisbon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}