// import React from "react";
// import '../Style/Contact.css'
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { IoMailSharp } from "react-icons/io5";

// function ContactInfo() {
//   return (
//     <>
//     <section className="contact-info-section">
//       <div className="contact-card">

//         <h2>Get in Touch</h2>

//         <p className="contact-desc">
//           Reach out to me through my social channels or send an email.
//         </p>

//         <div className="contact-item">
//           <strong>Email:</strong>
//           <span> singhrekha5704@gmail.com</span>
//         </div>

//         <div className="contact-item">
//           <strong>Phone:</strong>
//           <span> +91 85953*****</span>
//         </div>

//         <div className="contact-item">
//           <strong>Address:</strong>
//           <span>Meethapur Badarpur, New Delhi 110044</span>
//         </div>

//         <div className="social-icons">
//            <a href="https://github.com/RekhaSingh1604"><FaGithub /></a>
//                       <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=singhrekh5704@gmail.com"><IoMailSharp /> </a>
//                       <a href="https://www.linkedin.com/in/rekha-singh-35a22b309/"><FaLinkedin /> </a>
//                       <a href="https://www.instagram.com/rekha_singh1604/?utm_source=qr&igsh=ZXViYncyd3ptcG1x"><FaInstagramSquare /></a> 
          
          
//         </div>

//         <p className="contact-footer">
//           We usually respond within 24 hours. Thank you for reaching out to us!
//         </p>

//       </div>
//     </section>
//     <footer className="footer">

//       <div className="footer-left">
//         <p>
//           @Deployed With <span className="heart">❤</span> by Rekha Singh
//         </p>
//       </div>

     

//       <div className="footer-right">
//         <a href="https://github.com/RekhaSingh1604" target="_blank" rel="noreferrer">
//           <i className="fab fa-github"><FaGithub /></i> check on github
//         </a>
//       </div>

//     </footer>
//     </>
//   );
// }

// export default ContactInfo;


import React from "react";
import "../Style/Contact.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

export default function Contact() {
  return (
    <>
    <section className="contact-section">

      <div className="contact-card">

        <h2>Get in Touch</h2>

        <p className="contact-desc">
          Reach out to me through my social channels or send an email.
        </p>

        <div className="contact-info">

          <p><strong>Email:</strong> singhrekha5704@gmail.com</p>

          <p><strong>Phone:</strong> +91 85953xxxxx</p>

          <p><strong>Address:</strong> Meethapur Badarpur, New Delhi 110044</p>

        </div>

        <div className="social-icons">

          <a href="https://github.com/RekhaSingh1604" className="icon github">
            <FaGithub />
          </a>

          <a href="mailto:singhrekha5704@gmail.com" className="icon mail">
            <IoMailSharp />
          </a>

          <a href="https://www.linkedin.com/in/rekha-singh-35a22b309/" className="icon linkedin">
            <FaLinkedin />
          </a>

          <a href="https://www.instagram.com/rekha_singh1604/?utm_source=qr&igsh=ZXViYncyd3ptcG1x" className="icon instagram">
            <FaInstagram />
          </a>

        </div>

        <p className="response">
          We usually respond within 24 hours. Thank you for reaching out!
        </p>

      </div>

    </section>

    <footer className="footer">

       <div className="footer-left">
         <p>
           @Deployed With <span className="heart">❤</span> by Rekha Singh
         </p>
       </div>

     

       <div className="footer-right">
         <a href="https://github.com/RekhaSingh1604" target="_blank" rel="noreferrer">
           <i className="fab fa-github"><FaGithub /></i> check on github
         </a>
      </div>

     </footer>
   </>

    
  );
}