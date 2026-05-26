import { cn } from "@/lib/utils";

export function Section({
  eyebrow,
  title,
  children,
  className,
}: {
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("section-shell relative border-t-2 border-black px-6 py-16 sm:py-20", className)}>
      <div className="mx-auto max-w-7xl min-w-0">
        {(eyebrow || title) && (
          <div className="mb-10 grid min-w-0 gap-5 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
            {eyebrow ? (
              <p className="border-l-8 border-black pl-4 text-xs font-black uppercase text-black">{eyebrow}</p>
            ) : null}
            {title ? <h2 className="min-w-0 max-w-4xl text-2xl font-black uppercase leading-tight text-black sm:text-5xl">{title}</h2> : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
