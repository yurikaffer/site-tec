import { Box, Typography } from '@mui/material';
import React from 'react';

const typographyBold = {
    fontSize: '2.0rem',
    fontWeight: '700',
    marginTop: '2.0rem',
    '@media (max-width: 715px)': {
        fontSize: '1.6rem',
    },
}

const typography = {
    fontSize: '2.0rem',
    '@media (max-width: 715px)': {
        fontSize: '1.4rem',
    },
}

const imgStyle = {
    width: '8rem',
    '@media (max-width: 555px)': {
        width: '5rem',
    },
}

const ResumoSobre: React.FC = () => {
    return (
        <Box id='about-resume'
            display={'flex'}
            bgcolor={'#E4E4E4'}
            justifyContent={'space-between'}
            padding={'5rem 10%'}
            sx={{
                '@media (max-width: 1000px)': {
                    padding: '5rem 5rem 5rem 5rem'
                },
                '@media (max-width: 555px)': {
                    padding: '3rem 1rem 3rem 1rem'
                },
            }}
        >
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <Box sx={imgStyle}>
                    <img src="/almoco-foguete.png" alt="imagem foguete" style={{ width: '100%' }}/>
                </Box>
                <Typography sx={typographyBold}>+28 anos</Typography>
                <Typography sx={typography}>no mercado</Typography>
            </Box>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
                <Box sx={imgStyle}>
                    <img src="/gema.png" alt="imagem diamante" style={{ width: '100%' }} />
                </Box>
                <Typography sx={typographyBold}>Impressão</Typography>
                <Typography sx={typography}>alta qualidade</Typography>
            </Box>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
                <Box sx={imgStyle}>
                    <img src="/aperto-de-mao.png" alt="imagem aperto de mão" style={{ width: '100%' }} />
                </Box>
                <Typography sx={typographyBold}>Profissionais</Typography>
                <Typography sx={typography}>qualificados</Typography>
            </Box>
        </Box>
    )
}

export default ResumoSobre