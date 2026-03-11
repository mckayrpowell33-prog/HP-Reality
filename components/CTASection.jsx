import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20">
      <div className="container-shell">
        <div className="rounded-2xl bg-forest px-8 py-12 md:px-12 md:py-14 text-white shadow-soft">
          <h2 className="text-3xl md:text-4xl font-serif">Ready to Find the Right Home in the Boise Area?</h2>
          <p className="mt-4 max-w-2xl text-stone/90 leading-relaxed">
            Whether you are preparing to buy your first home or planning your next move, Hailey offers sincere,
            local guidance backed by long-standing market experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/search-homes" className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-forest hover:bg-stone">
              Search Homes
            </Link>
            <Link href="/contact" className="rounded-md border border-white px-5 py-3 text-sm font-semibold hover:bg-white/10">
              Contact Hailey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
