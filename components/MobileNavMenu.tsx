import { navLinks } from '@/lib/links';
import Link from 'next/link';
import { LuShoppingCart, LuUser } from 'react-icons/lu';
import { SignInButton, UserButton } from '@clerk/nextjs';
import { SignedIn, SignedOut } from '@clerk/nextjs/app-beta/client';
interface Props {
  open: boolean;
  setOpen: Function;
}

const MobileNavMenu = ({ open, setOpen }: Props) => {
  return (
    <>
      <ul className={`${ open ? 'flex' : 'hidden' } mobile-nav`}>
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
          <SignedOut>
            <SignInButton>
              <li>
                <button className=''>
                  Sign In
                </button>
              </li>
            </SignInButton>
          </SignedOut>
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