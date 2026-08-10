import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.avsrealty.com"),
  title: {
    default: "AVS | Premium Real Estate in India",
    template: "%s | AVS",
  },
  description: "Premium residential and commercial properties by AVS with expert consultation, site visits, home loan support, and transparent guidance.",
  keywords: [
    "real estate",
    "luxury apartments",
    "villas",
    "plots",
    "property in Gurgaon",
    "flats in Noida",
    "premium homes",
  ],
  openGraph: {
    title: "AVS | Premium Real Estate in India",
    description: "Luxury homes and premium investment opportunities tailored for buyers and investors.",
    type: "website",
    url: "https://www.avsrealty.com",
    images: ["https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AVS | Premium Real Estate in India",
    description: "Premium residential and commercial properties by AVS.",
    images: ["https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.avsrealty.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#e4e9ef]">
        <Navbar />
        {children}
       <Footer />

      </body>
    </html>
  );
}
