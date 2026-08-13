
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
          <h1 className="mt-5 text-3xl font-bold text-[#17243a]"> Property Not Found </h1>

          <p className="mt-3 text-gray-500"> The property you are looking for does not exist. </p>

          <Link
            href="/propertiees"
            className="mt-6 inline-block rounded-full bg-[#17243a] px-7 py-3 font-semibold text-white transition hover:bg-[#cfaa54]" >
            ← Back to Properties
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f7f3] text-[#17243a]">

      {/* =============== HERO / PROPERTY GALLERY ============== */}
      <section className="mx-auto max-w-7xl px-6 pt-10 sm:px-8 lg:px-12">

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-4">

          {/* Main Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 sm:col-span-2 sm:row-span-2">
            <img
              src={property.gallery?.[0] || property.image}
              alt={`${property.title} — Exterior`}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 hover:scale-105"/>
          </div>

          {/* Gallery Images */}
          {property.gallery?.slice(1, 5).map((image, index) => (
            <div key={image}
              className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 sm:block">

              <img src={image} alt={`${property.title} — Image ${index + 2}`}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 hover:scale-105"/>
            </div>
          ))}

        </div>

        {/* =====================================================
            PROPERTY TITLE
        ====================================================== */}
        <div className="py-10">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#cfaa54]">
                AVS REAL ESTATE
              </p>

              <h1 className="mt-2 text-3xl font-bold text-[#17243a] sm:text-5xl">
                {property.title}
              </h1>

              <p className="mt-3 text-gray-500">
                📍 {property.location}
              </p>
            </div>

            <div className="md:text-right">
              <p className="text-sm text-gray-500">
                Starting Price
              </p>

              <p className="mt-1 text-3xl font-bold text-[#cfaa54]">
                {property.price}
              </p>
            </div>

          </div>

        </div>

        {/* ========= SECTION NAVIGATION ========== */}
        <div className="sticky top-0 z-30 mb-10 overflow-x-auto rounded-2xl bg-white shadow-md">
          <div className="flex min-w-max">
            <a href="#highlights"
              className="px-5 py-4 text-sm font-semibold transition hover:bg-[#17243a] hover:text-white sm:px-7"
            > ✦ Highlights </a>

            <a href="#amenities"
              className="px-5 py-4 text-sm font-semibold transition hover:bg-[#17243a] hover:text-white sm:px-7"
            > ♢ Amenities
            </a>

            <a href="#floor-plans"
              className="px-5 py-4 text-sm font-semibold transition hover:bg-[#17243a] hover:text-white sm:px-7"
            > ▦ Floor Plans
            </a>

            <a href="#location"
              className="px-5 py-4 text-sm font-semibold transition hover:bg-[#17243a] hover:text-white sm:px-7"
            > ⌖ Location
            </a>

            <a href="#gallery"
              className="px-5 py-4 text-sm font-semibold transition hover:bg-[#17243a] hover:text-white sm:px-7"
            > ▧ Gallery
            </a>
          </div>
        </div>
        {/* =========== MAIN GRID============ */}
        <div className="grid gap-10 lg:grid-cols-3">

        {/* ============ LEFT CONTENT ================ */}
         <div className="space-y-10 lg:col-span-2">


         {/* ============ HIGHLIGHTS ============= */}
         <section id="highlights"
            className="scroll-mt-24 rounded-3xl bg-white p-7 shadow-sm sm:p-10" >
              <div className="border-b border-gray-100 pb-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#cfaa54]"> ✦ Property Highlight </p>
                <h2 className="mt-2 text-3xl font-bold">  Project Overview </h2>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-4">
                <InfoCard label="Property Type" value={property.type} />
                <InfoCard label="Configuration"  value={property.configure}/>
                <InfoCard label="Area" value={property.area}/>
                <InfoCard label="Price" value={property.price}/>
                <InfoCard label="Status" value={property.status} />
                <InfoCard label="Possession" value={property.possession || "Available Soon"}/>
                <InfoCard label="RERA" value={property.rera || "RERA Registered"}/>
                <InfoCard label="Developer" value={property.developer || "AVS Real Estate"} />
              </div>

              {/* Description */}
              <div className="mt-10">
                <h3 className="text-2xl font-bold"> About This Property </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {property.description ||
                    `Discover ${property.title}, a premium property located in ${property.location}. This property offers excellent opportunities for comfortable living and smart investment.`}
                </p>
              </div>
            </section>

      {/* ========== AMENITIES ========== */}
         <section id="amenities"
              className="scroll-mt-24 rounded-3xl bg-white p-7 shadow-sm sm:p-10" >
            <div className="border-b border-gray-100 pb-6">
              <p className="text-sm font-bold uppercase tracking-widest text-[#cfaa54]"> ♢ Premium Facilities </p>
              <h2 className="mt-2 text-3xl font-bold">  Amenities </h2>
                <p className="mt-3 text-gray-500">
                  Everything you need for a comfortable and modern lifestyle.
                </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {(
                  property.amenities || [
                    "Swimming Pool",
                    "Gym",
                    "Club House",
                    "Kids Play Area",
                    "Garden",
                    "Parking",
                    "24×7 Security",
                    "CCTV Surveillance",
                  ]
                ).map((amenity, index) => (

                  <div
                    key={amenity}
                    className="group flex items-center gap-4 rounded-2xl bg-[#f8f7f3] p-5 transition hover:bg-[#17243a] hover:text-white">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-xl shadow-sm group-hover:bg-[#cfaa54]">
                      {["🏊", "🏋️", "🏢", "🛝", "🌳", "🚗", "🛡️", "📹"][index % 8]}
                    </div>

                    <span className="font-semibold">
                      {amenity}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* =================================================
                FLOOR PLANS
            ================================================== */}
            <section id="floor-plans"
              className="scroll-mt-24 rounded-3xl bg-white p-7 shadow-sm sm:p-10">

              <div className="border-b border-gray-100 pb-6">
                <p className="text-sm font-bold uppercase tracking-widest text-[#cfaa54]"> ▦ Floor Plans </p>
                <h2 className="mt-2 text-3xl font-bold"> Choose Your Perfect Home </h2>

                <p className="mt-3 text-gray-500">
                  Explore different configurations, areas and pricing.
                </p>
              </div>

              <div className="mt-8 space-y-5">
                {(
                  property.floorPlans || [
                    {
                      type: "2 BHK",
                      area: "1100 Sq.Ft.",
                      price: "₹45 Lakh*",
                      image: property.floorPlanImages?.[0],
                    },
                    {
                      type: "3 BHK",
                      area: "1450 Sq.Ft.",
                      price: "₹65 Lakh*",
                      image: property.floorPlanImages?.[1],
                    },
                    {
                      type: "4 BHK",
                      area: "1900 Sq.Ft.",
                      price: "₹85 Lakh*",
                      image: property.floorPlanImages?.[2],
                    },
                  ]
                ).map((plan) => (

                  <div
                    key={plan.type}
                    className="overflow-hidden rounded-2xl border border-gray-100 bg-[#f8f7f3]"
                  >

                    <div className="grid md:grid-cols-3">

                      {/* Floor Plan Image */}
                      <div className="relative min-h-[220px] bg-white">

                        {plan.image ? (
                          <img
                            src={plan.image}
                            alt={`${plan.type} Floor Plan`}
                            className="h-full w-full object-contain p-5"
                          />
                        ) : (
                          <div className="flex h-full min-h-[220px] items-center justify-center">
                            <div className="text-center">
                              <div className="text-5xl">▦</div>
                              <p className="mt-2 text-sm text-gray-400">
                                Floor Plan
                              </p>
                            </div>
                          </div>
                        )}

                      </div>

                      {/* Plan Details */}
                      <div className="p-7 md:col-span-2">

                        <p className="text-sm font-semibold uppercase tracking-widest text-[#cfaa54]">
                          Residential Plan
                        </p>

                        <h3 className="mt-2 text-2xl font-bold">
                          {plan.type}
                        </h3>

                        <div className="mt-5 grid grid-cols-2 gap-4">

                          <div>
                            <p className="text-sm text-gray-500">
                              Area
                            </p>

                            <p className="font-bold">
                              {plan.area}
                            </p>
                          </div>

                          <div>
                            <p className="text-sm text-gray-500">
                              Price
                            </p>

                            <p className="font-bold text-[#cfaa54]">
                              {plan.price}
                            </p>
                          </div>

                        </div>

                        <Link
                          href="/contact"
                          className="mt-6 inline-block rounded-full bg-[#17243a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#cfaa54]"
                        >
                          Get Floor Plan →
                        </Link>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </section>

            {/* =================================================
                LOCATION
            ================================================== */}
            <section
              id="location"
              className="scroll-mt-24 rounded-3xl bg-white p-7 shadow-sm sm:p-10"
            >

              <div className="border-b border-gray-100 pb-6">

                <p className="text-sm font-bold uppercase tracking-widest text-[#cfaa54]">
                  ⌖ Prime Location
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  Location & Connectivity
                </h2>

                <p className="mt-3 text-gray-500">
                  Conveniently connected to important destinations.
                </p>

              </div>

              {/* Location */}
              <div className="mt-8">

                <div className="mb-2 rounded-2xl bg-[#f8f7f3] p-5">
                  <p className="text-sm text-gray-500">Project Address </p>

                  <p className="mt-2 font-bold">
                    📍 {property.location}
                  </p>

                </div>

                {/* Google Map */}
                <div className="overflow-hidden rounded-2xl">

                  {property.mapUrl ? (
                    <iframe
                      src={property.mapUrl}
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${property.title} Location Map`}
                    />
                  ) : (
                    <div className="flex h-[200px] items-center justify-center bg-[#17243a] text-center text-white">

                      <div>
                        <div className="text-5xl">⌖</div>

                        <h3 className="mt-3 text-xl font-bold">
                          Google Map
                        </h3>

                        <p className="mt-2 text-gray-300">
                          Add property.mapUrl in siteContent.js
                        </p>
                      </div>

                    </div>
                  )}

                </div>

              </div>

              {/* Nearby Places */}
              <div className="mt-4">

                <h3 className="text-xl font-bold">
                  Nearby Places
                </h3>

                <div className="mt-4 grid gap-2 sm:grid-cols-2">

                  {(
                    property.nearby || [
                      {
                        name: "Nearby Schools",
                        distance: "5 Minutes",
                        icon: "🏫",
                      },
                      {
                        name: "Hospitals",
                        distance: "10 Minutes",
                        icon: "🏥",
                      },
                      {
                        name: "Metro Station",
                        distance: "15 Minutes",
                        icon: "🚇",
                      },
                      {
                        name: "Shopping & Malls",
                        distance: "10 Minutes",
                        icon: "🛍️",
                      },
                    ]
                  ).map((item) => (

                    <div key={item.name}
                      className="flex items-center justify-between rounded-2xl bg-[#f8f7f3] p-2">

                      <div className="flex items-center gap-2">

                        <span className="text-xl">
                          {item.icon}
                        </span>

                        <span className="font-semibold">
                          {item.name}
                        </span>

                      </div>

                      <span className="text-sm font-semibold text-[#cfaa54]">
                        {item.distance}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </section>

          </div>

          {/* ===================================================
              RIGHT SIDEBAR
          ==================================================== */}
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

              {/* Quick Details */}
              <div className="mt-7 space-y-4 border-y border-white/10 py-6">

                <SidebarItem
                  label="Configuration"
                  value={property.configure}
                />

                <SidebarItem
                  label="Area"
                  value={property.area}
                />

                <SidebarItem
                  label="Status"
                  value={property.status}
                />

                <SidebarItem
                  label="Location"
                  value={property.location}
                />

              </div>

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

      {/* =========================================================
          BOTTOM CTA
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 sm:px-8 lg:px-12">

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


/* =============================================================
   REUSABLE INFO CARD
============================================================= */

function InfoCard({ label, value }) {
  return (
    <div className="rounded-2xl bg-[#f8f7f3] p-5 transition hover:shadow-md">

      <p className="text-sm text-gray-500">
        {label}
      </p>

      <p className="mt-2 text-lg font-bold text-[#17243a]">
        {value || "N/A"}
      </p>

    </div>
  );
}


/* =============================================================
   SIDEBAR ITEM
============================================================= */

function SidebarItem({ label, value }) {
  return (
    <div className="flex justify-between gap-4">

      <span className="text-sm text-gray-400">
        {label}
      </span>

      <span className="text-right text-sm font-semibold text-white">
        {value || "N/A"}
      </span>

    </div>
  );
}


/* =============================================================
   GALLERY LABEL
============================================================= */

function getGalleryLabel(index) {
  const labels = [
    "Exterior",
    "Interior",
    "Living Room",
    "Bedroom",
    "Kitchen",
    "Amenities",
  ];

  return labels[index] || "Property View";
}


