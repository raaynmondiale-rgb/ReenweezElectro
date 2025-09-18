import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Headphones } from 'lucide-react';
import { categories } from '../data/mockData';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Accessoires Électroniques
              <span className="block text-gray-300">Premium au Maroc</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Découvrez notre collection exclusive d'accessoires de recharge, protections et batteries. 
              Qualité garantie, livraison gratuite partout au Maroc.
            </p>
            <Link
              to="/category/stations-supports"
              className="inline-flex items-center bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors group"
            >
              Découvrir nos produits
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Nos Catégories Principales
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Explorez notre gamme complète d'accessoires électroniques, 
              sélectionnés pour leur qualité et leur innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="group relative bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-w-16 aspect-h-10">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <Link
                    to={`/category/${category.slug}`}
                    className="inline-flex items-center btn-primary px-6 py-3 rounded-lg font-semibold group"
                  >
                    Voir produits
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
                <Truck className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Livraison Gratuite</h3>
              <p className="text-gray-700 leading-relaxed">
                Livraison gratuite partout au Maroc. Commandez en ligne et recevez vos produits chez vous.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Garantie 15 Jours</h3>
              <p className="text-gray-700 leading-relaxed">
                Tous nos produits sont garantis 15 jours. Retour et échange faciles.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
                <Headphones className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Support Client</h3>
              <p className="text-gray-700 leading-relaxed">
                Notre équipe est disponible via WhatsApp et email pour vous accompagner.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;