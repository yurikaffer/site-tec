import { Box, Typography } from '@mui/material';
import React from 'react';

const Banner: React.FC = () => {
    return (
        <Box
            sx={{
                height: '100vh', // Altura total da viewport
                width: '100%', // Largura total da viewport
                background: "url('/FundoSiteTeste2.png') no-repeat center center fixed", // Ajuste o caminho conforme necessário
                backgroundSize: 'cover', // Garante que a imagem de fundo cubra todo o espaço disponível
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
                    '@media (max-width:900px)': {
                        fontSize: '16px',
                    },
                }}>
                    Transforme, crie, personalize. 
                </Typography>

                <Typography sx={{
                    fontSize: '40px',
                    fontWeight: '600',
                    '@media (max-width:900px)': {
                        fontSize: '34px',
                    },
                }}>
                    Deixe a Sua Marca no Mundo.
                </Typography>
            </Box>
        </Box>
    )
}

export default Banner
