"use client";

import { useState, useRef, useEffect, useCallback } from "react";
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
  const [isNavbarFloating, setIsNavbarFloating] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navbarWrapperRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeTab]);

  const handleScroll = useCallback(() => {
    if (!navbarWrapperRef.current || !sectionRef.current) return;

    const sectionTop = sectionRef.current.getBoundingClientRect().top;
    const sectionBottom = sectionRef.current.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    // Navbar floats when info section scrolls past the top, but not when at footer
    const shouldFloat = sectionTop <= 0 && sectionBottom > windowHeight * 0.5;
    
    setIsNavbarFloating(shouldFloat);
  }, []);

  const throttledScroll = useCallback(() => {
    if (scrollTimeoutRef.current) return;

    handleScroll();

    scrollTimeoutRef.current = setTimeout(() => {
      scrollTimeoutRef.current = null;
    }, 100); // Throttle to 100ms intervals
  }, [handleScroll]);

  useEffect(() => {
    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [throttledScroll]);

  return (
    <section ref={sectionRef} className={`${averiaSerif.className} bg-[#1b3364] px-6 pt-0 pb-24 sm:px-10 lg:px-16`}>
      <div className="mx-auto max-w-7xl">
        {/* navbar with all the tabs */}
        <div
          ref={navbarWrapperRef}
          className={`z-40 ${
            isNavbarFloating
              ? "fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-4xl bg-gradient-to-br from-[#1b3364]/90 to-[#0f1f3f]/90 backdrop-blur-md py-4 px-4 rounded-2xl shadow-2xl border border-[#6cc7ec]/20"
              : "relative bg-transparent py-2"
          }`}
        >
          <div className="transition-opacity duration-500 ease-out opacity-100">
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>

        {/* the content */}
        <div ref={contentRef} className={`transition-all duration-500 ease-out ${isNavbarFloating ? "mt-20" : "mt-12"}`}>
          <div className="transition-opacity duration-500 ease-out opacity-100">
            {activeTab === "overview" && <Overview />}
            {activeTab === "details" && <Details />}
            {activeTab === "qualification" && <Qualification />}
            {activeTab === "travel" && <Travel />}
            {activeTab === "parents" && <Parents />}
          </div>
        </div>
      </div>
    </section>
  );
}




