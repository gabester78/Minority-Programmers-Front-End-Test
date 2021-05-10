import React, {useEffect} from "react";
import Chevron from "../assets/Back_Chevron.svg";
import Green_check from "../assets/Green_checkmark.svg";
import White_check from "../assets/White_checkmark.svg";
import { NavLink } from "react-router-dom";

const Courses_sidebar = () => {
    useEffect(()=> {
        window.scrollTo(0, 0);
    });
    return(
        <main className="sidebar_main">
            <section>
                <div className="course_header"> 
                    <NavLink to="/learn">              
                        <img src={Chevron} alt="Icon of a chevron back button" />
                    </NavLink>
                    <p>Courses</p>
                </div>
                <h5 className="courseH5">Intro to Blockchain</h5>
            </section>
            <section className="chapters">
                <h5>Week 1</h5>
                <div className="intro_container">
                    <img src={Green_check} alt="White checkmark with a green background" />
                    <p>Introduction</p>
                </div>
                <div className="intro_container">
                    <img src={Green_check} alt="White checkmark with a green background" />
                    <p>Introduction</p>
                </div>
                <div className="intro_container">
                    <img src={White_check} alt="White checkmark with a green background" />
                    <p>Introduction</p>
                </div>
            </section>
            <section className="chapters">
                <h5>Week 2</h5>
                <div className="intro_container">
                    <img src={Green_check} alt="White checkmark with a green background" />
                    <p>Introduction</p>
                </div>
                <div className="intro_container">
                    <img src={Green_check} alt="White checkmark with a green background" />
                    <p>Introduction</p>
                </div>
                <div className="intro_container">
                    <img src={White_check} alt="White checkmark with a green background" />
                    <p>Introduction</p>
                </div>
            </section>
            <section className="chapters">
                <h5>Week 3</h5>
                <div className="intro_container">
                    <img src={Green_check} alt="White checkmark with a green background" />
                    <p>Introduction</p>
                </div>
                <div className="intro_container">
                    <img src={Green_check} alt="White checkmark with a green background" />
                    <p>Introduction</p>
                </div>
                <div className="intro_container">
                    <img src={White_check} alt="White checkmark with a green background" />
                    <p>Introduction</p>
                </div>
            </section>
            <section className="chapters">
                <h5>Week 4</h5>
                <div className="intro_container">
                    <img src={Green_check} alt="White checkmark with a green background" />
                    <p>Introduction</p>
                </div>
                <div className="intro_container">
                    <img src={Green_check} alt="White checkmark with a green background" />
                    <p>Introduction</p>
                </div>
                <div className="intro_container">
                    <img src={White_check} alt="White checkmark with a green background" />
                    <p>Introduction</p>
                </div>
            </section>
            <section className="chapters">
                <h5>Week 5</h5>
                <div className="intro_container">
                    <img src={Green_check} alt="White checkmark with a green background" />
                    <p>Introduction</p>
                </div>
                <div className="intro_container">
                    <img src={Green_check} alt="White checkmark with a green background" />
                    <p>Introduction</p>
                </div>
                <div className="intro_container">
                    <img src={White_check} alt="White checkmark with a green background" />
                    <p>Introduction</p>
                </div>
            </section>
        </main>
    )
}

export default Courses_sidebar;