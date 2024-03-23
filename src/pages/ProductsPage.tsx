import { Box, Typography } from "@mui/material";
import ProductsCategory from "../Components/ProductsCategory/ProductsCategory";
import Rodape from "../Components/Rodape/Rodape";
import SubNavbar from "../Components/Navbar/SubNavbar";

const ProductsPage: React.FC = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
        }}>
            <SubNavbar/>
            <Box sx={{paddingX: '10%', pt: '7rem', pb: '5rem'}}>
                <Typography fontSize={'14px'} fontWeight={500} pb={'0.5rem'}>
                    Dica: Sacola Instagramavel!
                </Typography>
                <Typography fontSize={'14px'} >
                    Pense na sua sacola como um canvas em branco pronto para contar uma história. Seja através de cores 
                    que saltam aos olhos, padrões que capturam a imaginação ou slogans que ficam na memória, sua sacola 
                    não é apenas um recipiente, mas uma declaração de marca que viaja pelas ruas e pelas timelines.
                </Typography>
            </Box>
            <ProductsCategory/>
            <Rodape/>
        </Box>
    );
}

export default ProductsPage;