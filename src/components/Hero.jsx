import { useState, useEffect } from "react";
import "../Style/Hero.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

/* Roles moved outside to avoid useEffect warning */

const roles = [
  "Frontend Developer | Web Developer | Web Designer | WordPress Developer",
  "Builder of Real Time Applications"
];

export default function Hero() {
  

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);

  const typingSpeed = 120;
  const deletingSpeed = 60;
  const pauseTime = 1200;

  useEffect(() => {

    const current = loop % roles.length;
    const fullText = roles[current];

    const handleTyping = () => {

      if (!isDeleting) {
        setText(fullText.substring(0, text.length + 1));
      } else {
        setText(fullText.substring(0, text.length - 1));
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      }

      else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoop(loop + 1);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);

  }, [text, isDeleting, loop]);

  return (
    <section className="hero">

      <div className="overlay"></div>

      <div className="hero-content">

        <p className="hello">Hello, I'm</p>

        <h1>Rekha Singh</h1>

       <h2>
  I build modern & user-friendly web experiences
</h2>

        <p className="exp">
          {text}
          <span className="cursor"></span>
        </p>

        <div className="hero-buttons">

          {/* SOCIAL ICONS */}

          <div className="social-icon">

            <a
              className="icon instagram"
              href="https://www.instagram.com/rekha_singh1604"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              className="icon github"
              href="https://github.com/RekhaSingh1604"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              className="icon mail"
              href="mailto:singhrekh5704@gmail.com"
            >
              <IoMailSharp />
            </a>

            <a
              className="icon linkedin"
              href="https://www.linkedin.com/in/rekha-singh-35a22b309/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

          {/* PROJECT BUTTON */}

          <a
            className="book-btn"
            href="https://amarneerfuelstationfrontend.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            View my projects
          </a>

        </div>

      </div>

    </section>
  );
}