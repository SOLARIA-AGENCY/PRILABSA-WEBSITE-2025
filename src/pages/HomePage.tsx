import React from 'react';

// Force deployment update - cache bust
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Menu */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold font-montserrat text-gray-900">
              PRILABSA
            </div>
            <div className="flex space-x-8">
              <a href="/" className="text-gray-900 font-montserrat font-semibold border-b-2 border-blue-600">
                🏠 Inicio
              </a>
              <a href="/dashboard" className="text-gray-600 hover:text-gray-800 font-montserrat font-semibold transition-colors">
                📊 Dashboard
              </a>
              <a href="https://github.com/SOLARIA-AGENCY/PRILABSA-WEBSITE-2025" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 hover:text-gray-800 font-montserrat font-semibold transition-colors">
                📁 Repositorio
              </a>
              <a href="https://prilabasa-website-2025-solaria-agency.netlify.app" target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-gray-800 font-montserrat font-semibold transition-colors">
                🌐 Producción
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content - PRILABSA Centered */}
      <div className="flex-1 flex items-center justify-center" style={{ minHeight: 'calc(100vh - 80px)' }}>
        <div className="text-center">
          <h1 className="text-8xl font-montserrat font-bold text-gray-900 mb-4 tracking-wider">
            PRILABSA
          </h1>
          <p className="text-xl font-montserrat text-gray-600 mb-8">
            Proveedores de soluciones integrales en alimentos - Versión 2025
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/dashboard" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-montserrat font-semibold shadow-lg"
            >
              Ver Dashboard Técnico
            </a>
            <a 
              href="https://github.com/SOLARIA-AGENCY/PRILABSA-WEBSITE-2025" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-montserrat font-semibold"
            >
              Ver Código Fuente
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="text-center text-sm text-gray-500 font-montserrat">
            <p>PRILABSA Website 2025 - Migración fiel y fidedigna</p>
            <p className="mt-1">Desarrollado por <span className="font-semibold">SOLARIA.AGENCY</span> con tecnología moderna</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage; 