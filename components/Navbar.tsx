import Link from 'next/link';
import { LuUser, LuShoppingCart } from 'react-icons/lu';

const navLinks = [
  {
    route: '/keyboards',
    label: 'Keyboards',
  },
  {
    route: '/keycaps',
    label: 'Keycaps',
  },
  {
    route: '/switches',
    label: 'Switches',
  },
  {
    route: '/accessories',
    label: 'Accessories',
  }
];

const Navbar = () => {
  return (
    <nav className='main-nav'>
      <div>
        <Link href='/' className='text-2xl font-bold hover-accent'>
          Clickey
        </Link>
      </div>
      <ul className='nav-items'>
        {
          navLinks.map(link => (
            <li key={link.label}>
              <Link href={link.route} className='hover-accent'>
                {link.label}
              </Link>
            </li>
          ))
        }
      </ul>
      <ul className='utility-nav'>
        <li>Search</li> {/* TODO: implement search feature */}
        <li>
          <Link href='/account' className='hover-accent'>
            {
              <LuUser />
            }
          </Link>
        </li> {/* TODO: implement auth / account login */}
        <li>
          <Link href='/cart' className='hover-accent'>
            {
              <LuShoppingCart />
            }
          </Link>
        </li> {/* TODO: implement cart */}
      </ul>
    </nav>
  );
};

export default Navbar;