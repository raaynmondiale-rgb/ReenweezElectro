import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Stations & Supports de Recharge',
    description: 'Stations de recharge sans fil et supports magnétiques',
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg',
    slug: 'stations-supports'
  },
  {
    id: '2',
    name: 'Protections & Accessoires',
    description: 'Coques, protections d\'écran et accessoires de protection',
    image: 'https://images.pexels.com/photos/2643113/pexels-photo-2643113.jpeg',
    slug: 'protections-accessoires'
  },
  {
    id: '3',
    name: 'Batteries & Power Banks',
    description: 'Batteries externes et power banks haute capacité',
    image: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg',
    slug: 'batteries-power-banks'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Station de Recharge MagSafe 3-en-1',
    description: 'Station de recharge sans fil compatible iPhone, Apple Watch et AirPods. Design élégant et recharge rapide 15W.',
    price: 599,
    originalPrice: 799,
    images: [
      'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg',
      'https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg'
    ],
    category: 'stations-supports',
    inStock: true,
    stockCount: 25,
    features: ['Recharge sans fil 15W', 'Compatible MagSafe', 'Design premium', 'Sécurité intégrée'],
    compatibility: ['iPhone 12 et plus récent', 'Apple Watch', 'AirPods'],
    power: '15W',
    rating: 4.8,
    reviews: [
      {
        id: '1',
        customerName: 'Ahmed M.',
        rating: 5,
        comment: 'Excellent produit, recharge très rapide et design magnifique!',
        date: '2024-01-15'
      }
    ]
  },
  {
    id: '2',
    name: 'Support Magnétique Voiture',
    description: 'Support magnétique pour voiture compatible MagSafe. Installation facile sur ventilation ou tableau de bord.',
    price: 199,
    images: [
      'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg'
    ],
    category: 'stations-supports',
    inStock: true,
    stockCount: 50,
    features: ['Magnétique forte', 'Installation facile', 'Rotation 360°', 'Compatible MagSafe'],
    compatibility: ['iPhone 12 et plus récent', 'Tous smartphones avec adaptateur'],
    rating: 4.6,
    reviews: []
  },
  {
    id: '3',
    name: 'Coque Transparente MagSafe',
    description: 'Coque de protection transparente compatible MagSafe. Protection optimale avec clarté cristalline.',
    price: 149,
    originalPrice: 199,
    images: [
      'https://images.pexels.com/photos/2643113/pexels-photo-2643113.jpeg'
    ],
    category: 'protections-accessoires',
    inStock: true,
    stockCount: 75,
    features: ['Transparence cristalline', 'Compatible MagSafe', 'Protection anti-chute', 'Matériau premium'],
    compatibility: ['iPhone 14', 'iPhone 15', 'iPhone 16'],
    rating: 4.7,
    reviews: []
  },
  {
    id: '4',
    name: 'Power Bank MagSafe 10000mAh',
    description: 'Batterie externe magnétique MagSafe 10000mAh. Recharge sans fil et filaire avec affichage LED.',
    price: 449,
    images: [
      'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg'
    ],
    category: 'batteries-power-banks',
    inStock: true,
    stockCount: 30,
    features: ['10000mAh', 'Recharge magnétique', 'Affichage LED', 'Recharge rapide 22.5W'],
    compatibility: ['iPhone 12 et plus récent', 'Tous smartphones via USB-C'],
    capacity: '10000mAh',
    power: '22.5W',
    rating: 4.9,
    reviews: []
  }
];