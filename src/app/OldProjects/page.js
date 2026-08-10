import Link from "next/link";
import { projects } from "../../data/siteContent";

export const metadata = {
  title: "Featured Projects | AVS",
  description: "Explore premium residential and commercial projects by AVS with verified details, pricing, and booking options.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-700">Featured Projects</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Premium properties designed for lasting value.</h1>
          <p className="mt-5 text-lg text-slate-700">
            Discover luxury apartments, villas, and investment-ready plots curated by AVS.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.slug} className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <img src={project.image} alt={project.name} className="h-56 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-2xl font-semibold">{project.name}</h2>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">{project.status}</span>
                </div>
                <p className="mt-3 text-sm text-slate-600">{project.location}</p>
                <p className="mt-4 text-lg font-semibold text-slate-900"> {project.units} Units</p>
                {/* <p className="mt-2 text-sm text-slate-700">{project.configuration}</p> */}
                <p className="mt-2 text-sm text-slate-700">Possession: {project.possession}</p>
                {/* <p className="mt-2 text-sm text-slate-700">RERA: {project.rera}</p> */}
                <p className="mt-4 text-sm leading-6 text-slate-600">{project.blurb}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href={`/projects/${project.slug}`} className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
                    View Details
                  </Link>
                  <a href="https://wa.me/919999999999?text=Hi%20AVS%2C%20I%20want%20to%20book%20a%20site%20visit" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-900">
                    Book Site Visit
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
