export default function PageHero({ title, description }) {
  return (
    <section className="bg-white border-b border-stone">
      <div className="container-shell py-16 md:py-20">
        <h1 className="text-4xl md:text-5xl font-serif text-forest">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg text-muted leading-relaxed">{description}</p>
      </div>
    </section>
  );
}
