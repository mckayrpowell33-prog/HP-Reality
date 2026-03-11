export default function ListingCard({ listing }) {
  return (
    <article className="bg-white rounded-xl shadow-soft border border-stone overflow-hidden flex flex-col">
      <div className="h-44 bg-gradient-to-br from-stone to-slate-100 border-b border-stone px-4 py-3">
        <p className="text-xs uppercase tracking-widest text-taupe">Image Placeholder</p>
        <p className="mt-2 text-sm text-muted">{listing.image}</p>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <p className="text-2xl font-serif text-forest">{listing.price}</p>
        <p className="mt-2 text-sm text-muted">{listing.address}, {listing.city}, {listing.state}</p>
        <p className="mt-3 text-sm text-muted">{listing.beds} Beds • {listing.baths} Baths • {listing.sqft} Sq Ft</p>
        <p className="mt-4 text-sm leading-relaxed text-slate-700 flex-1">{listing.description}</p>
        <button className="mt-6 inline-flex items-center justify-center rounded-md bg-forest px-4 py-2 text-sm font-medium text-white hover:bg-[#1d3f32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest">
          View Listing
        </button>
      </div>
    </article>
  );
}
