import React, { lazy, Suspense } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LoadingComponent from '../Loading/LoadingComponent';

const ProductCard = lazy(() => import('./ProductCard'));

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
};

const gridStyle = {
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
        gridTemplateRows: 'repeat(2, 42rem)',
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
        gridTemplateRows: 'repeat(4, 42rem)',
        paddingBottom: '5rem',
    },
    '@media (max-width: 340px)': {
        gridTemplateColumns: 'repeat(1, 95%)',
    },
};

const SectionProducts = () => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <Box sx={{ bgcolor: '#FCFCFC' }}>
            <Box sx={aboutTexBox}>
                <Typography component="h1" fontSize={'2.4rem'} fontWeight={700} sx={{ '@media (max-width: 1000px)': { fontSize: '1.8rem', fontWeight: '700' } }}>
                    Conheça nossos produtos
                </Typography>
                <Typography component="p" fontSize={'16px'} textAlign={'center'}>
                    Embalagens personalizadas influenciam significativamente a decisão de compra. Uma embalagem atraente pode não só chamar a atenção dos
                    consumidores, mas também transmitir a qualidade do produto e os valores da marca, contribuindo para a
                    decisão de compra. De acordo com algumas pesquisas, a embalagem pode influenciar a decisão de compra de
                    até 70% dos consumidores em pontos de venda.
                </Typography>
            </Box>
            <Box sx={gridStyle}>
                <Suspense fallback={<LoadingComponent/>}>
                    <ProductCard
                        title='Sacolas de Papel'
                        img='sacola-pape-modelo.webp'
                        content={'Sacolas de papel personalizadas são perfeitas para embalar suas compras, presentes e lembrancinhas.'}
                        onClick={() => handleNavigation('/Produtos')}
                    />
                    <ProductCard
                        title='Sacolas de Plástico'
                        img='sacola-tec.webp'
                        content={'São extremamente comuns em uma variedade de estabelecimentos comerciais, desde supermercados até lojas de varejo e boutiques.'}
                        onClick={() => handleNavigation('/Produtos')}
                    />
                    <ProductCard
                        title='Cartões e Tags'
                        img='cartoes-produto.webp'
                        content={'Cartões e Tags são utilizadas em uma ampla gama de aplicações para adicionar valor, informação e identidade aos produtos e serviços.'}
                        onClick={() => handleNavigation('/Produtos')}
                    />
                    <ProductCard
                        title='Placas de PVC'
                        img='placa-pvc.webp'
                        content={'Usadas para sinalização, decoração e aplicações industriais, adaptando-se facilmente a necessidades específicas de projetos.'}
                        onClick={() => handleNavigation('/Produtos')}
                    />
                </Suspense>
            </Box>
        </Box>
    );
}

export default SectionProducts;
