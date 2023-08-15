import FeaturedImageLink from '@/components/FeaturedImageLink';
import { featuredProducts } from '@/dummy-data';

export default function Home() {
  return (
    <>
      {
        featuredProducts.map((product) => (
          <FeaturedImageLink
            key={product.name}
            image={product.image}
            name={product.name}
            headline={product.headline}
            link={product.link}
          />
        ))
      }
    </>
  );
}
