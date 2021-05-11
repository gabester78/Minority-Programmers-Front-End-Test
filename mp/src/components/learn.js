import React from "react";
import NavBar2 from "./nav_bar2.js"
import Learn_hero from "../assets/Group 244.svg"
import LearnData from "../learn_data.json"
import Card_Background from "../assets/Courses_Background.svg"
import { NavLink } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons'

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

const Learn = () => {
    return(
        <main>
            <NavBar2 />
            <section className="learn_hero">
                <img src={Learn_hero} alt="Graphic of a globe" />
                <div>
                    <h2>Learn high in demand IT Skills &#38; Get Crypto</h2>
                    <p>powered by <span>KoinStreet</span></p>
                </div>
            </section>
            <div className="learn_container">
                <section>
                    <div className="search_field_container">
                        <label>
                            <input className="search_field" type="text" placeholder="What event are you looking for?"  />
                            <p className="icon"><FontAwesomeIcon icon={faSearch}/></p>
                        </label>
                        <input className="submit_button" type="submit" value="Filter search" />
                        <p className="icon"><FontAwesomeIcon icon={faChevronDown}/></p>
                    </div>
                </section>
                <section>
                    <div className="learn_header">
                        <h3>My Courses</h3>
                        <div className="line"></div>    
                    </div>
                        <div>
                            <Carousel className="learn_carousel" responsive={responsive} >
                                {LearnData.map((cardDetail, index)=>{
                                    return  <div className="course_cards" style={{ backgroundImage: `url(${Card_Background})`, backgroundRepeat: 'no-repeat'}}>
                                                <div className="greenBTN">
                                                    <div className="dot"></div>
                                                    <p>{cardDetail.topBTN}</p>
                                                </div>
                                                <div className="title">                        
                                                    <h5>{cardDetail.title}</h5>
                                                    <p className="description">{cardDetail.description}</p>
                                                </div>
                                                <div className="course_details">  
                                                <NavLink to="/modules">                       
                                                    <button className="blueBTN">{cardDetail.button}</button>
                                                </NavLink>    
                                                <p>{cardDetail.modules}</p>
                                                <img src={cardDetail.bar} alt="Progress bar graphic"/>
                                                <p className="completed">{cardDetail.completed}</p>
                                                </div>
                                            </div>
                                })}
                            </Carousel>;
                        </div>
                </section>
                <section>
                    <div className="bottom_header">
                        <h3>Featured Courses</h3>
                        <div className="line"></div>    
                    </div>
                        <div>
                            <Carousel className="learn_carousel" responsive={responsive} >
                                {LearnData.map((cardDetail, index)=>{
                                    return  <div className="course_cards" style={{ backgroundImage: `url(${Card_Background})`, backgroundRepeat: 'no-repeat'}}>
                                                <div className="greenBTN">
                                                    <div className="dot"></div>
                                                    <p>{cardDetail.topBTN}</p>
                                                </div>
                                                <div className="title">                        
                                                    <h5>{cardDetail.title}</h5>
                                                    <p>{cardDetail.description}</p>
                                                </div>
                                                <div className="course_details">    
                                                    <NavLink to="/modules_white">                       
                                                        <button>{cardDetail.button}</button>
                                                    </NavLink>    
                                                    <p>{cardDetail.modules}</p>
                                                    <img src={cardDetail.bar} alt="Progress bar graphic"/>
                                                    <p className="completed">{cardDetail.completed}</p>
                                                </div>  
                                            </div>
                                })}
                            </Carousel>;
                        </div>
                    <button className="load_more">Load More</button>
                </section>
            </div>
        </main>
    )
}

export default Learn;