import { Box, Typography } from '@mui/material';
import React from 'react';
import { PhoneIncoming, EnvelopeSimple, MapPin } from "@phosphor-icons/react";

const fontStyle = {
    fontSize: '15px',
}

const ContactsMobile: React.FC = () => {
    return (
        <section>
            <Box sx={{
                bgcolor: '#FCFCFC',
                display: 'flex',
                flexDirection: 'column',
                padding: '1rem 1rem',
                alignItems: 'center',
                paddingBottom: '5rem'
            }}>
                <Box display={'flex'} flexDirection={'column'} gap={3}>
                    <Box display={'flex'} alignItems={'center'} gap={1}>
                        <PhoneIncoming size={45} />
                        <Box>
                            <Typography component="h1" fontSize={'18px'} fontWeight={600}>Ligue para nós</Typography>
                            <Box display={'flex'} justifyContent={'start'}>
                                <Typography component="p" sx={fontStyle} fontWeight={600}>Telefone:&nbsp;</Typography>
                                <Typography component="p" sx={fontStyle}>(+55) 47 3804-6694</Typography>
                            </Box>
                            <Box display={'flex'}>
                                <Typography component="p" sx={fontStyle} fontWeight={600}>Whatsapp:&nbsp;</Typography>
                                <Typography component="p" sx={fontStyle}>(+55) 47 98822-4259</Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box display={'flex'} alignItems={'center'} gap={1} >
                        <EnvelopeSimple size={45} />
                        <Box>
                            <Typography component="h2" fontSize={'18px'} fontWeight={600}>Envie um e-mail</Typography>
                            <Box display={'flex'} justifyContent={'start'}>
                                <Typography component="p" sx={fontStyle}>tecserigrafia@gmail.com</Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box display={'flex'} alignItems={'center'} gap={1} >
                        <MapPin size={45} />
                        <Box>
                            <Typography component="h3" fontSize={'18px'} fontWeight={600}>Faça uma visita</Typography>
                            <Box display={'flex'} justifyContent={'start'}>
                                <Typography component="p" sx={fontStyle}>Rua Servidão Santa Matilde, 135</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </section>
    )
}

export default ContactsMobile