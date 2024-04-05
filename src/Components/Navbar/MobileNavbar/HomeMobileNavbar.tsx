import { Box } from '@mui/material';
import React from 'react';
import DrawerComponent from './DrawerComponent';

const HomeMobileNavbar: React.FC = () => {
    return (
        <Box sx={{
            bgcolor: 'transparent',
            padding: '5rem 10%',
            position: 'absolute',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            top: 0,
            left: 0,
            zIndex: 1000
        }}>

            <Box sx={{ cursor: 'pointer', height: '5rem' }}>
                <img src='Tec logo 2024.webp' alt="Logo" style={{ width: '100%', height: '100%', maxWidth: '20rem' }} />
            </Box>

            <DrawerComponent/>
        </Box>
    )
}

export default HomeMobileNavbar

