"use client";

import { useEffect } from "react";

import { getFirebaseClientApp } from "@/lib/firebase/client";

export function FirebaseAnalytics() {
  useEffect(() => {
    let cancelled = false;

    async function initialiseAnalytics() {
      const { getAnalytics, isSupported } = await import("firebase/analytics");

      if (!cancelled && (await isSupported())) {
        getAnalytics(getFirebaseClientApp());
      }
    }

    initialiseAnalytics().catch((error) => {
      if (process.env.NODE_ENV !== "production") {
        console.warn("Firebase Analytics could not be initialized.", error);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
