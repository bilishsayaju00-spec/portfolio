import React from 'react';
import { ArrowUp, Heart, Sparkles, Activity } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { sfx } from '../utils/sfx';

export default function Footer() {
  const scrollToTop = () => {
    sfx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      aria-label="Page Footer"
      className="py-12 border-t border-[#B4D5BF] bg-[#DCECE1] text-left relative overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Brand Identity & Domain */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0F2D1D] border border-[#2D6A47] flex items-center justify-center font-mono font-bold text-xs text-[#34D399]">
              BS
            </div>
            <div>
              <div className="font-space font-bold text-sm text-[#0D2318]">
                @2026 Bilish Sayaju. All rights preserved.
              </div>
              <div className="font-mono text-xs text-[#2B543D] font-bold">
                <a
                  href="http://bilishsayaju.com.np"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#059669] transition-colors"
                >
                  bilishsayaju.com.np
                </a>
                <span className="mx-2 text-[#84C29B]">·</span>
                <span>BE Computer Student</span>
              </div>
            </div>
          </div>

          {/* Center: System Status Telemetry */}
          <div className="hidden lg:flex items-center gap-2 font-mono text-[11px] text-[#065F38] font-bold px-3 py-1.5 rounded-full bg-[#EDF5F0] border border-[#B4D5BF]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>PORT::3000</span>
            <span className="text-[#84C29B]">|</span>
            <span>BKT_NEPAL</span>
            <span className="text-[#84C29B]">|</span>
            <span>SYS::ALL_SYSTEMS_NOMINAL</span>
          </div>

          {/* Right: Back to Top Button */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              onMouseEnter={() => sfx.playHover()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#EDF5F0] hover:bg-[#DEEFE5] border border-[#B4D5BF] hover:border-[#059669] text-xs font-mono font-bold text-[#0D2318] transition-colors shadow-2xs cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#059669]" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
