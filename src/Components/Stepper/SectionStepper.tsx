import React from 'react';
import StepperMobile from './StepperMobile';
import Stepper from './Stepper';
import { Box, Typography } from '@mui/material';

const aboutTexBox = {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    padding: '5rem 15%',
    pt: '10rem',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 715px)': {
        padding: '1rem',
        paddingTop: '10rem',
    },
}

const SectionStepper: React.FC = () => {
    return (
        <Box sx={{
            //background: "url('/fundo-textura-claro.png') no-repeat center center fixed",
            //backgroundSize: 'cover', 
            bgcolor: '#FFF6F6',
            pb: '10rem'
        }}>
            <Box sx={aboutTexBox}>
                <Typography
                    textAlign={'center'}
                    fontSize={'2.4rem'}
                    fontWeight={700}
                    sx={{
                        '@media (max-width: 1000px)': {
                            fontSize: '1.8rem',
                            fontWeight: '700'
                        },
                    }}
                >
                    Ainda não sabe como realizar um orçamento?
                </Typography>
                <Typography fontSize={'16px'} textAlign={'center'}>
                    Criamos um passo a passo para que você consiga se orientar e entender as informações necessárias para
                    realizar um orçamento conosco, e lembre-se, qualquer dúvida, não hesite em nos chamar!
                </Typography>
            </Box>
            <Stepper />
            <StepperMobile />
        </Box>
    )
}

export default SectionStepper