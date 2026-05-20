import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { contactData } from './content';

import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import WorkDetail from './components/WorkDetail';
import Workshops from './components/Workshops';
import WorkshopDetail from './components/WorkshopDetail';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setIsMenuOpen(false); }, [location]);
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const navClass = ({ isActive }) =>
    `text-[10px] uppercase tracking-[0.22em] font-light transition-all duration-300 ${
      isActive ? 'opacity-100 border-b border-stone-800' : 'opacity-40 hover:opacity-90'
    }`;

  const mobileNavClass = ({ isActive }) =>
    `text-3xl font-extralight uppercase tracking-[0.25em] transition-all ${
      isActive ? 'opacity-100' : 'opacity-40'
    }`;

  return (
    <div className="min-h-screen flex flex-col text-stone-900 bg-[#f5f2ee] selection:bg-stone-900 selection:text-[#f5f2ee]">
      <ScrollToTop />

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-[#f5f2ee]/90 backdrop-blur-md border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between py-5">
          <NavLink
            to="/"
            className="text-[11px] font-light uppercase tracking-[0.3em] hover:opacity-60 transition-opacity z-50 text-stone-900"
          >
            Hugo Cabral Mendes
          </NavLink>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-10">
            <NavLink to="/" end className={navClass}>Home</NavLink>
            <NavLink to="/about" className={navClass}>About</NavLink>
            <NavLink to="/work" className={navClass}>Work</NavLink>
            <NavLink to="/gallery" className={navClass}>Gallery</NavLink>
            <NavLink to="/contact" className={navClass}>Contact</NavLink>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50 text-[9px] uppercase tracking-[0.25em] font-light p-2 text-stone-900"
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>

          {/* MOBILE OVERLAY */}
          <div className={`fixed inset-0 bg-[#f5f2ee] z-40 flex flex-col items-center justify-center space-y-10 transition-all duration-500 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}>
            <nav className="flex flex-col items-center space-y-10">
              <NavLink to="/" end className={mobileNavClass}>Home</NavLink>
              <NavLink to="/about" className={mobileNavClass}>About</NavLink>
              <NavLink to="/work" className={mobileNavClass}>Work</NavLink>
              <NavLink to="/gallery" className={mobileNavClass}>Gallery</NavLink>
              <NavLink to="/contact" className={mobileNavClass}>Contact</NavLink>
            </nav>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-grow pt-[69px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:id" element={<WorkDetail />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/workshops/:id" element={<WorkshopDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-stone-200/60 py-10 mt-0">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[9px] uppercase tracking-[0.22em] text-stone-400 font-light">
            © {new Date().getFullYear()} Hugo Cabral Mendes — Lisbon, Portugal
          </div>
          <div className="flex items-center gap-8">
            {[
              { label: 'Instagram', href: contactData.instagram },
              { label: 'YouTube', href: contactData.youtube },
              { label: 'Vimeo', href: contactData.vimeo },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-[9px] uppercase tracking-[0.22em] text-stone-400 hover:text-stone-900 transition-colors font-light"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
