import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import { metaSchema, pageSchema } from "fumadocs-core/source/schema";
import { remarkSteps } from "fumadocs-core/mdx-plugins/remark-steps";
import { remarkNpm } from "fumadocs-core/mdx-plugins/remark-npm";

// You can customize Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: pageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    // MDX options
    // remarkSteps: turns "### 1. Do this" / "### 2. Do that" headings into a Steps UI.
    // remarkNpm: turns ```package-install fences into npm/pnpm/yarn/bun tabs — used by
    // technical package docs (e.g. Permit) that messages' docs never needed.
    remarkPlugins: [remarkSteps, remarkNpm],
  },
});
