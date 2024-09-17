import React from 'react'
import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import "./globals.css";
import { getXCsrfToken } from '../utils/getXCsrfToken';
import ReactQueryClientProvider from '../components/ReactQueryClientProvider';
import MUIThemeProvider from '../components/MUIThemeProvider';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function CommonLayoutComponent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const xCsrfToken = getXCsrfToken();

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ReactQueryClientProvider xCsrfToken={xCsrfToken}>
            <MUIThemeProvider>
              {children}
            </MUIThemeProvider>
          </ReactQueryClientProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
