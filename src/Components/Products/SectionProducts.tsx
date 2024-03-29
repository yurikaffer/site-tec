import { Box, Typography } from '@mui/material';
import React, { useRef } from 'react';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';

const aboutTexBox = {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    padding: '5rem 10%',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 715px)': {
        padding: '2rem',
    },
}

const SectionProducts: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path, { replace: false });
        window.scrollTo(0, 0);
    };

    return (
        <Box sx={{
            bgcolor: '#FCFCFC',
        }}>
            <Box sx={aboutTexBox}>
                <Typography
                    fontSize={'2.4rem'}
                    fontWeight={700}
                    sx={{
                        '@media (max-width: 1000px)': {
                            fontSize: '1.8rem',
                            fontWeight: '700'
                        },
                    }}
                >
                    Conheça nossos produtos
                </Typography>
                <Typography fontSize={'16px'} textAlign={'center'}>
                    Embalagens personalizadas influenciam significativamente a decisão de compra. Uma embalagem atraente pode não só chamar a atenção dos
                    consumidores, mas também transmitir a qualidade do produto e os valores da marca, contribuindo para a
                    decisão de compra. De acordo com algumas pesquisas, a embalagem pode influenciar a decisão de compra de
                    até 70% dos consumidores em pontos de venda.
                </Typography>
            </Box>
            <Box sx={{
                display: 'grid',
                height: '100%',
                width: '100%',
                gridTemplateColumns: 'repeat(4, 35rem)',
                gap: '3rem',
                paddingX: '10%',
                pb: '10rem',
                justifyContent: 'center',
                alignItems: 'center',
                '@media (max-width: 1690px)': {
                    gridTemplateColumns: 'repeat(4, 30rem)',
                },
                '@media (max-width: 1460px)': {
                    gridTemplateColumns: 'repeat(3, 30rem)',
                    gridTemplateRows: 'repeat(2, 40rem)',
                },
                '@media (max-width: 1100px)': {
                    gridTemplateColumns: 'repeat(2, 30rem)',
                },
                '@media (max-width: 715px)': {
                    gridTemplateColumns: 'repeat(2, 30rem)',
                    padding: '1rem 2rem',
                },
                '@media (max-width: 680px)': {
                    gridTemplateColumns: 'repeat(1, 30rem)',
                    gridTemplateRows: 'repeat(4, 40rem)',
                    paddingBottom: '5rem'
                },
                '@media (max-width: 340px)': {
                    gridTemplateColumns: 'repeat(1, 95%)',
                },
            }}>
                <ProductCard
                    title='Sacolas de Papel'
                    img='sacola-pape-modelo.png'
                    content={'colas de papel personalizadas são perfeitas para embalagens de compras, presentes e lembrancinhas.'}
                    onClick={() => handleNavigation('/Produtos')}
                />
                <ProductCard
                    title='Sacolas de Plástico'
                    img='sacola-tec.png'
                    content={'colas de papel personalizadas são perfeitas para embalagens de compras, presentes e lembrancinhas.'}
                    onClick={() => handleNavigation('/Produtos')}
                />
                <ProductCard
                    title='Cartões e Tags'
                    img='cartoes-produto.png'
                    content={'colas de papel personalizadas são perfeitas para embalagens de compras, presentes e lembrancinhas.'}
                    onClick={() => handleNavigation('/Produtos')}
                />
                <ProductCard
                    title='Placas de PVC'
                    img='placa-pvc.png'
                    content={'colas de papel personalizadas são perfeitas para embalagens de compras, presentes e lembrancinhas.'}
                    onClick={() => handleNavigation('/Produtos')}
                />
            </Box>
        </Box>
    );
}

export default SectionProducts