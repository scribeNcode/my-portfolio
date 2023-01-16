import React from 'react'
import Header from '../Components/Navigation/Header'

function Home(){
    return(
        <section>
            <Header />
            <section className='homePage'>
                <div className='intro'>
                    <p>Hi, my name is</p>
                    <h1>Adeyeye Boluwatife</h1>
                    <h1>I specialize in creating digital products and establishing brand identities.</h1>
                    <p>As a software engineer, I specialize in developing high-quality and responsive mobile & web applications utilizing technologies such as HTML, CSS, JavaScript, ReactJS, and VueJS.</p>
                </div>
            </section>
        </section>
    )
}

export default Home;