import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './styles.css';
import { Pagination, Autoplay } from 'swiper/modules';
import { Box, Typography } from '@mui/material';

const images = [
    'viqua.png',
    'DB.png',
    'delicada.png',
    'casinha.png',
    'fluxo.png',
    'jana.png',
    'prado.png',
    'pri.png',
    'star-case.png',
    'zhana.png',
    'toninho.png',
];

const aboutTexBox = {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    padding: '5rem 0rem',
    paddingTop: '10rem',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 715px)': {
        padding: '2rem',
        gap: 2,
    },
}

const SwiperClients: React.FC = () => {
    const [itemsToShow, setItemsToShow] = useState(5);

    // Função para calcular e ajustar o número de itens com base no tamanho da janela
    const updateItemsToShow = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 600) {
            setItemsToShow(3);
        } else if (screenWidth <= 1225) {
            setItemsToShow(4);
        } else {
            setItemsToShow(5);
        }
    };

    useEffect(() => {
        updateItemsToShow();
        // Adiciona o listener para mudanças de tamanho de tela
        window.addEventListener('resize', updateItemsToShow);
        // Limpa o listener quando o componente é desmontado
        return () => window.removeEventListener('resize', updateItemsToShow);
    }, []);

    return (
        <Box sx={aboutTexBox}>
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
                Alguns de nossos clientes
            </Typography>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                justifyContent: 'center',
                margin: '0 auto',
                width: '100%',
                '@media (max-width: 900px)': {
                    width: '95%',
                },
                '@media (max-width: 460px)': {
                    paddingLeft: '5px',
                    paddingRight: '5px'
                },
            }}
            >
                <Swiper
                    slidesPerView={itemsToShow}
                    spaceBetween={40}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000, 
                        disableOnInteraction: false, 
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Box sx={{
                                width: '90%',
                                height: '100px',
                                '@media (max-width: 500px)': {
                                    width: '100%',
                                },
                            }}>
                                <img src={image} alt={`Slide ${index}`} />
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
}

export default SwiperClients;