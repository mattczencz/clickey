import Image from 'next/image';
import Link from 'next/link';

interface Props {
  image: {
    url: string;
    alt?: string;
  };
  linkRoute: string;
  productName: string;
  headline: string;
}

const FeaturedImageLink = ({ image, linkRoute, productName, headline }: Props) => {
  return (
    <Link href={linkRoute} className='relative w-full h-[1000px] flex justify-center items-center text-center'>
      <Image
        src={image.url}
        alt={image.alt ?? ''}
        fill
        className='object-cover'
      />
      <div className='absolute top-0 right-0 left-0 bottom-0 bg-black/50' />
      <div className='flex flex-col relative z-[1] text-white gap-4'>
        <p className='text-xl'>{headline}</p>
        <h2 className='text-white text-7xl'>{productName}</h2>
      </div>
    </Link>
  );
};

export default FeaturedImageLink;