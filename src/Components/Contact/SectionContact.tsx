import { Box, Typography } from '@mui/material';
import React from 'react';
import Contacts from './Contacts';
import ContactsMobile from './ContactsMobile';

const SectionContacts: React.FC = () => {
    return (
        <Box >
            <Contacts/>
            <ContactsMobile/>
        </Box>
    )
}

export default SectionContacts