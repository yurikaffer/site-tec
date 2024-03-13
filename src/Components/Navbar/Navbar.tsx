import React from 'react';
import { Typography, Box } from '@mui/material';

const iconStyle = {
    marginLeft: '3rem',
    cursor: 'pointer',
    position: 'relative', 
    '&:hover::after': {
        width: '100%' 
    },
    '::after': {
        content: '""',
        position: 'absolute', 
        bottom: '3px', 
        marginLeft: '1px',
        display: 'block',
        width: '15px', 
        borderBottom: '2px solid #F7ADAF', 
        transition: 'width .3s ease-in-out', 
    }
}


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
            <Box width={'30rem'} sx={{ cursor: 'pointer' }}>
                <img src={'Tec logo 2024.png'} alt="imagem Logo" style={{ width: '100%' }} />
            </Box>
            <Box display={'flex'} position={'relative'}>
                <Box sx={iconStyle}>
                    <Typography fontSize={'20px'}>
                        Home
                    </Typography>
                </Box>
                <Box sx={iconStyle}>
                    <Typography fontSize={'20px'}>
                        Sobre
                    </Typography>
                </Box>
                <Box sx={iconStyle}>
                    <Typography fontSize={'20px'}>
                        Produtos
                    </Typography>
                </Box>
                <Box sx={iconStyle}>
                    <Typography fontSize={'20px'}>
                        Clientes
                    </Typography>
                </Box>
                <Box sx={iconStyle}>
                    <Typography fontSize={'20px'}>
                        Contatos
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default NavBar;
