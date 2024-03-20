import { useRef } from "react";
import SectionAbout from "../Components/About/SectionAbout";
import Banner from "../Components/Banner/Banner";
import Contacts from "../Components/Contact/Contacts";
import FaixaVantagens from "../Components/FaixaVantagens/FaixaVantagens";
import SectionNavbar from "../Components/Navbar/SectionNavbar";
import SectionProducts from "../Components/Products/SectionProducts";
import ResumoSobre from "../Components/ResumeAbout/ResumoSobre";
import Rodape from "../Components/Rodape/Rodape";
import SectionStepper from "../Components/Stepper/SectionStepper";
import SwiperClients from "../Components/SwiperClients/SwiperClients";
import WhatsappComponent from "../Components/Whats/Whatsapp";

const sacolaHdAlcaCamiseta = [
  { altura: '30cm', largura: '40cm', lateral: '0,4cm' },
  { altura: '40cm', largura: '50cm', lateral: '0,4cm' },
  { altura: '45cm', largura: '60cm', lateral: '0,4cm' },
  { altura: '50cm', largura: '70cm', lateral: '0,6cm' },
  { altura: '60cm', largura: '80cm', lateral: '0,7cm' },
  { altura: '70cm', largura: '90cm', lateral: '0,7cm' },
  { altura: '90cm', largura: '100cm', lateral: '0,9cm' },
];

const Home: React.FC = () => {
  return (
    <>
        <SectionNavbar/>

        <Banner/>

        <SectionAbout />
        
        <ResumoSobre />

        <SectionProducts />

        <FaixaVantagens />
        <SectionStepper />
        <SwiperClients />
        <Contacts/>

        <Rodape/>

        <WhatsappComponent />
    </>
  );
}

export default Home;
