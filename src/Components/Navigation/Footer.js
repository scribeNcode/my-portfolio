import React from 'react';
import {FaHome, FaPhone, FaMailBulk, FaTwitter, FaLinkedin} from "react-icons/fa";


function Footer(){
    return(
        <div className='footer'>
            <div className='footer-container'>
                <div className='left-footer'>
                    
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{color:"black", marginRight:"2rem"}} />
                        +2349064457903</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{color:"black", marginRight:"2rem"}} />
                        deyeye99@gmail.com</h4>
                    </div>
                </div>
                <div className='right-footer'>
                    <p>You can get across to me via the following social media platforms</p>
                    <div className='social'>
                    <FaLinkedin size={20} style={{color:"black", marginRight:"2rem"}} />
                    <FaTwitter size={20} style={{color:"black", marginRight:"2rem"}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;