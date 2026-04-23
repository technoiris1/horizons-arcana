export default function Details(){
    return(
    <div className="space-y-4">
        <h3 className="text-3xl font-black tracking-tight text-[#f9b6ff] sm:text-4xl">
        Event Details
        </h3>
        <div className="pb-2">
        <p className="mt-4 max-w-4xl leading-8 text-[#6cc7ec] sm:text-xl">                   
Arcana is from <span className="event-link">31st July-2nd August</span>, 2026 in <span className="event-link">Singapore</span>!
            <br />
            More details like venue and schedule will be announced as we move closer to the event!
            <br />
            Join <a href="https://hackclub.slack.com/archives/C0AF4T2GCTZ" target="_blank" className="event-link">#horizons-arcana</a> on Hack Club Slack for the latest updates and announcements!
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