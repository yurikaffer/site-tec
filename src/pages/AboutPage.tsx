import SectionAbout from "../Components/About/SectionAbout";
import WhatsappComponent from "../Components/Whats/Whatsapp";
import Footer from "../Components/Footer/Footer";
import SectionNavbar from "../Components/Navbar/SectionNavbar/SectionNavbar";

const AboutPage: React.FC = () => {

  return (
    <>
        <SectionNavbar/>
        <SectionAbout page={true}/>
        <Footer/>
        <WhatsappComponent />
    </>
  );
}

export default AboutPage;
