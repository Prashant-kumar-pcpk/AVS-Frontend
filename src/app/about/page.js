import PageSection from "../../components/PageSection";
import { testimonials, serviceList } from "../../lib/siteContent";

export const metadata = {
  title: "About AVS",
  description: "Learn about AVS and the premium real estate experience we deliver to buyers, families, and investors.",
};

export default function AboutPage() {
  return (

    <PageSection
  id="about"
  className="bg-white py-24"
>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

      {/* Left Image */}
      <div className="relative order-2 lg:order-1">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
          alt="Luxury Home"
          className="h-[500px] w-full rounded-3xl object-cover shadow-2xl"
        />

        <div className="absolute -bottom-6 -left-6 rounded-3xl bg-amber-500 p-6 text-slate-900 shadow-xl">
          <h3 className="text-5xl font-bold">
            12<span className="text-2xl">+</span>
          </h3>
          <p className="mt-2 text-sm font-semibold">
            Years of Trusted Service
          </p>
        </div>
      </div>

      {/* Right Content */}
      <div className="order-1 lg:order-2">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">
          WHO WE ARE
        </p>

        <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
          Real Estate, Made
          <span className="text-amber-500"> Personal.</span>
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          AVS is a trusted property company helping families and investors
          discover premium homes with complete transparency and professional
          guidance.
        </p>

        <p className="mt-4 text-slate-500 leading-7">
          Whether you're purchasing your first home, investing in luxury
          apartments, or searching for commercial spaces, our experienced
          advisors ensure a smooth and rewarding journey.
        </p>

        {/* <a
          href="/contact"
          className="mt-8 inline-flex rounded-full bg-amber-500 px-7 py-3 font-semibold text-slate-900 transition hover:bg-amber-400"
        >
          Learn More
        </a> */}

      </div>

    </div>

    {/* Stats */}
    <div className="mt-20 grid gap-8 border-t pt-10 md:grid-cols-3">

      <div className="text-center">
        <h3 className="text-5xl font-bold text-slate-900">
          500<span className="text-amber-500">+</span>
        </h3>
        <p className="mt-2 text-slate-500">Happy Customers</p>
      </div>

      <div className="text-center">
        <h3 className="text-5xl font-bold text-slate-900">
          20<span className="text-amber-500">+</span>
        </h3>
        <p className="mt-2 text-slate-500">Prime Projects</p>
      </div>

      <div className="text-center">
        <h3 className="text-5xl font-bold text-slate-900">
          100<span className="text-amber-500">%</span>
        </h3>
        <p className="mt-2 text-slate-500">Transparent Process</p>
      </div>

    </div>

   {/*=================== Why Choose AVS ================== */}
        <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
              Why Choose AVS
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              Your Trusted Real Estate Partner
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              We help you find the best residential and commercial properties with
              complete transparency, expert guidance and verified listings.
            </p>
          </div>

            {/* Cards */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceList.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-2xl">{item.icon}</div>
                {/* Title */}
                <h3 className="mt-2 text-lg font-semibold text-slate-900"> {item.title} </h3>
                {/* Description */}
                <p className="mt-0 text-sm leading-6 text-slate-600"> {item.text}</p>
                {/* Button */}
                <button className="mt-4 text-sm font-semibold text-amber-600 transition group-hover:text-amber-500">
                  Learn More →
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

    {/* testimonials */}
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Testimonials</p>
            <h2 className="mt-3 text-amber-500 text-3xl font-semibold sm:text-4xl">What our clients say</h2>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[28px] border border-white/10 bg-slate-900/70 p-6">
              <p className="text-amber-300">★★★★★</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">“{item.quote}”</p>
              <p className="mt-6 font-semibold text-white">{item.name}</p>
              <p className="text-sm text-slate-400">{item.role}</p>
            </div>
          ))}
        </div>
      </section>
  </div>
</PageSection>


    
  );
}
