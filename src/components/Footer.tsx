import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, MessageCircle, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-bold">ReenweezElectro</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Votre destination premium pour les accessoires électroniques au Maroc. 
              Qualité, innovation et service client exceptionnel.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Instagram className="w-5 h-5 text-black" />
              </a>
              <a href="https://facebook.com" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Facebook className="w-5 h-5 text-black" />
              </a>
              <a href="https://youtube.com" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Youtube className="w-5 h-5 text-black" />
              </a>
            </div>
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Utiles</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">Aide & FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Nous Contacter</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Politique de Retour</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Conditions d'Utilisation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="https://wa.me/212600000000" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              <a href="mailto:contact@reenweezelectro.ma" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400">
                Livraison gratuite partout au Maroc<br/>
                Garantie 15 jours
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ReenweezElectro.ma. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;