import React from "react";
import Mplogo from "../assets/mplogo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faFacebookSquare,
  faLinkedin,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  return (
    <nav>
      <section className="nav_social_container">
        <NavLink to="/">
          <img src={Mplogo} aria-label="MPA homepage." alt="MPA Logo" />
        </NavLink>
        <a
          href="https://twitter.com/minorityprogram"
          aria-label="MPA Twitter Account."
        >
          <FontAwesomeIcon
            icon={faTwitterSquare}
            aria-hidden="true"
            alt="Twitter Logo"
          />
        </a>
        <a
          href="https://www.facebook.com/MinorityProgrammers"
          aria-label="MPA Facebook Account."
        >
          <FontAwesomeIcon
            icon={faFacebookSquare}
            aria-hidden="true"
            alt="Facebook Logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/minority-programmers/"
          aria-label="MPA Linkedin Account."
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            aria-hidden="true"
            alt="Linkedin Logo"
          />
        </a>
        <a
          href="https://www.instagram.com/minorityprogrammers/"
          aria-label="MPA Instagram Account."
        >
          <FontAwesomeIcon
            icon={faInstagramSquare}
            aria-hidden="true"
            alt="Instagram Logo"
          />
        </a>
      </section>
      <section className="nav_link_container">
        <NavLink to="/incubator">
          <p aria-label="Incubators page link.">Incubators</p>
        </NavLink>
        <NavLink to="/learn">
          <p aria-label="Learn page link.">Learn</p>
        </NavLink>
      </section>
    </nav>
  );
};

export default NavBar;
