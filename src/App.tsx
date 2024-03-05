import theme from "./Theme/Theme";
import { ThemeProvider } from '@mui/material/styles';
import SectionAbout from "./Components/About/SectionAbout";
import ResumoSobre from "./Components/ResumeAbout/ResumoSobre";
import SwiperClients from "./Components/SwiperClients/SwiperClients";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <SectionAbout/>
        <ResumoSobre/>
        <SwiperClients/>
    </ThemeProvider>
  );
}

export default App;
