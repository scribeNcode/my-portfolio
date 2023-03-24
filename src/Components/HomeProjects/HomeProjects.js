import React from "react";
import { useState, useEffect } from "react";
import "../HomeProjects/HomeProjectStyles.css";
import vue from "../TechnicalSkillls/Images/Using/vue.png.png"
import js from "../TechnicalSkillls/Images/Using/js.png.png";
import css from "../TechnicalSkillls/Images/Using/css.png"
import react from "../TechnicalSkillls/Images/Using/react.png";
import  mobilepro1 from "../../Components/ProjectImage/CalculatorPrevv.jpg" 
import  project2 from  "../ProjectImage/GithubPrevv.jpg"
import project3 from "../ProjectImage/PhoniePrevv.jpg"
import project4 from "../ProjectImage/PortfolioPrevv.jpg"

export default function HomeProjects() {
  //State
  const [currentPosition, setCurrentPosition] = useState(0);
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);
  const [listItems, setListItems] = useState([]);

  //setup our initial state
  useEffect(() => {
    //list of projects
    const proItems = [
      {
        title: "A functional Calculator",
        // description: "A functional calculator built with JavaScript can perform basic arithmetic operations such as addition, subtraction, multiplication, and division.",
        image: <img src={mobilepro1} alt='project' />,
        stack: <img src={js} alt="stackimg" width="25rem" />,
        stack2: <img src={css} alt="stackimg" width="25rem" />,
        stack3: <img src={react} alt="stackimg" width="25rem" />
      },
      {
        title: "Phonie Telecom App",
        // description: "This GitHub Repository Fetcher is a dynamic web application built with React that allows users to fetch their GitHub repositories by entering their username. The website features a custom counter hook with increment, decrement, reset, and setValue functions .",
        image: <img src={project3} alt='project' />,
        stack: <img src={js} alt="stackimg" width="25rem" />,
        stack2: <img src={css} alt="stackimg" width="25rem" />,
        stack3: <img src={vue} alt="stackimg" width="25rem" /> 
      },
      {
        title: "Github Repo Fetcher",
        // description: "This GitHub Repository Fetcher is a dynamic web application built with React that allows users to fetch their GitHub repositories by entering their username. The website features a custom counter hook with increment, decrement, reset, and setValue functions .",
        image: <img src={project2} alt='project' />,
        stack: <img src={js} alt="stackimg" width="25rem" />,
        stack2: <img src={vue} alt="stackimg" width="25rem" />,
        stack3: <img src={css} alt="stackimg" width="25rem" /> 
      },
      {
        title: "My Portfolio App",
        // description: "This GitHub Repository Fetcher is a dynamic web application built with React that allows users to fetch their GitHub repositories by entering their username. The website features a custom counter hook with increment, decrement, reset, and setValue functions .",
        image: <img src={project4} alt='project' />,
        stack: <img src={js} alt="stackimg" width="25rem" />,
        stack2: <img src={css} alt="stackimg" width="25rem" />,
        stack3: <img src={react} alt="stackimg" width="25rem" /> 
      }
      // {
      //   title: "Project 3",
      //   description: "This is project three",
      //   url: "goal.com",
      // },
    ];
    const item = proItems[currentPosition];

    //set state of all project
    setListItems(proItems);
    //set our state..
    setProjects(item);
    setLoading(false);
  }, [currentPosition]);

  //Handle next button click
  const handleNext = (event) => {
    event.preventDefault();
    //update our state
    const length = listItems.length;
    const count = length - 1;
    if (currentPosition < count) {
      setCurrentPosition(currentPosition + 1);
    } else {
      setCurrentPosition(0);
    }
  };

  //Handle Previous button click
  const handlePrevious = (event) => {
    event.preventDefault();
    //update our state
    // setCurrentPosition(prev => prev - 1)
    if (currentPosition > 0) {
      setCurrentPosition((prev) => prev - 1);
    } else {
      setCurrentPosition(0);
    }
  };

  return (
    <section className="main-wrapper">
      <div className="protitle">
          <h2> Projects Preview</h2>
        </div>
      <section className="component-wrapper">
        
        <section className="projects-container">
          {loading ? (
            <div>Loading</div>
          ) : (
            <div className="project-item">
              <div className="homeprojecti_image">
                <div className="image">
                {projects.image} 
                </div>
                
              </div>
              <h2>{projects.title}</h2>
               {/* <p>{projects.description}</p>  */}
               <div className="stack_container">
                <div className="stack">{projects.stack}</div>
               <div className="stack">{projects.stack2}</div>
               <div className="stack">{projects.stack3}</div>
               </div>
               
              <a href={projects.url}>{projects.url}</a>
            </div>
          )}

          <div className="projectsbutton">
            <button className="prev" onClick={handlePrevious}>
              Prev
            </button>
            <button className="next" onClick={handleNext}>
              Next
            </button>
          </div>
        </section>
      </section>
    </section>
  );
}
