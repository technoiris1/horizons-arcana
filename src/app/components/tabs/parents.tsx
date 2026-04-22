export default function Parents(){
    return(
                    <div className="space-y-4">
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