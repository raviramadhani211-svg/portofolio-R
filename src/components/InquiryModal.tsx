import { useState, useEffect } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Web Platform / Fullstack');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose();
      }}
    >
      <div className="bg-white border-[1.5px] border-ink rounded-2xl max-w-lg w-full shadow-[8px_8px_0px_#24473C] overflow-hidden">
        {/* Header */}
        <div className="bg-studio-deep text-white px-6 py-5 flex items-center justify-between">
          <div>
            <span className="font-mono text-[10px] tracking-widest uppercase text-emerald-300 block">
              DIRECT DISPATCH // {PROFILE.shortName.toUpperCase()}
            </span>
            <h3 id="inquiry-modal-title" className="font-display text-xl sm:text-2xl mt-0.5">
              SEND AN INQUIRY
            </h3>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            aria-label="Close inquiry modal"
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-mint-highlight text-studio-deep flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-display text-2xl text-ink">DISPATCH LOGGED</h4>
            <p className="font-archivo text-sm text-gray-600 leading-relaxed">
              Thanks, <strong className="text-ink">{name}</strong>. Your brief regarding{' '}
              <span className="font-mono text-studio-mid font-semibold">{topic}</span> is ready.
              You can also reach me directly at{' '}
              <a
                href={`mailto:${PROFILE.email}?subject=${encodeURIComponent(`[Portfolio] ${topic} — ${name}`)}&body=${encodeURIComponent(message)}`}
                className="underline font-mono text-ink"
              >
                {PROFILE.email}
              </a>
              .
            </p>
            <button
              type="button"
              onClick={handleResetAndClose}
              className="mt-2 px-6 py-2.5 bg-studio-deep text-white rounded-lg font-mono text-xs font-bold uppercase tracking-wider hover:bg-studio-mid transition cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="inq-name"
                  className="block font-mono text-[11px] font-bold uppercase tracking-wider text-ink mb-1.5"
                >
                  Your Name
                </label>
                <input
                  id="inq-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Pratama"
                  className="w-full bg-[#F5F5F2] border-[1.5px] border-ink rounded-lg px-3.5 py-2.5 text-sm font-archivo text-ink focus:outline-none focus:shadow-[3px_3px_0px_#3C6A5B] transition-shadow"
                />
              </div>
              <div>
                <label
                  htmlFor="inq-email"
                  className="block font-mono text-[11px] font-bold uppercase tracking-wider text-ink mb-1.5"
                >
                  Email Address
                </label>
                <input
                  id="inq-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@domain.com"
                  className="w-full bg-[#F5F5F2] border-[1.5px] border-ink rounded-lg px-3.5 py-2.5 text-sm font-archivo text-ink focus:outline-none focus:shadow-[3px_3px_0px_#3C6A5B] transition-shadow"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="inq-topic"
                className="block font-mono text-[11px] font-bold uppercase tracking-wider text-ink mb-1.5"
              >
                Project Scope
              </label>
              <select
                id="inq-topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full bg-[#F5F5F2] border-[1.5px] border-ink rounded-lg px-3.5 py-2.5 text-sm font-mono text-ink focus:outline-none focus:shadow-[3px_3px_0px_#3C6A5B] transition-shadow"
              >
                <option value="Web Platform / Fullstack">Web Platform / Fullstack</option>
                <option value="Python & Computer Vision">Python &amp; Computer Vision</option>
                <option value="Data Analysis & 3D Interactive">Data Analysis &amp; 3D Interactive</option>
                <option value="Campus / Community Collaboration">
                  Campus / Community Collaboration
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="inq-message"
                className="block font-mono text-[11px] font-bold uppercase tracking-wider text-ink mb-1.5"
              >
                Brief / Message
              </label>
              <textarea
                id="inq-message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me what we're building together..."
                className="w-full bg-[#F5F5F2] border-[1.5px] border-ink rounded-lg px-3.5 py-2.5 text-sm font-archivo text-ink focus:outline-none focus:shadow-[3px_3px_0px_#3C6A5B] transition-shadow resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="font-mono text-[11px] text-studio-mid hover:underline"
              >
                Or open email client ↗
              </a>
              <button
                type="submit"
                className="px-5 py-2.5 bg-white text-ink border-[1.5px] border-ink rounded-lg font-mono text-xs font-bold uppercase tracking-wider shadow-[4px_4px_0px_#24473C] hover:bg-mint-highlight transition flex items-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
