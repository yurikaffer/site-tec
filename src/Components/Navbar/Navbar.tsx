import React from 'react';
import { Typography, Box, IconButton } from '@mui/material';

const iconStyle = { borderRadius: '.5rem', color: 'black', marginLeft: '1rem' }

const NavBar: React.FC = () => {
    return (
        <Box sx={{
            display: 'flex',
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
                display: 'none'
            },
        }}>
            <Box width={'20rem'} sx={{ cursor: 'pointer' }}>
                <img src={'Tec logo 2024.png'} alt="imagem Logo" style={{ width: '100%' }} />
            </Box>
            <Box display={'flex'} position={'relative'}>
                <IconButton sx={iconStyle}>
                    <Typography fontSize={'22px'}>
                        Home
                    </Typography>
                </IconButton>
                <IconButton sx={iconStyle}>
                    <Typography fontSize={'22px'}>
                        Sobre a Tec
                    </Typography>
                </IconButton>
                <IconButton sx={iconStyle}>
                    <Typography fontSize={'22px'}>
                        Produtos
                    </Typography>
                </IconButton>
                <IconButton sx={iconStyle}>
                    <Typography fontSize={'22px'}>
                        Clientes
                    </Typography>
                </IconButton>
                <IconButton sx={iconStyle}>
                    <Typography fontSize={'22px'}>
                        Contatos
                    </Typography>
                </IconButton>
            </Box>
        </Box>
    );
};

export default NavBar;
