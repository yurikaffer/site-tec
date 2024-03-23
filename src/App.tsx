import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./Theme/Theme";
import { ThemeProvider } from '@mui/material/styles';
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import BagOffsetPage from "./pages/ProductPages/BagOffsetPage";
import { CategoryProvider } from "./Context/CategoryContext";
import BagDuplexPage from "./pages/ProductPages/BagDuplexPage";
import BagKraftPage from "./pages/ProductPages/BagKraftPage";
import BagTShirtPage from "./pages/ProductPages/BagTShirtPage";
import BagPlasticLeaked from "./pages/ProductPages/BagPlasticLeaked";
import BagPlasticTape from "./pages/ProductPages/BagPlasticTape";
import BusinessCardPage from "./pages/ProductPages/BusinessCardPage";
import TagPage from "./pages/ProductPages/TagPage";
import PvcBoardPage from "./pages/ProductPages/PvcBoardPage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CategoryProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Produtos" element={<ProductsPage />} />
            <Route path="/Sobre" element={<AboutPage />} />
            <Route path="/Contatos" element={<ContactsPage />} /> 

            <Route path="/sacolas-offset" element={<BagOffsetPage />} />
            <Route path="/sacolas-duplex" element={<BagDuplexPage />} />
            <Route path="/sacolas-Kraft" element={<BagKraftPage />} />
            <Route path="/sacolas-camiseta" element={<BagTShirtPage />} />
            <Route path="/sacolas-vazada" element={<BagPlasticLeaked />} />
            <Route path="/sacolas-fita" element={<BagPlasticTape />} />
            <Route path="/cartoes" element={<BusinessCardPage />} />
            <Route path="/tags" element={<TagPage />} />
            <Route path="/pvc" element={<PvcBoardPage />} />
          </Routes>
        </Router>
      </CategoryProvider>
    </ThemeProvider>
  );
}

export default App;
