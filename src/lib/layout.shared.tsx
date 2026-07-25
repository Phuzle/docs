import Image from 'next/image';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';
import type { AppEntry } from './apps';

/**
 * `app` is the current section's entry from the apps registry (see apps.ts), when browsing under
 * an app's own docs root (e.g. /messages/*). The nav brand then shows that app's name/icon
 * instead of the generic "Phuzle Docs" — a docs page IS that app's homepage as far as a visitor
 * (or an OAuth consent-screen reviewer checking the configured homepage URL) is concerned, so the
 * page chrome needs to say the app's name, not the umbrella site's.
 */
export function baseOptions(app?: AppEntry): BaseLayoutProps {
  return {
    nav: {
      title: app ? (
        <span className="flex items-center gap-2">
          {app.icon ? <Image src={app.icon} alt="" width={20} height={20} className="rounded-sm" /> : null}
          {app.name}
        </span>
      ) : (
        appName
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
