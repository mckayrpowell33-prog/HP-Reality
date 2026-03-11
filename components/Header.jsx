import Link from 'next/link';
import MobileMenu from './MobileMenu';

const navLinks = [
  { href: '/search-homes', label: 'Search Homes' },
  { href: '/featured-listings', label: 'Featured Listings' },
  { href: '/boise-areas', label: 'Boise Areas' },
  { href: '/about', label: 'About' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone bg-white/95 backdrop-blur">
      <div className="container-shell relative flex h-20 items-center justify-between gap-6">
        <Link href="/" className="text-forest">
          {/* Replace this text logo with an image logo later (ex: /public/logo-primary.png). */}
          <p className="font-serif text-2xl leading-none">Hailey Powell Realty</p>
          <p className="mt-1 text-xs uppercase tracking-[0.22em] text-taupe">Boise Area Homes</p>
        </Link>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-slate-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-forest">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block">
          <Link href="/search-homes" className="rounded-md bg-forest px-4 py-2 text-sm font-semibold text-white hover:bg-[#1d3f32]">
            Search Homes
          </Link>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
