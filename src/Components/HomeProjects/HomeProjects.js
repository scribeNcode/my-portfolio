import React from "react";
import { useState, useEffect } from "react";
import "../HomeProjects/HomeProjectStyles.css";
import  project1 from "../ProjectImage/pro1.png"
import  project2 from  "../ProjectImage/pro2.png"

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
        title: "Github Repository Fetcher",
        description: "The GitHub Repository Fetcher is a dynamic web application built with React that allows users to fetch their GitHub repositories by entering their username. The website features a custom counter hook with increment, decrement, reset, and setValue functions .  The website  a page for the custom hook, useReducer, a 404 error page, and a page to test error boundaries and ensure good SEO. ",
        image: <img src={project1} alt='project' />
      },
      {
        title: "Project 2",
        description: "This is project two",
        image: <img src={project2} alt='project' />
      },
      {
        title: "Project 3",
        description: "This is project three",
        url: "goal.com",
      },
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
      <section>
        <div className="protitle">
          <h2>My Projects</h2>
        </div>
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
              <p>{projects.description}</p>
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
