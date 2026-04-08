import React, { useState } from 'react';
import { portfolioData } from '../content';

// Sub-component specifically for Portfolio projects
const ProjectCard = ({ project, onOpen }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div 
      onClick={() => onOpen(project)}
      className="group cursor-pointer flex flex-col h-full border border-gray-100 hover:border-black p-2 transition-all duration-500"
    >
      <div className="aspect-video relative overflow-hidden bg-gray-100 mb-6 rounded-sm shadow-sm">
        {/* Navigation Arrows */}
        {project.images.length > 1 && (
          <>
            <button 
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black hover:text-white"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black hover:text-white"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </>
        )}

        <img 
          src={project.images[currentIndex]} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
        />
      </div>

      <h3 className="text-xl font-medium tracking-tight uppercase">{project.title}</h3>
      <p className="text-[10px] text-gray-400 font-mono uppercase tracking-[0.2em] mt-1 mb-3">{project.category}</p>
      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{project.synopsis}</p>
      
      <button className="mt-6 text-[10px] uppercase tracking-[0.2em] font-bold border-b border-black w-fit pb-1 transition-all hover:opacity-50">
        View Project
      </button>
    </div>
  );
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('dancer');
  const [selectedProject, setSelectedProject] = useState(null);

  const displayedProjects = portfolioData.filter(item => item.type === activeTab);

  return (
    <section className="container py-16">
      <div className="flex flex-col gap-8 mb-16">
  
      <div>
        <h2 className="text-4xl font-extralight uppercase tracking-widest mb-12">
          Portfolio
        </h2>
      </div>


      <div className="flex gap-4">
        <button 
          onClick={() => setActiveTab('dancer')} 
          className={`px-8 py-2 text-[10px] uppercase tracking-widest transition-all ${
            activeTab === 'dancer' 
            ? 'bg-black text-white' 
            : 'border border-gray-200 text-gray-400 hover:text-black hover:border-black'
          }`}
        >
          Dancer
        </button>
        <button 
          onClick={() => setActiveTab('choreo')} 
          className={`px-8 py-2 text-[10px] uppercase tracking-widest transition-all ${
            activeTab === 'choreo' 
            ? 'bg-black text-white' 
            : 'border border-gray-200 text-gray-400 hover:text-black hover:border-black'
          }`}
        >
          Choreographer
        </button>
      </div>
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
        ))}
      </div>

      {/* MODAL SECTION */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm">
          <div className="bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto relative p-8 md:p-16 animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-8 right-8 text-xl font-light hover:rotate-90 transition-transform p-2"
            >✕</button>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                {selectedProject.images.map((img, i) => (
                  <img key={i} src={img} alt="" className="w-full grayscale hover:grayscale-0 transition-all duration-700" />
                ))}
              </div>

              <div className="sticky top-0 h-fit">
                <h2 className="text-4xl font-light uppercase tracking-[0.2em] mb-4">{selectedProject.title}</h2>
                <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-10">{selectedProject.category}</p>
                
                <div className="space-y-8 text-gray-600 font-light leading-relaxed">
                  <p className="text-lg italic text-black/80">{selectedProject.synopsis}</p>
                  <div className="h-[1px] w-full bg-gray-100"></div>
                  <p>Extended project description would go here. You can detail the creative process, specific performances, or the conceptual background of the piece.</p>
                </div>

                <button 
                   onClick={() => setSelectedProject(null)}
                   className="mt-16 w-full py-5 border border-black text-[10px] uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all"
                >
                  Return to Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}