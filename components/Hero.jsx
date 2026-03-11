import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative border-b border-stone bg-white">
      {/* A Boise foothills or skyline background image can be added here later. */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone via-white to-white" aria-hidden="true" />
      <div className="relative container-shell py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-taupe">Boise Area Real Estate</p>
          <h1 className="mt-4 text-5xl md:text-6xl font-serif text-forest leading-tight">
            Find Your Place in Boise and Beyond
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            Helping buyers and sellers across Boise, Meridian, Eagle, Kuna, and Star with clear guidance, steady
            communication, and local expertise you can trust.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/search-homes" className="rounded-md bg-forest px-5 py-3 text-sm font-semibold text-white hover:bg-[#1d3f32]">
              Search Homes
            </Link>
            <Link href="/contact" className="rounded-md border border-forest px-5 py-3 text-sm font-semibold text-forest hover:bg-forest hover:text-white">
              Contact Hailey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
