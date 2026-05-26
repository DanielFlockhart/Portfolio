import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/ButtonLink";
import { Section } from "@/components/Section";
import { achievements } from "@/lib/site";

type AchievementPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return achievements.map((achievement) => ({ slug: achievement.slug }));
}

export async function generateMetadata({ params }: AchievementPageProps): Promise<Metadata> {
  const { slug } = await params;
  const achievement = achievements.find((item) => item.slug === slug);

  if (!achievement) {
    return { title: "Achievement not found" };
  }

  return {
    title: achievement.title,
    description: achievement.summary,
  };
}

export default async function AchievementDetailPage({ params }: AchievementPageProps) {
  const { slug } = await params;
  const achievement = achievements.find((item) => item.slug === slug);

  if (!achievement) notFound();

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-20">
        <ButtonLink href="/achievements" variant="secondary">← Back to achievements</ButtonLink>
        <p className="mt-10 border-l-8 border-black pl-4 text-xs font-black uppercase text-neutral-700">{achievement.category}</p>
        <h1 className="mt-5 max-w-5xl text-5xl font-black uppercase leading-tight text-black sm:text-7xl">{achievement.title}</h1>
        <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-neutral-700">{achievement.summary}</p>
      </section>

      <Section className="min-h-[calc(100svh-4rem)]">
        <article className="max-w-4xl border-2 border-black bg-white p-6 shadow-[10px_10px_0_#050505] sm:p-8">
          <dl className="grid gap-4 border-b-2 border-black pb-6 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-black uppercase text-neutral-600">Period</dt>
              <dd className="mt-2 text-2xl font-black uppercase text-black">{achievement.period}</dd>
            </div>
            <div>
              <dt className="text-xs font-black uppercase text-neutral-600">Category</dt>
              <dd className="mt-2 text-2xl font-black uppercase text-black">{achievement.category}</dd>
            </div>
          </dl>

          <h2 className="mt-8 text-2xl font-black uppercase text-black">Key details</h2>
          <ul className="mt-5 space-y-3">
            {achievement.details.map((detail) => (
              <li key={detail} className="flex gap-3 text-sm font-medium leading-6 text-neutral-700">
                <span className="mt-2 size-2 shrink-0 bg-black" />
                {detail}
              </li>
            ))}
          </ul>
        </article>
      </Section>
    </>
  );
}
