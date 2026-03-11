import PageHero from '@/components/PageHero';
import ListingCard from '@/components/ListingCard';
import listings from '@/data/listings';

export default function FeaturedListingsPage() {
  const featured = listings.filter((listing) => listing.featured);

  return (
    <>
      <PageHero
        title="Featured Listings"
        description="A focused look at highlighted properties currently available in Boise and nearby communities."
      />
      <section className="py-14 bg-stone">
        <div className="container-shell">
          <div className="mb-6 flex items-center gap-3 text-sm text-slate-700">
            <label htmlFor="sort">Sort:</label>
            <select id="sort" className="rounded-md border border-stone bg-white px-3 py-2">
              <option>Featured First</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
