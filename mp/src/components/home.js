import React from "react";
import Hero from "../assets/Hero.jpg";
import Banner from "../assets/Banner.jpg";
import Classroom from "../assets/Classroom.jpg";
import NavBar from "./nav_bar.js";
import Banner2 from "../assets/Banner2.svg";
import Banner3 from "../assets/Banner3.svg";

const Home = () => {
  return (
    <main>
      <NavBar />
      <article className="hero">
        <img src={Hero} alt="Student typing on a laptop" />
        <button className="BTNorange">Learn More</button>
      </article>

      <article className="network">
        <h1>An international network of programmers</h1>

        <section className="network_details">
          <p>
            Teaching, mentoring, learning STEM education. Learn to code and grow
            your skills.
          </p>
          <button className="BTNblue">Start Today</button>
        </section>
      </article>

      <article className="events">
        <section className="events_details">
          <p>
            We aim to help marginalized communities access opportunities through
            events, incubation, education, and capital.
          </p>
          <p>
            Minority Programmers is an international network of community
            activists, students, professionals, and developers, unifying
            together to develop socially impactful software solutions and
            empower underrepresented communities through STEM education.
          </p>
          <button className="BTNorange">Learn More</button>
        </section>
        <h2 className="events_heading">
          Minority Programmers mission is to bring diversity through STEM
          education and innovation.
        </h2>
      </article>

      <article className="principles">
        <h3>Our Core Principles</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          justo libero, elementum non volutpat quis, iaculis ut nisi. Sed sit
          amet ligula eget dolor maximus finibus et ac magna.
        </p>
      </article>

      {/* <img src={Banner3} alt="Graphic with details about services" /> */}
    </main>
  );
};

export default Home;
