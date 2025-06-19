import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contactanos" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">CONTÁCTANOS</h3>
            <div className="space-y-4">
              <p className="text-gray-300">
                Para más información<br />
                escríbenos a: <a href="mailto:info@prilabsa.com.ec" className="text-blue-400 hover:text-blue-300">info@prilabsa.com.ec</a>
              </p>
              
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h4 className="font-semibold mb-1">UBICACIÓN</h4>
                  <p className="text-gray-300">
                    Av. Carlos Julio Arosemena, km 2 1/2,<br />
                    C.C. Albán Borja, local #55<br />
                    Guayaquil – Ecuador
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">ENLACES RÁPIDOS</h3>
            <div className="space-y-3">
              <a href="#inicio" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Inicio
              </a>
              <a href="#quienes-somos" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Quienes Somos
              </a>
              <a href="#oficinas" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Oficinas
              </a>
              <a href="#productos" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Productos
              </a>
              <a href="#trabaja-con-nosotros" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Trabaja con Nosotros
              </a>
            </div>
          </div>

          {/* Social Media & Video */}
          <div>
            <h3 className="text-2xl font-bold mb-6">¡SÍGUENOS!</h3>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-8">
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* Corporate Video */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="font-semibold mb-3">Video Corporativo</h4>
              <video 
                controls 
                className="w-full rounded"
                poster="/images/video-poster.jpg"
              >
                <source src="/videos/PRILABSA_VIDEO_CORPORATIVO.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img 
                src="/images/logos/prilabsa-logo.png" 
                alt="PRILABSA" 
                className="h-8 w-auto"
              />
              <span className="text-gray-400">© 2025 PRILABSA. Todos los derechos reservados.</span>
            </div>
            
            <div className="text-sm text-gray-400">
              <span>Desarrollado por </span>
              <span className="font-semibold text-blue-400">SOLARIA.AGENCY</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 