import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuienesSomosPage from './pages/QuienesSomosPage';
import OficinasPage from './pages/OficinasPage';
import ContactanosPage from './pages/ContactanosPage';
import TrabajaConNosotrosPage from './pages/TrabajaConNosotrosPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quienes-somos" element={<QuienesSomosPage />} />
        <Route path="/oficinas" element={<OficinasPage />} />
        <Route path="/productos" element={<OficinasPage />} />
        <Route path="/contactanos" element={<ContactanosPage />} />
        <Route path="/trabaja-con-nosotros" element={<TrabajaConNosotrosPage />} />
      </Routes>
    </Router>
  );
}

export default App;