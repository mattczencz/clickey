import Stripe from 'stripe';

export type Cart = {
  count: number;
  items: Stripe.Price[];
};

export type StripeProductMetadata = {
  category: string;
  featured: string;
  rating_score: string;
  total_reviews: string;
};