import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import PaperCategory from './Category/PaperCategory';
import PlasticCategory from './Category/PlasticCategory';
import CardsAndTagsCategory from './Category/CardsAndTagsCategory';
import PvcCategory from './Category/PvcCategory';
import { useCategory, Category } from '../../Context/CategoryContext';

const ProductsCategory: React.FC = () => {
    const { selectedCategory, handleSelectCategory } = useCategory();

    const buttonStyle = (category: Category) => ({
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

    const textStyle = {
            fontSize: '15px', 
            textAlign: 'start', 
            color: 'black'
        }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: '10%',
            gap: '3rem',
            position: 'relative',
            marginRight: 'auto',
            '@media (max-width: 800px)': {
                flexDirection: 'column',
                alignItems: 'center',
                marginRight: 0,
                paddingX: '5%',
            }
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
                '@media (max-width: 800px)': {
                    width: '100%',
                }
            }}>
                <Typography 
                    component="h2"
                    fontSize={'18px'} 
                    fontWeight={500} 
                    pb={'1.5rem'} 
                    pl={'1rem'} 
                    margin={'auto'}
                >
                    Categorias dos produtos
                </Typography>

                <Box component={'button'} sx={buttonStyle(Category.All)} onClick={() => handleSelectCategory(Category.All)}>
                    <Typography component="p" sx={textStyle}>Todos</Typography>
                </Box>
                <Box component={'button'} sx={buttonStyle(Category.Paper)} onClick={() => handleSelectCategory(Category.Paper)}>
                    <Typography component="p" sx={textStyle}>Sacolas de Papel</Typography>
                </Box>
                <Box component={'button'} sx={buttonStyle(Category.Plastic)} onClick={() => handleSelectCategory(Category.Plastic)}>
                    <Typography component="p" sx={textStyle}>Sacolas de Plástico</Typography>
                </Box>
                <Box component={'button'} sx={buttonStyle(Category.CardsAndTags)} onClick={() => handleSelectCategory(Category.CardsAndTags)}>
                    <Typography component="p" sx={textStyle}>Cartões e Tags</Typography>
                </Box>
                <Box component={'button'} sx={buttonStyle(Category.PVC)} onClick={() => handleSelectCategory(Category.PVC)}>
                    <Typography component="p"sx={textStyle}>Placas de PVC</Typography>
                </Box>
            </Card>

            <Box 
                display={'flex'} 
                flexDirection={'column'} 
                gap={'3rem'} pb={'20rem'} 
                width={'100%'}
            >
                {selectedCategory === Category.All &&
                    <>
                        <PaperCategory />
                        <PlasticCategory />
                        <CardsAndTagsCategory />
                        <PvcCategory />
                    </>
                }
                {selectedCategory === Category.Paper && <PaperCategory />}
                {selectedCategory === Category.Plastic && <PlasticCategory />}
                {selectedCategory === Category.CardsAndTags && <CardsAndTagsCategory />}
                {selectedCategory === Category.PVC && <PvcCategory />}
            </Box>
        </Box>
    );
};

export default ProductsCategory;
