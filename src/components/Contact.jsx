import React, { useState, useEffect } from 'react';
import { Send, Check, Copy, Clock, MapPin, Sparkles, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { sfx } from '../utils/sfx';

// Vector Brand Icons
const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <radialGradient id="ig-grad-contact" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#ig-grad-contact)" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" stroke="url(#ig-grad-contact)" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="url(#ig-grad-contact)" />
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

const GmailIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6z" opacity="0.1" />
    <path fill="#EA4335" d="M20 4H4C2.9 4 2 4.9 2 6l10 6.5L22 6c0-1.1-.9-2-2-2z" />
    <path fill="#4285F4" d="M2 6v12c0 1.1.9 2 2 2h3.5V11.5L2 6z" />
    <path fill="#34A853" d="M22 6v12c0 1.1-.9 2-2 2h-3.5V11.5L22 6z" />
    <path fill="#FBBC05" d="M7.5 20h9V11.5L12 14.5 7.5 11.5V20z" />
  </svg>
);

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [nepalTime, setNepalTime] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  // Real-time Nepal Clock (UTC+5:45)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const npt = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kathmandu',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(now);
      setNepalTime(npt);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    sfx.playClick();
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sfx.playSuccess();
    setStatus('sent');
    setTimeout(() => {
      setStatus(null);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" aria-label="Contact Transmission" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#09150E] border border-[#1A472A] text-xs font-mono text-[#34D399] font-bold mb-3 shadow-xs">
            <span>06 // TRANSMIT</span>
          </div>
          <h2 className="font-space font-black text-3xl sm:text-4xl md:text-5xl text-[#0D2318] tracking-tight">
            Let's Build Something Meaningful
          </h2>
          <div className="w-20 h-1 bg-[#059669] rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Left: Contact Channels & Location (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div
              onMouseEnter={() => sfx.playHover()}
              className="p-5 sm:p-6 rounded-2xl bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#059669] transition-all duration-200 shadow-2xs flex flex-col justify-between"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#09150E] border border-[#1A472A] flex items-center justify-center shadow-xs">
                  <GmailIcon className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-lg bg-[#DCECE1] border border-[#B4D5BF] hover:border-[#059669] text-xs font-mono font-bold text-[#0D2318] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#059669]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="font-mono text-xs text-[#065F38] font-bold uppercase tracking-wider mb-1">
                // DIRECT_GMAIL
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="font-space font-bold text-base sm:text-lg text-[#0D2318] hover:text-[#059669] transition-colors break-all"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Social Grid: Instagram & Facebook */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Instagram Card */}
              <a
                href="https://instagram.com/bilish13226"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sfx.playClick()}
                onMouseEnter={() => sfx.playHover()}
                className="group p-5 rounded-2xl bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#059669] transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between"
              >
                <div className="w-10 h-10 rounded-xl bg-[#09150E] border border-[#1A472A] flex items-center justify-center mb-3">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div className="font-mono text-[10px] text-[#065F38] font-bold uppercase tracking-wider">
                  INSTAGRAM
                </div>
                <div className="font-space font-bold text-sm text-[#0D2318] group-hover:text-[#059669] transition-colors">
                  @bilish13226
                </div>
              </a>

              {/* Facebook Card */}
              <a
                href="https://www.facebook.com/bilishsayaju00#"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sfx.playClick()}
                onMouseEnter={() => sfx.playHover()}
                className="group p-5 rounded-2xl bg-[#EDF5F0] border border-[#B4D5BF] hover:border-[#059669] transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between"
              >
                <div className="w-10 h-10 rounded-xl bg-[#09150E] border border-[#1A472A] flex items-center justify-center mb-3">
                  <FacebookIcon className="w-5 h-5" />
                </div>
                <div className="font-mono text-[10px] text-[#065F38] font-bold uppercase tracking-wider">
                  FACEBOOK
                </div>
                <div className="font-space font-bold text-sm text-[#0D2318] group-hover:text-[#059669] transition-colors">
                  Bilish Sayaju
                </div>
              </a>
            </div>

            {/* Nepal Clock & Coordinates */}
            <div className="p-5 rounded-2xl bg-[#EDF5F0] border border-[#B4D5BF] shadow-2xs flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2 text-[#2B543D] font-bold">
                <Clock className="w-4 h-4 text-[#059669]" />
                <span>NPT (UTC+5:45):</span>
              </div>
              <span className="font-bold text-[#0D2318] bg-[#DCECE1] px-2.5 py-1 rounded border border-[#B4D5BF]">
                {nepalTime || 'Loading...'}
              </span>
            </div>

          </div>

          {/* Right: Interactive Message Transmission Terminal (7 cols) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-[#EDF5F0] border border-[#B4D5BF] shadow-xs space-y-4"
            >
              <div className="font-mono text-xs text-[#065F38] font-bold uppercase tracking-wider pb-2 border-b border-[#B4D5BF] flex items-center justify-between">
                <span>// TRANSMISSION_TERMINAL</span>
                <span className="text-[#059669]">PROTOCOL::ONLINE</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block font-mono text-xs text-[#2B543D] font-bold mb-1.5">
                    IDENTIFIER (NAME):
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Mercer"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4FAF6] border border-[#B4D5BF] focus:border-[#059669] focus:outline-none font-mono text-xs text-[#0D2318] transition-colors placeholder-[#527F67]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block font-mono text-xs text-[#2B543D] font-bold mb-1.5">
                    RETURN ADDRESS (EMAIL):
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@domain.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4FAF6] border border-[#B4D5BF] focus:border-[#059669] focus:outline-none font-mono text-xs text-[#0D2318] transition-colors placeholder-[#527F67]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block font-mono text-xs text-[#2B543D] font-bold mb-1.5">
                  TRANSMISSION SUBJECT:
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="PC Optimization / Project Inquiry / Engineering Connect"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4FAF6] border border-[#B4D5BF] focus:border-[#059669] focus:outline-none font-mono text-xs text-[#0D2318] transition-colors placeholder-[#527F67]"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block font-mono text-xs text-[#2B543D] font-bold mb-1.5">
                  PAYLOAD MESSAGE:
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your transmission message here..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4FAF6] border border-[#B4D5BF] focus:border-[#059669] focus:outline-none font-mono text-xs text-[#0D2318] transition-colors placeholder-[#527F67] resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#4F7D63] font-bold">
                  ENCRYPTION: 256-BIT // DISPATCH_READY
                </span>

                <button
                  id="contact-submit-button"
                  type="submit"
                  onMouseEnter={() => sfx.playHover()}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#08150D] hover:bg-[#059669] text-xs font-mono font-bold text-[#F4FAF6] shadow-md transition-colors cursor-pointer"
                >
                  {status === 'sent' ? (
                    <>
                      <Check className="w-4 h-4 text-[#34D399]" />
                      <span>Transmitted!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#34D399]" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
