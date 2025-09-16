import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Minus, Plus, Trash2, ArrowLeft, CreditCard, Banknote } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartPage: React.FC = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'paypal'>('cash');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle order submission
    console.log('Order submitted:', { items, customerInfo, paymentMethod, total: getTotalPrice() });
    alert('Commande passée avec succès! Vous recevrez bientôt un email de confirmation.');
    clearCart();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-12 h-12 text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Votre panier est vide</h1>
            <p className="text-gray-600 mb-8">Découvrez nos produits et ajoutez-les à votre panier.</p>
            <Link
              to="/"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Continuer les achats
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <Link to="/" className="text-blue-600 hover:text-blue-700 mr-4">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-3xl font-bold text-gray-800">Mon Panier ({items.length} article{items.length > 1 ? 's' : ''})</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map(item => (
                <div key={item.product.id} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full sm:w-24 h-48 sm:h-24 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-2">{item.product.name}</h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{item.product.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-medium text-gray-800 min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <span className="font-bold text-gray-900">
                            {item.product.price * item.quantity} MAD
                          </span>
                          <button
                            onClick={() => handleRemoveItem(item.product.id)}
                            className="text-red-600 hover:text-red-700 p-1 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary & Checkout */}
            <div>
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Résumé de commande</h2>
                
                {/* Order Total */}
                <div className="border-b border-gray-200 pb-4 mb-6">
                  <div className="flex justify-between items-center text-lg font-bold text-gray-800">
                    <span>Total:</span>
                    <span>{getTotalPrice()} MAD</span>
                  </div>
                  <p className="text-sm text-green-600 mt-1">✓ Livraison gratuite incluse</p>
                </div>

                {/* Payment Methods */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Mode de paiement</h3>
                  <div className="space-y-3">
                    <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="payment"
                        value="cash"
                        checked={paymentMethod === 'cash'}
                        onChange={(e) => setPaymentMethod(e.target.value as 'cash')}
                        className="mr-3"
                      />
                      <Banknote className="w-5 h-5 mr-2 text-green-600" />
                      <div>
                        <span className="font-medium text-gray-800">Paiement à la livraison</span>
                        <p className="text-sm text-gray-600">Payez en cash lors de la réception</p>
                      </div>
                    </label>
                    
                    <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="payment"
                        value="paypal"
                        checked={paymentMethod === 'paypal'}
                        onChange={(e) => setPaymentMethod(e.target.value as 'paypal')}
                        className="mr-3"
                      />
                      <CreditCard className="w-5 h-5 mr-2 text-blue-600" />
                      <div>
                        <span className="font-medium text-gray-800">PayPal</span>
                        <p className="text-sm text-gray-600">Carte bancaire sans compte PayPal</p>
                      </div>
                    </label>
                    
                    {paymentMethod === 'paypal' && (
                      <div className="p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
                        Le paiement via PayPal sera effectué en Euro au taux de change en vigueur
                      </div>
                    )}
                  </div>
                </div>

                {/* Customer Information Form */}
                <form onSubmit={handleOrderSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={customerInfo.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={customerInfo.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={customerInfo.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Adresse de livraison *
                    </label>
                    <textarea
                      name="address"
                      value={customerInfo.address}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                  >
                    Finaliser la commande
                  </button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                  En passant commande, vous acceptez nos conditions d'utilisation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;