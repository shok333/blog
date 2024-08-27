"use client"
import { ReactNode } from 'react';
import { Grid } from '@mui/material';
import { Acide } from '../Acide';
import { Header } from '../Header';

interface IRootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: IRootLayoutProps) => {
  return (
    <Grid>
      <Header />
      <Grid
        container
        justifyContent="center"
        spacing={1}
      >
        <Grid
          item
          xs={12}
          md={10}
          lg={8}
          xl={6}
          sx={{
            maxWidth: '800px !important'
          }}
        >
          {children}
        </Grid>
        <Grid
          item
          xs={0}
          lg={4}
          sx={{
            display: { xs: 'none', lg: 'block' },
            maxWidth: '400px !important'
          }}
        >
          <Grid
            sx={{
              position: 'sticky',
              top: 0
            }}
          >
            <Acide />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RootLayout;
