import { Box, Typography } from '@mui/material';
import React from 'react';
import { PhoneIncoming, EnvelopeSimple, MapPin } from "@phosphor-icons/react";

const fontStyle = {
    fontSize: '15px',
}

const ContactsMobile: React.FC = () => {
    return (
        <Box sx={{
            display: 'none',
            '@media (max-width:975px)': {
                display: 'flex',
                flexDirection: 'column',
                padding: '1rem 1rem',
                alignItems: 'center',
                paddingBottom: '5rem'
            },
        }}>
            <Box display={'flex'} flexDirection={'column'} gap={3}>
                <Box display={'flex'} alignItems={'center'} gap={1}>
                    <PhoneIncoming size={45} />
                    <Box>
                        <Typography fontSize={'18px'} fontWeight={600}>Ligue para nós</Typography>
                        <Box display={'flex'} justifyContent={'start'}>
                            <Typography sx={fontStyle} fontWeight={600}>Telefone:&nbsp;</Typography>
                            <Typography sx={fontStyle}>(+55) 47 99999-9999</Typography>
                        </Box>
                        <Box display={'flex'}>
                            <Typography sx={fontStyle} fontWeight={600}>Whatsapp:&nbsp;</Typography>
                            <Typography sx={fontStyle}>(+55) 47 99999-9999</Typography>
                        </Box>
                    </Box>
                </Box>

                <Box display={'flex'} alignItems={'center'} gap={1} >
                    <EnvelopeSimple size={45} />
                    <Box>
                        <Typography fontSize={'18px'} fontWeight={600}>Envie um e-mail</Typography>
                        <Box display={'flex'} justifyContent={'start'}>
                            <Typography sx={fontStyle}>tecserigrafia@gmail.com</Typography>
                        </Box>
                    </Box>
                </Box>

                <Box display={'flex'} alignItems={'center'} gap={1} >
                    <MapPin size={45} />
                    <Box>
                        <Typography fontSize={'18px'} fontWeight={600}>Faça uma visita</Typography>
                        <Box display={'flex'} justifyContent={'start'}>
                            <Typography sx={fontStyle}>Rua Servidão Santa Matilde, 135</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ContactsMobile