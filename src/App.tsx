import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme/Theme';
import { SpeedInsights } from '@vercel/speed-insights/react';
import LoadingPage from './Components/Loading/LoadingPage';
import { MediaQueryProvider } from './Context/MediaQueryContext';
import { CategoryProvider } from './Context/CategoryContext';

// Lazy loading das páginas
const Home = lazy(() => import('./pages/Home'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const BagOffsetPage = lazy(() => import('./pages/ProductPages/BagOffsetPage'));
const BagDuplexPage = lazy(() => import('./pages/ProductPages/BagDuplexPage'));
const BagKraftPage = lazy(() => import('./pages/ProductPages/BagKraftPage'));
const BagTShirtPage = lazy(() => import('./pages/ProductPages/BagTShirtPage'));
const BagPlasticLeaked = lazy(() => import('./pages/ProductPages/BagPlasticLeaked'));
const BagPlasticTape = lazy(() => import('./pages/ProductPages/BagPlasticTape'));
const BusinessCardPage = lazy(() => import('./pages/ProductPages/BusinessCardPage'));
const TagPage = lazy(() => import('./pages/ProductPages/TagPage'));
const PvcBoardPage = lazy(() => import('./pages/ProductPages/PvcBoardPage'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SpeedInsights />
      <MediaQueryProvider>
      <CategoryProvider>
        <Router>
          <Suspense fallback={<LoadingPage/>}>
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
          </Suspense>
        </Router>
        </CategoryProvider>
      </MediaQueryProvider>
    </ThemeProvider>
  );
}

export default App;
