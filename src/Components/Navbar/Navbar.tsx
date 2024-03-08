import React from 'react';
import { Typography, Box, IconButton } from '@mui/material';

const iconStyle = { borderRadius: '.5rem', color: 'black'}

const NavBar: React.FC = () => {
    return (
        <Box sx={{
            bgcolor: 'transparent',
            position: 'static',
            boxShadow: '0 6px 9px 0 rgba(0, 0, 0, 0.1)',
            '@media (max-width: 850px)': {
                display: 'none'
            },
        }}>
            <Box sx={{
                padding: '1rem 0rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Box width={'20rem'} sx={{ cursor: 'pointer'}}>
                    <img src={'Tec logo 2024.png'} alt="imagem Logo" style={{ width: '100%' }} />
                </Box>
                <Box display={'flex'} gap={'5rem'} marginLeft={'auto'}>
                    <IconButton sx={iconStyle}>
                        <Typography fontSize={'16px'}>
                            Home
                        </Typography>
                    </IconButton>
                    <IconButton sx={iconStyle}>
                        <Typography fontSize={'16px'}>
                            Sobre a Tec
                        </Typography>
                    </IconButton>
                    <IconButton sx={iconStyle}>
                        <Typography fontSize={'16px'}>
                            Produtos
                        </Typography>
                    </IconButton>
                    <IconButton sx={iconStyle}>
                        <Typography fontSize={'16px'}>
                            Clientes
                        </Typography>
                    </IconButton>
                    <IconButton sx={iconStyle}>
                        <Typography fontSize={'16px'}>
                            Contatos
                        </Typography>
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default NavBar;
