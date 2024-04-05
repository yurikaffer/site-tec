import { Box, useMediaQuery } from '@mui/material';
import React from 'react';
import Contacts from '../Contact/Contacts';
import ContactsMobile from '../Contact/ContactsMobile';
import { useTheme } from '@mui/material/styles';
import MapsComponent from '../Maps/MapsComponent';

const SectionContacts: React.FC = () => {
    const theme = useTheme();
    const isTabletOrLarger = useMediaQuery(theme.breakpoints.up(975));

    return (
        <Box pt={'5rem'} pb={'10rem'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
            {isTabletOrLarger ? <Contacts /> : <ContactsMobile />}
            <MapsComponent/>
        </Box>
    )
}

export default SectionContacts