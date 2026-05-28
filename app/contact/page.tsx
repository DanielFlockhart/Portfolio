import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { profile } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Daniel Flockhart about AI, software engineering, product and startup opportunities.",
};

export default function ContactPage() {
  return (
    <Section eyebrow="Contact" title="Hiring, collaborating, or discussing technical work?" className="min-h-[calc(100svh-4rem)] pt-20">
      <div className="mx-auto flex w-full max-w-[calc(100vw-3rem)] flex-col items-center gap-8 sm:max-w-3xl">
        <p className="w-full min-w-0 max-w-full text-center text-lg font-medium leading-8 text-neutral-700 sm:max-w-2xl">
          For roles, collaborations or technical conversations, email me directly at{" "}
          <span className="mt-1 block sm:mt-0 sm:inline">
            <a href={`mailto:${profile.email}`} className="whitespace-nowrap text-sm font-black text-black underline decoration-black underline-offset-4 sm:text-lg">
              {profile.email}
            </a>
            .
          </span>
        </p>
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
