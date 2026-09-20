import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, Maximize2, Minimize2 } from 'lucide-react';
import { cliCommands, personalInfo } from '../data/portfolioData';
import { sfx } from '../utils/sfx';

export default function CyberCLI({ isOpen, onClose }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: `BILISH SHELL [v2.6.0 - Bhaktapur, Nepal]
BE Computer / Computer Engineering Student
Type 'help' to see all available commands or 'services' for PC optimization.`
    }
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyPointer, setHistoryPointer] = useState(-1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const inputRef = useRef(null);
  const terminalBottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (terminalBottomRef.current) {
      terminalBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        sfx.playClick();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCommand = (rawCmd) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    sfx.playClick();
    const cmd = trimmed.toLowerCase();

    setCommandHistory(prev => [...prev, rawCmd]);
    setHistoryPointer(-1);

    const newEntry = { type: 'user', text: `bilish@portfolio:~$ ${rawCmd}` };

    if (cmd === 'clear' || cmd === 'cls') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (cmd === 'exit' || cmd === 'quit') {
      onClose();
      return;
    }

    if (cmd === 'date' || cmd === 'time') {
      const now = new Date();
      const nepalTime = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kathmandu' });
      const nepalDate = now.toLocaleDateString('en-US', { timeZone: 'Asia/Kathmandu', dateStyle: 'full' });
      const output = {
        type: 'response',
        text: `Local Time (Bhaktapur, Nepal - UTC+5:45):\n${nepalDate} - ${nepalTime}`
      };
      setHistory(prev => [...prev, newEntry, output]);
      setInputVal('');
      return;
    }

    if (cmd === 'neofetch' || cmd === 'sysinfo') {
      const neofetchOutput = `
       .---.            bilish@nepal-computer-engineering
      /     \\           ----------------------------------
     | () () |          Student: Bilish Sayaju (BE Computer)
      \\  _  /           Location: Bhaktapur, Nepal [27.6710° N, 85.4298° E]
       \`---\`            Interests: Web Dev • Design • AI Video • Cybersecurity
      /     \\           Services: PC Optimization, Regedit & Sensi Tuning
     |       |          Status: Active First-Year Student 🚀
      `;
      setHistory(prev => [...prev, newEntry, { type: 'response', text: neofetchOutput }]);
      setInputVal('');
      return;
    }

    if (cliCommands[cmd]) {
      setHistory(prev => [...prev, newEntry, { type: 'response', text: cliCommands[cmd] }]);
    } else {
      setHistory(prev => [
        ...prev, 
        newEntry, 
        { 
          type: 'error', 
          text: `Command not found: ${trimmed}. Type 'help' to see recognized commands.` 
        }
      ]);
    }

    setInputVal('');
  };

  const handleKeyDown = (e) => {
    sfx.playTerminalKey();

    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextPointer = historyPointer === -1 ? commandHistory.length - 1 : Math.max(0, historyPointer - 1);
      setHistoryPointer(nextPointer);
      setInputVal(commandHistory[nextPointer] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyPointer === -1) return;
      const nextPointer = historyPointer + 1;
      if (nextPointer >= commandHistory.length) {
        setHistoryPointer(-1);
        setInputVal('');
      } else {
        setHistoryPointer(nextPointer);
        setInputVal(commandHistory[nextPointer]);
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const available = ['about', 'skills', 'services', 'projects', 'contact', 'social', 'clear', 'neofetch', 'date', 'help'];
      const match = available.find(c => c.startsWith(inputVal.trim().toLowerCase()));
      if (match) {
        setInputVal(match);
      }
    }
  };

  return (
    <div id="cyber-cli-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#08150D]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        onClick={() => {
          sfx.playClick();
          onClose();
        }}
        className="fixed inset-0" 
      />

      <div
        id="cyber-cli-window"
        className={`relative w-full rounded-2xl bg-[#09150E] text-[#F4FAF6] border-2 border-[#1A472A] shadow-2xl z-10 flex flex-col overflow-hidden transition-all duration-200 ${
          isFullscreen ? 'max-w-6xl h-[90vh]' : 'max-w-3xl h-[550px] max-h-[85vh]'
        }`}
      >
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#08150D] border-b border-[#1A4528] select-none">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => { sfx.playClick(); onClose(); }}
              className="w-3 h-3 rounded-full bg-[#EF4444] hover:opacity-80 inline-block cursor-pointer"
              title="Close"
            />
            <button
              onClick={() => { sfx.playClick(); setHistory([]); }}
              className="w-3 h-3 rounded-full bg-[#F59E0B] hover:opacity-80 inline-block cursor-pointer"
              title="Clear Buffer"
            />
            <button
              onClick={() => { sfx.playClick(); setIsFullscreen(!isFullscreen); }}
              className="w-3 h-3 rounded-full bg-[#10B981] hover:opacity-80 inline-block cursor-pointer"
              title="Fullscreen"
            />
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#E2F7EB] font-bold">
            <Terminal className="w-3.5 h-3.5 text-[#34D399]" />
            <span>bilish@portfolio: ~ (CLI)</span>
          </div>

          <div className="flex items-center gap-2 text-[#84C29B]">
            <button
              onClick={() => { sfx.playClick(); setIsFullscreen(!isFullscreen); }}
              className="p-1 hover:text-white cursor-pointer"
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => { sfx.playClick(); onClose(); }}
              className="p-1 hover:text-[#EF4444] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div 
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-4 sm:p-6 overflow-y-auto font-mono text-xs sm:text-sm text-[#E2F7EB] space-y-2.5 cursor-text bg-[#09150E]"
        >
          {history.map((item, idx) => (
            <div key={idx} className="whitespace-pre-wrap leading-relaxed">
              {item.type === 'user' && (
                <span className="text-[#34D399] font-bold">{item.text}</span>
              )}
              {item.type === 'system' && (
                <span className="text-[#84C29B] font-bold">{item.text}</span>
              )}
              {item.type === 'response' && (
                <span className="text-[#F4FAF6]">{item.text}</span>
              )}
              {item.type === 'error' && (
                <span className="text-[#F87171] font-semibold">{item.text}</span>
              )}
            </div>
          ))}

          {/* Active Command Input */}
          <div className="flex items-center gap-2 pt-1 font-mono">
            <span className="text-[#10B981] font-bold shrink-0">bilish@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-[#F4FAF6] font-mono text-xs sm:text-sm caret-[#34D399] p-0 focus:ring-0"
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </div>

          <div ref={terminalBottomRef} />
        </div>

        {/* Quick Shortcuts Bar */}
        <div className="px-4 py-2.5 bg-[#08150D] border-t border-[#1A4528] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#84C29B]">
          <div className="flex items-center gap-1.5">
            <span className="text-[#34D399] font-bold">Quick:</span>
            {['help', 'about', 'skills', 'services', 'projects', 'contact'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => {
                  setInputVal(cmd);
                  handleCommand(cmd);
                }}
                className="px-2 py-0.5 rounded bg-[#0F2D1D] hover:bg-[#153D28] text-[#E2F7EB] border border-[#2D6A47] transition-colors cursor-pointer"
              >
                {cmd}
              </button>
            ))}
          </div>
          <span className="text-[10px] text-[#4F7D63] font-bold">ESC to exit</span>
        </div>

      </div>
    </div>
  );
}
