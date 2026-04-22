"use client";

import { useState } from "react";
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

  return (
    <section className={`${averiaSerif.className} bg-[#1b3364] px-6 pt-0 pb-24 sm:px-10 lg:px-16`}>
      <div className="mx-auto max-w-7xl">

        {/* navbar with all the tabs */}  
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />


{/* the content */}
        <div className="mt-20 animate-[slideIn_320ms_ease]" key={activeTab}>
          {activeTab === "overview" && (
<Overview />
          )}

          {activeTab === "details" && (
<Details />
          )}

          {activeTab === "qualification" && (
<Qualification />
          )}

          {activeTab === "travel" && (
<Travel />
          )}

          {activeTab === "parents" && (
<Parents />
          )}
        </div>
      </div>
    </section>
  );
}




