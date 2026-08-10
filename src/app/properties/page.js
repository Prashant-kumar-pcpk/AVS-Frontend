import Link from "next/link";
import PageSection from "../../components/PageSection";
import { projects, categories } from "../../lib/siteContent";


export const metadata = {
  title: "Properties",
  description: "Explore premium properties by AVS, from luxury apartments to high-growth plots.",
};

export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <PageSection eyebrow="Properties" title="Discover premium listings across top cities">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.slug} className="overflow-hidden rounded-[30px] border border-white/10 bg-slate-900/70">
              <img src={project.image} alt={project.name} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{project.location}</p>
                <p className="mt-4 text-lg font-semibold">Starting at {project.price}</p>
                <p className="mt-2 text-sm text-slate-300">{project.configuration}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href={`/properties/${project.slug}`} className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900">
                    View Details                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </PageSection>

      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Property Categories</p>
                  <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Explore by lifestyle</h2>
                </div>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {categories.map((category) => (
                  <div key={category.title} className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/60">
                    <img src={category.image} alt={category.title} className="h-48 w-full object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>
      
    </main>
  );
}
