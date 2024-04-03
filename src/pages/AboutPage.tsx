import SectionAbout from "../Components/About/SectionAbout";
import WhatsappComponent from "../Components/Whats/Whatsapp";
import SubNavbar from "../Components/Navbar/SubNavbar";
import Footer from "../Components/Footer/Footer";

const AboutPage: React.FC = () => {
  return (
    <>
        <SubNavbar/>
        <SectionAbout page={true}/>
        <Footer/>
        <WhatsappComponent />
    </>
  );
}

export default AboutPage;
