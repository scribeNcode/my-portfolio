import React from 'react'
import { FaLeanpub } from "react-icons/fa";
import image from "../Images/myImage.png"



export default function AboutMeCard(prop) {
  return (
    <section className="Offer">
        <section className="what_offer1">
          <div className="offerdiv1">
            <div className="my_image offerImage">
            <img src={image} alt="my" />
            </div>

            <div className="offer1Content">
              <div className="objectSec">
                <FaLeanpub color="" />
              </div>

              <p>
                {prop.text}
              </p>
              <button> Download CV</button>
            </div>
          </div>
        </section>
      </section>
  )
}
