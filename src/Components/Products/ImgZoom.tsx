import { Box, Paper } from '@mui/material';
import React, { useState } from 'react';

interface ComponentProp {
    img: string;
}

const ImgZoom: React.FC<ComponentProp> = ({ img }) => {
    const [zoom, setZoom] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        const { left, top, width, height } = target.getBoundingClientRect();

        setPosition({
            x: ((e.pageX - left) / width) * 100,
            y: ((e.pageY - top) / height) * 100,
        });
    };

    return (
        <Paper
            elevation={0}
            onMouseEnter={() => setZoom(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setZoom(false)}
            sx={{ overflow: 'hidden', cursor: 'zoom-in', width: '50rem', height: '50rem', }}
        >
            <Box
                sx={{
                    width: '100%', 
                    height: '100%',
                    backgroundColor: '#FCFCFC',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    component="img"
                    src={img}
                    alt='imagem produto'
                    sx={{
                        width: '100%',
                        height: '100%',
                        transition: 'transform .5s ease',
                        transformOrigin: `${position.x}% ${position.y}%`,
                        transform: zoom ? 'scale(2)' : 'scale(1)',
                        objectFit: 'cover',
                    }}
                />
            </Box>
        </Paper>

    )
}

export default ImgZoom

