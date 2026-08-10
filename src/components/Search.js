"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Search() {

    const router = useRouter();
    
    const [city, setCity] = useState("");

    const handleSearch = () => {
    router.push(`/properties?city=${city}`);
    };


    return(
        <div className="relative w-full z-20 mt-10 max-w-4xl rounded-2xl bg-cyan-50 p-4 shadow-2xl backdrop-blur">
           
            <div className="grid gap-4  md:grid-cols-[1.6fr_0.4fr]">
                {/* City */}
                <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter City"
                className="rounded-full border px-4 py-3 text-black"
                />

            {/* Property Type
            <select className="rounded-lg border border-gray-300 px-4 py-3 text-black">
            <option>Property Type</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Plot</option>
            <option>Commercial</option>
            </select> */}

            {/* Budget */}
            {/* <select className="rounded-lg border border-gray-300 px-4 py-3 text-black">
            <option>Budget</option>
            <option>₹20 - 40 Lakh</option>
            <option>₹40 - 60 Lakh</option>
            <option>₹60 Lakh - 1 Cr</option>
            <option>Above ₹1 Cr</option>
            </select> */}

            {/* BHK */}
            {/* <select className="rounded-lg border border-gray-300 px-4 py-3 text-black">
            <option>BHK</option>
            <option>1 BHK</option>
            <option>2 BHK</option>
            <option>3 BHK</option>
            <option>4 BHK</option>
            </select> */}

            {/* Search Button */}
            <button
              onClick={handleSearch}
             className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-400">
                Search
            </button>
        </div>
</div>
    )
}