import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="contact" id="contact">
      <div className="main-content">
        <div class="contact-content">
          <Link to="/">Contact  </Link>
          <Link
            to="/about"
          >
            
          </Link>
          <Link to="/"> About </Link>
          <Link to="/"> Git Hub </Link>
        </div>

        <div className="contact-content">
          <Link to="/">Linkedin</Link>
          <Link to="/">  facebook</Link>
          <Link to="/">   </Link>
        </div>

        <div className="contact-content">
          <Link to="/feedback">  </Link>
          <Link to="mailto:anuj26777@gmail.com" target="_blank">
           
          </Link>
          <Link to="/"></Link>
        </div>

        <div className="contact-content">
          <Link
            to=""
            target="_blank"
          >
            
          </Link>
          <Link
            to=""
            target="_blank"
          >
           
          </Link>
          <Link to="" target="_blank">
           
          </Link>
        </div>
      </div>

      <div class="action">
        <form onSubmit={(event) => event.preventDefault()}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          ></input>
          <input type="submit" name="submit" value="Submit" required></input>
        
        </form>
      </div>
      <div class="last">
        <p></p>
      </div>
    </div>
  );
}

export default Footer;
