import PageHero from '@/components/PageHero';

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Hailey"
        description="Reach out with questions about buying, selling, or planning your next move in Boise and surrounding communities."
      />
      <section className="py-14 bg-stone">
        <div className="container-shell grid gap-8 lg:grid-cols-3">
          <form className="lg:col-span-2 rounded-xl border border-stone bg-white p-8 shadow-soft space-y-4">
            <h2 className="text-2xl font-serif text-forest">Send a Message</h2>
            <div>
              <label htmlFor="name" className="block text-sm text-slate-700">Name</label>
              <input id="name" type="text" className="mt-1 w-full rounded-md border border-stone px-3 py-2" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-slate-700">Email</label>
              <input id="email" type="email" className="mt-1 w-full rounded-md border border-stone px-3 py-2" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm text-slate-700">Phone</label>
              <input id="phone" type="tel" className="mt-1 w-full rounded-md border border-stone px-3 py-2" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-slate-700">Message</label>
              <textarea id="message" rows="5" className="mt-1 w-full rounded-md border border-stone px-3 py-2" />
            </div>
            <button className="rounded-md bg-forest px-5 py-3 text-sm font-semibold text-white hover:bg-[#1d3f32]">Submit</button>
          </form>

          <aside className="space-y-6">
            <div className="rounded-xl border border-stone bg-white p-6 shadow-soft">
              <h2 className="text-xl font-serif text-forest">Contact Info</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>Phone: (208) 433-1319</li>
                <li>Email: Haileysnewrealtoremail@HPreality.com</li>
                <li>
                  {/* Update the Instagram URL here later. */}
                  <a href="#" className="text-forest hover:text-[#1d3f32]">Instagram (placeholder)</a>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-dashed border-taupe bg-white p-6 min-h-40">
              <p className="text-xs uppercase tracking-[0.2em] text-taupe">Map Placeholder</p>
              <p className="mt-3 text-sm text-muted">Embed a map here in a future update.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
