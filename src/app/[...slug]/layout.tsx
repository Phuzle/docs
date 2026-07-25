import Image from 'next/image';
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { apps } from '@/lib/apps';

// Maps each app's icon (see src/lib/apps.ts) onto its root-folder tab in the sidebar switcher —
// apps without an icon just keep Fumadocs' default (no icon), nothing else needs to change here
// when a new app is added.
const iconByUrl = new Map(apps.filter((app) => app.icon).map((app) => [`/${app.slug}`, app.icon!]));

export default async function Layout({ children, params }: LayoutProps<'/[...slug]'>) {
  const { slug } = await params;
  const app = apps.find((entry) => entry.slug === slug?.[0]);

  return (
    <DocsLayout
      tree={source.getPageTree()}
      tabs={{
        transform: (option) => {
          const icon = iconByUrl.get(option.url);
          if (!icon) return option;
          return {
            ...option,
            icon: <Image src={icon} alt="" width={20} height={20} className="rounded-sm" />,
          };
        },
      }}
      {...baseOptions(app)}
    >
      {children}
    </DocsLayout>
  );
}
