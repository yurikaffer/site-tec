import React, { useEffect, useRef, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import CardStep from './CardStep';

const steps = [
    {
        title: '1. Tamanho',
        content: 'Qual o tipo e a gramatura do papel a ser utilizado na Caixa ou na Sacola? Dentre os mais comuns para embalagens, temos o Kraft, Duplex, Triplex e Offset. Gramatura é a grossura do material e pode variar de 90 até 400g. Quanto menor mais fino e maleável, quanto maior mais grosso e resistente',
        icon: 'ruler.svg',
        background: '/blob-scene-haikei (5).png'
    },
    {
        title: '2. Material',
        content: 'Embalagens, na maioria dos casos, são tridimensionais, ou seja, têm Altura, Largura e Profundidade. Tenha em mãos essas três medidas ou, para designers e pessoas mais experientes, método de fechamento da caixa, a medida da "faca" ou desenho aberto.',
        icon: 'bag.svg',
        background: 'blob-scene-haikei (8).png'
    },
    {
        title: '3. Cores',
        content: 'O número de cores interfere diretamente no preço da embalagem e varia de 1 até 4 cores, que é o número de cores utilizados para impressão de fotos ou imagens complexas. As tinta utilizada pode ser padrão Pantone, que é uma codificação universal, ou Cromia com a combinação da cores Ciano, Magenta, Amarelo e Preto.',
        icon: 'palette.svg',
        background: 'blob-scene-haikei (7).png'
    },
    {
        title: '4. Ficou na dúvida?',
        content: 'Se você ficar em dúvida, estamos aqui para ajudá-lo. Envie seu logotipo, foto ou design e nós vamos auxiliar você. Não tem um design? Fale com a gente. Ainda não sabe por onde começar? Entre em contato agora mesmo!',
        icon: 'question.svg',
        background: 'blob-scene-haikei (6).png',
        button: true
    },
]

const Stepper = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(400)
    const [height, setHeight] = useState(350)
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const resizeCard = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 1395) {
            setWidth(300)
            setHeight(360)
        } else {
            setWidth(400)
            setHeight(350)
        }
    };

    useEffect(() => {
        resizeCard();
        window.addEventListener('resize', resizeCard);
        return () => window.removeEventListener('resize', resizeCard);
    }, []);

    const adjustScroll = () => {
        if (scrollRef.current) {
            const currentScroll = scrollRef.current.scrollLeft;
            const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
            // A largura total ocupada por um card mais o espaço entre cards
            const totalWidthPerCard = width + 30;

            // Calcula qual card deve estar visível baseado na posição atual de rolagem
            let cardToShow = Math.round(currentScroll / totalWidthPerCard);

            // Calcula a nova posição de rolagem para ajustar o card visível
            let newScrollPosition = cardToShow * totalWidthPerCard;

            // Assegura que a rolagem não exceda os limites do conteúdo
            newScrollPosition = Math.min(newScrollPosition, maxScroll);

            scrollRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth',
            });
        }
    };

    const startDragging = (e: React.MouseEvent) => {
        if (scrollRef.current) {
            setIsDragging(true);
            setStartX(e.pageX - scrollRef.current.offsetLeft);
            setScrollLeft(scrollRef.current.scrollLeft);
        }
    };

    const stopDragging = () => {
        setIsDragging(false);
        adjustScroll();
    };

    const onDrag = (e: React.MouseEvent) => {
        if (isDragging && scrollRef.current) {
            e.preventDefault();
            const x = e.pageX - scrollRef.current.offsetLeft;
            const walk = (x - startX);
            scrollRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const scrollBy = (offset: number) => {
        if (scrollRef.current) {
            const newScrollPosition = scrollRef.current.scrollLeft + offset;
            scrollRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth',
            });
            setTimeout(adjustScroll, 350); // Aguarda a rolagem suave terminar antes de ajustar
        }
    };

    return (
        <Box sx={{
            display: 'flex', 
            alignItems: 'center',
            '@media (max-width: 750px)': {
                display: 'none',
            }
        }}
        >
            <IconButton onClick={() => scrollBy(-width)} sx={{ ml: 'auto', padding: 0 }} >
                <Box width={'5rem'}>
                    <img src='caret-left.svg' width={'100%'} />
                </Box>
            </IconButton>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    overflowX: 'hidden',
                    gap: '30px',
                    width: `${(3 * width) + (2 * 30) + 30}px`,
                    padding: '5rem 1rem',
                    boxSizing: 'border-box',
                    '-ms-overflow-style': 'none', // IE and Edge
                    'scrollbar-width': 'none', // Firefox
                    '&::-webkit-scrollbar': { // Oculta a scrollbar no Webkit/Blink browsers
                        display: 'none',
                    },
                    '@media (max-width: 1100px)': {
                        width: `${(2 * width) + (2 * 30) - 10}px`,
                    },
                }}
                ref={scrollRef}
                onMouseDown={startDragging}
                onMouseMove={onDrag}
                onMouseLeave={stopDragging}
                onMouseUp={stopDragging}
            >
                {steps.map((step, index) => (
                    <Box key={index}
                        sx={{
                            width: `${width}px`,
                            height: `${height}px`,
                            flexShrink: 0,
                        }}
                    >
                        <CardStep {...step} />
                    </Box>
                ))}
            </Box>

            <IconButton onClick={() => scrollBy(width)} sx={{ mr: 'auto', padding: 0 }}>
                <Box width={'5rem'}>
                    <img src='caret-right.svg' width={'100%'} />
                </Box>
            </IconButton>
        </Box>
    );
};

export default Stepper;