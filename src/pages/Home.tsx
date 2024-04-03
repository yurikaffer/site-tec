import React, { Suspense } from 'react';
import { Box, CircularProgress } from "@mui/material";
import HomeNavbar from "../Components/Navbar/HomeNavbar";
import Banner from "../Components/Banner/Banner";

// Importação Lazy para os outros componentes
const SectionAbout = React.lazy(() => import("../Components/About/SectionAbout"));
const Contacts = React.lazy(() => import("../Components/Contact/Contacts"));
const FaixaVantagens = React.lazy(() => import("../Components/MoreAbout/MoreAbout"));
const SectionProducts = React.lazy(() => import("../Components/Products/SectionProducts"));
const ResumoSobre = React.lazy(() => import("../Components/ResumeAbout/ResumeAbout"));
const SectionStepper = React.lazy(() => import("../Components/Stepper/SectionStepper"));
const SwiperClients = React.lazy(() => import("../Components/SwiperClients/SwiperClients"));
const WhatsappComponent = React.lazy(() => import("../Components/Whats/Whatsapp"));
const Footer = React.lazy(() => import("../Components/Footer/Footer"));

const Home: React.FC = () => {
  return (
    <>
      <HomeNavbar />
      <Banner />
      <Suspense fallback={<Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}><CircularProgress /></Box>}>
        <SectionAbout />
        <ResumoSobre />
        <SectionProducts />
        <FaixaVantagens />
        <SectionStepper />
        <SwiperClients />
        <Box pt={'5rem'} pb={'10rem'}>
          <Contacts />
        </Box>
        <Footer />
        <WhatsappComponent />
      </Suspense>
    </>
  );
}

export default Home;
