import { Box, Divider, IconButton, Typography } from '@mui/material';
import { Clock, EnvelopeSimple, InstagramLogo, MapPinLine, Phone, WhatsappLogo } from '@phosphor-icons/react';
import React from 'react';

const textStyle = {
    fontSize: '16px', 
    cursor: 'pointer', 
    transition: 'transform 0.1s ease-in-out',
        '&:hover': {
            transform: 'scale(1.05)',
        },
}

const Rodape: React.FC = () => {
    return (
        <Box bgcolor={'#FAB6B6'} color={'#252525'} paddingX={'10%'} paddingTop={'10rem'}>

            <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                <Box maxWidth={'30rem'}>
                    <img src='tec-logo-cut.png' alt="Logo Tec" style={{ width: '100%', objectFit: 'cover', height: 'auto' }} />
                </Box>

                <Box sx={{ display: 'flex', gap: '10rem', marginTop: 'auto'}}>
                        <Box display={'flex'} flexDirection={'column'} maxWidth={'30rem'} gap={'0.5rem'}>
                            <Typography sx={{fontSize: '16px'}} fontWeight={500} mb={'1rem'}>LINKS RÁPIDOS</Typography>
                            <Typography sx={textStyle}>Home</Typography>
                            <Typography sx={textStyle}>Sobre nós</Typography>
                            <Typography sx={textStyle}>Clientes</Typography>
                            <Typography sx={textStyle}>Contatos</Typography>
                            <Typography sx={textStyle}>Fale conosco!</Typography>
                            <Typography sx={textStyle}>Solicitar orçamento</Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} maxWidth={'35rem'} gap={'0.5rem'}>
                            <Typography fontSize={'16px'} fontWeight={500} mb={'1rem'} >NOSSA MISSÃO</Typography>
                            <Typography fontSize={'13px'} mb={'1rem'}>
                                Embalagens Personalizadas Produtos que fazem sua marca se destacar. 
                                A Tec ajuda empresas a criar embalagens próprias com preço mínimo baixo e competitivo. 
                                Embalagens personalizadas, caixas para presente, sacolas para joias e sacolas de papel.
                            </Typography>
                            <Box display={'flex'} alignItems={'center'} gap={'0.5rem'}>
                                <Clock size={24} />
                                <Typography fontSize={'13px'}>Segunda a sexta, das 07:30 às 18:00</Typography>
                            </Box>
                            <Box display={'flex'} alignItems={'center'} gap={'0.5rem'}>
                                <Phone size={24} />
                                <Typography fontSize={'13px'}>(+55) 47 99999-9999</Typography>
                            </Box>
                            <Box display={'flex'} alignItems={'center'} gap={'0.5rem'}>
                                <EnvelopeSimple size={24} />
                                <Typography fontSize={'13px'} >tecserigrafia@gmail.com</Typography>
                            </Box>
                            <Box display={'flex'} alignItems={'center'} gap={'0.5rem'}>
                                <MapPinLine size={38} />
                                <Typography fontSize={'13px'} >R. Servidão Santa Matilde, 135 - João Costa, Joinville - SC, 89209-050</Typography>
                            </Box>
                            <Box display={'flex'} alignSelf={'center'}>
                                <IconButton>
                                    <InstagramLogo size={30} color='#252525'/>
                                </IconButton>
                                <IconButton>
                                    <WhatsappLogo size={30} color='#252525'/>
                                </IconButton>
                            </Box>
                        </Box>
                </Box>
            </Box>

            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} paddingTop={'3rem'}>
                <Divider sx={{width: '100%' }} />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '3rem'}} >
                <Typography fontSize={'13px'}> © 2024 tecembalagens.com Todos os direitos reservados. </Typography>
                <Typography fontSize={'13px'} > Desenvolvido com 💗 by Yuri Kaffer :) </Typography>
            </Box>
        </Box>
    )
}

export default Rodape
