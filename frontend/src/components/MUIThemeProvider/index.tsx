"use client"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          border: '2px solid #1976d2',
          borderRadius: '8px',
          boxShadow: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: '2px solid #1976d2',
          borderRadius: '8px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          border: '2px solid #1976d2',
          borderRadius: '8px',
        },
      },
    },
    // Добавьте другие компоненты по мере необходимости
  },
});

interface IMUIThemeProviderProps {
  children: ReactNode;
}

const MUIThemeProvider = ({ children }: IMUIThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default MUIThemeProvider;