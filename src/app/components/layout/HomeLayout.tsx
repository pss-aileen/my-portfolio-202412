import React from 'react';
import Header from '../common/Header';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
