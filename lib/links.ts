export type Link = {
  route: string;
  label: string;
};

export const navLinks: Link[] = [
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