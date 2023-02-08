import React, { useState } from 'react';
import { BsFillMoonFill } from "react-icons/bs";
import { FaBars, FaTimes} from 'react-icons/fa';
import { Link } from 'react-router-dom';





function Header(){

  const [click, setClick] = useState(false)
  const handleClick = ()=>{
    setClick(!click)
  };
return(
   <section className='headerSection'>
    <div className='LeftSec'>
    <div className='logo'>
      <Link to='/'>Dev</Link>
    </div>
    
    </div>
    


    <div className='RightSect'>
    <nav>
    <div className='navLinks'>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to= '/works'>Work</Link>
      </li>
      <li>
        <Link to= "contact">Contact</Link>
      </li>
    </div>
    </nav>
     
      
      <div>
      <BsFillMoonFill size='2rem'/>
      </div>

      <div className='hamburger'>
        {click?(<FaTimes size={20} style={{color: "#fff"}} />): <FaBars size={20} style={{color: "#fff"}} />}
        
        
      </div>
      
      
    </div>
    
   </section> 
)
}

export default Header