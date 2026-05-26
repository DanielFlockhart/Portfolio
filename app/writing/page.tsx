import type { Metadata } from "next";

import { Section } from "@/components/Section";
import { writing } from "@/lib/site";

export const metadata: Metadata = {
  title: "Writing",
  description: "Technical notes and project reflections by Daniel Flockhart.",
};

export default function WritingPage() {
  return (
    <Section eyebrow="Writing" title="Technical notes on architecture, research tradeoffs and product lessons." className="pt-20">
      <p className="mb-10 max-w-3xl border-l-8 border-black bg-white py-2 pl-5 text-lg font-medium leading-8 text-neutral-700">
        Short, direct writeups on decisions that shaped the work: what was built, what failed, what improved, and what should happen next.
      </p>
      <div className="grid border-2 border-black bg-white">
        {writing.map((item, index) => (
          <article key={item.title} className="grid gap-4 border-b-2 border-black p-6 last:border-b-0 md:grid-cols-[72px_minmax(0,1fr)_120px]">
            <p className="text-4xl font-black uppercase leading-none text-black">{String(index + 1).padStart(2, "0")}</p>
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-xs font-black uppercase text-neutral-600">{item.status}</p>
                <h2 className="mt-3 text-2xl font-black uppercase leading-tight text-black">{item.title}</h2>
              </div>
            </div>
            <span className="text-sm font-black text-black md:text-right">{item.date}</span>
            <p className="max-w-3xl text-sm font-medium leading-6 text-neutral-700 md:col-start-2">{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
