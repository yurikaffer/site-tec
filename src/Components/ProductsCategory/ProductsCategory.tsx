import React, { useState } from 'react';
import { Box, Card, Typography } from '@mui/material';
import PaperCategory from './Category/PaperCategory';
import PlasticCategory from './Category/PlasticCategory';
import CardsAndTagsCategory from './Category/CardsAndTagsCategory';
import PvcCategory from './Category/PvcCategory';

const ProductsCategory: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleSelectCategory = (category: string) => {
        setSelectedCategory(category);
    };

    const buttonStyle = (category: string) => ({
        bgcolor: selectedCategory === category ? '#FFC9C9' : '#FFF',
        width: '100%',
        borderRadius: '0.5rem',
        border: 'none',
        padding: '1rem',
        transition: 'background-color 0.2s ease, transform 0.2s ease',
        cursor: 'pointer',
        '&:hover': {
            bgcolor: '#FFC9C9', 
            transform: 'scale(1.02)', 
        },
    });

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '13rem',
            paddingX: '2rem',
            gap: '3rem',
            position: 'relative'
        }}>
            <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                bgcolor: '#f9f9f9',
                minWidth: '30rem',
                borderRadius: '0.3rem',
                padding: '1rem',
                gap: '0.1rem',
                marginBottom: 'auto',
                boxShadow: '0 1px 6px 0 rgba(0, 0, 0, 0.2)',
            }}>
                <Typography fontSize={'18px'} fontWeight={500} pb={'1.5rem'} pl={'1rem'}>Categorias dos produtos</Typography>

                <Box component={'button'} sx={buttonStyle('')} onClick={() => handleSelectCategory('')}>
                    <Typography fontSize={'15px'} textAlign={'start'}>Todos</Typography>
                </Box>
                <Box component={'button'} sx={buttonStyle('Paper')} onClick={() => handleSelectCategory('Paper')}>
                    <Typography fontSize={'15px'} textAlign={'start'}>Sacolas de Papel</Typography>
                </Box>
                <Box component={'button'} sx={buttonStyle('Plastic')} onClick={() => handleSelectCategory('Plastic')}>
                    <Typography fontSize={'15px'} textAlign={'start'}>Sacolas de Plástico</Typography>
                </Box>
                <Box component={'button'} sx={buttonStyle('CardsAndTags')} onClick={() => handleSelectCategory('CardsAndTags')}>
                    <Typography fontSize={'15px'} textAlign={'start'}>Cartões e Tags</Typography>
                </Box>
                <Box component={'button'} sx={buttonStyle('PVC')} onClick={() => handleSelectCategory('PVC')}>
                    <Typography fontSize={'15px'} textAlign={'start'}>Placas de PVC</Typography>
                </Box>
            </Card>

            <Box display={'flex'} flexDirection={'column'} gap={'3rem'} pb={'20rem'}>
                {selectedCategory === '' &&
                    <>
                        <PaperCategory />
                        <PlasticCategory />
                        <CardsAndTagsCategory />
                        <PvcCategory />
                    </>
                }
                {selectedCategory === 'Paper' && <PaperCategory />}
                {selectedCategory === 'Plastic' && <PlasticCategory />}
                {selectedCategory === 'CardsAndTags' && <CardsAndTagsCategory />}
                {selectedCategory === 'PVC' && <PvcCategory />}
            </Box>
        </Box>
    );
};

export default ProductsCategory;
