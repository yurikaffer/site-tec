import { Box, Typography } from '@mui/material';
import React from 'react';
import { Ruler, Bag, Palette, Question } from "@phosphor-icons/react";

const fontStyle = {
    fontSize: '15px',
}

const StepperMobile: React.FC = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '5rem 1rem',
            alignItems: 'center'
        }}>
            <Box display={'flex'} flexDirection={'column'} gap={2}>
                <Box display={'flex'} alignItems={'center'} gap={2}>
                    <Box mb={'auto'}>
                        <Ruler size={50} />
                    </Box>
                    <Box>
                        <Typography component="h3" fontSize={'18px'} fontWeight={600}>1. Tamanho</Typography>
                        <Box display={'flex'} justifyContent={'start'}>
                            <Typography component="p" sx={fontStyle}>
                                A página do produto que você deseja em nosso site possui a tabela de medidas específica do produto,
                                consulte a página para obter essas informações e defina a que melhor se encaixa às suas necessidades.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box display={'flex'} alignItems={'center'} gap={2}>
                    <Box mb={'auto'} >
                        <Bag size={50} />
                    </Box>
                    <Box>
                        <Typography component="h4" fontSize={'18px'} fontWeight={600}>2. Material</Typography>
                        <Box display={'flex'} justifyContent={'start'}>
                            <Typography component="p" sx={fontStyle}>
                                Você encontra as especificações do material da embalagem na página do produto escolhido, pode
                                navegar entre as categorias de produtos para encontrar o que mais se encaixa às suas expectativas.
                                Tenha em mãos essas informações na hora de realizar o orçamento.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box display={'flex'} alignItems={'center'} gap={2}>
                    <Box mb={'auto'} >
                        <Palette size={50} />
                    </Box>
                    <Box>
                        <Typography component="h5" fontSize={'18px'} fontWeight={600}>3. Cores</Typography>
                        <Box display={'flex'} justifyContent={'start'}>
                            <Typography component="p" sx={fontStyle}>
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
                        <Typography component="h6" fontSize={'18px'} fontWeight={600}>4. Ficou na dúvida?</Typography>
                        <Box display={'flex'} justifyContent={'start'}>
                            <Typography component="p" sx={fontStyle}>
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