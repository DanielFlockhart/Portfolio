import type { Project } from "@/lib/types";

export function projectStatusClassName(status: Project["status"]) {
  const styles: Record<Project["status"], string> = {
    Live: "bg-[#b7f7c0] text-[#064e1f]",
    Research: "bg-[#bfe8ff] text-[#06415f]",
    Archived: "bg-neutral-200 text-neutral-700",
    Prototype: "bg-[#ffe08a] text-[#6b4700]",
  };

  return styles[status];
}
