import Rodape from "../Components/Rodape/Rodape";
import WhatsappComponent from "../Components/Whats/Whatsapp";
import Contacts from "../Components/Contact/Contacts";
import { Box } from "@mui/material";
import SubNavbar from "../Components/Navbar/SubNavbar";

const ContactsPage: React.FC = () => {
  return (
    <>
        <SubNavbar/>
        <Box pt={'10rem'} pb={'5rem'}>
            <Contacts/>
        </Box>
        <Rodape/>
        <WhatsappComponent />
    </>
  );
}

export default ContactsPage;
