import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Cpu, Sliders, Volume2, Copy, Check, Terminal } from 'lucide-react';
import { sfx } from '../utils/sfx';

export default function TheLab({ onOpenCLI }) {
  // Playground 1: Gradient Matrix Mixer
  const [gradAngle, setGradAngle] = useState(135);
  const [color1, setColor1] = useState('#059669');
  const [color2, setColor2] = useState('#0284C7');
  const [copiedGrad, setCopiedGrad] = useState(false);

  // Playground 2: Logic Gates Simulator
  const [gateType, setGateType] = useState('AND');
  const [inputA, setInputA] = useState(true);
  const [inputB, setInputB] = useState(false);

  const getGateOutput = () => {
    switch (gateType) {
      case 'AND':
        return inputA && inputB;
      case 'OR':
        return inputA || inputB;
      case 'XOR':
        return inputA !== inputB;
      case 'NOT':
        return !inputA;
      case 'NAND':
        return !(inputA && inputB);
      default:
        return false;
    }
  };

  // Playground 3: Audio Tone Synthesizer
  const [frequency, setFrequency] = useState(440);
  const [waveType, setWaveType] = useState('sine');
  const [isPlayingTone, setIsPlayingTone] = useState(false);

  const playCustomTone = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = waveType;
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);

      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.6);
      setIsPlayingTone(true);
      setTimeout(() => setIsPlayingTone(false), 600);
    } catch (e) {
      console.error(e);
    }
  };

  // Playground 4: Particle Matrix Canvas
  const miniCanvasRef = useRef(null);
  const [particleDensity, setParticleDensity] = useState(25);

  useEffect(() => {
    const canvas = miniCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    const w = (canvas.width = canvas.parentElement.clientWidth || 300);
    const h = (canvas.height = 140);

    const pts = [];
    for (let i = 0; i < particleDensity; i++) {
      pts.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#059669';
        ctx.fill();

        for (let j = i + 1; j < pts.length; j++) {
          const p2 = pts[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 55) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(5, 150, 105, ${1 - dist / 55})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => cancelAnimationFrame(animId);
  }, [particleDensity]);

  const copyGradientCSS = () => {
    sfx.playClick();
    const css = `background: linear-gradient(${gradAngle}deg, ${color1}, ${color2});`;
    navigator.clipboard.writeText(css);
    setCopiedGrad(true);
    setTimeout(() => setCopiedGrad(false), 2000);
  };

  return (
    <section id="lab" aria-label="Interactive Engineering Lab" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#09150E] border border-[#1A472A] text-xs font-mono text-[#34D399] font-bold mb-3 shadow-xs">
            <span>04 // LAB</span>
          </div>
          <h2 className="font-space font-black text-3xl sm:text-4xl md:text-5xl text-[#0D2318] tracking-tight">
            Engineering Lab & Playgrounds
          </h2>
          <div className="w-20 h-1 bg-[#059669] rounded-full mt-3" />
        </div>

        {/* 4 Playgrounds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          
          {/* Card 1: Gradient Matrix Mixer */}
          <div
            id="lab-card-gradient"
            onMouseEnter={() => sfx.playHover()}
            className="p-6 rounded-2xl bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#059669] transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#065F38] font-bold uppercase tracking-wider">
                  // GRADIENT_MIXER
                </span>
                <button
                  type="button"
                  onClick={copyGradientCSS}
                  className="px-2.5 py-1 rounded bg-[#DCECE1] border border-[#B4D5BF] hover:border-[#059669] text-xs font-mono font-bold text-[#0D2318] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedGrad ? <Check className="w-3.5 h-3.5 text-[#059669]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedGrad ? 'Copied' : 'CSS'}</span>
                </button>
              </div>

              {/* Gradient Preview Window */}
              <div
                className="w-full h-28 rounded-xl border border-[#B4D5BF] shadow-inner mb-4 transition-all duration-150 flex items-end p-2.5"
                style={{
                  background: `linear-gradient(${gradAngle}deg, ${color1}, ${color2})`,
                }}
              >
                <span className="font-mono text-[10px] text-white/90 bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                  {gradAngle}° · {color1} → {color2}
                </span>
              </div>

              {/* Controls */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <label htmlFor="lab-gradient-angle" className="text-[#2B543D] font-bold">Angle ({gradAngle}°):</label>
                  <input
                    id="lab-gradient-angle"
                    type="range"
                    min="0"
                    max="360"
                    value={gradAngle}
                    onChange={(e) => setGradAngle(Number(e.target.value))}
                    className="w-36 accent-[#059669]"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label htmlFor="lab-gradient-color-a" className="text-[#2B543D] font-bold">Color A:</label>
                  <input
                    id="lab-gradient-color-a"
                    type="color"
                    value={color1}
                    onChange={(e) => setColor1(e.target.value)}
                    className="w-10 h-7 rounded border border-[#B4D5BF] bg-transparent cursor-pointer"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label htmlFor="lab-gradient-color-b" className="text-[#2B543D] font-bold">Color B:</label>
                  <input
                    id="lab-gradient-color-b"
                    type="color"
                    value={color2}
                    onChange={(e) => setColor2(e.target.value)}
                    className="w-10 h-7 rounded border border-[#B4D5BF] bg-transparent cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#B4D5BF] font-mono text-[10px] text-[#4F7D63] font-bold">
              REAL_TIME_CSS_OUTPUT
            </div>
          </div>

          {/* Card 2: Logic Gates Simulator */}
          <div
            id="lab-card-logic"
            onMouseEnter={() => sfx.playHover()}
            className="p-6 rounded-2xl bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#059669] transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#065F38] font-bold uppercase tracking-wider">
                  // LOGIC_GATES_SIM
                </span>
                <span className="font-mono text-xs font-black text-[#059669] px-2 py-0.5 rounded bg-[#DCECE1] border border-[#B4D5BF]">
                  OUT: {getGateOutput() ? '1 (TRUE)' : '0 (FALSE)'}
                </span>
              </div>

              {/* Gate Visual Circuit */}
              <div className="w-full h-28 rounded-xl bg-[#09150E] border border-[#1A472A] p-3 font-mono flex items-center justify-around shadow-inner mb-4">
                <div className="flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      sfx.playClick();
                      setInputA(!inputA);
                    }}
                    className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
                      inputA
                        ? 'bg-[#10B981] text-[#050F07]'
                        : 'bg-[#1D472D] text-[#84C29B]'
                    }`}
                  >
                    A: {inputA ? '1' : '0'}
                  </button>
                  {gateType !== 'NOT' && (
                    <button
                      type="button"
                      onClick={() => {
                        sfx.playClick();
                        setInputB(!inputB);
                      }}
                      className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
                        inputB
                          ? 'bg-[#10B981] text-[#050F07]'
                          : 'bg-[#1D472D] text-[#84C29B]'
                      }`}
                    >
                      B: {inputB ? '1' : '0'}
                    </button>
                  )}
                </div>

                <div className="w-14 h-12 rounded-lg bg-[#0F2D1D] border border-[#2D6A47] flex items-center justify-center font-bold text-sm text-[#34D399]">
                  {gateType}
                </div>

                <div
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all ${
                    getGateOutput()
                      ? 'bg-[#10B981] border-[#34D399] text-[#050F07] shadow-[0_0_12px_#10B981]'
                      : 'bg-[#1A4528] border-[#2D6A47] text-[#84C29B]'
                  }`}
                >
                  {getGateOutput() ? '1' : '0'}
                </div>
              </div>

              {/* Gate Selectors */}
              <div className="flex flex-wrap gap-1.5">
                {['AND', 'OR', 'XOR', 'NOT', 'NAND'].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => {
                      sfx.playClick();
                      setGateType(g);
                    }}
                    className={`px-3 py-1 rounded-lg font-mono text-xs font-bold transition-colors cursor-pointer ${
                      gateType === g
                        ? 'bg-[#08150D] text-[#F4FAF6] border border-[#1A472A]'
                        : 'bg-[#DCECE1] text-[#2B543D] border border-[#B4D5BF] hover:border-[#059669]'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#B4D5BF] font-mono text-[10px] text-[#4F7D63] font-bold">
              BOOLEAN_LOGIC_CIRCUIT
            </div>
          </div>

          {/* Card 3: Particle Matrix Network */}
          <div
            id="lab-card-particles"
            onMouseEnter={() => sfx.playHover()}
            className="p-6 rounded-2xl bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#059669] transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#065F38] font-bold uppercase tracking-wider">
                  // PARTICLE_MATRIX
                </span>
                <span className="font-mono text-xs text-[#4F7D63] font-bold">
                  {particleDensity} Nodes
                </span>
              </div>

              {/* Mini Particle Canvas */}
              <div className="w-full h-28 rounded-xl bg-[#09150E] border border-[#1A472A] overflow-hidden shadow-inner mb-4 relative">
                <canvas ref={miniCanvasRef} className="w-full h-full" />
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <label htmlFor="lab-particle-density" className="text-[#2B543D] font-bold">Density ({particleDensity}):</label>
                  <input
                    id="lab-particle-density"
                    type="range"
                    min="10"
                    max="50"
                    value={particleDensity}
                    onChange={(e) => setParticleDensity(Number(e.target.value))}
                    className="w-36 accent-[#059669]"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#B4D5BF] font-mono text-[10px] text-[#4F7D63] font-bold">
              PHYSICS_MESH_SIMULATION
            </div>
          </div>

          {/* Card 4: Web Audio Synthesizer */}
          <div
            id="lab-card-typewriter"
            onMouseEnter={() => sfx.playHover()}
            className="p-6 rounded-2xl bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#059669] transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#065F38] font-bold uppercase tracking-wider">
                  // SOUND_SYNTHESIZER
                </span>
                <span className="font-mono text-xs font-bold text-[#059669]">
                  {frequency} Hz ({waveType})
                </span>
              </div>

              {/* Synth Action Box */}
              <div className="w-full h-28 rounded-xl bg-[#09150E] border border-[#1A472A] p-3 font-mono flex flex-col items-center justify-center gap-2 shadow-inner mb-4">
                <button
                  type="button"
                  onClick={playCustomTone}
                  className={`px-5 py-2 rounded-xl font-mono text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                    isPlayingTone
                      ? 'bg-[#10B981] text-[#050F07] shadow-[0_0_12px_#10B981]'
                      : 'bg-[#0F2D1D] hover:bg-[#153D28] text-[#34D399] border border-[#2D6A47]'
                  }`}
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Synthesize Frequency</span>
                </button>
              </div>

              {/* Controls */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <label htmlFor="lab-synth-frequency" className="text-[#2B543D] font-bold">Pitch ({frequency}Hz):</label>
                  <input
                    id="lab-synth-frequency"
                    type="range"
                    min="150"
                    max="1200"
                    value={frequency}
                    onChange={(e) => setFrequency(Number(e.target.value))}
                    className="w-36 accent-[#059669]"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#2B543D] font-bold">Waveform:</span>
                  <div className="flex gap-1">
                    {['sine', 'triangle', 'sawtooth', 'square'].map((w) => (
                      <button
                        key={w}
                        type="button"
                        onClick={() => setWaveType(w)}
                        className={`px-2 py-0.5 rounded text-[10px] font-bold capitalize transition-colors ${
                          waveType === w
                            ? 'bg-[#08150D] text-[#F4FAF6]'
                            : 'bg-[#DCECE1] text-[#2B543D]'
                        }`}
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#B4D5BF] font-mono text-[10px] text-[#4F7D63] font-bold">
              WEB_AUDIO_API_ENGINE
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
