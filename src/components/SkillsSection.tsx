import { useState } from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';

export function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    note: string;
    group: string;
  } | null>(null);

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 px-4 sm:px-8 bg-[#F5F5F2] border-b border-gray-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Index Header */}
        <div className="flex items-center gap-3 font-mono text-xs text-studio-mid font-bold tracking-widest uppercase mb-4">
          <span>03 // TECHNICAL ARSENAL</span>
          <div className="h-px bg-studio-mid/30 flex-1" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl text-ink tracking-tight">
              TOOLS &amp;{' '}
              <span className="font-script text-4xl sm:text-6xl text-studio-mid font-normal">
                capabilities.
              </span>
            </h2>
            <p className="font-mono text-xs text-gray-500 mt-2 uppercase">
              CORE PROGRAMMING, FRAMEWORKS &amp; EXECUTION ENVIRONMENT
            </p>
          </div>

          {selectedSkill && (
            <div className="bg-white border border-gray-300 rounded-xl px-4 py-2.5 shadow-sm max-w-md">
              <div className="flex items-center justify-between gap-4 font-mono text-[10px] text-studio-mid uppercase font-bold">
                <span>{selectedSkill.group}</span>
                <button
                  type="button"
                  onClick={() => setSelectedSkill(null)}
                  className="text-gray-400 hover:text-ink cursor-pointer"
                >
                  Clear
                </button>
              </div>
              <p className="font-mono text-xs font-bold text-ink mt-0.5">{selectedSkill.name}</p>
              <p className="font-archivo text-xs text-gray-600 mt-1">{selectedSkill.note}</p>
            </div>
          )}
        </div>

        {/* Bento Box Layout for Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.id}
              className="bg-white p-7 rounded-2xl border border-gray-300 shadow-lg space-y-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-studio-mid uppercase">
                  {group.eyebrow}
                </span>
                <span className={`w-3 h-3 rounded-full ${group.dotColor}`} />
              </div>

              <div>
                <h3 className="font-display text-2xl text-ink">{group.title}</h3>
                <p className="text-sm font-archivo text-gray-600 mt-2">{group.subtitle}</p>
              </div>

              <ul className="space-y-3 font-mono text-xs text-gray-800">
                {group.items.map((item) => {
                  const isActive = selectedSkill?.name === item.name;
                  return (
                    <li key={item.name}>
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedSkill(
                            isActive
                              ? null
                              : { name: item.name, note: item.note, group: group.eyebrow }
                          )
                        }
                        className={`w-full flex items-center justify-between p-2.5 rounded border text-left transition cursor-pointer ${
                          isActive
                            ? 'bg-mint-highlight/60 border-studio-mid'
                            : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
                        }`}
                      >
                        <span className={item.bold ? 'font-bold text-ink' : 'text-gray-800'}>
                          {item.name}
                        </span>
                        <span className="text-emerald-700 font-bold tabular-nums shrink-0 ml-2">
                          {item.level}%
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
