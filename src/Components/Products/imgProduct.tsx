import React, { useEffect, useState } from 'react';
import { Skeleton } from '@mui/material';

interface imgProductProps {
    img: string
}

const ImageProduct: React.FC<imgProductProps> = ({ img }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const imageLoader = new Image();
        imageLoader.src = img;
        imageLoader.onload = () => {
            setLoaded(true);
        };
    }, [img]);

    return (
        <>
            {!loaded && <Skeleton variant="rounded" width={'100%'} height={'21rem'} />}
            <img
                src={img}
                alt="Imagem do produto"
                style={{
                    width: '100%',
                    objectFit: 'cover',
                    maxHeight: '21rem',
                    borderRadius: '.5rem',
                    display: loaded ? 'block' : 'none',
                }}
                onLoad={() => setLoaded(true)}
                loading="lazy"
            />
        </>
    )
}

export default ImageProduct