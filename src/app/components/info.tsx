"use client";

import { useState } from "react";

export default function Info() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <img
            src="/arcana-logo.PNG"
            alt="Arcana logo"
            className="mx-auto w-full max-w-xl sm:max-w-2xl md:max-w-3xl"
          />
        </div>

        <nav className="mt-12 flex flex-wrap items-center justify-center gap-y-3 text-center" aria-label="Info sections">
          <button
            type="button"
            onClick={() => setActiveTab("overview")}
            style={{ fontFamily: '"Arcane Nine", serif' }}
            className={`px-3 text-lg uppercase tracking-[0.14em] transition sm:text-2xl ${
              activeTab === "overview" ? "font-bold text-violet-600" : "text-gray-500 hover:text-indigo-500"
            }`}
          >
            Overview
          </button>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="mx-4 h-7 w-7 -rotate-12 select-none text-white"
          >
            <path
              d="M12 2.6L14.2 7.9L19.5 9.6L15.6 13.2L16.3 19L12 16.4L7.7 19L8.4 13.2L4.5 9.6L9.8 7.9L12 2.6Z"
              fill="currentColor"
            />
            <path
              d="M12.3 3.3L14.6 8.4L19 10L15.3 13.3L15.9 18.2L12.1 16L8 18.6L8.6 13.6L4.8 10L9.5 8.6L12.3 3.3Z"
              fill="currentColor"
              opacity="0.75"
            />
          </svg>
          <button
            type="button"
            onClick={() => setActiveTab("details")}
            style={{ fontFamily: '"Arcane Nine", serif' }}
            className={`px-3 text-lg uppercase tracking-[0.14em] transition sm:text-2xl ${
              activeTab === "details" ? "font-bold text-violet-600" : "text-gray-500 hover:text-indigo-500"
            }`}
          >
            Event Details
          </button>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="mx-4 h-7 w-7 rotate-6 select-none text-white"
          >
            <path
              d="M12 2.6L14.2 7.9L19.5 9.6L15.6 13.2L16.3 19L12 16.4L7.7 19L8.4 13.2L4.5 9.6L9.8 7.9L12 2.6Z"
              fill="currentColor"
            />
            <path
              d="M12.3 3.3L14.6 8.4L19 10L15.3 13.3L15.9 18.2L12.1 16L8 18.6L8.6 13.6L4.8 10L9.5 8.6L12.3 3.3Z"
              fill="currentColor"
              opacity="0.75"
            />
          </svg>
          <button
            type="button"
            onClick={() => setActiveTab("qualification")}
            style={{ fontFamily: '"Arcane Nine", serif' }}
            className={`px-3 text-lg uppercase tracking-[0.14em] transition sm:text-2xl ${
              activeTab === "qualification"
                ? "font-bold text-violet-600"
                : "text-gray-500 hover:text-indigo-500"
            }`}
          >
            Qualification
          </button>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="mx-4 h-7 w-7 -rotate-6 select-none text-white"
          >
            <path
              d="M12 2.6L14.2 7.9L19.5 9.6L15.6 13.2L16.3 19L12 16.4L7.7 19L8.4 13.2L4.5 9.6L9.8 7.9L12 2.6Z"
              fill="currentColor"
            />
            <path
              d="M12.3 3.3L14.6 8.4L19 10L15.3 13.3L15.9 18.2L12.1 16L8 18.6L8.6 13.6L4.8 10L9.5 8.6L12.3 3.3Z"
              fill="currentColor"
              opacity="0.75"
            />
          </svg>
          <button
            type="button"
            onClick={() => setActiveTab("travel")}
            style={{ fontFamily: '"Arcane Nine", serif' }}
            className={`px-3 text-lg uppercase tracking-[0.14em] transition sm:text-2xl ${
              activeTab === "travel" ? "font-bold text-violet-600" : "text-gray-500 hover:text-indigo-500"
            }`}
          >
            Travel
          </button>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="mx-4 h-7 w-7 rotate-12 select-none text-white"
          >
            <path
              d="M12 2.6L14.2 7.9L19.5 9.6L15.6 13.2L16.3 19L12 16.4L7.7 19L8.4 13.2L4.5 9.6L9.8 7.9L12 2.6Z"
              fill="currentColor"
            />
            <path
              d="M12.3 3.3L14.6 8.4L19 10L15.3 13.3L15.9 18.2L12.1 16L8 18.6L8.6 13.6L4.8 10L9.5 8.6L12.3 3.3Z"
              fill="currentColor"
              opacity="0.75"
            />
          </svg>
          <button
            type="button"
            onClick={() => setActiveTab("parents")}
            style={{ fontFamily: '"Arcane Nine", serif' }}
            className={`px-3 text-lg uppercase tracking-[0.14em] transition sm:text-2xl ${
              activeTab === "parents" ? "font-bold text-violet-600" : "text-gray-500 hover:text-indigo-500"
            }`}
          >
            For Parents
          </button>
        </nav>

        <div key={activeTab} className="mt-12 animate-[slideIn_320ms_ease]">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <h3
                className="text-3xl font-black tracking-tight text-gray-800 sm:text-4xl"
                style={{ fontFamily: '"Arcane Nine", serif' }}
              >
                Overview
              </h3>
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-5">
                  <p
                    className="text-base font-bold text-purple-600 sm:text-lg"
                    style={{ fontFamily: '"Arcane Nine", serif' }}
                  >
                    What is Arcana?
                  </p>
                  <p className="mt-2 max-w-3xl leading-7 text-gray-500">
                    This July, 100+ teen hackers from all around the world will gather in Singapore for a 3-day long hackathon Horizons Arcana. Arcana is being organised by Hack Club, Hack Club is a 
                  </p>
                </div>
                <div className="border-b border-gray-100 pb-5">
                  <p
                    className="text-base font-bold text-purple-600 sm:text-lg"
                    style={{ fontFamily: '"Arcane Nine", serif' }}
                  >
                    What makes this edition special?
                  </p>
                  <p className="mt-2 max-w-3xl leading-7 text-gray-500">
                    Horizons is a group of 7 events blah balh blah
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "details" && (
            <div className="space-y-6">
              <h3
                className="text-3xl font-black tracking-tight text-gray-800 sm:text-4xl"
                style={{ fontFamily: '"Arcane Nine", serif' }}
              >
                Event Details
              </h3>
              <p className="max-w-3xl text-base leading-7 text-gray-500 sm:text-lg">
                Dates, format, and practical event structure.
              </p>
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-5">
                  <p
                    className="text-base font-bold text-purple-600 sm:text-lg"
                    style={{ fontFamily: '"Arcane Nine", serif' }}
                  >
                    When does it happen?
                  </p>
                  <p className="mt-2 max-w-3xl leading-7 text-gray-500">
                    [Add exact date/time, check-in, and project submission deadline.]
                  </p>
                </div>
                <div className="border-b border-gray-100 pb-5">
                  <p
                    className="text-base font-bold text-purple-600 sm:text-lg"
                    style={{ fontFamily: '"Arcane Nine", serif' }}
                  >
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
              <h3
                className="text-3xl font-black tracking-tight text-gray-800 sm:text-4xl"
                style={{ fontFamily: '"Arcane Nine", serif' }}
              >
                Qualification Requirements
              </h3>
              <p className="max-w-3xl text-base leading-7 text-gray-500 sm:text-lg">
                Who can join and what they should prepare.
              </p>
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-5">
                  <p
                    className="text-base font-bold text-purple-600 sm:text-lg"
                    style={{ fontFamily: '"Arcane Nine", serif' }}
                  >
                    Who is eligible?
                  </p>
                  <p className="mt-2 max-w-3xl leading-7 text-gray-500">
                    [Add age range, student/professional criteria, and team size rules.]
                  </p>
                </div>
                <div className="border-b border-gray-100 pb-5">
                  <p
                    className="text-base font-bold text-purple-600 sm:text-lg"
                    style={{ fontFamily: '"Arcane Nine", serif' }}
                  >
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
              <h3
                className="text-3xl font-black tracking-tight text-gray-800 sm:text-4xl"
                style={{ fontFamily: '"Arcane Nine", serif' }}
              >
                Travel
              </h3>
              <p className="max-w-3xl text-base leading-7 text-gray-500 sm:text-lg">
                How attendees can get there comfortably.
              </p>
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-5">
                  <p
                    className="text-base font-bold text-purple-600 sm:text-lg"
                    style={{ fontFamily: '"Arcane Nine", serif' }}
                  >
                    How do I reach the venue?
                  </p>
                  <p className="mt-2 max-w-3xl leading-7 text-gray-500">
                    [Add transit routes, parking notes, and nearest landmarks.]
                  </p>
                </div>
                <div className="border-b border-gray-100 pb-5">
                  <p
                    className="text-base font-bold text-purple-600 sm:text-lg"
                    style={{ fontFamily: '"Arcane Nine", serif' }}
                  >
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
              <h3
                className="text-3xl font-black tracking-tight text-gray-800 sm:text-4xl"
                style={{ fontFamily: '"Arcane Nine", serif' }}
              >
                For Parents
              </h3>
              <p className="max-w-3xl text-base leading-7 text-gray-500 sm:text-lg">
                Important context for guardians and family.
              </p>
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-5">
                  <p
                    className="text-base font-bold text-purple-600 sm:text-lg"
                    style={{ fontFamily: '"Arcane Nine", serif' }}
                  >
                    How is student safety handled?
                  </p>
                  <p className="mt-2 max-w-3xl leading-7 text-gray-500">
                    its not
                  </p>
                </div>
                <div className="border-b border-gray-100 pb-5">
                  <p
                    className="text-base font-bold text-purple-600 sm:text-lg"
                    style={{ fontFamily: '"Arcane Nine", serif' }}
                  >
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

