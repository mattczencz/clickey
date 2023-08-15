import { useMemo } from 'react';
import FeaturedImageLink from '@/components/FeaturedImageLink';
import { Product, products } from '@/lib/products';

export default function Home() {
  const featuredProducts = useMemo(
    () => products.filter((product: Product) => product.featured),
    [products]
  );

  return (
    <>
      {
        featuredProducts.map((product: Product) => (
          <FeaturedImageLink
            key={product.id}
            image={product.image}
            name={product.name}
            headline={product.description.short}
            link={`/${ product.category }s/${ product.id }`}
          />
        ))
      }
    </>
  );
}
