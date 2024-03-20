import React from 'react';
import { Box, Typography } from '@mui/material';

interface ApplicationItem {
    title: string;
    description: string;
}

interface ProductDescriptionProps {
    mainTitle: string;
    description: string;
    applications: ApplicationItem[];
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ mainTitle, description, applications }) => {
    return (
        <Box display={'flex'} flexDirection={'column'} maxWidth={'65rem'} gap={'1rem'}>
            <Typography fontSize={'24px'} fontWeight={600}>{mainTitle}</Typography>
            <Typography fontSize={'16px'} mb={'1rem'}>
                {description}
            </Typography>
            <Typography fontSize={'18px'} fontWeight={600}>Aplicações comuns</Typography>

            {applications.map((app, index) => (
                <React.Fragment key={index}>
                    <Typography fontSize={'15px'} mb={'1rem'}>
                        <strong>{app.title}</strong>{app.description}
                    </Typography>
                </React.Fragment>
            ))}
        </Box>
    );
};

export default ProductDescription;
