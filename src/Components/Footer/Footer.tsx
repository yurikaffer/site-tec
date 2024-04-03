import { Box, Divider, IconButton, Typography } from '@mui/material';
import { Clock, EnvelopeSimple, InstagramLogo, MapPinLine, Phone, WhatsappLogo } from '@phosphor-icons/react';
import React from 'react';
import ArrowIcon from '../ArrowIcon/ArrowIcon';
import { useNavigate } from 'react-router-dom';
import FooterButton from './FooterButton';
import { whatsMessage } from '../../utils';

const imgStyle = {
    width: '100%',
    objectFit: 'cover',
    height: 'auto',
    display: 'block',
}

const Footer: React.FC = () => {
    const navigate = useNavigate();
    
    return (
        <Box display={'flex'} flexDirection={'column'}>
            <Box component={'img'} src='wave-haikei.svg' alt="Onda decorativa" sx={imgStyle} />

            <Box 
                bgcolor={'#FAB6B6'} 
                color={'#252525'} 
                paddingX={'10%'} 
                paddingTop={'4rem'}
                sx={{
                    '@media (max-width: 450px)': {
                        paddingX: '2rem'
                    },
                }}
            >
                <Box display={'flex'} pb={'5rem'} justifyContent={'center'}>
                    <ArrowIcon/>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    '@media (max-width: 1180px)': {
                        justifyContent: 'center',
                    },
                }}>

                    <Box maxWidth={'30rem'}
                        sx={{
                            '@media (max-width: 1180px)': {
                                display: 'none'
                            },
                        }}>
                        <img src='tec-logo-cut.png' alt="Logo Tec"
                            style={{ width: '100%', objectFit: 'cover', height: 'auto' }} />
                    </Box>

                    <Box sx={{display: 'flex', gap: '10rem', marginTop: 'auto'}}>
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            maxWidth={'30rem'}
                            gap={'0.5rem'}
                            sx={{
                                '@media (max-width: 770px)': {
                                    display: 'none'
                                },
                            }}
                        >
                            <Typography sx={{ fontSize: '16px' }} fontWeight={500} mb={'1rem'}>LINKS RÁPIDOS</Typography>
                            <FooterButton name='Home'  onClick={() => { navigate('/', { replace: false }) }}/>
                            <FooterButton name='Sobre nós'  onClick={() => { navigate('/Sobre', { replace: false }) }}/>
                            <FooterButton name='Produtos'  onClick={() => { navigate('/Produtos', { replace: false }) }}/>
                            <FooterButton name='Contatos'  onClick={() => { navigate('/Contatos', { replace: false }) }}/>
                            <FooterButton name='Solicitar orçamento'  onClick={() => {whatsMessage()}}/>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} maxWidth={'35rem'} gap={'0.5rem'}>
                            <Typography component="h3" fontSize={'16px'} fontWeight={500} mb={'1rem'} >NOSSA MISSÃO</Typography>
                            <Typography component="p" fontSize={'13px'} mb={'1rem'}>
                                    Desenvolver embalagens que não apenas garantam a segurança e a integridade dos produtos, 
                                    mas também comuniquem efetivamente a essência e os valores da marca de nossos clientes. 
                                    Comprometemo-nos a utilizar nossa expertise em design, sustentabilidade e tecnologia 
                                    para desenvolver soluções de embalagens que elevem o reconhecimento da marca, engajem 
                                    o consumidor e amplifiquem o impacto no ponto de venda.
                            </Typography>
                            <Box display={'flex'} alignItems={'center'} gap={'0.5rem'}>
                                <Clock size={24} />
                                <Typography component="p" fontSize={'13px'}>Segunda a sexta, das 08:00 às 17:00</Typography>
                            </Box>
                            <Box display={'flex'} alignItems={'center'} gap={'0.5rem'}>
                                <Phone size={24} />
                                <Typography component="p" fontSize={'13px'}>(+55) 47 98822-4259</Typography>
                            </Box>
                            <Box display={'flex'} alignItems={'center'} gap={'0.5rem'}>
                                <EnvelopeSimple size={24} />
                                <Typography component="p" fontSize={'13px'} >tecserigrafia@gmail.com</Typography>
                            </Box>
                            <Box display={'flex'} alignItems={'center'} gap={'0.5rem'}>
                                <MapPinLine size={38} />
                                <Typography component="p" fontSize={'13px'} >R. Servidão Santa Matilde, 135 - João Costa, Joinville - SC, 89209-050</Typography>
                            </Box>
                            <Box display={'flex'} alignSelf={'center'}>
                                <IconButton onClick={() => {window.open('https://www.instagram.com/tecembalagens/', '_blank')}}>
                                    <InstagramLogo size={30} color='#252525' />
                                </IconButton>
                                <IconButton onClick={() => {whatsMessage()}}>
                                    <WhatsappLogo size={30} color='#252525' />
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box paddingTop={'3rem'}>
                    <Divider />
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '3rem',
                    '@media (max-width: 950px)': {
                        flexDirection: 'column',
                        gap: '2rem',
                        alignItems: 'center',
                        padding: '0.2rem',
                        paddingTop: '1rem'
                    },
                }} >
                    <Typography component="p" fontSize={'12px'}> ©2024 Tec Embalagens - Todos os direitos reservados. </Typography>
                    <Typography component="p" fontSize={'12px'} > Desenvolvido com 💗 by Yuri Kaffer :) </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer

