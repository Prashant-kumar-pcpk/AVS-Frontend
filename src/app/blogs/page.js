import Link from "next/link";
import { blogs } from "../../lib/blogContent";

export const metadata = {
  title: "Blogs | AVS",
  description: "Read expert real estate insights on market trends, interiors, registrations, and tax benefits.",
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-[#0b1725] text-white">
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">AVS Insights</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Helpful blogs for smart property decisions.</h1>
          <p className="mt-5 text-lg text-slate-300">Explore expert articles designed to build trust and answer high-intent real estate questions.</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog) => (
            <article key={blog.slug} className="overflow-hidden rounded-[28px] border border-white/10 bg-white/10 backdrop-blur">
              <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">{blog.excerpt}</p>
                <Link href={`/blogs/${blog.slug}`} className="mt-6 inline-flex text-sm font-semibold text-amber-300">
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
