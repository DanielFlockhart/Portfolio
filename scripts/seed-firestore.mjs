import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = join(__dirname, "..");

async function loadLocalEnv() {
  try {
    const raw = await readFile(join(root, ".env.local"), "utf8");

    for (const line of raw.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;

      const [key, ...valueParts] = trimmed.split("=");
      process.env[key] ??= valueParts.join("=").replace(/^["']|["']$/g, "");
    }
  } catch {
    // .env.local is optional. Explicit shell env vars still work.
  }
}

await loadLocalEnv();

if (!getApps().length) {
  initializeApp(process.env.FIREBASE_PROJECT_ID ? { projectId: process.env.FIREBASE_PROJECT_ID } : undefined);
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
