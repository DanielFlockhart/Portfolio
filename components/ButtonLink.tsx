import Link from "next/link";

import type { LinkItem } from "@/lib/types";
import { cn } from "@/lib/utils";

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const className = cn(
    "inline-flex items-center justify-center border-2 border-black px-5 py-3 text-sm font-black uppercase transition duration-200 hover:-translate-y-0.5",
    variant === "primary" && "kinetic-button bg-black text-white",
    variant === "secondary" && "kinetic-button-secondary bg-white text-black hover:bg-black hover:text-white",
  );

  if (isExternal) {
    return (
      <a href={href} className={className} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function InlineLink({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noreferrer" : undefined}
      className="group -mx-1 inline-flex items-center gap-1 border-b border-black px-1 text-sm font-black uppercase text-black transition hover:bg-black hover:text-white"
    >
      {link.label}
      <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
        ↗
      </span>
    </a>
  );
}
