import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jacob Rucker | Commercial Sales Representative & GTM Engineer',
  description: 'Shipping GTM automation and AI tooling. Building PitPal for elevator techs. Proven 100%+ quota attainment across roles.',
  keywords: ['Jacob Rucker', 'Sales', 'dbt Labs', 'GTM', 'Data Stack', 'Commercial Sales'],
  authors: [{ name: 'Jacob Rucker' }],
  creator: 'Jacob Rucker',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jacobrucker.com',
    title: 'Jacob Rucker | Commercial Sales Representative & GTM Engineer',
    description: 'Shipping GTM automation and AI tooling. Proven 100%+ quota attainment across roles.',
    siteName: 'Jacob Rucker Portfolio',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Jacob Rucker Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jacob Rucker | Commercial Sales Representative & GTM Engineer',
    description: 'Shipping GTM automation and AI tooling. Proven 100%+ quota attainment across roles.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scrollbar-thin font-sans">
        <div className="hex-pattern fixed inset-0 pointer-events-none" />
        {children}
      </body>
    </html>
  );
}
