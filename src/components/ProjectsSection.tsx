import { useState } from 'react';
import { PROJECTS, ProjectArtifact } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

type FilterType = 'All' | 'Web Platform' | 'Computer Vision' | '3D & Data';

export function ProjectsSection() {
  const [filter, setFilter] = useState<FilterType>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectArtifact | null>(null);

  const visibleProjects =
    filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const toneTextColor: Record<ProjectArtifact['statusTone'], string> = {
    emerald: 'text-emerald-300',
    yellow: 'text-yellow-300',
    cyan: 'text-cyan-300',
  };

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 px-4 sm:px-8 bg-studio-deep text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Index Header */}
        <div className="flex items-center gap-3 font-mono text-xs text-emerald-300/80 font-bold tracking-widest uppercase mb-4">
          <span>02 // PRODUCTION ARCHIVE</span>
          <div className="h-px bg-white/20 flex-1" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl tracking-tight text-white">
              SELECTED{' '}
              <span className="font-script text-4xl sm:text-6xl text-emerald-300 font-normal">
                builds &amp; experiments.
              </span>
            </h2>
            <p className="font-mono text-xs text-gray-300 mt-2">
              PRODUCTION SYSTEMS, APIS &amp; REAL-TIME EXPERIMENTAL ENGINES
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Interactive Category Filter */}
            <div
              role="group"
              aria-label="Filter projects by category"
              className="flex flex-wrap items-center gap-1 p-1 bg-[#162F27] border border-white/15 rounded-xl"
            >
              {(['All', 'Web Platform', 'Computer Vision', '3D & Data'] as FilterType[]).map(
                (tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setFilter(tab)}
                    className={`px-3 py-1.5 rounded-lg font-mono text-[11px] transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      filter === tab
                        ? 'bg-emerald-400 text-ink font-bold'
                        : 'text-white/75 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                )
              )}
            </div>
            <div className="font-mono text-xs text-emerald-200/60 uppercase tabular-nums">
              [ 0{visibleProjects.length} FEATURED ARTIFACTS ]
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-[#19322A] border border-white/15 rounded-2xl overflow-hidden hover:border-emerald-400/50 transition-all duration-300 flex flex-col group hover:-translate-y-1.5 shadow-2xl cursor-pointer"
            >
              {/* Graphic Preview Header */}
              <div className="h-48 bg-[#10221C] border-b border-white/10 p-4 flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between font-mono text-[10px] text-emerald-400">
                  <span className="flex items-center gap-1.5">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        project.statusTone === 'yellow'
                          ? 'bg-yellow-400 animate-ping'
                          : project.statusTone === 'cyan'
                          ? 'bg-cyan-400'
                          : 'bg-emerald-400'
                      }`}
                    />
                    {project.code}
                  </span>
                  <span>{project.timeframe}</span>
                </div>

                {/* Card-specific Visual Schematic */}
                {project.id === 'cakrawala' && (
                  <div className="py-2">
                    <div className="w-full bg-[#18362D] rounded p-2.5 space-y-1.5 font-mono text-[10px] text-gray-300">
                      <div className="flex items-center justify-between text-xs text-white">
                        <span>POST /api/v1/auth/member</span>
                        <span className="text-emerald-400 text-[10px] tabular-nums">200 OK</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-400 w-3/4 group-hover:w-full transition-all duration-500" />
                      </div>
                      <div className="text-[9px] text-gray-400 truncate">
                        Token: signed_jwt_itpln_cakrawala_verified
                      </div>
                    </div>
                  </div>
                )}

                {project.id === 'gesture-tracker' && (
                  <div className="flex items-center justify-center py-1">
                    <svg className="w-24 h-24 stroke-emerald-400 fill-none" viewBox="0 0 100 100">
                      <circle
                        className="stroke-white/20"
                        cx="50"
                        cy="50"
                        r="44"
                        strokeDasharray="2 3"
                      />
                      <line strokeWidth="1.5" x1="50" x2="35" y1="85" y2="55" />
                      <line strokeWidth="1.5" x1="35" x2="25" y1="55" y2="40" />
                      <line strokeWidth="1.5" x1="50" x2="48" y1="85" y2="45" />
                      <line strokeWidth="1.5" x1="48" x2="45" y1="45" y2="25" />
                      <line strokeWidth="1.5" x1="50" x2="62" y1="85" y2="48" />
                      <line strokeWidth="1.5" x1="62" x2="70" y1="48" y2="30" />
                      <circle className="fill-emerald-300" cx="50" cy="85" r="3" />
                      <circle className="fill-emerald-400" cx="35" cy="55" r="2.5" />
                      <circle className="fill-yellow-300" cx="25" cy="40" r="2.5" />
                      <circle className="fill-emerald-400" cx="48" cy="45" r="2.5" />
                      <circle className="fill-yellow-300" cx="45" cy="25" r="2.5" />
                      <circle className="fill-emerald-400" cx="62" cy="48" r="2.5" />
                      <circle className="fill-yellow-300" cx="70" cy="30" r="2.5" />
                    </svg>
                  </div>
                )}

                {project.id === 'data-3d-lab' && (
                  <div className="flex items-center justify-around py-1">
                    <div className="font-mono text-[9px] text-emerald-300 space-y-0.5 tabular-nums">
                      <div>[+0.824, -0.194, +0.339]</div>
                      <div>[-0.102, +0.941, -0.218]</div>
                      <div>[+0.412, +0.089, +0.892]</div>
                      <div className="text-gray-400 text-[8px]">Δ_loss: 0.0024 // 60 FPS</div>
                    </div>
                    <div className="w-12 h-12 border border-cyan-400/60 rotate-45 transform skew-x-6 flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
                      <div className="w-6 h-6 border border-white/40" />
                    </div>
                  </div>
                )}

                {/* Tech badges strip */}
                <div className="flex gap-1.5 font-mono text-[9px]">
                  {project.stack.map((tech) => (
                    <span key={tech} className="bg-white/10 px-2 py-0.5 rounded text-white/90">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-display text-xl text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-archivo text-sm text-gray-300 mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                  <span className={toneTextColor[project.statusTone]}>{project.statusLabel}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="text-white/75 group-hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>{project.actionLabel}</span>
                    <span>↗</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
