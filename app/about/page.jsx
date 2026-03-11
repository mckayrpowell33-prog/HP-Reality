import PageHero from '@/components/PageHero';

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Hailey Powell Realty"
        description="A personalized real estate practice built on experience, sincere guidance, and steady support for clients across the Boise area."
      />
      <section className="py-14 bg-stone">
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <div className="rounded-xl border border-stone bg-gradient-to-br from-slate-100 to-white p-6 shadow-soft min-h-80">
            <p className="text-xs uppercase tracking-[0.2em] text-taupe">Photo Placeholder</p>
            <p className="mt-3 text-muted">Add a professional portrait or local lifestyle image here later.</p>
          </div>
          <article className="rounded-xl border border-stone bg-white p-8 shadow-soft">
            <h2 className="text-3xl font-serif text-forest">A Local Approach with Long-Term Perspective</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Hailey brings 30 years of property management experience and a service mindset centered on sincere
              guidance, honest communication, and personalized support for each client.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Clients value a no break-off fee approach and a process that stays focused on their goals, timeline,
              and comfort level from the first showing through closing day.
            </p>
          </article>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container-shell">
          <div className="rounded-xl border border-stone p-8 shadow-soft">
            <h2 className="text-3xl font-serif text-forest">Why Clients Work With Hailey</h2>
            <ul className="mt-6 space-y-3 text-muted list-disc pl-5">
              <li>Clear, honest communication from start to finish.</li>
              <li>Steady support tailored to your needs and comfort level.</li>
              <li>Thoughtful strategy grounded in local Boise-area knowledge.</li>
              <li>A sincere focus on long-term relationships, not quick transactions.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
