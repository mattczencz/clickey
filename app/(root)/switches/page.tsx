import { useMemo } from 'react';
import PageSubHeader from '@/components/PageSubHeader';
import { Product, products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import ProductGrid from '@/components/ProductGrid';

const SwitchesPage = () => {
  const switches = useMemo(
    () => products.filter((product: Product) => product.category === 'switch'),
    [products]
  );

  return (
    <>
      <PageSubHeader title='Switches' />
      <ProductGrid>
        {
          switches.map((item: Product) => (
            <ProductCard
              key={item.id}
              {...item}
            />
          ))
        }
      </ProductGrid>
    </>
  );
};

export default SwitchesPage;