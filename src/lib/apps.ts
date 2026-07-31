/**
 * Registry of every app/package with docs on this site — the home page renders one card per
 * entry here. Add a new app by adding an entry here and a root folder (`root: true` in its
 * meta.json) under content/docs/<slug>/ — nothing else needs to change for it to show up.
 */
export interface AppEntry {
  slug: string;
  name: string;
  tagline: string;
  status: "live" | "in-development" | "planned";
  /** Path under /public, e.g. '/icons/messages.png'. Omit to fall back to no icon. */
  icon?: string;
  version?: string;
  github?: `https://github.com/phuzle/${string}`;
}

export const apps: AppEntry[] = [
  {
    slug: "messages",
    name: "Messages",
    tagline:
      "A smart, local-first SMS app that sorts your texts, surfaces OTP codes, and tracks your spending — automatically.",
    status: "live",
    icon: "/icons/messages.png",
    version: "0.0.1-beta.9",
    github: "https://github.com/phuzle/messages",
  },
];
