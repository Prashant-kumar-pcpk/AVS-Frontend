
"use client";

import Link from "next/link";
import { currentProjects } from "@/lib/siteContent";
import LeadForm from "@/app/popUp/BrochureModel";

export default function CurrentProject({ activeTab }) {
  return (
    <section className="relative z-10 bg-white py-8 md:py-16">

      {/* ================= CURRENT PROJECT ================= */}
      <div className="mx-auto w-[min(1160px,calc(100%-48px))] max-w-[1160px]">

        {currentProjects.map((project) => (

          <div
            key={project.name}
            className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20"
          >

            {/* =====================================================
                LEFT IMAGE
            ====================================================== */}

            <div className="overflow-hidden rounded-[28px] shadow-2xl">

              <img
                src={project.image}
                alt={project.name}
                className="h-[600px] w-full object-cover"
              />

            </div>


            {/* =========== RIGHT CONTENT ============ */}

            <div className="space-y-7">

              {/* =================================================
                  OVERVIEW
              ================================================== */}

              {activeTab === "overview" && (
                <OverviewContent project={project} />
              )}


              {/* =================================================
                  HIGHLIGHTS
              ================================================== */}

              {activeTab === "highlights" && (
                <HighlightsContent project={project} />
              )}


              {/* =================================================
                  AMENITIES
              ================================================== */}

              {activeTab === "amenities" && (
                <AmenitiesContent project={project} />
              )}


              {/* =================================================
                  FLOOR PLANS
              ================================================== */}

              {activeTab === "floor-plans" && (
                <FloorPlansContent project={project} />
              )}


              {/* =================================================
                  LOCATION
              ================================================== */}

              {activeTab === "location" && (
                <LocationContent project={project} />
              )}


              {/* =================================================
                  GALLERY
              ================================================== */}

              {activeTab === "gallery" && (
                <GalleryContent project={project} />
              )}


              {/* =================================================
                  PRICE
              ================================================== */}

              {activeTab === "price" && (
                <PriceContent project={project} />
              )}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}


/* ================================================================
   OVERVIEW
================================================================ */

function OverviewContent({ project }) {
  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
        CURRENT PROJECT
      </p>

      <h1 className="text-5xl font-semibold leading-tight text-[#08244b]">
        {project.name}
      </h1>

      <p className="text-lg leading-8 text-[#6f7785]">
        {project.description}
      </p>

      <div className="space-y-5 border-t border-gray-200 pt-6">

        <InfoRow
          label="Location"
          value={project.location}
        />

        <InfoRow
          label="Configuration"
          value={project.configuration}
        />

        <InfoRow
          label="Status"
          value={project.status}
          valueClass="font-medium text-green-600"
        />

        <InfoRow
          label="Starting Price"
          value={project.price}
          valueClass="text-lg font-semibold text-[#cfaa54]"
        />

      </div>

      <ActionButtons />

    </>
  );
}


/* ================================================================
   HIGHLIGHTS
================================================================ */

function HighlightsContent({ project }) {
  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
        PROJECT HIGHLIGHTS
      </p>

      <h2 className="text-4xl font-semibold leading-tight text-[#08244b]">
        Everything You Need To Know
      </h2>

      <p className="text-lg leading-8 text-[#6f7785]">
        Explore the key details of {project.name}.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">

        <HighlightCard
          label="Configuration"
          value={project.configuration}
        />

        <HighlightCard
          label="Area"
          value={project.area || "Premium Area"}
        />

        <HighlightCard
          label="Status"
          value={project.status}
        />

        <HighlightCard
          label="Possession"
          value={project.possession || "Coming Soon"}
        />

        <HighlightCard
          label="RERA"
          value={project.rera || "RERA Registered"}
        />

        <HighlightCard
          label="Developer"
          value={project.developer || "AVS Real Estate"}
        />

      </div>
    </>
  );
}


/* ================================================================
   AMENITIES
================================================================ */

function AmenitiesContent({ project }) {

  const amenities = project.amenities || [
    "Swimming Pool",
    "Gym",
    "Club House",
    "Kids Play Area",
    "Garden",
    "Parking",
    "Security",
    "CCTV",
  ];

  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
        AMENITIES
      </p>

      <h2 className="text-4xl font-semibold text-[#08244b]">
        Premium Amenities
      </h2>

      <p className="text-lg leading-8 text-[#6f7785]">
        Modern facilities designed for a comfortable and premium lifestyle.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">

        {amenities.map((amenity) => (

          <div
            key={amenity}
            className="rounded-2xl bg-[#f8f7f3] p-5 font-semibold text-[#08244b] transition hover:bg-[#08244b] hover:text-white"
          >
            <span className="mr-2 text-[#cfaa54]">
              ✓
            </span>

            {amenity}

          </div>

        ))}

      </div>
    </>
  );
}


/* ================================================================
   FLOOR PLANS
================================================================ */

function FloorPlansContent({ project }) {

  const floorPlans = project.floorPlans || [
    {
      type: "2 BHK",
      area: "1100 Sq.Ft.",
      price: "₹45 Lakh*",
    },
    {
      type: "3 BHK",
      area: "1450 Sq.Ft.",
      price: "₹65 Lakh*",
    },
    {
      type: "4 BHK",
      area: "1900 Sq.Ft.",
      price: "₹85 Lakh*",
    },
  ];

  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
        FLOOR PLANS
      </p>

      <h2 className="text-4xl font-semibold text-[#08244b]">
        Choose Your Home
      </h2>

      <div className="space-y-4">

        {floorPlans.map((plan) => (

          <div
            key={plan.type}
            className="rounded-2xl bg-[#f8f7f3] p-6"
          >

            <div className="flex flex-wrap items-center justify-between gap-3">

              <h3 className="text-2xl font-bold text-[#08244b]">
                {plan.type}
              </h3>

              <span className="font-bold text-[#cfaa54]">
                {plan.price}
              </span>

            </div>

            <p className="mt-3 text-gray-500">
              Area:{" "}
              <span className="font-semibold text-[#08244b]">
                {plan.area}
              </span>
            </p>

            {plan.image && (
              <img
                src={plan.image}
                alt={`${plan.type} Floor Plan`}
                className="mt-5 h-48 w-full rounded-xl bg-white object-contain"
              />
            )}

          </div>

        ))}

      </div>
    </>
  );
}


/* ================================================================
   LOCATION
================================================================ */

function LocationContent({ project }) {
  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
        LOCATION
      </p>

      <h2 className="text-4xl font-semibold text-[#08244b]">
        Prime Location
      </h2>

      <p className="text-lg leading-8 text-[#6f7785]">
        📍 {project.location}
      </p>

      {project.mapUrl ? (
        <iframe
          src={project.mapUrl}
          title={`${project.name} Location`}
          className="h-[350px] w-full rounded-2xl border-0"
          loading="lazy"
        />
      ) : (
        <div className="flex h-[350px] items-center justify-center rounded-2xl bg-[#08244b] text-white">
          <div className="text-center">
            <p className="text-xl font-semibold">
              Google Map
            </p>

            <p className="mt-2 text-sm text-gray-300">
              {project.location}
            </p>
          </div>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">

        <HighlightCard
          label="Schools"
          value={project.nearby?.schools || "Nearby"}
        />

        <HighlightCard
          label="Hospitals"
          value={project.nearby?.hospitals || "Nearby"}
        />

        <HighlightCard
          label="Metro"
          value={project.nearby?.metro || "Nearby"}
        />

        <HighlightCard
          label="Shopping"
          value={project.nearby?.shopping || "Nearby"}
        />

      </div>
    </>
  );
}


/* ================================================================
   GALLERY
================================================================ */

function GalleryContent({ project }) {

  const gallery = project.gallery || [project.image];

  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
        GALLERY
      </p>

      <h2 className="text-4xl font-semibold text-[#08244b]">
        Project Gallery
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

        {gallery.map((image, index) => (

          <div
            key={`${image}-${index}`}
            className="group overflow-hidden rounded-2xl"
          >

            <img
              src={image}
              alt={`${project.name} Gallery ${index + 1}`}
              className="h-44 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-52"
            />

          </div>

        ))}

      </div>
    </>
  );
}


/* ================================================================
   PRICE
================================================================ */

function PriceContent({ project }) {
  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
        PRICE
      </p>

      <h2 className="text-4xl font-semibold text-[#08244b]">
        Pricing Details
      </h2>

      <div className="rounded-3xl bg-[#f8f7f3] p-7">

        <p className="text-sm text-gray-500">
          Starting Price
        </p>

        <p className="mt-2 text-4xl font-bold text-[#cfaa54]">
          {project.price}
        </p>

        <p className="mt-4 leading-7 text-gray-600">
          Contact our property experts for the latest pricing,
          availability and payment plans.
        </p>

      </div>

      <ActionButtons />

    </>
  );
}


/* ================================================================
   INFO ROW
================================================================ */

function InfoRow({
  label,
  value,
  valueClass = "",
}) {
  return (
    <div className="flex justify-between gap-6 border-b pb-3">

      <span className="font-semibold text-[#08244b]">
        {label}
      </span>

      <span className={`text-right ${valueClass}`}>
        {value || "N/A"}
      </span>

    </div>
  );
}


/* ================================================================
   HIGHLIGHT CARD
================================================================ */

function HighlightCard({
  label,
  value,
}) {
  return (
    <div className="rounded-2xl bg-[#f8f7f3] p-5">

      <p className="text-sm text-gray-500">
        {label}
      </p>

      <p className="mt-2 font-bold text-[#08244b]">
        {value || "N/A"}
      </p>

    </div>
  );
}


/* ================================================================
   ACTION BUTTONS
================================================================ */

function ActionButtons() {
  return (
    <div className="flex flex-wrap gap-4 pt-4">

      <Link
        href="/contact"
        className="rounded-full bg-[#08244b] px-8 py-4 text-white transition hover:bg-[#cfaa54]"
      >
        Book Site Visit
      </Link>

      <LeadForm />

    </div>
  );
}