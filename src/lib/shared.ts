export const appName = 'Phuzle Docs';
// Each app's docs live directly at /<app-name>/... (e.g. /messages/privacy), not /docs/<app>/...
// — content/docs/<app>/ folders are marked `root: true` so Fumadocs treats each as its own
// standalone doc tree, switchable via the tabs UI. See content/docs/messages/meta.json.
export const docsRoute = '';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

export const gitConfig = {
  user: 'Phuzle',
  repo: 'docs',
  branch: 'main',
};
