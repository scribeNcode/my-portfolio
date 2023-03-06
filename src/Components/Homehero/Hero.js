import React from "react";
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import "../Homehero/HeroStyles.css"
export default function Hero() {
  const [text] = useTypewriter({
    words: ['Welcome to my portfolio website! It\'s a pleasure to have you here.', 'I enjoy building visually appealing and responsive user interfaces.' ],
    loop: 1,
  });
  return (
    <>
    <div className="initiialIntro">
      <p >
       
       <span className="heroText"  style={{fontWeight: '300', fontSize: "1.3rem" , color: ''}}>
        {text}
        </span> 
        <span style={{color: 'blue'}}>
          <Cursor/>
        </span> 
      </p>
    </div>

    <div className="initiialIntro_mobile">
      <p >
       
       <span className="heroText"  style={{fontWeight: '300', fontSize: "0.8rem" , color: ''}}>
        {text}
        </span> 
        <span style={{color: 'blue'}}>
          <Cursor/>
        </span> 
      </p>
    </div>
    </>
    

    
  );
}
