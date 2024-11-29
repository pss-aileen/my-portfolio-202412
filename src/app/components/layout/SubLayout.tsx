import React from 'react';
import Footer from '../common/Footer';

export default function SubLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className='px-6 pt-32 pb-32 max-w-screen-lg mx-auto lg:pt-48 '>{children}</div>
      <Footer />
    </>
  );
}
