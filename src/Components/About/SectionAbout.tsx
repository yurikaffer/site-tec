import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';

const SectionAbout: React.FC = () => {
    const theme = useTheme();

    const aboutTextStyles = {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        padding: '5rem 10%',
        maxWidth: '110rem',
        [theme.breakpoints.down(715)]: {
            padding: '2rem',
        },
    };

    const textStyle = (fontSize: string, fontWeight: number, overrideStyles = {}) => ({
        fontSize: fontSize,
        fontWeight: fontWeight,
        ...overrideStyles,
        [theme.breakpoints.down(1000)]: {
            fontSize: fontSize === '2.4rem' ? '1.8rem' : '1.6rem',
            fontWeight: fontSize === '2.4rem' ? 600 : fontWeight,
        },
    });

    const imgStyle = {
        width: '35rem',
        [theme.breakpoints.down(1000)]: {
            width: '25rem',
        },
        [theme.breakpoints.down(715)]: {
            display: 'none',
        },
    };

    return (
        <Box display={'flex'} sx={{ bgcolor: '#FCFCFC', padding: '4rem 0' }}>
            <Box sx={aboutTextStyles}>
                <Typography sx={textStyle('2.4rem', 700)}>
                    Sobre nós?
                </Typography>

                <Typography sx={textStyle('1.8rem', 400)}>
                    Com mais de 28 anos, a Traço e Cor nasceu a partir da crescente necessidade do mercado por
                    embalagens de alta qualidade e ótimo custo benefício. Desde então, temos nos dedicado a inovar e
                    aprimorar nossos processos e produtos, oferecendo soluções personalizadas que não apenas atendem,
                    mas superam as expectativas de nossos clientes.
                </Typography>

                <Typography sx={textStyle('1.8rem', 400)}>
                    Aqui na Tec, acreditamos que uma embalagem vai muito além de um simples recipiente; ela é uma
                    extensão da marca e uma ferramenta poderosa de comunicação. É por isso que trabalhamos lado a lado
                    com nossos clientes para criar embalagens que contam sua história e conectam-se emocionalmente com
                    os consumidores. Orgulhamo-nos de nossa trajetória e estamos animados para o futuro, continuando a
                    deixar nossa marca no mundo, uma embalagem de cada vez."
                </Typography>
            </Box>
            <Box
                display={'flex'}
                marginLeft={'auto'}
                alignItems={'center'}
            >
                <Box sx={imgStyle}>
                    <img src="/img-exemple.png" alt="imagem sacola" style={{ width: '100%' }} />
                </Box>
            </Box>
        </Box>
    );
}

export default SectionAbout;
