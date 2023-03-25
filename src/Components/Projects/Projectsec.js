import React, { useState } from "react";
import "../Projects/ProjectsecStyles.css";

export default function Projectsec(prop) {
  const [hovered, setHovered] = useState(false);
  return (
    <>
    <section style={{ width: "100%" }} className="wrapper">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="content-divv"
      >
        {hovered ? (
          <div className="projectPage_container ">
            <div className={prop.hover}>
              <div className="project_container">
                <div className="active_overlay"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="projectPage_container ">
            <div className={prop.nothover}>
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
          href={prop.live}
          className="btn"
        >
          Live Project
        </a>
        <a
          href={prop.github}
          className="btn"
        >
          Code on Github
        </a>
      </div>
    </section>
    </>
  );
}
