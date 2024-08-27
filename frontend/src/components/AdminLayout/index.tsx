import { ReactNode } from 'react';
import { Grid } from '@mui/material';

interface IAdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: IAdminLayoutProps) => {
  return (
    <Grid xs={12}>
      {children}
    </Grid>
  );
};

export default AdminLayout;
