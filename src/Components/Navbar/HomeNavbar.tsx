import React from 'react';
import NavBar from './Navbar';
import {useTheme, useMediaQuery  } from '@mui/material';

const HomeNavbar: React.FC = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down(1060));
    const imgHeight = isSmallScreen ? '5rem' : '7rem';

    return (
        <>
            <NavBar boxStyle={{
                bgcolor: 'transparent',
                padding: '5rem 10%',
                position: 'absolute',
                '@media (max-width: 1250px)': {
                    padding: '5rem 5%',
                },
            }} img='Tec logo 2024.png' heightImg={imgHeight} />
        </>
    )
}

export default HomeNavbar