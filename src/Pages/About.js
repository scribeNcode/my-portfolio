import React from 'react'
import Footer from "../Components/Navigation/Footer";
import Header from "../Components/Navigation/Header/Header";
import HeroImg from '../Components/Heroimage';

function About(){
    return(
        <div>
         <Header />
         <HeroImg heading="ABOUT" text="I am a growth-driven Frontend Developer" />
         <Footer />
        </div>
     )
}

export default About;