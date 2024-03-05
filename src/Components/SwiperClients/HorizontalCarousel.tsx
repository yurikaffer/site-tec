import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const images = [
    'teclogo.png',
    'star-case.png',
    'toninho.png',
    'viqua.png',
    'zhana.png',
    'prado.png',
    'fluxo.png',
    'pri.png',
    'teclogo.png',
    'star-case.png',
    'toninho.png',
    'viqua.png',
    'zhana.png',
    'prado.png',
    'fluxo.png',
    'pri.png',
];

const HorizontalCarousel: React.FC = () => {
    const [itemsToShow, setItemsToShow] = useState(5);
    const [imageWidth, setImageWidth] = useState(150)
    const scrollContainer = React.useRef<HTMLDivElement>(null);

    // Função para calcular e ajustar o número de itens com base no tamanho da janela
    const updateItemsToShow = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 400) {
            setItemsToShow(1);
        } else if (screenWidth <= 600) {
            setItemsToShow(2);
        } else if (screenWidth <= 750) {
            setItemsToShow(3);
        } else if (screenWidth <= 950) {
            setImageWidth(100)
        } else if (screenWidth <= 1225) {
            setImageWidth(150)
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

    const totalWidthPerImage = imageWidth + 48; // Largura total ocupada por cada imagem incluindo margem, 48 é a margem

    const handleScroll = (direction: 'left' | 'right') => {
        if (scrollContainer.current) {
            const container = scrollContainer.current;
            const scrollAmount = totalWidthPerImage * itemsToShow; // Usa o estado itemsToShow para definir o scroll
            const newScrollPosition = direction === 'left' ? container.scrollLeft - scrollAmount : container.scrollLeft + scrollAmount;

            container.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
        }
    };

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            justifyContent: 'center',
            padding: '5rem',
            '@media (max-width: 1225px)': {
                paddingLeft: '2rem',
                paddingRight: '2rem'
            },
            '@media (max-width: 460px)': {
                paddingLeft: '5px',
                paddingRight: '5px'
            },
        }}
        >
            <IconButton onClick={() => handleScroll('left')} 
                        aria-label="scroll left" 
                        sx={{ mr: '2rem',
                            '@media (max-width: 460px)': {
                                mr: '2px',
                            },
                        }}>
                <ChevronLeftIcon fontSize='large' />
            </IconButton>

            <Box
                ref={scrollContainer}
                sx={{
                    display: 'flex',
                    overflowX: 'auto',
                    scrollbarWidth: 'none',
                    '&::-webkit-scrollbar': { display: 'none' },
                    '-ms-overflow-style': 'none',
                    maxWidth: `${totalWidthPerImage * itemsToShow}px`,
                }}
            >
                {images.map((image, index) => (
                    <Box
                        key={index}
                        component="img"
                        src={image}
                        alt={`Carousel item ${index}`}
                        sx={{ 
                            width: `${imageWidth}px`, 
                            objectFit: 'contain', 
                            margin: '0 24px',
                        }}
                    />
                ))}
            </Box>

            <IconButton onClick={() => handleScroll('right')} 
                        aria-label="scroll right"
                        sx={{ ml: '2rem' ,
                            '@media (max-width: 460px)': {
                                ml: '2px',
                            },
                        }}>
                <ChevronRightIcon fontSize='large' />
            </IconButton>
        </Box>
    );
};

export default HorizontalCarousel;
