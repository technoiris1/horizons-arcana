'use client';

import { useEffect } from 'react';
import './style.css';
import Leaderboard from '../leaderboard';

export default function MainPage() {
  useEffect(() => {
    // FAQ Toggle functionality
    const items = document.querySelectorAll(".faq-item");

    items.forEach(item => {
      const button = item.querySelector(".faq-toggle") as HTMLButtonElement;
      const content = item.querySelector(".faq-content") as HTMLElement;

      // open first item on load
      if (item.classList.contains("open") && content) {
        content.style.height = content.scrollHeight + "px";
      }

      if (button) {
        button.addEventListener("click", () => {
          // close others
          items.forEach(i => {
            if (i !== item) {
              i.classList.remove("open");
              const otherContent = i.querySelector(".faq-content") as HTMLElement;
              if (otherContent) {
                otherContent.style.height = "0";
              }
            }
          });

          // toggle current
          if (item.classList.contains("open")) {
            item.classList.remove("open");
            if (content) {
              content.style.height = "0";
            }
          } else {
            item.classList.add("open");
            if (content) {
              content.style.height = content.scrollHeight + "px";
            }
          }
        });
      }
    });
  }, []);

  const scrollDown = () => {
    const target = document.getElementById("scroll-here");
    if (target) {
      const elementTop = target.offsetTop;
      window.scrollTo({
        top: elementTop - window.innerHeight * 0.37,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <div className="hero">
        <header>
          <a className="hc-flag" target="_blank" href="https://hackclub.com/" rel="noopener noreferrer">
            <img src="/Assets/hc-flag-v2.webp" draggable="false" alt="Hack Club flag" />
          </a>
        </header>

        <div className="scroll-parent">
          <img src="/Assets/arrow.webp" className="scroll-arrow" onClick={scrollDown} alt="scroll arrow" draggable="false" />
        </div>
        <img src="/Assets/2-liner.webp" className="two-liner" draggable="false" alt="two liner" />
        <img src="/Assets/hero-bottom.webp" className="bottom" draggable="false" alt="hero bottom" />
      </div>

      <div className="section1">
        <section id="scroll-here">
          <div className="section1-content">
            <h2>Welcome to Horizons Arcana!</h2>
            <p>
              This July, 100+ students from all around the world will gather in Singapore for a 3-day long hackathon. Horizons Arcana is organised by <a href="https://hackclub.com/" target="_blank" rel="noopener noreferrer">Hack Club</a>, a US-based 501(c)(3) nonprofit and network of 60,000 high school makers across the globe.
              <br/><br/>
              Food and accommodation will be provided—this hackathon is 100% free for all the attendees. Travel or flight stipends will be provided too! Our goal is to make this event accessible to everyone regardless of their financial or geographical background.
              
              <div className="overglade-images">
                <img src="/Assets/overglade1.webp" alt="overglade 1" />
                <img src="/Assets/overglade2.webp" alt="overglade 2" />
                <img src="/Assets/overglade3.webp" alt="overglade 3" />
              </div>
            
              <i>^ Photos from Hack Club's <a href="https://overglade.hackclub.com/" target="_blank" rel="noopener noreferrer">Overglade</a>, a hackathon for 50 teens that took place in Singapore in January 2026.</i>
              <br/><br/>
              Horizons Arcana is part of <a href="https://horizons.hackclub.com/" target="_blank" rel="noopener noreferrer">Horizons</a>: a series of 7 Hack Club hackathons taking place all around the world. Arcana, taking place in Singapore, is the Horizons event for Asia.
            </p>

            <h2>How do I join?</h2>
            <p>
              To attend Horizons Arcana, you must:
              <ul>
                <li>Be of age 13-18 (inclusive) at the time of the event</li>
                <li>Qualify by spending 35 hours total working on software/hardware projects to ship to the <a href="https://horizons.hackclub.com/" target="_blank" rel="noopener noreferrer">Horizons Platform</a></li>
              </ul>
              <br/>
            </p>
          </div>
        </section>
      </div>

      <div className="section2">
        <div className="section2-content">
          <h1>Ready to dive into Arcana?</h1>
          <p>Sign up and start making projects on the Horizons platform!</p>
          <a href="https://horizons.hackclub.com/" target="_blank" rel="noopener noreferrer">
            <img id="sign-up-button" src="/Assets/sign-up.webp" draggable="false" alt="sign up button" />
          </a>
          <p id="pst">+ if you're already in the Hack Club<br/>Slack, join <a href="https://hackclub.enterprise.slack.com/archives/C0AKNMLG2P5" target="_blank" rel="noopener noreferrer">#horizons-arcana</a>!</p>
        </div>
      </div>




{/*leaderboard start */}
      <div className="section3">
        <div className="section3-content">
          <h1>Leaderboard</h1>
          <Leaderboard />
        </div>
      </div>
{/*leaderboard end */}





      <div className="section3">
        <div className="section3-content">
          <h1>Additional Information</h1>
          <div className="faq">
            
            <div className="faq-item open">
              <button className="faq-toggle">
              <span className="faq-title">About Hack Club</span>
              <span className="faq-icon"><img src="/Assets/x.webp" width="20" alt="toggle" draggable="false" /></span>
              </button>
              <div className="faq-content">
              Hack Club is a 501(c)(3) nonprofit (EIN: 81-2908499) that helps high school students learn to code and build projects. We're the largest teen-led coding community, with over 60,000 students building projects with their friends in Hack Club each year.
              <br/><br/>
              Some of the past events we've run include:
              <ul>
                <li><a href="https://overglade.hackclub.com/" target="_blank" rel="noopener noreferrer">Overglade</a>: A 4-day game jam in Singapore</li>
                <li><a href="https://www.youtube.com/watch?v=fuTlToZ1SX8" target="_blank" rel="noopener noreferrer">Juice</a>: A 2-month game jam followed by a week-long popup cafe in Shanghai</li>
                <li><a href="https://www.youtube.com/watch?v=kaEFv7e49mo" target="_blank" rel="noopener noreferrer">Undercity</a>: A 4-day hardware hackathon at Github HQ, in San Francisco</li>
              </ul> 
              
              <div className="video-row">
                <div className="video-wrapper">
                  <iframe 
                    src="https://www.youtube.com/embed/fuTlToZ1SX8"
                    title="Video 1"
                    frameBorder="0"
                    allowFullScreen>
                  </iframe>
                </div>

                <div className="video-wrapper">
                  <iframe 
                    src="https://www.youtube.com/embed/kaEFv7e49mo"
                    title="Video 2"
                    frameBorder="0"
                    allowFullScreen>
                  </iframe>
                </div>
              </div>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-toggle">
              <span className="faq-title">Event Details</span>
              <span className="faq-icon"><img src="/Assets/x.webp" width="20" alt="toggle" draggable="false" /></span>
              </button>
              <div className="faq-content">
              Horizons Arcana is from July 31st-August 2nd 2026, and is happening in Singapore!
              <br/><br/>
              Additional information including the venue and schedule will be announced as we move closer to the event.
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-toggle">
              <span className="faq-title">Qualification</span>
              <span className="faq-icon"><img src="/Assets/x.webp" width="20" alt="toggle" draggable="false" /></span>
              </button>
              <div className="faq-content">
              In order to qualify for Horizons Arcana, you'll need to spend 35 hours total working on projects to ship to the <a href="https://horizons.hackclub.com/" target="_blank" rel="noopener noreferrer">Horizons Platform</a>. Once they're reviewed and approved, you can purchase the ticket for the event from the Horizons shop.
              <br/><br/>
              Completing the 35 hours and purchasing the ticket from the Horizons shop guarantees you a spot at the event.
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-toggle">
              <span className="faq-title">Travel</span>
              <span className="faq-icon"><img src="/Assets/x.webp" width="20" alt="toggle" draggable="false" /></span>
              </button>
              <div className="faq-content">
              <h3>1. Travel Stipends</h3>
              We aim to make this event as accessible as possible. Travel stipends are available for purchase in the Horizons shop, at a rate of $8.5 for every approved hour. You may spend travel stipends on your flights, visas, or passports in order to attend Arcana.
              <br/><br/>
              <h3>2. Flying in and out of Singapore</h3>
              Singapore has only one main airport—Changi Airport (SIN). You can request a staff pickup from the airport. If you do, staff will receive you and escort you to the venue. We'll release the staff pickup form as we move closer to the event. More details regarding when to fly in and out will be announced later as well.
              </div>
            </div>
            
            <div className="faq-item">
              <button className="faq-toggle">
              <span className="faq-title">For Parents</span>
              <span className="faq-icon"><img src="/Assets/x.webp" width="20" alt="toggle" draggable="false" /></span>
              </button>
              <div className="faq-content">
              We understand that many parents are hesitant about sending their children to a different country. Your child's safety and well-being are our utmost priority. For details, please read our parents guide here. 
              <br/><br/>
              You can also book a parent call with the organisers if you have any questions. Please reach out to <a href="mailto:arcana@horizons.hackclub.com" target="_blank" rel="noopener noreferrer">arcana@horizons.hackclub.com</a>.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section4">
        <div className="footer-content">
          <h3>Made with ♥︎ by teenagers, for teenagers at Hack Club</h3>
          
          We believe you learn best by building so we're creating community and providing grants so you can make awesome projects. In the past few years, we've <a href="https://summer.hackclub.com/" target="_blank" rel="noopener noreferrer">partnered with GitHub to run Summer of Making</a>, <a href="https://github.com/hackclub/the-hacker-zephyr" target="_blank" rel="noopener noreferrer">hosted the world's longest hackathon on land</a>, and <a href="https://www.youtube.com/watch?v=QvCoISXfcE8" target="_blank" rel="noopener noreferrer">ran Canada's largest high school hackathon</a>.
          <br/><br/>
          At Hack Club, students aren't just learning, they're shipping.

          <div className="footer-links">
            <div className="link-column">
              <h3>Hack Club</h3>
              <a href="https://hackclub.com/philosophy/" target="_blank" rel="noopener noreferrer">Our Philosophy</a>
              <a href="https://hackclub.com/team/" target="_blank" rel="noopener noreferrer">Team & Board</a>
              <a href="https://hackclub.com/philanthropy/" target="_blank" rel="noopener noreferrer">Donate</a>
            </div>

            <div className="link-column">
              <h3>Horizons</h3>
              <a href="https://horizons.hackclub.com/" target="_blank" rel="noopener noreferrer">Sign up now</a>
              <a href="https://horizons.hackclub.com/faq" target="_blank" rel="noopener noreferrer">FAQ</a>
              <a href="https://guides.horizons.hackclub.com/" target="_blank" rel="noopener noreferrer">Guides</a>
            </div>

            <div className="link-column">
              <h3>Community</h3>
              <a href="https://slack.hackclub.com/" target="_blank" rel="noopener noreferrer">Slack</a>
              <a href="https://hackclub.com/clubs/" target="_blank" rel="noopener noreferrer">Clubs</a>
              <a href="https://jams.hackclub.com/" target="_blank" rel="noopener noreferrer">Jams</a>
              <a href="https://workshops.hackclub.com/" target="_blank" rel="noopener noreferrer">Workshops</a>
              <a href="https://hackclub.com/conduct/" target="_blank" rel="noopener noreferrer">Code of Conduct</a>
            </div>
          </div>
        </div>
        
        <img src="/Assets/footer.webp" className="footer-img" draggable="false" alt="footer" />
      </div>
    </>
  );
}