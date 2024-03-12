import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import { PhoneIncoming, EnvelopeSimple, MapPin } from "@phosphor-icons/react";

const fontStyle = {
    fontSize: '15px',
}

const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '.5rem',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3rem',
    bgcolor: '#E4E4E4',
    width: '32rem',
    boxShadow: '0 3px 9px 0 rgba(0, 0, 0, 0.1)',
    '@media (max-width: 880px)': {
        width: '90%',
    },
    '@media (max-width: 995px)': {
        padding: '3rem 1rem',
    },
}

const Contacts: React.FC = () => {
    return (
        <Box display={'flex'}
            padding={'5rem'}
            gap={'3%'}
            justifyContent={'center'}
            sx={{
                '@media (max-width: 1121px)': {
                    padding: '1rem',
                    gap: 2
                },
                '@media (max-width:880px)': {
                    padding: '1rem',
                    flexDirection: 'column',
                    gap: 2,
                    alignItems: 'center'
                },
                '@media (max-width:750px)': {
                    display: 'none'
                },
            }}

        >
            <Card sx={cardStyle}>
                <PhoneIncoming size={50} />
                <Typography fontSize={'18px'} fontWeight={600} mb={'1rem'}>Ligue para nós</Typography>
                <Box >
                    <Box display={'flex'} justifyContent={'start'}>
                        <Typography sx={fontStyle} fontWeight={600}>Telefone:&nbsp;</Typography>
                        <Typography sx={fontStyle}>(+55) 47 99999-9999</Typography>
                    </Box>
                    <Box display={'flex'}>
                        <Typography sx={fontStyle} fontWeight={600}>Whatsapp:&nbsp;</Typography>
                        <Typography sx={fontStyle}>(+55) 47 99999-9999</Typography>
                    </Box>
                </Box>
            </Card>

            <Card sx={cardStyle}>
                <EnvelopeSimple size={50} />
                <Typography fontSize={'18px'} fontWeight={600}>Envie um e-mail</Typography>
                <Box>
                    <Box display={'flex'} justifyContent={'start'}>
                        <Typography sx={fontStyle}>tecserigrafia@gmail.com</Typography>
                    </Box>
                </Box>
            </Card>

            <Card sx={cardStyle}>
                <MapPin size={50} />
                <Typography fontSize={'18px'} fontWeight={600}>Faça uma visita</Typography>
                <Box>
                    <Box display={'flex'} justifyContent={'start'}>
                        <Typography sx={fontStyle}>Rua Servidão Santa Matilde, 135</Typography>
                    </Box>
                </Box>
            </Card>
        </Box>
    )
}

export default Contacts