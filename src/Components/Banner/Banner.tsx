import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Banner: React.FC = () => {
    const theme = useTheme();
    const isTabletOrLarger = useMediaQuery(theme.breakpoints.up(661));
    const isLargeDesktop = useMediaQuery(theme.breakpoints.up(1261));

    return (
        <Box
            sx={{
                height: isTabletOrLarger ? '120vh' : '105vh',
                width: '100%',
                background: isLargeDesktop
                    ? "url('/fundo-novo-tec.webp') no-repeat center center fixed"
                    : isTabletOrLarger
                        ? "url('/banner-ms.webp') no-repeat center center fixed"
                        : "url('/banner-mobile.webp') no-repeat center center",
                backgroundSize: 'cover',
            }}
        >
            <Box sx={{
                padding: '17rem 10%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                [theme.breakpoints.up('lg')]: { 
                    padding: '40rem 10%',
                    justifyContent: 'start',
                    alignItems: 'start',
                    textAlign: 'start',
                },
            }}>
                <Typography sx={{
                    fontSize: isTabletOrLarger ? '18px' : '16px',
                    fontWeight: '500',
                    color: '#252525',
                }}>
                    Transforme, crie, personalize.
                </Typography>

                <Typography sx={{
                    fontSize: isLargeDesktop ? '40px' : isTabletOrLarger ? '34px' : '28px',
                    fontWeight: '500',
                    color: '#252525',
                }}>
                    Deixe sua marca no mundo.
                </Typography>
            </Box>

            {isTabletOrLarger && (
                <Box sx={{
                    position: 'absolute',
                    bottom: isTabletOrLarger ? '-200px' : '-260px',
                    left: 0,
                    width: '100%',
                }}
                >
                    <img src='wave.svg' alt="Onda decorativa" style={{ width: '100%', objectFit: 'cover', height: 'auto' }} />
                </Box>
            )}
        </Box>
    );
}

export default Banner;
