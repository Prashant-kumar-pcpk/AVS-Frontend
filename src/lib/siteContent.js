export const projects = [
 
  {
    slug: "solstice-villas",
    name: "AVS City Square",
    location: "Raj Nagar Extension, Ghaziabad",
    configuration: "4 BHK flats",
    status: "Delivered",
    possession: "Ready",
    rera: "UPRERA-9876",
    image:
      "/Assets/AVS City Square.jpg",
    blurb: "Private villa living with smart eco-friendly design and lush landscapes.",
  },
  {
    slug: "elevation-plots",
    name: "AVS High Street",
    location: "Raj Nagar Extension, Ghaziabad",
    
    configuration: "3 & 4BHK Flats",
    status: "Delivered",
    rera: "RERA-4567",
    image:
      "/Assets/avs-high-street.jpg",
    blurb: "Luxury homes crafted for elevated family living with premium amenities.",
  },

  
];

export const currentProjects = [
  {
    
    name: "AVS ",
    location: "Raj Nagar Extension, Ghaziabad",
    status: "Under Construction",
    configuration: "2, 3 & 4 BHK Luxury Apartments",
    price: "Starting ₹79.79 Lakh*",
    image: "/Assets/img20.jpg",
    brochure: "/Brochure/avs combine brochure.pdf",
    description:
      "Experience premium living with spacious apartments, world-class amenities, landscaped gardens, clubhouse, swimming pool, and excellent connectivity.",
      gallery:[
        "/properties/AVS Current-Project.jpeg",
        "/properties/img17.jpg",
        "/properties/img20.jpg",
        "/properties/img23.jpg",
        "/properties/img26.jpg",
        "/properties/img29.jpg",
        "/properties/img31.jpg",
        "/properties/img34.jpg",
        "/properties/img37.jpg",
      ],
  },
];

export const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};




export const services = [
  { title: "Buy Property", description: "Curated options for first-time buyers, families, and investors." },
  { title: "Sell Property", description: "Strategic pricing and premium positioning for faster property turnover." },
  { title: "Luxury Homes", description: "High-end residences with bespoke interiors and concierge-style support." },
  { title: "Property Investment", description: "Data-backed investment guidance for long-term wealth creation." },
];

export const categories = [
  { title: "Residential", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=700&q=80" },
  { title: "Luxury Villas", image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=700&q=80" },
  { title: "Apartments", image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=700&q=80" },
  { title: "Plots", image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=700&q=80" },
  { title: "Farm Houses", image: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=700&q=80" },
  { title: "Independent Houses", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80" },
];

export const testimonials = [
  {
     id:"1",
    name: "Aarav Sharma",
    role: "Home Buyer",
    quote: "AVS made our home-buying journey smooth, transparent, and truly premium.",
    rating: 5,
  },
  {
     id:"2",
    name: "Mira Kapoor",
    role: "Investor",
    quote: "Their advice helped us choose a property with excellent rental and appreciation potential.",
    rating: 5,
  },
  {
     id:"3",
    name: "Sanjay & Priya Singh",
    role: "Family",
    quote: "From site visits to paperwork, everything felt professional and stress-free.",
    rating: 5,
  },
];

export const stats = [
  { label: "Years of Experience", value: "15+" },
  { label: "Happy Families", value: "2K+" },
  { label: "Properties Sold", value: "1.2K+" },
  { label: "Cities Covered", value: "10" },
  { label: "Expert Advisors", value: "10+" },
];


export const serviceList = [
        {
          id:"1",
          icon: "🏡",
          title: "Verified Properties",
          text: "Every property is legally verified before being listed.",
        },
        {
          id:"2",
          icon: "👨‍💼",
          title: "Trusted Experts",
          text: "Professional advisors help you at every stage.",
        },
        {
           id:"3",
          icon: "💰",
          title: "Transparent Pricing",
          text: "No hidden charges with complete cost transparency.",
        },
        {
           id:"4",
          icon: "📍",
          title: "Prime Locations",
          text: "Premium projects in high-growth investment areas.",
        },
        {
          id:"5",
          icon: "🤝",
          title: "Customer Satisfaction",
          text: "Dedicated relationship managers for seamless support.",
        },
        {
           id:"6",
          icon: "🏦",
          title: "Home Loan Support",
          text: "Easy loan assistance from leading banks and NBFCs.",
        },
      ];
