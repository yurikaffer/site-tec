import React from 'react';
import StepperMobile from './StepperMobile';
import Stepper from './Stepper';
import { Box, ButtonBase, Typography } from '@mui/material';

const aboutTexBox = {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    paddingX: '12%',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 715px)': {
        padding: '1rem',

    },
}

const SectionStepper: React.FC = () => {
    return (
        <Box sx={{
            bgcolor: '#FCFCFC',
            paddingY: '7rem',
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center'
        }}>
            <Box sx={aboutTexBox}>
                <Typography
                    textAlign={'center'}
                    fontSize={'2.4rem'}
                    fontWeight={600}
                    sx={{
                        '@media (max-width: 1000px)': {
                            fontSize: '1.8rem',
                            fontWeight: '600'
                        },
                    }}
                >
                    Ainda não sabe como realizar um orçamento?
                </Typography>
                <Typography fontSize={'16px'} textAlign={'center'}>
                    Criamos um passo a passo para que você consiga se orientar e entender as informações necessárias para
                    realizar um orçamento conosco, e lembre-se, qualquer dúvida, não hesite em nos chamar!
                </Typography>
                <Stepper />
                <StepperMobile />
                <ButtonBase sx={{
                    bgcolor: '#FFC9C9',
                    width: '25rem',
                    boxShadow: '0 0px 6px 0 rgba(0, 0, 0, 0.1)',
                    borderRadius: '50rem'
                }}>
                    Realizar orçamento
                </ButtonBase>
            </Box>
        </Box>
    )
}

export default SectionStepper