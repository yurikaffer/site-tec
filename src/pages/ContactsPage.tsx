import WhatsappComponent from "../Components/Whats/Whatsapp";
import Contacts from "../Components/Contact/Contacts";
import { Box } from "@mui/material";
import SubNavbar from "../Components/Navbar/SubNavbar";
import Footer from "../Components/Footer/Footer";

const ContactsPage: React.FC = () => {
  return (
    <>
        <SubNavbar/>
        <Box pt={'10rem'} pb={'5rem'}>
            <Contacts/>
        </Box>
        <Footer/>
        <WhatsappComponent />
    </>
  );
}

export default ContactsPage;
