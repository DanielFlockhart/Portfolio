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

export function projectStackTagClassName(tag: string) {
  const normalised = tag.toLowerCase();
  const includesAny = (terms: string[]) => terms.some((term) => normalised.includes(term));

  if (/\b(ai|ml)\b/.test(normalised) || includesAny([
    "algorithmic",
    "autoencoder",
    "chemberta",
    "computer vision",
    "custom neural",
    "data analysis",
    "deep",
    "drug",
    "feed-forward",
    "genetic",
    "gru",
    "image processing",
    "k-means",
    "learning",
    "llm",
    "machine",
    "model",
    "molecular skeleton",
    "neural",
    "nlp",
    "openai",
    "pca",
    "pytorch",
    "rdkit",
    "representation",
    "sentiment",
    "smiles",
    "supervised",
    "t-sne",
    "tanimoto",
    "transformer",
    "unsupervised",
  ])) {
    return "bg-[#bfe8ff] text-[#06415f]";
  }

  if (includesAny([
    "api",
    "app",
    "approval",
    "automation",
    "cloud",
    "database",
    "deployment",
    "firebase",
    "firestore",
    "flask",
    "frontend",
    "gds",
    "google",
    "mobile",
    "native",
    "next",
    "node",
    "normalisation",
    "product",
    "python",
    "react",
    "supplier",
    "system",
    "tailwind",
    "testing",
    "tmc",
    "typescript",
    "ui",
  ])) {
    return "bg-[#b7f7c0] text-[#064e1f]";
  }

  if (/\b(security|osint|linux|networking|government|courses)\b/.test(normalised)) {
    return "bg-[#ffd1dc] text-[#6f1231]";
  }

  if (normalised.includes("c#") || /\b(unity|blender|game|ludum|physics|simulation)\b/.test(normalised)) {
    return "bg-[#ffe08a] text-[#6b4700]";
  }

  if (/\b(research|communication|molecular|skeleton|chemistry|image|vision|representation)\b/.test(normalised)) {
    return "bg-[#d7ccff] text-[#31205f]";
  }

  return "bg-neutral-100 text-neutral-800";
}
