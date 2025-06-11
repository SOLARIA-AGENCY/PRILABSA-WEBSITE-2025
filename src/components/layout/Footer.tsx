import React from 'react';
import { Link } from 'react-router-dom';

// Importar imágenes del footer
import footerLogo from '../../prilabsa-mockup-html/images/654a55f871f18407150d4de78d11baca12600c80.png';
import facebookIcon from '../../prilabsa-mockup-html/images/14_1024.svg';
import instagramIcon from '../../prilabsa-mockup-html/images/14_1031.svg';
import linkedinIcon from '../../prilabsa-mockup-html/images/14_1038.svg';
import whatsappFloat from '../../prilabsa-mockup-html/images/19240200c1e386aa184f15294df61b6925719c61.png';

const Footer: React.FC = () => {
  return (
    <>
      <footer id="section-footer" className="site-footer bg-gray-800 text-white">
        <div className="footer-top-spacer h-8"></div>
        <div className="footer-content-container container max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Logo Column */}
            <div className="footer-column footer-logo-column">
              <img 
                src={footerLogo} 
                alt="Prilabsa Logo White" 
                className="footer-logo h-16 mb-4"
              />
            </div>

            {/* Contact Column */}
            <div className="footer-column">
              <h4 className="footer-heading text-lg font-bold mb-4 text-white">
                CONTÁCTANOS
              </h4>
              <p className="footer-text text-gray-300 leading-relaxed">
                Para más información<br />
                escríbenos a:{' '}
                <a 
                  href="mailto:info@prilabsa.com.ec" 
                  className="footer-link text-white hover:text-orange-400 transition-colors"
                >
                  info@prilabsa.com<span className="footer-link-domain">.ec</span>
                </a>
              </p>
            </div>

            {/* Location Column */}
            <div className="footer-column">
              <h4 className="footer-heading text-lg font-bold mb-4 text-white">
                UBICACIÓN
              </h4>
              <p className="footer-text text-gray-300 leading-relaxed">
                Av. Carlos Julio Arosemena, km 2 1/2, C.C. Albán<br />
                Borja, local #55.<br />
                Guayaquil – Ecuador
              </p>
            </div>

            {/* Social Media Column */}
            <div className="footer-column">
              <h4 className="footer-heading text-lg font-bold mb-4 text-white">
                ¡SÍGUENOS!
              </h4>
              <ul className="social-media-list flex space-x-4">
                <li>
                  <a 
                    href="#" 
                    aria-label="Facebook"
                    className="block hover:scale-110 transition-transform"
                  >
                    <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    aria-label="Instagram"
                    className="block hover:scale-110 transition-transform"
                  >
                    <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    aria-label="LinkedIn"
                    className="block hover:scale-110 transition-transform"
                  >
                    <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a 
        href="https://wa.me/593999999999" 
        className="whatsapp-float fixed bottom-6 right-6 z-50 hover:scale-110 transition-transform"
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Chat on WhatsApp"
      >
        <img 
          src={whatsappFloat} 
          alt="WhatsApp" 
          className="w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        />
      </a>
    </>
  );
};

export default Footer;