
import React, { useState, useEffect } from 'react';
import NavBar from './Navbar';
import { Box, Typography } from '@mui/material';

const SubNavbar: React.FC = () => {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', bgcolor: '#202020', color: '#FCFCFC', padding: '5px' }}>
                <Typography pl={'10%'} fontSize={'12px'}> Sua jornada para deixar sua marca no mundo começa aqui.</Typography>
            </Box>
            <NavBar boxStyle={{
                bgcolor: '#FFF',
                padding: '1rem 10%',
                position: 'fixed',
                boxShadow: '0 1px 0px 0 rgba(0, 0, 0, 0.1)',
            }} img='tec-logo-cut.png' heightImg='3rem' smButtons={true}
            />
        </Box>
    );
}

export default SubNavbar;