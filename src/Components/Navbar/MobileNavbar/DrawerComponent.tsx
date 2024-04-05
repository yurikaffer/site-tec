import { Box, Drawer, IconButton } from '@mui/material';
import React, { useState } from 'react';
import ButtonNavbar from '../ButtonNavbar/ButtonNavbar';
import { useNavigate } from 'react-router-dom';

const DrawerComponent: React.FC = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    return (
        <>
            <IconButton onClick={toggleMenu} sx={{ display: 'flex', position: 'relative' }}>
                <img src="icons8-menu-64.webp" alt="Menu" style={{ width: '4rem', cursor: 'pointer' }} />
            </IconButton>

            <Drawer anchor="right" open={isMenuOpen} onClose={toggleMenu}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem', width: '25rem' }}>
                    <ButtonNavbar fontSize='16px' name='Home' onClick={() => { navigate('/', { replace: false }) }} />
                    <ButtonNavbar fontSize='16px' name='Sobre' onClick={() => { navigate('/Sobre', { replace: false }) }} />
                    <ButtonNavbar fontSize='16px' name='Produtos' onClick={() => { navigate('/Produtos', { replace: false }) }} />
                    <ButtonNavbar fontSize='16px' name='Contatos' onClick={() => { navigate('/Contatos', { replace: false }) }} />
                </Box>
            </Drawer>
        </>
    )
}

export default DrawerComponent

