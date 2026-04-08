import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { contactData } from './content';

// Import your components
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Workshops from './components/Workshops';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

// Helper component to fix scroll position on page change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu whenever the URL changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Navigation styling logic
  const navClass = ({ isActive }) => 
    `text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
      isActive 
      ? 'font-bold border-b border-black opacity-100' 
      : 'opacity-40 hover:opacity-100'
    }`;

  // Mobile specific nav styling
  const mobileNavClass = ({ isActive }) => 
    `text-2xl font-light uppercase tracking-[0.3em] transition-all ${
      isActive ? 'opacity-100 font-normal' : 'opacity-50'
    }`;

  return (
    <div className="min-h-screen flex flex-col text-black bg-white selection:bg-black selection:text-white">
      <ScrollToTop />

      {/* FIXED HEADER */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container flex items-center justify-between py-6">
          <NavLink 
            to="/" 
            className="text-lg font-light uppercase tracking-[0.3em] hover:opacity-70 transition-opacity z-50"
          >
            Hugo Cabral Mendes
          </NavLink>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" className={navClass}>Home</NavLink>
            <NavLink to="/about" className={navClass}>About</NavLink>
            <NavLink to="/portfolio" className={navClass}>Portfolio</NavLink>
            <NavLink to="/workshops" className={navClass}>Workshops</NavLink>
            <NavLink to="/gallery" className={navClass}>Gallery</NavLink>
            <NavLink to="/contact" className={navClass}>Contact</NavLink>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50 text-[10px] uppercase tracking-[0.2em] font-bold p-2"
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>

          {/* MOBILE MENU OVERLAY */}
          <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible translate-y-4'
          }`}>
            <nav className="flex flex-col items-center space-y-8">
              <NavLink to="/" className={mobileNavClass}>Home</NavLink>
              <NavLink to="/about" className={mobileNavClass}>About</NavLink>
              <NavLink to="/portfolio" className={mobileNavClass}>Portfolio</NavLink>
              <NavLink to="/workshops" className={mobileNavClass}>Workshops</NavLink>
              <NavLink to="/gallery" className={mobileNavClass}>Gallery</NavLink>
              <NavLink to="/contact" className={mobileNavClass}>Contact</NavLink>
            </nav>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow pt-24">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 py-12 mt-20">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
            © {new Date().getFullYear()} Hugo Cabral Mendes — Lisbon, Portugal
          </div>
          
          <div className="flex items-center gap-8">
            <a href={contactData.instagram} target="_blank" rel="noreferrer" className="social-link">Instagram</a>
            <a href={contactData.youtube} target="_blank" rel="noreferrer" className="social-link">YouTube</a>
            <a href={contactData.vimeo} target="_blank" rel="noreferrer" className="social-link">Vimeo</a>
          </div>
        </div>
      </footer>

      {/* Simple style for social links to keep the code clean */}
      <style dangerouslySetInnerHTML={{ __html: `
        .social-link {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          transition: all 0.3s;
        }
        .social-link:hover {
          text-decoration: underline;
          text-underline-offset: 8px;
        }
      `}} />
    </div>
  );
}