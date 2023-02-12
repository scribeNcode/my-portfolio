import React from 'react'
import Footer from "../Components/Navigation/Footer";
import Header from "../Components/Navigation/Header";
import HeroImg from '../Components/Heroimage';

function Contact(){
    return(
        <div>
         <Header />
         <HeroImg heading="Contact Me" text="Discuss your project with me"/>
         <Footer />
        </div>
     )
}

export default Contact;