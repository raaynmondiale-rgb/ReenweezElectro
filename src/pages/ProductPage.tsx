import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Shield, Truck, Share2 } from 'lucide-react';
import { products } from '../data/mockData';
import { useCart } from '../contexts/CartContext';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Produit non trouvé</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center mb-8 text-sm text-gray-600">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <span className="mx-2">/</span>
          <Link to={`/category/${product.category}`} className="hover:text-blue-600 capitalize">
            {product.category.replace('-', ' ')}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-4">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImageIndex === index ? 'border-blue-600' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">({product.reviews.length} avis)</span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-3xl font-bold text-gray-900">{product.price} MAD</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">{product.originalPrice} MAD</span>
              )}
              {product.originalPrice && (
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                  -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                </span>
              )}
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

            {/* Features */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">Caractéristiques principales:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Compatibility */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">Compatibilité:</h3>
              <div className="flex flex-wrap gap-2">
                {product.compatibility.map((device, index) => (
                  <span key={index} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                    {device}
                  </span>
                ))}
              </div>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <span className="text-green-600 font-medium">✓ En stock ({product.stockCount} disponibles)</span>
              ) : (
                <span className="text-red-600 font-medium">✗ Rupture de stock</span>
              )}
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md mb-6">
              <div className="mb-4">
                <label className="text-gray-700 font-medium">Quantité:</label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                >
                  {[...Array(Math.min(10, product.stockCount))].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Ajouter au panier</span>
                </button>
                
                <Link
                  to="/checkout"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold block text-center transition-colors"
                >
                  Commander maintenant
                </Link>
              </div>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-green-600" />
                <span>Garantie 15 jours</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Truck className="w-4 h-4 text-blue-600" />
                <span>Livraison gratuite</span>
              </div>
            </div>

            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
              <Share2 className="w-4 h-4" />
              <span>Partager ce produit</span>
            </button>
          </div>
        </div>

        {/* Reviews Section */}
        {product.reviews.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Avis clients</h2>
            <div className="space-y-6">
              {product.reviews.map((review) => (
                <div key={review.id} className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">{review.customerName}</h4>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString('fr-FR')}</span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;