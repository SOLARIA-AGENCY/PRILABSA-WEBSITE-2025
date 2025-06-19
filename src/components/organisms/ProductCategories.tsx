import React from 'react';

interface ProductCategory {
  title: string;
  description: string;
  image: string;
  href: string;
}

const categories: ProductCategory[] = [
  {
    title: "ALIMENTOS",
    description: "Revisa nuestro catálogo de productos de Alimentos aquí",
    image: "/images/categories/alimentos.jpg",
    href: "#alimentos"
  },
  {
    title: "PROBIÓTICOS", 
    description: "Revisa nuestro catálogo de productos de Probióticos aquí",
    image: "/images/categories/probioticos.jpg",
    href: "#probioticos"
  },
  {
    title: "ADITIVOS",
    description: "Revisa nuestro catálogo de productos de Aditivos aquí", 
    image: "/images/categories/aditivos.jpg",
    href: "#aditivos"
  },
  {
    title: "QUÍMICOS",
    description: "Revisa nuestro catálogo de productos de Químicos aquí",
    image: "/images/categories/quimicos.jpg", 
    href: "#quimicos"
  },
  {
    title: "EQUIPOS",
    description: "Revisa nuestro catálogo de productos de Equipos aquí",
    image: "/images/categories/equipos.jpg",
    href: "#equipos"
  }
];

export const ProductCategories: React.FC = () => {
  return (
    <section id="productos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            NUESTROS PRODUCTOS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones integrales para la industria acuícola con los más altos estándares de calidad
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Category Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Category Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Category Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {category.description}
                </p>
                
                <a 
                  href={category.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-200"
                >
                  Ver más
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-xl transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <a 
            href="#contactanos"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Ver Catálogo Completo
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}; 