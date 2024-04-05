import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const LoadingComponent: React.FC = () => {
    return (
        <Box display={'flex'} justifyContent={'center'} alignItems="center">
            <CircularProgress/>
        </Box>
    )
}

export default LoadingComponent