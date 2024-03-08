import { Box } from '@mui/material';
import React from 'react';
import ProductCard from './ProductCard';

const SectionProducts: React.FC = () => {
    return (
        <Box padding={'1rem'}>
            <Box sx={{
                display: 'grid',
                height: '100%',
                width: '100%',
                gridTemplateColumns: 'repeat(4, 30rem)',
                gap: '3rem',
                alignItems:'center',
                justifyContent: 'center',
                '@media (max-width: 1320px)': {
                    gridTemplateColumns: 'repeat(3, 30rem)',
                    gridTemplateRows: 'repeat(2, 50rem)',
                },
                '@media (max-width: 995px)': {
                    gridTemplateColumns: 'repeat(2, 30rem)',
                    gridTemplateRows: 'repeat(3, 50rem)',
                },
                '@media (max-width: 665px)': {
                    gridTemplateColumns: 'repeat(1, 30rem)',
                    gridTemplateRows: 'repeat(4, 50rem)',
                },
                '@media (max-width: 340px)': {
                    gridTemplateColumns: 'repeat(1, 95%)',
                },
            }}>
                <ProductCard
                    title='Sacolas de Papel'
                    img='C2-600x600.webp'
                    content={'colas de papel personalizadas são perfeitas para embalagens de compras, presentes e lembrancinhas.'}
                />
                <ProductCard
                    title='Sacolas de Plástico'
                    img='C2-600x600.webp'
                    content={'colas de papel personalizadas são perfeitas para embalagens de compras, presentes e lembrancinhas.'}
                />
                <ProductCard
                    title='Cartões e Tags'
                    img='C2-600x600.webp'
                    content={'colas de papel personalizadas são perfeitas para embalagens de compras, presentes e lembrancinhas.'}
                />
                <ProductCard
                    title='Placas de PVC'
                    img='C2-600x600.webp'
                    content={'colas de papel personalizadas são perfeitas para embalagens de compras, presentes e lembrancinhas.'}
                />
            </Box>
        </Box>
    );
}

export default SectionProducts