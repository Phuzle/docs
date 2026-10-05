import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { File, Files, Folder } from 'fumadocs-ui/components/files';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import type { MDXComponents } from 'mdx/types';

/**
 * Beyond fumadocs-ui's own defaults (Callout, Card/Cards, headings, code blocks), this
 * registers the extra blocks that reference/API-style docs need — Tabs (framework/package
 * manager switchers), TypeTable (config/option tables), Accordion (FAQs), Files (repo layout
 * trees), and explicit Steps (on top of the `remarkSteps` numbered-heading auto-transform
 * already wired in source.config.ts) — so any doc page can use them without a per-file import.
 */
export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Accordion,
    Accordions,
    File,
    Files,
    Folder,
    Step,
    Steps,
    Tab,
    Tabs,
    TypeTable,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
