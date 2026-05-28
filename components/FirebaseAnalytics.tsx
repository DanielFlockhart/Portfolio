"use client";

import { useEffect, useSyncExternalStore } from "react";

import { getFirebaseClientApp } from "@/lib/firebase/client";

type AnalyticsConsent = "loading" | "unknown" | "granted" | "denied";

const analyticsConsentKey = "portfolio.analyticsConsent";
let fallbackConsent: AnalyticsConsent = "unknown";

function storedConsent(): AnalyticsConsent {
  if (typeof window === "undefined") return "loading";

  try {
    const value = window.localStorage.getItem(analyticsConsentKey);
    return value === "granted" || value === "denied" ? value : "unknown";
  } catch {
    return fallbackConsent;
  }
}

function subscribeToConsentChange(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(analyticsConsentKey, onChange);

  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(analyticsConsentKey, onChange);
  };
}

export function FirebaseAnalytics() {
  const consent = useSyncExternalStore(subscribeToConsentChange, storedConsent, () => "loading");

  useEffect(() => {
    if (consent !== "granted") return;

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
  }, [consent]);

  function chooseConsent(nextConsent: Exclude<AnalyticsConsent, "loading" | "unknown">) {
    try {
      window.localStorage.setItem(analyticsConsentKey, nextConsent);
    } catch {
      fallbackConsent = nextConsent;
    }

    window.dispatchEvent(new Event(analyticsConsentKey));
  }

  if (consent !== "unknown") return null;

  return (
    <div
      role="dialog"
      aria-label="Analytics preferences"
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl border-2 border-black bg-white p-4 shadow-[8px_8px_0_#050505]"
    >
      <p className="text-sm font-bold leading-6 text-black">
        I use Firebase Analytics to understand basic site usage. You can allow it or keep the site analytics-free.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => chooseConsent("granted")}
          className="kinetic-button border-2 border-black bg-black px-4 py-2 text-xs font-black uppercase text-white"
        >
          Allow analytics
        </button>
        <button
          type="button"
          onClick={() => chooseConsent("denied")}
          className="kinetic-button-secondary border-2 border-black bg-white px-4 py-2 text-xs font-black uppercase text-black"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
