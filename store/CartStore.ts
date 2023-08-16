import { Product } from '@/lib/products';
import { create } from 'zustand';

interface CartState {
  count: number;
  items: Product[];
  addItem: (item: Product) => void;
}

// TODO: Create initial object to pull from in session storage if there isn't one already, then pull from that instead of setting initial values
export const useCartStore = create<CartState>((set) => ({
  count: 0, // cart count initially set to 0
  items: [], // an empty cart to begin with
  addItem: (item: Product) => {
    set((state) => (
      {
        items: [...state.items, item], // item item being passed through to array
        count: state.count + 1 // add 1 to the cart count
      }
    ));
  },
}));