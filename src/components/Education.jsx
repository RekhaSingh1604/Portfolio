import { GraduationCap, Award } from "lucide-react";
import { education } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function Education() {
  const ref = useReveal();

  return (
    <section id="education" className="section" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">07 · Education</span>
          <h2>Education & Training</h2>
        </div>

        <div className="education-list">
          {education.map((item, i) => {
            const Icon = item.type === "degree" ? GraduationCap : Award;
            return (
              <div key={item.title} className="education-card reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
                <div className="education-icon">
                  <Icon size={19} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <span>{item.subtitle}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
