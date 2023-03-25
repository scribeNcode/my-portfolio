import React from "react";
import Header from "../../Components/Navigation/Header/Header";
import Footer from "../../Components/Navigation/Footer/Footer";
import image from "../../Images/myImage.png";
import "../Home/HomeStyles.css";
import AboutMeCard from "../../Components/AboutMeCard/AboutMeCard";
import js from "../../Components/TechnicalSkillls/Images/Using/js.png.png";
import react from "../../Components/TechnicalSkillls/Images/Using/react.png";
import html from "../../Components/TechnicalSkillls/Images/Using/html.png";
import css from "../../Components/TechnicalSkillls/Images/Using/css.png";
import vue from "../../Components/TechnicalSkillls/Images/Using/vue.png";
import { Link } from "react-router-dom";
import Technicalskills from "../../Components/TechnicalSkillls/Technicalskills";
import HomeProjects from "../../Components/HomeProjects/HomeProjects";
import Hero from "../../Components/Homehero/Hero";
import { BsCodeSlash } from "react-icons/bs";
import { TbWriting } from "react-icons/tb";
import { GoBroadcast } from "react-icons/go";
import { MdWavingHand } from "react-icons/md";
import resume from "../../Components/MyCV/Adeyeye_Boluwatife_CV.pdf";

function Home() {
  return (
    <section className="Home">
      <Header />
      <div className="heroInfo">
        <Hero />
      </div>

      <div className="HomePageWrapper">
        <section className="HomePage">
          <div className="home__display">
            <div className="intro">
              <h1>
                {/* Building Interactive and Visually appealing web interfaces */}
                ADEYEYE BOLUWATIFE
              </h1>
              <h6>FRONTEND DEVELOPER</h6>

              <h2>
                Building <span className="digital">Scalable Digital</span>{" "}
                Products
              </h2>
              <p>
                I am a software engineer and web developer, my focus is on
                creating responsive mobile and web applications with expertise
                in front-end development using HTML
                <img src={html} alt="stackimg" width="20rem" />, CSS{" "}
                <img src={css} alt="stackimg" width="19rem" />,{" "}
                <span className="javascript">
                  JavaScript <img src={js} alt="stackimg" width="19rem" />
                </span>
                ,{" "}
                <span className="react">
                  React <img src={react} alt="stackimg" width="19rem" />
                </span>
                ,{" "}
                <span className="vue">
                  Vuejs <img src={vue} alt="stackimg" width="19rem" />
                </span>
                , and other related technologies. My aim is to deliver
                high-quality applications that meet client needs and exceed
                expectations.
              </p>
              <div className="button">
                <div>
                  <Link to="/contact" className="btn contact_text btn-light">
                    Let's Talk
                    <MdWavingHand
                      className="contact_icon"
                      size="1.5rem"
                      color="#fdce4d"
                    />
                  </Link>
                </div>
              </div>

              <div className="my_image">
                <img src={image} alt="my" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="">
        <div className="Abtme_homesection">
          <div className="Abtme_homesection_heading">
            <h3>About Me</h3>
          </div>
          <div className="abtMe_card">
            <div className="card">
              <AboutMeCard
                logo={<BsCodeSlash color="red" size="3rem" />}
                title="Web Development"
                text="As a web developer, I use frameworks like React and Vue.js to create interactive web pages and web applications that align with client objectives and meet end-users' needs. Optimize website performance,navigation and work with web servers and hosting services to ensure availability and responsiveness. Application of strong problem-solving skills to troubleshoot and debug issues during the development process. "
              />
            </div>
            <div className="card">
              <AboutMeCard
                logo={<TbWriting color="red" size="3rem" />}
                title="Technical Writing"
                text="As a web development technical writer, I specialize in creating instructional materials that effectively communicate complex technical information in a clear, concise, and user-friendly manner. In this capacity, I work diligently to translate intricate frameworks and technical details into easily digestible content that is accessible to individuals with varying levels of technical expertise."
              />
            </div>
            <div className="card">
              <AboutMeCard
                logo={<GoBroadcast color="red" size="3rem" />}
                title="Open Source Contribution"
                text="I love contributing to open source ! I am a maintainer for an Open source project: https://github.com/Developstar/coderay-app. By using and contributing to open source projects, I try as much as possible to stay at the forefront of new developments in the industry."
              />
            </div>
          </div>

          <div className="button cvbutton">
            <div>
              <a className="btn contact_text btn-light" href={resume} download>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="skillsSec">
        <div className="projects_container">
          <HomeProjects />
        </div>
        <div className="technicalSkill_cont">
          <Technicalskills />
        </div>
      </section>
      <section className="footer_section">
        <Footer />
      </section>
    </section>
  );
}

export default Home;
