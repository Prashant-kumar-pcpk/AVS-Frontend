import Link from "next/link";

import {  projects,  services, } from "../lib/siteContent";
// import CampaignSlider from "./campaign/slider";
import Search from "../components/Search";
// import CurrentProject from "./currentProject/page";
// import LeadForm from "@/app/popUp/BrochureModel";
// import ProjectTabs from "@/components/projectTabs";
import ProjectSection from "@/components/projectSection";



export const metadata = {
  title: "AVS | Premium Real Estate in India",
  description: "Discover premium residential and commercial properties with AVS. Book site visits, get expert consultation, and explore luxury apartments, villas, and plots.",
};

export default function Home() {

  

  return (
    <>

    {/* < CampaignSlider /> */}
  <main className="min-h-screen text-white">

  <section className="relative w-full overflow-hidden">

  {/* HERO */}
  <div className="relative h-[420px] w-full sm:h-[460px] lg:h-[500px]">

    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/brochure/Avs-home.avif')",
      }}
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-white/20" />

    {/* Hero Content */}
    <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-4 sm:px-8 lg:px-12">

      <div className="w-full max-w-2xl">

        {/* Heading */}
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-800 sm:text-5xl lg:text-6xl">
          Find Dream Home with
          <span className="block text-blue-600">
            AVS
          </span>
        </h1>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-3">

          <a
            href="/contact"
            className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 sm:px-6 sm:text-base"
          >
            Get Free Consultation
          </a>

          <a
            href="/propertiees"
            className="rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:px-6 sm:text-base"
          >
            Explore Properties
          </a>

        </div>

      </div>
    </div>
  </div>

  {/* PROJECT SECTION */}
  <div 
    id="project-section"
    className="relative z-20 w-full bg-white">
    <ProjectSection />
  </div>

</section>

{/* ================= DELIVERED PROJECTS ================= */}
<section className="py-8 md:py-12 bg-white">
  <div className="mx-auto mt-4 max-w-7xl px-6">

    <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400"> Our Delivered Projects </p>
        <h2 className="mt-3 text-3xl font-semibold text-black md:text-4xl"> Handpicked Premium Listings </h2>
      </div>

      <Link
        href="/OldProjects"
        className="rounded-full border border-amber-400 px-6 py-3 text-sm font-semibold text-amber-500 hover:bg-amber-400 hover:text-white">
        View All Projects →
      </Link>
    </div>

    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-2">
      {projects.map((project) => (
        <article key={project.slug}
          className="overflow-hidden rounded-3xl border border-slate-300 bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl" >
          <img
            src={project.image}
            alt={project.name}
            className="h-60 w-full object-cover"/>

          <div className="p-5">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-semibold text-slate-900"> {project.name} </h3>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                {project.status}
              </span>
            </div>

            <p className="mt-2 text-sm text-slate-500"> {project.location} </p>

            <Link
               href={`/propertiees/${project.slug}`}
              className="mt-5 inline-flex rounded-full bg-[#08244b] px-6 py-3 text-sm font-semibold text-white hover:bg-amber-500" >
              View Details
            </Link>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>
  
  {/* About page sample */}
   <section className="relative bg-slate-100 min-h-[90vh] overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        // style={{
        //   backgroundImage: "url('/Assets/about-hero.jpg')", // Change your image
        // }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">

          {/* Small Label */}
          <span className="inline-block rounded-full border border-amber-400/40 bg-amber-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-500">
            ABOUT AVS
          </span>

          {/* Heading */}
          <h1 className="mt-8 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Building Trust.
            <br />
            <span className="text-amber-400">
              Creating Better Living.
            </span>
          </h1>

          {/* Alternative Heading */}
          <h2 className="mt-6 text-xl font-medium text-slate-700 sm:text-2xl">
            Your Trusted Partner in Real Estate Excellence
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-7xl text-base leading-8 text-slate-800 sm:text-lg">
            At AVS, we believe every property is more than just a space—it's
            the foundation of your future. With a commitment to transparency,
            quality, and customer satisfaction, we help families and investors
            discover premium residential and commercial properties in the most
            promising locations.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-10 sm:gap-4 lg:gap-10">

            <Link
              href="/OldProjects"
              className="rounded-full bg-amber-500 px-7 py-3 text-base font-semibold text-[#08244b] transition hover:bg-amber-400"
            >
              Explore Projects
            </Link>

            <Link
              href="/about"
              className="rounded-full border border-slate-600 px-7 py-3 text-base font-semibold text-black transition hover:bg-amber-200 hover:text-[#08244b]"
            >
              Know more About AVS →
            </Link>

          </div>

        </div>
      </div>
    </section>


      <section className="bg-white px-4 py-12 sm:px-6 md:px-12 lg:px-24 md:py-20">
      <div className="flex flex-col items-start justify-between gap-4 px-2 sm:flex-row sm:items-end sm:px-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Services</p>
            <h2 className="mt-3 text-3xl font-semibold text-black sm:text-4xl">Tailored property solutions</h2>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 px-2 sm:grid-cols-2 sm:px-4 xl:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="rounded-[28px] border border-white/10 bg-slate-900/70 p-6">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
    </>
  );
}
