import { Box, IconButton } from '@mui/material';
import React from 'react';

const WhatsappComponent: React.FC = () => {
    return (
        <Box sx={{
            bgcolor: '#39D674',
            width: '8rem',
            height: '8rem',
            borderRadius: '50%',
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '@media (max-width: 440px)': {
                width: '7rem',
                height: '7rem',
            },
            animation: 'jump 1.5s infinite',
            '&:hover': {
                animationPlayState: 'paused',
            },
            '@keyframes jump': {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-20px)' },
            }
        }}>
            <IconButton sx={{ padding: '1.5rem', width: '100%' }}>
                <img src={'LogoWhatsApp.png'} alt="imagem Whatsapp" style={{ width: '100%' }} />
            </IconButton>
        </Box>
    );
}

export default WhatsappComponent