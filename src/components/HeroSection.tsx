import { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { HERO_SUBJECT_IMAGE_URL, PROFILE } from '../data/portfolioData';
import { LanyardCard } from './LanyardCard';

export function HeroSection() {
  const [tiltAngle, setTiltAngle] = useState(0);
  const [imgFailed, setImgFailed] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const normalX = (e.clientX - rect.left) / rect.width - 0.5;
    setTiltAngle(normalX * 5);
  };

  const handleMouseLeave = () => {
    setTiltAngle(0);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100svh] w-full bg-cyclorama flex flex-col justify-between pt-24 pb-8 px-4 sm:px-8 overflow-hidden select-none"
    >
      {/* Layer 1: Monumental Background Typography */}
      <div className="absolute inset-x-0 top-14 sm:top-16 flex flex-col items-center pointer-events-none z-0">
        <div className="relative w-full max-w-7xl mx-auto text-center px-4">
          <h1 className="font-display text-[14vw] sm:text-[13.5vw] lg:text-[12.5vw] uppercase tracking-tighter leading-none text-white/20 select-none">
            {PROFILE.heroWatermark}
          </h1>
          <span className="font-script text-white text-2xl sm:text-4xl lg:text-5xl -rotate-6 tracking-normal drop-shadow-md inline-block absolute left-8 sm:left-24 top-1/2 -translate-y-2">
            {PROFILE.heroScript}
          </span>
        </div>
      </div>

      {/* Center Stage Composition */}
      <div className="relative max-w-7xl mx-auto w-full flex-1 flex flex-col md:flex-row items-center md:items-end justify-center z-10 min-h-[520px] sm:min-h-[560px] gap-6 md:gap-0">
        {/* Sub-layer 2: Desk Corner & Studio Accessories (Bottom Left) */}
        <div className="hidden sm:block absolute -left-6 sm:left-2 lg:left-8 bottom-0 z-10 pointer-events-none w-64 sm:w-80 lg:w-96">
          <div className="relative">
            {/* Office Chair Backrest Silhouette */}
            <div className="absolute -left-8 -bottom-4 w-32 h-44 bg-[#111315] rounded-t-xl border-4 border-[#2b2b2b] shadow-2xl opacity-90 transform -rotate-2">
              <div className="w-full h-full flex flex-col justify-around py-3 px-1">
                <div className="w-full h-1 bg-[#262626]" />
                <div className="w-full h-1 bg-[#262626]" />
                <div className="w-full h-1 bg-[#262626]" />
                <div className="w-full h-1 bg-[#262626]" />
              </div>
            </div>

            {/* Chrome Modernist Desk Slab */}
            <div className="relative bg-gradient-to-b from-[#e5e5e0] to-[#c7c7c2] h-20 w-72 sm:w-96 rounded-tl-md shadow-2xl border-t-2 border-white/60 p-3 flex flex-col justify-between">
              <div className="flex items-end gap-3">
                {/* Ceramic Coffee Mug */}
                <div className="w-9 h-11 bg-white rounded-sm border-r-4 border-b-2 border-black/15 shadow-md relative">
                  <div className="absolute -right-3 top-2 w-3.5 h-6 border-2 border-white rounded-r-md" />
                </div>

                {/* Project Dossier Folder Stack */}
                <div className="bg-[#dcd6c5] border border-[#a89f8b] px-3 py-1.5 shadow-md transform -rotate-1 rounded-sm text-[9px] font-mono text-[#443f33] w-48 leading-tight">
                  <span className="block font-bold">PROJECT DOSSIER &apos;26</span>
                  <span className="text-[8px] opacity-75">UKM CAKRAWALA // IT PLN</span>
                </div>
              </div>
              <div className="w-full h-2 bg-gradient-to-r from-gray-300 via-white to-gray-400 rounded-sm" />
            </div>

            {/* Desk Chrome Frame Leg */}
            <div className="w-4 h-28 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400 ml-4 shadow-xl" />
          </div>
        </div>

        {/* Sub-layer 3: Retro Developer Subject Cutout */}
        <div className="relative z-20 flex justify-center items-end h-full max-h-[82vh] w-full max-w-lg lg:max-w-xl order-2 md:order-1">
          <div className="relative w-full flex justify-center items-end">
            {!imgFailed ? (
              <img
                src={HERO_SUBJECT_IMAGE_URL}
                alt="Ravi Ramadhani (Raph) - Studio Portrait with Spider UI Hand Tracking"
                referrerPolicy="no-referrer"
                onError={() => setImgFailed(true)}
                style={{
                  maskImage:
                    'radial-gradient(ellipse 76% 84% at 50% 56%, #000000 60%, transparent 100%)',
                  WebkitMaskImage:
                    'radial-gradient(ellipse 76% 84% at 50% 56%, #000000 60%, transparent 100%)',
                }}
                className="w-full max-w-[340px] sm:max-w-[410px] lg:max-w-[450px] aspect-[3/4] max-h-[62vh] sm:max-h-[70vh] lg:max-h-[75vh] object-cover object-top filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)] pointer-events-none"
              />
            ) : (
              <div className="w-80 h-64 bg-studio-darker/90 border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-2xl">
                <span className="font-display text-3xl text-white">RAPH</span>
                <span className="font-mono text-xs text-emerald-300 mt-2">
                  INFORMATICS // PYTHON &amp; WEB
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Sub-layer 4: Hanging Lanyard ID Pass Card */}
        <div className="relative md:absolute md:right-4 lg:right-14 md:top-[-96px] z-30 order-1 md:order-2 scale-90 sm:scale-95 lg:scale-100">
          <LanyardCard tiltAngle={tiltAngle} />
        </div>
      </div>

      {/* Layer 5: Scroll Indicator */}
      <div className="w-full flex justify-center items-center z-20 pb-1 pt-4">
        <a
          href="#about"
          className="text-white/75 hover:text-white flex items-center gap-2 font-mono text-xs tracking-widest uppercase transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 rounded"
        >
          <span>SCROLL INTO THE WORK</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
