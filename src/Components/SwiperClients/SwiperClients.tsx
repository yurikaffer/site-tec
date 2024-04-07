import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './styles.css';
import { Pagination, Autoplay } from 'swiper/modules';
import { Box, Typography } from '@mui/material';

const images: string[] = [
    'viqua.webp',
    'DB.webp',
    'delicada.webp',
    'casinha.webp',
    'fluxo.webp',
    'jana.webp',
    'prado.webp',
    'pri.webp',
    'star-case.webp',
    'zhana.webp',
    'toninho.webp',
    'inplave.webp',
    'fave.webp',
    'divina.webp',
    'denk.webp',
    'I Love Joias.webp',
    'BV.webp'
];

const aboutTexBox = {
    bgcolor: '#FAFAFA',
    boxShadow: `inset 0 1px 3px 0 rgba(0, 0, 0, 0.1), inset 0 -1px 3px 0 rgba(0, 0, 0, 0.1)`,
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    paddingY: '3rem',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 715px)': {
        paddingY: '2rem',
        gap: 2,
    },
}

// Função de debounce para otimizar a performance durante o resize
function debounce<T extends (...args: any[]) => any>(fn: T, ms: number = 250): (...args: Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    return function (...args: Parameters<T>) {
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => fn(...args), ms);
    };
}

const SwiperClients: React.FC = () => {
    const [itemsToShow, setItemsToShow] = useState<number>(5);

    const updateItemsToShow = (): void => {
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
        const debouncedHandleResize = debounce(updateItemsToShow);
        debouncedHandleResize();
        window.addEventListener('resize', debouncedHandleResize);
        return () => window.removeEventListener('resize', debouncedHandleResize);
    }, []);

    return (
        <section>
            <Box sx={aboutTexBox}>
                <Typography
                    component="h1"
                    fontSize={'2.4rem'}
                    fontWeight={600}
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
                            delay: 2500,
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
                                    <img src={image} alt={`Slide ${index}`} loading="lazy" />
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Box>
        </section>
    );
}

export default SwiperClients;