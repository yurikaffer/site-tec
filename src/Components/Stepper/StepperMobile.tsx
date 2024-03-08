import { Box, Typography } from '@mui/material';
import React from 'react';
import { Ruler, Bag, Palette, Question } from "@phosphor-icons/react";

const fontStyle = {
    fontSize: '15px',
}

const StepperMobile: React.FC = () => {
    return (
        <Box sx={{
            display: 'none',
            '@media (max-width:750px)': {
                display: 'flex',
                flexDirection: 'column',
                padding: '5rem 1rem',
                alignItems: 'center'
            },
        }}>
            <Box display={'flex'} flexDirection={'column'} gap={2}>
                <Box display={'flex'} alignItems={'center'} gap={2}>
                    <Box mb={'auto'}>
                        <Ruler size={50} />
                    </Box>
                    <Box>
                        <Typography fontSize={'18px'} fontWeight={600}>1. Tamanho</Typography>
                        <Box display={'flex'} justifyContent={'start'}>
                            <Typography sx={fontStyle}>
                                Qual o tipo e a gramatura do papel a ser utilizado na Caixa ou 
                                na Sacola? Dentre os mais comuns para embalagens, temos o Kraft, Duplex, Triplex e Offset. 
                                Gramatura é a grossura do material e pode variar de 90 até 400g. Quanto menor mais fino e 
                                maleável, quanto maior mais grosso e resistente.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box display={'flex'} alignItems={'center'} gap={2}>
                    <Box mb={'auto'} >
                        <Bag size={50} />
                    </Box>
                    <Box>
                        <Typography fontSize={'18px'} fontWeight={600}>2. Material</Typography>
                        <Box display={'flex'} justifyContent={'start'}>
                            <Typography sx={fontStyle}>
                                Embalagens, na maioria dos casos, são tridimensionais, ou seja, têm Altura, Largura e 
                                Profundidade. Tenha em mãos essas três medidas ou, para designers e pessoas mais 
                                experientes, método de fechamento da caixa, a medida da "faca" ou desenho aberto.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box display={'flex'} alignItems={'center'} gap={2}>
                    <Box mb={'auto'} >
                        <Palette size={50} />
                    </Box>
                    <Box>
                        <Typography fontSize={'18px'} fontWeight={600}>3. Cores</Typography>
                        <Box display={'flex'} justifyContent={'start'}>
                            <Typography sx={fontStyle}>
                                O número de cores interfere diretamente no preço da embalagem e varia de 1 até 4 cores, 
                                que é o número de cores utilizados para impressão de fotos ou imagens complexas. 
                                As tinta utilizada pode ser padrão Pantone, que é uma codificação universal, ou Cromia 
                                com a combinação da cores Ciano, Magenta, Amarelo e Preto.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box display={'flex'} alignItems={'center'} gap={2}>
                    <Box mb={'auto'}>
                        <Question size={50} />
                    </Box>
                    <Box>
                        <Typography fontSize={'18px'} fontWeight={600}>4. Ficou na dúvida?</Typography>
                        <Box display={'flex'} justifyContent={'start'}>
                            <Typography sx={fontStyle}>
                                Se você ficar em dúvida, estamos aqui para ajudá-lo.Envie seu logotipo, foto ou design 
                                e nós vamos auxiliar você. Não tem um design? Fale com a gente. Ainda não sabe por onde 
                                começar? Entre em contato agora mesmo!
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default StepperMobile