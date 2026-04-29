"use client";

import { useState, useRef, useEffect } from "react";
import { Averia_Serif_Libre } from "next/font/google";
import Overview from "./tabs/overview";
import Details from "./tabs/event_deets";
import Qualification from "./tabs/qualification";
import Travel from "./tabs/travel";
import Parents from "./tabs/parents";
import Navbar from "./navbar";
const averiaSerif = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: [ "700"],
});

export default function Info() {
  const [activeTab, setActiveTab] = useState("overview");
  const navbarRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeTab]);

  return (
    <section ref={sectionRef} className={`${averiaSerif.className} bg-[#1b3364] px-6 pt-0 pb-24 sm:px-10 lg:px-16`}>
      <div className="mx-auto max-w-7xl">
        {/* navbar with all the tabs */}
        <div
          ref={navbarRef}
          className="sticky top-0 z-40 bg-[#1b3364] py-2"
        >
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* the content */}
        <div ref={contentRef} className="mt-20 animate-[slideIn_320ms_ease]" key={activeTab}>
          {activeTab === "overview" && <Overview />}

          {activeTab === "details" && <Details />}

          {activeTab === "qualification" && <Qualification />}

          {activeTab === "travel" && <Travel />}

          {activeTab === "parents" && <Parents />}
        </div>
      </div>
    </section>
  );
}




