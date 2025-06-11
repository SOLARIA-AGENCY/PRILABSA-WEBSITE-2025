import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../prilabsa-mockup-html/images/af297cf3944f228929a126fab0561a1e05dc83d9.png';
import langFlag from '../../prilabsa-mockup-html/images/14_1090.svg';
import langArrow from '../../prilabsa-mockup-html/images/14_1618.svg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <section id="section-header" className="header-section">
      <header className="site-header bg-white shadow-md">
        <div className="header-container container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="logo-container">
              <Link to="/">
                <img src={logoImg} alt="Prilabsa Logo" className="logo-img h-12" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="main-navigation hidden md:flex">
              <ul className="nav-list flex space-x-8">
                <li className="nav-item">
                  <Link to="/" className="nav-link nav-link-inicio text-gray-700 hover:text-blue-600 font-medium">
                    INICIO
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/quienes-somos" className="nav-link text-gray-700 hover:text-blue-600 font-medium">
                    QUIENES SOMOS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/oficinas" className="nav-link text-gray-700 hover:text-blue-600 font-medium">
                    OFICINAS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/productos" className="nav-link text-gray-700 hover:text-blue-600 font-medium">
                    PRODUCTOS
                  </Link>
                </li>
                <li className="nav-item nav-item-dropdown">
                  <Link to="/contactanos" className="nav-link text-gray-700 hover:text-blue-600 font-medium flex items-center">
                    CONTÁCTANOS <span className="dropdown-arrow ml-1">▼</span>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Language Selector */}
            <div className="language-selector hidden md:flex items-center space-x-2">
              <img src={langFlag} alt="Language Flag ES" className="lang-flag w-6 h-4" />
              <span className="lang-text text-gray-700 font-medium">es</span>
              <img src={langArrow} alt="Dropdown Arrow" className="lang-arrow w-3 h-3" />
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-6 h-6"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} />
              <span className={`block w-6 h-0.5 bg-gray-600 my-0.5 transition-opacity ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block w-6 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} />
            </button>
          </div>

          {/* Mobile nav */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                <Link to="/" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 font-medium">INICIO</Link>
                <Link to="/quienes-somos" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 font-medium">QUIENES SOMOS</Link>
                <Link to="/oficinas" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 font-medium">OFICINAS</Link>
                <Link to="/productos" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 font-medium">PRODUCTOS</Link>
                <Link to="/contactanos" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 font-medium">CONTÁCTANOS</Link>
              </div>
            </nav>
          )}
        </div>
      </header>
    </section>
  );
};

export default Header; 