import { Box, Divider, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

interface CategoryComponentProp {
    title: string;
    children: ReactNode;
}

const CategoryComponent: React.FC<CategoryComponentProp> = ({ children, title }) => {
    return (
        <Box display={'flex'} flexDirection={'column'} gap={'1rem'} width={'100rem'}>
            <Typography fontSize={'20px'} fontWeight={500} pt={'1rem'}>{title}</Typography>
            <Divider />
            <Box display={'flex'} alignItems={'center'} justifyContent={'start'} pt={'1rem'} gap={'2rem'}>
                {children}
            </Box>
        </Box>
    )
}

export default CategoryComponent




