import { Product } from './products';

export type Cart = {
  count: number;
  items: Product[];
};