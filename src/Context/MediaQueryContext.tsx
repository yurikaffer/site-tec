import React, { createContext, useContext, ReactNode  } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const MediaQueryContext = createContext({
  isMobile: false,
});

export const useMediaQueryContext = () => useContext(MediaQueryContext);

interface MediaQueryProviderProps {
    children: ReactNode;
  }

export const MediaQueryProvider: React.FC<MediaQueryProviderProps> = ({ children }) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down(1200));

  return (
    <MediaQueryContext.Provider value={{isMobile}}>
      {children}
    </MediaQueryContext.Provider>
  );
};
