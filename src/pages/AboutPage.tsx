import SectionAbout from "../Components/About/SectionAbout";
import ResumoSobre from "../Components/ResumeAbout/ResumoSobre";
import Rodape from "../Components/Rodape/Rodape";
import WhatsappComponent from "../Components/Whats/Whatsapp";
import { Box } from "@mui/material";
import SubNavbar from "../Components/Navbar/SubNavbar";

const AboutPage: React.FC = () => {
  return (
    <>
        <SubNavbar/>
        <Box padding={'10rem 0rem 10rem 10%'} >
            <SectionAbout page={true}/>
        </Box>

        
        <Rodape/>
        <WhatsappComponent />
    </>
  );
}

export default AboutPage;
