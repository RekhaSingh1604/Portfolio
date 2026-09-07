import { ChevronRight } from "lucide-react";
import { experience } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">03 · Experience</span>
          <h2>Where I've Been Building</h2>
        </div>

        <div className="timeline">
          {experience.map((job) => (
            <div key={job.role} className="timeline-item reveal">
              <span className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-card-head">
                  <h3>{job.role}</h3>
                  <span className="timeline-period">{job.period}</span>
                </div>
                <div className="timeline-points">
                  {job.points.map((point) => (
                    <div key={point} className="timeline-point">
                      <ChevronRight size={15} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
