import React from 'react';
import CategoryComponent from './CategoryComponent';
import ProductCard from '../../Products/ProductCard';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

const PvcCategory: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path, { replace: false });
        window.scrollTo(0, 0);
    };

    return (
        <CategoryComponent title='Placas de PVC'>
            <Box sx={{
                '@media (max-width: 800px)': {
                    margin: 'auto'
                },
            }}>
                <ProductCard
                    title='Placas de PVC'
                    img='sacola-pape-modelo.png'
                    content={'Oferece uma excelente plataforma para sinalização, decoração, construção e aplicações industriais, adaptando-se facilmente a necessidades específicas de projetos.'}
                    textButton='Mais detalhes ➜'
                    onClick={() => handleNavigation('/pvc')}
                />
            </Box>
        </CategoryComponent>
    )
}

export default PvcCategory

