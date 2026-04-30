export default function Travel(){
    return(
            <div className="space-y-4">
              <h3
                className="text-3xl font-black tracking-tight text-[#1b3465] sm:text-4xl"
                   style= {{ fontFamily: '"Cooper BT", serif' }}
              >
                Travelling to Arcana
              </h3>
              <div className="space-y-10">
                <div className="pb-2">
                  <p className="mt-4 max-w-4xl leading-8 text-[#1b3465] sm:text-xl">
                  Arcana is in Singapore, a small island nation in South-East Asia. Singapore is pretty well connected to the rest of the world, below you can find some information which can help you plan your travel-
              </p>
                </div>
                         <div className="pb-2">
                    <p
                    className="text-base font-bold text-[#1b3465] sm:text-2xl"
                       style= {{ fontFamily: '"Cooper BT", serif' }}
                  >
                    Travel Stipends
                  </p>
             
                  <p className="mt-4 max-w-4xl leading-8 text-[#1b3465] sm:text-lg">
Our aim is to make this event accessible to everyone regardless of their financial or geographical background, so we will provide travel stipends to whoever works for them. You can get the travel stipends from Horizons shop at the rate of 8.5$/hr, which you can spend towards your flights, visa etc.
                  </p>
                </div>
                <div className="pb-2">
                  <p
                  className="text-base font-bold text-[#1b3465] sm:text-2xl"
                       style= {{ fontFamily: '"Cooper BT", serif' }}
                  >
                  Flying in and out of Singapore
                </p>
             
                <p className="mt-4 max-w-4xl leading-8 text-[#1b3465] sm:text-lg">
                Singapore has one main airport- Singapore Changi, it is one of the best airports in the world and is very well connected to the rest of the world. 
                You should try to fly in before the evening of 31st July and fly out anytime after the evening of 2nd August.
                </p>
                </div>
                                <div className="pb-2">
                  <p
                  className="text-base font-bold text-[#1b3465] sm:text-2xl"
                       style= {{ fontFamily: '"Cooper BT", serif' }}
                  >
                  Visa
                </p>
             
          <p className="mt-4 max-w-4xl leading-8 text-[#1b3465] sm:text-lg">
Most nationalities can travel to Singapore visa-free for a certain number of days or can get a visa on arrival(VoA). If you require a visa to enter Singapore, we will try our best to help you out with it. More details surrounding the visa process will be announced as we move closer to the event.
    </p>
                </div>
                <div className="pb-2">
                  <p
                  className="text-base font-bold text-[#1b3465] sm:text-2xl"
                       style= {{ fontFamily: '"Cooper BT", serif' }}
                  >
                  Airport Pickups
                </p>
             
          <p className="mt-4 max-w-4xl leading-8 text-[#1b3465] sm:text-lg">
Participants can request airport pickups, if requested- staff members will be there at the airport to pick them up and drop them to the venue. More details about this will be announced as we move closer to the event.
  </p>
                </div>
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
      `}</style>
            </div>
    )
}