/**
 * Central portfolio data — generated from Sushmita's resume (Sushmita_dasari.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Gurleen Kaur Bhatia',
  displayName: 'Gurleen Kaur Bhatia',
  firstName: 'GURLEEN',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A BHATIA ORIGINAL',
  role: 'AI/ML Engineer',
tagline: ['AI / ML', 'Generative AI', 'Software Engineering'],
intro:
  'A B.Tech Computer Science & Engineering student at NIT Agartala (CGPA 9.28/10) focused on AI/ML, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG) and optimization algorithms. Building multi-agent AI systems, offline predictive copilots and quantum-inspired routing solutions using Python, Java, TensorFlow, PyTorch, React and Next.js.',
location: 'Rajpura, Punjab, India',
email: 'khushibhatia5555@gmail.com',
links: {
  linkedin: 'https://linkedin.com/in/gurleen-kaur-bhatia-907b23293',
  github: 'https://github.com/gurleen55555',
  leetcode: 'https://leetcode.com/u/G8ThpK5j53',
},
resumePdf: '/assets/Gurleen_Kaur_Bhatia_Resume_ATS.pdf',
portrait: {
  src: '/assets/portrait-720.webp',
  srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
  alt: 'Portrait of Gurleen Kaur Bhatia',
},
interests: ['Artificial Intelligence', 'Generative AI', 'Large Language Models', 'RAG', 'Optimization Algorithms'],
};

export const education = [
  {
    school: 'National Institute of Technology, Agartala',
    place: 'Agartala, Tripura',
    degree: 'Bachelor of Technology — Computer Science and Engineering',
    period: '2025 – 2029',
    score: 'CGPA 9.28/10',
  },
  {
    school: 'C.M. Public School',
    place: 'India',
    degree: 'Higher Secondary Education',
    period: 'Completed before 2025',
    score: '95%',
  },
  {
    school: 'Holy Angels School',
    place: 'India',
    degree: 'Secondary Education',
    period: 'Completed before 2023',
    score: '97%',
  },
];


export const experience = [
  {
    company: 'Google',
    role: 'Google Student Ambassador',
    place: 'India',
    period: 'May 2026 – Present',
    points: [
      'Reached 200+ participants through approximately five campaigns and sessions on AI, technical skills and Gemini; created 6–7 social media posts.',
      'Supported approximately 50–60 girls with technical guidance, AI awareness and community engagement.',
    ],
  },
  {
    company: 'Levitate Labs',
    role: 'Technical Operations Assistant',
    place: 'Remote',
    period: 'May 2026 – Present',
    points: [
      'Supported CRM, automation, database, API and backend workflows, along with sales-supporting technical systems.',
      'Contributed to an estimated 40% improvement in sales efficiency through lead handling, reporting and workflow optimization.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'quantum-traffic-optimization',
    title: 'Quantum-Inspired Traffic Optimization',
    year: '2026',
    genre: 'AI • Optimization • Smart Mobility',
    logline:
      'A quantum-inspired multi-vehicle routing engine designed to optimize travel across complex urban road networks.',
    stack: ['Python', 'NumPy', 'QPSO', 'NetworkX', 'OSMnx'],
    build: [
      'Developing a Quantum Particle Swarm Optimization (QPSO) routing engine on urban road graphs containing 600+ nodes.',
      'Building a five-vehicle, eight-destination routing solution for logistics scenarios covering normal traffic, rush hour and accidents, optimizing travel time, distance, congestion and emissions.',
      'Benchmarking QPSO against Dijkstra, A*, Genetic Algorithm and Ant Colony Optimization over 30 runs per algorithm to compare fitness, runtime and convergence.',
    ],
    features: [
      'Quantum Particle Swarm Optimization (QPSO)',
      '600+ node urban road graphs',
      'Five vehicles and eight destinations',
      'Normal, rush-hour and accident scenarios',
      'Benchmarking against Dijkstra, A*, GA and ACO',
    ],
    metrics: [
      { value: '600+', label: 'road graph nodes' },
      { value: '5', label: 'vehicles in routing scenario' },
      { value: '8', label: 'destinations' },
      { value: '30', label: 'runs per algorithm' },
    ],
    github: 'https://github.com/rudrakshsharma1312-gif/Sih-new-login',
    palette: {
      from: '#2a0610',
      via: '#7a0f24',
      to: '#0b0710',
      accent: '#ff3d5a',
    },
    motif: 'flow',
  },
  {
    id: 'zentro-ai',
    title: 'Zentro AI',
    year: '2026',
    genre: 'Multi-Agent AI • Full-Stack • Knowledge Graphs',
    logline:
      'A multi-agent Business Operating System built for the Microsoft Agents League 2026 Reasoning Agents Track.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Knowledge Graphs'],
    build: [
      'Built an individual multi-agent Business Operating System for Microsoft Agents League 2026 (Reasoning Agents Track).',
      'Developed five AI agents for reasoning, executive insights, lead intelligence, revenue risk and meeting intelligence, powered by a Company Brain knowledge graph.',
      'Added citations, confidence scores, explainable reasoning paths and an ontology structure; delivered documentation and a local demo, with build and lint checks passing.',
    ],
    features: [
      'Five specialized AI agents',
      'Company Brain knowledge graph',
      'Executive insights and lead intelligence',
      'Revenue-risk and meeting intelligence',
      'Citations, confidence scores and explainable reasoning paths',
    ],
    metrics: [
      { value: '5', label: 'specialized AI agents' },
      { value: '2026', label: 'Microsoft Agents League' },
    ],
    github: 'https://github.com/gurleen55555/zentro-ai-league',
    palette: {
      from: '#1a0d02',
      via: '#8a4a07',
      to: '#0a0806',
      accent: '#ffb547',
    },
    motif: 'tenants',
  },
  {
    id: 'astragrid-ai',
    title: 'AstraGrid AI',
    year: '2026',
    genre: 'LLM • RAG • Predictive AI',
    logline:
      'An offline predictive copilot for secure, air-gapped environments, combining local LLM inference with telemetry-based failure prediction.',
    stack: [
      'Python',
      'Streamlit',
      'TensorFlow/Keras',
      'LSTM',
      'scikit-learn',
      'Ollama',
      'Phi-3 Mini',
      'RAG',
    ],
    build: [
      'Built an offline predictive copilot with a three-member team for Bharatiya Antariksh Hackathon 2026, designed for secure air-gapped environments.',
      'Implemented local Phi-3 Mini inference and retrieval-grounded RAG runbook workflows for Issue-Cause-Action recommendations without cloud APIs.',
      'Trained an LSTM on 2,000 synthetic telemetry records, achieving 85.93% accuracy, 0.85 macro F1 and 0.97 failure recall.',
    ],
    features: [
      'Offline Phi-3 Mini inference',
      'Retrieval-Augmented Generation (RAG) runbooks',
      'Issue-Cause-Action recommendations',
      'LSTM telemetry failure prediction',
      'Designed for air-gapped environments',
    ],
    metrics: [
      { value: '2,000', label: 'synthetic telemetry records' },
      { value: '85.93%', label: 'model accuracy' },
      { value: '0.85', label: 'macro F1' },
      { value: '0.97', label: 'failure recall' },
    ],
    github: 'https://github.com/gurleen55555/AirGappedCopilot',
    palette: {
      from: '#04121f',
      via: '#0f4c6e',
      to: '#05080d',
      accent: '#4cc9ff',
    },
    motif: 'shield',
  },
];
export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'sih-qualifier',
    title: 'College Internal Round Qualifier',
    org: 'Smart India Hackathon 2026',
    detail:
      'Cleared the college internal selection round with the Quantum-Inspired Traffic Optimization project.',
    laurel: 'SIH 2026',
  },
  {
    id: 'dsai-club',
    title: 'Core Member',
    org: 'DSAI Club, NIT Agartala',
    detail:
      'Core member of the institute’s largest technical club; hosted DSAI Orientation 2026.',
    laurel: 'Leadership',
  },
  {
    id: 'nari-udaan',
    title: 'Technical Team Member',
    org: 'Nari Udaan',
    detail:
      'Supported technical-skills and digital-learning initiatives reaching approximately 100 girls.',
    laurel: 'Community Impact',
  },
  {
    id: 'mun-best-delegate',
    title: 'Best Delegate',
    org: 'KACE-IX MUN',
    detail:
      'Received Best Delegate recognition at an event with approximately 150 participants.',
    laurel: 'Best Delegate',
  },
  {
    id: 'mun-verbal-mention',
    title: 'Verbal Mention',
    org: 'NITA-MUN',
    detail:
      'Received a Verbal Mention at an event with approximately 200 delegates.',
    laurel: 'Verbal Mention',
  },
  {
    id: 'rewriting-the-code',
    title: 'Member',
    org: 'Rewriting the Code',
    detail:
      'Participates in technical learning, mentorship and women-in-technology programs.',
    laurel: 'Women in Tech',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  {
    issuer: 'AWS Educate',
    name: 'Introduction to Machine Learning',
    link: '',
  },
  {
    issuer: 'AWS Educate',
    name: 'Introduction to Generative AI',
    link: '',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Core programming & development',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary for AI/ML' },
      { name: 'Java', mono: 'Jv' },
      { name: 'C', mono: 'C' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'Swift', mono: 'Sw' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    subtitle: 'Intelligent systems & predictive modeling',
    skills: [
      { name: 'Machine Learning', mono: 'ML' },
      { name: 'Deep Learning', mono: 'DL' },
      { name: 'TensorFlow / Keras', mono: 'Tf' },
      { name: 'PyTorch', mono: 'Pt' },
      { name: 'scikit-learn', mono: 'Sk' },
      { name: 'Pandas', mono: 'Pd' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'LSTM', mono: 'Ls' },
    ],
  },
  {
    id: 'generative-ai',
    title: 'Generative AI',
    subtitle: 'LLMs, retrieval & agentic systems',
    skills: [
      { name: 'Large Language Models', mono: 'LL' },
      { name: 'RAG', mono: 'Rg' },
      { name: 'Embeddings', mono: 'Em' },
      { name: 'Semantic Search', mono: 'Ss' },
      { name: 'Knowledge Graphs', mono: 'Kg' },
      { name: 'Ollama', mono: 'Ol' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Modern web interfaces',
    skills: [
      { name: 'Next.js', mono: 'Nx' },
      { name: 'React', mono: 'Re' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'Streamlit', mono: 'St' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Data',
    subtitle: 'Storage and data processing',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MySQL', mono: 'My' },
      { name: 'Supabase', mono: 'Sb' },
      { name: 'Pandas', mono: 'Pd' },
      { name: 'NumPy', mono: 'Np' },
    ],
  },
  {
    id: 'optimization',
    title: 'Algorithms & Optimization',
    subtitle: 'Routing, search & metaheuristics',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'QPSO', mono: 'Qp' },
      { name: 'Dijkstra', mono: 'Di' },
      { name: 'A* Search', mono: 'A*' },
      { name: 'Genetic Algorithm', mono: 'GA' },
      { name: 'Ant Colony Optimization', mono: 'AC' },
      { name: 'NetworkX', mono: 'Nx' },
      { name: 'OSMnx', mono: 'Om' },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    subtitle: 'Building, testing & collaboration',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'VS Code', mono: 'Vc' },
      { name: 'Jupyter', mono: 'Jp' },
    ],
  },
];
/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: [
    'Quantum-Inspired Traffic Optimization',
    'AstraGrid AI',
    'AWS Educate: Introduction to Machine Learning',
  ],
  Java: ['Programming language proficiency'],
  C: ['Programming language proficiency'],
  SQL: ['PostgreSQL', 'MySQL', 'Supabase'],
  TypeScript: ['Zentro AI', 'Next.js and React development'],
  Swift: ['Programming language proficiency'],
  'Machine Learning': [
    'AstraGrid AI',
    'AWS Educate: Introduction to Machine Learning',
  ],
  'Deep Learning': ['AstraGrid AI', 'LSTM telemetry prediction'],
  'TensorFlow / Keras': ['AstraGrid AI'],
  PyTorch: ['Technical skill listed on resume'],
  'scikit-learn': ['AstraGrid AI'],
  Pandas: ['Data processing and analysis'],
  NumPy: ['Quantum-Inspired Traffic Optimization'],
  LSTM: ['AstraGrid AI'],
  'Large Language Models': ['AstraGrid AI', 'Local Phi-3 Mini inference'],
  RAG: ['AstraGrid AI', 'Retrieval-grounded runbook workflows'],
  Embeddings: ['Technical skill listed on resume'],
  'Semantic Search': ['Technical skill listed on resume'],
  'Knowledge Graphs': ['Zentro AI', 'Company Brain knowledge graph'],
  Ollama: ['AstraGrid AI', 'Local Phi-3 Mini inference'],
  'Next.js': ['Zentro AI'],
  React: ['Zentro AI'],
  Streamlit: ['AstraGrid AI'],
  PostgreSQL: ['Technical skill listed on resume'],
  MySQL: ['Technical skill listed on resume'],
  Supabase: ['Zentro AI'],
  DSA: ['DSAI Club, NIT Agartala'],
  QPSO: ['Quantum-Inspired Traffic Optimization', 'SIH 2026 College Internal Round Qualifier'],
  Dijkstra: ['Quantum-Inspired Traffic Optimization'],
  'A* Search': ['Quantum-Inspired Traffic Optimization'],
  'Genetic Algorithm': ['Quantum-Inspired Traffic Optimization'],
  'Ant Colony Optimization': ['Quantum-Inspired Traffic Optimization'],
  NetworkX: ['Quantum-Inspired Traffic Optimization'],
  OSMnx: ['Quantum-Inspired Traffic Optimization'],
  Git: ['GitHub project repositories'],
  GitHub: [
    'Zentro AI',
    'AstraGrid AI',
    'Quantum-Inspired Traffic Optimization',
  ],
  'VS Code': ['Development tool listed on resume'],
  Jupyter: ['Development tool listed on resume'],
};
export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2025 – 2025',
    synopsis:
      'The beginning of the journey at National Institute of Technology, Agartala, pursuing Computer Science and Engineering.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Beginning',
        description:
          'Started a Bachelor of Technology in Computer Science and Engineering at NIT Agartala.',
        tags: ['B.Tech', 'Computer Science', 'NIT Agartala'],
        runtime: '2025 – 2029',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'The AI Explorer',
    period: '2025 – Present',
    synopsis:
      'Building a strong foundation in programming, machine learning, deep learning and generative AI while maintaining a 9.28 CGPA.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description:
          'Pursuing Computer Science and Engineering at NIT Agartala with a CGPA of 9.28/10.',
        tags: ['B.Tech', 'CSE', 'CGPA 9.28/10'],
        runtime: '2025 – 2029',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The AI Researcher',
        description:
          'Exploring machine learning, deep learning, LLMs, Retrieval-Augmented Generation and knowledge graphs.',
        tags: ['AI/ML', 'LLMs', 'RAG', 'Knowledge Graphs'],
        runtime: 'Ongoing',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Problem Solver',
        description:
          'Applying algorithms and optimization techniques, including QPSO, Dijkstra, A* search, Genetic Algorithms and Ant Colony Optimization.',
        tags: ['Algorithms', 'QPSO', 'Optimization'],
        runtime: 'Ongoing',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Learning to Build',
    period: '2026',
    synopsis:
      'Turning technical knowledge into practical AI applications, predictive systems and full-stack products.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Optimization Engineer',
        description:
          'Developed Quantum-Inspired Traffic Optimization for Smart India Hackathon 2026, working with urban road graphs containing 600+ nodes and multi-vehicle routing scenarios.',
        tags: ['Python', 'QPSO', 'NetworkX', 'OSMnx'],
        runtime: '2026',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The AI Architect',
        description:
          'Built Zentro AI, a multi-agent Business Operating System featuring five specialized agents powered by a Company Brain knowledge graph.',
        tags: ['Next.js', 'React', 'TypeScript', 'Supabase'],
        runtime: '2026',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'The Predictive AI Builder',
        description:
          'Built AstraGrid AI, an offline predictive copilot using local LLM inference, RAG workflows and LSTM-based telemetry failure prediction.',
        tags: ['TensorFlow/Keras', 'LSTM', 'Ollama', 'RAG'],
        runtime: '2026',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Leadership & Impact',
    period: '2026 – Present',
    synopsis:
      'Growing through technical communities, women-in-tech initiatives, student engagement and real-world operations.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Ambassador',
        description:
          'As a Google Student Ambassador, reached 200+ participants through AI, technical-skills and Gemini campaigns and sessions.',
        tags: ['Google', 'Community', 'AI Awareness'],
        runtime: 'May 2026 – Present',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Operations Specialist',
        description:
          'Working remotely with Levitate Labs on CRM, automation, databases, API/backend workflows and sales support.',
        tags: ['Technical Operations', 'Automation', 'Databases'],
        runtime: 'May 2026 – Present',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'The Community Mentor',
        description:
          'Contributing to Nari Udaan’s technical-skills and digital-learning initiatives and serving as a core member of the DSAI Club at NIT Agartala.',
        tags: ['Nari Udaan', 'DSAI Club', 'Women in Tech'],
        runtime: '2026 – Present',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis:
      'Preparing for the next chapter through deeper AI/ML expertise, open-source contributions and impactful engineering projects.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description:
          'Continuing to explore advanced AI/ML, generative AI, optimization algorithms and opportunities to build impactful technology.',
        tags: ['AI/ML', 'Generative AI', 'Research', 'Open Source'],
        runtime: 'In progress',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  {
    label: 'Primary AI/ML language',
    title: 'Python',
    detail: 'Machine learning • Deep learning • Optimization',
    palette: amber,
  },
  {
    label: 'Featured project',
    title: 'AstraGrid AI',
    detail: '85.93% accuracy • 0.97 failure recall',
    palette: crimson,
  },
  {
    label: 'National hackathon',
    title: 'Smart India Hackathon 2026',
    detail: 'College Internal Round Qualifier',
    palette: ocean,
  },
  {
    label: 'Multi-agent AI',
    title: 'Zentro AI',
    detail: 'Five specialized agents • Company Brain knowledge graph',
    palette: violet,
  },
  {
    label: 'Academic high',
    title: 'CGPA 9.28/10',
    detail: 'B.Tech CSE • NIT Agartala',
    palette: jade,
  },
  {
    label: 'AI credential',
    title: 'AWS Educate',
    detail: 'Introduction to Machine Learning',
    palette: amber,
  },
  {
    label: 'Optimization project',
    title: 'Quantum-Inspired Traffic Optimization',
    detail: '600+ road graph nodes • QPSO routing',
    palette: crimson,
  },
  {
    label: 'Student leadership',
    title: 'Google Student Ambassador',
    detail: 'Reached 200+ participants through campaigns and sessions',
    palette: ocean,
  },
  {
    label: 'Women in tech',
    title: 'Nari Udaan',
    detail: 'Technical skills and digital learning initiatives',
    palette: jade,
  },
  {
    label: 'Current focus',
    title: 'Generative AI',
    detail: 'LLMs • RAG • Knowledge Graphs • AI Agents',
    palette: violet,
  },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · Computer Science',
    lines: [
      'National Institute of Technology, Agartala',
      '2025 – 2029',
    ],
    chips: ['CGPA 9.28/10'],
  },
  {
    kicker: 'Skills',
    title: 'AI first.',
    lines: [
      'Python, Java, C, SQL, TypeScript, Swift',
      'TensorFlow, PyTorch · Next.js, React · PostgreSQL, MySQL, Supabase',
    ],
    chips: ['Python', 'AI/ML', 'LLMs', 'RAG', 'React', 'TypeScript'],
  },
  {
    kicker: 'Experience',
    title: 'Building & Leading',
    lines: [
      'Google Student Ambassador · May 2026 – Present',
      'Technical Operations Assistant · Levitate Labs',
      'AI awareness · Automation · Technical operations',
    ],
  },
  {
    kicker: 'Projects',
    title: 'Three AI Originals',
    lines: [
      'AstraGrid AI — 85.93% accuracy, 0.97 failure recall',
      'Zentro AI — Five specialized agents powered by a knowledge graph',
      'Quantum-Inspired Traffic Optimization — 600+ road graph nodes',
    ],
  },
  {
    kicker: 'Achievements',
    title: 'Making an Impact',
    lines: [
      'College Internal Round Qualifier — Smart India Hackathon 2026',
      'Core Member — DSAI Club, NIT Agartala',
      'Best Delegate — KACE-IX MUN · Verbal Mention — NITA-MUN',
    ],
  },
  {
    kicker: 'Certified',
    title: 'AI Learning Path',
    lines: [
      'AWS Educate — Introduction to Machine Learning',
      'AWS Educate — Introduction to Generative AI',
    ],
  },
  {
    kicker: 'Current mission',
    title: 'Building what matters',
    lines: [
      'Generative AI · Machine Learning · Multi-Agent Systems',
      'Open Source · Research · Impactful Engineering',
    ],
  },
];

export type ProfileId = 'gurleen' | 'recruiter' | 'developer' | 'creative';

export type SectionId =
  | 'about'
  | 'journey'
  | 'originals'
  | 'picks'
  | 'skills'
  | 'moments'
  | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'gurleen',
    name: 'Gurleen',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};