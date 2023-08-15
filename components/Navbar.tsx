'use client';

import Link from 'next/link';
import { useState } from 'react';
import { LuShoppingCart, LuAlignRight, LuSearch } from 'react-icons/lu';
import { SignInButton, UserButton } from '@clerk/nextjs';
import { SignedIn, SignedOut } from '@clerk/nextjs/app-beta/client';
import { navLinks } from '@/lib/links';
import MobileNavMenu from './MobileNavMenu';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='shadow-md bg-white'>
      <div className='m-auto max-w-7xl'>
        {/* Desktop Navigation */}
        <div className='main-nav'>
          <div>
            <Link href='/' className='text-2xl font-bold hover-accent' scroll={false}>
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
            <SignedIn>
              <UserButton afterSignOutUrl='/' />
            </SignedIn>
            <SignedOut>
              <SignInButton mode='modal'>
                <li>
                  <button className='text-lg'>
                    Sign In
                  </button>
                </li>
              </SignInButton>
            </SignedOut>
            <li className='hover-accent hover:cursor-pointer'>
              <LuSearch />
            </li> {/* TODO: implement search feature */}
            <li>
              <Link href='/cart' className='hover-accent'>
                {
                  <LuShoppingCart />
                }
              </Link>
            </li> {/* TODO: implement cart */}
          </ul>
          <div className='flex lg:hidden gap-4 items-center'>
            <SignedIn>
              <UserButton afterSignOutUrl='/' />
            </SignedIn>
            <SignedOut>
              <SignInButton mode='modal'>
                <button className='text-lg'>
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <LuAlignRight
              size={24}
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileNavMenu open={open} setOpen={setOpen} />
      </div>
    </nav>
  );
};

export default Navbar;