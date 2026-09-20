import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import TheLab from './components/TheLab';
import PCOptimization from './components/PCOptimization';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CyberCLI from './components/CyberCLI';
import BackgroundEffects from './components/BackgroundEffects';
import ScrollHud from './components/ScrollHud';
import { sfx } from './utils/sfx';

export default function App() {
  const [isCLIOpen, setIsCLIOpen] = useState(false);
  const [sfxEnabled, setSfxEnabled] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  // Initialize SFX state
  useEffect(() => {
    setSfxEnabled(sfx.getState());
  }, []);

  // Global keyboard shortcuts (Ctrl+K or Cmd+K or backtick `)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        sfx.playModalOpen();
        setIsCLIOpen((prev) => !prev);
      } else if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        e.preventDefault();
        sfx.playModalOpen();
        setIsCLIOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['hero', 'about', 'skills', 'projects', 'lab', 'gaming-tuning', 'contact'];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSFX = () => {
    const newState = sfx.toggle();
    setSfxEnabled(newState);
  };

  return (
    <div className="min-h-screen bg-[#E3EDE5] text-[#0D2318] relative font-sans antialiased overflow-x-hidden selection:bg-emerald-600/25 selection:text-emerald-950">
      
      {/* Interactive Background Effects Layer */}
      <BackgroundEffects />

      {/* Interactive Navigation HUD on side (xl screens) */}
      <ScrollHud activeSection={activeSection} />

      {/* Cyber Glass Navbar */}
      <Navbar
        onOpenCLI={() => setIsCLIOpen(true)}
        sfxEnabled={sfxEnabled}
        onToggleSFX={handleToggleSFX}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10">
        <Hero onOpenCLI={() => setIsCLIOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <TheLab onOpenCLI={() => setIsCLIOpen(true)} />
        <PCOptimization />
        <Contact />
      </main>

      {/* System Telemetry Footer */}
      <Footer />

      {/* Interactive Cyber CLI Modal */}
      <CyberCLI
        isOpen={isCLIOpen}
        onClose={() => setIsCLIOpen(false)}
      />

    </div>
  );
}
