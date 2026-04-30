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
  const [navbarTranslate, setNavbarTranslate] = useState(0);
  const navbarRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current && activeTab !== "overview") {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeTab]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !navbarRef.current) return;

      const navbarHeight = navbarRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;
      const currentScroll = window.scrollY;

      const distanceToBottom = totalHeight - (currentScroll + windowHeight);
      if (distanceToBottom < navbarHeight * 2) {
        const translateAmount = Math.max(0, navbarHeight * 2 - distanceToBottom);
        setNavbarTranslate(translateAmount);
      } else {
        setNavbarTranslate(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className={`${averiaSerif.className} bg-[#d1f3ff] px-6 pt-0 pb-24 sm:px-10 lg:px-16`}>
      <div className="mx-auto max-w-7xl">
        {/* navbar with all the tabs */}
        <div
          ref={navbarRef}
          className="sticky top-0 z-40 bg-[#74bbf1] py-2 transition-transform duration-300"
          style={{ transform: `translateY(-${navbarTranslate}px)` }}
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




