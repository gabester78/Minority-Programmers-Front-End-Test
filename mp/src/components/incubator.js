import React from "react";
import NavBar from "./nav_bar.js"
import Inc_hero from "../assets/inc_hero.jpg"

const Incubator = () => {
    return (
        <main>
            <NavBar />
            <section className="incubator_hero">
            <img src={Inc_hero} alt="Cell phone displaying stock market prices" />
                <div className="inc_container">
                    <h3>Invest directly into minority innovations.</h3>
                    <button className="BTNorange_inc">Learn More</button>
                </div>
            </section>
        </main>
    )
    }

export default Incubator;