import React from "react";
import Header from "../Components/Navigation/Header";
import Footer from "../Components/Navigation/Footer"
import image from "../Images/myImage.png";
import techbro from "../Images/techbro.png";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLeanpub } from "react-icons/fa";
import { Link } from "react-router-dom";


function Home() {
  

  
  return (
    <section className="Home">
      <Header />
      <div className="HomePageWrapper">
        <div className="socialMediaIcons">
          <p>
            <FaGithub  />
          </p>
          <p>
            <FaLinkedin />
          </p>
          <p>
            <FaTwitter />
          </p>
          <p>
            <FaLeanpub />
          </p>
        </div>
        <section className="HomePage">
          <div className="home__display">
            <div className="intro">
              <h1>I build Interactive and Visually appealing web interfaces</h1>
              <p>
                As a software engineer, I specialize in developing high-quality
                and responsive mobile & web applications utilizing technologies
                such as HTML, CSS, JavaScript, ReactJS, and VueJS.
                <div className="button">
            <Link to= "/project" className="btn">Projects</Link>
            <Link to= "/contact" className="btn  btn-light">Contact</Link>
          </div>
              </p>
            </div>
            <div className="my_image">
              <img src={image} alt="my" />
            </div>
          </div>
          
        </section>
      </div>

      <section className="">
        <h1>About Me</h1>
        <section className="AboutMe">
          <div className="content">
            <p>Adeyeye Boluwatife</p>
            <p>
              I am a frontend developer with over a year of experience in
              developing user-facing features with ReactJs, VueJs, and
              JavaScript. I am passionate about staying current in my field and
              constantly learning new technologies and processes. I am a quick
              learner, proactive in seeking growth opportunities, and adaptable
              to industry changes. This mindset helps me to be effective and
              stay ahead in my role.
            </p>
            <button> Download CV</button>
          </div>
          <div className="graphics">
            <img src={techbro} alt="illustration" />
          </div>
        </section>
      </section>

      <section className="Offer">
        <section className="what_offer1">
          <div className="offerdiv1">
            <div className="my_image offerImage">
              <img src={image} alt="my" />
            </div>

            <div className="offer1Content">
              <div className="objectSec">
                <FaLeanpub color="" />
              </div>

              <p>
                I am a frontend developer with over a year of experience in
                developing user-facing features with ReactJs, VueJs, and
                JavaScript. I am passionate about staying current in my field
                and constantly learning new technologies and processes. I am a
                quick learner, proactive in seeking growth opportunities, and
                adaptable to industry changes. This mindset helps me to be
                effective and stay ahead in my role.
              </p>
              <button> Download CV</button>
            </div>
          </div>
        </section>
      </section>

      <section>
        <Footer/>
      </section>
      
      
    </section>
  );
}

export default Home;
