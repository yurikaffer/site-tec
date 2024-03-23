import { Box, ButtonBase, Typography } from '@mui/material';
import React from 'react';

interface SmButtonNavbarProps {
    name: string;
    onClick: () => void;
}

const Style = {
    marginLeft: '1rem',
    cursor: 'pointer',
    position: 'relative',
    '&:hover::after': {
        width: '100%'
    },
    '::after': {
        content: '""',
        position: 'absolute',
        bottom: '3px',
        marginLeft: '1px',
        display: 'block',
        width: '15px',
        borderBottom: '2px solid #F7ADAF',
        transition: 'width .3s ease-in-out',
    }
}

const SmButtonNavbar: React.FC<SmButtonNavbarProps> = ({ name, onClick }) => {
    return (
        <ButtonBase disableRipple onClick={onClick}>
            <Box sx={Style} >
                <Typography fontSize={'16px'}>
                    {name}
                </Typography>
            </Box>
        </ButtonBase>
    )
}

export default SmButtonNavbar
