import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ConsentPopup from '@/components/consent-popup';
import { ThemeProvider } from '@/components/theme-provider';
import WelcomeNotice from '@/components/welcome-notice';

export const metadata: Metadata = {
  title: {
    default: 'Harsh Parmar | Minimalist, Poet & Programmer',
    template: '%s | Harsh Parmar',
  },
  description: 'The personal website of Harsh Parmar, a minimalist, poet, and programmer. Exploring Advaita Vedanta, technology, and the elegance of simplicity.',
  keywords: ['Harsh Parmar', 'RyuVerse', 'Ryu', 'Minimalism', 'Poetry', 'Programming', 'Advaita Vedanta', 'Blog', 'Portfolio', 'Software Developer'],
  authors: [{ name: 'Harsh Parmar', url: 'https://hiamryu.com' }],
  creator: 'Harsh Parmar',
  openGraph: {
    title: 'Harsh Parmar | Minimalist, Poet & Programmer',
    description: 'The personal website of Harsh Parmar, exploring technology, philosophy, and creative expression.',
    url: 'https://hiamryu.com',
    siteName: 'RyuVerse',
    images: [
      {
        url: 'https://placehold.co/1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Harsh Parmar - RyuVerse',
      },
    ],
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
            <WelcomeNotice />
        </ThemeProvider>
      </body>
    </html>
  );
}
