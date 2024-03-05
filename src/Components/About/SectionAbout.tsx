import { Box, Typography } from '@mui/material';
import React from 'react';

const aboutTexBox = {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    padding: '5rem',
    maxWidth: '110rem',
    '@media (max-width: 715px)': {
        padding: '2rem',
    },
}

const imgStyle = {
    width: '35rem',
    '@media (max-width: 1000px)': {
        width: '25rem',
    },
    '@media (max-width: 715px)': {
        display: 'none',
    },
}

const SectionAbout: React.FC = () => {
    return (
        <Box id='container-about' display={'flex'} >
            <Box id='about-text' sx={aboutTexBox} >
                <Typography 
                    fontSize={'2.4rem'} 
                    fontWeight={700}
                    sx={{
                        '@media (max-width: 1000px)': {
                            fontSize: '1.8rem',
                            fontWeight: '600'
                        },
                    }}
                >
                    Sobre nós?
                </Typography>

                <Typography 
                    fontSize={'1.8rem'} 
                    fontWeight={400}
                    sx={{
                        '@media (max-width: 1000px)': {
                            fontSize: '1.6rem'
                        },
                    }}
                >
                    Com mais de 28 anos, a Traço e Cor nasceu a partir da crescente necessidade do mercado por
                    embalagens de alta qualidade e ótimo custo benefício. Desde então, temos nos dedicado a inovar e
                    aprimorar nossos processos e produtos, oferecendo soluções personalizadas que não apenas atendem,
                    mas superam as expectativas de nossos clientes.
                </Typography>
                <Typography
                    fontWeight={400}
                    fontSize={'1.8rem'}
                    sx={{
                        '@media (max-width: 1000px)': {
                            fontSize: '1.6rem'
                        },
                    }}
                >
                    Aqui na Tec, acreditamos que uma embalagem vai muito além de um simples recipiente; ela é uma
                    extensão da marca e uma ferramenta poderosa de comunicação. É por isso que trabalhamos lado a lado
                    com nossos clientes para criar embalagens que contam sua história e conectam-se emocionalmente com
                    os consumidores. Orgulhamo-nos de nossa trajetória e estamos animados para o futuro, continuando a
                    deixar nossa marca no mundo, uma embalagem de cada vez."
                </Typography>
            </Box>
            <Box id='about-img'
                display={'flex'}
                marginLeft={'auto'}
                alignItems={'center'}
                sx={{
                    '@media (max-width: 1000px)': {
                        
                    },
                }}
            >
                <Box sx={imgStyle}>
                    <img src="/img-exemple.png" alt="imagem sacola" style={{ width: '100%' }} />
                </Box>
            </Box>
        </Box>
    )
}

export default SectionAbout