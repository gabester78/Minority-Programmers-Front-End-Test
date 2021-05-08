import React from "react";
import Hero from "../assets/Hero.jpg";
import Banner from "../assets/Banner.jpg";
import Classroom from "../assets/Classroom.jpg";
import NavBar from "./nav_bar.js"

const Home = () => {
    return (
        <main>
            <NavBar />
            <section className="hero">
                <img src={Hero} alt="Student typing on a laptop" />
            </section>                
            <button className="BTNorange">Learn More</button>
            <section className="network" style={{ backgroundImage: `url(${Banner})`, backgroundRepeat: 'no-repeat'}}>
                <div>
                    <h1 className="network_heading">An international network of programmers</h1>
                </div>
                <div className="network_details">                
                    <h6>Teaching, mentoring, learning STEM education</h6>
                    <p>Learn to code and grow your skills</p>
                    <button className="BTNblue">Start Today</button>
                </div>
            </section>
            <section className="events" style={{ backgroundImage: `url(${Classroom})`, backgroundRepeat: 'no-repeat'}}>
                <div className="events_details">                
                    <p>
                        We aim to help marginalized communities access opportunities through events, incubation, education, 
                        and capital.
                    </p>
                    <p>
                        Minority Programmers is an international network of community activists, students, professionals, and 
                        developers, unifying together to develop socially impactful software solutions and empower underrepresented 
                        communities through STEM education.
                    </p>
                    <button className="BTNorange2">Learn More</button>
                </div>
                <div className="events_heading">
                    <h2>Minority Programmers mission</h2> <h2>is to bring diversity through STEM education and innovation.</h2>
                    
                </div>
            </section>
        </main>
    )
}

export default Home;