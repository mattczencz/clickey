import { useMemo } from 'react';
import PageSubHeader from '@/components/PageSubHeader';
import { Product, products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import ProductGrid from '@/components/ProductGrid';

const KeyboardsPage = () => {
  const keyboards = useMemo(
    () => products.filter((product: Product) => product.category === 'keyboard'),
    [products]
  );

  return (
    <>
      <PageSubHeader title='Keyboards' />
      <ProductGrid>
        {
          keyboards.map((keyboard: Product) => (
            <ProductCard
              key={keyboard.id}
              {...keyboard}
            />
          ))
        }
      </ProductGrid>
    </>
  );
};

export default KeyboardsPage;