import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projects, profile } from "../data/content";
import { useReveal } from "../hooks/useReveal";

// Deterministic per-project gradient so each mockup panel reads distinctly.
const gradients = [
  "linear-gradient(135deg, rgba(108,140,255,0.35), rgba(52,216,176,0.1))",
  "linear-gradient(135deg, rgba(52,216,176,0.32), rgba(108,140,255,0.1))",
  "linear-gradient(135deg, rgba(255,158,109,0.28), rgba(108,140,255,0.12))",
  "linear-gradient(135deg, rgba(108,140,255,0.28), rgba(255,158,109,0.1))",
  "linear-gradient(135deg, rgba(52,216,176,0.28), rgba(255,158,109,0.12))",
];

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">04 · Projects</span>
          <h2>Selected Work</h2>
          <p>A mix of client, internship and self-directed projects across the stack.</p>
        </div>

        <div>
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`project-row reveal ${i % 2 === 1 ? "reverse" : ""}`}
            >
              <div className="project-visual">
                <div className="project-visual-chrome">
                  <span />
                  <span />
                  <span />
                </div>
                <div
                  className="project-visual-body"
                  style={{ "--project-gradient": gradients[i % gradients.length] }}
                >
                  <span className="project-visual-mark">{project.title}</span>
                </div>
              </div>

              <div className="project-content">
                <span className="project-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-desc">{project.description}</p>

                {project.features.length > 0 && (
                  <div className="project-features">
                    {project.features.map((f) => (
                      <span key={f} className="project-feature">
                        {f}
                      </span>
                    ))}
                  </div>
                )}

                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    GitHub <Github size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer reveal">
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            View All Projects <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
