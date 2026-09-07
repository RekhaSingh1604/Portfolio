import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>

        <div className="footer-social">
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={16} />
          </a>
          <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
          <a href={profile.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram size={16} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={16} />
          </a>
        </div>

        <span className="footer-made">Built with Rekhaa &amp; ❤️</span>
      </div>
    </footer>
  );
}
