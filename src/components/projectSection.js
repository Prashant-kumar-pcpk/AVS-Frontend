// "use client";

// import { useState } from "react";
// import ProjectTabs from "./projectTabs";
// import CurrentProject from "@/app/currentProject/page";

// export default function ProjectSection() {
//   const [activeTab, setActiveTab] = useState("overview");

//   return (
//     <>
//       {/* ================= PROJECT TABS ================= */}
//       <div className="relative z-30 mx-auto -mb-8 w-[calc(100%-32px)] max-w-[1160px]">
//         <ProjectTabs
//           activeTab={activeTab}
//           setActiveTab={setActiveTab}
//         />
//       </div>

//       {/* ================= CURRENT PROJECT ================= */}
//       <CurrentProject activeTab={activeTab} />
//     </>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import ProjectTabs from "./projectTabs";
import CurrentProject from "@/app/currentProject/page";

export default function ProjectSection() {
  const [activeTab, setActiveTab] = useState("overview");
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    const section = document.getElementById("project-section");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeTab]);

  return (
    <>
      <ProjectTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <CurrentProject activeTab={activeTab} />
    </>
  );
}