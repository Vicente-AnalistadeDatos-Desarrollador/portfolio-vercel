import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Portfolio - Analista de Datos | Científico de Datos',
  description: 'Portfolio profesional de Analista y Científico de Datos especializado en Big Data, Machine Learning y Análisis de Datos',
  keywords: ['Data Science', 'Big Data', 'Machine Learning', 'Data Analyst', 'Portfolio'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
