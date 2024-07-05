import React from "react";
import "../TechnicalSkillls/TechnicalStyles.css";
import html from "../TechnicalSkillls/Images/Using/html.png";
import css from "../TechnicalSkillls/Images/Using/css.png";
import js from "../TechnicalSkillls/Images/Using/js.png.png";
import react from "../TechnicalSkillls/Images/Using/react.png";
// import figma from "../TechnicalSkillls/Images/Using/figma.png.png";
import git from "../TechnicalSkillls/Images/Using/git.png.png";
import sass from "../TechnicalSkillls/Images/Learning/sass.png.png";
import ts from "../TechnicalSkillls/Images/Learning/ts.png.png";
import vue from "../TechnicalSkillls/Images/Using/vue.png";

export default function Technicalskills() {
  return (
    <section className="skills_section">
      <h1>Technical Skills</h1>
      <section className="UsingSkill">
        <h3>Currently Using</h3>
        <section className="technical_skills">
          <div className="col1">
            <div className="skillsdiv">
              <img src={html} alt="an html icon " />
              <div className="skilltext">
                <h5>HTML5</h5>
              </div>
            </div>
            <div className="skillsdiv ">
              <img src={css} alt="css icon" />
              <div className="skilltext">
                <h5>CSS3</h5>
              </div>
            </div>

            <div className="skillsdiv ">
            <img src={js} alt="js icon" />
            <div className="skilltext">
              <h5>JavaScript</h5>
            </div>
          </div>
          </div>

          
        </section>

        <section className="technical_skills row2">
          <div className="col1 col1-2">
            {/* <div className="skillsdiv">
              <img src={figma} alt="figma image" />
              <div className="skilltext">
                <h5>Figma</h5>
              </div>
            </div> */}
            <div className="skillsdiv">
              <img src={vue} alt="vue icon" />
              <div className="skilltext">
                <h5>Vue</h5>
              </div>
            </div>
            <div className="skillsdiv ">
              <img src={git} alt="css icon" />
              <div className="skilltext">
                <h5>Git</h5>
              </div>
            </div>
            <div className="skillsdiv ">
            <img src={react} alt="react icon" />
            <div className="skilltext">
              <h5>React</h5>
            </div>
          </div>
          </div>

          
        </section>
      </section>

      <section className="LearningSkill ">
        <h3>Learning</h3>
        <section className="technical_skills">
          <div className="col1 col1-row ">
            <div className="skillsdiv">
              <img src={sass} alt="sass icon" />
              <div className="skilltext">
                <h5>SASS</h5>
              </div>
            </div>


            
            <div className="skillsdiv ">
              <img src={ts} alt="ts icon" />
              <div className="skilltext">
                <h5>TYPESCRIPT</h5>
              </div>
            </div>
          
          </div>

        </section>
      </section>
    </section>
  );
}
