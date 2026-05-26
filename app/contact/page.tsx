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
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-6 text-neutral-700">
          <p className="border-l-8 border-black bg-white py-2 pl-5 text-lg font-medium leading-8">
            For roles, collaborations or technical conversations, email me directly at{" "}
            <a href={`mailto:${profile.email}`} className="break-all font-black text-black underline decoration-black underline-offset-4">
              {profile.email}
            </a>
            .
          </p>
          <div className="border-2 border-black bg-white p-6">
            <h2 className="text-xl font-black uppercase text-black">Good reasons to contact me</h2>
            <ul className="mt-5 space-y-3 text-sm font-medium leading-6">
              <li>AI / ML engineering roles with real-world deployment requirements.</li>
              <li>Full-stack product engineering roles where speed and ownership matter.</li>
              <li>Startup, research or technical collaborations.</li>
              <li>Feedback on the site, project writeups or portfolio structure.</li>
            </ul>
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
