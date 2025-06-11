import React from 'react';
import Layout from '../components/layout/Layout';

const QuienesSomosPage: React.FC = () => {
  return (
    <Layout>
      <section className="bg-gray-100 py-16 min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">Quiénes Somos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">Conoce nuestra historia, misión y valores</p>
          <p className="text-gray-600">Contenido en construcción…</p>
        </div>
      </section>
    </Layout>
  );
};

export default QuienesSomosPage; 