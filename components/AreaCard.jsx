export default function AreaCard({ area }) {
  return (
    <article className="bg-white rounded-xl border border-stone shadow-soft overflow-hidden">
      <div className="h-40 bg-gradient-to-br from-slate-100 to-stone px-4 py-3 border-b border-stone">
        <p className="text-xs uppercase tracking-widest text-taupe">Area Placeholder</p>
        <p className="mt-2 text-sm text-muted">{area.image}</p>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif text-forest">{area.title}</h3>
        <p className="mt-3 text-muted">{area.shortDescription}</p>
        <p className="mt-3 text-sm text-slate-700 leading-relaxed">{area.lifestyleCopy}</p>
        <p className="mt-3 text-sm text-slate-700 leading-relaxed">{area.marketVibeCopy}</p>
        <button className="mt-5 rounded-md border border-forest px-4 py-2 text-sm font-medium text-forest hover:bg-forest hover:text-white">
          Explore {area.title}
        </button>
      </div>
    </article>
  );
}
