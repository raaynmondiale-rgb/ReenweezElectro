import React, { useState } from 'react';
import { MessageCircle, Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Message envoyé! Nous vous répondrons rapidement.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Nous Contacter</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une question ? Besoin d'aide ? Notre équipe est là pour vous accompagner. 
              Contactez-nous via WhatsApp, email ou le formulaire ci-dessous.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Informations de Contact</h2>
              
              <div className="space-y-6">
                <a 
                  href="https://wa.me/212600000000"
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow group"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">WhatsApp</h3>
                    <p className="text-gray-600 mb-2">+212 6 00 00 00 00</p>
                    <p className="text-sm text-gray-500">Réponse immédiate pendant les heures ouvrables</p>
                  </div>
                </a>

                <a 
                  href="mailto:contact@reenweezelectro.ma"
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600 mb-2">contact@reenweezelectro.ma</p>
                    <p className="text-sm text-gray-500">Réponse sous 24h maximum</p>
                  </div>
                </a>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Zone de Livraison</h3>
                    <p className="text-gray-600 mb-2">Partout au Maroc</p>
                    <p className="text-sm text-gray-500">Livraison gratuite dans tout le royaume</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-4">Heures de Service</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span>9h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span>9h00 - 16h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span>Fermé</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Envoyez-nous un Message</h2>
              
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Votre nom complet"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Votre message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors group"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span>Envoyer le message</span>
                  </button>
                </div>
              </form>

              <p className="text-sm text-gray-500 text-center mt-4">
                * Champs obligatoires. Vos données sont protégées et ne seront jamais partagées.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;