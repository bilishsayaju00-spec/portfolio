import React, { useState } from 'react';
import { X, Check, ExternalLink, Terminal, Layers, Shield, Sparkles } from 'lucide-react';
import { sfx } from '../utils/sfx';

export default function ProjectModal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen || !project) return null;

  return (
    <div
      id="project-details-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#08150D]/50 backdrop-blur-md animate-in fade-in duration-200"
      onClick={() => {
        sfx.playClick();
        onClose();
      }}
    >
      <div
        id="project-details-modal-content"
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#EDF5F0] border-2 border-[#A6CCA2] shadow-2xl p-6 sm:p-8 text-left animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#B4D5BF] mb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-black text-[#059669] px-2.5 py-1 rounded bg-[#DCECE1] border border-[#B4D5BF]">
              [{project.number}]
            </span>
            <div>
              <h3 className="font-space font-black text-2xl text-[#0D2318] leading-tight">
                {project.title}
              </h3>
              <span className="font-mono text-xs text-[#2B543D] font-bold">
                {project.category} · {project.status}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              sfx.playClick();
              onClose();
            }}
            onMouseEnter={() => sfx.playHover()}
            className="p-1.5 rounded-lg bg-[#DCECE1] hover:bg-[#DEEFE5] text-[#244734] hover:text-[#0D2318] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2 pb-4 mb-6 border-b border-[#B4D5BF]">
          <button
            type="button"
            onClick={() => {
              sfx.playClick();
              setActiveTab('overview');
            }}
            className={`px-4 py-1.5 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-[#08150D] text-[#F4FAF6]'
                : 'bg-[#DCECE1] text-[#2B543D] hover:bg-[#DEEFE5]'
            }`}
          >
            Overview
          </button>
          <button
            type="button"
            onClick={() => {
              sfx.playClick();
              setActiveTab('highlights');
            }}
            className={`px-4 py-1.5 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'highlights'
                ? 'bg-[#08150D] text-[#F4FAF6]'
                : 'bg-[#DCECE1] text-[#2B543D] hover:bg-[#DEEFE5]'
            }`}
          >
            Architecture & Highlights
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' ? (
          <div className="space-y-6">
            <div>
              <h4 className="font-mono text-xs text-[#065F38] font-bold uppercase tracking-wider mb-2">
                // System Summary
              </h4>
              <p className="text-sm sm:text-base text-[#1D3B2C] leading-relaxed font-medium">
                {project.fullOverview || project.overview || project.shortDescription}
              </p>
            </div>

            <div>
              <h4 className="font-mono text-xs text-[#065F38] font-bold uppercase tracking-wider mb-3">
                // Technologies & Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {(project.technologies || []).map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-[#DCECE1] border border-[#B4D5BF] font-mono text-xs font-bold text-[#102C1B]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h4 className="font-mono text-xs text-[#065F38] font-bold uppercase tracking-wider mb-2">
              // Engineering Highlights & Findings
            </h4>
            <div className="space-y-2.5">
              {(project.highlights || project.architecture || []).map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#DCECE1] border border-[#B4D5BF]"
                >
                  <Check className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#0D2318] font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Actions */}
        <div className="mt-8 pt-4 border-t border-[#B4D5BF] flex items-center justify-between">
          <span className="font-mono text-xs text-[#4F7D63] font-bold">
            SPEC_LEVEL: YEAR_ONE_LAB
          </span>
          <button
            type="button"
            onClick={() => {
              sfx.playClick();
              onClose();
            }}
            className="px-4 py-2 rounded-xl bg-[#08150D] hover:bg-[#059669] text-xs font-mono font-bold text-[#F4FAF6] transition-colors cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
