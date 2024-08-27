import React from 'react'
import RootLayout from '../../components/RootLayout';

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootLayout>
      {children}
    </RootLayout>
  );
}
