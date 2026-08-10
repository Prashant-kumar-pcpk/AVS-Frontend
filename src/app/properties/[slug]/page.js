import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../lib/siteContent";

export function generateMetadata({ params }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return { title: "Property Not Found" };
  }

  return {
    title: `${project.name} | AVS`,
    description: `${project.name} in ${project.location} with premium features and booking support.`,
  };
}

export default function PropertyDetailPage({ params }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
        <Link href="/properties" className="text-sm font-semibold text-amber-400 text-amber-300">← Back to Properties</Link>
        <div className="mt-8 overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/70">
          <img src={project.image} alt={project.name} className="h-80 w-full object-cover" />
          <div className="p-8 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">{project.status}</p>
            <h1 className="mt-4 text-4xl font-semibold">{project.name}</h1>
            <p className="mt-4 text-lg leading-8 text-slate-300">{project.blurb}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-sm text-slate-400">Location</p>
                <p className="mt-1 font-semibold">{project.location}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-sm text-slate-400">Price</p>
                <p className="mt-1 font-semibold">{project.price}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-sm text-slate-400">Configuration</p>
                <p className="mt-1 font-semibold">{project.configuration}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-sm text-slate-400">Possession</p>
                <p className="mt-1 font-semibold">{project.possession}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
