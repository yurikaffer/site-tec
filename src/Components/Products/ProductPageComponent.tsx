import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import NavBar from "../Navbar/Navbar";
import { TabelaMedidas } from "../Tabela/Tabela";
import SectionStepper from "../Stepper/SectionStepper";
import Rodape from "../Rodape/Rodape";
import WhatsappComponent from "../Whats/Whatsapp";

interface table {
    altura: string;
    largura: string;
    lateral: string;
}

interface ProductPageComponentProps {
    children: ReactNode;
    rows?: table[];
    titleTable?: string;
}

const ProductPageComponent: React.FC<ProductPageComponentProps> = ({ children, rows, titleTable }) => {

    const subNavbar = {
        bgcolor: '#FCFCFC',
        padding: '2rem 10%',
        position: 'fixed',
        boxShadow: '0 1px 6px 0 rgba(0, 0, 0, 0.1)',
    }

    return (
        <>
            <NavBar boxStyle={subNavbar} img='tec-logo-cut.png' heightImg='3rem' />
            <Box sx={{ position: 'relative' }}>
                <Box sx={{ display: 'flex', gap: '5rem', justifyContent: 'center', padding: '10rem', pt: '15rem' }}>
                    {children}
                </Box>

                {rows && (
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '3rem' }}>
                        <Typography fontSize={'22px'} fontWeight={600} >{titleTable}</Typography>

                        <Box sx={{ display: 'flex', gap: '5rem', justifyContent: 'center', paddingX: '2rem' }}>
                            <Box
                                component="img"
                                src='BOX-Dimensions-2-1.webp'
                                alt='imagem produto'
                                sx={{
                                    width: '50rem',
                                    height: '30rem',
                                    borderRadius: '1rem'
                                }}
                            />
                            <Box width={'35rem'}>
                                <TabelaMedidas rows={rows} />
                            </Box>
                        </Box>
                    </Box>
                )}

                <Box pb={'5rem'} pt={'5rem'}>
                    <SectionStepper />
                </Box>
            </Box>
            <Rodape />
            <WhatsappComponent />
        </>
    );
}

export default ProductPageComponent;
