import React from "react";
import Mplogo from "../assets/mplogo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookSquare, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

const NavBar = () => {
    return (
        <nav>            
            <NavLink to="/">
              <img src={Mplogo} className="mplogo" alt="Minority Programmers Logo"/>
            </NavLink>
            <div className="nav_container">
                <div className="nav_icons">
                    <a href="https://twitter.com/minorityprogram"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://twitter.com/minorityprogram"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                    <a href="https://www.facebook.com/MinorityProgrammers"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://www.linkedin.com/company/minority-programmers/"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
                <div className="nav_links">
                    <p>Service</p>
                    <NavLink to="/incubator">
                        <p>Incubators</p>
                    </NavLink>
                    <NavLink to="/learn">
                        <p>Learn</p>
                    </NavLink>
                        <p>Join</p>
                </div>
            </div>
      </nav>
    );
  };
  
  export default NavBar;