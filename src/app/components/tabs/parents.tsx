export default function Parents(){
    return(
  <div className="space-y-4">
      <h3 
      className="text-3xl font-black tracking-tight text-[#1b3465] sm:text-4xl"
      style= {{ fontFamily: '"Cooper BT", serif' }}
      >
          Parents Section
      </h3>
      <div className="space-y-10"
            style= {{ fontFamily: '"Cooper BT", serif' }}>
        <div className="pb-2">
        <p className="mt-4 max-w-4xl leading-8 text-[#1b3465] sm:text-xl">
            We understand sending their kid to a different country brings in a lot of concerns for the parents and we totally respect them. Safety and well-being of the participants is our utmost priority and there will be no compromises with that.
          <br />
Below listed are some resources which may help the parents clear their doubts regarding the event and the safety measures taken.
          </p>
    </div>
    <div className="pb-2">
      <p
      className="text-base font-bold text-[#1b3465] sm:text-2xl"
      style= {{ fontFamily: '"Cooper BT", serif' }}
      >
      Parent's Guide
      </p>
      <p className="mt-4 max-w-4xl leading-8 text-[#1b3465] sm:text-lg">
      Closer to the event, we will release a detailed parent's guide which will include all the information regarding the event, safety and safeguarding measures, code of conduct, event waivers, emergency contact information and hotlines etc.
      </p>
      </div>


    <div className="pb-2">
      <p
      className="text-base font-bold text-[#1b3465] sm:text-2xl"
      style= {{ fontFamily: '"Cooper BT", serif' }}
      >
      Parent's Call
      </p>
      <p className="mt-4 max-w-4xl leading-8 text-[#1b3465] sm:text-lg">
      If you have any doubts or concerns regarding the event, you can schedule a call and talk with the organisers of the event directly. Email us at <a href="mailto:arcana@horizons.hackclub.com" className="event-link">arcana@horizons.hackclub.com</a> to schedule a call!
       </p>
      </div>


    <div className="pb-2">
      <p
      className="text-base font-bold text-[#1b3465] sm:text-2xl"
      style= {{ fontFamily: '"Cooper BT", serif' }}
      >
      Parents Accompanying the Participant
      </p>
      <p className="mt-4 max-w-4xl leading-8 text-[#1b3465] sm:text-lg">
      We understand that some parents might want to accompany their kid for travel and the event. While that's totally fine, Hack Club won't be able to cover any expenses for the parents, including flights, accommodation, or other travel costs. 
      <br />
      Parents won't be allowed inside the venue during the event, but they're welcome to briefly stop by for 5-10 minutes to check in and make sure everything feels comfortable.
    </p>
      </div>
    <style jsx>{`
        .event-link {
          color: #1b3465;   
          font-weight: 700;
          text-decoration-line: underline;
          text-decoration-style: dotted;
          text-decoration-color: rgb(27, 52, 101,0.95);
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
          outline: 2px dashed rgba(27, 52, 101, 0.95);
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
      `}
      </style>
      </div>
    </div>
            
    )
}