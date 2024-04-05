import { Box, IconButton } from '@mui/material';
import React from 'react';
import { whatsMessage } from '../../utils';

const WhatsappComponent: React.FC = () => {
    return (
        <Box sx={{
            bgcolor: '#39D674',
            width: '6rem',
            height: '6rem',
            borderRadius: '50%',
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'jump 1.5s infinite',
            '&:hover': {
                animationPlayState: 'paused',
            },
            '@keyframes jump': {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-20px)' },
            }
        }}>
            <IconButton sx={{ padding: '1.5rem', width: '100%' }} onClick={() => {whatsMessage()}}>
                <img src={'LogoWhatsApp.webp'} alt="imagem Whatsapp" style={{ width: '100%' }} />
            </IconButton>
        </Box>
    );
}

export default WhatsappComponent