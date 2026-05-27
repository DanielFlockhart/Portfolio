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
      "A multi-stage research pipeline for de novo molecule generation, combining ChemBERTa SMILES embeddings, LLM effect labelling, autoencoder latent compression, supervised transformer pre-training, reinforcement-learning fine-tuning, GRU decoding, RDKit validation and a researcher-facing web app.",
    description:
      "Built as a final-year dissertation project, this pipeline explored how deep learning, reinforcement learning and cheminformatics could improve early-stage drug discovery. The system starts with curated cognitive molecules and ZINC 250K SMILES, removes duplicates and invalid structures with RDKit, embeds canonical SMILES into 768-dimensional ChemBERTa vectors, and uses OpenAI models to augment each molecule with effect and class labels. Those molecule, effect and class features are compressed through an autoencoder before a two-stage transformer generates new candidate vectors: first through supervised pre-training for chemically plausible outputs, then through population-based reinforcement learning and genetic search against effect similarity, class similarity, structural similarity, validity and length/diversity rewards. A GRU/self-attention decoder converts generated vectors back into canonical SMILES, while classifiers, RDKit checks, PCA/t-SNE/K-means clustering, Morgan fingerprints and Tanimoto similarity analysis validate target fit, chemical validity and novelty. A Next.js/Tailwind frontend connected to a Flask backend made the generation, molecule inspection, analysis and experimental LLM synthesis-route features usable without working directly through the research code.",
    category: "AI / ML Research",
    year: "2025",
    status: "Research",
    visibility: "published",
    featured: true,
    featuredOrder: 2,
    stack: [
      "Python",
      "PyTorch",
      "ChemBERTa",
      "RDKit",
      "SMILES",
      "OpenAI API",
      "LLM Data Labelling",
      "Reinforcement Learning",
      "Genetic Algorithms",
      "Transformers",
      "Autoencoders",
      "GRU Decoder",
      "Supervised Learning",
      "Unsupervised Learning",
      "PCA / t-SNE",
      "K-Means",
      "Tanimoto Similarity",
      "Next.js",
      "Flask",
      "Firebase",
      "Google Cloud",
    ],
    highlights: [
      "Designed an end-to-end research pipeline rather than an isolated model experiment, covering dataset curation, embedding, LLM augmentation, latent compression, generation, decoding, classifier ranking and novelty analysis.",
      "Processed a hand-curated dataset of approximately 2,700 cognitive-related molecules alongside ZINC 250K SMILES, removing duplicate or chemically invalid molecules with RDKit checks and SMILES length filtering.",
      "Used ChemBERTa to convert canonical SMILES into 768-dimensional molecular embeddings, then validated representational structure with PCA, t-SNE and K-means clusters.",
      "Used OpenAI models as a structured data augmentation layer for pharmacological effect and molecular class labels, then validated sample predictions against known molecules including methylphenidate, oxymorphone and tramadol.",
      "Trained an autoencoder over combined molecule, effect and class vectors, improving latent-space cluster separation compared with the original ChemBERTa vectors.",
      "Built a two-stage transformer process: supervised pre-training for structurally plausible molecule generation, followed by reinforcement-learning fine-tuning with genetic operators and custom reward metrics.",
      "Trained a GRU/self-attention decoder to reconstruct canonical SMILES from generated vectors and used RDKit to reject or inspect invalid molecular outputs.",
      "Analysed 57,600 generated candidates across 48 target-effect combinations using classifier confidence distributions, attrition filtering, Morgan fingerprints and Tanimoto similarity novelty checks.",
      "Built a Next.js/Tailwind frontend and Flask backend so reviewers could generate molecules, inspect candidate structures, view analysis and request experimental synthesis-route starting points.",
    ],
    metrics: [
      { label: "Generated candidates", value: "57.6k" },
      { label: "Target tests", value: "48 combos" },
      { label: "Core dataset", value: "2.7k molecules" },
      { label: "Decoder data", value: "ZINC 250k" },
      { label: "Embeddings", value: "768D ChemBERTa" },
      { label: "Novelty", value: "0.133 avg similarity" },
    ],
    spotlight: {
      eyebrow: "Research architecture",
      title: "End-to-end generative molecule pipeline",
      body:
        "The work tied together representation learning, LLM-assisted labelling, supervised learning, reinforcement learning, cheminformatics validation and a usable web interface so the discovery workflow could be tested as an integrated pipeline rather than isolated proofs of concept.",
      points: [
        "SMILES to ChemBERTa to autoencoder latent space",
        "Supervised transformer to RL and genetic fine-tuning",
        "RDKit, classifier, clustering and Tanimoto validation",
      ],
    },
    links: [
      {
        label: "Front-end demo",
        href: "https://erudite-web-front-end--erudite-8d040.europe-west4.hosted.app",
        external: true,
      },
    ],
  },
  {
    slug: "matched-stay",
    title: "Matched Stay",
    kicker: "Middleware platform for complex workforce accommodation and disrupted-travel sourcing",
    summary:
      "An AI-assisted web and mobile travel-tech platform for sourcing, negotiating and managing complex workforce accommodation, then turning supplier responses into governed offers, approvals and booking records.",
    description:
      "Co-founded and led technical development of Matched Stay, a middleware platform for non-standard corporate accommodation: long stays, multi-room projects, rotating cohorts, phased sites, crisis response and aviation disruption. The AI negotiation layer is the core technical differentiator: LLM-assisted and agentic workflows target suppliers over email and voice, capture unstructured responses, and normalise rates, terms, availability, room mix, cancellation, inclusions and policy constraints into comparable offers. The product sits upstream of a client's normal travel stack, turning request intake into supplier outreach, negotiated options and structured approvals. The downstream strategy is to bridge confirmed bookings back into TMC/GDS records so duty of care, itinerary visibility, reporting and reconciliation remain intact.",
    category: "Startup / Full-stack Product",
    year: "2023—Present",
    status: "Live",
    visibility: "published",
    featured: true,
    featuredOrder: 1,
    stack: [
      "Next.js",
      "React Native",
      "Node.js",
      "LLMs",
      "Agentic Workflows",
      "AI Negotiation",
      "Firebase",
      "Google Cloud",
      "Supplier Automation",
      "Offer Normalisation",
      "Tailwind",
      "Approvals",
      "GDS / TMC",
      "Product Design",
    ],
    highlights: [
      "Co-founded the company and owned technical direction as CTO across web, mobile, backend and product architecture.",
      "Designed the AI negotiation layer around agentic workflows that source suppliers, manage email and voice outreach, and reduce manual back-and-forth for non-standard stays.",
      "Used LLM-assisted extraction and normalisation to convert unstructured supplier replies into comparable offers covering rates, terms, availability, room mix, cancellation terms, inclusions and constraints.",
      "Built workflows around accommodation request intake, supplier/property sourcing, offer comparison, approvals and booking management.",
      "Shaped the platform as an upstream sourcing layer that can bridge confirmed bookings back into the corporate travel record for duty of care and reconciliation.",
      "Worked on complex accommodation use cases including workforce projects, phased stays, rotating traveller cohorts, crisis response and aviation disruption.",
      "Balanced engineering execution with pilot discovery, investor conversations, launch/testing events and business validation.",
    ],
    metrics: [
      { label: "Role", value: "Co-founder / CTO" },
      { label: "AI focus", value: "Negotiation agents" },
      { label: "Platforms", value: "Web + mobile" },
      { label: "Use cases", value: "Workforce + IROPS" },
      { label: "Stage", value: "Live / pilot validation" },
      { label: "Award", value: "£5k accelerator" },
    ],
    spotlight: {
      eyebrow: "AI negotiation layer",
      title: "Agentic sourcing and supplier negotiation",
      body:
        "The core technical focus is using LLM-assisted workflows to contact accommodation suppliers, capture email and voice responses, negotiate rates and terms, then normalise the output into comparable, auditable offers for approval.",
      points: [
        "Supplier outreach over email and voice",
        "LLM extraction for rates, terms and constraints",
        "Agentic workflow from sourcing to approval-ready offers",
      ],
    },
    links: [
      { label: "Website", href: "https://matchedstay.co.uk", external: true },
    ],
  },
  {
    slug: "digital-chemistry-research",
    title: "Digital Chemistry Research Internship",
    kicker: "Computer vision and ML for molecular skeletons",
    summary:
      "University of Birmingham research work that preceded the later drug-discovery dissertation, with a tighter focus on computer vision, molecular skeleton representations and ML architectures for digital chemistry.",
    description:
      "Worked with University of Birmingham researchers on machine-learning approaches for digital chemistry. The work was conceptually related to the later AI drug-discovery dissertation because it explored how ML could represent and reason about molecular structures, while the internship leaned further toward computer vision: molecular skeleton representations, image-like structural inputs, autoencoder-style experimentation and visual validation of learned representations. The project involved testing architectures, communicating results to technical domain experts and producing recommendations for future research.",
    category: "Research Internship",
    year: "2023",
    status: "Research",
    visibility: "published",
    featured: true,
    featuredOrder: 3,
    stack: [
      "Python",
      "Machine Learning",
      "Computer Vision",
      "Autoencoders",
      "Molecular Skeletons",
      "Representation Learning",
      "Image Processing",
      "Research Communication",
    ],
    highlights: [
      "Explored ML architectures for molecular skeleton representations with a stronger computer-vision emphasis than the later final-year dissertation.",
      "Worked with image-like and structure-focused molecular inputs to test how visual representations could support digital chemistry workflows.",
      "Experimented with autoencoder-style approaches and representation learning for compact molecular structure understanding.",
      "Reported findings to technical experts and recommended further experimentation for future digital chemistry research.",
    ],
    metrics: [
      { label: "Domain", value: "Digital chemistry" },
      { label: "Focus", value: "Computer vision" },
      { label: "Output", value: "Research report" },
    ],
    spotlight: {
      eyebrow: "Research focus",
      title: "Computer vision for molecular structure understanding",
      body:
        "This was an earlier digital-chemistry research project in the same broad family as the dissertation work. Instead of building a full generative drug-discovery pipeline, it concentrated on how visual molecular skeleton representations could be processed with machine-learning architectures.",
      points: [
        "Molecular skeleton representations",
        "Computer-vision-led architecture experiments",
        "Autoencoder and representation-learning ideas",
      ],
    },
    links: [],
  },
  {
    slug: "reinforcement-learning-cars",
    title: "Reinforcement Learning Cars Learning to Drive",
    kicker: "A-Level OCR Computer Science programming project built in Unity",
    summary:
      "An A-Level OCR Computer Science programming project where cars learned to navigate a track using custom C# neural networks and reinforcement learning inside Unity.",
    description:
      "Built as an A-Level OCR Computer Science programming project, this Unity simulation trained cars to navigate around a track using custom-built feed-forward neural networks and reinforcement learning rather than third-party ML libraries. The project combined car physics, sensor-style inputs, reward feedback, model loading and saving, training controls and visual feedback. It was accompanied by an approximately 50,000-word project report explaining the system design, development process and evaluation.",
    category: "AI / Reinforcement Learning",
    year: "A-Level OCR",
    status: "Archived",
    visibility: "published",
    featured: false,
    featuredOrder: 4,
    stack: [
      "Unity",
      "C#",
      "Custom Neural Networks",
      "Feed-Forward Networks",
      "Reinforcement Learning",
      "Car Physics",
      "Model Loading / Saving",
      "Simulation",
    ],
    highlights: [
      "Built the car physics, driving simulation and track-navigation environment in Unity.",
      "Implemented feed-forward neural networks and reinforcement learning logic manually in C# using default Unity libraries.",
      "Added model loading and saving so trained networks could be reused between sessions.",
      "Built training controls and visual feedback for inspecting whether cars were learning valid track behaviour.",
      "Produced a substantial written A-Level project report explaining the system and development process.",
    ],
    metrics: [
      { label: "Course", value: "OCR A-Level CS" },
      { label: "Engine", value: "Unity" },
      { label: "Language", value: "C#" },
      { label: "Writeup", value: "50k words" },
    ],
    links: [
      { label: "Training video", href: "https://youtu.be/Lf4vcGnzJxU", external: true },
    ],
  },
  {
    slug: "game-jams",
    title: "Game Jams",
    kicker: "Ludum Dare prototypes built with Unity, C# and Blender",
    summary:
      "A set of Ludum Dare game jam projects from 2020-2021, focused on building playable Unity prototypes with C# gameplay logic and Blender-made assets under tight deadlines.",
    description:
      "These game jams were primarily Ludum Dare projects built in Unity between 2020 and 2021. The work involved writing gameplay systems in C#, creating lightweight 3D assets in Blender, scoping ideas down to something shippable, then building enough interaction, feedback and polish to make each prototype playable before the deadline.",
    category: "Creative Coding",
    year: "2020-2021",
    status: "Archived",
    visibility: "published",
    featured: false,
    featuredOrder: 5,
    stack: ["Unity", "C#", "Blender", "Ludum Dare", "Game Design", "Rapid Prototyping", "Gameplay Systems"],
    highlights: [
      "Built Unity prototypes for Ludum Dare game jams under strict time limits.",
      "Used C# for gameplay logic, player interaction, game loops and feedback.",
      "Created or adapted lightweight Blender assets to support the visual direction of the prototypes.",
      "Practised scoping ideas aggressively so the result was playable by the deadline.",
    ],
    metrics: [
      { label: "Period", value: "2020-2021" },
      { label: "Event", value: "Ludum Dare" },
      { label: "Engine", value: "Unity" },
    ],
    links: [],
  },
  {
    slug: "assorted-phone-apps",
    title: "Assorted Phone Apps",
    kicker: "Archived mobile games and app experiments",
    summary:
      "A long-running collection of mobile games and app experiments from 2017 onward, including public releases that have since been retired from distribution.",
    description:
      "This entry groups early and occasional phone-app work from 2017 to current: small games, focused app ideas and lightweight experiments built to learn mobile flows, publishing, UI constraints and fast product iteration. Some were released publicly at the time and have since been retired, so this page presents the work as an archive rather than as active live products.",
    category: "Mobile Apps",
    year: "2017—Current",
    status: "Archived",
    visibility: "published",
    featured: false,
    featuredOrder: 6,
    stack: ["Mobile Apps", "Game Experiments", "App Releases", "Mobile UI", "Product Prototyping"],
    highlights: [
      "Released a small set of games and apps publicly before later retiring them from distribution.",
      "Used small mobile builds to learn app flows, store packaging, interface constraints and release basics.",
      "Experimented with lightweight game ideas, simple utilities and phone-first interaction patterns.",
      "Carried lessons from early mobile experimentation into later product and app work.",
    ],
    metrics: [
      { label: "Period", value: "2017—Current" },
      { label: "Output", value: "Games + apps" },
      { label: "Status", value: "Archived" },
    ],
    links: [],
  },
  {
    slug: "other-ai-projects",
    title: "Other AI Projects",
    kicker: "Smaller applied-AI experiments and prototypes",
    summary:
      "A long-running archive of AI experiments from 2018 onward, spanning algorithmic trading, sentiment analysis, NLP, reinforcement-learning game agents, drug-discovery ideas and many smaller model tests.",
    description:
      "This entry collects smaller AI experiments from 2018 to current where the main value was testing a technique, exploring a workflow, learning a model family or proving whether an idea was useful enough to continue. The work has included algorithmic trading experiments, sentiment analysis, NLP workflows, reinforcement-learning agents learning game environments, drug-discovery-adjacent ideas and many other applied-AI tests.",
    category: "AI / Experiments",
    year: "2018—Current",
    status: "Archived",
    visibility: "published",
    featured: false,
    featuredOrder: 7,
    stack: [
      "Python",
      "Machine Learning",
      "NLP",
      "Sentiment Analysis",
      "Algorithmic Trading",
      "Reinforcement Learning",
      "Game Agents",
      "Drug Discovery",
      "LLMs",
      "Automation",
      "Data Analysis",
      "APIs",
    ],
    highlights: [
      "Explored algorithmic trading ideas and market-signal experiments.",
      "Worked on sentiment analysis and NLP workflows for extracting useful signals from text.",
      "Tested reinforcement-learning agents learning game environments and simulations.",
      "Built smaller drug-discovery and molecular-AI experiments alongside the larger dissertation pipeline.",
      "Used many smaller experiments to build intuition before committing to larger systems.",
      "Focused on practical usefulness, failure modes and iteration speed.",
    ],
    metrics: [
      { label: "Period", value: "2018—Current" },
      { label: "Output", value: "Experiments" },
      { label: "Scope", value: "Mixed AI" },
    ],
    links: [],
  },
  {
    slug: "cyber-security-projects",
    title: "Cyber Security Projects",
    kicker: "Courses, government programmes and self-directed cyber security experiments",
    summary:
      "A long-running cyber security thread covering courses, government programmes, hands-on labs and experiments across web security, Linux, networking, scripting and OSINT-style investigation.",
    description:
      "This archive covers cyber security work dating back to 2017, including courses, government cyber security programmes and self-directed experimentation across different parts of the field. Rather than a single shipped product, it reflects sustained exposure to the cyber security space: learning fundamentals, working with security tooling, completing practical exercises, exploring web security, Linux, networking, scripting and OSINT-style investigation, then carrying that security mindset into broader software engineering work.",
    category: "Cyber Security",
    year: "2017—Current",
    status: "Archived",
    visibility: "published",
    featured: false,
    featuredOrder: 8,
    stack: ["Cyber Security", "Courses", "Government Programmes", "Python", "Linux", "Web Security", "Networking", "OSINT"],
    highlights: [
      "Experimented broadly across web security, Linux, networking, scripting, OSINT-style investigation and hands-on security labs.",
      "Used security work to understand how systems fail, how tools behave and how defensive thinking improves broader engineering decisions.",
    ],
    metrics: [
      { label: "Period", value: "2017—Current" },
      { label: "Format", value: "Courses + programmes" },
      { label: "Scope", value: "Labs + experiments" },
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
    status: "Archived",
    visibility: "draft",
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
    title: "Ultra-Endurance Running",
    category: "Endurance",
    period: "2024 — Present",
    summary:
      "Built from a first 50K in 2024 to a 50-mile finish and a 100km backyard ultra effort, with an 18:30 5K marker showing speed alongside distance.",
    details: [
      "Completed two 50K efforts, a 50-mile run and a 100km backyard ultra, turning distance running into a repeatable discipline rather than a one-off challenge.",
      "Recorded PBs including 50km in 4:51:47, 50 miles in 9:47:00 and 100km in 14:44:00.",
      "Built a daily-running base and used endurance work as a forcing function for consistency, recovery and decision-making under fatigue.",
      "Set the next target around 100-mile capability and stronger backyard-ultra performance.",
    ],
    metrics: [
      { label: "Distance PB", value: "100km" },
      { label: "50km PB", value: "4:51:47" },
      { label: "50-mile PB", value: "9:47:00" },
      { label: "5K PB", value: "18:30" },
    ],
    context: [
      "The running arc has moved from shorter speed benchmarks into increasingly long events, using ultra-distance work to test pacing, fatigue management and the ability to keep moving when the feedback is immediate.",
      "It also shows a habit of committing to long, uncomfortable objectives and turning them into measurable progress.",
    ],
    takeaways: [
      "Consistency compounds more reliably than motivation.",
      "Physical goals expose weak routines quickly.",
      "Endurance work transfers directly into startup pressure and long technical builds.",
    ],
  },
  {
    slug: "mma-fights",
    title: "MMA Competition",
    category: "Combat Sport",
    period: "2022 — 2023",
    summary:
      "Two MMA fights from a serious university training block: one full-distance contest and one first-round ground-and-pound win.",
    details: [
      "Joined university MMA and trained seriously several times a week before taking the first fight in Southampton.",
      "First fight went the full distance and came down to a close decision, creating useful pressure experience even without the official result.",
      "Second fight ended in the first round after gaining mount and winning by ground-and-pound.",
      "Built confidence in grappling-led pressure, conditioning and emotional control under a public scoreboard.",
    ],
    metrics: [
      { label: "Fights", value: "2" },
      { label: "Record", value: "1-1" },
      { label: "Win method", value: "Ground-and-pound" },
      { label: "Base", value: "MMA / BJJ" },
    ],
    context: [
      "MMA is an unusually clear test of preparation. Skill, conditioning and composure all get exposed at once, and the feedback arrives quickly.",
      "The experience matters beyond sport because it forced a more direct relationship with pressure, preparation and emotional control.",
    ],
    takeaways: [
      "Preparation needs to hold up when the situation stops being theoretical.",
      "Composure under pressure is trainable.",
      "Clear feedback is useful even when the outcome is uncomfortable.",
    ],
  },
  {
    slug: "theatre",
    title: "Theatre Scholarship & Stage Performance",
    category: "Performance",
    period: "2015 — 2022",
    summary:
      "Seven-year Theatre Arts scholarship and stage background, including school productions, multiple Edinburgh Fringe performances and dozens of shows.",
    details: [
      "Earned a Theatre Arts scholarship after a primary-school performance and stayed involved through 2022.",
      "Performed across school plays, Theatre Arts productions and multiple Edinburgh Fringe performances in 2018.",
      "Appeared in dozens shows, performing to thousands of people in total.",
      "Built comfort presenting in front of large audiences through repeated live stage work.",
      "Developed public presence, timing, memory, teamwork and audience-facing confidence before moving into technical and business settings.",
    ],
    metrics: [
      { label: "Scholarship", value: "7 years" },
      { label: "Stage period", value: "2015-2022" },
      { label: "Highlight", value: "Edinburgh Fringe performances" },
      { label: "Skill", value: "Public presence" },
    ],
    context: [
      "Theatre built the communication base behind later pitching, presenting, explaining complex work and staying composed in public.",
      "It also adds a different kind of collaboration signal from software teams: rehearsals, cues and live delivery require reliability when other people are depending on the performance.",
    ],
    takeaways: [
      "Strong technical work is easier to use when it can be explained clearly.",
      "Live performance builds comfort with visibility and nerves.",
      "Group trust matters when the final delivery is public.",
    ],
  },
  {
    slug: "elevate-business-award",
    title: "Elevate Business Accelerator Award",
    category: "Entrepreneurship",
    period: "2024",
    summary:
      "Won £5,000 through the University of Birmingham Elevate Cohort 3 accelerator for Matched Stay.",
    details: [
      "Secured £5,000 from the University of Birmingham's Elevate accelerator while building Matched Stay.",
      "Used the award as external validation for a live travel-tech product rather than a purely academic idea.",
      "Added credibility for investor conversations, early customer discussions and product planning.",
      "Connected technical execution with commercial storytelling, pitch discipline and startup operating pressure.",
    ],
    metrics: [
      { label: "Award", value: "£5,000" },
      { label: "Programme", value: "Elevate Cohort 3" },
      { label: "Venture", value: "Matched Stay" },
      { label: "Category", value: "Accelerator" },
    ],
    context: [
      "This was a concrete entrepreneurial milestone: a judged programme putting money behind the venture rather than internal belief alone.",
      "It also bridges technical and commercial execution by showing that the product work could be packaged, presented and backed by an external institution.",
    ],
    takeaways: [
      "Commercial progress needs evidence, not just activity.",
      "Pitching a product sharpens the technical priorities behind it.",
      "External validation is useful when moving from project to company.",
    ],
  },
  {
    slug: "first-class-ai-degree",
    title: "First-Class AI & Computer Science Degree",
    category: "Academic",
    period: "2025",
    summary:
      "Graduated from the University of Birmingham with a First-Class BSc in Artificial Intelligence with Computer Science.",
    details: [
      "Completed a BSc in Artificial Intelligence with Computer Science with a First-Class result.",
      "Finished with a 71.3% overall mark while also building Matched Stay and maintaining demanding sport commitments.",
      "Built the dissertation drug-discovery pipeline as a project outcome, keeping that work represented as a project rather than an experience role.",
      "Strengthened the AI, software engineering and research base behind the portfolio's technical projects.",
    ],
    metrics: [
      { label: "Degree", value: "BSc AI & CS" },
      { label: "Result", value: "First Class" },
      { label: "Mark", value: "71.3%" },
      { label: "Institution", value: "Birmingham" },
    ],
    context: [
      "The degree gives concise academic context without duplicating the dissertation as professional experience.",
      "It supports the AI-heavy project work elsewhere on the site, especially the combination of research pipelines, software engineering and applied machine learning.",
    ],
    takeaways: [
      "Academic depth and practical building can reinforce each other.",
      "Final-year research can be shown as project evidence without overstating it as employment.",
      "The result gives a concise credibility signal for AI and software roles.",
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
    role: "Digital Chemistry Research Intern",
    organisation: "University of Birmingham",
    period: "Jun 2023 — Oct 2023",
    summary:
      "Experimented with machine-learning architectures for digital chemistry and communicated research findings to technical domain experts.",
    tags: ["Research", "Computer Vision", "Autoencoders"],
  },
  {
    role: "Private GCSE Maths Tutor",
    organisation: "Self-employed",
    period: "2021 — 2022",
    summary:
      "Produced personalised lessons for a GCSE maths student, adapting teaching strategies to the learner's needs and earning positive client feedback.",
    tags: ["Teaching", "Maths", "Communication", "Client work"],
  },
];

export const skillGroups = [
  {
    title: "AI & Machine Learning",
    summary:
      "Applied AI systems across research pipelines, LLM workflows, reinforcement learning, computer vision and model evaluation.",
    items: [
      "Python",
      "OpenAI API",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "ChemBERTa",
      "RDKit",
      "LLMs",
      "Supervised Learning",
      "Unsupervised Learning",
      "Reinforcement Learning",
      "Neural Network Architectures",
      "Deep Learning",
      "Model Evaluation",
      "Feature Engineering",
      "Data Augmentation",
      "Computer Vision",
      "LLM Data Labelling",
      "Agentic Workflows",
    ],
  },
  {
    title: "Software Engineering",
    summary:
      "Full-stack product development from frontend interfaces through backend APIs, data models, deployment and maintenance.",
    items: [
      "TypeScript",
      "JavaScript",
      "Java",
      "C#",
      "React",
      "Next.js",
      "React Native",
      "Node.js",
      "Flask",
      "Tailwind CSS",
      "APIs",
      "Web App Development",
      "Mobile App Development",
      "Database Design",
      "Testing",
      "System Architecture",
    ],
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
    items: ["Cyber Security", "OSINT", "Web Security", "Linux", "Networking"],
  },
  {
    title: "Product, Research & Communication",
    summary:
      "Turning ambiguous requirements into usable systems through research, stakeholder work, prototyping and clear product judgement.",
    items: [
      "Product Design",
      "UI/UX Design",
      "Interface Design",
      "Design Systems",
      "Game Design",
      "Unity",
      "Blender",
      "Technical Writing",
      "Research Communication",
      "Startup Operations",
      "User Flows",
      "Rapid Prototyping",
    ],
  },
];
