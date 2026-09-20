import React from 'react';
import { Gauge, Crosshair, Terminal, Check, MessageSquare, Zap, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { sfx } from '../utils/sfx';

// Vector Brand Icons
const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <radialGradient id="ig-grad-tune" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#ig-grad-tune)" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" stroke="url(#ig-grad-tune)" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="url(#ig-grad-tune)" />
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

export default function PCOptimization() {
  const tuningServices = [
    {
      id: 'sensi',
      tag: '01 // AIM CALIBRATION',
      title: 'Paid Custom Sensi Tuning',
      badge: 'Precision Aim',
      icon: Crosshair,
      description:
        'Personalized sensitivity matching based on your mouse DPI, mousepad friction, resolution, and personal aiming style (wrist vs arm aim) to build flawless muscle memory.',
      features: [
        'Exact DPI, eDPI, and in-game multiplier calculations',
        'Cross-game sensitivity conversion (same feel in all games)',
        'Emulator sensitivity tweaking (Free Fire / BlueStacks / LDPlayer)',
        'Micro-adjustment for tracking and flick consistency',
      ],
      games: 'Valorant · CS2 · Free Fire · Apex Legends · R6',
    },
    {
      id: 'redigit',
      tag: '02 // LATENCY TUNING',
      title: 'Custom Regedit & Input Lag Tweaks',
      badge: 'Instant Response',
      icon: Terminal,
      description:
        'Carefully tuned, safe Windows Registry (regedit) adjustments targeting DPC latency, keyboard/mouse response times, and network packet queue prioritization.',
      features: [
        'System responsiveness & multimedia scheduler tweaks',
        'Network throttling elimination & TCP optimization',
        'Mouse input polling & cursor smoothness calibration',
        'Safe registry backup provided before any modifications',
      ],
      games: 'Competitive FPS · Fast Battle Royales · High-APM Titles',
    },
    {
      id: 'pc-optimization',
      tag: '03 // SYSTEM PERFORMANCE',
      title: 'Full Windows PC Optimization',
      badge: 'High FPS & Smoothness',
      icon: Gauge,
      description:
        'Deep clean of background bloatware, telemetry disabling, custom power plan calibration, GPU driver optimization, and Windows service streamlining for peak performance.',
      features: [
        'Unnecessary background tasks & telemetry removal',
        'Custom high-performance power scheme configuration',
        'GPU driver latency & shader cache optimization',
        'Reduced 1% and 0.1% low frame drops for buttery fluidity',
      ],
      games: 'All Competitive Online Games & Emulators',
    },
  ];

  return (
    <section id="gaming-tuning" aria-label="Gaming Tuning and PC Optimization" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#09150E] border border-[#1A472A] text-xs font-mono text-[#34D399] font-bold mb-3 shadow-xs">
            <span>05 // TUNING</span>
          </div>
          <h2 className="font-space font-black text-3xl sm:text-4xl md:text-5xl text-[#0D2318] tracking-tight mb-2">
            Paid Sensi, Regedit & PC Optimization
          </h2>
          <p className="font-mono text-sm sm:text-base text-[#1E4A2E] font-bold max-w-2xl">
            DM me for paid custom sensi, regedit tuning, and full PC optimization to make your PC smooth and achieve higher FPS in competitive online games.
          </p>
          <div className="w-20 h-1 bg-[#059669] rounded-full mt-4" />
        </div>

        {/* 3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-10">
          {tuningServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                onMouseEnter={() => sfx.playHover()}
                className="group p-6 rounded-2xl bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#059669] transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between cursor-default"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#09150E] border border-[#1A472A] flex items-center justify-center text-[#34D399] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#D1FAE5] text-[#065F38] border border-[#A7F3D0]">
                      {service.badge}
                    </span>
                  </div>

                  <div className="font-mono text-[10px] text-[#065F38] font-bold uppercase tracking-wider mb-1">
                    {service.tag}
                  </div>

                  <h3 className="font-space font-black text-xl text-[#0D2318] group-hover:text-[#065F38] transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#2B543D] leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#1D3B2C] font-medium">
                        <Check className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#B4D5BF] font-mono text-[10px] text-[#4F7D63] font-bold">
                  TARGET: {service.games}
                </div>
              </div>
            );
          })}
        </div>

        {/* DM CTA Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#09150E] border-2 border-[#1D472D] text-[#F4FAF6] shadow-xl text-left flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#0F2D1D] border border-[#2D6A47] text-xs font-mono text-[#34D399] font-bold">
              <Zap className="w-3.5 h-3.5 text-[#10B981]" />
              <span>DIRECT BOOKING · FAST TURNAROUND</span>
            </div>
            <h3 className="font-space font-black text-xl sm:text-2xl text-[#F4FAF6]">
              Ready for buttery smooth frame times & precise aim?
            </h3>
            <p className="text-xs sm:text-sm text-[#84C29B] font-mono font-bold max-w-xl">
              Student-friendly rates. DM your PC specs and target games on Instagram or Facebook to get started immediately.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <a
              href="https://instagram.com/bilish13226"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sfx.playClick()}
              onMouseEnter={() => sfx.playHover()}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#EDF5F0] hover:bg-[#DEEFE5] text-xs font-mono font-bold text-[#0D2318] shadow-md transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>DM on Instagram</span>
            </a>

            <a
              href="https://www.facebook.com/bilishsayaju00#"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sfx.playClick()}
              onMouseEnter={() => sfx.playHover()}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1877F2] hover:bg-[#166FE5] text-xs font-mono font-bold text-white shadow-md transition-colors"
            >
              <FacebookIcon className="w-4 h-4 text-white" />
              <span>DM on Facebook</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
