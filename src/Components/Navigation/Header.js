import React from 'react'
import Button from './Button'
function Header(){
return(
   <section className='headerSection'>
    <div className='logo'>
      <div>Dev</div>
      <div className='navLinks'>
         <li>About</li>
      <li>Work</li>
      <li>Contact</li>
      </div>
     
    </div>
    <div>
      <Button />
    </div>
    
   </section> 
)
}

export default Header