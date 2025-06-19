import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import DeployDashboard from './pages/DeployDashboard'
import PrilabsaWebsite from './pages/PrilabsaWebsite';
import Website2025 from './pages/Website2025';
import InicioDev from './pages/iniciodev';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DeployDashboard />} />
        <Route path="/iniciodev" element={<InicioDev />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/deploy" element={<DeployDashboard />} />
        <Route path="/prilabsa" element={<PrilabsaWebsite />} />
        <Route path="/website2025" element={<Website2025 />} />
      </Routes>
    </Router>
  )
}

export default App