import React from "react";
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import "../Homehero/HeroStyles.css"
export default function Hero() {
  const [text] = useTypewriter({
    words: ['Welcome to my portfolio website! It\'s a pleasure to have you here.', 'I enjoy designing visually appealing and responsive user interfaces.' ],
    loop: 1,
  });
  return (
    <div className="initiialIntro">
      <p >
       
       <span   style={{fontWeight: 'bold', color: ''}}>
        {text}
        </span> 
        <span style={{color: 'blue'}}>
          <Cursor/>
        </span>
        
      </p>
    </div>
  );
}
