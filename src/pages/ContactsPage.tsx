import WhatsappComponent from "../Components/Whats/Whatsapp";
import { Box } from "@mui/material";
import Footer from "../Components/Footer/Footer";
import SectionContacts from "../Components/SectionContacts/SectionContacts";
import SectionNavbar from "../Components/Navbar/SectionNavbar/SectionNavbar";

const ContactsPage: React.FC = () => {
  return (
    <>
        <SectionNavbar/>
        <Box pt={'5rem'} >
          <SectionContacts/>
        </Box>
        <Footer/>
        <WhatsappComponent />
    </>
  );
}

export default ContactsPage;
