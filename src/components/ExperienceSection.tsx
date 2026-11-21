import { EXPERIENCES } from '../data/portfolioData';

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 sm:py-32 px-4 sm:px-8 bg-[#ECECE7] border-b border-gray-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Index Header */}
        <div className="flex items-center gap-3 font-mono text-xs text-studio-mid font-bold tracking-widest uppercase mb-4">
          <span>04 // FIELD EXPERIENCE</span>
          <div className="h-px bg-studio-mid/30 flex-1" />
        </div>

        <div className="mb-14">
          <h2 className="font-display text-3xl sm:text-5xl text-ink tracking-tight">
            EXPERIENCE{' '}
            <span className="font-script text-4xl sm:text-6xl text-studio-mid font-normal">
              log.
            </span>
          </h2>
          <p className="font-mono text-xs text-gray-600 mt-2 uppercase">
            CHRONOLOGICAL ENGAGEMENTS &amp; RESPONSIBILITIES
          </p>
        </div>

        {/* Ledger Timeline Entries */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-xl p-6 sm:p-8 border border-gray-300 shadow-md flex flex-col md:flex-row md:items-start justify-between gap-6 hover:shadow-xl transition-shadow"
            >
              <div className="md:w-1/4">
                <span
                  className={`font-mono text-xs font-bold px-2.5 py-1 rounded inline-block mb-1 tabular-nums ${
                    exp.isCurrent
                      ? 'text-emerald-800 bg-emerald-100'
                      : 'text-gray-700 bg-gray-200'
                  }`}
                >
                  {exp.period}
                </span>
                <p className="font-mono text-xs text-gray-500">{exp.location}</p>
                <p className="font-bold text-ink text-sm mt-2">{exp.organization}</p>
                <p className="text-xs text-gray-500 font-mono">{exp.department}</p>
              </div>

              <div className="md:w-3/4 space-y-3">
                <h3 className="font-display text-xl sm:text-2xl text-ink">{exp.role}</h3>
                <p className="font-archivo text-gray-700 leading-relaxed text-sm">{exp.summary}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
