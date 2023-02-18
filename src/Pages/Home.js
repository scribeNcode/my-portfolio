import React from "react";
import Header from "../Components/Navigation/Header";
import Footer from "../Components/Navigation/Footer";
import image from "../Images/myImage.png";
import techbro from "../Images/techbro.png";
import AboutMeCard from "../Components/AboutMeCard";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLeanpub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Technicalskills from "../Components/TechnicalSkillls/Technicalskills"
import HomeProjects from "../Components/HomeProjects/HomeProjects";
import Hero from "../Components/Homehero/Hero";

function Home() {
  return (
    <section className="Home">
      <Header />
      <div className="heroInfo">
        <Hero />
      </div>
      
      <div className="HomePageWrapper">
        <div className="socialMediaIcons">
          <p>
            <FaGithub />
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
              <h1>
                Building Interactive and Visually appealing web interfaces
              </h1>
              <p>
                As a software engineer, I specialize in developing high-quality
                and responsive mobile & web applications utilizing technologies
                such as HTML, CSS, JavaScript, ReactJS, and VueJS.
              </p>
              <div className="button">
                <Link to="/project" className="btn">
                  Projects
                </Link>
                <Link to="/contact" className="btn  btn-light">
                  Contact
                </Link>
              </div>
            </div>
            <div className="my_image">
              <img src={image} alt="my" />
            </div>
          </div>
        </section>
      </div>

      <section className="abtMe_card">
        <div className="card1">
          <AboutMeCard
            text="My name is Adeyeye Boluuwatife, "
          />
        </div>
        <div className="card2">
          <AboutMeCard
            text="Adeyeye Boluwatife"
          />
        </div>
        <div className="card3">
          <AboutMeCard
            text=""
          />
        </div>
      </section>
      <div className="cvButton">
          <Link to="/project" className="btn cvbtn">
          Projects
        </Link>
      </div>
      
      <section>
        <HomeProjects />
        <Technicalskills/>
      </section>
      <section>
        <Footer />
      </section>
    </section>
  );
}

export default Home;
