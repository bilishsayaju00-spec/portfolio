import React, { useState } from 'react';
import { Terminal, Shield, Sparkles, MapPin, Activity } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { sfx } from '../utils/sfx';

export default function ProfileCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id="hero-digital-profile-card"
      className="relative w-full max-w-md mx-auto group animate-cyber-float"
      onMouseEnter={() => {
        setIsHovered(true);
        sfx.playHover();
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glowing Backdrop Gradient */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-300/30 via-teal-300/30 to-cyan-300/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Cyber Glass Card Body */}
      <div className="relative rounded-2xl bg-[#EDF5F0] border-2 border-[#A6CCA2] hover:border-[#059669] transition-all duration-300 backdrop-blur-xl p-5 sm:p-6 shadow-[0_12px_40px_rgba(5,150,105,0.08)]">
        
        {/* HUD Corner Tech Accents */}
        <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-[#059669]" />
        <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-[#059669]" />
        <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-[#059669]" />
        <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-[#059669]" />

        {/* Window Top Titlebar */}
        <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#08150D] border border-[#1A4528] mb-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] inline-block shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] inline-block shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] inline-block shadow-xs" />
          </div>
          <div className="font-mono text-xs text-[#F4FAF6] font-bold flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-[#34D399] animate-pulse" />
            <span>PORTFOLIO_OS // v2.6</span>
          </div>
          <span className="font-mono text-[10px] text-[#84C29B] font-bold">CE::2026</span>
        </div>

        {/* Profile Identity Showcase */}
        <div className="flex items-center gap-4 mb-5">
          {/* Monogram Frame */}
          <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0F2D1D] to-[#08150D] border-2 border-[#2D6A47] flex flex-col items-center justify-center text-center shadow-md overflow-hidden group-hover:border-[#059669] transition-colors">
            <div className="absolute inset-0 cyber-dots-bg opacity-30" />
            <span className="font-space font-black text-2xl text-[#34D399] tracking-tighter relative z-10">
              BS
            </span>
            <span className="font-mono text-[9px] text-[#A7F3D0] tracking-widest relative z-10 font-bold mt-0.5">
              DEV_CORE
            </span>
          </div>

          {/* Identity & Location */}
          <div className="flex-1 flex flex-col text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-space font-black text-lg sm:text-xl text-[#0D2318] leading-tight">
                Bilish Sayaju
              </span>
            </div>
            <div className="font-mono text-xs text-[#065F38] font-bold mb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
              <span>BE Computer Student</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-mono text-[#4F7D63] font-semibold">
              <MapPin className="w-3.5 h-3.5 text-[#059669]" />
              <span>Bhaktapur, Nepal</span>
            </div>
          </div>
        </div>

        {/* Quick Tech Highlights */}
        <div className="space-y-2.5 pt-2 border-t border-[#B4D5BF]">
          <div className="flex items-center justify-between p-2 rounded-lg bg-[#DCECE1] border border-[#B4D5BF] font-mono text-xs">
            <span className="text-[#2B543D] font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
              Track:
            </span>
            <span className="font-bold text-[#0D2318]">Computer Engineering</span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg bg-[#DCECE1] border border-[#B4D5BF] font-mono text-xs">
            <span className="text-[#2B543D] font-bold flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#059669]" />
              Focus:
            </span>
            <span className="font-bold text-[#0D2318]">Creative Tech & Web</span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg bg-[#DCECE1] border border-[#B4D5BF] font-mono text-xs">
            <span className="text-[#2B543D] font-bold flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#059669]" />
              Status:
            </span>
            <span className="font-bold text-[#065F38] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              Active Exploration
            </span>
          </div>
        </div>

        {/* Bottom Interactive Terminal Status */}
        <div className="mt-4 pt-3 border-t border-[#B4D5BF] flex items-center justify-between text-[11px] font-mono">
          <span className="text-[#527F67] font-semibold">sys.ping(np_bkt)</span>
          <span className="text-[#059669] font-bold bg-[#D4E8DC] px-2 py-0.5 rounded border border-[#9DC4AB]">
            0ms · READY
          </span>
        </div>

      </div>
    </div>
  );
}
