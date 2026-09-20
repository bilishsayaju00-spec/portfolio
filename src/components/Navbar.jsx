import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Terminal, Menu, X, Activity } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { sfx } from '../utils/sfx';

// Vector Brand Icons
const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <radialGradient id="ig-nav-grad" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#ig-nav-grad)" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" stroke="url(#ig-nav-grad)" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="url(#ig-nav-grad)" />
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path
      fill="#1877F2"
      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
    />
  </svg>
);

const GmailIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6z" opacity="0.1" />
    <path fill="#EA4335" d="M20 4H4C2.9 4 2 4.9 2 6l10 6.5L22 6c0-1.1-.9-2-2-2z" />
    <path fill="#4285F4" d="M2 6v12c0 1.1.9 2 2 2h3.5V11.5L2 6z" />
    <path fill="#34A853" d="M22 6v12c0 1.1-.9 2-2 2h-3.5V11.5L22 6z" />
    <path fill="#FBBC05" d="M7.5 20h9V11.5L12 14.5 7.5 11.5V20z" />
  </svg>
);

export default function Navbar({ onOpenCLI, sfxEnabled, onToggleSFX, activeSection = 'hero' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', num: '01.', label: 'About', href: '#about' },
    { id: 'skills', num: '02.', label: 'Skills', href: '#skills' },
    { id: 'projects', num: '03.', label: 'Projects', href: '#projects' },
    { id: 'lab', num: '04.', label: 'Lab', href: '#lab' },
    { id: 'gaming-tuning', num: '05.', label: 'Tuning', href: '#gaming-tuning' },
    { id: 'contact', num: '06.', label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    sfx.playClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#E3EDE5]/90 backdrop-blur-md border-b border-[#B4D5BF] shadow-xs py-2.5'
          : 'bg-transparent py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Brand Monogram & Subtitle */}
        <a
          href="#hero"
          id="nav-logo"
          className="flex items-center gap-3 group focus:outline-none rounded-lg p-1"
          onClick={(e) => handleLinkClick(e, '#hero')}
          onMouseEnter={() => sfx.playHover()}
        >
          <div className="relative w-9 h-9 rounded-lg bg-[#0F2D1D] border border-[#2D6A47] flex items-center justify-center font-mono font-bold text-sm text-[#34D399] group-hover:bg-[#153D28] transition-colors shadow-xs">
            <span className="relative z-10 tracking-tighter">BS</span>
            <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-[#10B981] rounded-full animate-ping" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-space font-bold tracking-wider text-xs sm:text-sm text-[#0D2318] group-hover:text-[#059669] transition-colors leading-tight">
              BILISH SAYAJU
            </span>
            <span className="font-mono text-[10px] text-[#2B543D] tracking-wider leading-tight">
              BE COMPUTER STUDENT
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation */}
        <nav id="desktop-navigation" aria-label="Main Navigation" className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((item) => {
            const isActive = activeSection === item.id || (item.id === 'gaming-tuning' && activeSection === 'pc-optimization');
            return (
              <a
                key={item.id}
                href={item.href}
                id={`nav-link-${item.id}`}
                onClick={(e) => handleLinkClick(e, item.href)}
                onMouseEnter={() => sfx.playHover()}
                className={`flex items-center gap-1.5 text-xs xl:text-sm font-medium transition-all py-1 px-1.5 relative group focus:outline-none rounded ${
                  isActive ? 'text-[#065F38] font-bold' : 'text-[#2D523F] hover:text-[#0D2318]'
                }`}
              >
                <span className="font-mono text-[11px] text-[#4F7D63] group-hover:text-[#059669] transition-colors">
                  {item.num}
                </span>
                <span className="font-space tracking-wide">{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#059669] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Controls & Social Links */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Social Quick Pill */}
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[#EDF5F0] border border-[#B4D5BF]">
            <a
              href={personalInfo.instagram?.url || "https://instagram.com/bilish13226"}
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram Profile"
              onClick={() => sfx.playClick()}
              onMouseEnter={() => sfx.playHover()}
              className="p-1 rounded-md hover:bg-[#DEEFE5] transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.facebook?.url || "https://www.facebook.com/bilishsayaju00#"}
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook Profile"
              onClick={() => sfx.playClick()}
              onMouseEnter={() => sfx.playHover()}
              className="p-1 rounded-md hover:bg-[#DEEFE5] transition-colors"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              title="Send Gmail"
              onClick={() => sfx.playClick()}
              onMouseEnter={() => sfx.playHover()}
              className="p-1 rounded-md hover:bg-[#DEEFE5] transition-colors"
            >
              <GmailIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Sound FX Toggle Button */}
          <button
            id="nav-sfx-toggle"
            type="button"
            onClick={onToggleSFX}
            onMouseEnter={() => sfx.playHover()}
            title={sfxEnabled ? 'Mute Sound FX' : 'Enable Sound FX'}
            className="p-2 rounded-lg bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#8FBFA5] text-[#244734] hover:text-[#0D2318] shadow-xs transition-colors cursor-pointer"
          >
            {sfxEnabled ? (
              <Volume2 className="w-4 h-4 text-[#059669]" />
            ) : (
              <VolumeX className="w-4 h-4 text-[#6A947B]" />
            )}
          </button>

          {/* CLI Modal Trigger Button */}
          <button
            id="nav-cli-toggle"
            type="button"
            onClick={() => {
              sfx.playModalOpen();
              onOpenCLI();
            }}
            onMouseEnter={() => sfx.playHover()}
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#059669] text-xs font-mono text-[#0D2318] hover:text-[#065F38] shadow-xs transition-all cursor-pointer font-bold"
          >
            <Terminal className="w-3.5 h-3.5 text-[#059669]" />
            <span>CLI</span>
            <span className="text-[10px] px-1 py-0.2 rounded bg-[#DCECE1] text-[#244734] border border-[#B4D5BF] font-mono">
              Ctrl+K
            </span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => {
              sfx.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle Mobile Menu"
            className="lg:hidden p-2 rounded-lg bg-[#EDF5F0] border border-[#B4D5BF] text-[#244734] hover:text-[#0D2318] shadow-xs cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden fixed inset-x-0 top-[60px] bg-[#E4EDE6]/98 border-b border-[#B4D5BF] p-6 shadow-xl backdrop-blur-xl animate-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#B4D5BF]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#0D2318] font-bold">
                <Activity className="w-3.5 h-3.5 text-[#059669]" />
                <span>ONLINE · BE COMPUTER STUDENT</span>
              </div>
              <div className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4" />
                <FacebookIcon className="w-4 h-4" />
                <GmailIcon className="w-4 h-4" />
              </div>
            </div>

            <nav className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-[#EDF5F0] border border-[#B4D5BF] text-sm font-bold text-[#0D2318]"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-xs text-[#059669]">{link.num}</span>
                    <span>{link.label}</span>
                  </span>
                  <span className="text-xs text-[#4F7D63] font-mono">→</span>
                </a>
              ))}
            </nav>

            <div className="pt-2 border-t border-[#B4D5BF] flex gap-2">
              <button
                onClick={() => {
                  onToggleSFX();
                  sfx.playClick();
                }}
                className="flex-1 py-2.5 rounded-lg bg-[#EDF5F0] border border-[#B4D5BF] flex items-center justify-center gap-2 text-xs font-mono font-bold text-[#0D2318]"
              >
                {sfxEnabled ? <Volume2 className="w-4 h-4 text-[#059669]" /> : <VolumeX className="w-4 h-4 text-[#6A947B]" />}
                <span>{sfxEnabled ? 'SFX: ACTIVE' : 'SFX: MUTED'}</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  sfx.playModalOpen();
                  onOpenCLI();
                }}
                className="flex-1 py-2.5 rounded-lg bg-[#08150D] border border-[#1A4528] flex items-center justify-center gap-2 text-xs font-mono font-bold text-[#F4FAF6]"
              >
                <Terminal className="w-4 h-4 text-[#34D399]" />
                <span>OPEN CLI</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
