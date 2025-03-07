import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../src/index.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HELO Luxury Air | Private Luxury Air Travel',
  description: 'Experience the epitome of luxury air travel with HELO. Book private jets and helicopters for your exclusive travel needs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
} 