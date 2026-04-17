"use client";

import { useState } from "react";
import { Averia_Serif_Libre } from "next/font/google";

const averiaSerif = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: [ "700"],
});

export default function Info() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section className={`${averiaSerif.className} bg-[#1b3364] px-6 pt-0 pb-24 sm:px-10 lg:px-16`}>
      <div className="mx-auto max-w-7xl">
        <nav className="mt-0 flex flex-wrap items-center justify-center gap-x-2 gap-y-6 text-center pt-0" aria-label="Info sections">
          <button
            type="button"
            onClick={() => setActiveTab("overview")}
            style={{ fontFamily: '"Arcane Nine", serif' }}
            className={`px-3 text-lg uppercase tracking-[0.14em] transition sm:text-2xl ${
              activeTab === "overview" ? "font-bold text-[#f9b6ff]" : "text-gray-500 hover:text-[#6cc7ec]"
            }`}
          >
            Overview
          </button>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="mx-4 h-7 w-7 -rotate-12 select-none text-white translate-y-[0.5px]"
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
              activeTab === "details" ? "font-bold text-[#f9b6ff]" : "text-gray-500 hover:text-[#6cc7ec]"
            }`}
          >
            Event Details
          </button>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="mx-4 h-7 w-7 rotate-6 select-none text-white translate-y-[0.5px]"
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
                ? "font-bold text-[#f9b6ff]"
                : "text-gray-500 hover:text-[#6cc7ec]"
            }`}
          >
            Qualification
          </button>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="mx-4 h-7 w-7 -rotate-6 select-none text-white translate-y-[0.5px]"
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
              activeTab === "travel" ? "font-bold text-[#f9b6ff]" : "text-gray-500 hover:text-[#6cc7ec]"
            }`}
          >
            Travel
          </button>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="mx-4 h-7 w-7 rotate-12 select-none text-white translate-y-[0.5px]"
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
              activeTab === "parents" ? "font-bold text-[#f9b6ff]" : "text-gray-500 hover:text-[#6cc7ec]"
            }`}
          >
            For Parents
          </button>
        </nav>

        <div key={activeTab} className="mt-16 animate-[slideIn_320ms_ease]">
          {activeTab === "overview" && (
            <div className="space-y-10">
              <h3
                className="text-3xl font-black tracking-tight text-[#f9b6ff] sm:text-4xl"

              >
                What is Arcana?
              </h3>
              <div className="space-y-10">
                <div className="pb-2">
                  <p className="mt-4 max-w-4xl leading-8 text-[#6cc7ec] sm:text-xl">
                    This July, 100+ teen hackers from all around the world will gather in Singapore for a 3-day long hackathon Horizons Arcana. Arcana is being organised by Hack Club, Hack Club is a 
                    501(c)(3) nonprofit that helps over 50,000 high school makers all around the world.
                    <br />
                    Food and accomodation will be provided, this hackathon is 100% free for all the attendees. Travel stipends will be provided too! Our goal is to make this event accessible to everyone regardless of their financial or geographical background.
                  </p>
                </div>
                <div className="pb-2">
                  <p
                    className="text-base font-bold text-[#f9b6ff] sm:text-2xl"
                  >
                    What is Hack Club?
                  </p>
                  <p className="mt-4 max-w-4xl leading-8 text-[#6cc7ec] sm:text-lg">
                    Hack Club is a 501(c)(3) nonprofit (EIN: 81-2908499) that helps high school students learn to code and build projects. We’re the largest teen-led coding community, with over 50,000 students building projects with their friends in Hack Club each year. You can learn more about Hack Club at <a href="https://hackclub.com" target="_blank" className="event-link"> hackclub.com</a>!
                    <br />
                    Some of the past events we've run are-
                  </p>
                  <ul className="mt-5 space-y-3 text-[#6cc7ec] sm:text-lg">
                    <li className="flex items-center gap-3">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 shrink-0 -rotate-6 text-white translate-y-[0.5px]">
                        <path d="M12 2.6L14.2 7.9L19.5 9.6L15.6 13.2L16.3 19L12 16.4L7.7 19L8.4 13.2L4.5 9.6L9.8 7.9L12 2.6Z" fill="currentColor" />
                        <path d="M12.3 3.3L14.6 8.4L19 10L15.3 13.3L15.9 18.2L12.1 16L8 18.6L8.6 13.6L4.8 10L9.5 8.6L12.3 3.3Z" fill="currentColor" opacity="0.75" />
                      </svg>
                      <span><a href="https://overglade.hackclub.com/" className="event-link" target="_blank">Overglade</a> - A 4-day long Game Jam in Singapore!</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 shrink-0 rotate-6 text-white translate-y-[0.5px]">
                        <path d="M12 2.6L14.2 7.9L19.5 9.6L15.6 13.2L16.3 19L12 16.4L7.7 19L8.4 13.2L4.5 9.6L9.8 7.9L12 2.6Z" fill="currentColor" />
                        <path d="M12.3 3.3L14.6 8.4L19 10L15.3 13.3L15.9 18.2L12.1 16L8 18.6L8.6 13.6L4.8 10L9.5 8.6L12.3 3.3Z" fill="currentColor" opacity="0.75" />
                      </svg>    
                      <span><a href="https://www.youtube.com/watch?v=fuTlToZ1SX8&t=5s" target="_blank" className="event-link">Juice</a> - A 2-month long game jam followed by a week long popup cafe in Shanghai!</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 shrink-0 -rotate-12 text-white translate-y-[0.5px]">
                        <path d="M12 2.6L14.2 7.9L19.5 9.6L15.6 13.2L16.3 19L12 16.4L7.7 19L8.4 13.2L4.5 9.6L9.8 7.9L12 2.6Z" fill="currentColor" />
                        <path d="M12.3 3.3L14.6 8.4L19 10L15.3 13.3L15.9 18.2L12.1 16L8 18.6L8.6 13.6L4.8 10L9.5 8.6L12.3 3.3Z" fill="currentColor" opacity="0.75" />
                      </svg>
                      <span><a className="event-link" href="https://youtu.be/kaEFv7e49mo?si=3cqsRI02dbSHf5bu" target="_blank">Undercity</a> - A 4-day long hardware hackathon at Github HQ, in San Francisco!</span>
                    </li>
                  </ul>
                </div>
                <div className="pb-2">
                  <p
                    className="text-base font-bold text-[#f9b6ff] sm:text-2xl"
                  >
                    What is Horizons?
                  </p>
                  <p className="mt-4 max-w-4xl leading-8 text-[#6cc7ec] sm:text-lg">
                   Horizons is a group of 7 Hack Club flagship hackathons taking place in all the continents(except Antarctica ofc), Arcana is the Horizons event in Singapore, Asia. <br />Read more about Horizons at <a href="https://horizons.hackclub.com" className="event-link" target="_blank">horizons.hackclub.com</a>!                    </p>
                </div>
                <div className="pb-2">
                  <p
                    className="text-base font-bold text-[#f9b6ff] sm:text-2xl"
                  >
                    Can I participate?
                  </p>
                  <p className="mt-4 max-w-4xl leading-8 text-[#6cc7ec] sm:text-lg">
                    Yes, you can as long as you meet the requirements mentioned below:
                  </p>
                  <ul className="mt-5 space-y-3 text-[#6cc7ec] sm:text-lg">
                    <li className="flex items-center gap-3">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 shrink-0 -rotate-6 text-white translate-y-[0.5px]">
                        <path d="M12 2.6L14.2 7.9L19.5 9.6L15.6 13.2L16.3 19L12 16.4L7.7 19L8.4 13.2L4.5 9.6L9.8 7.9L12 2.6Z" fill="currentColor" />
                        <path d="M12.3 3.3L14.6 8.4L19 10L15.3 13.3L15.9 18.2L12.1 16L8 18.6L8.6 13.6L4.8 10L9.5 8.6L12.3 3.3Z" fill="currentColor" opacity="0.75" />
                      </svg>
                      <span>You're 18 or younger and above 13 years of age.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 shrink-0 rotate-6 text-white translate-y-[0.5px]">
                        <path d="M12 2.6L14.2 7.9L19.5 9.6L15.6 13.2L16.3 19L12 16.4L7.7 19L8.4 13.2L4.5 9.6L9.8 7.9L12 2.6Z" fill="currentColor" />
                        <path d="M12.3 3.3L14.6 8.4L19 10L15.3 13.3L15.9 18.2L12.1 16L8 18.6L8.6 13.6L4.8 10L9.5 8.6L12.3 3.3Z" fill="currentColor" opacity="0.75" />
                      </svg>    
                      <span>You qualify by shipping quality projects and don't engage in fraudulent activities in an attempt to cheat us.</span>
                    </li>
                  </ul>
                </div>
                <div className="pb-2">
                  <p
                    className="text-base font-bold text-[#f9b6ff] sm:text-2xl"
                  >
                    Contact Information
                  </p>
                  <p className="mt-4 max-w-4xl leading-8 text-[#6cc7ec] sm:text-lg">
Feel free to email us at <a href="mailto:arcana@horizons.hackclub.com" className="event-link">arcana@horizons.hackclub.com</a>!   </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "details" && (
            <div className="space-y-10">
              <div className="space-y-10">
                <div className="border-gray-100 pb-2">
<p className="mt-4 max-w-4xl leading-8 text-[#6cc7ec] sm:text-xl">                   
     Arcana is from <span className="event-link">31st July-2nd August</span>, 2026 in <span className="event-link">Singapore</span>!
                    <br />
                    More details like venue and schedule will be announced as we move closer to the event!
                    </p>
                </div>

              </div>
            </div>
          )}

          {activeTab === "qualification" && (
            <div className="space-y-10">
              <h3
                   className="text-3xl font-black tracking-tight text-[#f9b6ff] sm:text-4xl"
              >
                How to qualify?
              </h3>
                  <div className="pb-2">
                  <p className="mt-4 max-w-4xl leading-8 text-[#6cc7ec] sm:text-lg">
                    In order to qualify for Arcana, you'll need to spend X amount of hours working on one or multiple projects and ship it on the <a href="https://horizons.hackclub.com" target="_blank" className="event-link">horizons platform</a>. Once it's reviewed and approved, you can buy a ticket of the event from there for free!
                  </p>
                </div>
                <div className="pb-2">
                  <p
                    className="text-base font-bold text-[#f9b6ff] sm:text-2xl"
                  >
                    Can I participate?
                  </p>
                  <p className="mt-4 max-w-4xl leading-8 text-[#6cc7ec] sm:text-lg">
                    Yes, you can as long as you meet the requirements mentioned below:
                  </p>
                  <ul className="mt-5 space-y-3 text-[#6cc7ec] sm:text-lg">
                    <li className="flex items-center gap-3">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 shrink-0 -rotate-6 text-white translate-y-[0.5px]">
                        <path d="M12 2.6L14.2 7.9L19.5 9.6L15.6 13.2L16.3 19L12 16.4L7.7 19L8.4 13.2L4.5 9.6L9.8 7.9L12 2.6Z" fill="currentColor" />
                        <path d="M12.3 3.3L14.6 8.4L19 10L15.3 13.3L15.9 18.2L12.1 16L8 18.6L8.6 13.6L4.8 10L9.5 8.6L12.3 3.3Z" fill="currentColor" opacity="0.75" />
                      </svg>
                      <span>You're above 13 and under 18 years of age.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 shrink-0 rotate-6 text-white translate-y-[0.5px]">
                        <path d="M12 2.6L14.2 7.9L19.5 9.6L15.6 13.2L16.3 19L12 16.4L7.7 19L8.4 13.2L4.5 9.6L9.8 7.9L12 2.6Z" fill="currentColor" />
                        <path d="M12.3 3.3L14.6 8.4L19 10L15.3 13.3L15.9 18.2L12.1 16L8 18.6L8.6 13.6L4.8 10L9.5 8.6L12.3 3.3Z" fill="currentColor" opacity="0.75" />
                      </svg>    
                      <span>You qualify by shipping legit projects and don't engage in fraudulent activities in an attempt to cheat us.</span>
                    </li>
                  </ul>
                </div>
            </div>
          )}

          {activeTab === "travel" && (
            <div className="space-y-10">
                    <h3
                className="text-3xl font-black tracking-tight text-[#f9b6ff] sm:text-4xl"

              >
                Travel Stipends
              </h3>
                <div className="pb-2">
                  <p className="mt-4 max-w-4xl leading-8 text-[#6cc7ec] sm:text-xl">
                    Our aim is to make this event accessible to everyone regardless of their financial or geographical background, so we will be providing travel stipends. You can get them by working extra hours over the event requirement from the Horizons shop at a rate of <span className="event-link">8.5$ for every hour </span> spent, which you can spend towards your flights/visa/passport etc.  <br />
                    </p>
                </div>
                         <div className="pb-2">
                    <p
                    className="text-base font-bold text-[#f9b6ff] sm:text-2xl"
                  >
                    Flying in and out of Singapore
                  </p>
             
                  <p className="mt-4 max-w-4xl leading-8 text-[#6cc7ec] sm:text-lg">
Singapore has only one main airport- <span className="event-link"> Singapore Changi</span>. You can request a staff pickup from the airport, if you do- staff will receive you and escort you to the venue. We will put out a form as we move closer to the event to request a staff pickup. 
More details regarding when to fly in and out will be announced as we move closer to the event.
                  </p>
                  </div>
            </div>
          )}

          {activeTab === "parents" && (
            <div className="space-y-10">
                          <h3
            className="text-3xl font-black tracking-tight text-[#f9b6ff] sm:text-4xl"

              >
                Parent's Guide
              </h3>
                <div className="pb-2">
                  <p className="mt-4 max-w-4xl leading-8 text-[#6cc7ec] sm:text-xl">
                    We understand sending their kid to a different country brings in a lot of concerns for the parents and we totally respect them. Safety and well-being of the participants is our utmost priority and there will be no compromises with that.
                    <br />
                   For details, you can read our parent's guide <a className="event-link">here</a>! You can also book a parents call and talk with the organisers- we'll try our best to clear all your concerns! <br />Email us at <a href="mailto:arcana@horizons.hackclub.com" className="event-link">arcana@horizons.hackclub.com</a> for any questions!
                    </p>
                </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .event-link {
          color: #f9b6ff;   
          font-weight: 700;
          text-decoration-line: underline;
          text-decoration-style: dotted;
          text-decoration-color: rgba(249, 182, 255, 0.95);
          text-decoration-thickness: 2px;
          text-underline-offset: 0.22em;
          transition: color 180ms ease, text-decoration-color 180ms ease, background-color 180ms ease;
        }

        .event-link:hover {
          color: #ffd7ff;
          text-decoration-style: wavy;
          text-decoration-color: rgba(255, 215, 255, 0.98);
          background-color: rgba(255, 255, 255, 0.08);
        }

        .event-link:focus-visible {
          outline: 2px dashed rgba(255, 215, 255, 0.95);
          outline-offset: 3px;
          border-radius: 0.25rem;
        }

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

