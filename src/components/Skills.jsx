import { LayoutGrid, Server, Database, Wrench } from "lucide-react";
import { skillCategories } from "../data/content";
import { useReveal } from "../hooks/useReveal";

const icons = {
  Frontend: LayoutGrid,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
};

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">02 · Skills</span>
          <h2>Technologies I Work With</h2>
          <p>A practical, production-focused toolkit across the full MERN stack.</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => {
            const Icon = icons[cat.category] ?? LayoutGrid;
            return (
              <div
                key={cat.category}
                className="skill-card reveal"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="skill-card-icon">
                  <Icon size={19} />
                </div>
                <h3>{cat.category}</h3>
                <div className="skill-chip-list">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
