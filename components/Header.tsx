import Link from "next/link";

const nav = [
  { label: "Projects", href: "/projects" },
  { label: "Writing", href: "/writing" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-black bg-white/[0.88] px-4 backdrop-blur-xl sm:px-6">
      <nav className="mx-auto flex min-h-16 max-w-7xl flex-wrap items-center justify-between gap-3 py-3 sm:flex-nowrap sm:py-0">
        <Link href="/" className="group flex min-w-0 items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center border-2 border-black bg-white text-sm font-black text-black transition group-hover:-translate-y-0.5 group-hover:bg-black group-hover:text-white">
            DF
          </span>
          <span className="hidden text-sm font-black uppercase text-black sm:block">Daniel Flockhart</span>
        </Link>

        <div className="flex min-w-0 basis-full items-center justify-center border-2 border-black bg-white sm:basis-auto">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="min-w-0 flex-1 border-l-2 border-black px-1 py-2 text-center text-[0.68rem] font-black uppercase text-black transition first:border-l-0 hover:bg-black hover:text-white sm:flex-none sm:px-4 sm:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
