/**
 * Registry of every app/package with docs on this site — the home page renders one card per
 * entry here. Add a new app by adding an entry here and a root folder (`root: true` in its
 * meta.json) under content/docs/<slug>/ — nothing else needs to change for it to show up.
 */
export interface AppEntry {
  slug: string;
  name: string;
  tagline: string;
  status: 'live' | 'in-development' | 'planned';
}

export const apps: AppEntry[] = [
  {
    slug: 'messages',
    name: 'Messages',
    tagline: 'A smart, local-first SMS app that sorts your texts, surfaces OTP codes, and tracks your spending — automatically.',
    status: 'live',
  },
];
