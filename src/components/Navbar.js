"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
     {/* ==========moving textfor Desktop========== */}
        <div className="overflow-hidden bg-[#1a519f] py-2 text-sm text-white">
        {/* Desktop */}
        <div className="hidden md:block overflow-hidden">
          <div className="animate-marquee flex w-max whitespace-nowrap">
            <span className="mx-8">AVS Real Estate</span>
            <span className="mx-8">📧 sarnamrealtech@gmail.com</span>
            <span className="mx-8">📞 +91 9582295821</span>

            <span className="mx-8">AVS Real Estate</span>
            <span className="mx-8">📧 sarnamrealtech@gmail.com</span>
            <span className="mx-8">📞 +91 9582295821</span>
          </div>
        </div>

        {/* Mobile */}
        <div className="block md:hidden">
          {/* Fixed Email + Phone */}
          <div className="flex justify-center gap-4 whitespace-nowrap text-xs">
            <span>📧 sarnamrealtech@gmail.com</span>
            <span>📞 +91 9582295821</span>
          </div>

          {/* Moving Company Name */}
          <div className="mt-1 overflow-hidden">
            <div className="animate-marquee flex w-max whitespace-nowrap">
              <span className="mr-0.5">AVS Real Estate</span>/
              <span className="ml-0.5 mr-8">Sarnam.in</span>
              <span className="ml-8 mr-0.5">AVS Real Estate</span>/
              <span className="ml-0.5 mr-8">Sarnam.in</span>
            </div>
          </div>
        </div>
      </div>
          

    <header
      className={`sticky top-0 z-50 bg-white shadow-md transition-all duration-300 ${
        scrolled ? "py-0" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-20 items-center justify-center">
            <img
              src="/AVS logos.png"
              alt="AVS Logo"
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-semibold transition-colors duration-300 ${
                  isActive
                    ? "text-amber-500"
                    : "text-slate-700 hover:text-amber-500"
                }`}
              >
                {item.label}

                {/* Active underline */}
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 bg-amber-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}

          {/* Book Visit */}
          <Link
            href="/contact"
            className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            Book Visit
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-full border border-slate-300 p-2 text-slate-700 lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 shadow-lg lg:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`relative py-2 text-sm font-semibold transition-colors duration-300 ${
                    isActive
                      ? "text-amber-500"
                      : "text-slate-700 hover:text-amber-500"
                  }`}
                >
                  {item.label}

                  {/* Active underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-amber-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}

            {/* Mobile Book Visit */}
            <Link
              href="/contact"
              className="mt-2 inline-flex w-fit rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
              onClick={() => setMobileOpen(false)}
            >
              Book Visit
            </Link>
          </div>
        </div>
      )}
    </header>
    </>
  );
}