export type Product = {
  id: string;
  name: string;
  description: {
    short: string;
    long: string;
  };
  rating?: {
    score?: number;
    total_reviews?: number;
  };
  price: string;
  image: {
    url: string;
    alt?: string;
  };
  featured: boolean;
  category: 'keyboard' | 'keycap' | 'switch' | 'accessory';
};

export const products: Product[] = [
  {
    id: 'stealthglide',
    name: 'StealthGlide',
    description: {
      short: 'Silent precision for seamless typing',
      long: 'Silent precision for seamless typing',
    },
    rating: {
      score: 4.5,
      total_reviews: 43,
    },
    price: '$149.99',
    image: {
      url: 'https://images.unsplash.com/photo-1555532538-dcdbd01d373d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3364&q=80',
      alt: '',
    },
    featured: true,
    category: 'keyboard',
  },
  {
    id: 'neofusion-pro',
    name: 'NeoFusion Pro',
    description: {
      short: 'Elevate your typing experience',
      long: 'Elevate your typing experience to the next level',
    },
    rating: {
      score: 4,
      total_reviews: 16,
    },
    price: '$89.99',
    image: {
      url: 'https://images.unsplash.com/photo-1595044426077-d36d9236d54a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: '',
    },
    featured: true,
    category: 'keyboard',
  },
  {
    id: 'luminex-prism',
    name: 'Luminex Prism',
    description: {
      short: 'Illuminate your work',
      long: 'Illuminate your work with vibrant typing brilliance',
    },
    rating: {
      score: 4.8,
      total_reviews: 122,
    },
    price: '$135.99',
    image: {
      url: 'https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2146&q=80',
      alt: '',
    },
    featured: true,
    category: 'keyboard',
  },
  {
    id: 'retro-clack',
    name: 'RetroClack',
    description: {
      short: 'Vintage Vibes, Modern Performance.',
      long: 'Vintage Vibes, Modern Performance.',
    },
    rating: {
      score: 4,
      total_reviews: 22,
    },
    price: '$59.99',
    image: {
      url: 'https://images.unsplash.com/photo-1560762484-813fc97650a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      alt: '',
    },
    featured: false,
    category: 'keyboard',
  },
  {
    id: 'aquaglide-x',
    name: 'AquaGlide X',
    description: {
      short: 'Dive into Effortless Typing Bliss.',
      long: 'Dive into Effortless Typing Bliss.',
    },
    rating: {
      score: 3.7,
      total_reviews: 7,
    },
    price: '$87.99',
    image: {
      url: 'https://images.unsplash.com/photo-1563191911-e65f8655ebf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: '',
    },
    featured: false,
    category: 'keyboard',
  },
  {
    id: 'technova-elite',
    name: 'TechNova Elite',
    description: {
      short: 'Where Technology Meets Typing Artistry.',
      long: 'Where Technology Meets Typing Artistry.',
    },
    rating: {
      score: undefined,
      total_reviews: undefined,
    },
    price: '$149.99',
    image: {
      url: 'https://images.unsplash.com/photo-1574012716378-0ca6f4c18c08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1717&q=80',
      alt: '',
    },
    featured: false,
    category: 'keyboard',
  },
  {
    id: 'ecoecho-pro',
    name: 'EcoEcho Pro',
    description: {
      short: 'Sustainable Typing, Uncompromised Quality.',
      long: 'Sustainable Typing, Uncompromised Quality.',
    },
    rating: {
      score: 4.2,
      total_reviews: 14,
    },
    price: '$99.99',
    image: {
      url: 'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80',
      alt: '',
    },
    featured: false,
    category: 'keyboard',
  },
  {
    id: 'galactic-pulse',
    name: 'Galactic Pulse',
    description: {
      short: 'Illuminate Your Universe, One Keystroke at a Time.',
      long: 'Illuminate Your Universe, One Keystroke at a Time.',
    },
    rating: {
      score: 4.2,
      total_reviews: 14,
    },
    price: '$99.99',
    image: {
      url: 'https://images.unsplash.com/photo-1617096819670-6de2869bbd2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80',
      alt: '',
    },
    featured: false,
    category: 'keyboard',
  },
  {
    id: 'zenith-touch',
    name: 'Zenith Touch',
    description: {
      short: 'Reach the Pinnacle of Typing Comfort.',
      long: 'Reach the Pinnacle of Typing Comfort.',
    },
    rating: {
      score: 3.5,
      total_reviews: 64,
    },
    price: '$49.99',
    image: {
      url: 'https://images.unsplash.com/photo-1558050032-160f36233a07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      alt: '',
    },
    featured: false,
    category: 'keyboard',
  },
  {
    id: 'infinity-flux',
    name: 'Infinity Flux',
    description: {
      short: 'Seamless Typing, Boundless Possibilities.',
      long: 'Seamless Typing, Boundless Possibilities.',
    },
    rating: {
      score: 4,
      total_reviews: 64,
    },
    price: '$119.99',
    image: {
      url: 'https://images.unsplash.com/photo-1520092352425-9699926a9b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      alt: '',
    },
    featured: false,
    category: 'keyboard',
  },
];