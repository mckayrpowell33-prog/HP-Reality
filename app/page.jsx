import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import ListingCard from '@/components/ListingCard';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';
import listings from '@/data/listings';
import testimonials from '@/data/testimonials';

export default function HomePage() {
  const featuredListings = listings.filter((listing) => listing.featured).slice(0, 6);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <>
      <Hero />

      <section className="py-20 bg-stone">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Local Perspective"
            title="Real Estate Guidance Rooted in the Treasure Valley"
            text="At Hailey Powell Realty, every conversation starts with your goals. We combine local Boise-area insight with thoughtful service so buyers and sellers can move forward with confidence and clarity."
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Featured Listings"
            title="Homes Across Boise, Meridian, Eagle, Kuna, and Star"
            text="Explore a curated set of available homes that reflect the lifestyle and value buyers are seeking in the Boise metro area."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Client Stories"
            title="Trusted by Buyers and Sellers Across the Valley"
            text="Real experiences from clients who wanted a calm, honest, and strategic approach to real estate."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
