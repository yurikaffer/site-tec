import { Box, Typography } from '@mui/material';
import React from 'react';

const Banner: React.FC = () => {
    return (
        <Box
            sx={{
                height: '120vh',
                width: '100%',
                background: "url('/sacola-plastic-tec.png') no-repeat center center fixed",
                backgroundSize: 'cover',
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
                }}>
                    Deixe sua marca no mundo.
                </Typography>
            </Box>

            <Box sx={{
                position: 'absolute',
                bottom: -200,
                left: 0,
                width: '100%',
                }}>
                
                <img src='wave.svg' alt="Onda decorativa" style={{ width: '100%', objectFit: 'cover', height: 'auto' }} />
                
                
            </Box>
            <div id="about-anchor"></div>
        </Box>
    )
}

export default Banner
