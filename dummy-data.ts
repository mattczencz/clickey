export const navLinks = [
  {
    route: '/keyboards',
    label: 'Keyboards',
  },
  {
    route: '/keycaps',
    label: 'Keycaps',
  },
  {
    route: '/switches',
    label: 'Switches',
  },
  {
    route: '/accessories',
    label: 'Accessories',
  }
];

export interface FeaturedProduct {
  name: string;
  headline: string;
  link: string;
  image: {
    url: string;
    alt: string | null;
  };
}

export const featuredProducts: FeaturedProduct[] = [
  {
    name: 'StealthGlide',
    headline: 'Silent precision for seamless typing',
    link: '/keyboards/stealthglide',
    image: {
      url: 'https://images.unsplash.com/photo-1555532538-dcdbd01d373d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3364&q=80',
      alt: '',
    },
  },
  {
    name: 'NeoFusion Pro',
    headline: 'Elevate your typing experience to the next level',
    link: '/keyboards/neofusion-pro',
    image: {
      url: 'https://images.unsplash.com/photo-1595044426077-d36d9236d54a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: '',
    }
  },
  {
    name: 'Luminex Prism',
    headline: 'Illuminate your work with vibrant typing brilliance',
    link: '/keyboards/luminex-prism',
    image: {
      url: 'https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2146&q=80',
      alt: '',
    }
  }
];