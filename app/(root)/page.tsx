import FeaturedImageLink from '@/components/FeaturedImageLink';
import { featuredProducts } from '@/dummy-data';

export default function Home() {
  return (
    <>
      {
        featuredProducts.map((product) => (
          <FeaturedImageLink
            image={product.image}
            productName={product.name}
            headline={product.headline}
            linkRoute={product.link}
          />
        ))
      }
    </>
  );
}
