import Rodape from "../Components/Rodape/Rodape";
import WhatsappComponent from "../Components/Whats/Whatsapp";
import SubNavbar from "../Components/Navbar/SubNavbar";
import SectionStepper from "../Components/Stepper/SectionStepper";
import { Box } from "@mui/material";

const BudgetPage: React.FC = () => {
  return (
    <>
        <SubNavbar/>
        <Box pt={'5rem'}>
            <SectionStepper />
        </Box>
        <Rodape/>
        <WhatsappComponent />
    </>
  );
}

export default BudgetPage;
