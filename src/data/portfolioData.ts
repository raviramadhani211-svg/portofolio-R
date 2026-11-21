import heroPortrait from '../assets/images/raph_studio_portrait_1795246128059.jpg';

export const HERO_SUBJECT_IMAGE_URL = heroPortrait;

export const PROFILE = {
  brandTitle: "RAPH // STUDIO ARCHIVE '26",
  heroWatermark: 'RAMADHANI',
  heroScript: 'python-dev & builder',
  fullName: 'Ravi Ramadhani Putra Gunawan',
  shortName: 'Raph',
  passName: 'R. RAMADHANI (RAPH)',
  passRole: 'INFORMATICS // WEB & CV DEV',
  passFocus: 'PYTHON, CV & WEB',
  passLocation: 'JAKARTA / BIAK',
  passSerial: 'RAPH-90-2026',
  institution: 'Institut Teknologi PLN',
  instagramHandle: '@rappyn_',
  instagramUrl: 'https://instagram.com/rappyn_',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com',
  email: 'raviramadhani211@gmail.com',
  originBadge: 'BIAK, PAPUA ➔ JAKARTA, ID',
};

export interface ProjectArtifact {
  id: 'cakrawala' | 'gesture-tracker' | 'data-3d-lab';
  code: string;
  timeframe: string;
  category: 'Web Platform' | 'Computer Vision' | '3D & Data';
  title: string;
  description: string;
  stack: string[];
  statusLabel: string;
  statusTone: 'emerald' | 'yellow' | 'cyan';
  actionLabel: string;
  summaryMetrics: { label: string; value: string }[];
  architectureNotes: string[];
}

export const PROJECTS: ProjectArtifact[] = [
  {
    id: 'cakrawala',
    code: 'CAKRAWALA_SYS.V2',
    timeframe: '2026 // WEB PLATFORM',
    category: 'Web Platform',
    title: 'UKM Cakrawala Organization Web Platform',
    description:
      'Centralized management hub for student organization operations: active registration flow, automated WhatsApp notification triggers for recruitment, and secure role-based dashboard for executives.',
    stack: ['Tailwind', 'WhatsApp API', 'Role Auth'],
    statusLabel: 'DEPLOYED SYSTEM',
    statusTone: 'emerald',
    actionLabel: 'Case Study',
    summaryMetrics: [
      { label: 'Onboarding Speed', value: '-65% Manual Review' },
      { label: 'Auth Strategy', value: 'Signed JWT + RBAC' },
      { label: 'Dispatch Channel', value: 'WhatsApp Webhook' },
    ],
    architectureNotes: [
      'Structured applicant registration pipeline with instant schema validation and division routing.',
      'Automated webhook dispatch triggering WhatsApp verification messages upon intake submission.',
      'Scoped executive dashboards with role-based access control for IT-PLN UKM Cakrawala leads.',
    ],
  },
  {
    id: 'gesture-tracker',
    code: 'CV_LANDMARKS_21',
    timeframe: '2025–2026 // VISION',
    category: 'Computer Vision',
    title: 'Real-Time Hand & Motion Gesture Tracker',
    description:
      'Computer vision application tracking 21 spatial hand landmark nodes via web camera feed with low latency inference. Translates custom sign primitives into system automation shortcuts and inputs.',
    stack: ['Python 3', 'OpenCV', 'MediaPipe'],
    statusLabel: 'OPEN EXPERIMENT',
    statusTone: 'yellow',
    actionLabel: 'Source Code',
    summaryMetrics: [
      { label: 'Tracked Nodes', value: '21 Spatial Landmarks' },
      { label: 'Pipeline Rate', value: '30–60 FPS Stream' },
      { label: 'Key Primitives', value: 'Pinch / Palm / Lock' },
    ],
    architectureNotes: [
      'Captures RGB frames via OpenCV VideoCapture and normalizes coordinate space for MediaPipe Hands.',
      'Computes Euclidean joint angles across thumb, index, middle, ring, and pinky phalanges.',
      'Maps debounced gesture vectors into keyboard shortcuts, scroll macros, and presentation triggers.',
    ],
  },
  {
    id: 'data-3d-lab',
    code: 'NUMPY_MATRIX_ENGINE',
    timeframe: '2025–2026 // LAB',
    category: '3D & Data',
    title: 'Data Pipelines & 3D Web Explorations',
    description:
      'Collection of computational experiments evaluating dataset distributions using Pandas/Matplotlib, accompanied by real-time interactive 3D WebGL scenes for geometric spatial rendering.',
    stack: ['NumPy', 'Pandas', 'Three.js'],
    statusLabel: 'INTERACTIVE LAB',
    statusTone: 'cyan',
    actionLabel: 'Live Prototype',
    summaryMetrics: [
      { label: 'Matrix Precision', value: 'Float64 Vector Ops' },
      { label: 'Frame Target', value: '60 FPS Wireframe' },
      { label: 'Data Tooling', value: 'Pandas + Matplotlib' },
    ],
    architectureNotes: [
      'Vectorized NumPy pipelines for linear transforms, covariance checks, and anomaly filtering.',
      'Clean Matplotlib distribution plots paired with CSV ingestion workflows in Pandas.',
      'Interactive 3D polyhedron spatial projections testing Euler rotations and perspective matrices.',
    ],
  },
];

export interface SkillGroup {
  id: string;
  eyebrow: string;
  dotColor: string;
  title: string;
  subtitle: string;
  items: {
    name: string;
    level: number;
    bold?: boolean;
    note: string;
  }[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'python-cv',
    eyebrow: 'CORE SYSTEM',
    dotColor: 'bg-studio-mid',
    title: 'Python & Computer Vision',
    subtitle:
      'Writing structured, performant algorithms for data manipulation and image recognition streams.',
    items: [
      {
        name: 'Python 3 (OOP, Async, Typing)',
        level: 90,
        bold: true,
        note: 'Primary systems language for automation scripts, backend APIs, and vision pipelines.',
      },
      {
        name: 'OpenCV & MediaPipe Landmarks',
        level: 85,
        note: 'Real-time 21-point skeletal hand tracking, contour detection, and gesture classification.',
      },
      {
        name: 'NumPy & Pandas Data Structures',
        level: 80,
        note: 'Vectorized matrix transforms, tabular cleaning, and statistical summary workflows.',
      },
      {
        name: 'Matplotlib & Statistical Plots',
        level: 75,
        note: 'Exploratory distribution visualizations and experiment telemetry charts.',
      },
    ],
  },
  {
    id: 'web-3d',
    eyebrow: 'FRONTEND & INTERFACES',
    dotColor: 'bg-emerald-500',
    title: 'Web & 3D Creative',
    subtitle:
      'Crafting responsive web applications with semantic structure, tactile typography and custom canvas dynamics.',
    items: [
      {
        name: 'HTML5 Semantic Architecture',
        level: 95,
        bold: true,
        note: 'Accessible, structured document layouts with clean landmark hierarchy.',
      },
      {
        name: 'Tailwind CSS & UI Systems',
        level: 92,
        bold: true,
        note: 'Design-token driven styling for responsive bento grids and tactile interfaces.',
      },
      {
        name: 'Modern JavaScript (ES6+ / DOM APIs)',
        level: 82,
        note: 'Interactive physics rigs, clipboard APIs, and responsive client-side state.',
      },
      {
        name: 'Three.js & SVG Vector Graphics',
        level: 70,
        note: 'Geometric wireframes, interactive spatial meshes, and precision vector schematics.',
      },
    ],
  },
  {
    id: 'ops',
    eyebrow: 'PRACTICE & OPS',
    dotColor: 'bg-cyan-600',
    title: 'Workflow & Operations',
    subtitle:
      'Proven ability to coordinate campus technology initiatives, manage timelines, and present specs clearly.',
    items: [
      {
        name: 'Git / GitHub Versioning',
        level: 88,
        bold: true,
        note: 'Branch workflows, clean commit history, and collaborative repository reviews.',
      },
      {
        name: 'REST APIs & Webhook Integration',
        level: 84,
        note: 'Member auth endpoints, JWT session verification, and WhatsApp notification hooks.',
      },
      {
        name: 'Organizational Project Leadership',
        level: 90,
        note: 'Leading student developer operations at UKM Cakrawala and campus committee teams.',
      },
      {
        name: 'Technical Documentation & Specs',
        level: 85,
        note: 'Clear architectural briefs, onboarding runbooks, and stakeholder handoffs.',
      },
    ],
  },
];

export interface ExperienceItem {
  id: string;
  period: string;
  isCurrent: boolean;
  location: string;
  organization: string;
  department: string;
  role: string;
  summary: string;
  tags: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'ukm-cakrawala',
    period: '2026 — PRESENT',
    isCurrent: true,
    location: 'JAKARTA, INDONESIA',
    organization: 'UKM CAKRAWALA',
    department: 'Institut Teknologi PLN',
    role: 'Lead Web Developer & Tech Coordinator',
    summary:
      "Spearheading the continuous development of the organization's official digital presence. Engineered membership registry forms connected with automated WhatsApp verification bots, reducing manual onboarding validation time by 65%. Maintained site reliability and managed role-based credentials for departmental leaders.",
    tags: ['Fullstack Web', 'API Automation', 'Leadership'],
  },
  {
    id: 'sman-18',
    period: '2024 — 2025',
    isCurrent: false,
    location: 'MAKASSAR, INDONESIA',
    organization: 'SMAN 18 MAKASSAR',
    department: 'School Cultural Festival',
    role: 'Event & Sponsorship Committee Coordinator',
    summary:
      'Coordinated logistical planning, brand sponsor communications, and on-stage digital presentation assets for a multi-day high school arts and cultural exhibition attended by over 800+ students and visitors. Managed scheduling spreadsheets and team delegations.',
    tags: ['Event Direction', 'Sponsorship Negotiation', 'Stage Coordination'],
  },
];
