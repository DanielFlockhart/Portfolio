import type { Metadata } from "next";
import Link from "next/link";

import { Section } from "@/components/Section";
import { achievements } from "@/lib/site";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Personal achievements across endurance sport, combat sport, performance, academics and entrepreneurship by Daniel Flockhart.",
};

export default function AchievementsPage() {
  return (
    <Section eyebrow="Achievements" title="Personal Achievements" className="min-h-[calc(100svh-4rem)] pt-20">
      <p className="mb-10 max-w-3xl border-l-8 border-black bg-white py-2 pl-5 text-lg font-medium leading-8 text-neutral-700">
        A concise record of demanding milestones that shaped how I handle pressure, discipline, performance and long-term effort.
      </p>

      <div className="grid gap-5 lg:grid-cols-3">
        {achievements.map((achievement) => (
          <Link
            key={achievement.slug}
            href={`/achievements/${achievement.slug}`}
            className="group flex min-h-full flex-col border-2 border-black bg-white p-5 shadow-[8px_8px_0_#050505] transition duration-200 hover:-translate-y-1 hover:shadow-[12px_12px_0_#050505]"
          >
            <div className="flex flex-col gap-3 border-b-2 border-black pb-5">
              <p className="text-xs font-black uppercase text-neutral-600">{achievement.category}</p>
              <h2 className="text-3xl font-black uppercase leading-tight text-black">{achievement.title}</h2>
              <span className="w-fit border-2 border-black px-3 py-1 text-xs font-black uppercase text-black">
                {achievement.period}
              </span>
            </div>

            <p className="mt-5 text-sm font-medium leading-6 text-neutral-700">{achievement.summary}</p>

            <span className="mt-auto inline-block pt-6 text-sm font-black uppercase text-black transition group-hover:translate-x-1">
              View full achievement -&gt;
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
