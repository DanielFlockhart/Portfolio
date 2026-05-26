import { profile } from "@/lib/site";
import { InlineLink } from "@/components/ButtonLink";

export function Footer() {
  return (
    <footer className="border-t-2 border-black bg-white px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm font-semibold text-black md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}.</p>
        <div className="flex flex-wrap gap-4">
          {profile.links.map((link) => (
            <InlineLink key={link.label} link={link} />
          ))}
        </div>
      </div>
    </footer>
  );
}
