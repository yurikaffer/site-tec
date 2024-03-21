import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import { TabelaMedidas } from "../Tabela/Tabela";
import SectionStepper from "../Stepper/SectionStepper";
import Rodape from "../Rodape/Rodape";
import WhatsappComponent from "../Whats/Whatsapp";
import SubNavbar from "../Navbar/SubNavbar";

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
    return (
        <>
            <SubNavbar/>
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
