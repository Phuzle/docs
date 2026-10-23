import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/**
 * Relay's pages were regrouped by product area (concepts/guides/reference -> sdk, cli, api, streams, ...).
 * The old URLs are linked from the shipped CLI, SDK READMEs, error messages and the apps, so they redirect for good.
 * @type {import('next').NextConfig['redirects']}
 */
const relayMoved = async () => [
      { source: '/relay/quickstart', destination: '/relay/get-started/quickstart', permanent: true },
      { source: '/relay/guides/sdk', destination: '/relay/sdk', permanent: true },
      { source: '/relay/guides/on-call', destination: '/relay/sdk/on-call', permanent: true },
      { source: '/relay/guides/cli', destination: '/relay/cli', permanent: true },
      { source: '/relay/reference/api', destination: '/relay/api', permanent: true },
      { source: '/relay/reference/errors', destination: '/relay/api/errors', permanent: true },
      { source: '/relay/reference/message-schema', destination: '/relay/api/message-schema', permanent: true },
      { source: '/relay/concepts/delivery', destination: '/relay/api/delivery', permanent: true },
      { source: '/relay/guides/streams', destination: '/relay/streams', permanent: true },
      { source: '/relay/guides/integrations', destination: '/relay/integrations', permanent: true },
      { source: '/relay/guides/github-integration', destination: '/relay/integrations/github', permanent: true },
      { source: '/relay/guides/console', destination: '/relay/console', permanent: true },
      { source: '/relay/concepts/members-and-roles', destination: '/relay/console/members-and-roles', permanent: true },
      { source: '/relay/concepts/limits', destination: '/relay/console/limits', permanent: true },
      { source: '/relay/guides/receiving-on-android', destination: '/relay/app/receiving-on-android', permanent: true },
      { source: '/relay/concepts/pairing-links', destination: '/relay/app/pairing-links', permanent: true },
      { source: '/relay/guides/actions', destination: '/relay/app/actions', permanent: true },
      { source: '/relay/concepts/encryption', destination: '/relay/security/encryption', permanent: true },
];

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  redirects: relayMoved,
};

export default withMDX(config);
