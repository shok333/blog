import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Drawer } from '@mui/material';
import { HeaderMenuList } from '../HeaderMenuList';

const navItems = ['Home', 'About', 'Contact'];

export const Header = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpened((prevState) => !prevState);
  };

  const onClose = () => {
    setIsDrawerOpened(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            sx={{ display: { xs: 'block', lg: 'none' } }}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <HeaderMenuList row />
        </Toolbar>
      </AppBar>
      <Drawer
        open={isDrawerOpened}
        onClose={onClose}
      >
        <HeaderMenuList mobile />
      </Drawer>
    </Box>
  );
}