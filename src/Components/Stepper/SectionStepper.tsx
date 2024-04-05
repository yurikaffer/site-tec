import React from 'react';
import StepperMobile from './StepperMobile';
import Stepper from './Stepper';
import { Box, ButtonBase, Typography, useMediaQuery } from '@mui/material';
import { whatsMessage } from '../../utils';
import { useTheme } from '@mui/material/styles';

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
    const theme = useTheme();
    const isTabletOrLarger = useMediaQuery(theme.breakpoints.up(750));

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
                    component="h1"
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
                <Typography fontSize={'16px'} textAlign={'center'} component="p">
                    Criamos um passo a passo para que você consiga se orientar e entender as informações necessárias para
                    realizar um orçamento conosco, e lembre-se, qualquer dúvida, não hesite em nos chamar!
                </Typography>

                {isTabletOrLarger ? <Stepper /> : <StepperMobile />}

                <ButtonBase onClick={() => {whatsMessage()}} 
                    sx={{
                        bgcolor: '#FFC9C9',
                        width: '25rem',
                        boxShadow: '0 0px 6px 0 rgba(0, 0, 0, 0.1)',
                        borderRadius: '50rem'
                    }}
                >
                    Realizar orçamento
                </ButtonBase>
            </Box>
        </Box>
    )
}

export default SectionStepper