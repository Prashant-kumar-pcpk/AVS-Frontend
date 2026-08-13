
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { properties } from "../../data/siteContent";

export default function Properties() {
  const [search, setSearch] = useState("");
  const [propertyType, setPropertyType] = useState("All");
  const [location, setLocation] = useState("All");

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const searchMatch =
        property.title.toLowerCase().includes(search.toLowerCase()) ||
        property.location.toLowerCase().includes(search.toLowerCase());

      const typeMatch =
        propertyType === "All" || property.type === propertyType;

      const locationMatch =
        location === "All" || property.location.includes(location);

      return searchMatch && typeMatch && locationMatch;
    });
  }, [search, propertyType, location]);

  return (
    <main className="min-h-screen bg-[#f8f7f3] text-[#17243a]">

      {/* ================= HERO ================= */}
      <section className="relative flex min-h-[540px] items-center overflow-hidden bg-[#17243a]">
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat "
          style={{
            backgroundImage:
              "url('/Assets/house-with-front-side.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-[#101a2b]/70" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
          <div className="max-w-3xl">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#cfaa54]">
              AVS REAL ESTATE
            </p>

            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Find Your
              <span className="block text-[#cfaa54]">
                Perfect Property
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg">
              Explore premium residential and commercial properties
              carefully selected by AVS to help you find a place that
              truly feels like home or a smart investment.
            </p>

          </div>
        </div>
      </section>

      {/* ================= SEARCH SECTION ================= */}
      <section className="relative z-10 mx-auto -mt-12 max-w-6xl px-5">
        <div className="rounded-3xl bg-white p-5 shadow-xl sm:p-7">

          <div className="grid gap-4 md:grid-cols-3">

            {/* Search */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-600">
                Search Property
              </label>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Property name or location"
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-[#cfaa54] focus:bg-white"
              />
            </div>

            {/* Property Type */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-600">
                Property Type
              </label>

              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none focus:border-[#cfaa54]"
              >
                <option value="All">All Properties</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                 <option value="Shop">Shop</option>
                <option value="Plot">Plots</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-600">
                Location
              </label>

              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none focus:border-[#cfaa54]"
              >
                <option value="All">All Locations</option>
                <option value="Greater Noida">
                  Greater Noida
                </option>
                <option value="Noida">
                  Noida
                </option>
                <option value="Ghaziabad">
                  Ghaziabad
                </option>
                <option value="Aligarh">
                  Aligarh
                </option> 
              </select>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PROPERTIES ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#cfaa54]">
              OUR PROPERTIES
            </p>

            <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
              Discover Exceptional
              <span className="block text-[#cfaa54]">
                Places to Live & Invest
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-gray-500">
            Browse our collection of premium residential,
            commercial and investment properties.
          </p>

        </div>

        {/* Property Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {filteredProperties.map((property) => (
              <article
                key={property.id}
                className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* Image */}
                <div className="relative h-64 overflow-hidden">

                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Status */}
                  <div className="absolute left-4 top-4">
                    <span className ="rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-[#17243a] shadow" 
                   style={{ background: "linear-gradient(40deg, #000000, #ffffff)" }}>
                      {property.status}
                    </span>
                  </div>

                  {/* Featured */}
                  {property.featured && (
                    <div className="absolute right-4 top-4">
                      <span className="rounded-full bg-[#cfaa54] px-4 py-2 text-xs font-bold text-white">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Price */}
                  <div className="absolute bottom-4 left-4">
                    <p className="text-2xl font-bold text-white">
                      {property.price}
                    </p>
                  </div>

                </div>

                {/* Content */}
                <div className="p-6">

                  <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                    <span>📍</span> {property.location}
                  </div>
                  <h3 className="text-2xl font-semibold text-[#17243a]"> {property.title} </h3>

                  <div className="mt-5 grid grid-cols-2 gap-3 border-y border-gray-100 py-5">
                    <div>
                      <p className="text-xs text-gray-400"> Property Type  </p>
                      <p className="mt-1 text-sm font-semibold"> {property.type} </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">  Configuration </p>
                      <p className="mt-1 text-sm font-semibold"> {property.size} </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-400"> Area </p>
                      <p className="mt-1 text-sm font-semibold"> {property.area} </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-400"> Category  </p>
                      <p className="mt-1 text-sm font-semibold">  {property.category} </p>
                    </div>

                  </div>

                  {/* Buttons */}
                  <div className="mt-5 flex gap-6">
                    <Link
                      href={`/propertiees/${property.slug}`}
                      className="flex-1 rounded-3xl border border-[#cfaa54] px-4 py-3 text-center text-sm font-semibold text-[#17243a] transition hover:bg-[#cfaa54] hover:text-white">
                      View Details
                    </Link>

                    <Link
                      href="/contact"
                      className="flex-1 rounded-3xl bg-[#17243a] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#cfaa54]" >
                      Enquire Now
                    </Link>

                  </div>

                </div>
              </article>
            ))}

          </div>
        ) : (
          <div className="rounded-3xl bg-white py-20 text-center shadow-sm">
            <div className="text-5xl">🏠</div>

            <h3 className="mt-5 text-2xl font-semibold"> No Properties Found </h3>

            <p className="mt-2 text-gray-500">
              Try changing your search or filter options.
            </p>
          </div>
        )}

      </section>

      {/* ================= CTA ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12">

        <div className="relative overflow-hidden rounded-[32px] bg-[#17243a] px-7 py-14 sm:px-12 lg:px-16">

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#cfaa54]/20 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

            <div className="max-w-2xl">

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#cfaa54]"> NEED HELP? </p>

              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Looking for the right property?
              </h2>

              <p className="mt-4 leading-7 text-gray-300">
                Tell us what you're looking for and our property
                experts will help you find the right option according
                to your requirements and budget.
              </p>

            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit rounded-full bg-[#cfaa54] px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#17243a]" >
              Talk to an Expert →
            </Link>

          </div>
        </div>

      </section>

    </main>
  );
}

