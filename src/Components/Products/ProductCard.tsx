import { ButtonBase, Card, Typography } from '@mui/material';
import React from 'react';

interface ProductCardProps {
    title: string;
    content: string;
    img: string
}

const ProductCard: React.FC<ProductCardProps> = ({ title, content, img }) => {
    return (
        <Card sx={{
            bgcolor: '#FCF6F6',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            borderRadius: '1rem',
            maxWidth: '35rem',
            width: '100%',
            height: '100%',
            transition: 'transform 0.2s ease-in-out',
            boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.2)',
            '&:hover': {
                transform: 'scale(1.03)',
            },
        }}>

            <img src={img} alt="imagem produto" style={{ width: '100%', objectFit: 'cover', borderRadius: '.5rem' }} />

            <Typography fontSize={'18px'} fontWeight={600} mt={'1rem'}>{title}</Typography>
            <Typography fontSize={'15px'} textAlign={'center'}>{content}</Typography>
            <ButtonBase sx={{
                width: '100%',
                bgcolor: '#FFC9C9',
                boxShadow: '0 0px 6px 0 rgba(0, 0, 0, 0.1)',
            }}>
                Ver modelos ➜
            </ButtonBase>
        </Card>
    )
}

export default ProductCard