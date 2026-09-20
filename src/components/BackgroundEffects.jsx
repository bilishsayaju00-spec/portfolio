import React, { useEffect, useRef, useState } from 'react';

export default function BackgroundEffects() {
  const canvasRef = useRef(null);
  const [scrollDepth, setScrollDepth] = useState(0);

  // Track global scroll depth percentage for HUD telemetry
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollDepth(scrollHeight > 0 ? Math.min(Math.round((currentScroll / scrollHeight) * 100), 100) : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Canvas particle network & floating cyber tokens
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleResize = () => {
      if (canvas) {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
    };
    window.addEventListener('resize', handleResize);

    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    const handleScrollVel = () => {
      const currentY = window.scrollY;
      scrollVelocity = (currentY - lastScrollY) * 0.4;
      lastScrollY = currentY;
    };
    window.addEventListener('scroll', handleScrollVel, { passive: true });

    // Floating cyber data stream text
    const cyberTokens = ['01', '0x42', 'SYS_OK', 'ETH_0', 'PORT::3000', 'BKT_NEPAL', 'CE::2026', 'x86_64', 'ACK'];
    const textNodes = [];
    for (let i = 0; i < 14; i++) {
      textNodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        text: cyberTokens[Math.floor(Math.random() * cyberTokens.length)],
        speed: 0.15 + Math.random() * 0.25,
        alpha: 0.12 + Math.random() * 0.2,
      });
    }

    // Dynamic interactive particle network
    const particleCount = Math.min(Math.floor((width * height) / 24000), 55);
    const particles = [];
    const colors = ['#059669', '#10B981', '#0D9488', '#0284C7', '#34D399'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.8 + 0.9,
        alpha: Math.random() * 0.45 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: 0.02 + Math.random() * 0.03,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let frameCount = 0;
    const render = () => {
      frameCount++;
      ctx.clearRect(0, 0, width, height);
      scrollVelocity *= 0.92;

      // Draw floating cyber code words
      ctx.font = '10px "JetBrains Mono", monospace';
      for (const node of textNodes) {
        if (!prefersReducedMotion) {
          node.y -= node.speed + scrollVelocity * 0.2;
          if (node.y < -20) {
            node.y = height + 20;
            node.x = Math.random() * width;
          } else if (node.y > height + 20) {
            node.y = -20;
            node.x = Math.random() * width;
          }
        }
        ctx.fillStyle = '#065F38';
        ctx.globalAlpha = node.alpha;
        ctx.fillText(node.text, node.x, node.y);
      }

      // Draw particles & connecting lines
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy - scrollVelocity * 0.3;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        const currentAlpha = p.alpha + Math.sin(frameCount * p.pulseSpeed) * 0.1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(currentAlpha, 0.7));
        ctx.fill();

        // Connect to mouse cursor if within 160px
        const dxMouse = p.x - mouseX;
        const dyMouse = p.y - mouseY;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 160) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = '#059669';
          ctx.globalAlpha = (1 - distMouse / 160) * 0.35;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Connect particles to each other if within 130px
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#059669';
            ctx.globalAlpha = (1 - dist / 130) * 0.22;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScrollVel);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <div id="background-effects" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Cyber Cross Matrix Pattern */}
      <div className="absolute inset-0 cyber-cross-bg opacity-55" />

      {/* Floating Ambient Light Glow Orbs */}
      <div
        className="absolute w-[460px] h-[460px] rounded-full pointer-events-none transition-transform duration-75 ease-out -top-40 -left-40 blur-[150px]"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(5, 150, 105, 0.03) 50%, transparent 70%)',
          transform: `translateY(${scrollDepth * 4}px)`,
        }}
      />
      <div
        className="absolute w-[620px] h-[620px] rounded-full pointer-events-none transition-transform duration-75 ease-out top-1/4 -right-40 blur-[160px]"
        style={{
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.10) 0%, rgba(5, 150, 105, 0.03) 50%, transparent 70%)',
          transform: `translateY(-${scrollDepth * 3}px)`,
        }}
      />
      <div
        className="absolute w-[680px] h-[680px] rounded-full pointer-events-none transition-transform duration-75 ease-out top-2/3 -left-40 blur-[160px]"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.10) 0%, rgba(5, 150, 105, 0.02) 50%, transparent 70%)',
          transform: `translateY(${scrollDepth * 2}px)`,
        }}
      />

      {/* Top & Bottom Telemetry HUD Corner Stamps */}
      <div className="absolute top-20 left-4 font-mono text-[10px] text-[#065F38]/35 select-none tracking-widest hidden xl:block font-bold">
        [SYS::NP_BKT] 27.67°N 85.42°E // MEM_0x42
      </div>
      <div className="absolute top-24 right-8 font-mono text-[10px] text-[#065F38]/35 select-none tracking-widest hidden xl:block font-bold">
        GRID_SCALE::36PX // LIGHT_CYBER_MATRIX
      </div>
      <div className="absolute bottom-6 left-6 font-mono text-[10px] text-[#065F38]/35 select-none tracking-widest hidden xl:block font-bold">
        SCROLL_DEPTH::{scrollDepth.toString().padStart(2, '0')}% // SECTOR_ACTIVE
      </div>

      {/* Interactive Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
