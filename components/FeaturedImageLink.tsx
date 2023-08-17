import Image from 'next/image';
import Link from 'next/link';

interface Props {
  image: string;
  link: string;
  name: string;
  headline: string | null;
}

const FeaturedImageLink = ({ image, link, name, headline }: Props) => {
  return (
    <Link href={link} className='relative w-full h-[400px] lg:h-[1000px] flex justify-center items-center text-center'>
      <Image
        src={image}
        alt={name}
        fill
        className='object-cover'
      />
      <div className='absolute top-0 right-0 left-0 bottom-0 bg-black/70' />
      <div className='flex flex-col relative z-[1] text-white gap-4 max-w-full px-4'>
        <p className='text-lg lg:text-xl'>{headline}</p>
        <h2 className='text-white text-4xl lg:text-7xl font-bold'>{name}</h2>
      </div>
    </Link>
  );
};

export default FeaturedImageLink;