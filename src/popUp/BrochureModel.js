
"use client";


import { useState } from "react";

export default function LeadForm () {
  
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    budget: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save form data
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lead`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      console.log("Status:", response.status); 
      console.log("Response:", data); 

      //Check HTTP status instead of data.ok 
      if (!response.ok) { 
        alert(data.message || "Something went wrong"); 
        return; 
      } 

      // Success 
        alert("Lead submitted successfully!");

      // Close popup
      setOpen(false);

       window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

  // Download brochure AFTER successful submission
      const link = document.createElement("a");
      link.href = "/Brochure/avs combine brochure.pdf"; // Place brochure.pdf inside /public
      link.download = "AVS-Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <button onClick={() => setOpen(true)}
        className="bg-amber-200 border text-slate-900 border-amber-400 rounded-4xl py-4 px-8 hover:bg-amber-500">
        Download Brochure →
      </button>

      {open && (
        <div className="fixed inset-0 flex items-center rounded-2xl justify-left bg-black/60">
          <div className="bg-white p-6 rounded-2xl w-2xl py-2">
            <h2 className="text-4xl mb-4 font-semibold leading-[1.05] text-[#cfaa54]">Download Brochure</h2>

          <form 
            onSubmit={handleSubmit}
          className="rounded-[28px] border border-white/10 bg-amber-50 p-2">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm font-semibold text-[#536075]">
              Name :
              <input
                name="name"
                placeholder="Name"
                onChange={handleChange}
                required
                 className=" rounded-2xl mt-2 w-full border-b border-[#dce0e6] bg-transparent px-4 py-3 text-[#17243a] outline-none placeholder:text-[#afb5bf]"
              />
              </label>

              <label className=" block text-sm font-semibold text-[#536075]">
                 Phone :
              <input
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                required
                 className=" rounded-2xl mt-2 w-full border-b border-[#dce0e6] bg-transparent px-4 py-3 text-[#17243a] outline-none placeholder:text-[#afb5bf]"
              />
              </label>
            </div>
          <div className="grid gap-5 mt-3" >
            <label className="block text-sm font-semibold text-[#536075]">
              Emails :
              <input
                name="email"
                type="email"
                placeholder="Emails"
                onChange={handleChange}
                required
                 className=" rounded-2xl mt-2 w-full border-b border-[#dce0e6] bg-transparent px-4 py-3 text-[#17243a] outline-none placeholder:text-[#afb5bf]"
               />
              </label>
              <label className="block text-sm font-semibold text-[#536075]">
                City You Want :
                <input 
                name="city"
                placeholder="city name"
                onChange={handleChange}
                 className=" rounded-2xl mt-2 w-full border-b border-[#dce0e6] bg-transparent px-4 py-3 text-[#17243a] outline-none placeholder:text-[#afb5bf]"/>
              </label>
              <label className="block text-sm font-semibold text-[#536075]">
                Budgets :
                <input 
                name = "budget"
                onChange={handleChange}
                className=" rounded-2xl mt-2 w-full border-b border-[#dce0e6] bg-transparent px-4 py-3 text-[#17243a] outline-none placeholder:text-[#afb5bf]"
                />
              </label>
                <div className="flex justify-center mt-2">
                  <button
                    
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-500 text-white border border-amber-400 rounded-full py-3 px-16 text-lg font-medium w-auto"
                  >
                    Submit & Download
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

