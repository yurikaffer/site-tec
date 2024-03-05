import { Box, Card, Typography } from '@mui/material';
import React from 'react';

interface CardStepProps {
    title: string;
    content: string;
    icon: string;
    button?: boolean;
}

const CardStep: React.FC<CardStepProps> = ({title, content, icon, button}) => {
    return (
        <Card sx={{ 
            bgcolor: '#E7BCBC',
            padding: '3rem',
            width: '100%',
            height: '100%',
            borderRadius: '1rem',
            boxSizing: 'border-box',
            transition: 'transform 0.2s ease-in-out',
            cursor: 'grab',
            '&:hover': {
                transform: 'scale(1.05)', // Aumenta o tamanho do card em 5% ao passar o mouse
            },
        }}>
            <Box mb={'2.5rem'}>
                <img src={icon}/>
            </Box>
            <Typography 
                fontSize={'1.8rem'} 
                fontWeight={600} 
                mb={'1rem'}
                sx={{
                    '@media (max-width: 1540px)': {
                        fontSize: '1.6rem',
                        fontWeight: 500
                    },
                    '@media (max-width: 482px)': {
                        fontSize: '1.4rem',
                        fontWeight: 500
                    },
                }}
            > 
                {title} 
            </Typography>

            <Typography 
                fontSize={'1.5rem'}
                sx={{
                    '@media (max-width: 1540px)': {
                        fontSize: '1.4rem',
                    },
                    '@media (max-width: 482px)': {
                        fontSize: '1.2rem',
                    },
                }}
            > 
                {content}
            </Typography>
        </Card>
    )
}

export default CardStep