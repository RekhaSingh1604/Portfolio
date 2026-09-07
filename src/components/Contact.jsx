import { useState } from "react";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import { profile } from "../data/content";
import { useReveal } from "../hooks/useReveal";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  // No backend wired up yet — this opens the visitor's mail client
  // pre-filled with the form contents. Swap this for a real API
  // call (see the note in the walkthrough) once you add one.
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject || "Portfolio inquiry"
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">08 · Contact</span>
          <h2>Let's Connect</h2>
          <p>Have a role, project, or idea in mind? Send a message and I'll get back to you.</p>
        </div>

        <div className="contact-grid">
          <form className="reveal" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required value={form.message} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message <Send size={15} />
            </button>
            <p className="form-note" style={{ marginTop: 14 }}>
              Sends via your email client for now — connect a backend to handle this server-side.
            </p>
          </form>

          <div className="contact-info-list reveal" style={{ transitionDelay: "0.1s" }}>
            <a className="contact-info-item" href={`mailto:${profile.email}`}>
              <span className="contact-info-icon">
                <Mail size={17} />
              </span>
              <div>
                <span>Email</span>
                <span>{profile.email}</span>
              </div>
            </a>
            <a className="contact-info-item" href={profile.social.github} target="_blank" rel="noopener noreferrer">
              <span className="contact-info-icon">
                <Github size={17} />
              </span>
              <div>
                <span>GitHub</span>
                <span>github.com/RekhaSingh1604</span>
              </div>
            </a>
            <a className="contact-info-item" href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
              <span className="contact-info-icon">
                <Linkedin size={17} />
              </span>
              <div>
                <span>LinkedIn</span>
                <span>linkedin.com/in/rekha-singh</span>
              </div>
            </a>
            <div className="contact-info-item">
              <span className="contact-info-icon">
                <MapPin size={17} />
              </span>
              <div>
                <span>Location</span>
                <span>{profile.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
