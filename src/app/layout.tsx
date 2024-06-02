// import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

// import bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// import glightbox
import 'glightbox/dist/css/glightbox.css';

import React from 'react';
import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import './globals.css';

// import customised components
import TopBar from '@/app/components/topBar/TopBar';
import Header from '@/app/components/header/Header';
import BackToTopBtn from '@/app/components/backToTopBtn/BackToTopBtn';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Restaurant',
  description: 'Restaurant App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={playfair.className}>
        <TopBar />
        <Header />
        {children}
        <BackToTopBtn />
      </body>
      <script
        // src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'
        src={'../bootstrap/bootstrap'}
        crossOrigin='anonymous'
      ></script>
    </html>
  );
}
