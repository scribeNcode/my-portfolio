import React from "react";
import "../Footer/FooterStyles.css"
import {
  FaPhone,
  FaMailBulk,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { FaLeanpub } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left-footer">
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "black", marginRight: "2rem" }}
              />
              +2349064457903
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "black", marginRight: "2rem" }}
              />
              deyeye99@gmail.com
            </h4>
          </div>
        </div>
        <div className="right-footer">
          <p>
            You can get across to me via the following social media platforms
          </p>
          <div className="socialMediaIcons">
            <div>
              <a href="https://github.com/Developstar">
                <FaGithub color="black" />
              </a>
            </div>

            <div>
              <a href="https://www.linkedin.com/in/boluwatifeadeyeye">
                <FaLinkedin color="black" />
              </a>
            </div>

            <div>
              <a href="https://twitter.com/Devilopstar">
                <FaTwitter color="black" />
              </a>
            </div>

            <div>
              <a href="https://developstar.hashnode.dev">
                <FaLeanpub color="black" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
