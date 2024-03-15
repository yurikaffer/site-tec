import { Box, Typography } from '@mui/material';
import { CheckSquare, CurrencyCircleDollar, Headset } from '@phosphor-icons/react';
import React from 'react';

const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '.5rem',
    bgcolor: 'transparent',
    width: '30rem',
    gap: '0.5rem',
    '@media (max-width: 715px)': {
        padding: ' 0 3rem',
        width: '90%',
    },
}

const FaixaVantagens: React.FC = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '5rem',
            gap: '5rem',
            bgcolor: '#F3F3F3',
            boxShadow: `inset 0 1px 3px 0 rgba(0, 0, 0, 0.1), inset 0 -1px 3px 0 rgba(0, 0, 0, 0.1)`,
            '@media (max-width: 715px)': {
                flexDirection: 'column',
                gap: '3rem',
                paddingY: '5rem',
                paddingX: '0',
            },
        }}>

            <Box sx={cardStyle}>
                <CheckSquare size={34} />
                <Typography fontSize={'18px'} fontWeight={600}>Comece com pouco</Typography>
                <Box>
                    <Box display={'flex'} justifyContent={'start'}>
                        <Typography sx={{ fontSize: '14px' }}>
                            A quantidade mínima de pedido de embalagens impressas personalizadas no atacado é de 300-500 unidades.
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box sx={cardStyle}>
                <Headset size={34} />
                <Typography fontSize={'18px'} fontWeight={600}>Suporte de vendas</Typography>
                <Box>
                    <Box display={'flex'} justifyContent={'start'}>
                        <Typography sx={{ fontSize: '14px' }}>
                            Suporte gratuito de especialistas em embalagens para você, desde material, design de arte e cotação.
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box sx={cardStyle}>
                <CurrencyCircleDollar size={34} />
                <Typography fontSize={'18px'} fontWeight={600}>Qualidade e acessível</Typography>
                <Box>
                    <Box display={'flex'} justifyContent={'start'}>
                        <Typography sx={{ fontSize: '14px' }}>
                            Produtos de alta qualidade e preço acessível diretamente do fabricante da embalagem.
                        </Typography>
                    </Box>
                </Box>
            </Box>

        </Box>

    )
}

export default FaixaVantagens

