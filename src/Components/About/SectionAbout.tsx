import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';

const SectionAbout: React.FC<{page?: boolean}> = ({page}) => {
    const theme = useTheme();

    const aboutTextStyles = {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: '90rem',
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
        <Box display={'flex'} sx={{ bgcolor: '#FCFCFC'}}>
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
                    deixar nossa marca no mundo, uma embalagem de cada vez.
                </Typography>

                {page && (
                        <>
                            <Typography sx={textStyle('2.4rem', 700)} pt={'1rem'}>
                                Nossa missão
                            </Typography>
                            <Typography sx={textStyle('1.8rem', 400)}>
                                Desenvolver embalagens que não apenas garantam a segurança e a integridade dos 
                                produtos, mas também comuniquem efetivamente a essência e os valores da marca de nossos 
                                clientes. Comprometemo-nos a utilizar nossa expertise em design, sustentabilidade e 
                                tecnologia para desenvolver soluções de embalagens que elevem o reconhecimento da marca, 
                                engajem o consumidor e amplifiquem o impacto no ponto de venda. 
                            </Typography>
                        </>
                    )
                }

            </Box>
            <Box
                display={'flex'}
                marginLeft={'auto'}
                alignItems={'center'}
                gap={'2rem'}
            >
                <Box sx={imgStyle}>
                    <img src="/arte-sobre.png" alt="imagem sacola" style={{ width: '100%' }} />
                </Box>
                <Box sx={imgStyle}>
                    <img src="/arte-sobre 1.png" alt="imagem sacola" style={{ width: '100%' }} />
                </Box>
            </Box>
        </Box>
    );
}

export default SectionAbout;
