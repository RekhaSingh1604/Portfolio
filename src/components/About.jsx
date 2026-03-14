// import React from 'react'
import '../Style/About.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

const About = () => {
  return (
    <section class="about-section">

      <div class="about-container">

        <h1 class="bg-text" >ABOUT ME</h1>

        <h2 class="title"  data-aos="fade-up">Know Me More</h2>

        <h3 class="heading">
          I'm <span>Rekha Singh</span>, a Web Developer
        </h3>

        <p class="about-text">
          {/* Hello! I'm a passionate Web Developer with skills in frontend
and a little backend technologies. I create responsive and
user-friendly websites and web applications to help businesses grow.
I aim to craft seamless user experiences while delivering functional
and visually appealing projects. */}
          I have a 6 month experiences with knowledge of HTML, CSS, JavaScript, React.js, WordPress, figma, Node.js, and MongoDB . I have built projects such as a Petrol Pump Management System & Facebook-lead ,undercoversocial website and E-commerce website. I am passionate about creating responsive web applications and looking for an opportunity as a Frontend or MERN Stack Developer to apply my skills and grow in the tech industry.
        </p>

        <div class="social-box">
          <a href="https://github.com/RekhaSingh1604"><FaGithub /></a>
          <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=singhrekh5704@gmail.com"><IoMailSharp /> </a>
          <a href="https://www.linkedin.com/in/rekha-singh-35a22b309/"><FaLinkedin /> </a>
          <a href="https://www.instagram.com/rekha_singh1604/?utm_source=qr&igsh=ZXViYncyd3ptcG1x"><FaInstagramSquare /></a>
        </div>

      </div>

    </section>
  )
}

export default About
