import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import { SizeTable } from "../SizeTable/SizeTable";
import SectionStepper from "../Stepper/SectionStepper";
import Rodape from "../Footer/Footer";
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
    plasticBag?: boolean;
}

const ProductPageComponent: React.FC<ProductPageComponentProps> = ({ children, rows, titleTable, plasticBag }) => {
    return (
        <>
            <SubNavbar/>
            <Box sx={{ position: 'relative' }}>
                <Box sx={{ 
                        display: 'flex', 
                        gap: '5rem', 
                        justifyContent: 'center', 
                        padding: '10%', 
                        pt: '15rem',
                        '@media (max-width: 1390px)': {
                            flexDirection: 'column',
                            alignItems: 'center'
                        },
                        '@media (max-width: 600px)': {
                            padding: '10% 2rem', 
                        },
                    }}>
                    {children}
                </Box>

                {rows && (
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '3rem' }}>
                        <Typography 
                            component="h1"
                            padding={'0 2rem'}
                            fontSize={'22px'} 
                            fontWeight={600} 
                            sx={{
                                '@media (max-width: 600px)': {
                                    fontSize: '18px',
                                    textAlign: 'center'
                                },
                            }}
                        >
                                {titleTable}
                        </Typography>

                        <Box sx={{ 
                                display: 'flex', 
                                gap: '5rem', 
                                justifyContent: 'center', 
                                paddingX: '2rem',
                                '@media (max-width: 950px)': {
                                    flexDirection: 'column' ,
                                    alignItems: 'center'
                                },
                            }}>
                            <Box
                                component="img"
                                src={plasticBag ? 'medidas-plastico.png' : 'medidas-sacolas.png'}
                                alt='imagem produto'
                                sx={{
                                    width: '50rem',
                                    height: '35rem',
                                    '@media (max-width: 560px)': {
                                        width: '100%',
                                        height: '100%',
                                    },
                                }}
                            />

                            <SizeTable rows={rows} columnName={plasticBag ? 'Espessura' : 'Profundidade'}/>

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
