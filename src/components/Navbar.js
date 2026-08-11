"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Project", href: "/OldProjects" },
  { label: "Properties", href: "/propertiees" },
  { label: "Contact", href: "/contact" },
 
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
     className="sticky top-0 z-50 bg-white shadow-md transition-all duration-300"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-20 items-center justify-center">
          <img
              src="/AVS logos.png"
              alt="AVS Logo"
              className=" object-contain"/>
          </div>
          {/* <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">AVS</p>
            <p className="text-xs text-slate-300">Real Estate</p>
          </div> */}
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-amber-500"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            Book Visit
          </Link>
        </div>

        <button
         className="rounded-full border border-slate-300 p-2 text-slate-700 lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </nav>

      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden shadow-lg">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition hover:text-amber-500"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex w-fit rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950"
              onClick={() => setMobileOpen(false)}
            >
              Book Visit
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
