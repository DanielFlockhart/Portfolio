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
    <Section eyebrow="Contact" title="Hiring, collaborating, or building something difficult?" className="min-h-[calc(100svh-4rem)] pt-20">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8">
        <p className="max-w-2xl text-center text-lg font-medium leading-8 text-neutral-700">
          For roles, collaborations or technical conversations, email me directly at{" "}
          <a href={`mailto:${profile.email}`} className="break-all font-black text-black underline decoration-black underline-offset-4">
            {profile.email}
          </a>
          .
        </p>
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
