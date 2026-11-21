import { useState } from 'react';
import { Copy, Check, Mail, Send } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface ContactFooterProps {
  onOpenInquiry: () => void;
}

export function ContactFooter({ onOpenInquiry }: ContactFooterProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback copy via textarea if clipboard API is restricted
      const textarea = document.createElement('textarea');
      textarea.value = PROFILE.email;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2400);
      } finally {
        document.body.removeChild(textarea);
      }
    }
  };

  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-studio-mid to-studio-deep text-white pt-24 pb-12 px-4 sm:px-8 relative overflow-hidden"
    >
      {/* Background script watermark */}
      <div className="absolute bottom-0 right-0 select-none pointer-events-none opacity-5">
        <span className="font-display text-[25vw] leading-none">RAPH</span>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Index Header */}
        <div className="flex items-center gap-3 font-mono text-xs text-emerald-300 font-bold tracking-widest uppercase mb-4">
          <span>05 // DIRECT LINE</span>
          <div className="h-px bg-white/20 flex-1" />
        </div>

        {/* Main Headline & Inquiry Pitch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-20 border-b border-white/15">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="font-display text-4xl sm:text-6xl text-white tracking-tight leading-tight">
              LET&apos;S BUILD <br />
              <span className="font-script text-5xl sm:text-7xl text-emerald-300 font-normal">
                something real.
              </span>
            </h2>
            <p className="font-archivo text-base sm:text-lg text-emerald-100/90 max-w-xl leading-relaxed">
              Whether you have a Python or Computer Vision challenge, an organizational platform
              build, or an ambitious creative web project — my inbox is perpetually open.
            </p>
          </div>

          {/* Primary Action Box */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <a
              href={`mailto:${PROFILE.email}`}
              className="bg-white text-ink hover:bg-emerald-100 p-4 rounded-xl font-mono text-xs sm:text-sm font-bold text-center tracking-wide transition shadow-2xl flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 shrink-0" />
              <span className="truncate">{PROFILE.email.toUpperCase()}</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className={`p-3 rounded-xl font-mono text-xs font-semibold tracking-wider uppercase transition flex items-center justify-center gap-2 cursor-pointer border ${
                copied
                  ? 'bg-emerald-400 text-ink border-transparent'
                  : 'bg-white/10 hover:bg-white/20 border-white/30 text-white'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'COPIED TO CLIPBOARD!' : 'COPY EMAIL ADDRESS'}</span>
            </button>

            <button
              type="button"
              onClick={onOpenInquiry}
              className="bg-black/25 hover:bg-black/40 border border-white/20 text-emerald-200 p-3 rounded-xl font-mono text-xs font-semibold tracking-wider uppercase transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>OPEN INQUIRY FORM</span>
            </button>
          </div>
        </div>

        {/* Social & Professional Grid Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-12 border-b border-white/10 font-mono text-xs">
          <a
            href={PROFILE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-between group transition"
          >
            <span>INSTAGRAM</span>
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              ↗
            </span>
          </a>
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-between group transition"
          >
            <span>GITHUB</span>
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              ↗
            </span>
          </a>
          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-between group transition"
          >
            <span>LINKEDIN</span>
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              ↗
            </span>
          </a>
          <a
            href="#hero"
            className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-between group transition"
          >
            <span>BACK TO TOP</span>
            <span className="group-hover:-translate-y-1 transition-transform">↑</span>
          </a>
        </div>

        {/* Bottom Metadata Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-emerald-200/60 gap-4">
          <div>© 2026 RAVI RAMADHANI (RAPH) // ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-4">
            <span>EST. BIAK // CURRENT: JAKARTA</span>
            <span>•</span>
            <span>90s RETRO-OFFICE AESTHETIC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
