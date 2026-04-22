export default function Qualification(){
    return(
                    <div className="space-y-4">
              <h3
                className="text-3xl font-black tracking-tight text-[#f9b6ff] sm:text-4xl"
              >
                How to qualify?
              </h3>
              <div className="space-y-10">
                <div className="pb-2">
                  <p className="mt-4 max-w-4xl leading-8 text-[#6cc7ec] sm:text-xl">
                    In order to qualify for Arcana, you'll need to spend <span className="event-link">35 hours</span> working on one or multiple projects and ship it on the <a href="https://horizons.hackclub.com" target="_blank" className="event-link">horizons platform</a>. Once it's reviewed and approved, you can buy a ticket of the event from there for free!
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
                  <ul className="mt-2 space-y-3 text-[#6cc7ec] sm:text-lg">
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
        <style jsx>{`
        .event-link {
          color: #f9b6ff;   
          font-weight: 700;
          text-decoration-line: underline;
          text-decoration-style: dotted;
          text-decoration-color: rgb(249, 182, 255,0.95);
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
            </div>
    )
}