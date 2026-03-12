// import React, { useState, useEffect } from "react"; import "../Style/Hero.css"; import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa"; import { IoMailSharp } from "react-icons/io5"; export default function Hero() { const roles = ["Frontend Developer | Web Developer | Web Designer | WordPress Developer ", "Builder of Real Time Applications"]; const [text, setText] = useState(""); const [isDeleting, setIsDeleting] = useState(false); const [loop, setLoop] = useState(0); const typingSpeed = 120; useEffect(() => { const current = loop % roles.length; const fullText = roles[current]; const handleTyping = () => { setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)); if (!isDeleting && text === fullText) { setTimeout(() => setIsDeleting(true), 1200); } else if (isDeleting && text === "") { setIsDeleting(false); setLoop(loop + 1); } }; const timer = setTimeout(handleTyping, isDeleting ? 60 : typingSpeed); return () => clearTimeout(timer); }, [text, isDeleting, loop]); return (<section className="hero"> <div className="overlay"></div> <div className="hero-content"> <p className="hello">Hello, I'm</p> <h1>Rekha Singh</h1> <h2> I build user-friendly websites with <span> Rekha Singh</span> </h2> <p className="exp"> {text} <span className="cursor"></span> </p> <div className="hero-buttons"> <button className="watch-btn"> <a href="https://github.com/RekhaSingh1604"><FaGithub /></a> <a href="mailto:singhrekh5704@gmail.com"><IoMailSharp /></a> <a href="https://www.linkedin.com/in/rekha-singh-35a22b309/"><FaLinkedin /></a> <a href="https://www.instagram.com/rekha_singh1604"><FaInstagramSquare /></a> </button> <a className="book-btn" href="https://amarneerfuelstationfrontend.vercel.app/"> View my projects </a> </div> </div> </section>); }

import React, { useState, useEffect } from "react";
import "../Style/Hero.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

export default function Hero() {

  const roles = [
    "Frontend Developer | Web Developer | Web Designer | WordPress Developer",
    "Builder of Real Time Applications"
  ];

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const typingSpeed = 120;

  useEffect(() => {

    const current = loop % roles.length;
    const fullText = roles[current];

    const handleTyping = () => {

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1200);
      } 
      else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoop(loop + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 60 : typingSpeed);

    return () => clearTimeout(timer);

  }, [text, isDeleting, loop]);

  return (
    <section className="hero">

      <div className="overlay"></div>

      <div className="hero-content">

        <p className="hello">Hello, I'm</p>

        <h1>Rekha Singh</h1>

        <h2>
          I build user-friendly websites with
          <span> Rekha Singh</span>
        </h2>

        <p className="exp">
          {text}
          <span className="cursor"></span>
        </p>

        <div className="hero-buttons">

          <div className="social-icon">

            <a className="icon instagram" href="https://www.instagram.com/rekha_singh1604">
              <FaInstagram />
            </a>

            <a className="icon github" href="https://github.com/RekhaSingh1604">
              <FaGithub />
            </a>

            <a className="icon mail" href="mailto:singhrekh5704@gmail.com">
              <IoMailSharp />
            </a>

            <a className="icon linkedin" href="https://www.linkedin.com/in/rekha-singh-35a22b309/">
              <FaLinkedin />
            </a>

          </div>

          <a
            className="book-btn"
            href="https://amarneerfuelstationfrontend.vercel.app/"
          >
            View my projects
          </a>

        </div>

      </div>

    </section>
  );
}