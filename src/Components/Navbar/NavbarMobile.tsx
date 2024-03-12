import React, { useState } from 'react';
import { IconButton, Typography, Menu, MenuItem, Box } from '@mui/material';
import { List } from '@phosphor-icons/react';

const NavBarMobile: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{
            display: 'none',
            justifyContent: 'space-between',
            alignItems: 'center',
            bgcolor: 'transparent',
            padding: '5rem 10%',
            position: 'absolute', // Alterado de 'static' para 'fixed'
            width: '100%', // Garante que o NavBar ocupe a largura total
            top: 0, // Posiciona o NavBar no topo da página
            left: 0, // Alinha o NavBar à esquerda da página
            zIndex: 1000, // Garante que o NavBar fique sobre outros elementos
            '@media (max-width: 850px)': {
                display: 'flex',
            },
        }}>
            <Box width={'20rem'} sx={{ cursor: 'pointer' }}>
                <img src={'Tec logo 2024.png'} alt="imagem Logo" style={{ width: '100%' }} />
            </Box>
            <IconButton
                edge="start"
                aria-label="menu"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ color: '#black' }}
            >
                <Box width={'4rem'} sx={{ cursor: 'pointer' }}>
                    <img src={'icons8-menu-64.png'} alt="imagem menu" style={{ width: '100%' }} />
                </Box>
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <Typography fontSize={'16px'}>
                        Home
                    </Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Typography fontSize={'16px'}>
                        Sobre Nós
                    </Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Typography fontSize={'16px'}>
                        Produtos
                    </Typography>
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default NavBarMobile;
