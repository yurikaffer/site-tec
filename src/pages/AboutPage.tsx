import SectionAbout from "../Components/About/SectionAbout";
import Rodape from "../Components/Rodape/Rodape";
import WhatsappComponent from "../Components/Whats/Whatsapp";
import SubNavbar from "../Components/Navbar/SubNavbar";

const AboutPage: React.FC = () => {
  return (
    <>
        <SubNavbar/>
        <SectionAbout page={true}/>
        <Rodape/>
        <WhatsappComponent />
    </>
  );
}

export default AboutPage;
