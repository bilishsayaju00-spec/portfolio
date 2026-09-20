import React, { useState } from 'react';
import { ArrowUpRight, Code, Sparkles, Video, Terminal, Shield } from 'lucide-react';
import ProjectModal from './ProjectModal';
import { projectsData } from '../data/portfolioData';
import { sfx } from '../utils/sfx';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const getVisualPreview = (type) => {
    switch (type) {
      case 'portfolio':
        return (
          <div className="w-full h-32 rounded-xl bg-[#09150E] border border-[#1A472A] p-3 font-mono text-[11px] text-[#34D399] flex flex-col justify-between overflow-hidden shadow-inner">
            <div className="flex items-center justify-between text-[#84C29B] border-b border-[#1A472A] pb-1.5 text-[10px]">
              <span>portfolio.config.js</span>
              <span className="text-[#10B981]">● LIVE</span>
            </div>
            <div className="space-y-1 text-[10px] text-[#A7F3D0]">
              <p><span className="text-[#6EE7B7]/80">const</span> engineer = <span className="text-[#FDE68A]">"Bilish Sayaju"</span>;</p>
              <p><span className="text-[#6EE7B7]/80">const</span> track = <span className="text-[#FDE68A]">"BE Computer"</span>;</p>
              <p><span className="text-[#6EE7B7]/80">const</span> stack = [<span className="text-[#FDE68A]">"React"</span>, <span className="text-[#FDE68A]">"Tailwind"</span>];</p>
            </div>
            <div className="text-[9px] text-[#527F67] flex justify-between">
              <span>DEPLOY: OK</span>
              <span>bilishsayaju.com.np</span>
            </div>
          </div>
        );
      case 'graphics':
        return (
          <div className="w-full h-32 rounded-xl bg-gradient-to-br from-[#0F2D1D] to-[#08150D] border border-[#1A472A] p-3 flex flex-col justify-between shadow-inner">
            <div className="flex items-center justify-between text-[#84C29B] font-mono text-[10px]">
              <span>POSTER_STUDY // 01</span>
              <span>VECTOR</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-lg border-2 border-dashed border-[#059669] flex items-center justify-center font-space font-black text-xl text-[#34D399]">
                BS
              </div>
              <div className="space-y-1 font-mono text-[9px] text-[#A7F3D0]">
                <p>KERNING: 1.2EM</p>
                <p>GRID: 12-COL</p>
                <p>CONTRAST: 98%</p>
              </div>
            </div>
            <div className="font-mono text-[9px] text-[#527F67]">
              COMPOSITION: BALANCED
            </div>
          </div>
        );
      case 'aivideo':
        return (
          <div className="w-full h-32 rounded-xl bg-[#09150E] border border-[#1A472A] p-3 flex flex-col justify-between font-mono shadow-inner">
            <div className="flex items-center justify-between text-[#84C29B] text-[10px]">
              <span>AI_TIMELINE // 60FPS</span>
              <span className="text-[#EF4444] animate-pulse">● REC</span>
            </div>
            <div className="space-y-1.5 py-1">
              <div className="h-2 w-full bg-[#1A4528] rounded-full overflow-hidden flex">
                <div className="h-full bg-[#059669] w-1/3" />
                <div className="h-full bg-[#10B981] w-1/4" />
                <div className="h-full bg-[#34D399] w-1/3" />
              </div>
              <div className="flex justify-between text-[9px] text-[#84C29B]">
                <span>00:00:12</span>
                <span>AI_GEN_PROMPT</span>
                <span>00:01:00</span>
              </div>
            </div>
            <div className="text-[9px] text-[#527F67]">
              AUDIO_BEAT_SYNC: LOCKED
            </div>
          </div>
        );
      case 'webdev':
        return (
          <div className="w-full h-32 rounded-xl bg-[#09150E] border border-[#1A472A] p-3 font-mono text-[10px] flex flex-col justify-between shadow-inner">
            <div className="flex items-center justify-between text-[#84C29B]">
              <span>DOM_EXPERIMENT</span>
              <span>ES6+</span>
            </div>
            <div className="p-2 rounded bg-[#08150D] border border-[#1A4528] text-[#34D399] text-[9px]">
              <code>document.querySelectorAll('.card')</code>
              <div className="text-[#84C29B] mt-0.5">=&gt; eventListener('click')</div>
            </div>
            <div className="text-[9px] text-[#527F67]">
              RESPONSIVE_VIEWPORT: TRUE
            </div>
          </div>
        );
      case 'security':
      default:
        return (
          <div className="w-full h-32 rounded-xl bg-[#09150E] border border-[#1A472A] p-3 font-mono text-[10px] flex flex-col justify-between shadow-inner">
            <div className="flex items-center justify-between text-[#84C29B]">
              <span>DEFENSE_LAB</span>
              <span className="text-[#10B981]">ETHICAL</span>
            </div>
            <div className="space-y-1 text-[9px] text-[#A7F3D0]">
              <p className="text-[#34D399]">$ sudo iptables -L -n -v</p>
              <p className="text-[#84C29B]">&gt; OSI L4 TCP/UDP Handshake</p>
            </div>
            <div className="text-[9px] text-[#527F67]">
              HYGIENE_AUDIT: COMPLETE
            </div>
          </div>
        );
    }
  };

  const getVisualType = (id) => {
    if (id.includes('portfolio')) return 'portfolio';
    if (id.includes('design') || id.includes('graphic')) return 'graphics';
    if (id.includes('video')) return 'aivideo';
    if (id.includes('web')) return 'webdev';
    return 'security';
  };

  return (
    <section id="projects" aria-label="Selected Projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#09150E] border border-[#1A472A] text-xs font-mono text-[#34D399] font-bold mb-3 shadow-xs">
            <span>03 // BUILDS</span>
          </div>
          <h2 className="font-space font-black text-3xl sm:text-4xl md:text-5xl text-[#0D2318] tracking-tight">
            Selected Projects & Experiments
          </h2>
          <div className="w-20 h-1 bg-[#059669] rounded-full mt-3" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {projectsData.map((project) => {
            const visualType = getVisualType(project.id);
            return (
              <div
                key={project.id}
                id={project.id}
                onMouseEnter={() => sfx.playHover()}
                className="group p-6 rounded-2xl bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#059669] transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between cursor-default"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-black text-[#059669] px-2.5 py-0.5 rounded bg-[#DCECE1] border border-[#B4D5BF]">
                      [{project.number}]
                    </span>
                    <span className="font-mono text-[11px] text-[#065F38] font-bold px-2 py-0.5 rounded-full bg-[#D1FAE5] border border-[#A7F3D0]">
                      {project.status}
                    </span>
                  </div>

                  {/* Visual Preview Box */}
                  <div className="mb-5">
                    {getVisualPreview(visualType)}
                  </div>

                  <h3 className="font-space font-black text-xl text-[#0D2318] group-hover:text-[#065F38] transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#2B543D] leading-relaxed mb-4">
                    {project.shortDescription || project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {(project.technologies || []).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-[#DCECE1] border border-[#B4D5BF] font-mono text-[10px] font-bold text-[#102C1B]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Trigger Dialog Button */}
                  <button
                    type="button"
                    onClick={() => {
                      sfx.playModalOpen();
                      setSelectedProject(project);
                    }}
                    onMouseEnter={() => sfx.playHover()}
                    className="w-full py-2 px-4 rounded-xl bg-[#08150D] hover:bg-[#059669] text-xs font-mono font-bold text-[#F4FAF6] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Explore System Specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#34D399]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
