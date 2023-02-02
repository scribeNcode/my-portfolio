import React from 'react';
import { BsFillMoonFill } from "react-icons/bs";


function Header(){
return(
   <section className='headerSection'>
    <div className='LeftSec'>
    <div className='logo'>
      Dev
    </div>
    
    </div>
    


    <div className='RightSect'>
    <nav>
    <div className='navLinks'>
      <li>About</li>
      <li>Work</li>
      <li>Contact</li>
    </div>
    </nav>
     
      
      <div>
      <BsFillMoonFill size='2rem'/>
      </div>
      
      
    </div>
    
   </section> 
)
}

export default Header