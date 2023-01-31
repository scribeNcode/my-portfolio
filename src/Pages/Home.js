import React from "react";
import Header from "../Components/Navigation/Header";
import Button from "../Components/Navigation/Button";
import image from "../Images/myImage.png";

function Home() {
  return (
    <section className="Home">
      <Header />
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
    </section>
  );
}

export default Home;
