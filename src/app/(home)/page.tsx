import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GitBranchPlus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { apps } from "@/lib/apps";

const statusLabel: Record<(typeof apps)[number]["status"], string> = {
  live: "Live",
  "in-development": "In development",
  planned: "Planned",
};

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center px-6 py-20">
      <div className="w-full max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Phuzle Docs
        </h1>
        <p className="mt-4 text-lg text-fd-muted-foreground">
          Documentation for every Phuzle app and package, in one place.
        </p>
      </div>

      <div className="mt-14 flex flex-col w-full max-w-3xl gap-4">
        {apps.map((app) => (
          <Link key={app.slug} href={`/${app.slug}`} className="group">
            <Card className="h-full transition-colors group-hover:bg-fd-accent">
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    {app.icon
                      ? (
                        <Image
                          src={app.icon}
                          alt=""
                          width={36}
                          height={36}
                          className="rounded-lg"
                        />
                      )
                      : null}
                    <div className="">
                      <CardTitle className="text-xl">{app.name}</CardTitle>
                      {app.version && (
                        <CardDescription className="text-xs font-semibold">
                          {app.version}
                        </CardDescription>
                      )}
                    </div>
                  </div>
                  <Badge
                    variant={app.status === "live" ? "default" : "secondary"}
                  >
                    {statusLabel[app.status]}
                  </Badge>
                </div>
                <CardDescription className="mt-1">
                  {app.tagline}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}

        <Card className="flex h-full items-center justify-center border-dashed text-fd-muted-foreground">
          <CardContent>
            <CardTitle className="text-base font-medium w-full">
              More apps coming soon
            </CardTitle>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
