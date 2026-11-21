import { useState, useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, RotateCcw } from 'lucide-react';
import { ProjectArtifact } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectArtifact | null;
  onClose: () => void;
}

type GesturePreset = 'OPEN_PALM' | 'PINCH_ZOOM' | 'VICTORY' | 'FIST_LOCK';

const GESTURE_SHAPES: Record<
  GesturePreset,
  { label: string; command: string; fingers: [number, number][]; confidence: string }
> = {
  OPEN_PALM: {
    label: 'Open Palm',
    command: 'PLAY_PAUSE_MEDIA',
    confidence: '0.984',
    fingers: [
      [22, 42],
      [35, 22],
      [50, 18],
      [64, 24],
      [76, 36],
    ],
  },
  PINCH_ZOOM: {
    label: 'Pinch Select',
    command: 'CURSOR_CLICK_HOLD',
    confidence: '0.961',
    fingers: [
      [42, 34],
      [45, 32],
      [54, 20],
      [66, 26],
      [76, 38],
    ],
  },
  VICTORY: {
    label: 'Victory / Two-Finger',
    command: 'NEXT_SLIDE_DECK',
    confidence: '0.972',
    fingers: [
      [36, 56],
      [38, 20],
      [58, 20],
      [56, 62],
      [66, 65],
    ],
  },
  FIST_LOCK: {
    label: 'Fist Lock',
    command: 'SYSTEM_MUTE_TOGGLE',
    confidence: '0.991',
    fingers: [
      [38, 60],
      [42, 56],
      [50, 56],
      [58, 58],
      [65, 62],
    ],
  },
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Interactive state for UKM Cakrawala Auth Simulator
  const [applicantName, setApplicantName] = useState('Alya Pratama');
  const [division, setDivision] = useState('Tech & Media');
  const [simulatedResponse, setSimulatedResponse] = useState<string | null>(null);

  // Interactive state for Hand Gesture Tracker
  const [gesture, setGesture] = useState<GesturePreset>('OPEN_PALM');
  const [pointerOffset, setPointerOffset] = useState({ x: 0, y: 0 });

  // Interactive state for 3D Matrix Lab
  const [rotY, setRotY] = useState(32);
  const [rotX, setRotX] = useState(20);
  const [autoSpin, setAutoSpin] = useState(true);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  useEffect(() => {
    if (!project || project.id !== 'data-3d-lab' || !autoSpin) return;
    let frameId: number;
    const tick = () => {
      setRotY((prev) => (prev + 0.6) % 360);
      frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [project, autoSpin]);

  if (!project) return null;

  const handleSimulateAuth = (e: React.FormEvent) => {
    e.preventDefault();
    const safeName = applicantName.trim() || 'Student Member';
    const tokenSuffix = btoa(safeName).slice(0, 10).replace(/=/g, '');
    setSimulatedResponse(
      JSON.stringify(
        {
          status: 200,
          member: safeName,
          division,
          jwt: `eyJhbGciOiJIUzI1NiJ9.${tokenSuffix}.itpln_cakrawala`,
          whatsappDispatch: 'QUEUED -> +62-812-XXXX-9026 (Verified)',
        },
        null,
        2
      )
    );
  };

  // 3D Octahedron projection math for Data & 3D Lab
  const radX = (rotX * Math.PI) / 180;
  const radY = (rotY * Math.PI) / 180;
  const cosX = Math.cos(radX);
  const sinX = Math.sin(radX);
  const cosY = Math.cos(radY);
  const sinY = Math.sin(radY);

  const vertices3D: [number, number, number][] = [
    [0, -1, 0],
    [1, 0, 0],
    [0, 0, 1],
    [-1, 0, 0],
    [0, 0, -1],
    [0, 1, 0],
  ];

  const projected = vertices3D.map(([x, y, z]) => {
    const x1 = x * cosY - z * sinY;
    const z1 = x * sinY + z * cosY;
    const y2 = y * cosX - z1 * sinX;
    const z2 = y * sinX + z1 * cosX;
    const scale = 95 / (3.2 - z2);
    return [100 + x1 * scale, 90 + y2 * scale] as [number, number];
  });

  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [5, 1],
    [5, 2],
    [5, 3],
    [5, 4],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 1],
  ];

  const activePreset = GESTURE_SHAPES[gesture];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#162F27] border border-white/20 text-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Top Modal Header */}
        <div className="flex items-start justify-between gap-4 p-6 border-b border-white/15 bg-[#10221C]">
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-300 uppercase tracking-wider">
              <span>{project.code}</span>
              <span aria-hidden="true">·</span>
              <span>{project.timeframe}</span>
            </div>
            <h3 id="modal-project-title" className="font-display text-2xl sm:text-3xl text-white mt-1">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close artifact preview"
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Summary Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.summaryMetrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-[#10221C] border border-white/10 rounded-xl p-3.5"
              >
                <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-300/70 block">
                  {metric.label}
                </span>
                <span className="font-mono text-sm font-bold text-white mt-1 block tabular-nums">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Interactive Lab Area */}
          <div className="bg-[#10221C] border border-white/15 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-emerald-300 uppercase tracking-wider">
                Interactive Artifact Workbench
              </span>
              <span className="font-mono text-[10px] text-white/60 uppercase">
                {project.actionLabel}
              </span>
            </div>

            {project.id === 'cakrawala' && (
              <form onSubmit={handleSimulateAuth} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-mono text-[10px] uppercase text-emerald-200/80 mb-1">
                      Applicant Name
                    </label>
                    <input
                      type="text"
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      className="w-full bg-[#19322A] border border-white/20 rounded-lg px-3 py-2 text-sm font-mono text-white focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] uppercase text-emerald-200/80 mb-1">
                      Division Target
                    </label>
                    <select
                      value={division}
                      onChange={(e) => setDivision(e.target.value)}
                      className="w-full bg-[#19322A] border border-white/20 rounded-lg px-3 py-2 text-sm font-mono text-white focus:outline-none focus:border-emerald-400"
                    >
                      <option value="Tech & Media">Tech &amp; Media</option>
                      <option value="Operations">Operations</option>
                      <option value="Creative Arts">Creative Arts</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-emerald-400 hover:bg-emerald-300 text-ink font-mono text-xs font-bold rounded-lg transition cursor-pointer"
                  >
                    Test POST /api/v1/auth/member
                  </button>
                  <span className="font-mono text-[11px] text-white/60">
                    Simulates signed JWT + WhatsApp trigger
                  </span>
                </div>
                {simulatedResponse && (
                  <pre className="bg-black/40 border border-emerald-400/30 rounded-lg p-3 font-mono text-[11px] text-emerald-300 overflow-x-auto">
                    {simulatedResponse}
                  </pre>
                )}
              </form>
            )}

            {project.id === 'gesture-tracker' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div
                  onMouseMove={(e) => {
                    const r = e.currentTarget.getBoundingClientRect();
                    setPointerOffset({
                      x: ((e.clientX - r.left) / r.width - 0.5) * 14,
                      y: ((e.clientY - r.top) / r.height - 0.5) * 14,
                    });
                  }}
                  onMouseLeave={() => setPointerOffset({ x: 0, y: 0 })}
                  className="h-48 bg-[#162F27] border border-white/10 rounded-xl flex items-center justify-center relative overflow-hidden cursor-crosshair"
                >
                  <svg viewBox="0 0 100 100" className="w-40 h-40">
                    <circle
                      cx="50"
                      cy="50"
                      r="44"
                      className="stroke-white/15 fill-none"
                      strokeDasharray="2 3"
                    />
                    {activePreset.fingers.map(([fx, fy], idx) => {
                      const tx = fx + pointerOffset.x * 0.45;
                      const ty = fy + pointerOffset.y * 0.45;
                      const mx = (50 + tx) / 2;
                      const my = (82 + ty) / 2 - 4;
                      return (
                        <g key={idx}>
                          <line
                            x1="50"
                            y1="82"
                            x2={mx}
                            y2={my}
                            className="stroke-emerald-400"
                            strokeWidth="1.5"
                          />
                          <line
                            x1={mx}
                            y1={my}
                            x2={tx}
                            y2={ty}
                            className="stroke-emerald-400"
                            strokeWidth="1.5"
                          />
                          <circle cx={mx} cy={my} r="2.2" className="fill-emerald-300" />
                          <circle cx={tx} cy={ty} r="2.5" className="fill-yellow-300" />
                        </g>
                      );
                    })}
                    <circle cx="50" cy="82" r="3.2" className="fill-emerald-200" />
                  </svg>
                  <span className="absolute bottom-2 left-3 font-mono text-[9px] text-white/60">
                    Move cursor to shift hand vector
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    {(Object.keys(GESTURE_SHAPES) as GesturePreset[]).map((key) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setGesture(key)}
                        className={`px-3 py-2 rounded-lg font-mono text-[11px] text-left border transition cursor-pointer ${
                          gesture === key
                            ? 'bg-emerald-400 text-ink border-emerald-400 font-bold'
                            : 'bg-[#19322A] text-white/85 border-white/15 hover:border-emerald-400/50'
                        }`}
                      >
                        {GESTURE_SHAPES[key].label}
                      </button>
                    ))}
                  </div>
                  <div className="bg-black/35 rounded-lg p-3 font-mono text-[11px] space-y-1 border border-white/10">
                    <div className="flex justify-between">
                      <span className="text-white/60">COMMAND:</span>
                      <span className="text-yellow-300 font-bold">{activePreset.command}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">CONFIDENCE:</span>
                      <span className="text-emerald-300 tabular-nums">
                        {activePreset.confidence}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {project.id === 'data-3d-lab' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div className="h-48 bg-[#162F27] border border-white/10 rounded-xl flex items-center justify-center relative">
                  <svg viewBox="0 0 200 180" className="w-full h-full">
                    {edges.map(([a, b], idx) => (
                      <line
                        key={idx}
                        x1={projected[a][0]}
                        y1={projected[a][1]}
                        x2={projected[b][0]}
                        y2={projected[b][1]}
                        className="stroke-cyan-300"
                        strokeWidth="1.6"
                      />
                    ))}
                    {projected.map(([px, py], idx) => (
                      <circle key={idx} cx={px} cy={py} r="3" className="fill-white" />
                    ))}
                  </svg>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="flex justify-between font-mono text-[10px] text-white/70 mb-1">
                      <span>YAW ROTATION</span>
                      <span className="tabular-nums">{Math.round(rotY)}°</span>
                    </label>
                    <input
                      type="range"
                      min={0}
                      max={360}
                      value={rotY}
                      onChange={(e) => {
                        setAutoSpin(false);
                        setRotY(Number(e.target.value));
                      }}
                      className="w-full accent-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="flex justify-between font-mono text-[10px] text-white/70 mb-1">
                      <span>PITCH ROTATION</span>
                      <span className="tabular-nums">{Math.round(rotX)}°</span>
                    </label>
                    <input
                      type="range"
                      min={-90}
                      max={90}
                      value={rotX}
                      onChange={(e) => setRotX(Number(e.target.value))}
                      className="w-full accent-cyan-400"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setAutoSpin((s) => !s)}
                      className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 font-mono text-[11px] flex items-center gap-1.5 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      {autoSpin ? 'Pause Spin' : 'Resume Spin'}
                    </button>
                    <span className="font-mono text-[10px] text-cyan-300 tabular-nums">
                      cosY={cosY.toFixed(2)} sinX={sinX.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Architecture Breakdown */}
          <div className="space-y-2.5">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-300">
              Engineering Notes
            </h4>
            <ul className="space-y-2">
              {project.architectureNotes.map((note, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm font-archivo text-gray-200 leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Stack & Close */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2 font-mono text-[11px] text-white/80">
              {project.stack.map((tech) => (
                <span key={tech} className="bg-white/10 px-2.5 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-white text-ink hover:bg-emerald-100 font-mono text-xs font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <span>Close Preview</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
