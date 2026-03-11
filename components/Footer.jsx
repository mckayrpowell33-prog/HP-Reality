import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-stone bg-white">
      <div className="container-shell py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            {/* Replace this brand text with an alternate light logo later (ex: /public/logo-light.png). */}
            <p className="font-serif text-3xl text-forest">Hailey Powell Realty</p>
            <p className="mt-4 max-w-md text-muted leading-relaxed">
              A thoughtful Boise-area real estate practice focused on honest communication, local insight, and
              personalized support for every stage of your move.
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-taupe">Quick Links</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/search-homes" className="hover:text-forest">Search Homes</Link></li>
              <li><Link href="/featured-listings" className="hover:text-forest">Featured Listings</Link></li>
              <li><Link href="/boise-areas" className="hover:text-forest">Boise Areas</Link></li>
              <li><Link href="/contact" className="hover:text-forest">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-taupe">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>(208) 433-1319</li>
              <li>Haileysnewrealtoremail@HPreality.com</li>
              <li>
                {/* Update this Instagram URL later with the official profile link. */}
                <a href="#" className="hover:text-forest">Instagram (placeholder)</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-stone pt-6 text-xs text-muted">
          © {new Date().getFullYear()} Hailey Powell Realty. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
