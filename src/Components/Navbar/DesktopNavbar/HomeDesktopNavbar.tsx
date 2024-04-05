import { Box, ButtonBase, Typography } from '@mui/material';
import React from 'react';
import { whatsMessage } from '../../../utils';
import ButtonNavbar from '../ButtonNavbar/ButtonNavbar';
import { useNavigate } from 'react-router-dom';

const HomeDesktopNavbar: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{
            bgcolor: 'transparent',
            padding: '5rem 10%',
            position: 'absolute',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            top: 0,
            left: 0,
            zIndex: 1000
        }}>
            <Box sx={{ cursor: 'pointer', height: '7rem' }}>
                <img src='Tec logo 2024.webp' alt="Logo" style={{ width: '100%', height: '100%', maxWidth: '100%' }} />
            </Box>

            <Box sx={{ display: 'flex', position: 'relative' }}>
                <ButtonNavbar fontSize='18px'  name='Home' onClick={() => { navigate('/', { replace: false }) }} />
                <ButtonNavbar fontSize='18px' name='Sobre' onClick={() => { navigate('/Sobre', { replace: false }) }} />
                <ButtonNavbar fontSize='18px' name='Produtos' onClick={() => { navigate('/Produtos', { replace: false }) }} />
                <ButtonNavbar fontSize='18px' name='Contatos' onClick={() => { navigate('/Contatos', { replace: false }) }} />
            </Box>

            <ButtonBase sx={{
                bgcolor: '#FFC9C9',
                padding: '0 3rem',
                borderRadius: '50rem',
                height: '5rem'
            }} onClick={() => { whatsMessage() }}>
                <Typography fontSize={'15px'}>
                    Realizar orçamento ➜
                </Typography>
            </ButtonBase>
        </Box>
    )
}

export default HomeDesktopNavbar

