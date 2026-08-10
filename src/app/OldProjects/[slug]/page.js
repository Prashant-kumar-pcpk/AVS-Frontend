import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../data/siteContent";

export function generateMetadata({ params }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return { title: "Project Not Found | AVS" };
  }

  return {
    title: `${project.name} | AVS`,
    description: `Explore ${project.name} in ${project.location} with premium features, pricing, and booking assistance from AVS.`,
  };
}

export default function ProjectDetailPage({ params }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f7f3ea] text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-12">
        <Link href="/projects" className="text-sm font-semibold text-amber-700">← Back to Projects</Link>
        <div className="mt-8 overflow-hidden rounded-[36px] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <img src={project.image} alt={project.name} className="h-80 w-full object-cover" />
          <div className="grid gap-8 p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-700">{project.status}</p>
              <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">{project.name}</h1>
              <p className="mt-4 text-lg text-slate-700">{project.blurb}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="mt-1 font-semibold">{project.location}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Starting Price</p>
                  <p className="mt-1 font-semibold">{project.price}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Configuration</p>
                  <p className="mt-1 font-semibold">{project.configuration}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Possession</p>
                  <p className="mt-1 font-semibold">{project.possession}</p>
                </div>
              </div>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold">Book a site visit</h2>
              <p className="mt-3 text-sm text-slate-600">Schedule a guided tour with our real estate advisors.</p>
              <a href="https://wa.me/919999999999?text=Hi%20AVS%2C%20I%20want%20to%20book%20a%20site%20visit" className="mt-6 inline-flex rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-700">
                WhatsApp for Visit
              </a>
              <p className="mt-6 text-sm text-slate-500">RERA number: {project.rera}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
