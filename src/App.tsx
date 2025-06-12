import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DeployDashboard from './pages/DeployDashboard'

function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-gray-800 text-white flex gap-4">
        <Link to="/" className="hover:underline">
          Inicio
        </Link>
        <Link to="/dashboard" className="hover:underline">
          Dashboard Técnico
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DeployDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App