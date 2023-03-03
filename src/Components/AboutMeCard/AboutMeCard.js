import React from "react";
import "../AboutMeCard/AboutMeCardStyles.css"
import { FaBeer } from 'react-icons/fa';
// import { BsCodeSlash } from "react-icons/bs";
export default function AboutMeCard(prop) {
  return (
    <div className="abtMe_section">
      <div className="abtMe-div">
        <div className="abtMe_logo">{prop.logo}</div>
        <div className="abtMe_title"><h1>{prop.title}</h1></div>
        <div className="abtMe_text"><p>{prop.text}</p></div>
      </div>
    </div>

    // <section className="Offer">
    //     <section className="what_offer1">
    //       <div className="offerdiv1">
    //         <div className="my_image offerImage">

    //         </div>

    //         <div className="offer1Content">
    //           <div className="objectSec">

    //           </div>

    //           <p>
    //             {prop.text}
    //           </p>
    //           <button> Download CV</button>
    //         </div>
    //       </div>
    //     </section>
    //   </section>
  );
}
