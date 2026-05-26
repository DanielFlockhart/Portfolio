import Link from "next/link";

import { projectStatusClassName } from "@/lib/projectStatus";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, starred = false }: { project: Project; starred?: boolean }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="project-card group relative block min-h-full overflow-hidden border-2 border-black bg-white p-5 transition duration-200 hover:-translate-y-1 hover:shadow-[10px_10px_0_#050505]"
    >
      <div className="absolute inset-x-0 top-0 h-3 border-b-2 border-black bg-[repeating-linear-gradient(90deg,#050505_0_14px,transparent_14px_28px)] opacity-90" />
      <div className="relative z-10 mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase text-neutral-600">{project.category}</p>
          <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-black">{project.title}</h3>
        </div>
        <div className="flex shrink-0 items-start gap-2">
          {starred ? (
            <span
              aria-label="Featured project"
              className="grid size-9 place-items-center border-2 border-black bg-[#d4af37] text-xl font-black leading-none text-[#7a4f00] shadow-[3px_3px_0_#050505]"
            >
              ★
            </span>
          ) : null}
          <span className={cn("border-2 border-black px-2 py-1 text-xs font-black uppercase", projectStatusClassName(project.status))}>
            {project.status}
          </span>
        </div>
      </div>

      <p className="relative z-10 mt-4 text-sm font-medium leading-6 text-neutral-700">{project.summary}</p>

      <div className="relative z-10 mt-5 flex flex-wrap gap-2">
        {project.stack.slice(0, 6).map((tech) => (
          <span key={tech} className="border border-black bg-white px-2 py-1 text-xs font-bold uppercase text-black">
            {tech}
          </span>
        ))}
      </div>

      <div className="relative z-10 mt-6 flex flex-col gap-3 border-t-2 border-black pt-5 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-sm font-black text-black">{project.year}</span>
        <span className="text-sm font-black uppercase text-black transition group-hover:translate-x-1">
          View case study -&gt;
        </span>
      </div>
    </Link>
  );
}
