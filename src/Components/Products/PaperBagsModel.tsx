import { Box } from '@mui/material';
import React from 'react';
import ProductModelCard from './ProductModelCard';

const PaperBagsModel: React.FC = () => {
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
                    title='Sacola Offset'
                    img='bag-modelo-produtos.png'
                    content={'Os modelos de sacola fabricado com papel offset são bonitas, resistentes e tem ótimo custo benefício.'}
                />
                <ProductModelCard
                    title='Sacola Duplex'
                    img='bag-modelo-produtos.png'
                    content={'A sacola de papel duplex é mais grossinha e ainda mais resistência. Ideal para roupas grandes que precisam de mais espaço.'}
                />
                <ProductModelCard
                    title='Sacola Kraft'
                    img='bag-modelo-produtos.png'
                    content={'A sacola kraft pode ser produzida com a alça em nylon ou em papel kraft. Além disso, possui modelos coloridos e diversos tamanhos.'}
                />

            </Box>
        </Box>
    );
}

export default PaperBagsModel