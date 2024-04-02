import { Box, useTheme } from '@mui/material';
import React from 'react';
import ResumeItem from './ResumeItem';

const ResumoSobre: React.FC = () => {
    const theme = useTheme();

    return (
        <Box id='about-resume'
            display={'flex'}
            justifyContent={'center'}
            gap={'15%'}
            padding={'5rem 10%'}
            sx={{
                bgcolor: '#F3F3F3',
                boxShadow: `inset 0 1px 3px 0 rgba(0, 0, 0, 0.1), inset 0 -1px 3px 0 rgba(0, 0, 0, 0.1)`,
                [theme.breakpoints.down(1000)]: {
                    padding: '5rem',
                    gap: '5%',
                },
                [theme.breakpoints.down(555)]: {
                    padding: '3rem 1rem',
                },
            }}
        >
            <ResumeItem 
              imgSrc="/almoco-foguete.png" 
              imgAlt="imagem foguete" 
              title="+28 anos" 
              description="no mercado" 
            />
            <ResumeItem 
              imgSrc="/gema.png" 
              imgAlt="imagem diamante" 
              title="Impressão" 
              description="alta qualidade" 
            />
            <ResumeItem 
              imgSrc="/aperto-de-mao.png" 
              imgAlt="imagem aperto de mão" 
              title="Profissionais" 
              description="qualificados" 
            />
        </Box>
    );
}

export default ResumoSobre;
