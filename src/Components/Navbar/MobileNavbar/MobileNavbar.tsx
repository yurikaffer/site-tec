import { Box, ButtonBase } from '@mui/material';
import React from 'react';
import DrawerComponent from './DrawerComponent';
import { useNavigate } from 'react-router-dom';

const MobileNavbar: React.FC = () => {
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

                <DrawerComponent/>
            </Box>
        </nav>
    )
}

export default MobileNavbar