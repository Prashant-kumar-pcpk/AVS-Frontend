export default function PageSection({ title, eyebrow, children, className = "" }) {
  return (
    <section className={`mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 ${className}`.trim()}>
      <div className="mb-10">
        {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">{eyebrow}</p> : null}
        {title ? <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2> : null}
      </div>
      {children}
    </section>
  );
}
