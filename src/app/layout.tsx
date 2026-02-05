import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Press_Start_2P } from 'next/font/google';

const pressStart = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: 'Coming Soon',
  description: 'Our website is coming soon. Stay tuned for updates!',
  keywords: ['kelas', 'pplg', 'smecone', 'coming soon'],
  openGraph: {
    title: 'Coming soon',
    description: 'Our website is coming soon',
    type: 'website',
  },
};

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='id'>
      <body className={`${pressStart.className} antialiased`}> 
        {children}
      </body>
    </html>
  )
}