import React from 'react'
import "../TechnicalSkillls/TechnicalStyles.css"
import html from "../TechnicalSkillls/Images/Using/html.png"
import css  from "../TechnicalSkillls/Images/Using/css.png"
import js from "../TechnicalSkillls/Images/Using/js.png.png"
import react from "../TechnicalSkillls/Images/Using/react.png"

export default function Technicalskills() {
  return (
    <section className='skills_section'>
      <h1>Technical Skills</h1>
      <h5>Using</h5>
      <section className='technical_skills'>
      <div className='row1'>
        <div className='skillsdiv'>
          <img src={html} alt="html image" />
          <div className='skilltext'>
            <h4>HTML5</h4>
          </div>
        </div>
        <div className='skillsdiv big'>
        <img src={css} alt="css image" />
          <div className='skilltext'>
            <h4>CSS3</h4>
          </div>
        </div>
      </div>

      <div className='row2'>
        <div className='skillsdiv '>
        <img src={js} alt="js image" />
        <div className='skilltext'>
            <h4>JavaScript</h4>
          </div>
        </div>
        <div className='skillsdiv '>
        <img src={react} alt="react" />
        <div className='skilltext'>
            <h4>React</h4>
          </div>
        </div>
      </div>
      
    </section>
    </section>
    
    
  )
}
