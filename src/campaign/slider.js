"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
    title: "Luxury 3&4 BHK Apartments",
    subtitle: " Mega Offer",
   offer: "Booking Started at 79.79 Lakh",
    description:
      "Book your dream home this week and enjoy exclusive launch pricing with free site visit.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=2000&q=80",
    title: "Premium 3&4 BHK Apartments",
    subtitle: "Limited Time Deal",
    offer: "Booking Started at 79.79 Lakh",
    description:
      "Own a luxury villa with flexible payment plans and premium amenities.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=2000&q=80",
    title: "Commercial Spaces",
    subtitle: "Business Investment Offer",
    offer: "",
    description:
      "High-return commercial properties in prime locations.",
  },
];

export default function CampaignSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[300px] sm:h-[400px] lg:h-[550px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-cyan-500/50 to-black/20" />

          <div className="relative z-10 flex h-full items-center">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

              {/* <span className="inline-block rounded-full bg-red-600 px-5 py-2 text-sm font-bold uppercase tracking-wider">
                🔥 {slide.subtitle}
              </span> */}

              <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-tight lg:text-7xl">
                {slide.title}
              </h1>

              <h2 className="mt-4 text-3xl font-bold text-amber-400">
                {slide.offer}
              </h2>

              <p className="mt-6 max-w-2xl text-lg text-gray-200">
                {slide.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-amber-500 px-8 py-4 font-semibold text-black hover:bg-amber-400"
                >
                  Book Site Visit
                </Link>

                <Link
                  href="/projectPage"
                  className="rounded-full border border-white px-8 py-4 font-semibold hover:bg-white hover:text-black"
                >
                  Explore Projects
                </Link>
              </div>

              <div className="mt-8 inline-flex rounded-xl bg-red-700/90 px-6 py-3 text-lg font-bold">
                ⏳ Offer is valid for a limited time only. Don't miss out!
              </div>

            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-4 text-white backdrop-blur hover:bg-white/40"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-4 text-white backdrop-blur hover:bg-white/40"
      >
        ❯
      </button>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full transition-all ${
              current === index
                ? "w-10 bg-amber-400"
                : "w-3 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}