"use client";

import { useState } from "react";

export default function Info() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-400">
            Hackathon Info
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500 sm:text-lg">
            Choose a heading to switch content.
          </p>
        </div>

        <nav className="mt-12 flex flex-wrap items-center justify-center gap-y-3 text-center" aria-label="Info sections">
          <button
            type="button"
            onClick={() => setActiveTab("overview")}
            className={`px-2 text-sm uppercase tracking-[0.12em] transition sm:text-base ${
              activeTab === "overview" ? "font-bold text-violet-600" : "text-gray-500 hover:text-indigo-500"
            }`}
          >
            Overview
          </button>
          <span className="mx-2 text-violet-400">-</span>
          <span className="text-lg text-violet-400">*</span>
          <span className="mx-2 text-violet-400">-</span>
          <button
            type="button"
            onClick={() => setActiveTab("details")}
            className={`px-2 text-sm uppercase tracking-[0.12em] transition sm:text-base ${
              activeTab === "details" ? "font-bold text-violet-600" : "text-gray-500 hover:text-indigo-500"
            }`}
          >
            Event Details
          </button>
          <span className="mx-2 text-violet-400">-</span>
          <span className="text-lg text-violet-400">*</span>
          <span className="mx-2 text-violet-400">-</span>
          <button
            type="button"
            onClick={() => setActiveTab("qualification")}
            className={`px-2 text-sm uppercase tracking-[0.12em] transition sm:text-base ${
              activeTab === "qualification"
                ? "font-bold text-violet-600"
                : "text-gray-500 hover:text-indigo-500"
            }`}
          >
            Qualification
          </button>
          <span className="mx-2 text-violet-400">-</span>
          <span className="text-lg text-violet-400">*</span>
          <span className="mx-2 text-violet-400">-</span>
          <button
            type="button"
            onClick={() => setActiveTab("travel")}
            className={`px-2 text-sm uppercase tracking-[0.12em] transition sm:text-base ${
              activeTab === "travel" ? "font-bold text-violet-600" : "text-gray-500 hover:text-indigo-500"
            }`}
          >
            Travel
          </button>
          <span className="mx-2 text-violet-400">-</span>
          <span className="text-lg text-violet-400">*</span>
          <span className="mx-2 text-violet-400">-</span>
          <button
            type="button"
            onClick={() => setActiveTab("parents")}
            className={`px-2 text-sm uppercase tracking-[0.12em] transition sm:text-base ${
              activeTab === "parents" ? "font-bold text-violet-600" : "text-gray-500 hover:text-indigo-500"
            }`}
          >
            For Parents
          </button>
        </nav>

        <div key={activeTab} className="mt-12 animate-[slideIn_320ms_ease]">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <h3 className="text-3xl font-black tracking-tight text-gray-800 sm:text-4xl">
                Overview
              </h3>
              <p className="max-w-3xl text-base leading-7 text-gray-500 sm:text-lg">
                A quick look at what this hackathon is all about.
              </p>
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-5">
                  <p className="text-base font-bold text-purple-600 sm:text-lg">
                    What is this hackathon about?
                  </p>
                  <p className="mt-2 max-w-3xl leading-7 text-gray-500">
                    [Add your core theme, mission, and what participants will build.]
                  </p>
                </div>
                <div className="border-b border-gray-100 pb-5">
                  <p className="text-base font-bold text-purple-600 sm:text-lg">
                    What makes this edition special?
                  </p>
                  <p className="mt-2 max-w-3xl leading-7 text-gray-500">
                    [Add what is unique this year: tracks, mentors, prizes, or vibe.]
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "details" && (
            <div className="space-y-6">
              <h3 className="text-3xl font-black tracking-tight text-gray-800 sm:text-4xl">
                Event Details
              </h3>
              <p className="max-w-3xl text-base leading-7 text-gray-500 sm:text-lg">
                Dates, format, and practical event structure.
              </p>
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-5">
                  <p className="text-base font-bold text-purple-600 sm:text-lg">
                    When does it happen?
                  </p>
                  <p className="mt-2 max-w-3xl leading-7 text-gray-500">
                    [Add exact date/time, check-in, and project submission deadline.]
                  </p>
                </div>
                <div className="border-b border-gray-100 pb-5">
                  <p className="text-base font-bold text-purple-600 sm:text-lg">
                    Where is it hosted?
                  </p>
                  <p className="mt-2 max-w-3xl leading-7 text-gray-500">
                    [Add venue address or online platform details and access instructions.]
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "qualification" && (
            <div className="space-y-6">
              <h3 className="text-3xl font-black tracking-tight text-gray-800 sm:text-4xl">
                Qualification Requirements
              </h3>
              <p className="max-w-3xl text-base leading-7 text-gray-500 sm:text-lg">
                Who can join and what they should prepare.
              </p>
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-5">
                  <p className="text-base font-bold text-purple-600 sm:text-lg">Who is eligible?</p>
                  <p className="mt-2 max-w-3xl leading-7 text-gray-500">
                    [Add age range, student/professional criteria, and team size rules.]
                  </p>
                </div>
                <div className="border-b border-gray-100 pb-5">
                  <p className="text-base font-bold text-purple-600 sm:text-lg">
                    Do beginners qualify?
                  </p>
                  <p className="mt-2 max-w-3xl leading-7 text-gray-500">
                    [Explain skill expectations and if beginner-friendly resources exist.]
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "travel" && (
            <div className="space-y-6">
              <h3 className="text-3xl font-black tracking-tight text-gray-800 sm:text-4xl">
                Travel
              </h3>
              <p className="max-w-3xl text-base leading-7 text-gray-500 sm:text-lg">
                How attendees can get there comfortably.
              </p>
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-5">
                  <p className="text-base font-bold text-purple-600 sm:text-lg">
                    How do I reach the venue?
                  </p>
                  <p className="mt-2 max-w-3xl leading-7 text-gray-500">
                    [Add transit routes, parking notes, and nearest landmarks.]
                  </p>
                </div>
                <div className="border-b border-gray-100 pb-5">
                  <p className="text-base font-bold text-purple-600 sm:text-lg">
                    Any accommodation support?
                  </p>
                  <p className="mt-2 max-w-3xl leading-7 text-gray-500">
                    [Add stay options, partner hotels, and accessibility travel notes.]
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "parents" && (
            <div className="space-y-6">
              <h3 className="text-3xl font-black tracking-tight text-gray-800 sm:text-4xl">
                For Parents
              </h3>
              <p className="max-w-3xl text-base leading-7 text-gray-500 sm:text-lg">
                Important context for guardians and family.
              </p>
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-5">
                  <p className="text-base font-bold text-purple-600 sm:text-lg">
                    How is student safety handled?
                  </p>
                  <p className="mt-2 max-w-3xl leading-7 text-gray-500">
                    [Add supervision details, emergency contact flow, and check-in protocol.]
                  </p>
                </div>
                <div className="border-b border-gray-100 pb-5">
                  <p className="text-base font-bold text-purple-600 sm:text-lg">
                    How can parents stay informed?
                  </p>
                  <p className="mt-2 max-w-3xl leading-7 text-gray-500">
                    [Add communication channels, live updates, and pickup instructions.]
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}