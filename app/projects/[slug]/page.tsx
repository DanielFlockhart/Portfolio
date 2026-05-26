import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ButtonLink, InlineLink } from "@/components/ButtonLink";
import { Section } from "@/components/Section";
import { getPortfolioProject } from "@/lib/firebase/portfolio";
import { projects as fallbackProjects } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return fallbackProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getPortfolioProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getPortfolioProject(slug);

  if (!project) notFound();

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-20">
        <ButtonLink href="/projects" variant="secondary">← Back to projects</ButtonLink>
        <p className="mt-10 border-l-8 border-black pl-4 text-xs font-black uppercase text-neutral-700">{project.category}</p>
        <h1 className="mt-5 max-w-5xl text-5xl font-black uppercase leading-tight text-black sm:text-7xl">{project.title}</h1>
        <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-neutral-700">{project.kicker}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <InlineLink key={link.label} link={link} />
          ))}
        </div>
      </section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="space-y-4">
            <div className="border-2 border-black bg-white p-6">
              <p className="text-xs font-black uppercase text-neutral-700">Summary</p>
              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex justify-between gap-4 border-b-2 border-black pb-3">
                  <dt className="font-bold text-neutral-600">Year</dt>
                  <dd className="font-black text-black">{project.year}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b-2 border-black pb-3">
                  <dt className="font-bold text-neutral-600">Status</dt>
                  <dd className="font-black text-black">{project.status}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-bold text-neutral-600">Category</dt>
                  <dd className="text-right font-black text-black">{project.category}</dd>
                </div>
              </dl>
            </div>

            <div className="border-2 border-black bg-white p-6">
              <p className="text-xs font-black uppercase text-neutral-700">Stack</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="border border-black bg-white px-2 py-1 text-xs font-bold uppercase text-black">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <article className="border-2 border-black bg-white p-6 shadow-[10px_10px_0_#050505] sm:p-8">
            <p className="text-lg font-medium leading-8 text-neutral-700">{project.description}</p>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="border-2 border-black bg-white p-4">
                  <p className="text-2xl font-black uppercase text-black">{metric.value}</p>
                  <p className="mt-2 text-xs font-bold uppercase text-neutral-600">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-black uppercase text-black">Key details</h2>
              <ul className="mt-5 space-y-3">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm font-medium leading-6 text-neutral-700">
                    <span className="mt-2 size-2 shrink-0 bg-black" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </Section>
    </>
  );
}
