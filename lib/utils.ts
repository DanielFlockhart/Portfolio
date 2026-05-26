export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function absoluteUrl(path = "") {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://danielflockhart.com";
  return `${siteUrl.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}
