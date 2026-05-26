export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type Metric = {
  label: string;
  value: string;
};

export type ProjectSpotlight = {
  eyebrow: string;
  title: string;
  body: string;
  points?: string[];
};

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  description: string;
  category: string;
  year: string;
  status: "Live" | "Research" | "Prototype" | "Archived";
  visibility: "published" | "draft";
  featured?: boolean;
  featuredOrder?: number;
  stack: string[];
  highlights: string[];
  metrics: Metric[];
  spotlight?: ProjectSpotlight;
  links: LinkItem[];
};

export type Experience = {
  role: string;
  organisation: string;
  period: string;
  summary: string;
  tags: string[];
};

export type Achievement = {
  slug: string;
  title: string;
  category: string;
  period: string;
  summary: string;
  details: string[];
  metrics?: Array<{
    label: string;
    value: string;
  }>;
  context?: string[];
  takeaways?: string[];
};

export type ContactMessage = {
  name: string;
  email: string;
  message: string;
};
