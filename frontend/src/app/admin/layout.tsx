import React from 'react'
import AdminLayout from '../../components/AdminLayout';

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AdminLayout>
      {children}
    </AdminLayout>
  );
}
