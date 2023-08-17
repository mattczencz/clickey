import FeaturedImageLink from '@/components/FeaturedImageLink';
import Stripe from 'stripe';

async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
    apiVersion: '2022-11-15'
  });
  const res = await stripe.prices.list({
    expand: ['data.product'],
    limit: 100
  });
  const prices = res.data;
  return prices;
}

export default async function Home() {
  const products = await getStripeProducts();
  const featuredProducts = products.filter(({ product }: Stripe.Price) => {
    const { metadata } = product as Stripe.Product;
    return metadata.featured === 'true';
  }).sort((a, b) => a.created - b.created);

  return (
    <>
      {
        featuredProducts.map(({ product }: Stripe.Price) => {
          const { id, images, name, description, metadata } = product as Stripe.Product;
          return (
            <FeaturedImageLink
              key={id}
              image={images[0]}
              name={name}
              headline={description}
              link={`/${ metadata.category }/${ id }`}
            />
          );
        })
      }
    </>
  );
}
