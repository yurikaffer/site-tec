import React, { Suspense, lazy } from 'react';
import HomeMobileNavbar from '../Components/Navbar/MobileNavbar/HomeMobileNavbar';
import HomeDesktopNavbar from '../Components/Navbar/DesktopNavbar/HomeDesktopNavbar';
import Banner from "../Components/Banner/Banner";
import { useMediaQueryContext } from '../Context/MediaQueryContext';
import LoadingComponent from '../Components/Loading/LoadingComponent';

// Lazy loading dos componentes que estão fora da viewport inicial
const SectionAbout = lazy(() => import('../Components/About/SectionAbout'));
const ResumoSobre = lazy(() => import('../Components/ResumeAbout/ResumeAbout'));
const SectionProducts = lazy(() => import('../Components/Products/SectionProducts'));
const FaixaVantagens = lazy(() => import('../Components/MoreAbout/MoreAbout'));
const SectionStepper = lazy(() => import('../Components/Stepper/SectionStepper'));
const SwiperClients = lazy(() => import('../Components/SwiperClients/SwiperClients'));
const SectionContacts = lazy(() => import('../Components/SectionContacts/SectionContacts'));
const Footer = lazy(() => import('../Components/Footer/Footer'));
const WhatsappComponent = lazy(() => import('../Components/Whats/Whatsapp'));

const Home: React.FC = () => {
  const {isMobile} = useMediaQueryContext();

  return (
    <> 
      {isMobile ? <HomeMobileNavbar/> : <HomeDesktopNavbar/>}

      <Banner />

      <Suspense fallback={<LoadingComponent/>}>
        <SectionAbout />
        <ResumoSobre />
        <SectionProducts />
        <FaixaVantagens />
        <SectionStepper />
        <SwiperClients />
        <SectionContacts />
        <Footer />
        <WhatsappComponent />
      </Suspense>
    </>
  );
}

export default Home;
