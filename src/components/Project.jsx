import React ,{useEffect}from "react";
import "../Style/Project.css";
import AOS from "aos";
import "aos/dist/aos.css";
import third from "../assets/Screenshot (774).png";
import second from "../assets/Screenshot (773).png";
import first from "../assets/Screenshot (772).png";
import four from '../assets/Screenshot (776).png'
const Project = () => {


  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true
    });
  }, []);


  return (
    <section className="projects">

      <h2 className="project-title" data-aos="fade-up">My Projects</h2>

      <div className="project-container">

        {/* Card 1 */}
        <div className="project-card" data-aos="fade-up"
     data-aos-duration="1000">

          <div className="project-img">
            <img src={first} alt="Zanifest"/>
          </div>

          <div className="project-info">
            <h3>Zanifest Insurance</h3>

            <p>
              Insurance platform helping users explore and compare policies with
              a modern responsive interface.
            </p>

            <span className="tech">React • CSS • Vercel</span>

            <div className="buttons">
              <a href="https://zanifestinsurance.com/" target="_blank">Live</a>
              <a href="#">GitHub</a>
            </div>

          </div>
        </div>


        {/* Card 2 */}
        <div className="project-card" data-aos="fade-up"
     data-aos-duration="2000">

          <div className="project-img">
            <img src={second} alt="Fuel"/>
          </div>

          <div className="project-info">
            <h3>Fuel Station Website</h3>

            <p>
              Web application designed to manage fuel station operations
              with a clean dashboard interface.
            </p>

            <span className="tech">React • JS • CSS</span>

            <div className="buttons">
              <a href="https://amarneerfuelstationfrontend.vercel.app/" target="_blank">Live</a>
              <a href="#">GitHub</a>
            </div>

          </div>
        </div>


        {/* Card 3 */}
        <div className="project-card" data-aos="fade-up"
        data-aos-duration="4000">

          <div className="project-img">
            <img src={third} alt="Portfolio"/>
          </div>

          <div className="project-info">
            <h3>Developer Portfolio</h3>

            <p>
              Personal portfolio website showcasing projects, skills and
              developer experience.
            </p>

            <span className="tech">React • CSS • UI</span>

            <div className="buttons">
              <a href="https://facebooklead.vercel.app/" target="_blank">Live</a>
              <a href="#">GitHub</a>
            </div>

          </div>
        </div>


        {/* Card 4 */}
        <div className="project-card" data-aos="fade-up"
        data-aos-duration="7000">

          <div className="project-img">
            <img src={four} alt="Undersocial"/>
          </div>

          <div className="project-info">
            <h3>Undersocial Cover</h3>

            <p>
              Branding website developed for digital marketing and online
              business visibility.
            </p>

            <span className="tech">WordPress • UI • Branding</span>

            <div className="buttons">
              <a href="https://undercoversocials.in/" target="_blank">Live</a>
              
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default Project;