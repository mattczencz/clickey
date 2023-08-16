import { Product } from '@/lib/products';
import Link from 'next/link';
import Image from 'next/image';
import { Rating } from '@mui/material';

const ProductCard = ({ id, name, rating, price, image, category }: Product) => {
  return (
    <Link href={`/${ category !== 'switch' ? category : category + 'e' }s/${ id }`} className='flex flex-col gap-2'>
      <div className='relative w-full h-96 rounded-xl overflow-hidden'>
        <Image
          src={image.url}
          alt={image.alt ?? ''}
          fill
          className='object-cover'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='text-lg lg:text-2xl font-bold'>{name}</h3>
        <div className='flex items-center gap-4'>
          <Rating
            name='read-only'
            value={rating?.score ?? 0}
            precision={0.1}
            readOnly
          />
          <p>{rating?.total_reviews ?? 0} Review{rating?.total_reviews !== 1 ? 's' : ''}</p>
        </div>
        <p>Starting at {price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;