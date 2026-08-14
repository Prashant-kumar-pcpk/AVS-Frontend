"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaHome,
} from "react-icons/fa";
import { ImMail2 } from "react-icons/im";
import { FiPhoneCall, FiMenu } from "react-icons/fi";

export default function Footer() {
  const [showTabBar, setShowTabBar] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const checkFooter = () => {
      if (!footerRef.current) return;

      const footerRect = footerRef.current.getBoundingClientRect();

      // Footer viewport me aana start ho gaya
      if (footerRect.top < window.innerHeight) {
        setShowTabBar(false);
      } else {
        setShowTabBar(true);
      }
    };

    checkFooter();

    window.addEventListener("scroll", checkFooter);
    window.addEventListener("resize", checkFooter);

    return () => {
      window.removeEventListener("scroll", checkFooter);
      window.removeEventListener("resize", checkFooter);
    };
  }, []);

  return (
    <>
      {/* ================= FOOTER ================= */}
      <footer
        ref={footerRef}
        className="bg-[#07111f] py-6 pb-24 text-white md:pb-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            
            {/* Logo */}
            <div className="flex h-20 w-22 shrink-0 items-center justify-center rounded-full bg-white p-1 shadow-lg ring-2 ring-amber-400">
              <img
                src="/AVS infra.jpg"
                alt="AVS Logo"
                className="h-full w-full rounded-full object-contain" />
            </div>

            {/* Links + Contact */}
            <div className="grid w-full grid-cols-2 gap-8 sm:gap-16 md:w-auto">

              {/* Quick Links */}
              <div className="min-w-0">
                <h2 className="mb-4 text-lg font-semibold"> Quick Links </h2>

                <ul className="space-y-2">
                  <li><a href="/" className="text-slate-400 hover:text-amber-400" >  Home </a> </li>
                  <li><a href="/about" className="text-slate-400 hover:text-amber-400"  > About </a></li>
                  <li><a href="/propertiees" className="text-slate-400 hover:text-amber-400" >  Properties </a> </li>
                  <li> <a  href="/contact" className="text-slate-400 hover:text-amber-400" >  Contact </a></li>
                  <li><a href="/blogs" className="text-slate-400 hover:text-amber-400"> Blogs</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div className="min-w-0">
                <h2 className="mb-4 text-lg font-semibold">
                  Contact Us
                </h2>

                <ul className="space-y-3">

                  <li>
                    <a
                      href="mailto:sarnamrealtech@gmail.com"
                      className="flex items-center gap-2 text-slate-400 hover:text-amber-400"
                    >
                      <ImMail2 />
                      Mails:
                    </a>

                    <p className="break-all text-sm text-slate-500">
                      sarnamrealtech@gmail.com
                    </p>
                  </li>

                  <li>
                    <a
                      href="tel:+919582295821"
                      className="flex items-center gap-2 text-slate-400 hover:text-amber-400"
                    >
                      <FiPhoneCall />
                      Phone:
                    </a>

                    <p className="text-sm text-slate-500">
                      +91 9582295821
                    </p>
                  </li>

                  <li>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=AVS+Real+Estate+Noida+Uttar+Pradesh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-400 hover:text-amber-400"
                    >
                      📍 Location
                    </a>
                  </li>

                </ul>
              </div>
            </div>

            {/* Social */}
            <div className="flex flex-col items-center md:items-start">
              <h2 className="mb-4 text-lg font-semibold">
                Follow Us
              </h2>

              <div className="flex gap-4">

                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-amber-500 hover:text-white"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-amber-500 hover:text-white"
                >
                  <FaTwitter />
                </a>

                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-amber-500 hover:text-white"
                >
                  <FaInstagram />
                </a>

              </div>
            </div>
          </div>

          {/* Line */}
          <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

          {/* Bottom */}
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">

            <p className="text-center text-sm text-slate-400">
              &copy; {new Date().getFullYear()} AVS Real Estate.
              All rights reserved.
            </p>

            <p className="text-center text-sm text-slate-400">
              Designed & Developed by
              <span className="ml-1 font-medium text-blue-500">
                Prashant Kumar
              </span>
            </p>

          </div>
        </div>
      </footer>


      {/* ================= MOBILE BOTTOM TAB BAR ================= */}

      <div
        className={`
          fixed inset-x-0 bottom-0 z-[9999]
          max-w-[100vw] md:hidden
          transition-transform duration-300 ease-in-out
          ${showTabBar ? "translate-y-0" : "translate-y-full"}
        `}
      >
        <div className="flex h-[75px] w-full items-center justify-around overflow-hidden border-t border-slate-700 bg-[#07111f]/95 px-1 shadow-[0_-5px_20px_rgba(0,0,0,0.3)] backdrop-blur-md">

          {/* Home */}
          <a
            href="/"
            className="flex min-w-0 flex-1 flex-col items-center gap-1 text-slate-100"
          >
            <FaHome className="text-xl" />
            <span className="text-[10px]">
              Home
            </span>
          </a>

          {/* Menu */}
          <button
            type="button"
            onClick={() => setOpenMenu(true)}
            className="flex min-w-0 flex-1 flex-col items-center gap-1 text-slate-300"
          >
            <FiMenu className="text-xl" />
            <span className="text-[10px]">
              Menu
            </span>
          </button>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919582295821"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-0 flex-1 flex-col items-center gap-1 text-slate-300"
          >
            <FaWhatsapp className="text-xl" />
            <span className="text-[10px]">
              WhatsApp
            </span>
          </a>

          {/* Phone */}
          <a
            href="tel:+919582295821"
            className="flex min-w-0 flex-1 flex-col items-center gap-1 text-slate-300"
          >
            <FiPhoneCall className="text-xl" />
            <span className="text-[10px]">
              Call
            </span>
          </a>

          {/* Contact */}
          <a
            href="/contact"
            className="flex min-w-0 flex-1 flex-col items-center gap-1 text-slate-300"
          >
            <ImMail2 className="text-xl" />
            <span className="text-[10px]">
              Contact
            </span>
          </a>

        </div>
      </div>

  {/*==========bottom menu open===========  */}
            {openMenu && (
        <div className="fixed inset-0 z-[10000] md:hidden">

            {/* Background Overlay */}
            <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpenMenu(false)}
            />

            {/* Bottom Menu */}
            <div
            className="
                absolute bottom-0 left-0 right-0
                h-[50vh]
                rounded-t-3xl
                bg-[#07111f]
                p-6
                shadow-[0_-10px_30px_rgba(0,0,0,0.4)]
            "
            >

            {/* Drag Indicator */}
            <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-slate-600" />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-700 pb-4">

                <h2 className="text-xl font-semibold text-white">
                🏠 Menu
                </h2>

                <button
                type="button"
                onClick={() => setOpenMenu(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-lg text-slate-300 hover:bg-amber-500 hover:text-white"
                >
                ✕
                </button>

            </div>

            {/* Menu Links */}
            <nav className="mt-5 flex flex-col gap-1">

                <a
                href="/"
                onClick={() => setOpenMenu(false)}
                className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-amber-400"
                >
                🏠 Home
                </a>

                <a
                href="/about"
                onClick={() => setOpenMenu(false)}
                className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-amber-400"
                >
                👤 About Us
                </a>

                <a
                href="/propertiees"
                onClick={() => setOpenMenu(false)}
                className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-amber-400"
                >
                🏠 Properties
                </a>

                <a
                href="/blogs"
                onClick={() => setOpenMenu(false)}
                className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-amber-400"
                >
                📝 Blogs
                </a>

                <a
                href="/contact"
                onClick={() =>setOpenMenu(false)}
                className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-amber-400"
                >
                📞 Contact
                </a>

            </nav>

            </div>
        </div>
        )}
    </>
  );
}