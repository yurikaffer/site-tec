import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import { PhoneIncoming, EnvelopeSimple, MapPin } from "@phosphor-icons/react";
import ContactsMobile from './ContactsMobile';
import MapsComponent from '../Maps/MapsComponent';

const fontStyle = {
    fontSize: '15px',
}

const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '.5rem',
    alignItems: 'center',
    bgcolor: 'transparent',
    width: '32rem',
    gap: '0.5rem',
    '@media (max-width: 715px)': {
        padding: ' 0 3rem',
        width: '90%',
    },
}

const Contacts: React.FC = () => {
    return (
        <Box sx={{
            bgcolor: '#FCFCFC',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
        }} >
                <Typography
                    textAlign={'center'}
                    fontSize={'2.4rem'}
                    fontWeight={600}
                    marginBottom={'4rem'}
                    sx={{
                        '@media (max-width: 1000px)': {
                            fontSize: '1.8rem',
                            fontWeight: '700'
                        },
                    }}
                >
                    Fale conosco!
                </Typography>

            <Box sx={{
                    display: 'flex',
                    '@media (max-width:975px)': {
                        display: 'none'
                    },
                }}
            >
                <Box sx={cardStyle}>
                    <PhoneIncoming size={50} />
                    <Typography fontSize={'18px'} fontWeight={600} mb={'0.2rem'}>Ligue para nós</Typography>
                    <Box>
                        <Box display={'flex'}>
                            <Typography sx={fontStyle} fontWeight={600}>Telefone:&nbsp;</Typography>
                            <Typography sx={fontStyle}>(+55) 47 99999-9999</Typography>
                        </Box>
                        <Box display={'flex'}>
                            <Typography textAlign={'center'} sx={fontStyle} fontWeight={600}>Whatsapp:&nbsp;</Typography>
                            <Typography textAlign={'center'} sx={fontStyle}>(+55) 47 99999-9999</Typography>
                        </Box>
                    </Box>
                </Box>

                <Box sx={cardStyle}>
                    <EnvelopeSimple size={50} />
                    <Typography fontSize={'18px'} fontWeight={600}>Envie um e-mail</Typography>

                        <Box display={'flex'} justifyContent={'start'}>
                            <Typography textAlign={'center'} sx={fontStyle}>tecserigrafia@gmail.com</Typography>
                        </Box>

                </Box>

                <Box sx={cardStyle}>

                        <MapPin size={50} />

                    <Typography fontSize={'18px'} fontWeight={600}>Faça uma visita</Typography>
                        <Box display={'flex'}>
                            <Typography textAlign={'center'} sx={fontStyle}>R. Servidão Santa Matilde, 135 - João Costa, Joinville - SC, 89209-050</Typography>
                        </Box>
                </Box>
            </Box>
            
            <Box paddingTop={'5rem'}>
                <ContactsMobile/>
            </Box>

            <MapsComponent/>
        </Box>
    )
}

export default Contacts