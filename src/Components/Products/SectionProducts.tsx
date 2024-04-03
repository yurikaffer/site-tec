import React from 'react';
import { Box, Typography } from '@mui/material';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';

const styles = {
    aboutTextBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        padding: '5rem 10%',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (max-width: 715px)': {
            padding: '2rem',
        },
    },
    productsGrid: {
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
    }
};

const products = [
    { 
        title: 'Sacolas de Papel', 
        img: 'sacola-pape-modelo.png', 
        content: 'Sacolas de papel personalizadas são perfeitas para embalar suas compras, presentes e lembrancinhas.' 
    },
    { 
        title: 'Sacolas de Plástico', 
        img: 'sacola-tec.png', 
        content: 'São extremamente comuns em uma variedade de estabelecimentos comerciais, desde supermercados até lojas de varejo e boutiques.' 
    },
    { 
        title: 'Cartões e Tags', 
        img: 'cartoes-produto.png', 
        content: 'Cartões e Tags são utilizadas em uma ampla gama de aplicações para adicionar valor, informação e identidade aos produtos e serviços.' 
    },
    { 
        title: 'Placas de PVC', 
        img: 'placa-pvc.png', 
        content: 'Usadas para sinalização, decoração e aplicações industriais, adaptando-se facilmente a necessidades específicas de projetos.' 
    },
];

const SectionProducts: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <Box sx={{ bgcolor: '#FCFCFC' }}>
            <Box sx={styles.aboutTextBox}>
                <Typography component="h1" fontSize={'2.4rem'} fontWeight={700} sx={{ '@media (max-width: 1000px)': { fontSize: '1.8rem', fontWeight: '700' }}}>
                    Conheça nossos produtos
                </Typography>
                <Typography component="p" fontSize={'16px'} textAlign={'center'}>
                    Embalagens personalizadas influenciam significativamente a decisão de compra...
                </Typography>
            </Box>
            <Box sx={() => styles.productsGrid}>
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        title={product.title}
                        img={product.img}
                        content={product.content}
                        onClick={() => handleNavigation('/Produtos')}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default SectionProducts;
