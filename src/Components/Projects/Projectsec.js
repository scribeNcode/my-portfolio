import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Projects/ProjectsecStyles.css";
import Project1 from "../ProjectImage/functional_calculator_resized.jpg";

export default function Projectsec(prop) {
  const [hovered, setHovered] = useState(false);
  return (
    <section style={{ width: "100%" }} className="wrapper">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="content-divv"
      >
        {hovered ? (
          <div className="projectPage_container ">
            <div className="onHover">
              <div className="project_container">
                <div className="active_overlay"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="projectPage_container ">
            <div className="notOnHover">
              <div className="project_container">
                <div className="project_details"></div>
              </div>
            </div>
            <div className="content">
              <div className="content_text">
                <h2 className="project-title">{prop.projectTitle}</h2>
                <p>{prop.projectDetails}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="pro-btns">
        <a
          href="https://functional-calculator-using-react-alt-school-assignment-03.vercel.app/"
          className="btn"
        >
          Live Project
        </a>
        <a
          href="https://github.com/Developstar/Functional-calculator-using-react-Alt_School-Assignment-03"
          className="btn"
        >
          Code on Github
        </a>
      </div>
    </section>
  );
}
