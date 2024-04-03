import React from 'react';
import { Box, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const Banner: React.FC = () => {
    const isMedium = useMediaQuery('(max-width:960px)');
    const isSmall = useMediaQuery('(max-width:600px)');
    const isExtraSmall = useMediaQuery('(max-width:400px)');

    return (
        <Box
            sx={{
                height: isSmall ? '105vh' : '120vh',
                width: '100%',
                background: `url('${isSmall ? "/banner-mobile.png" : "/fundo-novo-tec.png"}') no-repeat center center fixed`,
                backgroundSize: 'cover',
            }}
        >
            <Box sx={{
                padding: isMedium ? '17rem 10%' : '40rem 10%',
                display: isMedium ? 'flex' : 'block',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: isMedium ? 'center' : 'left',
            }}>
                <Typography
                    component="h1"
                    sx={{
                        fontSize: isExtraSmall ? '16px' : isSmall ? '18px' : '18px',
                        fontWeight: '500',
                        color: '#252525',
                    }}
                >
                    Transforme, crie, personalize.
                </Typography>

                <Typography
                    component="h1"
                    sx={{
                        fontSize: isExtraSmall ? '28px' : isSmall ? '34px' : '40px',
                        fontWeight: '500',
                        color: '#252525',
                    }}
                >
                    Deixe sua marca no mundo.
                </Typography>
            </Box>

            {!isSmall && (
                <Box sx={{
                        position: 'absolute',
                        bottom: isMedium ? -260 : -200, 
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