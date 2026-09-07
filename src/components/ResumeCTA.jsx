import { Download, Mail } from "lucide-react";
import { profile } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function ResumeCTA() {
  const ref = useReveal();

  return (
    <section className="section">
      <div className="container">
        <div className="resume-cta reveal" ref={ref}>
          <h2>Let's Build Something Great Together</h2>
          <p>
            Looking for a developer who can turn ideas into reliable and modern web applications?
            Let's connect and build something impactful.
          </p>
          <div className="resume-cta-actions">
            <a href={profile.resumeUrl} download className="btn btn-primary">
              Download Resume <Download size={16} />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
