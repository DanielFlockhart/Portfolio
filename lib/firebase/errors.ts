export function formatFirebaseError(error: unknown) {
  if (error instanceof Error) {
    const details =
      "details" in error && typeof error.details === "string"
        ? error.details
        : error.message;
    const code = "code" in error ? `code=${String(error.code)} ` : "";

    return `${code}${details}`.trim();
  }

  if (typeof error === "string") return error;

  return "Unknown Firebase error";
}
