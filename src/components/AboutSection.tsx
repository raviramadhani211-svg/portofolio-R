import { PROFILE } from '../data/portfolioData';

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 px-4 sm:px-8 bg-[#F5F5F2] border-b border-gray-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Index Header */}
        <div className="flex items-center gap-3 font-mono text-xs text-studio-mid font-bold tracking-widest uppercase mb-4">
          <span>01 // STUDIO DOSSIER &amp; ORIGIN</span>
          <div className="h-px bg-studio-mid/30 flex-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Primary Manifesto */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-3xl sm:text-5xl text-ink leading-[1.1] tracking-tight">
              CURIOSITY BUILT INTO <br />
              <span className="font-script text-4xl sm:text-6xl text-studio-mid font-normal">
                working systems.
              </span>
            </h2>

            <div className="text-gray-700 font-archivo font-normal leading-relaxed space-y-4 text-base sm:text-lg">
              <p>
                I&apos;m <strong className="text-ink font-semibold">{PROFILE.fullName}</strong> —
                better known as{' '}
                <span className="bg-mint-highlight/70 px-1.5 py-0.5 font-mono text-ink font-semibold rounded">
                  {PROFILE.shortName}
                </span>
                . An Informatics Engineering undergraduate at{' '}
                <strong className="text-ink">{PROFILE.institution} (2026–Now)</strong>, rooted
                between the island coastline of <strong className="text-ink">Biak, Papua</strong>{' '}
                and the high-density metropolis of <strong className="text-ink">Jakarta</strong>.
              </p>
              <p>
                My focus lives at the intersection of practical software engineering and interactive
                visual experiences: developing robust Python backends, computer vision gesture
                pipelines with OpenCV &amp; MediaPipe, and tactile, high-performance web spaces.
              </p>
              <p className="text-base text-gray-600">
                When stepping away from terminals, I recharge on the futsal court, dig into
                Japanese technological pop-culture aesthetics, or engineer lean tools for campus
                communities like UKM Cakrawala.
              </p>
            </div>

            {/* Highlight Badges */}
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="px-3 py-1.5 bg-white border border-gray-300 rounded-md font-mono text-xs text-gray-800 shadow-sm">
                📍 Biak ➔ Jakarta
              </span>
              <span className="px-3 py-1.5 bg-white border border-gray-300 rounded-md font-mono text-xs text-gray-800 shadow-sm">
                🎓 Informatics Engineering @ IT-PLN
              </span>
              <span className="px-3 py-1.5 bg-white border border-gray-300 rounded-md font-mono text-xs text-gray-800 shadow-sm">
                ⚡ Python &amp; Real-Time Systems
              </span>
              <span className="px-3 py-1.5 bg-white border border-gray-300 rounded-md font-mono text-xs text-gray-800 shadow-sm">
                ⚽ Futsal &amp; Japanese Pop Culture
              </span>
            </div>
          </div>

          {/* Right Column: Academic & Studio Ledger Sheet */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-gray-300 shadow-xl space-y-6 relative overflow-hidden">
            <div className="flex items-center justify-between border-b pb-4 border-gray-200">
              <div>
                <span className="font-mono text-[10px] tracking-widest uppercase text-gray-400 block">
                  RECORD // ARCHIVE
                </span>
                <h3 className="font-display text-xl text-ink">SPECIFICATION SHEET</h3>
              </div>
              <span className="font-mono text-xs font-bold text-studio-mid bg-mint-highlight/50 px-2 py-1 rounded tabular-nums">
                2026 ED.
              </span>
            </div>

            {/* Timeline list */}
            <div className="space-y-4">
              <div className="border-l-2 border-studio-mid pl-4 relative">
                <span className="w-2 h-2 rounded-full bg-studio-mid absolute -left-[5px] top-1.5" />
                <span className="font-mono text-xs text-gray-400 tabular-nums">
                  2026 — PRESENT
                </span>
                <h4 className="font-bold text-ink text-base">Informatics Engineering (S1)</h4>
                <p className="text-xs text-gray-600 font-mono">
                  Institut Teknologi PLN — Jakarta
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Specializing in algorithms, computer vision pipelines, fullstack platforms, and
                  campus engineering leadership.
                </p>
              </div>

              <div className="border-l-2 border-gray-300 pl-4 relative">
                <span className="w-2 h-2 rounded-full bg-gray-400 absolute -left-[5px] top-1.5" />
                <span className="font-mono text-xs text-gray-400 tabular-nums">2023 — 2026</span>
                <h4 className="font-bold text-ink text-base">High School Diploma (MIPA)</h4>
                <p className="text-xs text-gray-600 font-mono">
                  SMAN 18 Makassar — South Sulawesi
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Focus on Natural Sciences, algorithmic logic, festival organization, and
                  technical committee coordination.
                </p>
              </div>
            </div>

            {/* Studio Location Stamp */}
            <div className="p-4 bg-[#F9F9F7] rounded-xl border border-dashed border-gray-300 flex items-center justify-between gap-4 text-xs font-mono">
              <div>
                <span className="text-gray-400 block text-[9px] uppercase">ORIGIN &amp; BASE</span>
                <span className="font-bold text-ink">{PROFILE.originBadge}</span>
              </div>
              <div className="text-right shrink-0">
                <span className="text-gray-400 block text-[9px] uppercase">STATUS</span>
                <span className="text-emerald-700 font-bold flex items-center justify-end gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                  OPEN TO WORK
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
