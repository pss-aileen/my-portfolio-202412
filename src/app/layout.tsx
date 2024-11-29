import type { Metadata } from 'next';
import './globals.css';
import HomeLayout from './components/layout/HomeLayout';

export const metadata: Metadata = {
  title: 'Aileen',
  description: 'Aileen Portfolio Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body className={`antialiased text-neutral-600`}>
        <HomeLayout>{children}</HomeLayout>
      </body>
    </html>
  );
}
