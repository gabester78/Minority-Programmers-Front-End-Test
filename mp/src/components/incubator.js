import React from "react";
import NavBar from "./nav_bar.js"
import Inc_hero from "../assets/inc_hero.jpg"
import Info1 from "../assets/info_card_1.png"
import Info2 from "../assets/info_card_2.png"
import Info3 from "../assets/info_card_3.png"
import Data from "../data.json"
import { NavLink } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Incubator = () => {
    return (
        <main className="inc_main">
            <NavBar />
            <section className="incubator_hero" style={{ backgroundImage: `url(${Inc_hero})`, backgroundRepeat: 'no-repeat'}} >
                <div className="inc_container">
                    <h3>Invest directly into minority innovations.</h3>
                    <button className="BTNorange_inc">Learn More</button>
                </div>
            </section>
            <section className="card_container">
                <div className="card_intro">
                    <h4>Featured Startups</h4>
                    <p>Invest in the next billion dollar company today</p>
                </div>
                <div>
            <Carousel className="carousel_container" responsive={responsive} >
            {Data.map((cardDetail, index)=>{
                return <div className="top_cards">
                            <div className="title">                        
                                <img src={cardDetail.logo} alt="Mangoswap logo" />
                                <h5>{cardDetail.title}</h5>
                            </div>
                            <p className="description">{cardDetail.description}</p>
                            <div className="funds_container">
                                <h6>{cardDetail.funds}</h6>
                                <p>{cardDetail.completed}</p>
                            </div>
                            <p className="dollars">{cardDetail.dollars}</p>
                            <img src={cardDetail.bar} alt="Progress bar graphic"/>
                            <div className="button_container">
                                <button className="blueBTN">{cardDetail.button1}</button>
                                <NavLink to="/incubator_details">
                                    <button className="whiteBTN">{cardDetail.button2}</button>
                                </NavLink>
                            </div>
                    </div>
            })}
            </Carousel>;
            </div>
            </section>
            <section className="info_cards_container">
                <div style={{ backgroundImage: `url(${Info1})`, backgroundRepeat: 'no-repeat'}}>
                    <button >Advice a startup</button>
                </div>
                <div style={{ backgroundImage: `url(${Info2})`, backgroundRepeat: 'no-repeat'}}>
                    <button>Join Minority Ventures Cohort</button>
                </div>
                <div style={{ backgroundImage: `url(${Info3})`, backgroundRepeat: 'no-repeat'}}>
                    <button>Help &#60;Code&#47;&#62;</button>
                </div>
            </section>
            <section className="bottom_container">
                <div className="bottom_intro">
                    <h4>Upcoming Startups</h4>
                    <p>These visionary companies are on their journey to change the world</p>
                </div>
                {Data.map((cardDetail, index)=>{
                return <div className="bottom_cards">
                            <div className="title">                        
                                <img src={cardDetail.logo} alt="Mangoswap logo" />
                                <h5>{cardDetail.title}</h5>
                            </div>
                            <p className="description">{cardDetail.description}</p>
                            <div className="funds_container">
                                <h6>{cardDetail.funds}</h6>
                                <p>{cardDetail.completed}</p>
                            </div>
                            <p className="dollars">{cardDetail.dollars}</p>
                            <img src={cardDetail.bar} alt="Progress bar graphic"/>
                            <div className="button_container">
                                <button className="blueBTN">{cardDetail.button1}</button>
                                <NavLink to="/incubator_details">
                                    <button className="whiteBTN">{cardDetail.button2}</button>
                                </NavLink>
                            </div>
                    </div>
            })}
                <button className="load_more">Load More</button>
            </section>
        </main>
    )
    }

export default Incubator;