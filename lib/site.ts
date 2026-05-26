import type { Experience, Project, WritingItem } from "@/lib/types";

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

export const principles = [
  {
    title: "Build useful systems, not demos",
    body: "I care about taking rough ideas through design, implementation, release and iteration.",
  },
  {
    title: "Make complex tools usable",
    body: "A strong technical system only matters if real users can understand it, trust it and use it.",
  },
  {
    title: "Own the full stack",
    body: "I am comfortable crossing product, frontend, backend, data, cloud and stakeholder conversations.",
  },
];

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
    slug: "portfolio-platform",
    title: "Personal Portfolio Platform",
    kicker: "Firebase-backed personal site and lightweight CMS",
    summary:
      "A reusable Next.js/Tailwind portfolio foundation for applications, project writeups, contact capture and future Firebase-backed content management.",
    description:
      "This site is designed to be more than a static CV page. It can run from local content immediately, then progressively move project data, writing and contact messages into Firestore. The goal is to keep the public portfolio current without hardcoding every future update into the app.",
    category: "Web Platform",
    year: "2026",
    status: "Prototype",
    visibility: "published",
    featured: false,
    featuredOrder: 4,
    stack: ["Next.js", "TypeScript", "Tailwind", "Firebase App Hosting", "Firestore"],
    highlights: [
      "Designed for general applications rather than one company-specific application.",
      "Includes Firebase Admin integration for server-side Firestore reads and contact capture.",
      "Configured around danielflockhart.com as the canonical domain.",
    ],
    metrics: [
      { label: "Pages", value: "Home / projects / writing / contact" },
      { label: "CMS", value: "Firestore-ready" },
      { label: "SEO", value: "Sitemap + metadata" },
    ],
    links: [],
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

export const skills = [
  "Python",
  "JavaScript / TypeScript",
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "Firebase",
  "Google Cloud",
  "PyTorch",
  "TensorFlow",
  "Scikit-learn",
  "OpenCV",
  "Tailwind CSS",
  "APIs",
  "Database design",
  "Product design",
];

export const writing: WritingItem[] = [
  {
    title: "Using LLMs as structured data augmentation systems",
    description:
      "Notes on treating language models as constrained workflow components rather than generic chatbot layers.",
    date: "2026",
    status: "Idea",
  },
  {
    title: "What I learned building a drug-discovery pipeline as an undergraduate",
    description:
      "A practical reflection on architecture, validation, dataset bias, reinforcement learning and chemical representation choices.",
    date: "2026",
    status: "Draft",
  },
  {
    title: "From ambiguous problem to shipped product",
    description:
      "Lessons from building startup software where technical decisions, sales conversations and product strategy collide.",
    date: "2026",
    status: "Idea",
  },
];
