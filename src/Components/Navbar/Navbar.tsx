import React, { useState } from 'react';
import { Box, ButtonBase, Drawer, IconButton, useMediaQuery, useTheme } from '@mui/material';
import ButtonNavbar from './ButtonNavbar/ButtonNavbar';
import { useNavigate } from 'react-router-dom';
import SmButtonNavbar from './ButtonNavbar/SmButtonNavbar';

interface NavBarProps {
    boxStyle: object;
    img: string;
    heightImg: string;
    smButtons?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ boxStyle, img, heightImg, smButtons }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(1015));
    const navigate = useNavigate();

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    const renderMenuItens = () => {
        return (
            <>
                <ButtonNavbar name='Home' onClick={() => { navigate('/', { replace: false  }) }} />
                <ButtonNavbar name='Sobre' onClick={() => { navigate('/Sobre', { replace: false  }) }} />
                <ButtonNavbar name='Produtos' onClick={() => { navigate('/Produtos', { replace: false  }) }} />
                <ButtonNavbar name='Contatos' onClick={() => { navigate('/Contatos', { replace: false  }) }} />
                <ButtonNavbar name='Orçamento' onClick={() => { navigate('/Orcamento', { replace: false  }) }} />
            </>
        )
    }

    const renderMenuItensSmall = () => {
        return (
            <>
                <SmButtonNavbar name='Home' onClick={() => { navigate('/', { replace: false  }) }} />
                <SmButtonNavbar name='Sobre' onClick={() => { navigate('/Sobre', { replace: false  }) }} />
                <SmButtonNavbar name='Produtos' onClick={() => { navigate('/Produtos', { replace: false  }) }} />
                <SmButtonNavbar name='Contatos' onClick={() => { navigate('/Contatos', { replace: false  }) }} />
                <SmButtonNavbar name='Orçamento' onClick={() => { navigate('/Orcamento', { replace: false  }) }} />
            </>
        )
    }

    return (
        <Box sx={{
            ...boxStyle,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            top: 0,
            left: 0,
            zIndex: 1000,
        }}>
            <ButtonBase disableRipple sx={{ padding: 0 }} onClick={() => { navigate('/') }}>
                <Box sx={{ cursor: 'pointer', height: heightImg }}>
                    <img src={img} alt="Logo" style={{ width: '100%', height: '100%' }} />
                </Box>
            </ButtonBase>
            {!isMobile && (
                <Box sx={{ display: 'flex', position: 'relative' }}>
                    {smButtons ? renderMenuItensSmall() : renderMenuItens()}
                </Box>
            )}
            {isMobile && (
                <IconButton onClick={toggleMenu} sx={{ display: 'flex', position: 'relative' }}>
                    <img src="icons8-menu-64.png" alt="Menu" style={{ width: '4rem', cursor: 'pointer' }} />
                </IconButton>
            )}
            <Drawer anchor="right" open={isMenuOpen} onClose={toggleMenu}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem', width: '25rem' }}>
                    {smButtons ? renderMenuItensSmall() : renderMenuItens()}
                </Box>
            </Drawer>
        </Box>
    );
};

export default NavBar;
