import "server-only";

import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore, type Firestore } from "firebase-admin/firestore";

import { formatFirebaseError } from "@/lib/firebase/errors";

let cachedDb: Firestore | null | undefined;

function parseFirebaseConfigProjectId() {
  const raw = process.env.FIREBASE_CONFIG;
  if (!raw) return undefined;

  try {
    const parsed = JSON.parse(raw) as { projectId?: string };
    return parsed.projectId;
  } catch {
    return undefined;
  }
}

function getPrivateKey() {
  return process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");
}

function canUseApplicationDefaultCredentials() {
  return Boolean(
    process.env.NODE_ENV === "production" ||
      process.env.FIREBASE_CONFIG ||
      process.env.GOOGLE_APPLICATION_CREDENTIALS ||
      process.env.FIRESTORE_EMULATOR_HOST ||
      process.env.FIREBASE_USE_APPLICATION_DEFAULT === "true",
  );
}

export function getAdminDb() {
  if (cachedDb !== undefined) return cachedDb;

  try {
    if (!getApps().length) {
      const projectId = process.env.FIREBASE_PROJECT_ID ?? parseFirebaseConfigProjectId();
      const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
      const privateKey = getPrivateKey();

      if (projectId && clientEmail && privateKey) {
        initializeApp({
          credential: cert({ projectId, clientEmail, privateKey }),
          projectId,
        });
      } else if (canUseApplicationDefaultCredentials()) {
        // On Firebase App Hosting, FIREBASE_CONFIG is automatically provided and the Admin SDK
        // can initialise with the runtime service account.
        initializeApp(projectId ? { projectId } : undefined);
      } else {
        cachedDb = null;
        return null;
      }
    }

    cachedDb = getFirestore();
    return cachedDb;
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        `Firebase Admin SDK is not configured. Falling back to local portfolio data. ${formatFirebaseError(error)}`,
      );
    }

    cachedDb = null;
    return null;
  }
}
