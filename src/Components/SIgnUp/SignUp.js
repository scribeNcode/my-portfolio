import React from "react";
import image from "../SIgnUp/Images/astronot.gif";
import "../SIgnUp/SignupStyles.css";
import Button from "../Button/Button";
// import "../components/SIgnUp/SignupStyles.css"
// import image from "../components/SIgnUp/Images/astronot.gif"

export default function SignUp() {
  return (
    <section className="signup_page">
      <div className="signup_page_content">
        <h1>Developstar</h1>

        <div className="signup_gif">
          <img src={image} alt="gif" />
        </div>
      </div>
      <div className="signup_form_wrapper">
        {/* <div className="form_heading">
          <h1>Contact Me</h1>
        </div> */}
        <form>
          <div className="input_container">
            <input
              type="text"
              name="first_name"
              id="first_name"
              className="first_name"
              placeholder="Your First Name"
              required
            />
          </div>

          <div className="input_container">
            <input
              type="text"
              name="last_name"
              id="last_name"
              className="last_name"
              placeholder="Your Last Name"
              required
            />
          </div>

          <div className="input_container">
            <input
              type="email"
              name="email"
              id="email"
              className="email"
              placeholder="username@example.com"
              required
            />
          </div>

          <div className="input_container">
            <textarea name="message" rows="7" cols="30" placeholder="Enter Your Message Here"></textarea>
          </div>

          <div className="form_submit_wrapper">
            <Button text="Submit" />
          </div>
          
        </form>
      </div>
    </section>
  );
}
