import React from "react";
import NavBar from "./nav_bar.js"
import Left_arrow from "../assets/Arrow left.svg"
import Data from "../data.json"
import { NavLink } from "react-router-dom";

const Incubator_details = () => {
    return (
        <main className="inc_details">
            <NavBar />
            <section className="header">
                <div>
                    <NavLink to="/incubator">
                        <img src={Left_arrow} alt="back to incubator main arrow" />
                    </NavLink>
                </div>
                <div className="header_details">
                    <div className="title">                        
                        <img src={Data[0].logo} alt="Mangoswap logo" />
                        <h5>{Data[0].title}</h5>
                    </div>
                    <div className="funds_container">
                        <h6>{Data[0].funds}</h6>
                        <p>{Data[0].completed}</p>
                        <p className="dollars">{Data[0].dollars}</p>
                    </div>
                        <img src={Data[0].bar} alt="Progress bar graphic"/>
                </div>
            </section>
        </main>
    )
}

export default Incubator_details;