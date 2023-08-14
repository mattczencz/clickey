import { navLinks } from '@/dummy-data';
import Link from 'next/link';
import { LuShoppingCart, LuUser } from 'react-icons/lu';

interface Props {
  open: boolean;
  setOpen: Function;
}

const MobileNavMenu = ({ open, setOpen }: Props) => {
  return (
    <>
      <ul className={`${open ? 'flex' : 'hidden'} mobile-nav`}>
        <div className='flex flex-col gap-4 border rounded-xl p-2'>
          {
            navLinks.map(link => (
              <li key={link.label}>
                <Link href={link.route} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))
          }
        </div>
        <div className='flex flex-col gap-4 p-2 border rounded-xl'>
          <li>
            <Link href='/account' className='flex justify-between gap-4 items-center'>
              Account {<LuUser />}
            </Link>
          </li> {/* TODO: implement auth / account login */}
          <li>
            <Link href='/cart' className='flex justify-between gap-4 items-center'>
              Cart {<LuShoppingCart />}
            </Link>
          </li> {/* TODO: implement cart */}
          <li className='p-2 border rounded-xl'>Search</li> {/* TODO: implement search feature */}
        </div>

      </ul>
    </>
  );
};

export default MobileNavMenu;