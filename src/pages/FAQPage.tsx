import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  // Commandes et livraison
  {
    id: '1',
    question: 'Comment passer une commande ?',
    answer: 'Pour passer une commande, ajoutez simplement les produits désirés à votre panier, puis procédez au checkout. Vous pouvez payer à la livraison ou via PayPal.',
    category: 'Commandes et livraison'
  },
  {
    id: '2',
    question: 'Comment suivre ma commande ?',
    answer: 'Après validation de votre commande, vous recevrez un email de confirmation avec un numéro de suivi. Vous pouvez également nous contacter via WhatsApp pour le suivi.',
    category: 'Commandes et livraison'
  },
  {
    id: '3',
    question: 'La livraison est-elle vraiment gratuite partout au Maroc ?',
    answer: 'Oui ! Nous offrons la livraison gratuite dans tout le Maroc, sans minimum d\'achat. Cela fait partie de notre engagement envers nos clients.',
    category: 'Commandes et livraison'
  },
  {
    id: '4',
    question: 'Quels sont les délais de livraison ?',
    answer: 'Les délais de livraison sont généralement de 2-3 jours ouvrables pour les grandes villes et 3-5 jours pour les zones rurales.',
    category: 'Commandes et livraison'
  },

  // Paiement
  {
    id: '5',
    question: 'Quels modes de paiement acceptez-vous ?',
    answer: 'Nous acceptons le paiement à la livraison (cash) et PayPal. Avec PayPal, vous pouvez payer par carte bancaire sans créer de compte.',
    category: 'Paiement'
  },
  {
    id: '6',
    question: 'Comment fonctionne la conversion MAD vers EUR sur PayPal ?',
    answer: 'Le paiement via PayPal sera effectué en Euro au taux de change en vigueur. PayPal gère automatiquement la conversion et applique son taux de change officiel.',
    category: 'Paiement'
  },
  {
    id: '7',
    question: 'Mes informations de paiement sont-elles sécurisées ?',
    answer: 'Absolument ! Nous utilisons des protocoles de sécurité SSL et PayPal pour protéger vos informations. Aucune donnée bancaire n\'est stockée sur nos serveurs.',
    category: 'Paiement'
  },

  // Retours et garantie
  {
    id: '8',
    question: 'Quelle est votre politique de retour ?',
    answer: 'Vous disposez de 15 jours à partir de la réception pour retourner un produit non satisfaisant. Le produit doit être dans son état d\'origine avec tous les accessoires.',
    category: 'Retours et garantie'
  },
  {
    id: '9',
    question: 'Comment procéder en cas de produit défectueux ?',
    answer: 'Contactez-nous immédiatement via WhatsApp ou email avec des photos du problème. Nous organiserons un échange ou un remboursement rapide.',
    category: 'Retours et garantie'
  },

  // Compte client
  {
    id: '10',
    question: 'Dois-je créer un compte pour commander ?',
    answer: 'Non, vous pouvez commander en tant qu\'invité. Cependant, créer un compte vous permet de suivre vos commandes et de bénéficier d\'offres exclusives.',
    category: 'Compte client'
  },

  // Produits
  {
    id: '11',
    question: 'Comment choisir le bon produit pour mon appareil ?',
    answer: 'Chaque fiche produit indique la compatibilité. En cas de doute, contactez-nous avec le modèle exact de votre appareil pour une recommandation personnalisée.',
    category: 'Produits'
  },
  {
    id: '12',
    question: 'Vos chargeurs sans fil sont-ils compatibles avec tous les iPhone ?',
    answer: 'Nos chargeurs MagSafe sont compatibles avec iPhone 12 et modèles plus récents. Pour les anciens modèles, nous avons des chargeurs sans fil standards.',
    category: 'Produits'
  }
];

const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(faqData.map(item => item.category)))];

  const filteredFAQ = selectedCategory === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Centre d'Aide & FAQ</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trouvez rapidement les réponses à vos questions. 
              Si vous ne trouvez pas ce que vous cherchez, contactez-nous !
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  {category === 'all' ? 'Toutes les catégories' : category}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQ.map(item => (
              <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{item.question}</h3>
                    <span className="text-sm text-blue-600">{item.category}</span>
                  </div>
                  {openItems.includes(item.id) ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                
                {openItems.includes(item.id) && (
                  <div className="px-6 pb-6 pt-0">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 bg-blue-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Vous ne trouvez pas votre réponse ?
            </h2>
            <p className="text-gray-600 mb-6">
              Notre équipe de support est là pour vous aider. 
              Contactez-nous et nous vous répondrons rapidement !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/212600000000"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Contacter via WhatsApp
              </a>
              <a 
                href="mailto:contact@reenweezelectro.ma"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Envoyer un Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;