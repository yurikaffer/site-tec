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
import { TabelaMedidas } from "./Components/Tabela/Tabela";
import { Box, CssBaseline } from "@mui/material";
import Banner from "./Components/Banner/Banner";

const rows = [
  { altura: '16cm', largura: '10cm', lateral: '5cm' },
  { altura: '15cm', largura: '13cm', lateral: '7cm' },
  { altura: '23cm', largura: '16cm', lateral: '9cm' },
  { altura: '20cm', largura: '24cm', lateral: '7cm' },
  { altura: '25cm', largura: '21cm', lateral: '9cm' },
  { altura: '25cm', largura: '35cm', lateral: '10cm' },
  { altura: '29cm', largura: '35cm', lateral: '10cm' },
  { altura: '35cm', largura: '25cm', lateral: '10cm' },
  { altura: '35cm', largura: '40cm', lateral: '13cm' },
  { altura: '44cm', largura: '31cm', lateral: '11cm' },
];

const sacolaHdAlcaCamiseta = [
  { altura: '30cm', largura: '40cm', lateral: '0,4cm' },
  { altura: '40cm', largura: '50cm', lateral: '0,4cm' },
  { altura: '45cm', largura: '60cm', lateral: '0,4cm' },
  { altura: '50cm', largura: '70cm', lateral: '0,6cm' },
  { altura: '60cm', largura: '80cm', lateral: '0,7cm' },
  { altura: '70cm', largura: '90cm', lateral: '0,7cm' },
  { altura: '90cm', largura: '100cm', lateral: '0,9cm' },

];

function App() {
  return (
    <ThemeProvider theme={theme}>
        <NavBar/>
        <NavBarMobile />
        <Banner/>

        
        
        <SectionAbout />
        <ResumoSobre />
        <SectionProducts />
        
        <SectionStepper />
        <SwiperClients />
        <SectionContacts />
        <WhatsappComponent />
    </ThemeProvider>
  );
}

export default App;
