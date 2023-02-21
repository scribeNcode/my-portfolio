import React from 'react'
import Footer from "../Components/Navigation/Footer/Footer";
import Header from "../Components/Navigation/Header/Header";
import HeroImg from '../Components/Heroimage';
import SignUp from '../Components/SignUp';

function Contact(){
    return(
        <div>
         <Header />
         <HeroImg heading="" text=""/>
         <SignUp/>
         <Footer />
        </div>
     )
}

export default Contact;