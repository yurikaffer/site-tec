import { Box, Typography } from '@mui/material';
import React from 'react';

const Banner: React.FC = () => {
    return (
        <Box
            sx={{
                height: '120vh',
                width: '100%',
                background: "url('/fundo-novo-tec.png') no-repeat center center fixed",
                backgroundSize: 'cover',
                '@media (max-width: 1260px)': {
                    background: "url('/banner-ms.png') no-repeat center center fixed",
                    backgroundSize: 'cover',
                },
                '@media (max-width: 660px)': {
                    background: "url('/banner-mobile.png') no-repeat center center fixed",
                    backgroundSize: 'cover',
                },
            }}
        >
            <Box sx={{padding: '40rem 10%',
                    '@media (max-width:1270px)': {
                        padding: '25rem 10%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                    },
                    '@media (max-width: 660px)': {
                        padding: '17rem 10%',
                    },
                }}>
                <Typography sx={{
                    fontSize: '18px',
                    fontWeight: '500',
                    color: '#252525',
                    '@media (max-width:900px)': {
                        fontSize: '16px',
                    },
                    
                }}>
                    Transforme, crie, personalize. 
                </Typography>

                <Typography sx={{
                    fontSize: '40px',
                    fontWeight: '500',
                    color: '#252525',
                    '@media (max-width:900px)': {
                        fontSize: '34px',
                    },
                    '@media (max-width:440px)': {
                        fontSize: '28px',
                    },
                }}>
                    Deixe sua marca no mundo.
                </Typography>
            </Box>

            <Box sx={{
                    position: 'absolute',
                    bottom: -200,
                    left: 0,
                    width: '100%',
                    '@media (max-width: 900px)': {
                        bottom: -260,
                    },
                    '@media (max-width: 770px)': {
                        bottom: -200,
                    },
                    '@media (max-width: 500px)': {
                        bottom: -170,
                    },
                    '@media (max-width: 350px)': {
                        bottom: -120,
                    },
                }}
            >
                <img src='wave.svg' alt="Onda decorativa" style={{ width: '100%', objectFit: 'cover', height: 'auto' }} />
            </Box>
            <div id="about-anchor"></div>
        </Box>
    )
}

export default Banner
