import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, SortAsc, SortDesc } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/mockData';

const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'rating' | 'newest'>('newest');
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  const category = categories.find(cat => cat.slug === slug);
  const categoryProducts = products.filter(product => product.category === slug);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = categoryProducts.filter(product => {
      if (inStockOnly && !product.inStock) return false;
      if (product.price < minPrice || product.price > maxPrice) return false;
      return true;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
        default:
          return 0;
      }
    });
  }, [categoryProducts, sortBy, minPrice, maxPrice, inStockOnly]);

  if (!category) {
    return <div className="container mx-auto px-4 py-8">Catégorie non trouvée</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{category.name}</h1>
          <p className="text-gray-600">{category.description}</p>
          <p className="text-sm text-gray-500 mt-2">{filteredAndSortedProducts.length} produits trouvés</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Filter className="w-5 h-5 mr-2 text-blue-600" />
                <h3 className="font-semibold text-gray-800">Filtres</h3>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Prix (MAD)</h4>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{minPrice} MAD</span>
                    <span>{maxPrice} MAD</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full"
                  />
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              </div>
                  <Filter className="w-5 h-5 mr-2 text-black" />
                  <h3 className="font-semibold text-black">Filtres</h3>
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                  <h4 className="font-medium text-black mb-3">Prix (MAD)</h4>
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="mr-2"
                  />
                  <span className="text-gray-700">En stock seulement</span>
            <h1 className="text-3xl font-bold text-black mb-2">{category.name}</h1>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-xl shadow-md">
              <span className="text-gray-700 font-medium">Trier par:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="newest">Nouveauté</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
                <option value="rating">Mieux notés</option>
              </select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
              <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-xl shadow-md border border-gray-200">
                <span className="text-black font-medium">Trier par:</span>
                    <span className="text-black">En stock seulement</span>
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Aucun produit ne correspond à vos critères.</p>
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:border-transparent"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;