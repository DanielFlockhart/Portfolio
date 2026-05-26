import type { Metadata } from "next";

import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { getPortfolioProjects } from "@/lib/firebase/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected AI, software engineering, research and startup projects by Daniel Flockhart.",
};

export const revalidate = 3600;

const starredProjectSlugs = new Set(["ai-drug-discovery-pipeline", "matched-stay"]);

export default async function ProjectsPage() {
  const projects = await getPortfolioProjects();

  return (
    <Section eyebrow="Projects" title="A living record of systems I have built, shipped and researched." className="min-h-[calc(100svh-4rem)] pt-20">
      <p className="mb-10 max-w-3xl border-l-8 border-black bg-white py-2 pl-5 text-lg font-medium leading-8 text-neutral-700">
        The work spans molecular ML pipelines, travel-tech product engineering, digital chemistry research and the portfolio platform itself.
      </p>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} starred={starredProjectSlugs.has(project.slug)} />
        ))}
      </div>
    </Section>
  );
}
