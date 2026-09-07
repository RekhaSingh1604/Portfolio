import { Check } from "lucide-react";
import { aboutStats, aboutFocus } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">01 · About</span>
          <h2>About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I'm a MERN Stack Developer with 1+ years of practical experience building web
              applications end to end — from interfaces users interact with to the APIs and
              databases that power them. My day-to-day toolkit is React.js, Next.js, Node.js,
              Express.js, MongoDB and MySQL, tied together with REST APIs and JavaScript.
            </p>
            <p>
              I care about the details that make an application pleasant to use and easy to
              maintain: consistent component structure, readable code, and interfaces that hold
              up across devices. I'm comfortable working with Tailwind CSS for fast, consistent
              styling, and I bring the same attention to the backend — clean API design and
              solid data modeling.
            </p>
            <div className="about-focus">
              {aboutFocus.map((item) => (
                <div key={item} className="about-focus-item">
                  <Check size={17} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-stats reveal" style={{ transitionDelay: "0.1s" }}>
            {aboutStats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
