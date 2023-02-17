import React from 'react'
import "../TechnicalSkillls/TechnicalStyles.css"
import html from "../TechnicalSkillls/Images/Using/html.png.png"

export default function Technicalskills() {
  return (
    <section className='technical_skills'>
      <div className='row1'>
        <div>
          <img src={html} alt="html image" />
        </div>
        <div>2</div>
      </div>

      <div className='row2'>
        <div>1</div>
        <div>2</div>
      </div>
      
    </section>
    
  )
}
