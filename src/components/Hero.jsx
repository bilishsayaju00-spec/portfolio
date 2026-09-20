import React from 'react';
import { Terminal, ArrowRight, Send } from 'lucide-react';
import ProfileCard from './ProfileCard';
import Stats from './Stats';
import { personalInfo } from '../data/portfolioData';
import { sfx } from '../utils/sfx';

export default function Hero({ onOpenCLI }) {
  const handleScrollTo = (id) => {
    sfx.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Live Radar Ping Status Pill */}
            <div
              id="hero-status-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#08150D] border border-[#1A4528] text-xs font-mono text-[#F4FAF6] shadow-sm mb-6 hover:border-[#059669] transition-all cursor-default"
              onMouseEnter={() => sfx.playHover()}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#059669]" />
              </span>
              <span className="font-bold text-[#E2F7EB]">BE Computer Student</span>
              <span className="text-[#34D399]">|</span>
              <span className="text-[#84C29B] text-[11px] font-bold">SYS::ONLINE</span>
            </div>

            {/* Prompt Greeting */}
            <div className="font-mono text-sm sm:text-base text-[#1D472D] tracking-wider mb-2 flex items-center gap-2 font-bold">
              <span className="text-[#059669] font-black">{'>'}</span>
              <span>Hello, World! I am</span>
            </div>

            {/* Big Name Headline */}
            <h1
              id="hero-name-headline"
              className="font-space font-black text-4xl sm:text-6xl md:text-7xl text-[#0D2318] tracking-tight leading-[1.08] mb-4"
            >
              BILISH SAYAJU
            </h1>

            {/* Sub-Headline Role */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-lg bg-[#D7EADE] border border-[#A2CCA7] font-mono text-xs sm:text-sm font-bold text-[#065F38]">
                {'> BE Computer Student 🎓'}
              </span>
              <span className="px-3 py-1 rounded-lg bg-[#DCECE1] border border-[#B4D5BF] font-mono text-xs sm:text-sm font-bold text-[#1D3B2C]">
                {personalInfo.shortIdentity}
              </span>
            </div>

            {/* Bio Description */}
            <p className="text-base sm:text-lg text-[#2B543D] max-w-2xl leading-relaxed mb-8 font-medium">
              {personalInfo.heroDescription}
            </p>

            {/* Interactive Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Projects CTA */}
              <button
                id="hero-cta-projects"
                type="button"
                onClick={() => handleScrollTo('projects')}
                onMouseEnter={() => sfx.playHover()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#08150D] hover:bg-[#059669] border border-[#1A472A] text-sm font-mono font-bold text-[#F4FAF6] shadow-md hover:shadow-lg transition-all cursor-pointer group"
              >
                <span>Explore Arsenal & Builds</span>
                <ArrowRight className="w-4 h-4 text-[#34D399] group-hover:text-white group-hover:translate-x-1 transition-all" />
              </button>

              {/* CLI CTA */}
              <button
                id="hero-cta-cli"
                type="button"
                onClick={() => {
                  sfx.playModalOpen();
                  onOpenCLI();
                }}
                onMouseEnter={() => sfx.playHover()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#EDF5F0] hover:bg-[#DEEFE5] border border-[#B4D5BF] hover:border-[#059669] text-sm font-mono font-bold text-[#0D2318] shadow-2xs transition-all cursor-pointer"
              >
                <Terminal className="w-4 h-4 text-[#059669]" />
                <span>Launch CLI</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#DCECE1] text-[#244734] border border-[#B4D5BF]">
                  Ctrl+K
                </span>
              </button>

              {/* Contact CTA */}
              <button
                id="hero-cta-contact"
                type="button"
                onClick={() => handleScrollTo('contact')}
                onMouseEnter={() => sfx.playHover()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-transparent hover:bg-[#D5EADF] border border-[#B4D5BF] hover:border-[#059669] text-sm font-mono font-bold text-[#1B4329] transition-all cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#059669]" />
                <span>Transmit Message</span>
              </button>
            </div>

          </div>

          {/* Right Column: Digital Profile Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ProfileCard />
          </div>

        </div>

        {/* Bottom Hero Stats Row */}
        <Stats />

      </div>
    </section>
  );
}
