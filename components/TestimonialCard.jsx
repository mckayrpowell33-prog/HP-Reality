export default function TestimonialCard({ testimonial }) {
  return (
    <article className="bg-white rounded-xl border border-stone shadow-soft p-6">
      <p className="text-lg text-forest" aria-label={`${testimonial.rating} star review`}>
        {'★'.repeat(testimonial.rating)}
      </p>
      <p className="mt-4 text-muted leading-relaxed">“{testimonial.quote}”</p>
      <p className="mt-6 font-semibold text-slate-800">{testimonial.name}</p>
      <p className="text-sm text-taupe">{testimonial.city}</p>
    </article>
  );
}
