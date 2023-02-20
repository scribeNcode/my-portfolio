import React, { useState } from 'react';
import { BsFillMoonFill } from "react-icons/bs";
import { FaBars, FaTimes} from 'react-icons/fa';
import { Link } from 'react-router-dom';






function Header(){

  // for transparent header background 
  const [color, setColor] = useState(false)
  const changeColor = () =>{
    if(window.scrollY >= 100){
      setColor(true);
    }else{
      setColor(false)
    }
  };

  window.addEventListener("scroll", changeColor);




  const [click, setClick] = useState(false)
  const handleClick = ()=>{
    setClick(!click)
  };
return(
   <section className={color ? 'headerSection headerSection-scroll' : "headerSection"}>
    <div className='LeftSec'>
    <div className='logo'>
      <Link style={{textDecoration: "none"}} to='/' className='logoLink'>
        <div className='website_logo'>

        </div>
      </Link>
    </div>
    
    </div>
    


    <div className='RightSect'>
    <nav>
    <div >

      <ul className={click ? 'navLinks active' : 'navLinks'}>
        <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to= '/works'>Work</Link>
      </li>
      <li>
        <Link to= "/contact">Contact</Link>
      </li>
      </ul>
      
    </div>
    </nav>
     
      
       {/* <div>
      <BsFillMoonFill size='2rem'/>
      </div>  */}

      <div className='hamburger' onClick={handleClick}>
        {click?(<FaTimes size={20} style={{color: "#fff"}} />): <FaBars size={20} style={{color: "#fff"}} />}
        
      </div>
      
      
    </div>
    
   </section> 
)
}

export default Header