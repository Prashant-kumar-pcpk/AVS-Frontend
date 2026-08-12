"use client"
import {useState} from "react";

import {  FiMail, FiMapPin, FiPhone, } from "react-icons/fi";




export default function ContactForm() {

  const [formData, setFormData] = useState(
    {name: "", email: "", contact_No: "", message: ""});

    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Sending:", formData);

        try {
            const response = await fetch(
              // "http://localhost:5000/api/contact",
              `${process.env.NEXT_PUBLIC_API_URL}/contact`, 
              {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
            });

            const data = await response.json();

            console.log("Status:", response.status);
            console.log("Response:", data);

            if (!response.ok) {
            return alert(data.message);
            }

            alert("Thank you! We’ll contact you soon.");

            // Form reset
            setFormData({
              name: "",
              email: "",
              contact_No: "",
              message: "",
            });

            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        } catch (err) {
            console.error(err);
        }
        };


  return (
    <main className="bg-[#08244b] py-28 md:py-24 text-white">
      <div className="mx-auto grid w-[min(1160px,calc(100%-48px))] max-w-[1160px]  gap-12  md:grid-cols-[0.9fr_1.1fr] ">
          <div className="space-y-8">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#e3c173]">
            LET'S TALK <em className="font-normal">AVS</em>
          </p>
          <h2 className="text-4xl font-semibold leading-[1.05]">Make your next move <em className="font-normal text-[#cfaa54]">AVS.</em></h2>
          <p className="max-w-[410px] text-sm leading-7 text-[#c5cdd9]">
            Tell us what you are looking for. We will help you take the next step with confidence.
          </p>
             <div className="grid gap-5 text-sm text-white/90">
                <a
                className="flex items-start gap-4 rounded-3xl bg-white/10 p-5 transition duration-200 hover:bg-white/15"
                href="https://maps.google.com/?q=Delhi+India"
                target="_blank"
                rel="noreferrer"
                >
              <FiMapPin className="mt-1 text-[#ddb967] text-xl" />
              <span>
                <small className="block text-[0.59rem] uppercase tracking-[0.12em] text-[#9aaec6]">Visit us</small>
                <div>New Delhi, India</div>
              </span>
            </a>

            <a className="flex items-start gap-4 rounded-3xl bg-white/10 p-5 transition duration-200 hover:bg-white/15" href="tel:+919582295821">
              <FiPhone className="mt-1 text-[#ddb967] text-xl" />
              <span>
                <small className="block text-[0.59rem] uppercase tracking-[0.12em] text-[#9aaec6]">Call us</small>
                +91 95822 95821
              </span>
            </a>

            <a className="flex items-start gap-4 rounded-3xl bg-white/10 p-5 transition duration-200 hover:bg-white/15" href="mailto:sarnamrealtech@gmail.com">
              <FiMail className="mt-1 text-[#ddb967] text-xl" />
              <span>
                <small className="block text-[0.59rem] uppercase tracking-[0.12em] text-[#9aaec6]">Email us</small>
                <div>info@sarnam.in</div>
                <div>sarnamrealtech@gmail.com</div>
              </span>
            </a>
          </div>
        </div>

        <form 
          onSubmit ={handleSubmit}
          className="rounded-[28px] border border-white/10 bg-white/100 p-6">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm font-semibold text-[#536075]">
              Name
              <input
                required
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className=" rounded-2xl mt-2 w-full border-b border-[#dce0e6] bg-transparent px-4 py-3 text-[#17243a] outline-none placeholder:text-[#afb5bf]"
              />
            </label>
         <label className=" block text-sm font-semibold text-[#536075]">
            Phone
            <input
              required
              type="tel"
              name="contact_No"
              placeholder="Your phone number"
              value={formData.contact_No}
              onChange={handleChange}
              className=" rounded-2xl mt-2 w-full border-b border-[#dce0e6] bg-transparent px-4 py-3 text-[#17243a] outline-none placeholder:text-[#afb5bf]"
            />
          </label>
          </div>
         
           <label className="mt-5 block text-sm font-semibold text-[#536075]">
              Email
              <input
                required
                type="email"
                name="email"
                placeholder="you@email.com"
                value={formData.email}
                onChange={handleChange}
                className=" rounded-2xl mt-2 w-full border-b border-[#dce0e6] bg-transparent px-4 py-3 text-[#17243a] outline-none placeholder:text-[#afb5bf]"
              />
            </label>
          <label className="mt-5 block text-sm font-semibold text-[#536075]">
            Message
            <textarea
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us how we can help"
              className="mt-2 w-full border-b border-[#dce0e6] bg-transparent px-4 py-3 text-[#17243a] outline-none placeholder:text-[#afb5bf]"
            />
          </label>
            <button 
            type="submit"
            className="mt-6 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950">Submit Inquiry</button>
          </form>
        </div>
    </main>
  );
}