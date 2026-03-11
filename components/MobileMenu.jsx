'use client';

import { useState } from 'react';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/search-homes', label: 'Search Homes' },
  { href: '/featured-listings', label: 'Featured Listings' },
  { href: '/boise-areas', label: 'Boise Areas' },
  { href: '/about', label: 'About' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-md border border-stone px-3 py-2 text-sm font-medium text-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
        aria-expanded={open}
        aria-controls="mobile-nav"
      >
        Menu
      </button>
      {open ? (
        <nav id="mobile-nav" className="absolute left-0 right-0 top-full border-y border-stone bg-white shadow-soft">
          <ul className="container-shell py-4 space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-slate-700 hover:bg-stone hover:text-forest"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
