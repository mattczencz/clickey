'use client';

import Link from 'next/link';
import { useState } from 'react';
import { LuUser, LuShoppingCart, LuAlignRight } from 'react-icons/lu';
import MobileNavMenu from './MobileNavMenu';
import { navLinks } from '@/dummy-data';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      {/* Desktop Navigation */}
      <div className='main-nav'>
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
        <div className='lg:hidden'>
          <LuAlignRight
            size={24}
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNavMenu open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Navbar;