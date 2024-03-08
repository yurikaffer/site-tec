import { Box, ButtonBase, Card, Typography } from '@mui/material';
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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: '#E4E4E4',
            padding: '2rem',
            width: '100%',
            height: '100%',
            borderRadius: '1rem',
            boxSizing: 'border-box',
            transition: 'transform 0.2s ease-in-out',
            boxShadow: '0 3px 9px 0 rgba(0, 0, 0, 0.1)',
            cursor: 'grab',
            '&:hover': {
                transform: 'scale(1.03)',
            },
        }}>
            <Box mb={'1rem'}>
                <img src={icon}/>
            </Box>
                <Typography fontSize={'1.8rem'} fontWeight={600} mb={'1rem'}> 
                    {title} 
                </Typography>
                <Typography fontSize={'14px'} textAlign={'center'}> 
                    {content}
                </Typography>
                { button && (
                    <ButtonBase sx={{
                        padding: '1rem',
                        bgcolor: '#B7B7B7',
                        borderRadius: '.5rem',
                        width: '100%',
                        font: 'Sora',
                        fontSize: '15px',
                        mt: '1rem'
                     }}>
                        Entrar em contato
                     </ButtonBase>
                )}
        </Card>
    )
}

export default CardStep