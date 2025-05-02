import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/global';

// Componentes
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Páginas
import Home from './pages/Home';
import Mapa from './pages/Mapa';
import QuadrasList from './pages/QuadrasList';
import QuadraDetail from './pages/QuadraDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mapa" element={<Mapa />} />
            <Route path="/quadras" element={<QuadrasList />} />
            <Route path="/quadras/:id" element={<QuadraDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App; 