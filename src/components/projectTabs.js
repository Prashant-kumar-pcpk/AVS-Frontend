
"use client";

const projectTabs = [
  {
    id: "overview",
    label: "Overview",
    icon: "⌂",
  },
  {
    id: "highlights",
    label: "Highlights",
    icon: "✦",
  },
  {
    id: "amenities",
    label: "Amenities",
    icon: "♢",
  },
  {
    id: "floor-plans",
    label: "Floor Plans",
    icon: "▦",
  },
  {
    id: "location",
    label: "Location",
    icon: "⌖",
  },
  {
    id: "gallery",
    label: "Gallery",
    icon: "▧",
  },
  {
    id: "price",
    label: "Price",
    icon: "₹",
  },
];

export default function ProjectTabs({
  activeTab,
  setActiveTab,
}) {
  return (
    <section className="relative z-30 rounded-4xl bg-white">

      <div className="mx-auto max-w-7xl px-5 sm:w-full sm:px-6 lg:px-8">

        <div className="-mt-8 overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_15px_40px_rgba(15,23,42,0.12)]">

          <div className="scrollbar-hide flex overflow-x-auto">

            {projectTabs.map((tab) => (

              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`group relative flex min-w-[125px] flex-1 items-center justify-center gap-2 px-3 py-5 text-sm font-semibold transition-all duration-300 sm:min-w-[100px] ${
                  activeTab === tab.id
                    ? "rounded-4xl bg-[#0d2b52] text-white"
                    : "bg-white text-slate-600 hover:bg-slate-50 hover:text-[#0d2b52]"
                }`}
              >

                <span
                  className={`text-lg transition-transform duration-300 group-hover:scale-110 ${
                    activeTab === tab.id
                      ? "text-[#ff9d00]"
                      : "text-[#0d2b52]"
                  }`}
                >
                  {tab.icon}
                </span>

                <span className="whitespace-nowrap">
                  {tab.label}
                </span>

                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-1/2 h-1 w-12 -translate-x-1/2 rounded-full bg-[#ff9d00]" />
                )}

              </button>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}