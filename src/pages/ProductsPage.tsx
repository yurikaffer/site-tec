import { Box } from "@mui/material";
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
            <ProductsCategory/>
            <Rodape/>
        </Box>
    );
}

export default ProductsPage;