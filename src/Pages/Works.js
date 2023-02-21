
import React from "react";
import Footer from "../Components/Navigation/Footer/Footer";
import Header from "../Components/Navigation/Header/Header";
import HeroImg from "../Components/Heroimage"
import Projectsec from "../Components/Projectsec";

function Works() {
  return (
    <div>
      <Header/>
      <HeroImg heading="PROJECTS" text="My latest Projects" />
      <Projectsec />
      <Footer />
    </div>
  );
}

export default Works;