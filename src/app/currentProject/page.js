
// import Link from "next/link";
import { currentProjects } from "@/lib/siteContent"
import LeadForm from "@/app/popUp/BrochureModel";


export default function CurrentProject () {

  

    return(
    <section className="py-28 md:py-24 bg-white">
  {/* ================= CURRENT PROJECT ================= */}
  <div className="mx-auto w-[min(1160px,calc(100%-48px))] max-w-[1160px]">
    {currentProjects.map((project) => (
      <div
        key={project.name}
        className="grid gap-10 lg:grid-cols-2 lg:gap-20 lg:items-center"
      >
        {/* Left Image */}
        <div className="overflow-hidden rounded-[28px] shadow-2xl">
          <img
            src={project.image}
            alt={project.name}
            className="h-[600px] w-full object-cover" />
        </div>

        {/* Right Content */}
        <div className="space-y-7">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400"> CURRENT PROJECT </p>

          <h1 className="text-5xl font-semibold leading-tight text-[#08244b]"> {project.name} </h1>
          <p className="text-lg leading-8 text-[#6f7785]"> {project.description} </p>

          <div className="space-y-5 border-t border-gray-200 pt-6">
            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-[#08244b]">Location</span>
              <span>{project.location}</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-[#08244b]">
                Configuration
              </span>
              <span>{project.configuration}</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-[#08244b]">Status</span>
              <span className="font-medium text-green-600"> {project.status} </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold text-[#08244b]"> Starting Price </span>
              <span className="text-lg font-semibold text-[#cfaa54]">
                {project.price}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="rounded-full bg-[#08244b] px-8 py-4 text-white hover:bg-[#cfaa54]">
              Book Site Visit
            </button>

            <LeadForm />

          </div>
        </div>
      </div>
    ))}
  </div>
  
  </section>
    )
}