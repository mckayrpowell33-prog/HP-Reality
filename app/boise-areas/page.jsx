import PageHero from '@/components/PageHero';
import AreaCard from '@/components/AreaCard';
import areas from '@/data/areas';

export default function BoiseAreasPage() {
  return (
    <>
      <PageHero
        title="Boise Area Communities"
        description="Explore distinct lifestyles across Boise, Meridian, Eagle, Kuna, and Star to find the neighborhood fit that matches your priorities."
      />
      <section className="py-14 bg-stone">
        <div className="container-shell">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <AreaCard key={area.title} area={area} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
