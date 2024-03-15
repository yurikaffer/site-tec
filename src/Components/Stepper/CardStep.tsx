import { Box, ButtonBase, Card, Typography } from '@mui/material';
import React from 'react';

interface CardStepProps {
    title: string;
    content: string;
    icon: string;
    button?: boolean;
    background: string;
}

const CardStep: React.FC<CardStepProps> = ({title, content, icon, button, background}) => {
    return (
        <Card sx={{ 
            background: `url('${background}') center center`,
            backgroundSize: 'cover',
            //bgcolor: '#F6F1F1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem',
            width: '100%',
            height: '100%',
            borderRadius: '1rem',
            boxSizing: 'border-box',
            transition: 'transform 0.2s ease-in-out',
            boxShadow: '0 1px 6px 0 rgba(0, 0, 0, 0.2)',
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
                <Typography fontSize={'14px'} textAlign={'center'} mb={'2rem'}> 
                    {content}
                </Typography>
                { button && (
                    <ButtonBase sx={{
                        bgcolor: '#F8B5B5',
                        width: '100%',
                        boxShadow: '0 0px 6px 0 rgba(0, 0, 0, 0.1)',
                        borderRadius: '50rem'
                     }}>
                        Entrar em contato
                     </ButtonBase>
                )}
        </Card>
    )
}

export default CardStep