import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import DeployDashboard from './pages/DeployDashboard'
import PrilabsaWebsite from './pages/PrilabsaWebsite'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DeployDashboard />} />
        <Route path="/website" element={<PrilabsaWebsite />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App