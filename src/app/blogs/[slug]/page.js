import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs } from "../../../lib/blogContent";

export function generateMetadata({ params }) {
  const blog = blogs.find((item) => item.slug === params.slug);

  if (!blog) {
    return { title: "Blog Not Found | AVS" };
  }

  return {
    title: `${blog.title} | AVS`,
    description: blog.excerpt,
  };
}

export default function BlogDetailPage({ params }) {
  const blog = blogs.find((item) => item.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0b1725] text-white">
      <section className="mx-auto max-w-4xl px-6 py-24 sm:px-8 lg:px-12">
        <Link href="/blogs" className="text-sm font-semibold text-amber-300">← Back to Blogs</Link>
        <article className="mt-8 overflow-hidden rounded-[32px] border border-white/10 bg-white/10 backdrop-blur">
          <img src={blog.image} alt={blog.title} className="h-72 w-full object-cover" />
          <div className="p-8 sm:p-10">
            <h1 className="text-3xl font-semibold sm:text-4xl">{blog.title}</h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">{blog.excerpt}</p>
            <p className="mt-6 text-slate-300">
              AVS publishes practical insights to guide home buyers, sellers, and investors toward confident decisions in a competitive market.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
