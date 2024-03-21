import { Box } from "@mui/material";
import SectionAbout from "../Components/About/SectionAbout";
import Banner from "../Components/Banner/Banner";
import Contacts from "../Components/Contact/Contacts";
import FaixaVantagens from "../Components/FaixaVantagens/FaixaVantagens";
import SectionProducts from "../Components/Products/SectionProducts";
import ResumoSobre from "../Components/ResumeAbout/ResumoSobre";
import Rodape from "../Components/Rodape/Rodape";
import SectionStepper from "../Components/Stepper/SectionStepper";
import SwiperClients from "../Components/SwiperClients/SwiperClients";
import WhatsappComponent from "../Components/Whats/Whatsapp";
import HomeNavbar from "../Components/Navbar/HomeNavbar";

const Home: React.FC = () => {
  return (
    <>
        <HomeNavbar/>
        <Banner/>
        <Box paddingY={'10rem'} pl={'10%'}>
            <SectionAbout />
        </Box>
        <ResumoSobre />
        <SectionProducts />
        <FaixaVantagens />
        <SectionStepper />
        <SwiperClients />
        <Box pt={'5rem'} pb={'10rem'}>
            <Contacts/>
        </Box>
        <Rodape/>
        <WhatsappComponent />
    </>
  );
}

export default Home;
