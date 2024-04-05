import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const LoadingComponent: React.FC = () => {
    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100%'}>
            <CircularProgress sx={{color: '#F9B4B4'}}/>
        </Box>
    )
}

export default LoadingComponent