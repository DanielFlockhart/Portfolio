import "server-only";

import { FieldValue, type DocumentData } from "firebase-admin/firestore";

import { projects as fallbackProjects } from "@/lib/site";
import type { ContactMessage, Project } from "@/lib/types";
import { getAdminDb } from "@/lib/firebase/admin";
import { formatFirebaseError } from "@/lib/firebase/errors";

const localContentOverrideSlugs = new Set([
  "matched-stay",
  "ai-drug-discovery-pipeline",
  "cyber-security-projects",
  "game-jams",
  "assorted-phone-apps",
  "reinforcement-learning-cars",
  "digital-chemistry-research",
  "other-ai-projects",
]);

const hiddenProjectSlugs = new Set(["portfolio-platform"]);

function normaliseSpotlight(data: DocumentData): Project["spotlight"] {
  if (!data.spotlight || typeof data.spotlight !== "object") return undefined;

  const spotlight = data.spotlight as DocumentData;
  if (!spotlight.title || !spotlight.body) return undefined;

  return {
    eyebrow: String(spotlight.eyebrow ?? "Project focus"),
    title: String(spotlight.title),
    body: String(spotlight.body),
    points: Array.isArray(spotlight.points) ? spotlight.points.map(String) : undefined,
  };
}

function normaliseProject(slug: string, data: DocumentData): Project | null {
  if (!data.title || !data.summary) return null;

  return {
    slug,
    title: String(data.title),
    kicker: String(data.kicker ?? ""),
    summary: String(data.summary),
    description: String(data.description ?? data.summary),
    category: String(data.category ?? "Project"),
    year: String(data.year ?? ""),
    status: (data.status ?? "Prototype") as Project["status"],
    visibility: (data.visibility ?? "published") as Project["visibility"],
    featured: Boolean(data.featured),
    featuredOrder: Number(data.featuredOrder ?? 999),
    stack: Array.isArray(data.stack) ? data.stack.map(String) : [],
    highlights: Array.isArray(data.highlights) ? data.highlights.map(String) : [],
    metrics: Array.isArray(data.metrics) ? data.metrics : [],
    spotlight: normaliseSpotlight(data),
    links: Array.isArray(data.links) ? data.links : [],
  };
}

function publishedFallbackProjects() {
  return fallbackProjects.filter((project) => project.visibility === "published" && !hiddenProjectSlugs.has(project.slug));
}

function localProjectOverride(project: Project) {
  const fallback = fallbackProjects.find((item) => item.slug === project.slug);
  if (!fallback) return project;
  if (localContentOverrideSlugs.has(project.slug)) return { ...project, ...fallback };
  return { ...project, status: fallback.status };
}

function sortProjects(projects: Project[]) {
  return projects.sort((a, b) => (a.featuredOrder ?? 999) - (b.featuredOrder ?? 999));
}

function selectProjects(projects: Project[], options: { featuredOnly?: boolean }) {
  return sortProjects(projects.filter((project) => (options.featuredOnly ? project.featured : true)));
}

function mergeProjects(firebaseProjects: Project[]) {
  const projectsBySlug = new Map(publishedFallbackProjects().map((project) => [project.slug, project]));

  for (const project of firebaseProjects) {
    if (hiddenProjectSlugs.has(project.slug)) continue;
    projectsBySlug.set(project.slug, localProjectOverride(project));
  }

  return Array.from(projectsBySlug.values());
}

export async function getPortfolioProjects(options: { featuredOnly?: boolean } = {}) {
  const db = getAdminDb();

  if (!db) {
    return selectProjects(publishedFallbackProjects(), options);
  }

  try {
    const snapshot = await db.collection("projects").where("visibility", "==", "published").get();

    const firebaseProjects = snapshot.docs
      .map((doc) => normaliseProject(doc.id, doc.data()))
      .filter((project): project is Project => Boolean(project));

    return selectProjects(mergeProjects(firebaseProjects), options);
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        `Could not read Firestore projects. Falling back to local portfolio data. ${formatFirebaseError(error)}`,
      );
    }

    return selectProjects(publishedFallbackProjects(), options);
  }
}

export async function getPortfolioProject(slug: string) {
  if (hiddenProjectSlugs.has(slug)) return null;

  const db = getAdminDb();

  if (db) {
    try {
      const doc = await db.collection("projects").doc(slug).get();
      if (doc.exists) {
        const project = normaliseProject(doc.id, doc.data() ?? {});
        if (project?.visibility === "published") return localProjectOverride(project);
      }
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          `Could not read Firestore project ${slug}. Falling back to local data. ${formatFirebaseError(error)}`,
        );
      }
    }
  }

  return fallbackProjects.find((project) => project.slug === slug && project.visibility === "published") ?? null;
}

export async function saveContactMessage(message: ContactMessage & { userAgent?: string }) {
  const db = getAdminDb();

  if (!db) {
    return { saved: false, reason: "Firebase Admin SDK is not configured." };
  }

  await db.collection("contactMessages").add({
    ...message,
    createdAt: FieldValue.serverTimestamp(),
    source: "portfolio",
  });

  return { saved: true };
}
