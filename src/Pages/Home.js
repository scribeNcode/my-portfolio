import React from "react";
import Header from "../Components/Navigation/Header";
import Footer from "../Components/Navigation/Footer";
import image from "../Images/myImage.png";
import techbro from "../Images/techbro.png";
import AboutMeCard from "../Components/AboutMeCard/AboutMeCard";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLeanpub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Technicalskills from "../Components/TechnicalSkillls/Technicalskills";
import HomeProjects from "../Components/HomeProjects/HomeProjects";
import Hero from "../Components/Homehero/Hero";
import { BsCodeSlash } from "react-icons/bs";
import { TbWriting } from "react-icons/tb";
import { GoBroadcast } from "react-icons/go";
import resume from "../Components/MyCV/Boluwatife_Adeyeye_CV.pdf"



function Home() {
  return (
    <section className="Home">
      <Header />
      <div className="heroInfo">
        <Hero />
      </div>

      <div className="HomePageWrapper">
        <div className="socialMediaIcons">
          <div>
             <a href="https://github.com/Developstar" >
            <FaGithub color="black"/>
          </a>
          </div>
         
         <div>
          <a href="https://www.linkedin.com/in/boluwatifeadeyeye" >
            <FaLinkedin color="black" />
          </a>
         </div>
          
          <div>
            <a href="https://twitter.com/Devilopstar" >
            <FaTwitter  color="black"/>
          </a>
          </div>
          
          <div>
            <a href="https://developstar.hashnode.dev" >
            <FaLeanpub color="black"/>
          </a>
          </div>
          
        </div>
        <section className="HomePage">
          <div className="home__display">
            <div className="intro">
              <h1>
                Building Interactive and Visually appealing web interfaces
              </h1>
              <p>
                As a software engineer, I specialize in developing high-quality
                and responsive mobile & web applications utilizing technologies
                such as HTML, CSS, JavaScript, ReactJS, and VueJS.
              </p>
              <div className="button">
                <Link to="/contact" className="btn  btn-light">
                  Let's Talk
                </Link>
              </div>
            </div>
            <div className="my_image">
              <img src={image} alt="my" />
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
            <div className="card1">
              <AboutMeCard
                logo={<BsCodeSlash />}
                title="Web Development"
                text="As a web developer, I use frameworks like React and Vue.js to create interactive web pages and web applications that align with client objectives and meet end-users' needs. Optimize website performance,navigation and work with web servers and hosting services to ensure availability and responsiveness. Application of strong problem-solving skills to troubleshoot and debug issues during the development process. "
              />
            </div>
            <div className="card2">
              <AboutMeCard
                logo={<TbWriting />}
                title="Technical Writing"
                text="As a web development technical writer, I specialize in creating instructional materials that effectively communicate complex technical information in a clear, concise, and user-friendly manner. In this capacity, I work diligently to translate intricate frameworks and technical details into easily digestible content that is accessible to individuals with varying levels of technical expertise."
              />
            </div>
            <div className="card3">
              <AboutMeCard
                logo={<GoBroadcast />}
                title="Open Source Contribution"
                text="I love contributing to open source ! I am a maintainer for an Open source project: https://github.com/Developstar/coderay-app. By using and contributing to open source projects, I try as much as possible to stay at the forefront of new developments in the industry."
              />
            </div>
          </div>
        </div>
        <div className="cvButton">
        <a href={resume} download>
         <button className="btn  btn-light" >Download CV</button>
       </a>
      </div>
      </section>
      

      <section>
        <HomeProjects />
        <Technicalskills />
      </section>
      <section>
        <Footer />
      </section>
    </section>
  );
}

export default Home;
