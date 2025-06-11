import React from 'react';
import Layout from '../components/layout/Layout';

// Importar todas las imágenes necesarias
import heroPoster from '../prilabsa-mockup-html/images/1782d775edd73808855adf6ad6331c2fb21b948b.png';
import aboutImage from '../prilabsa-mockup-html/images/f75f51928f9818e7a4db3a2f0638ed8b9df4887c.png';
import aboutArrow from '../prilabsa-mockup-html/images/14_805.svg';

// Iconos de productos
import alimentosIcon from '../prilabsa-mockup-html/images/I14_817_14_680.svg';
import probioticosIcon from '../prilabsa-mockup-html/images/I14_836_14_617.svg';
import aditivosIcon from '../prilabsa-mockup-html/images/I14_846_14_635.svg';
import quimicosIcon from '../prilabsa-mockup-html/images/I14_856_14_653.svg';
import equiposIcon from '../prilabsa-mockup-html/images/I14_866_14_671.svg';

// Iconos de agencias
import agenciesArrow from '../prilabsa-mockup-html/images/14_903.svg';

// Logos de marcas
import apiLogo from '../prilabsa-mockup-html/images/4b70dcae518ee387ddfbd4a8d6a8d96df812e3da.png';
import argentLogo from '../prilabsa-mockup-html/images/95838773a2d4da480768bf2f8832d5161751875d.png';
import basfLogo from '../prilabsa-mockup-html/images/43a4c27d2dede047c9188ed3e0fe7f633c3c15de.png';
import dsmLogo from '../prilabsa-mockup-html/images/201458f75d8d7aa60f640b18a42215faf3c7c914.png';
import gastLogo from '../prilabsa-mockup-html/images/2d8b016da136146129fdbb5490edfd8c265e71c7.png';

// Arrows del carousel
import prevArrow from '../prilabsa-mockup-html/images/14_968.svg';
import nextArrow from '../prilabsa-mockup-html/images/14_971.svg';

const HomePage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section id="section-hero" className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="hero-background-video-container absolute inset-0">
          <img 
            src={heroPoster}
            alt="Hero Background" 
            className="hero-video w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="hero-content-container relative z-10 max-w-6xl mx-auto px-4 text-white">
          <div className="hero-main-text text-center mb-8">
            <h1 className="hero-title text-4xl md:text-6xl font-bold leading-tight mb-4">
              Somos proveedores de<br />
              las mejores soluciones<br />
              integrales en
            </h1>
            <p className="hero-subtitle-highlight text-5xl md:text-7xl font-bold text-orange-500">
              ALIMENTOS
            </p>
          </div>
          
          <div className="hero-secondary-text text-center">
            <p className="hero-tagline text-xl md:text-2xl mb-6">
              Sirviendo a las Américas<br />
              por más de 32 años.
            </p>
            <a href="#" className="hero-cta-link inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-black transition-colors">
              VER
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="section-about" className="about-section py-20 bg-gray-50">
        <div className="about-container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="about-image-column">
              <img 
                src={aboutImage} 
                alt="Decorative geometric shapes" 
                className="about-decorative-image w-full max-w-md mx-auto"
              />
            </div>
            
            <div className="about-text-column relative">
              <div className="about-heading-container relative mb-8">
                <h2 className="about-title-background absolute -top-4 left-0 text-8xl md:text-9xl font-bold text-gray-200 opacity-50 select-none">
                  SOMOS
                </h2>
              </div>
              
              <div className="about-paragraphs space-y-6 text-gray-700 leading-relaxed relative z-10">
                <p>
                  Prilabsa es una empresa multinacional fundada en el año 1992, dedicándose a la comercialización de alimentos, probióticos, aditivos, equipos y químicos con altos estándares de calidad.
                </p>
                <p>
                  Prilabsa ha podido cubrir todas las necesidades de los laboratorios de camarón, peces y camaroneras, gracias al pleno conocimiento del medio ambiente y la sólida experiencia con nuestro personal capacitado en varios mercados de la industria acuícola.
                </p>
                <p>
                  Prilabsa ha expandido sus actividades en países establecidos como puntos estratégicos del continente americano, contando con oficinas comerciales y bodegas climatizadas en Ecuador (Guayaquil, Manta, Pedernales, San Vicente, Ponce Enríquez, Hualtaco, Machala, Esmeraldas, Libertad), USA (Miami), México (Mazatlán), Brasil (Natal y Aracati), Honduras (Choluteca), Panamá (Ciudad de Panamá), Nicaragua (Chinandega), Venezuela (Maracaibo) y Perú (Tumbes).
                </p>
                <p>
                  Contamos con mas de 32 años de experiencia y servicio dentro del sector, lo que evidencia que la excelencia no se improvisa, se consolida a través de la eficiencia de cada uno de nuestro equipo de trabajo. Llegando así a convertirnos en la solución integral del sector acuícola en las Américas.
                </p>
              </div>
              
              <a href="#" className="about-cta-button inline-flex items-center mt-8 px-8 py-3 border-2 border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors">
                <span className="mr-2">CONOCE MÁS</span>
                <img src={aboutArrow} alt="Arrow right" className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="section-products" className="products-section py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            
            {/* ALIMENTOS */}
            <div className="product-category-item bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="product-category-header mb-4">
                <img src={alimentosIcon} alt="" className="product-category-icon w-16 h-16 mx-auto mb-4" />
                <div className="product-category-title-container relative text-center">
                  <h3 className="product-title-background absolute inset-0 text-4xl font-bold text-gray-200 opacity-30">
                    ALIMENTOS
                  </h3>
                  <h3 className="product-title-main relative z-10 text-xl font-bold text-gray-800">
                    ALIMENTOS
                  </h3>
                </div>
              </div>
              <div className="product-category-content text-center">
                <p className="text-gray-600 mb-4">Revisa nuestro catálogo de productos de Alimentos aquí</p>
                <a href="#" className="product-cta-button inline-flex items-center text-blue-600 hover:text-blue-800">
                  <span>Ver más</span>
                  <span className="product-cta-arrow ml-2">→</span>
                </a>
              </div>
            </div>

            {/* PROBIÓTICOS */}
            <div className="product-category-item bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="product-category-header mb-4">
                <img src={probioticosIcon} alt="" className="product-category-icon w-16 h-16 mx-auto mb-4" />
                <div className="product-category-title-container relative text-center">
                  <h3 className="product-title-background absolute inset-0 text-3xl font-bold text-gray-200 opacity-30">
                    PROBIÓTICOS
                  </h3>
                  <h3 className="product-title-main relative z-10 text-xl font-bold text-gray-800">
                    PROBIÓTICOS
                  </h3>
                </div>
              </div>
            </div>

            {/* ADITIVOS */}
            <div className="product-category-item bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="product-category-header mb-4">
                <img src={aditivosIcon} alt="" className="product-category-icon w-16 h-16 mx-auto mb-4" />
                <div className="product-category-title-container relative text-center">
                  <h3 className="product-title-background absolute inset-0 text-4xl font-bold text-gray-200 opacity-30">
                    ADITIVOS
                  </h3>
                  <h3 className="product-title-main relative z-10 text-xl font-bold text-gray-800">
                    ADITIVOS
                  </h3>
                </div>
              </div>
            </div>

            {/* QUÍMICOS */}
            <div className="product-category-item bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="product-category-header mb-4">
                <img src={quimicosIcon} alt="" className="product-category-icon w-16 h-16 mx-auto mb-4" />
                <div className="product-category-title-container relative text-center">
                  <h3 className="product-title-background absolute inset-0 text-4xl font-bold text-gray-200 opacity-30">
                    QUÍMICOS
                  </h3>
                  <h3 className="product-title-main relative z-10 text-xl font-bold text-gray-800">
                    QUÍMICOS
                  </h3>
                </div>
              </div>
            </div>

            {/* EQUIPOS */}
            <div className="product-category-item bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="product-category-header mb-4">
                <img src={equiposIcon} alt="" className="product-category-icon w-16 h-16 mx-auto mb-4" />
                <div className="product-category-title-container relative text-center">
                  <h3 className="product-title-background absolute inset-0 text-4xl font-bold text-gray-200 opacity-30">
                    EQUIPOS
                  </h3>
                  <h3 className="product-title-main relative z-10 text-xl font-bold text-gray-800">
                    EQUIPOS
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agencies Section */}
      <section id="section-agencies" className="agencies-section py-20 bg-blue-600 text-white">
        <div className="agencies-container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="agencies-text-column">
              <h2 className="agencies-title text-4xl md:text-5xl font-bold mb-8">
                NUESTRAS<br />AGENCIAS
              </h2>
              <div className="agencies-paragraphs mb-8">
                <p className="text-xl leading-relaxed">
                  Hemos expandido nuestras actividades en países establecidos como puntos estratégicos del continente Americano, contando con oficinas comerciales modernas y bodegas climatizadas.
                </p>
              </div>
              <a href="#" className="agencies-cta-button inline-flex items-center px-8 py-3 border-2 border-white text-white rounded hover:bg-white hover:text-blue-600 transition-colors">
                <span className="mr-2">CONOCE MÁS</span>
                <img src={agenciesArrow} alt="Arrow right" className="w-4 h-4" />
              </a>
            </div>
            <div className="agencies-image-column">
              <div className="w-full h-80 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white/60">Mapa de Agencias</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="section-brands" className="brands-section py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <h3 className="brands-title text-3xl font-bold text-center mb-12 text-gray-800">
            NUESTRAS MARCAS
          </h3>
          <div className="brands-carousel-wrapper relative">
            <button className="carousel-arrow prev-arrow absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow">
              <img src={prevArrow} alt="Previous" className="w-6 h-6" />
            </button>
            
            <div className="brands-carousel overflow-hidden mx-16">
              <div className="flex justify-center items-center space-x-12">
                <div className="brand-logo-item flex-shrink-0">
                  <img src={apiLogo} alt="API" className="h-16 object-contain" />
                </div>
                <div className="brand-logo-item flex-shrink-0">
                  <img src={argentLogo} alt="Argent" className="h-16 object-contain" />
                </div>
                <div className="brand-logo-item flex-shrink-0">
                  <img src={basfLogo} alt="BASF" className="h-16 object-contain" />
                </div>
                <div className="brand-logo-item flex-shrink-0">
                  <img src={dsmLogo} alt="DSM" className="h-16 object-contain" />
                </div>
                <div className="brand-logo-item flex-shrink-0">
                  <img src={gastLogo} alt="Gast" className="h-16 object-contain" />
                </div>
              </div>
            </div>
            
            <button className="carousel-arrow next-arrow absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow">
              <img src={nextArrow} alt="Next" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage; 