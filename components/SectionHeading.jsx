export default function SectionHeading({ eyebrow, title, text, centered = false }) {
  return (
    <div className={centered ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}>
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-taupe">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-3xl md:text-4xl font-serif text-forest">{title}</h2>
      {text ? <p className="mt-4 text-muted leading-relaxed">{text}</p> : null}
    </div>
  );
}
