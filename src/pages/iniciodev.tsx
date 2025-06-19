import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

// Import assets to let Vite handle path resolution - only the ones actually used as variables
import logoHeader from '/assets/iniciodev/prilabsa_logo_header.png';
import backgroundVideo from '/assets/iniciodev/background_video.mp4';
import inicioBgTrim from '/assets/iniciodev/inicio_bg_trim.png';
import iconFacebook from '/assets/iniciodev/icon_facebook.svg';
import iconInstagram from '/assets/iniciodev/icon_instagram.svg';
import iconLinkedin from '/assets/iniciodev/icon_linkedin.svg';
import iconYoutube from '/assets/iniciodev/icon_youtube.svg';
import logoFooter from '/assets/iniciodev/prilabsa_logo_footer.png';

// Modal app element is now configured inside the component useEffect

const InicioDev = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState('alimentos');
  const [cookiesBannerVisible, setCookiesBannerVisible] = useState(true);

  // Setup react-modal app element when component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const rootElement = document.getElementById('root');
      if (rootElement) {
        Modal.setAppElement('#root');
      } else {
        // Fallback for testing environments
        const bodyElement = document.body;
        if (bodyElement) {
          Modal.setAppElement(bodyElement);
        }
      }
    }
  }, []);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  // Header scroll behavior: hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setHeaderVisible(false);
      } else {
        // Scrolling up
        setHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Product and partner arrays removed to fix linter errors (data is directly in JSX)

  return (
    <>
      <div className="bg-white text-gray-800 font-montserrat">
      {/* Header with scroll behavior */}
      <header 
        className={`absolute top-0 left-0 right-0 z-30 p-4 transition-transform duration-300 ${
          headerVisible ? 'translate-y-0' : '-translate-y-full'
        }`} 
        style={{backgroundColor: 'transparent'}}
      >
        <div className="container mx-auto flex justify-between items-center">
          <img src={logoHeader} alt="Prilabsa Logo" className="h-12" />
          <nav className="hidden md:flex space-x-6 text-white">
            <a href="#" className="hover:text-blue-600">INICIO</a>
            <a href="#" className="hover:text-blue-600">QUIENES SOMOS</a>
            <a href="#" className="hover:text-blue-600">OFICINAS</a>
            <a href="#" className="hover:text-blue-600">PRODUCTOS</a>
            <a href="#" className="hover:text-blue-600">CONTÁCTANOS</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen text-white flex items-center justify-center text-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src={backgroundVideo}
          />
          {/* Blue Overlay with 50% opacity */}
          <div className="absolute top-0 left-0 w-full h-full z-10" style={{backgroundColor: '#3759C1', opacity: 0.5}}></div>
          
          {/* Hero Content Container */}
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-between text-white">
            {/* Top-left aligned main title */}
            <div className="pt-32 md:pt-40">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-left">
                Somos proveedores de<br/>
                las mejores soluciones<br/>
                integrales en<br/>
                <span style={{color: '#e17e01', fontWeight: 900}}>ALIMENTOS</span>
              </h1>
            </div>

            {/* Bottom-right aligned subtitle and button */}
            <div className="pb-16 md:pb-24 text-right">
              <p className="text-lg md:text-xl mb-4">
                Sirviendo a las Américas<br/>por más de 32 años.
              </p>
              <button 
                onClick={openModal}
                className="inline-flex justify-center items-center bg-transparent hover:bg-prilabsa-orange-primary text-prilabsa-orange-primary hover:text-white font-bold py-2 px-10 rounded-lg text-md md:text-lg transition duration-300 transform hover:scale-105 shadow-[0px_2px_12px_0px_rgba(30,58,138,0.10)] border-2"
                style={{borderColor: '#e17e01', color: '#e17e01'}}
              >
                VER
              </button>
            </div>
          </div>
        </section>

        {/* About Us Section - SOMOS with exact prilabsa.com styling */}
        <section 
          className="py-16 lg:py-24 bg-white relative"
          style={{
            backgroundImage: `url(${inicioBgTrim})`,
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain'
          }}
        >
          <div className="container mx-auto px-4">
            <h2 
              className="text-3xl font-bold mb-8 text-left"
              style={{color: '#3759C1', fontFamily: 'Gotham, sans-serif', fontWeight: 900}}
            >
              SOMOS
            </h2>
            <div className="max-w-3xl text-left space-y-4">
              <p style={{color: '#3759C1', fontFamily: 'Gotham, sans-serif', fontWeight: 400}}>
                Prilabsa es una empresa multinacional fundada en el año 1992, dedicándose a la comercialización de alimentos, probióticos, aditivos, equipos y químicos con altos estándares de calidad.
              </p>
              <p style={{color: '#3759C1', fontFamily: 'Gotham, sans-serif', fontWeight: 400}}>
                Prilabsa ha podido cubrir todas las necesidades de los laboratorios de camarón, peces y camaroneras, gracias al pleno conocimiento del medio ambiente y la sólida experiencia con nuestro personal capacitado en varios mercados de la industria acuícola.
              </p>
              <p style={{color: '#3759C1', fontFamily: 'Gotham, sans-serif', fontWeight: 400}}>
                Prilabsa ha expandido sus actividades en países establecidos como puntos estratégicos del continente americano, contando con oficinas comerciales y bodegas climatizadas en Ecuador (Guayaquil, Manta, Pedernales, San Vicente, Ponce Enríquez, Hualtaco, Machala, Esmeraldas, Libertad), USA (Miami), México (Mazatlán), Brasil (Natal y Aracati), Honduras (Choluteca), Panamá (Ciudad de Panamá), Nicaragua (Chinandega), Venezuela (Maracaibo) y Perú (Tumbes).
              </p>
              <p style={{color: '#3759C1', fontFamily: 'Gotham, sans-serif', fontWeight: 400}}>
                Contamos con mas de 32 años de experiencia y servicio dentro del sector, lo que evidencia que la excelencia no se improvisa, se consolida a través de la eficiencia de cada uno de nuestro equipo de trabajo. Llegando así a convertirnos en la solución integral del sector acuícola en las Américas.
              </p>
              
              {/* CONOCE MÁS Button */}
              <div className="mt-6">
                <button 
                  className="inline-flex justify-center items-center bg-transparent hover:text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                  style={{
                    border: '2px solid #3759C1',
                    color: '#3759C1',
                    fontFamily: 'Gotham, sans-serif'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLButtonElement;
                    target.style.backgroundColor = '#3759C1';
                    target.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLButtonElement;
                    target.style.backgroundColor = 'transparent';
                    target.style.color = '#3759C1';
                  }}
                >
                  CONOCE MÁS
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section - Accordion Full Width */}
        <section className="py-16 lg:py-24">
          <div className="w-full px-4 md:px-6 lg:px-8">
            
            {/* Accordion Container - Full Width */}
            <div className="w-full space-y-2">
              
              {/* ALIMENTOS Accordion - Default Open */}
              <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  className="accordion-button w-full p-4 md:p-6 lg:p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors duration-300 flex justify-center items-center"
                  onClick={() => {
                    // Cerrar todos los otros acordeones
                    const acordeones = ['probioticos-content', 'aditivos-content', 'quimicos-content', 'equipos-content'];
                    acordeones.forEach(id => {
                      const element = document.getElementById(id);
                      if (element) element.style.maxHeight = '0px';
                    });
                    
                    // Abrir/cerrar este acordeón
                    const content = document.getElementById('alimentos-content') as HTMLElement;
                    if (content) {
                      const isOpen = activeAccordion === 'alimentos';
                      if (isOpen) {
                        content.style.maxHeight = '0px';
                        setActiveAccordion('');
                      } else {
                        content.style.maxHeight = content.scrollHeight + 'px';
                        setActiveAccordion('alimentos');
                      }
                    }
                  }}
                >
                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{color: activeAccordion === 'alimentos' ? '#f6921d' : '#3759C1', fontFamily: 'Gotham, sans-serif'}}>ALIMENTOS</span>
                </button>
                <div 
                  id="alimentos-content" 
                  className="accordion-content overflow-hidden transition-all duration-300"
                  style={{maxHeight: '200px'}}
                >
                  <div className="p-4 md:p-6 lg:p-8 bg-white text-center">
                    <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 max-w-2xl mx-auto" style={{fontFamily: 'Gotham, sans-serif'}}>
                      Revisa nuestro catálogo de productos de Alimentos aquí
                    </p>
                    <button 
                      className="inline-flex justify-center items-center bg-transparent hover:text-white font-bold py-3 px-6 md:px-8 rounded-lg transition duration-300 text-base md:text-lg"
                      style={{
                        border: '2px solid #3759C1',
                        color: '#3759C1',
                        fontFamily: 'Gotham, sans-serif'
                      }}
                      onMouseEnter={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = '#3759C1';
                        target.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = 'transparent';
                        target.style.color = '#3759C1';
                      }}
                    >
                      Ver más →
                    </button>
                  </div>
                </div>
              </div>

              {/* PROBIÓTICOS Accordion */}
              <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  className="accordion-button w-full p-4 md:p-6 lg:p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors duration-300 flex justify-center items-center"
                  onClick={() => {
                    // Cerrar todos los otros acordeones
                    const acordeones = ['alimentos-content', 'aditivos-content', 'quimicos-content', 'equipos-content'];
                    acordeones.forEach(id => {
                      const element = document.getElementById(id);
                      if (element) element.style.maxHeight = '0px';
                    });
                    
                    // Abrir/cerrar este acordeón
                    const content = document.getElementById('probioticos-content') as HTMLElement;
                    if (content) {
                      const isOpen = activeAccordion === 'probioticos';
                      if (isOpen) {
                        content.style.maxHeight = '0px';
                        setActiveAccordion('');
                      } else {
                        content.style.maxHeight = content.scrollHeight + 'px';
                        setActiveAccordion('probioticos');
                      }
                    }
                  }}
                >
                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{color: activeAccordion === 'probioticos' ? '#f6921d' : '#3759C1', fontFamily: 'Gotham, sans-serif'}}>PROBIÓTICOS</span>
                </button>
                <div 
                  id="probioticos-content" 
                  className="accordion-content overflow-hidden transition-all duration-300"
                  style={{maxHeight: '0px'}}
                >
                  <div className="p-4 md:p-6 lg:p-8 bg-white text-center">
                    <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 max-w-2xl mx-auto" style={{fontFamily: 'Gotham, sans-serif'}}>
                      Catálogo completo de productos probióticos para acuicultura
                    </p>
                    <button 
                      className="inline-flex justify-center items-center bg-transparent hover:text-white font-bold py-3 px-6 md:px-8 rounded-lg transition duration-300 text-base md:text-lg"
                      style={{
                        border: '2px solid #3759C1',
                        color: '#3759C1',
                        fontFamily: 'Gotham, sans-serif'
                      }}
                      onMouseEnter={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = '#3759C1';
                        target.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = 'transparent';
                        target.style.color = '#3759C1';
                      }}
                    >
                      Ver más →
                    </button>
                  </div>
                </div>
              </div>

              {/* ADITIVOS Accordion */}
              <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  className="accordion-button w-full p-4 md:p-6 lg:p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors duration-300 flex justify-center items-center"
                  onClick={() => {
                    // Cerrar todos los otros acordeones
                    const acordeones = ['alimentos-content', 'probioticos-content', 'quimicos-content', 'equipos-content'];
                    acordeones.forEach(id => {
                      const element = document.getElementById(id);
                      if (element) element.style.maxHeight = '0px';
                    });
                    
                    // Abrir/cerrar este acordeón
                    const content = document.getElementById('aditivos-content') as HTMLElement;
                    if (content) {
                      const isOpen = activeAccordion === 'aditivos';
                      if (isOpen) {
                        content.style.maxHeight = '0px';
                        setActiveAccordion('');
                      } else {
                        content.style.maxHeight = content.scrollHeight + 'px';
                        setActiveAccordion('aditivos');
                      }
                    }
                  }}
                >
                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{color: activeAccordion === 'aditivos' ? '#f6921d' : '#3759C1', fontFamily: 'Gotham, sans-serif'}}>ADITIVOS</span>
                </button>
                <div 
                  id="aditivos-content" 
                  className="accordion-content overflow-hidden transition-all duration-300"
                  style={{maxHeight: '0px'}}
                >
                  <div className="p-4 md:p-6 lg:p-8 bg-white text-center">
                    <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 max-w-2xl mx-auto" style={{fontFamily: 'Gotham, sans-serif'}}>
                      Aditivos especializados para optimización de cultivos acuícolas
                    </p>
                    <button 
                      className="inline-flex justify-center items-center bg-transparent hover:text-white font-bold py-3 px-6 md:px-8 rounded-lg transition duration-300 text-base md:text-lg"
                      style={{
                        border: '2px solid #3759C1',
                        color: '#3759C1',
                        fontFamily: 'Gotham, sans-serif'
                      }}
                      onMouseEnter={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = '#3759C1';
                        target.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = 'transparent';
                        target.style.color = '#3759C1';
                      }}
                    >
                      Ver más →
                    </button>
                  </div>
                </div>
              </div>

              {/* QUÍMICOS Accordion */}
              <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  className="accordion-button w-full p-4 md:p-6 lg:p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors duration-300 flex justify-center items-center"
                  onClick={() => {
                    // Cerrar todos los otros acordeones
                    const acordeones = ['alimentos-content', 'probioticos-content', 'aditivos-content', 'equipos-content'];
                    acordeones.forEach(id => {
                      const element = document.getElementById(id);
                      if (element) element.style.maxHeight = '0px';
                    });
                    
                    // Abrir/cerrar este acordeón
                    const content = document.getElementById('quimicos-content') as HTMLElement;
                    if (content) {
                      const isOpen = activeAccordion === 'quimicos';
                      if (isOpen) {
                        content.style.maxHeight = '0px';
                        setActiveAccordion('');
                      } else {
                        content.style.maxHeight = content.scrollHeight + 'px';
                        setActiveAccordion('quimicos');
                      }
                    }
                  }}
                >
                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{color: activeAccordion === 'quimicos' ? '#f6921d' : '#3759C1', fontFamily: 'Gotham, sans-serif'}}>QUÍMICOS</span>
                </button>
                <div 
                  id="quimicos-content" 
                  className="accordion-content overflow-hidden transition-all duration-300"
                  style={{maxHeight: '0px'}}
                >
                  <div className="p-4 md:p-6 lg:p-8 bg-white text-center">
                    <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 max-w-2xl mx-auto" style={{fontFamily: 'Gotham, sans-serif'}}>
                      Productos químicos de alta calidad para tratamiento acuícola
                    </p>
                    <button 
                      className="inline-flex justify-center items-center bg-transparent hover:text-white font-bold py-3 px-6 md:px-8 rounded-lg transition duration-300 text-base md:text-lg"
                      style={{
                        border: '2px solid #3759C1',
                        color: '#3759C1',
                        fontFamily: 'Gotham, sans-serif'
                      }}
                      onMouseEnter={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = '#3759C1';
                        target.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = 'transparent';
                        target.style.color = '#3759C1';
                      }}
                    >
                      Ver más →
                    </button>
                  </div>
                </div>
              </div>

              {/* EQUIPOS Accordion */}
              <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  className="accordion-button w-full p-4 md:p-6 lg:p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors duration-300 flex justify-center items-center"
                  onClick={() => {
                    // Cerrar todos los otros acordeones
                    const acordeones = ['alimentos-content', 'probioticos-content', 'aditivos-content', 'quimicos-content'];
                    acordeones.forEach(id => {
                      const element = document.getElementById(id);
                      if (element) element.style.maxHeight = '0px';
                    });
                    
                    // Abrir/cerrar este acordeón
                    const content = document.getElementById('equipos-content') as HTMLElement;
                    if (content) {
                      const isOpen = activeAccordion === 'equipos';
                      if (isOpen) {
                        content.style.maxHeight = '0px';
                        setActiveAccordion('');
                      } else {
                        content.style.maxHeight = content.scrollHeight + 'px';
                        setActiveAccordion('equipos');
                      }
                    }
                  }}
                >
                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{color: activeAccordion === 'equipos' ? '#f6921d' : '#3759C1', fontFamily: 'Gotham, sans-serif'}}>EQUIPOS</span>
                </button>
                <div 
                  id="equipos-content" 
                  className="accordion-content overflow-hidden transition-all duration-300"
                  style={{maxHeight: '0px'}}
                >
                  <div className="p-4 md:p-6 lg:p-8 bg-white text-center">
                    <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 max-w-2xl mx-auto" style={{fontFamily: 'Gotham, sans-serif'}}>
                      Equipos especializados y tecnología avanzada para acuicultura
                    </p>
                    <button 
                      className="inline-flex justify-center items-center bg-transparent hover:text-white font-bold py-3 px-6 md:px-8 rounded-lg transition duration-300 text-base md:text-lg"
                      style={{
                        border: '2px solid #3759C1',
                        color: '#3759C1',
                        fontFamily: 'Gotham, sans-serif'
                      }}
                      onMouseEnter={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = '#3759C1';
                        target.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = 'transparent';
                        target.style.color = '#3759C1';
                      }}
                    >
                      Ver más →
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Offices Section */}
        <section className="py-16 lg:py-24" style={{backgroundColor: '#f8f9fa'}}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{color: '#3759C1', fontFamily: 'Gotham, sans-serif'}}>
              NUESTRAS<br />OFICINAS
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto" style={{color: '#3759C1', fontFamily: 'Gotham, sans-serif'}}>
              Hemos expandido nuestras actividades en países establecidos como puntos estratégicos del continente Americano, contando con oficinas comerciales modernas y bodegas climatizadas.
            </p>
            
            {/* Countries Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              
              {/* Ecuador */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4" style={{color: '#3759C1', fontFamily: 'Gotham, sans-serif'}}>ECUADOR</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold" style={{color: '#3759C1', fontFamily: 'Gotham, sans-serif'}}>Guayaquil</h4>
                    <p className="text-sm" style={{color: '#666', fontFamily: 'Gotham, sans-serif'}}>
                      Av. Carlos Julio Arosemena Km. 2 ½<br/>
                      C.C. Albán Borja, Planta baja, Puerta #7
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{color: '#3759C1', fontFamily: 'Gotham, sans-serif'}}>Manta</h4>
                    <p className="text-sm" style={{color: '#666', fontFamily: 'Gotham, sans-serif'}}>Calle 12, avenida 8 (esq.)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{color: '#3759C1', fontFamily: 'Gotham, sans-serif'}}>Machala</h4>
                    <p className="text-sm" style={{color: '#666', fontFamily: 'Gotham, sans-serif'}}>Av. Bolivar Madero Vargas y 14 oeste</p>
                  </div>
                </div>
              </div>

              {/* USA */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4" style={{color: '#3759C1', fontFamily: 'Gotham, sans-serif'}}>USA</h3>
                <div>
                  <h4 className="font-semibold" style={{color: '#3759C1', fontFamily: 'Gotham, sans-serif'}}>Miami</h4>
                  <p className="text-sm" style={{color: '#666', fontFamily: 'Gotham, sans-serif'}}>
                    2970 West 84th St, Bay # 1<br/>
                    Hialeah, FL 33018<br/>
                    Tel: (+305) 822 8201
                  </p>
                </div>
              </div>

              {/* Brasil */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4" style={{color: '#3759C1', fontFamily: 'Gotham, sans-serif'}}>BRASIL</h3>
                <div>
                  <h4 className="font-semibold" style={{color: '#3759C1', fontFamily: 'Gotham, sans-serif'}}>Natal</h4>
                  <p className="text-sm" style={{color: '#666', fontFamily: 'Gotham, sans-serif'}}>
                    Av. Alameda das Acácias, Nº 101<br/>
                    Bairro Neópolis – Natal – RN<br/>
                    Tel: (+84) 3207773
                  </p>
                </div>
              </div>

              {/* México */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4" style={{color: '#3759C1', fontFamily: 'Gotham, sans-serif'}}>MÉXICO</h3>
                <div>
                  <h4 className="font-semibold" style={{color: '#3759C1', fontFamily: 'Gotham, sans-serif'}}>Mazatlán</h4>
                  <p className="text-sm" style={{color: '#666', fontFamily: 'Gotham, sans-serif'}}>
                    Acua Biomar, Av. Carlos Canseco 6020<br/>
                    Col. Marina Mazatlán<br/>
                    Tel: (+52) 669 913 25 87
                  </p>
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <button 
              className="inline-flex justify-center items-center bg-transparent hover:text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg"
              style={{
                border: '2px solid #3759C1',
                color: '#3759C1',
                fontFamily: 'Gotham, sans-serif'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.backgroundColor = '#3759C1';
                target.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.backgroundColor = 'transparent';
                target.style.color = '#3759C1';
              }}
            >
              CONOCE MÁS →
            </button>
          </div>
        </section>

        {/* Partners Section - NUESTRAS MARCAS */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{color: '#3759C1', fontFamily: 'Gotham, sans-serif'}}>NUESTRAS MARCAS</h2>
            <div className="overflow-hidden w-full">
              <div className="flex animate-scroll-fast items-center" style={{width: 'calc(200% + 32px)'}}>
                {/* Marcas principales - más visibles */}
                <div className="flex-shrink-0 mx-4">
                  <img src="/assets/iniciodev/socio_api.png" alt="API" className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/assets/iniciodev/socio_argeitit.png" alt="Argeitit" className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/assets/iniciodev/socio_basf.png" alt="BASF" className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/assets/iniciodev/socio_bentoli.png" alt="Bentoli" className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/assets/iniciodev/socio_dms.png" alt="DMS" className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/assets/iniciodev/socio_epicore.png" alt="Epicore" className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/assets/iniciodev/socio_natural_products.png" alt="Natural Products" className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/assets/iniciodev/socio_novus.png" alt="Novus" className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/assets/iniciodev/socio_syaqua.png" alt="Syaqua" className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/assets/iniciodev/socio_syndel.png" alt="Syndel" className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                
                {/* Duplicación para loop infinito */}
                <div className="flex-shrink-0 mx-4">
                  <img src="/assets/iniciodev/socio_api.png" alt="API" className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/assets/iniciodev/socio_argeitit.png" alt="Argeitit" className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/assets/iniciodev/socio_basf.png" alt="BASF" className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/assets/iniciodev/socio_bentoli.png" alt="Bentoli" className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/assets/iniciodev/socio_dms.png" alt="DMS" className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/assets/iniciodev/socio_epicore.png" alt="Epicore" className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/assets/iniciodev/socio_natural_products.png" alt="Natural Products" className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/assets/iniciodev/socio_novus.png" alt="Novus" className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/assets/iniciodev/socio_syaqua.png" alt="Syaqua" className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="flex-shrink-0 mx-4">
                  <img src="/assets/iniciodev/socio_syndel.png" alt="Syndel" className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with blue background from prilabsa.com */}
      <footer className="text-white pt-16 pb-8" style={{backgroundColor: '#3759C1'}}>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left items-start">
          <div>
            <img src={logoFooter} alt="Prilabsa Footer Logo" className="h-12 mx-auto md:mx-0 mb-4"/>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">CONTÁCTANOS</h3>
            <p className="text-gray-100">Para más información escríbenos a: <a href="mailto:info@prilabsa.com.ec" className="hover:text-yellow-400">info@prilabsa.com.ec</a></p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">UBICACIÓN</h3>
            <p className="text-gray-100">Av. Carlos Julio Arosemena, km 2 1/2, C.C. Albán Borja, local #55.<br/>Guayaquil – Ecuador</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">¡SÍGUENOS!</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#"><img src={iconFacebook} alt="Facebook" className="h-8"/></a>
              <a href="#"><img src={iconInstagram} alt="Instagram" className="h-8"/></a>
              <a href="#"><img src={iconLinkedin} alt="LinkedIn" className="h-8"/></a>
              <a href="#"><img src={iconYoutube} alt="YouTube" className="h-8"/></a>
            </div>
          </div>
        </div>
        
        {/* Enlaces legales */}
        <div className="container mx-auto px-4 mt-8 pt-4 border-t border-blue-300">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-200">
            <span>© 2024 Prilabsa. Todos los derechos reservados.</span>
            <a href="#" className="hover:text-yellow-400 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Aviso Legal</a>
          </div>
        </div>
      </footer>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Video Player Modal"
        className="relative bg-transparent p-0 border-0 max-w-4xl w-11/12 focus:outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
      >
        <div className="relative">
          <button onClick={closeModal} className="absolute -top-8 -right-0 text-white text-3xl font-bold">&times;</button>
          <div className="aspect-video bg-black">
            <video
              controls
              autoPlay
              className="w-full h-full"
              src={backgroundVideo}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Modal>

      {/* Banner de Cookies */}
      {cookiesBannerVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white p-4 shadow-lg">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
            <div className="flex-1 text-sm">
              <p>
                Utilizamos cookies para mejorar tu experiencia de navegación y analizar el tráfico de nuestro sitio web. 
                Al continuar navegando, aceptas nuestro uso de cookies. 
                <a href="#" className="text-yellow-400 hover:text-yellow-300 ml-1 underline">Más información</a>
              </p>
            </div>
            <div className="flex space-x-3">
              <button 
                onClick={() => setCookiesBannerVisible(false)}
                className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm transition-colors"
              >
                Rechazar
              </button>
              <button 
                onClick={() => setCookiesBannerVisible(false)}
                className="px-6 py-2 rounded text-sm font-semibold transition-colors"
                style={{backgroundColor: '#f6921d', color: 'white'}}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.backgroundColor = '#e17e01';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.backgroundColor = '#f6921d';
                }}
              >
                Aceptar Cookies
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  </>
  );
};

export default InicioDev;
