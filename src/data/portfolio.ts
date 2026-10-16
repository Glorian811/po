/**
 * Central portfolio data — generated from Sushmita's resume (Sushmita_dasari.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Sai Ganesh',
  displayName: 'Sai Ganesh',
  firstName: 'Sai',
  seriesTag: 'Portfolio',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A GANESH SAI ORIGINAL',
  role: 'FOUNDER AND MANAGING DIRECTOR',
  tagline: ["GOLDMAN'S MARSHALL'S GROUP OF COMPANIES"],
  intro:
    'A Bangalore-based civil contractor and entrepreneur with over 7 years of experience leading monumental infrastructure projects. Starting at age 18, I have overseen end-to-end planning, design, and execution across highways, road tunnels, irrigation canals, lift irrigation systems, aqueducts, and thermal and hydro power plants.',
  location: 'Bangalore,Karnataka,India',
  email: 'ganeshsai261198@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/sai-ganesh-b743a0263?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    github: 'https://github.com/goldmansmarshalls',
  },
  resumePdf: '/assets/ganeshsai.pdf',
  portrait: {
    src: 'public/assets/sai ganesh.HEIC',
    srcSet: 'public/assets/sai ganesh.HEIC',
    alt: 'Portrait of Sai Ganesh',
  },
  interests: ['System Design', 'Cloud Computing (AWS)', 'Machine Learning'],
};

export const education = [
  {
    Company: "Goldman's Marshall's Group of Companies",
    place: 'Pan-India',
    Designation: 'Founder & Managing Director — Large-Scale Civil Contracting',
    period: '2024 – Present',
    Exp: '7+ Years Experience in construction',
  },
  {
    Company: 'Iha Constructions',
    place: 'Pan-India',
    degree: 'Highways, Road Tunnels, Aqueducts, Irrigation & Power Plants',
    period: '2022 - 2024',
    Exp: 'I have overseen end-to-end planning, design, and execution across highways, road tunnels, irrigation canals, lift irrigation systems, aqueducts, and thermal and hydro power plants.',
  },
];

export const experience = [
  {
    company: "Goldman's Marshall's Group of Companies",
    role: 'Founder and Managing Director',
    place: 'Bangalore, Karnataka',
    period: '2018 – Present',
    points: [
      'Over 7 years of leadership in the large-scale civil construction industry, overseeing complex infrastructure projects from planning and design through final completion.',
      'Executed multifaceted domains including highways, road tunnels, irrigation canals, lift irrigation systems, aqueducts, thermal power plants, and hydro power plants.',
      'Directed cross-functional teams, large-scale resource allocation, and strict timelines to deliver high-standard infrastructure milestones.',
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
    id: 'highways-road-tunnels',
    title: 'Highways & Road Tunnels',
    year: '2025',
    genre: 'TRANSPORTATION • TUNNELING • CIVIL',
    logline: 'End-to-end execution of multi-lane highways and complex subterranean road tunnels.',
    stack: ['Highway Engineering', 'Road Tunnels', 'Earthworks', 'Heavy Civil'],
    build: [
      'Directed full-lifecycle execution from initial site planning and design coordination to final completion for major highway corridors and road tunnel infrastructure.',
      'Mobilized large-scale machinery, multi-disciplinary engineering teams, and strict quality controls to deliver durable transport networks on schedule.',
    ],
    features: [
      'Multi-lane highway corridor construction',
      'Subterranean road tunnel excavation & lining',
      'End-to-end planning, design & execution',
      '24/7 site operations and resource management',
    ],
    metrics: [
      { value: '7+ Yrs', label: 'sector leadership' },
      { value: '100%', label: 'end-to-end execution' },
      { value: 'Pan-India', label: 'operational scale' },
      { value: '24/7', label: 'site operations' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'irrigation-aqueducts',
    title: 'Irrigation Canals & Aqueducts',
    year: '2024',
    genre: 'WATER INFRASTRUCTURE • AQUEDUCTS',
    logline: 'Large-scale irrigation canals, lift irrigation systems, and reinforced aqueduct networks.',
    stack: ['Irrigation Canals', 'Lift Irrigation', 'Aqueducts', 'Hydraulic Structures'],
    build: [
      'Executed monumental water transport projects including expansive irrigation canal networks, high-capacity lift irrigation systems, and structural aqueducts.',
      'Coordinated complex hydraulic engineering requirements, massive earthmoving operations, and concrete structures across challenging terrains.',
    ],
    features: [
      'Main and distributary irrigation canals',
      'High-capacity lift irrigation pumping & delivery systems',
      'Elevated aqueduct structures',
      'High-standard structural durability and flow efficiency',
    ],
    metrics: [
      { value: '3', label: 'core water domains' },
      { value: 'Large-Scale', label: 'canal & aqueduct works' },
      { value: 'High', label: 'structural standards' },
    ],
    palette: { from: '#071a2c', via: '#0d3b66', to: '#050b14', accent: '#38bdf8' },
    motif: 'flow',
  },
  {
    id: 'power-plant-infrastructure',
    title: 'Thermal & Hydro Power Plants',
    year: '2024',
    genre: 'ENERGY • THERMAL • HYDRO POWER',
    logline: 'Critical civil and structural construction for thermal and hydroelectric power generation facilities.',
    stack: ['Thermal Power Plants', 'Hydro Power Plants', 'Industrial Civil', 'Structural Execution'],
    build: [
      'Delivered heavy civil and structural works for both thermal power plants and hydroelectric power facilities with uncompromising safety and precision.',
      'Integrated multi-team workflows, rigorous safety protocols, and tight project timelines to support high-capacity energy infrastructure.',
    ],
    features: [
      'Thermal power plant civil foundations & structures',
      'Hydroelectric power plant infrastructure',
      'Heavy-duty industrial concrete & structural works',
      'Strict adherence to engineering and safety standards',
    ],
    metrics: [
      { value: '2', label: 'power sectors (Thermal & Hydro)' },
      { value: 'Zero', label: 'compromise on quality' },
      { value: 'End-to-End', label: 'project oversight' },
    ],
    palette: { from: '#1f1605', via: '#5c3d08', to: '#0c0904', accent: '#f59e0b' },
    motif: 'tenants',
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
    id: 'young-talents-feature',
    title: 'Featured in Discovering Young Talents',
    org: 'Monthly Feature (Jan 2025)',
    detail: 'Recognized at age 25 by Strategy Advisor & Leadership Coach Devendra Saini for 7+ years of excellence in large-scale civil construction.',
    laurel: 'Industry Feature',
  },
  {
    id: 'multi-domain-execution',
    title: '7+ Major Infrastructure Domains',
    org: "Goldman's Marshall's Group",
    detail: 'Successfully executed complex works across highways, road tunnels, irrigation canals, lift irrigation systems, aqueducts, and thermal & hydro power plants.',
    laurel: 'Pan-India Scale',
  },
  {
    id: 'entrepreneurial-journey',
    title: '7+ Years of Industry Leadership',
    org: 'Started Career at Age 18',
    detail: 'Grew from a hands-on site role at 18 into managing monumental, end-to-end civil contracting operations from planning to completion.',
    laurel: 'Founder Journey',
  },
  {
    id: 'operational-excellence',
    title: '24/7 Execution & High Standards',
    org: 'End-to-End Project Delivery',
    detail: 'Renowned among clients and peers for round-the-clock dedication, uniting large cross-functional teams, resources, and strict timelines.',
    laurel: 'Client Trust',
  },
];
export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Civil Contracting', name: 'Large-Scale Highway & Road Tunnel Execution', link: '#' },
  { issuer: 'Water Infrastructure', name: 'Irrigation Canals, Lift Irrigation & Aqueducts', link: '#' },
  { issuer: 'Power Sector', name: 'Thermal & Hydroelectric Power Plant Civil Works', link: '#' },
  { issuer: 'Project Management', name: 'End-to-End Planning, Design & Turnkey Execution', link: '#' },
  { issuer: 'Operations & Safety', name: '24/7 Site Operations & High-Standard Quality Compliance', link: '#' },
];
export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'transportation',
    title: 'Transportation & Tunneling',
    subtitle: 'Heavy civil corridor & subterranean infrastructure',
    skills: [
      { name: 'Highways', mono: 'HWY', note: 'Primary' },
      { name: 'Road Tunnels', mono: 'TNL' },
      { name: 'Earthworks', mono: 'ERW' },
    ],
  },
  {
    id: 'water-infrastructure',
    title: 'Water & Irrigation Systems',
    subtitle: 'Hydraulic structures & water transport networks',
    skills: [
      { name: 'Irrigation Canals', mono: 'CNL' },
      { name: 'Lift Irrigation', mono: 'LFT' },
      { name: 'Aqueducts', mono: 'AQD' },
    ],
  },
  {
    id: 'energy-power',
    title: 'Energy & Power Plants',
    subtitle: 'Industrial civil & structural execution',
    skills: [
      { name: 'Thermal Power Plants', mono: 'THM' },
      { name: 'Hydro Power Plants', mono: 'HYD' },
    ],
  },
  {
    id: 'execution-leadership',
    title: 'Project Execution & Leadership',
    subtitle: 'Concept-to-completion contracting management',
    skills: [
      { name: 'Planning & Design', mono: 'PLN' },
      { name: 'Resource Mobilization', mono: 'RSC' },
      { name: '24/7 Site Operations', mono: 'OPS' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Highways: ['Highways & Road Tunnels', "Goldman's Marshall's Group"],
  'Road Tunnels': ['Highways & Road Tunnels', 'Subterranean Execution'],
  Earthworks: ['Highways & Road Tunnels', 'Irrigation Canals & Aqueducts'],
  'Irrigation Canals': ['Irrigation Canals & Aqueducts', 'Pan-India Infrastructure'],
  'Lift Irrigation': ['Irrigation Canals & Aqueducts', 'High-Capacity Delivery Systems'],
  Aqueducts: ['Irrigation Canals & Aqueducts', 'Hydraulic Structures'],
  'Thermal Power Plants': ['Thermal & Hydro Power Plants', 'Industrial Civil Works'],
  'Hydro Power Plants': ['Thermal & Hydro Power Plants', 'Hydroelectric Infrastructure'],
  'Planning & Design': ['7+ Years Experience', 'End-to-End Project Delivery'],
  'Resource Mobilization': ["Goldman's Marshall's Group", 'Cross-Functional Teams'],
  '24/7 Site Operations': ['Featured in Discovering Young Talents', 'High-Standard Compliance'],
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
    period: '2018 – 2021',
    synopsis: 'Starting at age 18 in hands-on construction operations and rapidly scaling into large civil projects.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Ground Zero at 18',
        description: 'Began career at age 18 in hands-on site operations, mastering field execution, resource management, and civil engineering fundamentals from the ground up.',
        tags: ['Site Operations', 'Civil Execution'],
        runtime: '2018 – 2019',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'Scaling to Major Corridors',
        description: 'Transitioned into managing large-scale highway corridors, earthworks, and irrigation canal networks with round-the-clock site dedication.',
        tags: ['Highways', 'Irrigation Canals'],
        runtime: '2019 – 2021',
        palette: crimson,
      },
    ],
  },
  {
    number: 2,
    title: 'Monumental Infrastructure',
    period: '2022 – 2024',
    synopsis: 'Executing multi-domain infrastructure across road tunnels, aqueducts, lift irrigation, and power plants.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Tunnels & Hydraulic Networks',
        description: 'Led end-to-end planning and execution for subterranean road tunnels, high-capacity lift irrigation systems, and elevated aqueducts at Iha Constructions.',
        tags: ['Road Tunnels', 'Aqueducts', 'Lift Irrigation'],
        runtime: '2022 – 2023',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'Powering Progress',
        description: 'Expanded portfolio into heavy industrial civil works for thermal power plants and hydroelectric power generation facilities.',
        tags: ['Thermal Power', 'Hydro Power'],
        runtime: '2023 – 2024',
        palette: violet,
      },
    ],
  },
  {
    number: 3,
    title: "Goldman's Marshall's Era",
    period: '2024 – Present',
    synopsis: "Leading Goldman's Marshall's Group of Companies across Pan-India infrastructure domains.",
    episodes: [
      {
        code: 'S03 E01',
        title: 'Founder & Managing Director',
        description: "Spearheading Pan-India civil contracting and large-scale infrastructure delivery under Goldman's Marshall's Group of Companies.",
        tags: ['Founder', 'Pan-India', 'Turnkey Projects'],
        runtime: '2024 – Present',
        palette: jade,
      },
      {
        code: 'S03 E02',
        title: 'Discovering Young Talents Feature',
        description: 'Featured in January 2025 for 7+ years of relentless work ethic and leadership in monumental civil construction by age 25.',
        tags: ['Industry Recognition', 'Leadership'],
        runtime: 'Jan 2025',
        palette: crimson,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Core Industry', title: 'Highways & Tunnels', detail: '7+ years of monumental civil execution', palette: amber },
  { label: 'Featured Milestone', title: 'Young Talents Feature', detail: 'Recognized at age 25 in Jan 2025 edition', palette: crimson },
  { label: 'Water Networks', title: 'Irrigation & Aqueducts', detail: 'Canals, lift systems & structural aqueducts', palette: ocean },
  { label: 'Energy Sector', title: 'Thermal & Hydro', detail: 'Heavy industrial civil infrastructure', palette: violet },
  { label: 'Leadership', title: "Goldman's Marshall's", detail: 'Founder & Managing Director', palette: jade },
  { label: 'Operational Scale', title: 'Pan-India', detail: 'End-to-end planning to completion', palette: amber },
  { label: 'Work Ethic', title: '24/7 Dedication', detail: 'Driven by passion and relentless drive', palette: crimson },
  { label: 'Core Expertise', title: 'Turnkey Execution', detail: 'Large-scale multi-domain projects', palette: ocean },
  { label: 'Quality Standard', title: 'Zero Compromise', detail: 'High standards and strict safety controls', palette: jade },
  { label: 'Current Focus', title: 'Infrastructure Growth', detail: 'Expanding monumental civil projects', palette: violet },
];
/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Leadership & Enterprise',
    title: "Goldman's Marshall's Group",
    lines: ['Founder & Managing Director', 'Pan-India Large-Scale Civil Contracting'],
    chips: ['Civil Contracting', 'Turnkey Projects', 'Infrastructure'],
  },
  {
    kicker: 'Experience & Track Record',
    title: '7+ Years in Construction',
    lines: ['Highways, Road Tunnels, Irrigation Canals & Aqueducts', 'Thermal & Hydroelectric Power Plant Infrastructure'],
    chips: ['Highways', 'Tunnels', 'Irrigation', 'Power Plants'],
  },
  {
    kicker: 'Industry Recognition',
    title: 'Featured in Young Talents',
    lines: ['Highlighted in January 2025 Monthly Feature', 'Recognized for relentless work ethic and leadership at age 25'],
    chips: ['Industry Feature', 'Leadership', 'Excellence'],
  },
];
export type ProfileId = 'saiganesh' | 'client' | 'partner' | 'visitor';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';
export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'saiganesh',
    name: 'Sai Ganesh',
    blurb: 'The complete infrastructure series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'client',
    name: 'Client / Partner',
    blurb: 'Projects, achievements & core capabilities first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'visitor',
    name: 'General Visitor',
    blurb: 'Highlights, milestones & leadership overview',
    color: '#ffb703',
    order: ['picks', 'originals', 'about', 'journey', 'skills', 'moments', 'story'],
  },
];
