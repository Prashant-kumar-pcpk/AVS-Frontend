export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07111f] px-6 text-white">
      <div className="max-w-xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-400">404</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Page not found</h1>
        <p className="mt-4 text-lg text-slate-300">
          The page you are looking for has moved or no longer exists.
        </p>
      </div>
    </main>
  );
}
