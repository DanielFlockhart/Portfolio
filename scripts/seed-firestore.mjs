import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = join(__dirname, "..");

if (!getApps().length) {
  initializeApp();
}

const db = getFirestore();
const projectsPath = join(root, "seed", "projects.json");
const projects = JSON.parse(await readFile(projectsPath, "utf8"));

for (const project of projects) {
  const { slug, ...data } = project;
  await db.collection("projects").doc(slug).set(data, { merge: true });
  console.log(`Seeded projects/${slug}`);
}

console.log("Done.");
