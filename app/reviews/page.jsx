import PageHero from '@/components/PageHero';
import TestimonialCard from '@/components/TestimonialCard';
import testimonials from '@/data/testimonials';

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        title="Client Reviews"
        description="Kind words from buyers and sellers who partnered with Hailey for thoughtful guidance and a steady experience."
      />
      <section className="py-14 bg-stone">
        <div className="container-shell">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-dashed border-taupe bg-white p-8 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-taupe">Google Reviews Placeholder</p>
            <p className="mt-3 text-muted">This section is reserved for an embedded Google Reviews widget.</p>
            {/* Future Google Reviews embed code should go here. */}
          </div>
        </div>
      </section>
    </>
  );
}
