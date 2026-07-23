import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Geist } from 'next/font/google';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

// TODO: replace with the real production domain once docs.phuzle.com is live.
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: 'Phuzle Docs',
    template: '%s | Phuzle Docs',
  },
  description: 'Documentation for every Phuzle app and package, in one place.',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={cn('font-sans', geist.variable)} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
