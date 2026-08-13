

import Link from "next/link";
import { properties } from "../../../data/siteContent";

export default async function PropertyDetail({ params }) {
  const { slug } = await params;

  const property = properties.find(
    (item) => item.slug === slug
  );

  if (!property) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f8f7f3] px-6">
        <div className="text-center">
          <div className="text-6xl">🏠</div>

          <h1 className="mt-5 text-3xl font-bold text-[#17243a]">
            Property Not Found
          </h1>

          <p className="mt-3 text-gray-500">
            The property you are looking for does not exist.
          </p>

          <Link
            href="/propertiees"
            className="mt-6 inline-block rounded-full bg-[#17243a] px-7 py-3 font-semibold text-white transition hover:bg-[#cfaa54]"
          >
            ← Back to Properties
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f7f3] text-[#17243a]">

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
    {/* ================= PROPERTY GALLERY ================= */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-4">
          {/* Main Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 sm:col-span-2 sm:row-span-2">
            <img
              src={property.gallery?.[0] || property.image}
              alt={`${property.title} — Exterior`}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 hover:scale-105" />
          </div>
          {/* Gallery Images */}
            {property.gallery?.slice(1, 4).map((image, index) => (
              <div
                key={image}
                className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 sm:block">
                <img
                  src={image}
                  alt={`${property.title} — Image ${index + 2}`}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
        </div>


        <div className="grid gap-10 lg:grid-cols-3">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">

            <div className="rounded-3xl bg-white p-7 shadow-sm sm:p-10">

              <div className="flex flex-col justify-between gap-5 border-b border-gray-100 pb-7 sm:flex-row sm:items-center">

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#cfaa54]">
                    Property Details
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-[#17243a]">
                    {property.title}
                  </h2>
                </div>

                <p className="text-3xl font-bold text-[#cfaa54]">
                  {property.price}
                </p>

              </div>

              {/* PROPERTY INFORMATION */}
              <div className="mt-8 grid gap-5 sm:grid-cols-4">
                
                <div className="rounded-2xl bg-[#f8f7f3] p-5">
                  <p className="text-sm text-gray-500"> Property Type </p>
                  <p className="mt-1 text-lg font-bold"> {property.type} </p>
                </div>

                  <div className="rounded-2xl bg-[#f8f7f3] p-5">
                  <p className="text-sm text-gray-500"> Configuration </p>
                  <p className="mt-1 text-lg font-bold"> {property.configure} </p>
                </div>

                  <div className="rounded-2xl bg-[#f8f7f3] p-5">
                  <p className="text-sm text-gray-500"> Area </p>
                  <p className="mt-1 text-lg font-bold"> {property.area} </p>
                </div>

                  <div className="rounded-2xl bg-[#f8f7f3] p-5">
                  <p className="text-sm text-gray-500"> Categories </p>
                  <p className="mt-1 text-lg font-bold"> {property.category} </p>
                </div>

                <div className="rounded-2xl bg-[#f8f7f3] p-5">
                  <p className="text-sm text-gray-500"> BedRoom </p>
                  <p className="mt-1 text-lg font-bold"> {property.bedroom} </p>
                </div>

                  <div className="rounded-2xl bg-[#f8f7f3] p-5">
                  <p className="text-sm text-gray-500"> Toilet </p>
                  <p className="mt-1 text-lg font-bold"> {property.toilet} </p>
                </div>

                  <div className="rounded-2xl bg-[#f8f7f3] p-5">
                  <p className="text-sm text-gray-500"> Status </p>
                  <p className="mt-1 text-lg font-bold"> {property.status} </p>
                </div>

              </div>

              {/* DESCRIPTION */}
              <div className="mt-10">

                <h3 className="text-2xl font-bold">
                  About This Property
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {property.description ||
                    `Discover ${property.title}, a premium property located in ${property.location}. This property offers excellent opportunities for comfortable living and smart investment.`}
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div>

            <div className="sticky top-24 rounded-3xl bg-[#17243a] p-7 text-white shadow-xl">

              <p className="text-sm font-semibold uppercase tracking-wider text-[#cfaa54]">
                Interested?
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Get More Information
              </h2>

              <p className="mt-4 leading-7 text-gray-300">
                Want to know more about this property? Contact our
                property experts and get complete information.
              </p>

              <div className="mt-7 space-y-3">

                <Link
                  href="/contact"
                  className="block rounded-full bg-[#cfaa54] px-6 py-4 text-center font-bold text-white transition hover:bg-white hover:text-[#17243a]"
                >
                  Enquire Now →
                </Link>

                <Link
                  href="/propertiees"
                  className="block rounded-full border border-white/30 px-6 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-[#17243a]"
                >
                  View All Properties
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12">

        <div className="rounded-[32px] bg-[#17243a] px-7 py-12 text-center sm:px-12">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#cfaa54]">
            AVS REAL ESTATE
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Looking for your dream property?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
            Our property experts are here to help you find the
            right property according to your requirements and budget.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-block rounded-full bg-[#cfaa54] px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#17243a]"
          >
            Talk to an Expert →
          </Link>

        </div>

      </section>

    </main>
  );
}