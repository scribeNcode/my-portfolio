import React from "react";
import Header from "../Components/Navigation/Header";
import Button from "../Components/Navigation/Button";
import image from "../Images/myImage.png";
import {FaGithub} from "react-icons/fa";
import  {FaLinkedin} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaLeanpub} from "react-icons/fa";

function Home() {
  return (
    <section className="Home">
      <Header />
      <div className="HomePageWrapper">
        <div className="socialMediaIcons">
          <p><FaGithub/></p>
          <p><FaLinkedin/></p>
          <p><FaTwitter/></p>
          <p><FaLeanpub /></p>
        </div>
        <section className="HomePage">
          <div className="home__display">
            <div className="intro">
              <h1>I build Interactive and Visually appealing web interfaces</h1>
              <p>
                As a software engineer, I specialize in developing high-quality
                and responsive mobile & web applications utilizing technologies
                such as HTML, CSS, JavaScript, ReactJS, and VueJS.
              </p>
            </div>
            <div className="my_image">
              <img src={image} alt="my" />
            </div>
          </div>
          <div className="button">
            <Button />
          </div>
        </section>
        
      </div>

      <section className="HomePageWrapper">
        <div className="AboutMe">
        <h1>About Me</h1>
        <p>Hi There I'm </p>
        <p>Adeyeye Boluwatife</p>
        <p>I am a frontend developer with over a year of experience in developing user-facing features with ReactJs, VueJs, and JavaScript. I am passionate about staying current in my field and constantly learning new technologies and processes. I am a quick learner, proactive in seeking growth opportunities, and adaptable to industry changes. This mindset helps me to be effective and stay ahead in my role.</p>
        < button> Download CV</button>
        </div>
      </section>

      <section className="HomePageWrapper">
        <div className="AboutMe">
        <h1>What I have to Offer</h1>
        <p>Hi There I'm </p>
        <p>Adeyeye Boluwatife</p>
        <p>I am a frontend developer with over a year of experience in developing user-facing features with ReactJs, VueJs, and JavaScript. I am passionate about staying current in my field and constantly learning new technologies and processes. I am a quick learner, proactive in seeking growth opportunities, and adaptable to industry changes. This mindset helps me to be effective and stay ahead in my role.</p>
        < button> Download CV</button>
        </div>
      </section>    
    </section>
  );
}

export default Home;
