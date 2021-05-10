import React from "react";
import Sidebar from "./courses_sidebar.js";
import NavBar2 from "./nav_bar2.js";
import Avatar from "../assets/Mod_avatar.svg";
import CourseData from "../course_data.json";
import CourseCard from "../assets/Module_cards_background.svg"
import { NavLink } from "react-router-dom";


const Modules = () => {
    return(
        <main>
        <NavBar2 />
            <section className="course_container">
                <Sidebar />
                <div className="course_content">
                    <section className="course_hero">
                        <img src={Avatar} alt="Cartoon avatar of member" />
                        <div>
                            <h1>Welcome back, Shot</h1>
                            <p>75% Completed</p>
                            <NavLink to="/activity">  
                                <button className="courseBTN">Resume</button>
                            </NavLink>
                        </div>
                    </section>
                <section className="lower_content">
                    <div className="course_topics">
                        <h3 className="active">Modules</h3>
                        <h3>Calendar</h3>
                        <h3>Message</h3>
                    </div>
                    {CourseData.map((cardDetail, index)=>{
                        return  <div className="module_cards" style={{ backgroundImage: `url(${CourseCard})`, backgroundRepeat: 'no-repeat'}}>
                                    <div className="greenBTN">
                                        <p>{cardDetail.topBTN}</p>
                                    </div>
                                    <div className="title">                        
                                        <h5>{cardDetail.title}</h5>
                                        <img src={cardDetail.bar} alt="Progress bar graphic"/>
                                        <p>{cardDetail.completed}</p>
                                    </div>
                                </div>
                    })}
                </section>
                </div>
            </section>
        </main>
    )
}

export default Modules