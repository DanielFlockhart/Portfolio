import Image from "next/image";

import { ButtonLink, InlineLink } from "@/components/ButtonLink";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { Stat } from "@/components/Stat";
import { getPortfolioProjects } from "@/lib/firebase/portfolio";
import { experience, profile, skillGroups } from "@/lib/site";

export const revalidate = 3600;

const tickerItems = [
  "Applied AI systems",
  "Production web apps",
  "Startup operator",
  "Research to release",
  "Full-stack ownership",
];

const homeSectionClassName = "home-scroll-section flex min-h-[calc(100svh-4rem)] items-center";

export default async function Home() {
  const featuredProjects = await getPortfolioProjects({ featuredOnly: true });

  return (
    <div className="home-scroll-page">
      <section className="home-scroll-section relative flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden border-b-2 border-black bg-white px-6">
        <div className="mx-auto grid w-full flex-1 max-w-7xl min-w-0 gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_430px] lg:items-center">
          <div className="min-w-0 max-w-5xl">
            <div className="reveal-up inline-flex border-2 border-black bg-white text-xs font-black uppercase text-black">
              <span className="border-r-2 border-black bg-black px-3 py-2 text-white">Building</span>
              <span className="px-3 py-2">AI systems, products and hard things</span>
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
              <ButtonLink href="/achievements" variant="secondary">View achievements</ButtonLink>
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
              <Stat value="AI" label="Machine learning, product engineering and security-minded systems" />
            </div>
          </div>

          <div className="reveal-up reveal-delay-2 relative min-h-[520px] min-w-0 max-w-full lg:min-h-[620px]">
            <div className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-black bg-black" />
            <div className="relative h-full min-h-[520px] overflow-hidden border-2 border-black bg-white">
              <Image
                src="/daniel-flockhart.jpg"
                alt="Portrait of Daniel Flockhart"
                fill
                priority
                sizes="(min-width: 1024px) 430px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 border-t-2 border-black bg-white px-4 py-3 text-xs font-black uppercase text-black">
                Daniel Flockhart
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

      <Section
        eyebrow="Selected work"
        eyebrowSide="right"
        title="Projects that show research depth, product ownership and engineering execution."
        className={homeSectionClassName}
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Experience" title="Technical work with a bias toward ownership." className={homeSectionClassName}>
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

      <Section eyebrow="Skills" title="Technical skills, AI knowledge and investigation experience." className={homeSectionClassName}>
        <div className="grid gap-4 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="border-2 border-black bg-white p-5 shadow-[6px_6px_0_#050505]">
              <h3 className="text-xl font-black uppercase leading-tight text-black">{group.title}</h3>
              <p className="mt-3 text-sm font-medium leading-6 text-neutral-700">{group.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="border border-black bg-white px-2 py-1 text-xs font-bold uppercase text-black">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
