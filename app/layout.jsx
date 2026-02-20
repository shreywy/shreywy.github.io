'use client';

import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { SmoothScroll } from '@/components/providers/SmoothScroll';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import { MeshGradient } from '@/components/MeshGradient';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Shrey Mistry - Software Engineer & Full-Stack Developer" />
        <meta property="og:title" content="Shrey Mistry's Portfolio" />
        <meta property="og:description" content="Check out my modern, reactive portfolio" />
        <meta property="og:image" content="/images/site.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Shrey Mistry</title>
        <link rel="icon" href="/images/icon.png" type="image/png" />
      </head>
      <body>
        <ThemeProvider>
          <SmoothScroll>
            <MeshGradient />
            <Sidebar />
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
