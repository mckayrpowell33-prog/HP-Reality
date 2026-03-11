import PageHero from '@/components/PageHero';
import ListingCard from '@/components/ListingCard';
import listings from '@/data/listings';

export default function SearchHomesPage() {
  return (
    <>
      <PageHero
        title="Search Homes"
        description="Start your Boise-area search with this simple filter layout. It is designed as a clean starter and can be connected to live listing data later."
      />

      <section className="py-14 bg-stone">
        <div className="container-shell">
          {/* Real IDX search can be integrated later. */}
          <form className="grid gap-4 rounded-xl border border-stone bg-white p-6 shadow-soft md:grid-cols-2 lg:grid-cols-3">
            <label className="text-sm text-slate-700">Price Range<input type="text" className="mt-1 w-full rounded-md border border-stone px-3 py-2" placeholder="$400,000 - $800,000" /></label>
            <label className="text-sm text-slate-700">Beds<input type="number" className="mt-1 w-full rounded-md border border-stone px-3 py-2" placeholder="3" /></label>
            <label className="text-sm text-slate-700">Baths<input type="number" className="mt-1 w-full rounded-md border border-stone px-3 py-2" placeholder="2" /></label>
            <label className="text-sm text-slate-700">Property Type<select className="mt-1 w-full rounded-md border border-stone px-3 py-2"><option>Any</option><option>Single Family</option><option>Townhome</option><option>Condo</option></select></label>
            <label className="text-sm text-slate-700">City<select className="mt-1 w-full rounded-md border border-stone px-3 py-2"><option>Any</option><option>Boise</option><option>Meridian</option><option>Eagle</option><option>Kuna</option><option>Star</option></select></label>
            <label className="text-sm text-slate-700">Keywords<input type="text" className="mt-1 w-full rounded-md border border-stone px-3 py-2" placeholder="Foothills, single-level, etc." /></label>
          </form>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
