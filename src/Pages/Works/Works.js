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
        <Projectsec projectTitle =" A functional calculator" projectDetails ="This calculator is built with ReactJs. It is a powerful tool for performing mathematical calculations. With the ability to perform addition, subtraction, and division, it offers users a quick and easy way to get accurate results in a functional and user-friendly interface."/>
        
      </div>

      <Footer />
    </div>
  );
}

export default Works;
