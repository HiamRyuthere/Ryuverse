import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ConsentPopup from '@/components/consent-popup';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: {
    default: 'RyuVerse | Harsh Parmar',
    template: '%s | RyuVerse',
  },
  description: 'The personal website of Harsh Parmar, a minimalist, poet, and programmer. Exploring Advaita Vedanta, technology, and minimalism.',
  keywords: ['Harsh Parmar', 'RyuVerse', 'Ryu', 'Minimalism', 'Poetry', 'Programming', 'Advaita Vedanta', 'Blog', 'Portfolio'],
  authors: [{ name: 'Harsh Parmar', url: 'https://hiamryu.com' }],
  creator: 'Harsh Parmar',
  openGraph: {
    title: 'RyuVerse | Harsh Parmar',
    description: 'A Minimalist, Poet & Programmer.',
    url: 'https://hiamryu.com',
    siteName: 'RyuVerse',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Belleza&family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
            attribute="class"
            defaultTheme="theme-mint"
            enableSystem={false}
            disableTransitionOnChange
        >
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
            <ConsentPopup />
            <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
