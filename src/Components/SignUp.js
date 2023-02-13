import React from "react";
import image from "../Components/SIgnUp/Images/astronot.gif";
import "../Components/SIgnUp/SignupStyles.css"
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
        <div className="form_heading">
          <h1>Contact Me</h1>
        </div>
        <form>
          <div className="input_container">
            <label for="first_name" className="form_group_label">
              First name
            </label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              className="first_name"
              placeholder="first name"
              required
            />
          </div>

          <div className="input_container">
            <label for="last_name" className="form_group_label">
              Last name
            </label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              className="last_name"
              placeholder="last name"
              required
            />
          </div>

          <div className="input_container">
            <label for="email" className="form_group_label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="email"
              placeholder="email"
              required
            />
          </div>

          <div className="input_container">
            <label for="phone" className="form_group_label">
              Phone number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="phone"
              placeholder="phone"
              required
            />
          </div>

          <div className="input_container">
            <label for="gender" className="form_group_label">
              Gender
            </label>
            <select name="gender" required>
              <option value="male">Male</option>
              <option value="male">Female</option>
              <option value="not_to_say">Prefer not to say</option>
            </select>
          </div>

          <button className="form_button">Submit</button>
        </form>
      </div>
    </section>
  );
}
