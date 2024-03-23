import React from 'react';
import CategoryComponent from './CategoryComponent';
import ProductCard from '../../Products/ProductCard';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

const CardsAndTagsCategory: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path, { replace: false });
        window.scrollTo(0, 0);
    };

    return (
        <CategoryComponent title='Cartões e Tags'>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 35rem)',
                gap: '3rem',
                '@media (max-width: 1210px)': {
                    gridTemplateColumns: 'repeat(1, 35rem)',
                    gridTemplateRows: 'repeat(2, 43rem)',
                },
                '@media (max-width: 400px)': {
                    gridTemplateColumns: 'repeat(1, 100%)',
                    gridTemplateRows: 'repeat(2, 45rem)',
                },
                '@media (max-width: 800px)': {
                    margin: 'auto'
                },
            }}>
                <ProductCard
                    title='Cartões de visita'
                    img='sacola-pape-modelo.png'
                    content={'Os cartões de visita são ferramentas poderosas de comunicação que facilitam o networking, reforçam a marca, e demonstram profissionalismo.'}
                    textButton='Mais detalhes ➜'
                    onClick={() => handleNavigation('/cartoes')}
                />
                <ProductCard
                    title='Tags personalizadas'
                    img='bag-modelo-produtos.png'
                    content={'As Tags são utilizadas em uma ampla gama de aplicações para adicionar valor, informação e identidade visual aos produtos ou serviços.'}
                    textButton='Mais detalhes ➜'
                    onClick={() => handleNavigation('/tags')}
                />
            </Box>

        </CategoryComponent>
    )
}

export default CardsAndTagsCategory

