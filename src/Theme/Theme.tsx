import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Sora, sans-serif',
        }
      }
    },
    MuiButtonBase: { 
      styleOverrides: {
        root: { 
          fontFamily: 'Sora, sans-serif', 
          padding: '1rem',
          borderRadius: '0.5rem',
          fontSize: '15px',
          fontWeight: '400',
          mt: '1rem'
        },
      },
    },
  },
});

export default theme;
