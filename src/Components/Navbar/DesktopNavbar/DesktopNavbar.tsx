import { Box, ButtonBase, Typography } from '@mui/material';
import React from 'react';
import { whatsMessage } from '../../../utils';
import ButtonNavbar from '../ButtonNavbar/ButtonNavbar';
import { useNavigate } from 'react-router-dom';

const DesktopNavbar: React.FC = () => {
    const navigate = useNavigate();

    return (
        <nav>
            <Box sx={{
                bgcolor: '#FFF',
                padding: '1rem 10%',
                position: 'fixed',
                boxShadow: '0 1px 100px 0 rgba(0, 0, 0, 0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                top: 0,
                left: 0,
                zIndex: 1000
            }}>
                <Box component={ButtonBase} disableRipple padding={0} onClick={() => { navigate('/', { replace: false }) }}>
                    <img src='logo-nav.webp' alt="Logo" style={{ width: '100%', height: '3.5rem', maxWidth: '10rem', padding: 0 }} />
                </Box>

                <Box sx={{ display: 'flex', position: 'relative' }}>
                    <ButtonNavbar fontSize='16px' name='Home' onClick={() => { navigate('/', { replace: false }) }} />
                    <ButtonNavbar fontSize='16px' name='Sobre' onClick={() => { navigate('/Sobre', { replace: false }) }} />
                    <ButtonNavbar fontSize='16px' name='Produtos' onClick={() => { navigate('/Produtos', { replace: false }) }} />
                    <ButtonNavbar fontSize='16px' name='Contatos' onClick={() => { navigate('/Contatos', { replace: false }) }} />
                </Box>

                <ButtonBase sx={{
                    bgcolor: '#FFC9C9',
                    padding: '0 3rem',
                    borderRadius: '50rem',
                    height: '4rem'
                }} onClick={() => { whatsMessage() }}>
                    <Typography fontSize={'15px'}>
                        Realizar orçamento ➜
                    </Typography>
                </ButtonBase>
            </Box>
        </nav>
    )
}

export default DesktopNavbar

