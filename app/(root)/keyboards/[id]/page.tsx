'use client';

import { Product, products } from '@/lib/products';
import { useCartStore } from '@/store/CartStore';
import { useMemo } from 'react';

interface Props {
  params: {
    id: string;
  };
}

const KeyboardDetailsPage = ({ params }: Props) => {
  const addItem = useCartStore((state) => state.addItem);
  const keyboard = useMemo(() => products.find((item: Product) => item.id === params.id), [products]);

  if (keyboard) {
    return (
      <section>
        <h1>{keyboard.name}</h1>
        <p>{keyboard.description.long}</p>
        <button onClick={() => addItem(keyboard)}>Add to cart</button>
      </section>
    );
  } else {
    return (
      <h1>Loading product...</h1>
    );
  }
};

export default KeyboardDetailsPage;