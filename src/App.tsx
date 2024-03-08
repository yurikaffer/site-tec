import theme from "./Theme/Theme";
import { ThemeProvider } from '@mui/material/styles';
import SectionAbout from "./Components/About/SectionAbout";
import ResumoSobre from "./Components/ResumeAbout/ResumoSobre";
import SwiperClients from "./Components/SwiperClients/SwiperClients";
import SectionContacts from "./Components/Contact/SectionContact";
import SectionStepper from "./Components/Stepper/SectionStepper";
import SectionProducts from "./Components/Products/SectionProducts";
import PaperBagsModel from "./Components/Products/PaperBagsModel";
import PlasticBagsModel from "./Components/Products/PlasticBagsModel";
import WhatsappComponent from "./Components/Whats/Whatsapp";
import NavBarMobile from "./Components/Navbar/NavbarMobile";
import NavBar from "./Components/Navbar/Navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <NavBar/>
        <NavBarMobile />
        <WhatsappComponent />
        <SectionAbout />
        <ResumoSobre />
        <SwiperClients />
        <SectionContacts />
        <SectionStepper />
        <SectionProducts />
        <PaperBagsModel />
        <PlasticBagsModel />
    </ThemeProvider>
  );
}

export default App;
