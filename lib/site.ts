import type { Achievement, Experience, Project } from "@/lib/types";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://danielflockhart.com";

export const profile = {
  name: "Daniel Flockhart",
  shortName: "Daniel",
  role: "AI engineer, full-stack builder and startup operator",
  location: "United Kingdom",
  email: "0xdanielflockhart@gmail.com",
  description:
    "AI and software engineer building applied machine-learning systems, production web apps and ambitious technical products.",
  links: [
    { label: "GitHub", href: "https://github.com/DanielFlockhart", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/daniel-flockhart", external: true },
    { label: "Email", href: "mailto:0xdanielflockhart@gmail.com" },
  ],
};

export const projects: Project[] = [
  {
    slug: "ai-drug-discovery-pipeline",
    title: "AI Drug Discovery Pipeline",
    kicker: "Research platform for molecule generation and analysis",
    summary:
      "A multi-stage ML system combining ChemBERTa embeddings, natural-language data augmentation, autoencoders, transformer generation, reinforcement learning, RDKit validation and a researcher-facing web app.",
    description:
      "Built as a final-year dissertation project, this pipeline explored how deep learning and cheminformatics could improve the early-stage drug discovery process. The system represented molecules as SMILES strings, embedded them with ChemBERTa, used OpenAI models to augment effect and class labels, compressed representations with an autoencoder, generated candidates with transformer models, fine-tuned outputs using reinforcement learning and decoded generated vectors back into chemically valid SMILES. A Next.js/Tailwind frontend connected to a Python backend made the system easier for researchers to test and inspect.",
    category: "AI / ML Research",
    year: "2025",
    status: "Research",
    visibility: "published",
    featured: true,
    featuredOrder: 1,
    stack: ["Python", "PyTorch", "ChemBERTa", "RDKit", "OpenAI API", "Next.js", "Tailwind", "Flask", "Firebase", "Google Cloud"],
    highlights: [
      "Designed an end-to-end pipeline rather than an isolated model experiment.",
      "Used LLMs as a structured data augmentation layer for molecular effect and class labels.",
      "Validated generated molecules using RDKit, clustering, classifier predictions and novelty analysis.",
      "Built a usable frontend so technical and non-technical reviewers could interact with the system.",
    ],
    metrics: [
      { label: "Generated molecules analysed", value: "57k+" },
      { label: "Core dataset", value: "2.7k molecules" },
      { label: "Embedding size", value: "768D" },
    ],
    links: [
      { label: "Codebase", href: "https://github.com/DanielFlockhart/dxf297-drug-discovery-pipeline", external: true },
      { label: "Front-end demo", href: "https://www.eruditeindustries.com/", external: true },
    ],
  },
  {
    slug: "matched-stay",
    title: "Matched Stay",
    kicker: "Corporate accommodation booking platform",
    summary:
      "A web and mobile travel-tech platform for helping companies book and manage longer-term worker accommodation.",
    description:
      "Co-founded and led development of Matched Stay from concept to launch. The product required full-stack engineering, product design, client feedback loops, investor communication and pragmatic delivery under startup constraints. Built around Next.js, React Native, Node.js and Firebase, the platform handled accommodation search, enquiry workflows and booking-management flows for business users.",
    category: "Startup / Full-stack Product",
    year: "2023—Present",
    status: "Live",
    visibility: "published",
    featured: true,
    featuredOrder: 2,
    stack: ["Next.js", "React Native", "Node.js", "Firebase", "Google Cloud", "Tailwind", "Product Design"],
    highlights: [
      "Co-founded the company and owned the technical direction as CTO.",
      "Designed and shipped web and mobile product experiences.",
      "Balanced engineering work with client discovery, marketing, release events and investor conversations.",
      "Worked directly with non-technical stakeholders to translate messy operational needs into product flows.",
    ],
    metrics: [
      { label: "Role", value: "Co-founder / CTO" },
      { label: "Platforms", value: "Web + mobile" },
      { label: "Stage", value: "Launched" },
    ],
    links: [],
  },
  {
    slug: "digital-chemistry-research",
    title: "Digital Chemistry Research Internship",
    kicker: "Computer vision and ML for molecular skeletons",
    summary:
      "Research work exploring machine-learning architectures for digital chemistry, including autoencoder-based approaches for computer vision tasks.",
    description:
      "Worked with University of Birmingham researchers on machine-learning approaches for digital chemistry. The project involved experimenting with architectures, presenting findings to domain experts and producing research recommendations for future work.",
    category: "Research Internship",
    year: "2023",
    status: "Research",
    visibility: "published",
    featured: true,
    featuredOrder: 3,
    stack: ["Python", "Machine Learning", "Computer Vision", "Autoencoders", "Research Communication"],
    highlights: [
      "Applied machine-learning techniques to molecular skeleton representations.",
      "Reported findings to technical experts and recommended further experimentation.",
      "Built a proof-of-concept foundation for future digital chemistry pipelines.",
    ],
    metrics: [
      { label: "Domain", value: "Digital chemistry" },
      { label: "Focus", value: "ML + CV" },
      { label: "Output", value: "Research report" },
    ],
    links: [],
  },
  {
    slug: "reinforcement-learning-cars",
    title: "Reinforcement Learning Cars Learning to Drive",
    kicker: "Simulation project for autonomous driving behaviour",
    summary:
      "A reinforcement-learning experiment where simulated cars improved their driving behaviour through repeated attempts, reward feedback and parameter tuning.",
    description:
      "Built as an applied AI experiment to explore how agents can learn control policies inside a driving-style simulation. The project focused on the loop between environment design, reward shaping, training stability and visible learning progress as cars moved from poor early behaviour toward more controlled driving.",
    category: "AI / Reinforcement Learning",
    year: "2024",
    status: "Research",
    visibility: "published",
    featured: false,
    featuredOrder: 4,
    stack: ["Python", "Reinforcement Learning", "Simulation", "Neural Networks", "Experiment Design"],
    highlights: [
      "Designed a learning environment where progress could be inspected visually.",
      "Explored reward shaping, agent behaviour and training iteration rather than a static model demo.",
      "Used the project to connect AI theory with an interactive control problem.",
    ],
    metrics: [
      { label: "Domain", value: "Autonomous agents" },
      { label: "Method", value: "RL" },
      { label: "Output", value: "Driving simulation" },
    ],
    links: [],
  },
  {
    slug: "game-jams",
    title: "Game Jams",
    kicker: "Small games built under tight creative constraints",
    summary:
      "A collection of short-form game projects made around rapid prototyping, scope control, mechanics, polish and playable outcomes.",
    description:
      "Game jams were a way to practise finishing interactive work quickly: deciding on a small mechanic, building the loop, handling input and feedback, and getting to something playable before the deadline. The work sharpened practical judgement around scope, iteration and user experience.",
    category: "Creative Coding",
    year: "2021-2024",
    status: "Archived",
    visibility: "published",
    featured: false,
    featuredOrder: 5,
    stack: ["Game Design", "Prototyping", "JavaScript", "Python", "UI Feedback", "Rapid Iteration"],
    highlights: [
      "Built playable prototypes around strict time limits and simple mechanics.",
      "Practised the full loop from idea to interaction design, implementation and polish.",
      "Used constraints to make clearer tradeoffs about what mattered for a finished game.",
    ],
    metrics: [
      { label: "Format", value: "Game jams" },
      { label: "Focus", value: "Playable loops" },
      { label: "Pace", value: "Rapid builds" },
    ],
    links: [],
  },
  {
    slug: "assorted-phone-apps",
    title: "Assorted Phone Apps",
    kicker: "Mobile prototypes and app experiments",
    summary:
      "A set of smaller phone-app builds exploring mobile interfaces, user flows, data capture, notifications and practical product ideas.",
    description:
      "These projects sit around the edges of larger mobile work: lightweight app ideas, interface experiments and prototypes for testing how a product might feel on a phone. They helped develop a stronger sense of mobile navigation, compact UI design and the tradeoffs between prototype speed and production quality.",
    category: "Mobile Apps",
    year: "2022-2025",
    status: "Prototype",
    visibility: "published",
    featured: false,
    featuredOrder: 6,
    stack: ["React Native", "Mobile UI", "Firebase", "APIs", "Product Prototyping"],
    highlights: [
      "Explored phone-first interaction patterns and compact interface design.",
      "Built prototypes around real product ideas instead of isolated screen mockups.",
      "Carried lessons from small mobile builds into larger web and app product work.",
    ],
    metrics: [
      { label: "Platform", value: "Mobile" },
      { label: "Output", value: "Prototypes" },
      { label: "Focus", value: "UX flows" },
    ],
    links: [],
  },
  {
    slug: "other-ai-projects",
    title: "Other AI Projects",
    kicker: "Smaller applied-AI experiments and prototypes",
    summary:
      "Additional AI work spanning model experiments, automation ideas, classification tasks, LLM workflows and applied machine-learning prototypes.",
    description:
      "Not every AI build needs to become a large case study. This entry groups smaller experiments where the main value was testing a technique, exploring a workflow, learning a model family or proving whether an idea was technically useful enough to continue.",
    category: "AI / Experiments",
    year: "2022-2026",
    status: "Prototype",
    visibility: "published",
    featured: false,
    featuredOrder: 7,
    stack: ["Python", "Machine Learning", "LLMs", "Automation", "Data Analysis", "APIs"],
    highlights: [
      "Used smaller experiments to build intuition before committing to larger systems.",
      "Tested applied-AI ideas across classification, automation and language-model workflows.",
      "Focused on practical usefulness, failure modes and iteration speed.",
    ],
    metrics: [
      { label: "Scope", value: "Mixed AI" },
      { label: "Output", value: "Experiments" },
      { label: "Focus", value: "Applied use" },
    ],
    links: [],
  },
  {
    slug: "cyber-security-projects",
    title: "Cyber Security Projects",
    kicker: "Security-focused builds, labs and applied hardening work",
    summary:
      "A grouped entry for security projects spanning web application security, scripting, network fundamentals, threat modelling and defensive engineering.",
    description:
      "These projects collect practical cyber security work around understanding attack surfaces, testing assumptions and building safer systems. The focus was on applying security thinking to real engineering contexts: how software fails, how systems expose risk and how to design more defensible products.",
    category: "Cyber Security",
    year: "2023-2026",
    status: "Prototype",
    visibility: "published",
    featured: false,
    featuredOrder: 8,
    stack: ["Cyber Security", "Python", "Linux", "Web Security", "Networking", "Threat Modelling"],
    highlights: [
      "Explored security from both builder and attacker perspectives to understand real failure modes.",
      "Worked through practical exercises around web vulnerabilities, networking and system hardening.",
      "Applied security lessons back into full-stack product decisions and deployment habits.",
    ],
    metrics: [
      { label: "Domain", value: "Security" },
      { label: "Scope", value: "Labs + builds" },
      { label: "Focus", value: "Defensible systems" },
    ],
    links: [],
  },
  {
    slug: "portfolio-platform",
    title: "Personal Portfolio Platform",
    kicker: "Firebase-backed personal site and lightweight CMS",
    summary:
      "A reusable Next.js/Tailwind portfolio foundation for applications, project writeups, contact capture and future Firebase-backed content management.",
    description:
      "This site is designed to be more than a static CV page. It can run from local content immediately, then progressively move project data and contact messages into Firestore. The goal is to keep the public portfolio current without hardcoding every future update into the app.",
    category: "Web Platform",
    year: "2026",
    status: "Prototype",
    visibility: "published",
    featured: false,
    featuredOrder: 9,
    stack: ["Next.js", "TypeScript", "Tailwind", "Firebase App Hosting", "Firestore"],
    highlights: [
      "Designed for general applications rather than one company-specific application.",
      "Includes Firebase Admin integration for server-side Firestore reads and contact capture.",
      "Configured around danielflockhart.com as the canonical domain.",
    ],
    metrics: [
      { label: "Pages", value: "Home / projects / achievements / contact" },
      { label: "CMS", value: "Firestore-ready" },
      { label: "SEO", value: "Sitemap + metadata" },
    ],
    links: [],
  },
];

export const achievements: Achievement[] = [
  {
    slug: "ultra-running",
    title: "Ultra Running",
    category: "Endurance",
    period: "Ongoing",
    summary:
      "Long-distance endurance running that demands pacing, consistency and the ability to keep making good decisions while tired.",
    details: [
      "Built around sustained training blocks, recovery discipline and long-duration effort.",
      "A useful counterweight to technical work: simple feedback, hard constraints and no shortcuts.",
      "Reinforces the same habits that matter in ambitious builds: patience, pacing and resilience.",
    ],
  },
  {
    slug: "mma-fights",
    title: "MMA Fights",
    category: "Combat Sport",
    period: "Competitive",
    summary:
      "Mixed martial arts competition and fight preparation across striking, grappling, conditioning and pressure management.",
    details: [
      "Competed in an environment where composure, preparation and fast adaptation matter.",
      "Developed discipline through fight camps, technical drilling and physical conditioning.",
      "Built confidence working under pressure with real consequences and clear feedback.",
    ],
  },
  {
    slug: "theatre",
    title: "Theatre",
    category: "Performance",
    period: "Stage work",
    summary:
      "Theatre performance experience that developed public presence, timing, collaboration and comfort in front of live audiences.",
    details: [
      "Performed as part of collaborative productions with rehearsals, cues and audience-facing delivery.",
      "Built communication range beyond technical settings.",
      "Strengthened confidence, memory, timing and group trust under live conditions.",
    ],
  },
];

export const experience: Experience[] = [
  {
    role: "Co-founder, CTO & Lead Software Engineer",
    organisation: "Matched Stay",
    period: "Jul 2023 — Present",
    summary:
      "Leading technical development, product design and deployment of a travel-tech platform while supporting client acquisition, investor conversations and release planning.",
    tags: ["Startup", "Full-stack", "Firebase", "Product"],
  },
  {
    role: "AI / ML Researcher",
    organisation: "University of Birmingham dissertation",
    period: "Sept 2024 — May 2025",
    summary:
      "Built a multi-stage AI drug discovery pipeline combining generative models, reinforcement learning, classifiers, cheminformatics and LLM-based data augmentation.",
    tags: ["AI", "Research", "PyTorch", "LLMs"],
  },
  {
    role: "Digital Chemistry Research Intern",
    organisation: "University of Birmingham",
    period: "Jun 2023 — Oct 2023",
    summary:
      "Experimented with machine-learning architectures for digital chemistry and communicated research findings to technical domain experts.",
    tags: ["Research", "Computer Vision", "Autoencoders"],
  },
];

export const skillGroups = [
  {
    title: "AI & Machine Learning",
    summary:
      "Applied AI systems across research pipelines, LLM workflows, reinforcement learning, computer vision and model evaluation.",
    items: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "ChemBERTa", "RDKit", "LLMs", "Reinforcement Learning", "Computer Vision"],
  },
  {
    title: "Software Engineering",
    summary:
      "Full-stack product development from frontend interfaces through backend APIs, data models, deployment and maintenance.",
    items: ["TypeScript", "React", "Next.js", "React Native", "Node.js", "APIs", "Database Design", "Testing", "System Architecture"],
  },
  {
    title: "Cloud, Data & Infrastructure",
    summary:
      "Practical delivery experience with hosted apps, server-side integrations, data storage and production-oriented engineering habits.",
    items: ["Firebase", "Firestore", "Google Cloud", "Cloud Functions", "Authentication", "CI/CD", "Monitoring", "Deployment"],
  },
  {
    title: "Security & OSINT",
    summary:
      "Security-minded development with knowledge of web attack surfaces, operational risk, public-source investigation and defensive design.",
    items: ["Cyber Security", "OSINT", "Web Security", "Linux", "Networking", "Threat Modelling", "Secure Auth", "Risk Analysis"],
  },
  {
    title: "Product, Research & Communication",
    summary:
      "Turning ambiguous requirements into usable systems through research, stakeholder work, prototyping and clear product judgement.",
    items: ["Product Design", "Technical Writing", "Research Communication", "Startup Operations", "User Flows", "Rapid Prototyping"],
  },
];
