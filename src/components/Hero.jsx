import { useState } from "react";
import { ArrowRight, Download, MessageCircle } from "lucide-react";
import { profile, floatingTech } from "../data/content";
import { useReveal } from "../hooks/useReveal";

// Chip positions around the portrait — tuned to sit just outside the frame.
const chipPositions = [
  { top: "6%", left: "-14%" },
  { top: "22%", right: "-16%" },
  { bottom: "20%", left: "-18%" },
  { bottom: "4%", right: "-10%" },
];

export default function Hero() {
  const ref = useReveal();
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <span className="hero-badge">
            <span className="hero-badge-dot" />
            {profile.badge}
          </span>

          <h1>
            <span className="hero-name">Hi, I'm {profile.name}</span>
            <span className="hero-role">{profile.title}</span>
          </h1>

          <p className="hero-desc">{profile.heroDescription}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={16} />
            </a>
            <a href={profile.resumeUrl} download className="btn btn-ghost">
              Download Resume <Download size={16} />
            </a>
            <a href="#contact" className="btn btn-text">
              Let's Talk <MessageCircle size={15} />
            </a>
          </div>

          <div className="hero-meta">
            <div className="hero-meta-item">
              <strong>1.5+</strong>
              <span>Years Experience</span>
            </div>
            <div className="hero-meta-item">
              <strong>10+</strong>
              <span>Projects Built</span>
            </div>
            <div className="hero-meta-item">
              <strong>MERN</strong>
              <span>Full Stack</span>
            </div>
          </div>
        </div>

        <div className="hero-portrait-col reveal" style={{ transitionDelay: "0.12s" }}>
          <div className="hero-portrait">
            <div className="hero-portrait-glow" />
            <div className="hero-portrait-frame">
              <div className="hero-portrait-inner">
                {/*
                  IMPORTANT — why this path works:
                  "/profile-photo.jpg" is a ROOT-ABSOLUTE path. Vite serves
                  everything inside the /public folder from the site root as-is,
                  unprocessed. So this file must live at:

                      rekha-portfolio/public/profile-photo.jpg

                  NOT in src/assets — a plain string in `src=` is never
                  resolved by the bundler; only `import` statements are. If you
                  want the image in src/assets instead, see the OPTION B note
                  at the bottom of this file.
                */}
                {!photoFailed ? (
                  <img
                    src="/profile-photo.jpg"
                    alt={`${profile.name}, ${profile.title}`}
                    onError={() => setPhotoFailed(true)}
                  />
                ) : (
                  // Fallback is intentionally NOT another <img> pointing at the
                  // same file — if the photo is missing/broken, showing the
                  // exact same broken source again defeats the fallback.
                  <div className="hero-portrait-placeholder" aria-hidden="true">
                    RS
                  </div>
                )}
              </div>
            </div>

            {floatingTech.map((tech, i) => (
              <span key={tech} className="hero-floating-chip" style={chipPositions[i]}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/*
  OPTION B — importing from src/assets instead of public/
  ---------------------------------------------------------
  If you'd rather keep the photo in src/assets/ (Vite will then bundle,
  hash, and optimize it), do this instead:

  1. Move the file to: rekha-portfolio/src/assets/rkimage.png

  2. At the top of this file, add a real import (imports are resolved by
     the bundler at build time, unlike plain strings):

         import rkImage from "../assets/rkimage.png";

  3. Change the <img> tag above to:

         <img
           src={rkImage}
           alt={`${profile.name}, ${profile.title}`}
           onError={() => setPhotoFailed(true)}
         />

  Either option works — don't do both. Option A (public/) is simpler and
  is what the rest of this project (resume.pdf, favicon.svg) already
  assumes, so it's the one used above by default.
*/