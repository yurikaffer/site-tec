import { Box, Typography } from '@mui/material';
import React from 'react';
import { PhoneIncoming, EnvelopeSimple, MapPin } from "@phosphor-icons/react";

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
                component="h1"
                textAlign={'center'}
                fontSize={'2.4rem'}
                fontWeight={600}
                marginBottom={'4rem'}
            >
                Fale conosco!
            </Typography>

            <Box sx={{
                    display: 'flex',
                    paddingBottom: '5rem',
                    '@media (max-width:975px)': {
                        display: 'none'
                    },
                }}
            >
                <Box sx={cardStyle}>
                    <PhoneIncoming size={50} />
                    <Typography component="h2" fontSize={'18px'} fontWeight={600} mb={'0.2rem'}>Ligue para nós</Typography>
                    <Box>
                        <Box display={'flex'}>
                            <Typography component="p" sx={fontStyle} fontWeight={600}>Telefone:&nbsp;</Typography>
                            <Typography component="p" sx={fontStyle}>(+55) 47 3804-6694</Typography>
                        </Box>
                        <Box display={'flex'}>
                            <Typography component="p" textAlign={'center'} sx={fontStyle} fontWeight={600}>Whatsapp:&nbsp;</Typography>
                            <Typography component="p" textAlign={'center'} sx={fontStyle}>(+55) 47 98822-4259</Typography>
                        </Box>
                    </Box>
                </Box>

                <Box sx={cardStyle}>
                    <EnvelopeSimple size={50} />
                    <Typography component="h2" fontSize={'18px'} fontWeight={600}>Envie um e-mail</Typography>
                    <Box display={'flex'} justifyContent={'start'}>
                        <Typography component="p" textAlign={'center'} sx={fontStyle}>
                            <a href="mailto:tecserigrafia@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                                tecserigrafia@gmail.com
                            </a>
                        </Typography>
                    </Box>
                </Box>

                <Box sx={cardStyle}>
                    <MapPin size={50} />
                    <Typography component="h2" fontSize={'18px'} fontWeight={600}>Faça uma visita</Typography>
                    <Box display={'flex'}>
                        <Typography component="p" textAlign={'center'} sx={fontStyle}>R. Servidão Santa Matilde, 135 - João Costa, Joinville - SC, 89209-050</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Contacts