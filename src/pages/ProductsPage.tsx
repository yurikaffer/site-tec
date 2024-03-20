import { Box } from "@mui/material";
import NavBar from "../Components/Navbar/Navbar";
import ProductsCategory from "../Components/ProductsCategory/ProductsCategory";
import Rodape from "../Components/Rodape/Rodape";

const ProductsPage: React.FC = () => {
    const subNavbar = {
        bgcolor: '#FFF',
        padding: '2rem 10%',
        position: 'fixed',
        boxShadow: '0 1px 6px 0 rgba(0, 0, 0, 0.1)',
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
        }}>
            <NavBar boxStyle={subNavbar} img='tec-logo-cut.png' heightImg='3rem' />
            <ProductsCategory/>
            <Rodape/>
        </Box>
    );
}

export default ProductsPage;