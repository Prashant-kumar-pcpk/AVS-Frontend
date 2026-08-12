"use client";
import { FaFacebookF, FaTwitter, FaInstagram,  } from "react-icons/fa";
import { ImMail2 } from "react-icons/im";
import { FiPhoneCall} from "react-icons/fi";


export default function Footer () {

    return (
        <footer className="bg-[#07111f] text-white py-6">
            <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-12">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                   
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white p-2 shadow-lg ring-2 ring-amber-400">
                            <img
                                src="/AVS logos.png"
                                alt="AVS Logo"
                                className="h-full w-full rounded-full object-contain"
                            />
                            </div>

                    <div className="grid grid-cols-2 gap-16">
                        <div>
                        <h2 className="mb-4 text-lg font-semibold">Quick Links</h2>
                        <ul className="mt-2 space-y-1">
                            <li><a href="/" className="text-slate-400 hover:text-amber-400">Home</a></li>
                            <li><a href="/about" className="text-slate-400 hover:text-amber-400">About Us</a></li>
                            <li><a href="/properties" className="text-slate-400 hover:text-amber-400">Properties</a></li>
                            <li><a href="/contact" className="text-slate-400 hover:text-amber-400">Contact</a></li>
                            <li><a href="/blog" className="text-slate-400 hover:text-amber-400">Blogs</a></li>
                        </ul>
                        </div>

                        <div>
                        <h2 className="mb-4 text-lg font-semibold">Contact Us</h2>
                        <ul className="mt-3 space-y-3">
                        <li>
                            <a href="mailto:sarnamrealtech@gmail.com"
                            className="flex items-center gap-2 text-slate-400 hover:text-amber-400" >
                            <ImMail2 />
                            Mails:
                            </a>
                            <p className="text-slate-500">sarnamrealtech@gmail.com</p>
                        </li>

                        <li>
                            <a href="tel:+919582295821"
                            className="flex items-center gap-2 text-slate-400 hover:text-amber-400" >
                            <FiPhoneCall />
                            Phone:
                            </a>
                            <p className="text-sm text-slate-500">+91 9582295821</p>
                        </li>

                        <li>
                            <a 
                            href="https://www.google.com/maps/search/?api=1&query=AVS+Real+Estate+Noida+Uttar+Pradesh" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 text-slate-400 hover:text-amber-400">
                            📍 Location:
                            </a>
                        </li>
                        </ul>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center md:items-start">
                <h2 className="mb-4 text-lg font-semibold">
                    Follow Us</h2>

                <div className="flex gap-4">
                    <a href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:bg-amber-500 hover:text-white" >
                    <FaFacebookF />
                    </a>

                    <a href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:bg-amber-500 hover:text-white" >
                    <FaTwitter />
                    </a>

                    <a href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:bg-amber-500 hover:text-white">
                    <FaInstagram />
                    </a>
                </div>
                </div>
                </div>

              <div className="m-4 h-px w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-center text-sm text-slate-400">
                    &copy; {new Date().getFullYear()} AVS Real Estate. All rights reserved.
                </p>

                 <p className="text-center text-sm text-slate-400">
              Designed & Developed by
              <span className="text-blue-500 font-medium ml-1">
                Prashant Kumar
              </span>
            </p>
            </div>
        </div>
        </footer>
    )
}