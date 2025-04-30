import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Using Inter for a modern look
import './globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans', // Using sans variable
});


export const metadata: Metadata = {
  title: 'Bachelor Bash Bonanza',
  description: 'Cheers and Challenges for the Bachelor!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Apply dark class directly if we want dark mode by default
    // Removed Geist fonts in favor of Inter
    <html lang="en" className="dark">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
