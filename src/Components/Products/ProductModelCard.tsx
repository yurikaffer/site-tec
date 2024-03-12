import { Card, Typography } from '@mui/material';
import React from 'react';

interface ProductCardProps {
    title: string;
    content: string;
    img: string
}

const ProductModelCard: React.FC<ProductCardProps> = ({ title, content, img }) => {
    return (
        <Card sx={{
            bgcolor: '#E4E4E4',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            borderRadius: '.5rem',
            maxWidth: '35rem',
            width: '100%',
            height: '100%',
            transition: 'transform 0.2s ease-in-out',
            boxShadow: '0 6px 9px 0 rgba(0, 0, 0, 0.1)',
            '&:hover': {
                transform: 'scale(1.03)',
            },
        }}>

            <img src={img} alt="imagem produto" style={{ width: '100%', objectFit: 'cover', borderRadius: '.5rem' }} />
            <Typography fontSize={'18px'} fontWeight={600}>{title}</Typography>
            <Typography fontSize={'15px'} textAlign={'center'}>{content}</Typography>
        </Card>
    )
}

export default ProductModelCard