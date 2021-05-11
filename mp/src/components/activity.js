import React from "react";
import Sidebar from "./courses_sidebar.js";
import NavBar2 from "./nav_bar2.js";
import ActivityData from "../activity_data.json";
import CourseCard from "../assets/Module_cards_background.svg";
import ProgressBar from "../assets/Activity_progress_bar.svg";
import LeftArrow from "../assets/Left_arrow.svg";
import RightArrow from "../assets/Right_arrow.svg";


const Activity = () =>{
    return(
        <main>
            <NavBar2 />
            <section className="activity_container">
                <Sidebar />
                <section className="activity_content">
                    <div className="activity_hero">
                        <h1>Week 1</h1>
                        <h4>Progress</h4>
                        <p>10/10</p>
                        <img src={ProgressBar} alt="progress bar graphic" />
                        <p>100% Complete</p>
                    </div>
                    <div className="arrow_container">
                        <img src={LeftArrow} alt="Left arrow graphic" />
                        <img src={RightArrow} alt="Left arrow graphic" />
                    </div>
                    {ActivityData.map((cardDetail, index)=>{
                        return  <div className="activity_cards" style={{ backgroundImage: `url(${CourseCard})`, backgroundRepeat: 'no-repeat'}}>                    
                                    <img src={cardDetail.screen} alt="A screenshot graphic"/>
                            
                                    <p>{cardDetail.title}</p>
                                    <img className="button" src={cardDetail.topBTN} alt="Button graphic"/>
                                </div>
                    })}
                </section>
            </section>
        </main>
    )
}

export default Activity;