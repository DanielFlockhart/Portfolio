import Image from "next/image";

import { ButtonLink, InlineLink } from "@/components/ButtonLink";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { Stat } from "@/components/Stat";
import { getPortfolioProjects } from "@/lib/firebase/portfolio";
import { experience, principles, profile, skills } from "@/lib/site";

export const revalidate = 3600;

const tickerItems = [
  "Applied AI systems",
  "Production web apps",
  "Startup operator",
  "Research to release",
  "Full-stack ownership",
];

export default async function Home() {
  const featuredProjects = await getPortfolioProjects({ featuredOnly: true });

  return (
    <>
      <section className="relative overflow-hidden border-b-2 border-black bg-white px-6">
        <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl min-w-0 gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_430px] lg:items-center">
          <div className="min-w-0 max-w-5xl">
            <div className="reveal-up inline-flex border-2 border-black bg-white text-xs font-black uppercase text-black">
              <span className="border-r-2 border-black bg-black px-3 py-2 text-white">Open</span>
              <span className="px-3 py-2">AI, software and product roles</span>
            </div>
            <p className="reveal-up reveal-delay-1 mt-8 text-sm font-black uppercase text-neutral-700">
              Portfolio / Applied AI / Product Engineering
            </p>
            <h1 className="reveal-up reveal-delay-1 mt-4 max-w-5xl break-words text-5xl font-black uppercase leading-[0.92] text-black sm:text-7xl lg:text-[7.75rem] xl:text-[8rem]">
              Daniel
              <span className="text-outline block">Flockhart</span>
            </h1>
            <p className="reveal-up reveal-delay-2 mt-6 max-w-2xl break-words text-lg font-medium leading-8 text-neutral-700">
              {profile.description} The through-line is simple: turn ambiguous, technical problems into working systems people can actually use.
            </p>
            <div className="reveal-up reveal-delay-2 mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/projects">View projects</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">Contact me</ButtonLink>
            </div>
            <div className="reveal-up reveal-delay-3 mt-8 flex flex-wrap gap-5">
              {profile.links.map((link) => (
                <InlineLink key={link.label} link={link} />
              ))}
            </div>
            <div className="reveal-up reveal-delay-3 mt-10 grid max-w-full overflow-hidden border-2 border-black bg-white sm:grid-cols-3">
              <Stat value="1st" label="BSc Artificial Intelligence & Computer Science" />
              <Stat value="CTO" label="Co-founded and built a launched travel-tech platform" />
              <Stat value="57k+" label="Generated molecules analysed in ML research pipeline" />
            </div>
          </div>

          <div className="reveal-up reveal-delay-2 relative min-h-[520px] min-w-0 max-w-full lg:min-h-[620px]" aria-hidden="true">
            <div className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-black bg-black" />
            <div className="relative flex h-full min-h-[520px] flex-col border-2 border-black bg-white">
              <div className="flex items-center justify-between border-b-2 border-black px-4 py-3 text-xs font-black uppercase">
                <span>Live build board</span>
                <span>DF / 2026</span>
              </div>
              <div className="system-diagram relative flex-1 overflow-hidden">
                <Image src="/system-print.svg" alt="" fill priority sizes="430px" className="object-cover opacity-20" />
                <span className="diagram-ring" />
                <span className="diagram-line line-a" />
                <span className="diagram-line line-b" />
                <span className="diagram-line line-c" />
                <span className="diagram-node node-a">Research</span>
                <span className="diagram-node node-b">Model</span>
                <span className="diagram-node node-c">Product</span>
                <span className="diagram-node node-d">Ship</span>
              </div>
              <div className="grid grid-cols-3 border-t-2 border-black text-xs font-black uppercase">
                <div className="border-r-2 border-black p-3">AI</div>
                <div className="border-r-2 border-black p-3">Web</div>
                <div className="p-3">Ops</div>
              </div>
            </div>
          </div>
        </div>

        <div className="marquee -mx-6 border-y-2 border-black bg-black py-3 text-white">
          <div className="marquee-track gap-8 text-sm font-black uppercase">
            {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="How I work" title="A portfolio for more than one application.">
        <div className="grid border-2 border-black bg-white md:grid-cols-3">
          {principles.map((principle) => (
            <div key={principle.title} className="border-b-2 border-black p-6 last:border-b-0 md:border-b-0 md:border-r-2 md:last:border-r-0">
              <h3 className="text-xl font-black uppercase text-black">{principle.title}</h3>
              <p className="mt-4 text-sm font-medium leading-6 text-neutral-700">{principle.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Selected work" title="Projects that show research depth, product ownership and engineering execution.">
        <div className="grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Experience" title="Technical work with a bias toward ownership.">
        <div className="border-y-2 border-black bg-white">
          {experience.map((item) => (
            <article key={`${item.role}-${item.organisation}`} className="border-b-2 border-black p-6 last:border-b-0">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-black uppercase text-black">{item.role}</h3>
                  <p className="mt-1 text-sm font-bold uppercase text-neutral-600">{item.organisation}</p>
                </div>
                <span className="border-2 border-black px-3 py-1 text-sm font-black text-black">{item.period}</span>
              </div>
              <p className="mt-4 max-w-3xl text-sm font-medium leading-6 text-neutral-700">{item.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="border border-black bg-white px-2 py-1 text-xs font-bold uppercase text-black">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Stack" title="Tools I have used to build, test and ship.">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="border-2 border-black bg-white px-4 py-2 text-sm font-black uppercase text-black transition hover:-translate-y-0.5 hover:bg-black hover:text-white">
              {skill}
            </span>
          ))}
        </div>
      </Section>
    </>
  );
}
