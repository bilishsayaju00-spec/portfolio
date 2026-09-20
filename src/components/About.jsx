import React from 'react';
import { Sparkles, Cpu, Shield, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { sfx } from '../utils/sfx';

export default function About() {
  const pillars = [
    {
      number: '01',
      title: 'Creative Technology',
      description: 'Exploring the combination of design, visual storytelling, AI tools, and technology to craft memorable interactive experiences.',
      icon: Sparkles,
      focus: 'Visual Composition • AI Media • Motion',
    },
    {
      number: '02',
      title: 'Computer Engineering',
      description: 'Learning programming, web technologies, computer systems, algorithms, and engineering fundamentals from first principles.',
      icon: Cpu,
      focus: 'Algorithms • Systems • Web Architecture',
    },
    {
      number: '03',
      title: 'Cybersecurity',
      description: 'Building foundational knowledge in cybersecurity, networking, Linux, and ethical security concepts through structured exploration.',
      icon: Shield,
      focus: 'Linux Shell • Network Protocols • Security Awareness',
    },
  ];

  const techTags = [
    'Graphic Design',
    'AI Video',
    'Motion Graphics',
    'HTML',
    'CSS',
    'JavaScript',
    'Python',
    'C',
    'C++',
    'Java',
    'Cybersecurity',
    'Creative Technology',
  ];

  return (
    <section id="about" aria-label="About Philosophy" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#09150E] border border-[#1A472A] text-xs font-mono text-[#34D399] font-bold mb-3 shadow-xs">
            <span>01 // PHILOSOPHY</span>
          </div>
          <h2 className="font-space font-black text-3xl sm:text-4xl md:text-5xl text-[#0D2318] tracking-tight">
            Bridging Creativity & Technology
          </h2>
          <div className="w-20 h-1 bg-[#059669] rounded-full mt-3" />
        </div>

        {/* Narrative & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Bio Story Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#EDF5F0] border border-[#B4D5BF] shadow-xs">
              <div className="space-y-4 text-base sm:text-lg text-[#1D3B2C] leading-relaxed font-medium">
                <p>
                  Hello, I am <strong className="text-[#050F07] font-bold">Bilish Sayaju</strong>, a first-year BE Computer student from Nepal.
                </p>
                <p>
                  I’m interested in understanding both how technology works and how it can be used creatively.
                </p>
                <p>
                  My journey currently combines graphic design, AI-assisted video editing, motion graphics, programming, web development, and cybersecurity fundamentals.
                </p>
                <p>
                  I’m constantly refining my fundamentals through hands-on experiments, projects, and self-directed engineering labs.
                </p>
                <p>
                  My goal is to combine rigorous computer science fundamentals with creative thinking to build purposeful, well-crafted technology.
                </p>
              </div>

              {/* Tags Cloud */}
              <div className="mt-8 pt-6 border-t border-[#B4D5BF]">
                <div className="font-mono text-xs text-[#065F38] font-bold uppercase tracking-wider mb-3">
                  // ACTIVE EXPLORATION STACK
                </div>
                <div className="flex flex-wrap gap-2">
                  {techTags.map((tag) => (
                    <span
                      key={tag}
                      onMouseEnter={() => sfx.playHover()}
                      className="px-3 py-1 rounded-lg bg-[#DCECE1] border border-[#B4D5BF] hover:border-[#059669] text-xs font-mono font-bold text-[#102C1B] hover:text-[#059669] transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3 Pillars Showcase (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.number}
                  onMouseEnter={() => sfx.playHover()}
                  className="group p-5 sm:p-6 rounded-2xl bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#059669] transition-all duration-200 shadow-2xs hover:shadow-md cursor-default"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-10 h-10 rounded-xl bg-[#09150E] border border-[#1A472A] flex items-center justify-center text-[#34D399] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-black text-[#050F07] px-2 py-0.5 rounded bg-[#DCECE1] border border-[#B4D5BF]">
                      [{pillar.number}]
                    </span>
                  </div>

                  <h3 className="font-space font-black text-lg sm:text-xl text-[#0D2318] group-hover:text-[#065F38] transition-colors mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#2B543D] leading-relaxed mb-4">
                    {pillar.description}
                  </p>

                  <div className="pt-3 border-t border-[#B4D5BF] font-mono text-[11px] text-[#065F38] font-bold">
                    {pillar.focus}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
