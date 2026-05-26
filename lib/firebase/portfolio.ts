import "server-only";

import { FieldValue, type DocumentData } from "firebase-admin/firestore";

import { projects as fallbackProjects } from "@/lib/site";
import type { ContactMessage, Project } from "@/lib/types";
import { getAdminDb } from "@/lib/firebase/admin";

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
    links: Array.isArray(data.links) ? data.links : [],
  };
}

export async function getPortfolioProjects(options: { featuredOnly?: boolean } = {}) {
  const db = getAdminDb();

  if (!db) {
    return fallbackProjects
      .filter((project) => project.visibility === "published")
      .filter((project) => (options.featuredOnly ? project.featured : true))
      .sort((a, b) => (a.featuredOrder ?? 999) - (b.featuredOrder ?? 999));
  }

  try {
    const snapshot = await db
      .collection("projects")
      .where("visibility", "==", "published")
      .orderBy("featuredOrder", "asc")
      .get();

    const firebaseProjects = snapshot.docs
      .map((doc) => normaliseProject(doc.id, doc.data()))
      .filter((project): project is Project => Boolean(project));

    const selected = options.featuredOnly
      ? firebaseProjects.filter((project) => project.featured)
      : firebaseProjects;

    return selected.length ? selected : fallbackProjects.filter((project) => (options.featuredOnly ? project.featured : true));
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("Could not read Firestore projects. Falling back to local portfolio data.", error);
    }

    return fallbackProjects
      .filter((project) => project.visibility === "published")
      .filter((project) => (options.featuredOnly ? project.featured : true))
      .sort((a, b) => (a.featuredOrder ?? 999) - (b.featuredOrder ?? 999));
  }
}

export async function getPortfolioProject(slug: string) {
  const db = getAdminDb();

  if (db) {
    try {
      const doc = await db.collection("projects").doc(slug).get();
      if (doc.exists) {
        const project = normaliseProject(doc.id, doc.data() ?? {});
        if (project?.visibility === "published") return project;
      }
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(`Could not read Firestore project ${slug}. Falling back to local data.`, error);
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
