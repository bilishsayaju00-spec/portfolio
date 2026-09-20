import React, { useState } from 'react';
import {
  Code,
  Palette,
  FileCode,
  Terminal,
  Binary,
  Cpu,
  Coffee,
  TerminalSquare,
  Key,
  Eye,
  Network,
  Sparkles,
  Layers,
} from 'lucide-react';
import { sfx } from '../utils/sfx';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const skills = [
    {
      id: 'html',
      name: 'HTML',
      category: 'Programming & Web',
      status: 'Practising',
      icon: Code,
      detail: 'Semantic structure, accessible markup, modern HTML5 layouts and standards.',
    },
    {
      id: 'css',
      name: 'CSS',
      category: 'Programming & Web',
      status: 'Practising',
      icon: Palette,
      detail: 'Modern CSS styling, responsive flexbox, CSS Grid layouts, and clean animations.',
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      category: 'Programming & Web',
      status: 'Practising',
      icon: FileCode,
      detail: 'DOM manipulation, ES6+ features, asynchronous logic, and interactive web UIs.',
    },
    {
      id: 'python',
      name: 'Python',
      category: 'Programming & Web',
      status: 'Learning',
      icon: Terminal,
      detail: 'Algorithmic logic, scripting automation, and computational problem solving.',
    },
    {
      id: 'c',
      name: 'C',
      category: 'Programming & Web',
      status: 'Learning',
      icon: Binary,
      detail: 'Computer engineering coursework, memory models, pointers, and structured programming.',
    },
    {
      id: 'cpp',
      name: 'C++',
      category: 'Programming & Web',
      status: 'Learning',
      icon: Cpu,
      detail: 'Object-oriented programming, standard template library (STL), and algorithmic efficiency.',
    },
    {
      id: 'java',
      name: 'Java',
      category: 'Programming & Web',
      status: 'Learning',
      icon: Coffee,
      detail: 'Object-oriented application architecture, class structures, and robust fundamentals.',
    },
    {
      id: 'linux',
      name: 'Linux',
      category: 'Systems & Security',
      status: 'Practising',
      icon: TerminalSquare,
      detail: 'Bash shell navigation, file system permissions, utilities, and process management.',
    },
    {
      id: 'ethical-hacking-concepts',
      name: 'Ethical Hacking Concepts',
      category: 'Systems & Security',
      status: 'Exploring',
      icon: Key,
      detail: 'Understanding vulnerability lifecycles, responsible disclosure, and cyber defense.',
    },
    {
      id: 'security-exploration',
      name: 'Security Exploration',
      category: 'Systems & Security',
      status: 'Exploring',
      icon: Eye,
      detail: 'Hands-on practice labs, security hygiene, network defense, and problem sets.',
    },
    {
      id: 'networking-basics',
      name: 'Networking Basics',
      category: 'Systems & Security',
      status: 'Learning',
      icon: Network,
      detail: 'OSI model, TCP/IP stack, DNS, routing concepts, and packet inspection fundamentals.',
    },
  ];

  const categories = ['all', 'Programming & Web', 'Systems & Security'];

  const filteredSkills =
    activeTab === 'all' ? skills : skills.filter((s) => s.category === activeTab);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Practising':
        return 'bg-[#D1FAE5] text-[#065F38] border-[#A7F3D0]';
      case 'Learning':
        return 'bg-[#FEF3C7] text-[#92400E] border-[#FDE68A]';
      case 'Exploring':
        return 'bg-[#E0EFE6] text-[#064E3B] border-[#B4D5BF]';
      default:
        return 'bg-[#DCECE1] text-[#1D3B2C] border-[#B4D5BF]';
    }
  };

  return (
    <section id="skills" aria-label="Skills Arsenal" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#09150E] border border-[#1A472A] text-xs font-mono text-[#34D399] font-bold mb-3 shadow-xs">
              <span>02 // ARSENAL</span>
            </div>
            <h2 className="font-space font-black text-3xl sm:text-4xl md:text-5xl text-[#0D2318] tracking-tight">
              Technical Skills & Focus Areas
            </h2>
            <div className="w-20 h-1 bg-[#059669] rounded-full mt-3" />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  sfx.playClick();
                  setActiveTab(cat);
                }}
                onMouseEnter={() => sfx.playHover()}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeTab === cat
                    ? 'bg-[#08150D] text-[#F4FAF6] border border-[#1A472A] shadow-xs'
                    : 'bg-[#EDF5F0] text-[#2B543D] border border-[#B4D5BF] hover:border-[#059669]'
                }`}
              >
                {cat === 'all' ? 'All Skills' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-left">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.id}
                id={skill.id}
                onMouseEnter={() => sfx.playHover()}
                className="group p-5 rounded-2xl bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#059669] transition-all duration-200 shadow-2xs hover:shadow-md hover:-translate-y-0.5 flex flex-col justify-between cursor-default"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#09150E] border border-[#1A472A] flex items-center justify-center text-[#34D399] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold border inline-flex items-center gap-1 ${getStatusBadge(
                        skill.status
                      )}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
                      {skill.status}
                    </span>
                  </div>

                  <h3 className="font-space font-black text-lg text-[#0D2318] group-hover:text-[#065F38] transition-colors mb-1.5">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-[#2B543D] leading-relaxed mb-4">
                    {skill.detail}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#B4D5BF] flex items-center justify-between font-mono text-[10px] text-[#4F7D63] font-bold">
                  <span>{skill.category}</span>
                  <span className="text-[#059669]">SYS_OK</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
