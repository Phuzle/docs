import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { apps } from '@/lib/apps';

const statusLabel: Record<(typeof apps)[number]['status'], string> = {
  live: 'Live',
  'in-development': 'In development',
  planned: 'Planned',
};

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center px-6 py-20">
      <div className="w-full max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Phuzle Docs</h1>
        <p className="mt-4 text-lg text-fd-muted-foreground">
          Documentation for every Phuzle app and package, in one place.
        </p>
      </div>

      <div className="mt-14 grid w-full max-w-3xl gap-4 sm:grid-cols-2">
        {apps.map((app) => (
          <Link key={app.slug} href={`/${app.slug}`} className="group">
            <Card className="h-full transition-colors group-hover:border-fd-primary/50">
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="text-xl">{app.name}</CardTitle>
                  <Badge variant={app.status === 'live' ? 'default' : 'secondary'}>
                    {statusLabel[app.status]}
                  </Badge>
                </div>
                <CardDescription className="mt-1">{app.tagline}</CardDescription>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-fd-primary opacity-0 transition-opacity group-hover:opacity-100">
                  View docs <ArrowRight className="size-3.5" />
                </span>
              </CardHeader>
            </Card>
          </Link>
        ))}

        <Card className="flex h-full items-center justify-center border-dashed text-fd-muted-foreground">
          <CardHeader className="text-center">
            <CardTitle className="text-base font-medium">More apps coming soon</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </main>
  );
}
