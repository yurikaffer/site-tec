import { ButtonBase, Typography } from '@mui/material';
import React from 'react';

interface FooterButtonProps {
    onClick: () => void,
    name: string
}

const textStyle = {
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'transform 0.1s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)',
    },
}

const FooterButton: React.FC<FooterButtonProps> = ({ onClick, name }) => {

    const handleClick = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        onClick();
    }

    return (
        <>
            <ButtonBase sx={{
                padding: 0,
            }}>
                <Typography marginRight={'auto'} onClick={handleClick} sx={textStyle} >{name}</Typography>
            </ButtonBase>
        </>
    )
}

export default FooterButton

