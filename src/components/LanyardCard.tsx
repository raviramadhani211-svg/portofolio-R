import { useState, useRef, useEffect } from 'react';
import { RotateCw } from 'lucide-react';
import { HERO_SUBJECT_IMAGE_URL, PROFILE } from '../data/portfolioData';

interface LanyardCardProps {
  tiltAngle: number;
}

export function LanyardCard({ tiltAngle }: LanyardCardProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragAngle, setDragAngle] = useState(0);
  const [isReturning, setIsReturning] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [thumbError, setThumbError] = useState(false);
  const startXRef = useRef(0);

  useEffect(() => {
    if (!isDragging) return;

    const handlePointerMove = (e: PointerEvent) => {
      const deltaX = e.clientX - startXRef.current;
      const clamped = Math.max(Math.min(deltaX * 0.12, 18), -18);
      setDragAngle(clamped);
    };

    const handlePointerUp = () => {
      setIsDragging(false);
      setIsReturning(true);
      setDragAngle(0);
      const timer = window.setTimeout(() => {
        setIsReturning(false);
      }, 800);
      return () => window.clearTimeout(timer);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDragging]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('button, a')) return;
    setIsReturning(false);
    setIsDragging(true);
    startXRef.current = e.clientX;
  };

  const activeAngle = isDragging ? dragAngle : tiltAngle;

  return (
    <div
      id="lanyardWrapper"
      onPointerDown={handlePointerDown}
      style={{
        transform: `rotate(${activeAngle}deg)`,
        transition: isReturning
          ? 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          : isDragging
          ? 'none'
          : 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)',
      }}
      className={`lanyard-rig cursor-grab active:cursor-grabbing select-none touch-none ${
        isDragging ? 'is-dragging' : ''
      }`}
    >
      <div className="flex flex-col items-center">
        {/* Woven Lanyard Strap */}
        <div className="w-10 sm:w-12 h-36 sm:h-44 lanyard-texture shadow-inner border-x border-black/10 relative flex justify-center">
          <div className="w-[2px] h-full border-r border-dashed border-black/15" />
        </div>

        {/* Metallic Lobster Clasp & Swivel Hook */}
        <div className="flex flex-col items-center -mt-1 z-10">
          <div className="w-8 h-4 rounded-full border-2 border-gray-400 bg-gradient-to-b from-gray-200 to-gray-400 shadow-sm" />
          <div className="w-3 h-3 bg-gray-400 rounded-sm -mt-1 border border-gray-500 shadow-inner" />
          <div className="w-5 h-8 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400 rounded-md border border-gray-500 shadow-md relative flex items-center justify-center">
            <div className="w-1.5 h-4 bg-gray-600 rounded-full opacity-60" />
          </div>
          <div className="w-7 h-3 rounded-full border-2 border-gray-400 -mt-1.5" />
        </div>

        {/* Clear Vinyl Pass Pocket Sleeve */}
        <div className="relative w-64 sm:w-72 bg-white/85 backdrop-blur-md rounded-2xl p-3 border-2 border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.45)] mt-1 transition-transform duration-200 hover:scale-[1.02]">
          {/* Clear Punch Hole Slot */}
          <div className="w-full flex items-center justify-between mb-2 px-1">
            <span className="w-5" />
            <div className="w-14 h-2.5 rounded-full bg-emerald-950/25 border border-white/60" />
            <button
              type="button"
              onClick={() => setFlipped((f) => !f)}
              title={flipped ? 'Show pass front' : 'Flip pass to back'}
              aria-label={flipped ? 'Show pass front' : 'Flip pass to back'}
              className="w-6 h-6 rounded-full bg-emerald-950/10 hover:bg-emerald-950/20 text-emerald-950 flex items-center justify-center transition cursor-pointer"
            >
              <RotateCw className="w-3 h-3" />
            </button>
          </div>

          {!flipped ? (
            /* Front of ID Card */
            <div className="bg-white rounded-xl p-4 border border-gray-200/80 shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 badge-gloss pointer-events-none" />

              {/* Header Bar */}
              <div className="flex items-start justify-between border-b-2 border-black pb-2 mb-3">
                <div>
                  <h2 className="font-display text-xl sm:text-2xl tracking-tight leading-none text-ink">
                    DEVELOPER
                    <br />
                    CARD
                  </h2>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xs sm:text-sm font-black tracking-widest text-ink block tabular-nums">
                    2026
                  </span>
                  <span className="text-[9px] font-mono tracking-tighter uppercase px-1.5 py-0.5 bg-emerald-100 text-emerald-950 rounded font-semibold">
                    VALID // ACT
                  </span>
                </div>
              </div>

              {/* Role & Dept */}
              <div className="mb-3">
                <p className="font-mono text-[10px] tracking-wider uppercase font-bold text-gray-500">
                  {PROFILE.passRole}
                </p>
              </div>

              {/* Pass Photo Avatar & Core Specs */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-16 h-20 sm:w-20 sm:h-24 bg-gray-100 rounded border border-gray-300 overflow-hidden relative shadow-inner shrink-0 flex items-center justify-center">
                  {!thumbError ? (
                    <img
                      src={HERO_SUBJECT_IMAGE_URL}
                      alt="Raph ID Thumbnail"
                      referrerPolicy="no-referrer"
                      onError={() => setThumbError(true)}
                      className="w-full h-full object-cover object-top filter grayscale contrast-125"
                    />
                  ) : (
                    <div className="w-full h-full bg-studio-deep text-white flex flex-col items-center justify-center font-mono text-[10px]">
                      <span className="font-bold text-sm">RR</span>
                      <span className="opacity-70">2026</span>
                    </div>
                  )}
                  <div className="absolute bottom-0 inset-x-0 bg-black/65 text-[7px] text-white font-mono text-center py-0.5">
                    IT-PLN &apos;26
                  </div>
                </div>

                <div className="flex-1 space-y-1.5 font-mono text-[9px] sm:text-[10px] text-gray-800 min-w-0">
                  <div className="border-b border-gray-200 pb-0.5">
                    <span className="text-gray-400 block text-[8px]">NAME</span>
                    <span className="font-bold tracking-tight text-ink block truncate">
                      {PROFILE.passName}
                    </span>
                  </div>
                  <div className="border-b border-gray-200 pb-0.5">
                    <span className="text-gray-400 block text-[8px]">FOCUS</span>
                    <span className="font-bold text-emerald-800 block truncate">
                      {PROFILE.passFocus}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[8px]">LOCATION</span>
                    <span className="font-semibold text-gray-700 block truncate">
                      {PROFILE.passLocation}
                    </span>
                  </div>
                </div>
              </div>

              {/* Metadata Grid */}
              <div className="space-y-1 pt-2 border-t border-dashed border-gray-300 font-mono text-[9px] leading-tight text-gray-600">
                <div className="flex justify-between">
                  <span className="text-gray-400 uppercase">IG:</span>
                  <a
                    href={PROFILE.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-ink hover:underline"
                  >
                    {PROFILE.instagramHandle}
                  </a>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="text-gray-400 uppercase shrink-0">EMAIL:</span>
                  <span className="font-medium text-[8px] text-ink truncate">
                    {PROFILE.email}
                  </span>
                </div>
              </div>

              {/* Bottom Barcode Accent */}
              <div className="mt-3 pt-2 border-t border-gray-200 flex items-center justify-between">
                <div className="flex items-center space-x-[2px] h-4" aria-hidden="true">
                  <div className="w-0.5 h-full bg-black" />
                  <div className="w-1 h-full bg-black" />
                  <div className="w-0.5 h-full bg-black" />
                  <div className="w-1.5 h-full bg-black" />
                  <div className="w-0.5 h-full bg-black" />
                  <div className="w-1 h-full bg-black" />
                  <div className="w-2 h-full bg-black" />
                  <div className="w-0.5 h-full bg-black" />
                  <div className="w-1 h-full bg-black" />
                  <div className="w-0.5 h-full bg-black" />
                  <div className="w-1.5 h-full bg-black" />
                  <div className="w-0.5 h-full bg-black" />
                  <div className="w-1 h-full bg-black" />
                </div>
                <span className="font-mono text-[8px] text-gray-400 tracking-widest">
                  {PROFILE.passSerial}
                </span>
              </div>
            </div>
          ) : (
            /* Back of ID Card (Credential Verification View) */
            <div className="bg-[#F7F7F5] rounded-xl p-4 border border-gray-200/80 shadow-sm relative overflow-hidden min-h-[296px] flex flex-col justify-between">
              <div className="absolute inset-0 badge-gloss pointer-events-none" />
              <div>
                <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-3">
                  <span className="font-display text-sm tracking-tight text-ink">
                    ACCESS CREDENTIALS
                  </span>
                  <span className="font-mono text-[9px] font-bold text-studio-mid">
                    ID-0026
                  </span>
                </div>
                <div className="space-y-2.5 font-mono text-[9px] text-gray-700">
                  <div>
                    <span className="text-gray-400 block text-[8px]">AFFILIATION</span>
                    <span className="font-bold text-ink">
                      Institut Teknologi PLN · UKM Cakrawala
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[8px]">PRIMARY STACK</span>
                    <span className="font-semibold text-ink">
                      Python 3 · OpenCV · MediaPipe · React · Tailwind
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[8px]">CLEARANCE</span>
                    <span className="font-bold text-emerald-800">
                      LEAD WEB &amp; CV SYSTEMS BUILDER
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-dashed border-gray-300 flex items-center justify-between font-mono text-[8px] text-gray-500">
                <span>IF FOUND RETURN TO IT-PLN JKT</span>
                <span className="font-bold text-ink">ARCHIVE &apos;26</span>
              </div>
            </div>
          )}

          {/* Physics Instruction Tag */}
          <div className="text-center mt-2">
            <span className="text-[8px] font-mono uppercase tracking-widest text-white/85 bg-black/45 px-2.5 py-0.5 rounded-full inline-block">
              Drag / Sway Pass · Tap ↻ to Flip
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
