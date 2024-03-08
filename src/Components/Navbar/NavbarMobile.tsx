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
            padding: '1rem 0rem',
            justifyContent: 'space-between',
            alignItems: 'center',
            display: 'none',
            bgcolor: 'transparent',
            position: 'static',
            boxShadow: '0 6px 9px 0 rgba(0, 0, 0, 0.1)',
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
                <List size={44} />
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
