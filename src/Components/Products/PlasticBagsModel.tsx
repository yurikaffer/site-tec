import { Box } from '@mui/material';
import React from 'react';
import ProductModelCard from './ProductModelCard';

const PlasticBagsModel: React.FC = () => {
    return (
        <Box padding={'1rem'}>
            <Box sx={{
                display: 'grid',
                height: '100%',
                width: '100%',
                gridTemplateColumns: 'repeat(3, 35rem)',
                gap: '3rem',
                alignItems:'center',
                justifyContent: 'center',
                '@media (max-width: 1130px)': {
                    gridTemplateColumns: 'repeat(2, 35rem)',
                    gridTemplateRows: 'repeat(3, auto)',
                },
                '@media (max-width: 760px)': {
                    gridTemplateColumns: 'repeat(1, 35rem)',
                    gridTemplateRows: 'repeat(4, auto)',
                },
                '@media (max-width: 430px)': {
                    gridTemplateColumns: 'repeat(1, 95%)',
                },
            }}>
                <ProductModelCard
                    title='Sacola Alça Vazada'
                    img='C2-600x600.webp'
                    content={'A sacola vazada (também conhecida como boca de palhaço ou boca triste) é o modelo mais procurado por lojista. O seu aspecto retangular e uniforme, permite um visual mais atraente, que valoriza o logo. Com ótimo custo benefício, a sacola alça vazada é uma ótima escolha para sua loja.'}
                />
                <ProductModelCard
                    title='Sacola Alça Fita'
                    img='C2-600x600.webp'
                    content={'Eleve a experiência de compra na sua loja com as sacolas alça fita! Além de práticas e estilosas, são uma opção reutilizável que potencializa a divulgação da sua marca, alcançando novos clientes de forma sustentável.'}
                />
                <ProductModelCard
                    title='Sacola Alça Camiseta'
                    img='C2-600x600.webp'
                    content={'A sacola camiseta é um modelo versátil e resistente que atende sua necessidade. Graças a sanfona na lateral que expande o tamanho original da sacola, você tem mais espaço para acomodar os produtos. Se você precisa de espaço, essa é a escolha certa!'}
                />

            </Box>
        </Box>
    );
}

export default PlasticBagsModel