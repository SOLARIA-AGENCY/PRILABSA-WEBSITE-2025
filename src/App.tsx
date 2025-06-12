import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import DeployDashboard from './pages/DeployDashboard'
import Website2025 from './pages/Website2025'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DeployDashboard />} />
        <Route path="/website" element={<Website2025 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App