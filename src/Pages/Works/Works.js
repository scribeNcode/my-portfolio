import React from "react";
import Footer from "../../Components/Navigation/Footer/Footer";
import Header from "../../Components/Navigation/Header/Header";
import HeroImg from "../../Components/Heroimage";
import Projectsec from "../../Components/Projects/Projectsec";
import "../Works/WorksStyles.css"

function Works() {
  return (
    <div className="Works_container">
      <Header />
      <HeroImg />
      <h3 className="project_heading">Projects</h3>
      <div className="projectSection">
        <Projectsec  hover="calculator onHover " nothover="calculator notOnHover " projectTitle="A functional calculator" projectDetails ="This calculator is built with ReactJs. It is a powerful tool for performing mathematical calculations. With the ability to perform addition, subtraction, and division, it offers users a quick and easy way to get accurate results in a functional and user-friendly interface." live="https://functional-calculator-using-react-alt-school-assignment-03.vercel.app/"  github="https://github.com/Developstar/Functional-calculator-using-react-Alt_School-Assignment-03"/>

        <Projectsec  hover="onHover github" nothover="notOnHover github" projectTitle="Github Repo Fetcher" projectDetails ="For my third semester exam at AltSchool Africa, I worked on a project that involved utilizing the GitHub API to showcase a comprehensive list of my repositories along with additional information. Additionally, I incorporated a wildcard route to handle error pages." live="https://github-projects-theta.vercel.app/"  github="https://github.com/Developstar/github-projects"/>

        <Projectsec  hover="portfolio Hover" nothover="portfolio notOnHover" projectTitle="Portfolio Website" projectDetails ="A Portfolio website built with ReactJs to showcase my works and skills as a Frontend developer in a modern and interactive way. This website can be easily updated and maintained" live="https://developstar.vercel.app/"  github="https://github.com/Developstar/my-portfolio"/>
        
        <Projectsec  hover="phonie onHover" nothover="phonie notOnHover" projectTitle="Phonie Social Media App" projectDetails ="A social media website built with Reactjs." live="https://phonie-telecom-carrier-identifier-wnwe.vercel.app/"  github="https://github.com/Developstar/Phonie"/>
        
      </div>

      <div className="footerDiv"><Footer /></div>
      
    </div>
  );
}

export default Works;
