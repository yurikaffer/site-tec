import React from 'react';
import CategoryComponent from './CategoryComponent';
import ProductCard from '../../Products/ProductCard';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

const PaperCategory: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path, { replace: false });
        window.scrollTo(0, 0);
    };

    return (
        <CategoryComponent title='Sacolas de Papel'>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 35rem)',
                gap: '3rem',
                '@media (max-width: 1640px)': {
                    gridTemplateColumns: 'repeat(2, 35rem)',
                    gridTemplateRows: 'repeat(2, 43rem)',
                },
                '@media (max-width: 1210px)': {
                    gridTemplateColumns: 'repeat(1, 35rem)',
                    gridTemplateRows: 'repeat(3, 43rem)',
                },
                '@media (max-width: 400px)': {
                    gridTemplateColumns: 'repeat(1, 100%)',
                },
                '@media (max-width: 800px)': {
                    margin: 'auto'
                },
            }}>
                <ProductCard
                    title='Sacola de papel Offset'
                    img='sacola-pape-modelo.png'
                    content={'Para embalar produtos de maneira elegante, oferecendo aos clientes uma experiência de compra premium.'}
                    textButton='Mais detalhes ➜'
                    onClick={() => handleNavigation('/sacolas-offset')}
                />
                <ProductCard
                    title='Sacola de papel Duplex'
                    img='bag-modelo-produtos.png'
                    content={'As sacolas de papel Duplex são perfeitas para embalar produtos de moda, joias, cosméticos e muito mais.'}
                    textButton='Mais detalhes ➜'
                    onClick={() => handleNavigation('/sacolas-duplex')}
                />
                <ProductCard
                    title='Sacola de papel Kraft'
                    img='cartoes-produto.png'
                    content={'Perfeitas para embalar produtos alimentícios, devido à sua resistência e à percepção de naturalidade.'}
                    textButton='Mais detalhes ➜'
                    onClick={() => handleNavigation('/sacolas-kraft')}
                />
            </Box>
        </CategoryComponent>
    )
}

export default PaperCategory

